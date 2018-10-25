import {
  SET_TIME,
  SET_KEYWORD,
  SET_PAGE
} from '../actions/type';

const initialState = {
    timeFilter: "one week",
    keywordFilter: "all keywords",
    currentPage: "1"
}

export default (state = initialState, action) => {
  switch (action.type) {

  case SET_TIME:
    return { 
      ...state,
      timeFilter: action.filter
    }

  case SET_KEYWORD:
    return { 
      ...state,
      keywordFilter: action.filter
    }

  default:
    return state
  }
}
