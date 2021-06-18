import React from 'react';
import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Comment from '@material-ui/icons/Comment';
import Share from '@material-ui/icons/Share';
import Send from '@material-ui/icons/Send';
import { useSelector } from 'react-redux';
import {selectuser} from '../userSlice';



function Data({title,info,timestamp,imageurl,videourl,description}) {
    const user = useSelector(selectuser);
    return (
        <Article>
        <ShareActor>
            <a>
                <img src={user.profilePic} alt="jp"/>
          
                <div>
                    <span>{title}</span>
                    <span>{info}</span>
                    <span>timestamp</span>
                </div>
                 
                </a>
            <button>
                <MoreHorizIcon/>
            </button>
        </ShareActor>

        <Description>{description}</Description>

        
       
            <Sharedimg>
                <a>
                    {
                        !imageurl && videourl ?(
                            <div className="video">
                                <iframe  width="100%"  height="300px" src={videourl} allow="autoplay; encrypted-media">
                            </iframe>
                            </div>

                        ):(

                          imageurl && <img src={imageurl} alt="image1"/>
                        )
                    }
                    
                </a>
            </Sharedimg>

       
       
        
        <SocialCounts>
            
                <button>
                     <ThumbUpIcon/>
                     <span>75</span>
                </button>
           
          
                <a>2comments</a>

        </SocialCounts>

        <Socailaction>
        <button>
            <ThumbUpIcon/>
            <span>Like</span>
        </button>
        <button>
            <Comment/>
            <span>Comments</span>
        </button>
        <button>
            <Share/>
            <span>Share</span>
        </button>
        <button>
           <Send/>
            <span>Send</span>
        </button>
        </Socailaction>

    </Article>
  
    );
}

export default Data;

const Article  = styled.div`
    border:1px solid lightgrey;
    background-color:white;
    margin-top:10px;
     
`;
const ShareActor  = styled.div`
    display:flex;
    /* border:1px solid red; */
    height:90px;
    margin-top:10px;
    background-color:white;
    a{
        display:flex;
        flex:1;
        /* align-items:center; */
        /* margin-top:10px;  */
        
       img{
            width: 50px;
             height:70px;
             border-radius:20%;
             margin-left:10px;
             margin-right:20px;
        }
        div{
            margin-top:10px;
            span{
                display:flex;
                /* border:1px solid red; */
            }
        }

    }
    button{
        height:30px;
        background-color:white;
        border:none;
        /* margin-top:3%; */

    }
    
`;
const Description  = styled.div`
    /* margin-top:10px; */
    margin-left:10px;
    
`;
const Sharedimg  = styled.div`
    img{
        object-fit:cover;
        width:100%;
        height:300px;
        padding:10px 0px 10px 0px;
    }
    a{

    .video{
        object-fit:cover;
        width:100%;
        height:300px;
        padding:10px 0px 10px 0px;
    }
    }
`;
const SocialCounts  = styled.div`
    display:flex;
    margin-left:10px;
    margin-bottom:20px;
    button{
        display:flex;
        align-items:center;
        border:none;
        background-color:white;
    }
    a{
        display:flex;
        align-items:center;
        margin-left:10px;
    }
`;
const Socailaction  = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:40px;   
    margin-bottom:10px;
   

  
    button{
        display:flex;
    /* border:1px solid red; */
        align-items:center;
        width:100%;
        background-color:white;
        border:none;
        /* text-align:center; */
        margin-left:10px;
        padding:0px 20px 0px 20px; 
        color:blue;
        @media (max-width: 768px) {
            margin-left:0px;
            padding:0px 5px 0px 2px; 
               
        } 
    
    .MuiSvgIcon-root{
        margin-left:20px;   
    }
    }
    span{
        margin-left:15px;
    }

`;
