import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ['All','Game','NEWS','LIVE','Criket','All','Game','NEWS','LIVE','Criket','All','Game','NEWS','LIVE','Criket',];
  return (
    <div className='flex'>
      {
        list.map((ele) => <Button name={ele} />)
      }
    </div>
  )
}

export default ButtonList