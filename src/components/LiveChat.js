import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMsg } from '../utils/ChatSlice'
import { generateName, makeid } from '../utils/Generator'

function LiveChat () {
  const [liveMsg, setLiveMsg] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => {
      sendMsg()
    }, 10000)
    return () => {
      clearTimeout(interval)
    }
  }, [])

  const chatMessage = useSelector(store => store.chat.message)

  const sendMsg = () => {
    dispatch(addMsg({
      name: generateName(),
      text: makeid(25)
    }))
  }

  return (
    <>
      <div className='w-full border mx-2 px-3 h-[590px] border-blue-400 bg-slate-50 overflow-y-scroll flex flex-col-reverse'>
        {chatMessage.map((e, index) => <ChatMsg key={index} name={e.name} text={e.text} />)}
      </div>
      <div className='w-full border mx-2 mt-1 px-3 h-[40px]'>
        <form className='w-full' onSubmit={(e) => {
          e.preventDefault()
          dispatch(addMsg({
            name: 'Hemraj Shaqawal',
            text: liveMsg
          }))
          setLiveMsg('')
        }}>
          <div className='grid grid-flow-col'>
            <input className="col-span-10 p-2 h-[30px]" type='text' value={liveMsg} onChange={(e) => setLiveMsg(e.target.value)} />
            <button className="col-span-2 ml-2 bg-green-300" >Send</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LiveChat
