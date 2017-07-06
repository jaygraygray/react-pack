import {
  VIEW_ONE, VIEW_TWO, VIEW_THREE, 
  API_VIEW_ONE, API_VIEW_TWO, API_VIEW_THREE
} from './actions'


var initialState = {
  viewOne: {},
  viewTwo: {},
  viewThree: {}
}

export function reducer(state = initialState, action) {
  
  // switch(action.type) {
  //   case API_VIEW_ONE:
  //     let newState = Object.assign(state.api, action.payload)
  //     console.log(action.payload)
  //     return Object.assign(state.api, action.payload.data)
  // }
  switch(action.type) {
    case API_VIEW_ONE:
      return {viewOne: action.payload}
    case API_VIEW_TWO:
      return {viewTwo: action.payload}
    case API_VIEW_THREE:
      return {viewTwo: action.payload}
    default:
      return state
  }
}
