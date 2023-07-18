import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/AppSlice'
import { suggestionApi } from '../utils/Constant'
import { cacheResults } from '../utils/SearchSlice'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggession, setSuggession] = useState([])
  const searchcache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    // Debouning concepts => Avoid network call if key stocks is less then theshold value
    // make a api call on each key press
    // but difference between 2 API call is < 200ms
    // decline the API call.
    const timmer = setTimeout(() => {
      if (searchcache[searchQuery]) {
        setSuggession(searchcache[searchQuery])
      } else {
        getSearchSuggestion()
      }
    }, 200)
    // Distroy
    return () => {
      clearTimeout(timmer)
    }
  }, [searchQuery])

  const getSearchSuggestion = async () => {
    const data = await fetch(suggestionApi + searchQuery)
    const result = await data.json()
    setSuggession(result[1])

    // update the cache...
    dispatch(cacheResults({
      [searchQuery]: result[1]
    }))
  }

  const toogleMenuHandeler = () => {
    dispatch(toggleMenu())
  }

  return (
    <>
      <div className='grid grid-flow-col p-5 shadow-lg'>
        <div className='flex col-span-1'>
          <img className='h-8 mr-3 cursor-pointer' alt='menulogo' src='https://cdn-icons-png.flaticon.com/512/7216/7216128.png' onClick={() => toogleMenuHandeler()} />
         <a href='/'><img className='h-10' alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7Up4608NVAODkE9eTxTmPzR6nD0BXq7gLg&usqp=CAU' /></a>
        </div>
        <div className='col-span-10'>
          <div>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' placeholder='Search' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onBlur={() => setSuggession([])} />
            <button className='border border-gray-400 p-2 rounded-r-full'> Search</button>
          </div>
          {suggession.length > 0 && (
            <div className='absolute bg-white border rounded-lg mx-2 px-2 py-5 w-1/3 shadow-lg'>
              <ul className=''>
                {suggession.map((ele) => <li>{ele}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div className='col-span-1'>
          <img alt='user' className='h-8 float-right' src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'/>
        </div>
      </div>
    </>
  )
}

export default Head
