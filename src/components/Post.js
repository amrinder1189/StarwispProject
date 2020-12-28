import React,{useState} from 'react'
import PostItem from './PostItem'

export default function Post() {

    const[post,setpost]=useState("");
    const[postItem,setPostItem]=useState([]);


    const HandlerPost=(e)=>{
        setpost(e.target.value)
    }

    const SubmitPost =(e)=>{
        e.preventDefault()
        setPostItem([...postItem,post]);
        setpost("")
    }

    return (
        <div className='post-box'>
            <div className='input-box'>
                <div className='input-boxx'>
                <input type='text' value={post} onChange={HandlerPost} placeholder="Share Something With Your Class..." />
                </div>
                <div className='btn-box'>
                    <p className='cancel'>Cancel</p>
                    <button type='submit' className='btnn' onClick={SubmitPost}>Share</button>
                </div>
            </div>
            <PostItem postItem={postItem}/>
        </div>
    )
}
