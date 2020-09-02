import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

export default withRouter((props) => {

  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>Job Category</HeaderTitle>
        <CloseButton onClick={() => props.history.push("/")}>&times;</CloseButton>
      </HeaderWrapper>
    </>
  );
});

const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  padding-top: 0.5rem;
  text-align: center;
`;

const CloseButton = styled.button`
  border: 0;
  border-radius: 0;
  background-color: #fff;
  font-size: 4rem;
  font-weight: 300;
  line-height: 1;
  margin-right: auto;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
const HeaderWrapper = styled.div`
  position: relative;
  /* display: flex; */
  /* align-items: center;  */
`;
