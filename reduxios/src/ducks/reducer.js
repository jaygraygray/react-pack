import {
  VIEW_ONE, VIEW_TWO, VIEW_THREE, 
  API_VIEW_ONE, API_VIEW_TWO, API_VIEW_THREE
} from './actions'


var initialState = {
  viewOne: {},
  viewTwo: {},
  viewThree: {},
  newTest: ['this is a test']
}

export function reducer(state = initialState, action) {

  switch(action.type) {
    case API_VIEW_ONE:
      return {viewOne: action.payload}

    case API_VIEW_TWO:
      return {viewTwo: action.payload}

    case API_VIEW_THREE:
      return {viewThree: action.payload}

    default:
      return state
  }
}
