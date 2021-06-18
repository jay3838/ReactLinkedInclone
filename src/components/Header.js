import React from 'react';
import styled from 'styled-components';
import { auth } from '../Firebase';

function Header() {
    return (
       <Container>
           <Content>
           <Logo>
                <a href="/home">
                <img src="/images/home-logo.svg" alt="" />
                </a>
            </Logo>
            <Search>
                <div>
                    <input type="text" placeholder="Search" />
                </div>
                <SearchIcon>
                    <img src="/images/search-icon.svg" alt="" />
                </SearchIcon>
            </Search>
            <Nav>
                 <NavListWrap>
                    <NavList className="active">
                    <a>
                        <img src="/images/nav-home.svg" alt="" />
                         <span>Home</span>
                    </a>
                    </NavList>

                    <NavList>
                    <a>
                        <img src="/images/nav-network.svg" alt="" />
                        <span>My Network</span>
                    </a>
                    </NavList>

                    <NavList>
                    <a>
                        <img src="/images/nav-jobs.svg" alt="" />
                        <span>Jobs</span>
                    </a>
                    </NavList>

                    <NavList>
                    <a>
                        <img src="/images/nav-messaging.svg" alt="" />
                        <span>Messaging</span>
                    </a>
                    </NavList>

                    <NavList>
                    <a>
                        <img src="/images/nav-notifications.svg" alt="" />
                        <span>Notifications</span>
                    </a>
                    </NavList>

                    <User>
                    <a>
                        <img src="/images/user.svg" alt="" />
                        <span>Me</span>
                        <img src="/images/down-icon.svg" alt="" />
                    </a>

                    <SignOut onClick={()=>auth.signOut()}>
                        <a>Sign Out</a>
                    </SignOut>
                    </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>

           </Content>
       </Container>
    );
}

export default Header;


const Container = styled.div`
   background-color: white;
   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
   position: fixed;
   width: 95vw;
   padding: 0 24px;
   top:0px; 
   @media (max-width: 768px) {
    /* background-color:transparent; */
    
    }
 
`;

const Content = styled.div`
/* border:1px solid red; */
display: flex;
align-items: center;
max-width: 1128px;
`;

const Logo = styled.span`
/* border:1px solid red; */
font-size: 0px;
margin-right: 8px;
@media (max-width: 768px) {
      margin-left:40px;
    }
`;

const Search = styled.div`
/* border:1px solid red;   */
  position: relative;

  @media (max-width: 768px) {
      margin-left:40px;
    }
  div{
    /* max-width:280px; */
    input{
      border: none;
      background-color: #eef3f8;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      border-color: #dce6f1;
      height: 34px;
      padding: 0 8px 0 40px;
    }
  }

 
`;

const SearchIcon = styled.div`
   position: absolute;
   top: 10px;
  left: 2px;
  z-index: 1;
  border-radius: 0 2px 2px 0;
`;

const Nav = styled.nav`
   margin-left: auto;
   display:block;
   /* position:relative; */
   @media (max-width: 768px) {
    position: fixed  ;
    /* position:absolute; */
    left: 0;
    bottom:0;
    /* top: 470px; */
    background: white;
    width:100%;
  
  }

`;

const NavListWrap = styled.ul`
/* border:1px solid green; */
  display: flex;
  flex-wrap: nowrap;
  .active {
    span:after {
      content:"";
      /* transform: scaleX(1); */
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      /* transition: transform 0.2s ease-in-out; */
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
  
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

   

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width:50px;
      /* min-width: 20px; */
    }
  }

    :hover{
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
    }
  
  
`;

const SignOut = styled.div`
 position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  `;

const User = styled(NavList)`
 
 a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
  
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);

`;
