import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const [searchParm] = useSearchParams()
  const vId = searchParm.get('v')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className='flex flex-col w-full'>
      <div className='flex  w-full p-2'>
        <div className='w-full'>
          <iframe width="1200" height="600" src={'https://www.youtube.com/embed/' + vId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <div className='w-full'>
        <CommentContainer className='w-[1200px]' />
      </div>
    </div>
  )
}

export default WatchPage
