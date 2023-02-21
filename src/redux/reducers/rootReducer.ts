import { combineReducers } from 'redux'
import speakersReducer from './speakersReducer'

const rootReducer = combineReducers({
  speakers: speakersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
