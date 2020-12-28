import React from 'react'
import logoo from '../img/u.png'
export default function PostItem({postItem}) {


    return (
<>
        <div className='comment-box'>
            <div className='img-div'>
                <img  className='user-img' src={logoo} />
            </div>

            <div className='post-des'>
                <div className='time'>
                   <p className='username'>Username</p>
                   <p className='t'>12:40 pm</p>
                </div>
                <p className='disc'>"Loreum ipsum ................................"</p>
            </div>

           
        </div>

        {
            postItem.map((item)=>(
                <div className='comment-box'>
            <div className='img-div'>
                <img  className='user-img' src={logoo} />
            </div>

            <div className='post-des'>
                <div className='time'>
                   <p className='username'>Username</p>
                   <p className='t'>12:40 pm</p>
                </div>
                <p className='disc'>{item}</p>
            </div>
        </div>
            ))
        }

</>

    )
}
