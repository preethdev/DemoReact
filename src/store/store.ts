import { configureStore } from '@reduxjs/toolkit'
import loginreducer from '../reducers/loginreducer'


export default configureStore({
  reducer: {
    login: loginreducer
  }
})