import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Imageicon from '@material-ui/icons/Image';
import VideoCall from '@material-ui/icons/VideoCall';
import Event from '@material-ui/icons/Event';
import Ac from '@material-ui/icons/Archive';
import Postmodel from '../components/Postmodel';    
import { useSelector } from 'react-redux';
import {selectuser} from '../userSlice';
import  { db } from '../Firebase';
import Data from './Data';


function Main() {
   
    const [sharemodel,setSharemodel] = useState("close");
    const user = useSelector(selectuser);

    const [posts,setposts] = useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>{
          setposts(snapshot.docs.map(doc=>(doc.data()
            )
          ))
        })
      },[]);


    const handleClick= (e) =>{
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }


        switch(sharemodel){
            case 'close':
                setSharemodel('open');
            break;   
            case 'open':
                setSharemodel('close');
            break;
            default:
                setSharemodel('close');
                break;
        }
    }
    
    return (
        <Container>
            <ShareBox>
                <h4>Share</h4>
                <div className="jp">
                    <img src={user.profilePic} alt=""/>
                    <button onClick={handleClick}>Start a post</button>
                </div>
                <div className="jd">
                    <button>
                       <Imageicon/>
                        <span>Photo</span>
                    </button>
                    <button>
                     <VideoCall className="c1"/>
                        <span>Video</span>
                    </button>
                    <button>
                        <Event className="c2"/>
                        <span>Event</span>
                    </button>
                    <button>
                        <Ac className="c3"/>
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>

          
              
           
            {posts.map((post) => (
            <Data
              title={post.acter.title}
              info={post.acter.info}
              timestamp={post.acter.timestamp}
              description={post.description}
              imageurl={post.imageUrl}
              videourl={post.videourl}
            />
          ))}
         
          
           
                <Postmodel sharemodel={sharemodel} handleClick={handleClick}/>
           
    </Container>
    );
}

export default Main;

const Container  = styled.div`
    /* position:relative; */
    height:70vh;
    display:flex;
    flex-direction:column;
    flex:0.5;
    margin-right:10px;

    
`;

const ShareBox  = styled.div`
    border:1px solid lightgrey;
     background-color:white;
    text-align:center;
    h4{
        color:gray;
        margin-bottom:5px;
    }
    .jp{
        display:flex;
        align-items:center;
        margin-left:10px;
       margin-top:10px;
       margin-bottom:20px;
        img{
            width: 50px;
             height: 50px;
             border-radius: 50%;
        }
        button{
            width:85%;
            height:40px;
            border-radius:20px;
            margin-left:20px;
            background-color:white; 
            text-align:left;
            @media (max-width: 768px) {
               width:80%;
            }
        }
    }
    .jd{
        display:flex;
        /* border:1px solid red; */
        align-items:center;
        justify-content:space-evenly;
        height:40px;    
       button{
           background-color:white;
           border:none;
           color:blue;
           display:flex;
           align-items:center;
        

       }
       span{
           margin-left:10px;
       }
       .c1.MuiSvgIcon-root{
        color:green;
       }
       .c2.MuiSvgIcon-root{
           color:yellow;

       }
       .c3.MuiSvgIcon-root{
           color:pink;

       }


    }

`;

