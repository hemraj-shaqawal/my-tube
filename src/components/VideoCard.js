import React from 'react'

function VideoCard ({ info }) {
  const { snippet, statistics } = info
  const { channelTitle, thumbnails, title } = snippet
  return (
    <div className='p-1 m-1 w-72 shadow-lg'>
        <img className='rounded-lg' alt='thumbnails' src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({ info }) => {
  return (
    <div className='border border-red-400 divide-orange-200'>
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard
