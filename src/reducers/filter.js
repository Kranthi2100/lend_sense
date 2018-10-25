import {
  SET_FILTER_TIME,
  SET_FILTER_KEYWORD,
  SET_FILTER_PAGE,
  SET_FILTER_PAGELIMIT
} from '../actions/type';

const initialState = {
  timeFilter: "one week",
  keywordFilter: "all keywords",
  currentPage: "1",
  pageLimit: 10
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_FILTER_TIME:
      return {
        ...state,
        timeFilter: action.filter
      }

    case SET_FILTER_KEYWORD:
      return {
        ...state,
        keywordFilter: action.filter
      }

    case SET_FILTER_PAGE:
      return {
        ...state,
        currentPage: action.filter
      }

    case SET_FILTER_PAGELIMIT:
      return {
        ...state,
        pageLimit: action.filter
      }

    default:
      return state
  }
}
