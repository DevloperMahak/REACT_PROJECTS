import {useContext, useEffect,} from "react";
import Post from "./Post";
import {Postlist as Postlistdata} from '../store/Post-list-store';
import Welcomemessage from "./Message";
import { useLoaderData } from "react-router-dom";

const Postlist=()=>{
  const postlist=useLoaderData();
  
    
  return (
  <>
  {postlist.length === 0 && (
    <Welcomemessage ></Welcomemessage>
    )}
  {postlist.map((post)=>(
    <Post key={post.id} post={post}/>
    ))}
</>
);
};

export const postloader=async ()=>{
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();
  return data.posts;
}

export default Postlist; 