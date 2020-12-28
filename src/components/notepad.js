import React from 'react'
import NotItem from './notepad-item'

function Notepad({text,setText,item,setItem,title,setTitle,titt,setTitt}){
    
    const HandleText = (e) =>{
        setText(e.target.value)
      
    }
    const HandleTitle = (e) =>{
        setTitle(e.target.value)
      
    }

    const submitNotepad = (e)=>{
        e.preventDefault()

        setTitt([...titt,title])
        setTitle("")

        setItem([...item,text])
        setText("")
    }

    const appearform = ()=>{
        document.getElementById("form").classList.toggle("appear");
    }

return(

    <div className='notepad'>
        <p className='notepad-heading'>Notepad</p>
        <NotItem  items={item} titt={titt}/>

        <form className='notpad-form' id='form'>
            <input type='text' className='title-field' value={title} onChange={HandleTitle} />
            <input type='text'  className='notpad-field' value={text} onChange={HandleText}/>
            <button type='submit' className='btn' onClick={submitNotepad}>Submit</button>
            
        </form>
        <button className='button' onClick={appearform}>+</button>

    </div>
)
}

export default Notepad;