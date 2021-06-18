import React from 'react';
import styled from 'styled-components';

function Rightside() {
    return (
        <Container>
        <FollowCard>
          <Title>
            <h2>Add to your feed</h2>
            <img src="/images/feed-icon.svg" alt="" />
          </Title>
  
          <FeedList>
            <li>
              <a>
                <Avatar />
              </a>
              <div>
                <span>#Linkedin</span>
                <button>Follow</button>
              </div>
            </li>
            <li>
              <a>
                <Avatar />
              </a>
              <div>
                <span>#Video</span>
                <button>Follow</button>
              </div>
            </li>
          </FeedList>
  
          <Recommendation>
            View all recommendations
            <img src="/images/right-icon.svg" alt="" />
          </Recommendation>
        </FollowCard>
        <BannerCard>
          <img
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt=""
          />
        </BannerCard>
      </Container>
    );
}

export default Rightside;

const Container  = styled.div`

/* border:1px solid yellow; */
    height:70vh;
    display:flex;
    flex-direction:column;
    flex:0.25;
    @media (max-width: 768px) {
    margin-top:10px;
    margin-right:10px;
  }
    
`;

const FollowCard  = styled.div`
     background-color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    /* text-align: center; */
    margin-bottom: 8px;
    padding: 12px;
`;

const Title  = styled.div`
    display:flex;
    align-items: center;
  justify-content: space-between;
  font-size: 10px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  margin-left:20px;
  img{
      margin-right:20px;
  }
`;
const FeedList  = styled.div`
 margin-bottom: 10px;

 
    li{
        display:flex;
        align-items:center;
        padding:10px;
        margin-right:10px;
        div {
      display: flex;
      flex-direction: column;
    }
    button{
        color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      border-radius: 15px;
      font-weight: 600;
      outline: none;
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
    }
    }

`;
const Avatar  = styled.div`
    background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const Recommendation  = styled.div`
     color: #0a66c2;
  font-size: 14px;
  display:flex;
`;
const BannerCard  = styled.div`
 background-color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    text-align: center;
    margin-top:10px;
    padding:12px 12px 12px 12px;
    img {
    width: 100%;
    height: 100%;
  }
`;

