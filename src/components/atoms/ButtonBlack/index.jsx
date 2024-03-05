import React from 'react'

const ButtonBlack = ({children}) => {
  return (
    <button className='border px-4 py-1.5 rounded-full bg-black text-white hover:bg-black/60 transition-all'>{children}</button>
  )
}

export default ButtonBlack