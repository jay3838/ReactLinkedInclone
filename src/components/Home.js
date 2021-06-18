import React from 'react';
import styled from 'styled-components';
import Leftside from '../components/Leftside';
import Rightside from '../components/Rightside';
import Main from '../components/Main';


function Home() {
    return (
        <Container>
        <Section>
          <h5>
            <a>Hiring in a hurry? - </a>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </Section>
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
      </Container>
    );
}

export default Home;

const Container = styled.div`
    padding-top: 90px;
    max-width: 100%;
    /* border:1px solid red; */
    `;
const Section = styled.div`
     text-align: center;
     text-decoration: underline;
    display: flex;
    align-items:center;
    justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
    
  @media (max-width: 768px) {
    margin-top:-15px;
  }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px 5px;
    margin-top:-70px;
  }
`;
const Layout = styled.div`
  display:flex;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
   
   
  }
`;
