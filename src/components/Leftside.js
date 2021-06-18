import React from 'react';
import styled from 'styled-components';

function Leftside() {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                         <Photo />
                        <Link>Welcome, there!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
         
            <Widget>
                <a>
                    <div>
                    <span>Connections</span>
                    <span>Grow your network</span>
                    </div>
                    <img src="/images/widget-icon.svg" alt="" />
                </a>
            </Widget>
            <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>

        </ArtCard>
    


            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt="" />
                    </span>
                 </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
           
    
        </Container>
    
    );
}

export default Leftside;

const Container  = styled.div`
    /* border:1px solid red; */
    height:70vh;
    flex:0.25;
   
`;
const ArtCard = styled.div`
    /* position: relative; */
    background-color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    text-align: center;
    overflow: hidden;
    margin-right:10px;

`;
const UserInfo = styled.div`
     border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px 12px;
`;
const CardBackground = styled.div`
      background: url("/images/card-bg.svg");
      background-position: center;
      background-size: 462px;
      height:54px;
`;
const Photo = styled.div`
      background-image: url("/images/photo.svg");
      background-color:white;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 60%;
        width: 72px;
        height: 72px;
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: none;
        margin:-38px auto 12px;
`;
const Link = styled.div`
     font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    a{
        display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div{
        display:flex;
        flex-direction:column;
        text-align:left;

        span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    svg {
    color: rgba(0, 0, 0, 1);
  }
`;
const Item = styled.div`
    border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px;
  font-size: 12px;
  :hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled.div`
 text-align: left;
  display: flex;
  flex-direction: column;
  background-color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    margin-right:10px;
    margin-top:20px;

  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    :hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;
