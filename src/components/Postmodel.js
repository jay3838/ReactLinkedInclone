import React, { useState } from 'react';
import styled from 'styled-components';
import Close from '@material-ui/icons/Close';
import Image from '@material-ui/icons/Image';
import Video from '@material-ui/icons/VideoCall';
import { Avatar ,Button,IconButton} from '@material-ui/core';
import firebase from 'firebase';
import {db,storage} from '../Firebase';
import { v4 as uuid} from 'uuid';
import { useDispatch} from 'react-redux';



function Postmodel({sharemodel,handleClick}) {
   

    const [edit,setedit] = useState("");
    const [shareimg,setshareimg] =useState("");
    const [videourl,setvideourl] = useState("");
    const [acces,setacces] = useState("");


    const jp  = (e) =>{
        const image = e.target.files[0];

        if(image==="" || image===undefined){
            alert("not image");
        }
        setshareimg(image);
    }
    // console.log("hey",shareimg);

    const switcharea = (area) =>{
        setshareimg("");
        setvideourl("");
        setacces(area);

    }

    const reset = (e) =>{
        setedit("");
        setshareimg("");
        setvideourl("");
        setacces("");

        handleClick(e);
    }

    const sendPost = (e) =>{
      
        if(shareimg != ""){
            const upload = storage.ref(`images/${shareimg.name}`).put(shareimg);

            upload.on('state__changed',(snapshot) =>{
                const progress =(snapshot.bytesTransferred/snapshot.totalBytes) *100;
                // console.log(`progrees:${progress}%`);
                if(snapshot.state === 'RUNNING'){
                    // console.log(`progrees:${progress}%`);
                }
            },
            (error)=>{
                     console.log(error);
                 },

            async ()=>{
              const url= await upload.snapshot.ref.getDownloadURL();
              db.collection('posts').add({
                            acter:{
                               title:"hi",
                               info:"hello jay",
                                timestamp:firebase.firestore.FieldValue.serverTimestamp(),                         
                               },
                            imageUrl:url,
                            videourl:videourl,
                             description:edit,
                        
                               
                        });
        

            }

            
            );
            

            handleClick(e);

        }

        else if(videourl){
            db.collection('posts').add({
                acter:{
                   title:"hi",
                   info:"hello jay",
                    timestamp:firebase.firestore.FieldValue.serverTimestamp(),                         
                   },
                imageUrl:"",
                videourl:videourl,
                 description:edit,
            
                   
            });
            

            handleClick(e);


        }



        //snapchat ma bi a rite karyu che upar value alg karyu

        // if(shareimg!=""){

        //     const id = uuid();
        //     const uploadTask = storage.ref(`posts/${id}`).put(shareimg);
     
        //      uploadTask.on('state_changed',null,(error)=>{
        //          console.log(error);
        //      },
        //      ()=>{
        //         storage.ref('posts').child(id).getDownloadURL().then((url)=>{
               
        //             db.collection('posts').add({
        //                 acter:{
        //                    title:"hi",
        //                    info:"hello jay",
        //                     timestamp:firebase.firestore.FieldValue.serverTimestamp(),                         
        //                    },
        //                 imageUrl:url,
        //                 videourl:videourl,
        //                  description:edit,
                    
                           
        //             });
    
        //         })        
                 
        //      })
        // }
        // else if(videourl){
        //     db.collection('posts').add({
        //         acter:{
        //            title:"hi",
        //            info:"hello jay",
        //             timestamp:firebase.firestore.FieldValue.serverTimestamp(),                         
        //            },
        //         imageUrl:"",
        //         videourl:videourl,
        //          description:edit,
            
                   
        //     });


        // }
  

    }
 
    return (
    
        <>
        {
            sharemodel === "open" && (

        <Container>
            <Content>
           <Header>
               <h2>Create post</h2>
               {/* <button onClick={(e)=>reset(e)}>
                   jp
               </button> */}
               <Button  onClick={(e)=>reset(e)} >
                 <Close  />
               </Button>
           </Header>
 
           <Sharedcontent>
             <Userinfo>
                 <IconButton>
                     <Avatar/>
                 </IconButton>
                 <span>Name</span>
             </Userinfo>
             <textarea  rows="10" vlaue={edit} onChange={(e)=>setedit(e.target.value)} placeholder="What do you want to  talk about?"></textarea>
            {
                acces === "image" ? (

             <Uploadimage>

        
                 <input type="file"
                    accept="image/gif ,image/jpeg, image/png"
                    name="image"
                    id="file"
                    style={{display:"none"}}
                    onChange={jp}

                 />
                 <p>
                     <label htmlFor="file">Select image to Share</label>
                 </p>
                 {shareimg && <img src={URL.createObjectURL(shareimg)} />}
                 </Uploadimage> 
                )
                 : (
                    acces === "video" && (
                <>
                 <input type="text"
                   placeholder="Enter url video"
                    vlaue={videourl}
                    onChange={(e)=> setvideourl(e.target.value)}

                 />


                 {videourl && (
                     <ReactPlayer>
                       {/* <video width={"100%"}  src={videourl} controls/> */}
                       <iframe  width="100%"  height="300px" src={videourl} allow="autoplay; encrypted-media">
                            </iframe>
                    
                     </ReactPlayer>
                    // <ReactPlayer width={"100%"} url={videourl}  controls/>
                    
                 )}
                 </>
                 ))
            }

           
           </Sharedcontent>
 
           <Sharecreation>
               <div className='jp'>
               <Button  onClick={(e)=>switcharea("image")} >
                 <Image/>
               </Button>
               <Button  onClick={(e)=>switcharea("video")} >
               <Video/>
               </Button>
               {/* <IconButton>
               </IconButton> */}
               {/* <IconButton>
               </IconButton> */}
               </div>
               <div className="jd"> 
                 <button  onClick={sendPost} >Post</button>
               </div>
           </Sharecreation>
            </Content>
        </Container>
 
            )}
        </>
         );
}

export default Postmodel;

const Container = styled.div`
    background-color:rgba(0,0,0,0.8);
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:9999;
    color:white;
    position:fixed;
    display:flex;  
    justify-content:center;
`;

const Content = styled.div`
    background-color:white;
    width:100%;
    max-width:522px;
    margin-top:30px;
    height:71%;
    display:flex;
    color:black;
    overflow-y:auto;
    
    flex-direction:column;
    border:1px solid grey;
    border-radius:5px;

    -ms-overflow-style: none; 
    /* flex-wrap:wrap; */

    ::-webkit-scrollbar {
    display: none; 
}
    

`
;
const Header = styled.div`
    /* border:1px solid red; */
    width:100%;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid lightgrey;
    h2{
        margin-left:10px;
        font-size:20px;
        color:grey;
    }
    .MuiSvgIcon-root{
        border:1px solid lightgrey; 
    }

`;
const Sharedcontent = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px 30px 10px 30px;
`;
const Userinfo = styled.div`
    margin-left:-10px;
    margin-top:10px;    
    margin-bottom:10px;    
    span{
        font-weight:bold;
    }
`;
const Sharecreation = styled.div`
  
        display:flex;
        width:100%;
        /* width:auto; */
        max-width:34%;
        /* display:block; */
        min-width:522px;
        position:absolute;
        top:475px;
        background-color:white;
        /* border:1px solid red; */
        align-items:center;
        justify-content:space-between;
        @media (max-width: 768px) {
            top:400px;
               
        } 

    
    .jp{
        margin-left:30px;
      


    }
    .jd{
        margin-right:30px;
        button{
            background-color:blue;
            color:white;
            width:60px;
            height:40px;
            /* padding:10px 10px 10px 10px; */
            border-radius:40%;
        }

    }

    .MuiSvgIcon-root{
        border:1px solid lightgrey; 
    }
  
`;


const Uploadimage = styled.div`
    text-align:center;
    img{
        width:100%;
        height:200px;
    }
`;

const ReactPlayer = styled.div``;