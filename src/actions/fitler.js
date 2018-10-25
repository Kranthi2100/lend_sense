import {
    SET_FILTER_TIME,
    SET_FILTER_KEYWORD,
    SET_FILTER_PAGE,
    SET_FILTER_PAGELIMIT
} from './type';

export const setTimeFilter = (time) => ({
    type: SET_FILTER_TIME,
    filter: time
})

export const setKeywordFilter = (keyword) => ({
    type: SET_FILTER_KEYWORD,
    filter: keyword
})

export const setCurrentPageFilter = (currentPage) => ({
  type: SET_FILTER_PAGE,
  filter: currentPage
})

export const setPageLimitFilter = (limit) => ({
  type: SET_FILTER_PAGELIMIT,
  filter: limit
})
