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

    case API_VIEW_ONE + '_FULFILLED':
      
      return {viewOne: action.payload.data}

    case API_VIEW_TWO + '_FULFILLED':
      return {viewTwo: action.payload.data}

    case API_VIEW_THREE + '_FULFILLED':
      return {viewThree: action.payload.data}

    default:
      return state
  }
}
