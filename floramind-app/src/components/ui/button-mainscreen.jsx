import React from 'react'
import {useNavigate} from 'react-router-dom'
import './button-mainscreen.css'

const Button = ({text, className, to, type="button"}) => {
    const navigate=useNavigate()
    return (
        <button type={type} 
                className={className} 
                onClick = {() => navigate(to)}>
            {text}
        </button>
    );
}

export default Button