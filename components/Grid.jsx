import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import {
  LIMIT_CARDS,
  SHUFFLE,
  DUPLICATE_CARDS,
  RESET_CARDS,
  FLIP_ALL_CARDS,
  FLIP_CARD,
} from "../redux/constants/action-types";
import { motion } from "framer-motion"

import { flipCard } from "../redux/actions/index";
import { Modal } from "antd";

function Grid(props) {
  useEffect(() => {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();

    setTimeout(() => {
      props.flipAllCards();
    }, 5000);
  }, [props.numberOfPairs]);

  useEffect(() => {
    if (props.matching) {
      setTimeout(() => {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);

  useEffect(() => {
    if (props.numberOfFoundPairs === props.numberOfPairs) {
      setTimeout(() => {
        // alert("YOU WIN ");
        // setGameOver(true)
        Modal.success({
          content: 'Congrats, you WIN',
        });
      }, 500);
    }
  }, [props.numberOfFoundPairs]);

  return (
    //   grid Item
    <GridContainer>
      {props.cards.map((el, index) => {
        // matching  and isActive
        // matching and notActive
        if (el.isActive || el.timed) {
          return (
            <ImageWrapper color="#bbb" width={props.width} key={"div" + index}>
              <img key={el.src + index} data-index={el.index} src={el.src} />
            </ImageWrapper>
          );
        } else if (el.match) {
          return (
            <ImageWrapper
              color="transparent"
              width={props.width}
              key={"div" + index}
            >

            </ImageWrapper>
          );
        } else {
          return (
            <ImageWrapper2
              color="#2094fc"
              width={props.width}
              key={"div" + index}
              onClick={() => {
                if (!props.matching) {
                  props.flipCard(el.index);
                }
              }}
            >
              <h1 style={{
                color: 'white',
                fontSize: '49px',
                padding: '15%'
              }}>?</h1>
            </ImageWrapper2>
          );
        }
      })}
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  numberOfPairs: state.numberOfPairs,
  numberOfAttempts: state.numberOfAttempts,
  numberOfFoundPairs: state.numberOfFoundPairs,
  cards: state.cards,
  clickCounter: state.clickCounter,
  matching: state.matching,
  width: state.width,
  matching: state.matching,
});

const mapDispatchToProps = (dispatch) => ({
  shuffleCards: () => dispatch({ type: SHUFFLE }),
  limitCards: () => dispatch({ type: LIMIT_CARDS }),
  duplicateCards: () => dispatch({ type: DUPLICATE_CARDS }),
  resetCards: () => dispatch({ type: RESET_CARDS }),
  flipAllCards: () => dispatch({ type: FLIP_ALL_CARDS }),
  flipCard: (index) => dispatch(flipCard(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

// ---------------------------------
const GridContainer = styled.div`
  width: 641px;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  display:table-cell;
`;

const fade = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const flipHorizontalBottom = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(-360deg);
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.width + "px"};
  background-color: ${(props) => props.color};
  filter:drop-shadow(0px 0px 1px grey);
  border-radius:3px;
  overflow: hidden;
  animation: ${fade} 0.7s linear;

  img,
  .blank {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.width + "px"};
    padding: 1px;
  }
`;

const ImageWrapper2 = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.width + "px"};
  background-color: ${(props) => props.color};
  filter:drop-shadow(0px 0px 1px grey);
  border-radius:3px;
  overflow: hidden;
	-webkit-animation: ${flipHorizontalBottom} 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: ${flipHorizontalBottom} 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;

  img,
  .blank {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.width + "px"};
    padding: 1px;
  }
`;


ImageWrapper.defaultProps = {
  width: 125,
};

ImageWrapper2.defaultProps = {
  width: 125,
};
