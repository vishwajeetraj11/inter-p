import React, {useState} from "react";
import Card from "./Card";
import Header from "./Header";
import "./Jobs.css";
import styled from "styled-components";
function Jobs() {

  const [toLog, setToLog] = useState([]);
  const onCheck = (e) => {
    let index = e.target.getAttribute("id");
    index =  index.replace("checkbox", "")
    const checked = e.target.checked;
    if(checked) {
      // toLog.push(data[index])
      setToLog(toLog.concat(data[index]))
    } else {
      // toLog = toLog.filter( (element) => element !== data[index] )
      setToLog(toLog.filter((element) => element !== data[index]))
    }
    
  };

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(toLog);

  }

 
  
  return (
    <>
    <Main>
    <Container>
      <Header />
      <form onSubmit={onSubmit}>
        <CardsContainer>
          {data.map((card, index) => {
            return (
              <CardContainer key={index}>
                <Label htmlFor={index+'checkbox'}>
                  <Card
                    designation={card.designation}
                    desc={card.description}
                    key={index}
                    photo={card.photo}
                  />
                </Label>                
                <input type="checkbox" className="checkbox" id={index+'checkbox'} onChange={onCheck} />
                
              </CardContainer>
            );
          })}
        </CardsContainer>
      </form>
      </Container>
        <SubmitArea>
        <JobText>234 JOBS Found</JobText>
        <Button type="submit" onClick={onSubmit}>save & update</Button>
        </SubmitArea>
    </Main>
    </>
  );
}

const SubmitArea = styled.div`
bottom: 0;
position: absolute;
width: 100%;
text-align: center;
padding: 1rem;
background-color: #fff;
box-shadow: 0 1rem 3rem rgba(0,0,0,0.15)
`

const JobText=styled.p`
color: red;
font-size: 1.3rem;
margin-bottom: 1rem;
font-weight: 500;
text-transform: uppercase;
`

const Button = styled.button`
border: 0;
width: 90%;
background-color: #467FFB;
color: #fff;
padding: 1rem;
border-radius: 20px;
text-transform:uppercase;

`

const Label = styled.label``;

const Main = styled.div`
  width: 380px;
  margin: 0 auto;
  /* padding: 1.4rem; */
  /* background-color: greenyellow; */
  height: 100vh;
  position: relative;
`;

const Container = styled.div`
padding: 1.4rem;
`

const CardContainer = styled.div`
  position: relative;
`;

const CardsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export default Jobs;

const data = [
  {
    id: "3423",
    photo: require('../assets/4.png'),
    designation: "Driver",
    description: '"LMV, HMV, etc"',
  },
  {
    id: "3424",
    designation: "Plumber",
    photo: require('../assets/8.png'),
    description: "Residential Plumber, Service Repair, etc",
  },
  {
    id: "3425",
    designation: "Waiter",
    photo: require('../assets/4.png'),
    description: "Restaurant, Hospitality, etc",
  },
  {
    id: "3426",
    designation: "Cook/Chef",
    photo: require('../assets/6.png'),
    description: "Head Chef, Cook, etc",
  },
  {
    id: "3427",
    designation: "Security Gaurd",
    photo: require('../assets/5.png'),
    description: "Gunman, Bouncer, etc",
  },
  {
    id: "3428",
    designation: "Cleaning",
    photo: require('../assets/4.png'),
    description: "Housekeeping, etc",
  },
  {
    id: "3429",
    designation: "Waiter",
    photo: require('../assets/4.png'),
    description: "Restaurant, Hospitality, etc",
  },
  {
    id: "3430",
    designation: "Cook/Chef",
    photo: require('../assets/6.png'),
    description: "Head Chef, Cook, etc",
  },
  {
    id: "3431",
    designation: "Security Gaurd",
    photo: require('../assets/5.png'),
    description: "Gunman, Bouncer, etc",
  },
  {
    id: "3432",
    designation: "Cleaning",
    photo: require('../assets/4.png'),
    description: "Housekeeping, etc",
  },
  {
    id: "3425",
    designation: "Waiter",
    photo: require('../assets/4.png'),
    description: "Restaurant, Hospitality, etc",
  },
  {
    id: "3426",
    designation: "Cook/Chef",
    photo: require('../assets/6.png'),
    description: "Head Chef, Cook, etc",
  },
];
