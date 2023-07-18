import React from 'react'

const commmentData = [
  {
    name: 'Hemraj',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    replies: []
  },
  {
    name: 'Hemraj',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    replies: [{
      name: 'Hemraj',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      replies: []
    }, {
      name: 'Hemraj',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      replies: []
    }, {
      name: 'Hemraj',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      replies: []
    }]
  },
  {
    name: 'Hemraj',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    replies: []
  },
  {
    name: 'Hemraj',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    replies: []
  },
  {
    name: 'Hemraj',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    replies: []
  }, {
    name: 'Hemraj',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    replies: []
  },
  {
    name: 'Hemraj',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    replies: []
  },
  {
    name: 'Hemraj',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    replies: [{
      name: 'Hemraj',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      replies: []
    }, {
      name: 'Hemraj',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      replies: [{
        name: 'Hemraj',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        replies: []
      }, {
        name: 'Hemraj',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        replies: [{
          name: 'Hemraj',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
          replies: []
        }, {
          name: 'Hemraj',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
          replies: [{
            name: 'Hemraj',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
            replies: []
          }, {
            name: 'Hemraj',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
            replies: [{
              name: 'Hemraj',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
              replies: []
            }, {
              name: 'Hemraj',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
              replies: []
            },
            {
              name: 'Hemraj',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
              replies: []
            },
            {
              name: 'Hemraj',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
              replies: []
            }]
          },
          {
            name: 'Hemraj',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
            replies: []
          },
          {
            name: 'Hemraj',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
            replies: []
          }]
        },
        {
          name: 'Hemraj',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
          replies: []
        },
        {
          name: 'Hemraj',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
          replies: []
        }]
      },
      {
        name: 'Hemraj',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        replies: []
      },
      {
        name: 'Hemraj',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        replies: []
      }]
    },
    {
      name: 'Hemraj',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      replies: []
    },
    {
      name: 'Hemraj',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      replies: []
    }]
  }
]

const Comment = ({ info }) => {
  const { name, text } = info
  return (
      <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img alt='user' className='h-8 float-right' src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'/>
        <div className='px-3'>
          <p>{name}</p>
          <p>{text}</p>
        </div>
      </div>
  )
}

const CommentList = ({ commentsLst }) => {
  return commentsLst.map((ele, index) => (
    <div key={index} >
      <Comment info={ele}/>
      {ele.replies.length > 0 && (
        <div className='pl-5 ml-5 border border-l-black'>
         <CommentList commentsLst={ele.replies} />
        </div>
      )}
    </div>
  ))
}

function CommentContainer () {
  return (
    <div className='m-5 py-2'>
        <h1 className='text-2xl font-bold'>Comment</h1>
        <CommentList commentsLst={commmentData}/>
    </div>
  )
}

export default CommentContainer
