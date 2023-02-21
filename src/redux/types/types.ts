import { speakersTypes } from 'redux/ActionTypes'

export interface ISpeakers {
  description: string
  gender: string
  name: string
  performance_time: string
  photo_url: string
}

export interface SpeakersState {
  pending: boolean
  speakersData: ISpeakers[]
  error: string | null
}

export interface FetchSpeakersSuccessPayload {
  speakersData: ISpeakers[]
}

export interface FetchSpeakersFailurePayload {
  error: string
}

export interface FetchSpeakersRequest {
  type: typeof speakersTypes.FETCH_SPEAKERS_REQUEST
}

export type FetchSpeakersSuccess = {
  type: typeof speakersTypes.FETCH_SPEAKERS_SUCCESS
  payload: FetchSpeakersSuccessPayload
}

export type FetchSpeakersFailure = {
  type: typeof speakersTypes.FETCH_SPEAKERS_FAILURE
  payload: FetchSpeakersFailurePayload
}

export type SpeakersActions =
  | FetchSpeakersRequest
  | FetchSpeakersSuccess
  | FetchSpeakersFailure
