import axios, { AxiosError } from 'axios'
import {
  setSpeakersData,
  fetchSpeakersFailure,
} from 'redux/actions/speakersActions'
import { ISpeakers } from 'redux/types/types'
import { speakersTypes } from 'redux/ActionTypes'
import { all, call, put, takeLatest } from 'redux-saga/effects'

const getSpeakers = () =>
  axios.get<{ response: ISpeakers[]; success: Boolean }>(
    'https://pro.alphadevteam.com/api/tz/speakers',
  )

function* fetchSpeakersSaga() {
  try {
    //@ts-ignore
    const { data } = yield call(getSpeakers)
    yield put(
      setSpeakersData({
        speakersData: data.response,
      }),
    )
  } catch (error) {
    const e = error as AxiosError
    yield put(
      fetchSpeakersFailure({
        error: e.message,
      }),
    )
  }
}

function* SpeakersSaga() {
  yield all([
    takeLatest(speakersTypes.FETCH_SPEAKERS_REQUEST, fetchSpeakersSaga),
  ])
}

export default SpeakersSaga
