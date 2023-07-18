import React, { useEffect, useState } from 'react'
import { mostPopularVideo } from '../utils/Constant'
import VideoCard, { AdVideoCard } from './VideoCard'
import { Link } from 'react-router-dom'

function VideoContainer () {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideo()
  }, [])

  const getVideo = async () => {
    const data = await fetch(mostPopularVideo)
    const json = await data.json()
    setVideos(json?.items)
  }

  return (
    <div className='flex flex-wrap cursor-pointer px-2'>
      {
        videos[0] && <AdVideoCard info={videos[0]}/>
      }
      {
        videos.map(ele => <Link key={ele.id} to={'/watch?v=' + ele.id}><VideoCard info={ele} /></Link>)
      }
    </div>
  )
}

export default VideoContainer
