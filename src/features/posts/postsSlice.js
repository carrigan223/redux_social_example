import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More Text' },
]

//Remember: reducer functions must always create new state values immutably,
//by making copies! It's safe to call mutating functions like Array.push()
//or modify object fields like state.someField = someValue inside of createSlice(),
//because it converts those mutations into safe immutable updates
//internally using the Immer library, but don't try to mutate any data
//doutside of createSlice!

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
