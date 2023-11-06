import React from 'react'
import "../css/BtnClear.css"

const BtnClear = (props) => (
    <button className='btnClear' onClick={props.manejarClear}>
        {props.children}
    </button>
);

export default BtnClear