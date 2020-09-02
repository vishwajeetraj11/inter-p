import React from "react";
import styled from "styled-components";

export default (props) => {

  return (
    <>
    <Card>
      <CardTitleContainer>
        <CardTitle>{props.designation}</CardTitle>
        <Carddesc>{props.desc}</Carddesc>
        <CardImg src={props.photo}></CardImg>
      </CardTitleContainer>
    </Card>
    </>
  );
};

const CardImg = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 9rem;
  position: absolute;
  top:  4rem;

`

const Card = styled.div`
border: blue 1px solid;
border-radius: 4px;
min-height: 7rem;
`
const CardTitleContainer = styled.div`
margin-top: 1rem;
margin-left: 1.1rem;
`;
const CardTitle = styled.h2`
font-size: 1.2rem;
margin-bottom: 0.3rem;
`;
const Carddesc = styled.p`
width: 61%;
color: grey;
font-size: 0.9rem;
`;
// const Icon = styled.img``;
// const IconContainer = styled.div``;
