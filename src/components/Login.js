import React from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { auth ,provider} from '../Firebase';
import {login} from '../userSlice';


function Login() {
    const dispatch = useDispatch();

    const signin = ()=>{
        auth.signInWithPopup(provider).then((result)=>{
            // console.log("hey",result);
            dispatch(
                login({
                    username:result.user.displayName,
                    profilePic:result.user.photoURL,
                    id:result.user.uid,
                })
            )
        })
        .catch((error)=>alert(error.message));
    }

    return (
       <Container>
           <Nav>
           <a href="/">
             <img src="../public/images/login-logo.svg" alt="jp" />
            </a>
            <div>
                 <Join>Join now</Join>
                <SignIn>Sign in</SignIn>
            </div>
           </Nav>

           <Section>
                 <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </Hero>
                 <Form>
                    <Google onClick={signin}>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
             </Section>

       </Container>
    );
}

export default Login;

const Container = styled.div``;

const Nav = styled.nav`
    /* border:1px solid red; */
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left:30px;
    margin-right:30px;
    margin-top:30px;
    min-width: 370px;
    flex-wrap:wrap;

    a{
        
        
        img{
            width: 150px;
            height: 50px;
            /* border:1px solid royalblue; */
            display:flex;
            align-items:center;
            margin-top:5px;
            @media (max-width: 768px) {
                width: 100px;
                height: 35px;
             
            }
        }
    }
    div{
        display:flex;
        align-items:center;
        /* border:1px solid green; */
        flex-wrap:wrap;
        padding:0px 20px 0px 20px;
        margin:0px 5px 0px 5px;
        @media (max-width: 768px) {
            padding:0px 8px 0px 8px;
            margin:0px 2px 0px 2px;
            }
    }

`;
const Join = styled.div`
    font-size: 16px;
    border-radius: 4px;
    text-align:center;
    height:35px;
    color: rgba(0, 0, 0, 0.6);
&:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;
const SignIn = styled.div`
     color: #0a66c2;
     font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    background-color: rgba(0, 0, 0, 0);
    border:1px solid blue;
    border-radius: 20px;
    text-align:center;
     &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
 

`;
const Section = styled.div`
    /* border:1px solid red; */
    display:flex;
    align-items:center;
    position:relative;
    flex-direction:column;
    /* max-width: 1128px; */
    height:100vh;
    width: 100%;
    max-width: 1128px;
    @media (max-width: 768px) {
    min-height: 50px; 
    /* width:100px;  */
  }
`;
const Hero = styled.div`
    /* border:1px solid green; */
    width: 100%;
    margin-left:70px;
    margin-top:50px;
    @media (max-width: 768px) {
        margin-top:20px;
        margin-left:0px;
        width:85%;
    }


    h1{
        
        /* border:1px solid brown; */
        font-size: 56px;
         color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        width: 55%;
        @media (max-width: 768px) {
        font-size: 20px;
        color: #2977c9;
        font-weight: 100;
        line-height: 20px;
        width: 100%;
        text-align:center;
    }
    }

img{
    /* border:1px solid red; */
    position:absolute;
    width: 500px;
    height: 500px;
    bottom: 100px;
    right: -150px;
    @media (max-width: 768px) {
        position:absolute;
         width: 350px;
        height: 350px;
        top:100px;
        left:70px;
        right:10px;
    }
    @media (max-width: 458px) {
        position:absolute;
         width: 250px;
        height: 350px;
        top:100px;
        /* left:50px; */
        /* right:10px; */
    }

}

`;
const Form = styled.div`
    margin-top: 100px;
  width: 400px;
  margin-right:550px;
  cursor:pointer;

  @media (max-width: 768px) {
    margin-top: 390px;
  width: 200px;
  margin-right:0px;
    }

`;
const Google = styled.div`
border:1px solid gray;
display:flex;
align-items:center;
justify-content:center;
width: 100%;
font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  height: 56px;
  border-radius: 28px;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    }

`;