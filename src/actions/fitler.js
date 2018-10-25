import {
    SET_TIME,
    SET_KEYWORD,
    SET_PAGE
} from './type';

export const setTimeFilter = (time) => ({
    type: SET_TIME,
    filter: time
})

export const setKeywordFilter = (keyword) => ({
    type: SET_KEYWORD,
    filter: keyword
})