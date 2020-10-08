import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col, Layout, Row, Typography } from "antd";
import styled from "styled-components";
import Control from "../components/Control";
import Grid from "../components/Grid";
const { Title } = Typography;

import { LIMIT_CARDS } from "../redux/constants/action-types";
const { Content, Sider } = Layout;
import { motion } from "framer-motion"

function App(props) {
  return (
    <Layout style={{ width: "100%", margin: "0 auto" }}>
      <motion.Typography style={{ textAlignLast: "center" }}
        animate={{
          scale: [1, 1.1, 1.2, 1.1, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>
          Find the pairs
          </Title>
      </motion.Typography>
      <Row justify="center" align="top">
        <Col>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }} transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Content>
              <Grid />
            </Content>
          </motion.div>
        </Col>
        <Col>
          <Control />
        </Col>
      </Row>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  numberOfPairs: state.numberOfPairs,
});

const mapDispatchToProps = (dispatch) => ({
  limitCards: () => dispatch({ type: LIMIT_CARDS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
