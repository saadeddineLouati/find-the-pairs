import React from "react";
import { connect } from "react-redux";
import {
  changeNumberOfPairs,
  changeWidth,
  resetGame,
  resetCards,
  shuffleCards,
  limitCards,
  duplicateCards,
  flipAllCards,
} from "../redux/actions/index";
import { Menu, Button, Dropdown, Card, Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;
import { motion } from "framer-motion"

const menu = (props) => {
  return (
    <Menu>
      <Menu.Item
        onClick={() => {
          props.changeWidth(127);
          props.changeNumberOfPairs(6);
        }}
      >
        6 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(127);
          props.changeNumberOfPairs(8);
        }}
      >
        8 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(102);
          props.changeNumberOfPairs(10);
        }}
      >
        10 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(85.33);
          props.changeNumberOfPairs(12);
        }}
      >
        12 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(85.33);
          props.changeNumberOfPairs(15);
        }}
      >
        15 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(85.33);
          props.changeNumberOfPairs(18);
        }}
      >
        18 pairs
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.changeWidth(73.42);

          props.changeNumberOfPairs(21);
        }}
      >
        21 pairs
      </Menu.Item>
    </Menu>
  );
};

function gameStatus(props) {
  const tryString = props.numberOfAttempts === 1 ? "try" : "tries";
  if (props.numberOfAttempts > 0) {
    return (
      <StyledStatus>
        {/* {props.numberOfFoundPairs}/{props.numberOfPairs} */}
        Tries: {props.numberOfAttempts}
        {/* {tryString}. */}
      </StyledStatus>
    );
  } else {
    return <StyledStatus>
      Tries: {0}
    </StyledStatus>;
  }
}

function Control(props) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1.2, 1.1, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }} transition={{ duration: 0.5, delay: 1.4 }}
    >

      <Card
        title={
          <>
            <span>
              Score
        <br />
              <span style={{ marginLeft: '10px' }}>
                <b style={{ color: '#2094fc' }}> {props.numberOfFoundPairs || 0}</b> / {props.numberOfPairs}
              </span>
            </span>
            <br />
            <small style={{ fontSize: '10px' }}>
              {gameStatus(props)}
            </small>
          </>
        } bordered={false}>
        <Typography >
          <Title level={5}>
            Options
          </Title>
        </Typography>
      Size: <Dropdown overlay={menu(props)} placement="bottomCenter" >
          <Button style={{ width: '98px' }}>{props.numberOfPairs} pairs</Button>
        </Dropdown>

        <Button
          style={{ display: "block", marginTop: "20px" }}
          type="primary"
          size="small"
          onClick={() => {
            props.resetGame();
            props.resetCards();
            props.shuffleCards();
            props.limitCards();
            props.duplicateCards();
            props.shuffleCards();

            setTimeout(() => {
              props.flipAllCards();
            }, 1500);
          }}
        >
          Restart
      </Button>
      </Card>
    </motion.div>
  );
}

const mapStateToProps = (state) => ({
  numberOfPairs: state.numberOfPairs,
  numberOfFoundPairs: state.numberOfFoundPairs,
  numberOfAttempts: state.numberOfAttempts,
});

const mapDispatchToProps = (dispatch) => ({
  changeNumberOfPairs: (number) => dispatch(changeNumberOfPairs(number)),
  changeWidth: (width) => dispatch(changeWidth(width)),
  resetGame: () => dispatch(resetGame()),
  resetCards: () => dispatch(resetCards()),
  shuffleCards: () => dispatch(shuffleCards()),
  duplicateCards: () => dispatch(duplicateCards()),
  limitCards: () => dispatch(limitCards()),
  flipAllCards: () => dispatch(flipAllCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Control);
const ControlContainer = styled.div`
  position: relative;
  top: 25%;
  transform: translateY(-25%);
  background: white;
`;

const StyledStatus = styled.p`
  display: block;
`;
