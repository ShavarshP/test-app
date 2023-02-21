import { speakersTypes } from 'redux/ActionTypes'
import {
  FetchSpeakersFailure,
  FetchSpeakersFailurePayload,
  FetchSpeakersRequest,
  FetchSpeakersSuccess,
  FetchSpeakersSuccessPayload,
} from 'redux/types'

export const getSpeakersData = (): FetchSpeakersRequest => ({
  type: speakersTypes.FETCH_SPEAKERS_REQUEST,
})

export const setSpeakersData = (
  payload: FetchSpeakersSuccessPayload,
): FetchSpeakersSuccess => ({
  type: speakersTypes.FETCH_SPEAKERS_SUCCESS,
  payload,
})

export const fetchSpeakersFailure = (
  payload: FetchSpeakersFailurePayload,
): FetchSpeakersFailure => ({
  type: speakersTypes.FETCH_SPEAKERS_FAILURE,
  payload,
})
