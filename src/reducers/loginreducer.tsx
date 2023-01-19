import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = { username: '', userType: 0 };


const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateusername: {
      reducer(state, action) {
        state.username = action.payload.username
      },
      prepare(usename): any {
        return {
          payload: {
            username: usename
          }
        }
      }
    }
  }
});
export const { updateusername } = loginSlice.actions

export default loginSlice.reducer