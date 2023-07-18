import React from 'react'

function ChatMsg ({ name, text }) {
  return (
    <div className='flex items-center shadow-sm my-2 p-2'>
         <img alt='user' className='h-8' src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'/>
        <p className='font-bold px-2'>{name}</p>
        <p className='font-normal'>{text}</p>
    </div>
  )
}

export default ChatMsg
