import { speakersTypes } from 'redux/ActionTypes/SpeakersTypes';
import { SpeakersActions, SpeakersState } from 'redux/types';

const initialState: SpeakersState = {
    pending: false,
    speakersData: [],
    error: null,
};

const speakers = (state = initialState, action: SpeakersActions) => {
    switch (action.type) {
        case speakersTypes.FETCH_SPEAKERS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case speakersTypes.FETCH_SPEAKERS_SUCCESS:
            return {
                ...state,
                pending: false,
                speakersData: action.payload.speakersData,
                error: null,
            };
        case speakersTypes.FETCH_SPEAKERS_FAILURE:
            return {
                ...state,
                pending: false,
                speakersData: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};
export default speakers;
