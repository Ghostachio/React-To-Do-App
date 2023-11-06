import React from 'react';
import "../assets/icon-sun.svg"


const Form = ({onChange, onKeyPress, input}) => {
  return (
    <div className=' flex justify-center text-center'>
      <input onKeyPress={onKeyPress} onChange={onChange} value={input} 
      className=" bg-very-dark-desaturated-blue w-[500px] h-[60px] text-3xl text-light-grayish-blue pl-8 " 
      type="text" />
    </div>
  )
}

export default Form;