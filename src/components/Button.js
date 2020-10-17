import React from 'react';

import './Button.css'

const STYLES =[
    'btn--primary',
    'btn--outline'
]
const SIZES =[
    'btn--meduim',
    'btn--large'
]
export const Button=({
children,
type,
onClick,
buttonStyle,
buttonSize
    
})=>{
     const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0]
     const checkButtonSize= STYLES.includes(buttonSize) ? buttonSize: STYLES[0]

     return(
         <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick}  type={type}>
{children}
         </button>
     )
}