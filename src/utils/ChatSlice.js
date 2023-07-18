import { createSlice } from '@reduxjs/toolkit'
import { LIVECHATOFFSET } from './Constant'

const ChatSlice = createSlice({
  name: 'chat',
  initialState: {
    message: []
  },
  reducers: {
    addMsg: (state, action) => {
      state.message.splice(LIVECHATOFFSET, 1)
      state.message.unshift(action.payload)
    }
  }
})

export const { addMsg } = ChatSlice.actions

export default ChatSlice.reducer
