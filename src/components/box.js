import React from 'react'

const Box = (props)=>{
return(

    <div className='box-small'>
        <p>{props.month}</p>
        <hr width='100%' />
        <p className='p7'><b>+7.8%</b></p>
    </div>

)}

export default Box;