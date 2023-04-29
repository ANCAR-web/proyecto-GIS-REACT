import React from 'react';
import "../styles/Botones.css";
const Botones = ({data,filterCategory}) => {
  return (
    <div className='categories'>
        {data.map((boton)=>{
            return <button 
                    className='btn-category'
                    type='button'
                    key={boton}
                    onClick={()=>filterCategory(boton)}> 
                    {boton}
                    </button> 
        })}
    </div>
  )
}

export default Botones