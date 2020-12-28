import React from 'react'


const NotItem = ({items,titt})=>{
    
return(
    <div className='not'>

        <div className='title-dis'>
            <div>{
                titt.map((titt)=>(
                    <div className='title'>{titt}</div>
                ))
            }</div>
            <div>
            {items.map((item)=>(
            <div className='description'>{item}</div>
        ))}</div>
        </div>
    </div>
)
}

export default NotItem;