import {
  VIEW_ONE, VIEW_TWO, VIEW_THREE, 
  API_VIEW_ONE
} from './actions'


var initialState = {
  viewOne: {data : 'This is data coming from the storee'},
  viewTwo: {data : 'This is data coming from the store.'},
  viewThree: {data : 'This is data coming from the store.'},
  api: {}
}

export function reducer(state = initialState, action) {
  
  // switch(action.type) {
  //   case API_VIEW_ONE:
  //     let newState = Object.assign(state.api, action.payload)
  //     console.log(action.payload)
  //     return Object.assign(state.api, action.payload.data)
  // }
  switch(action.type) {
    case 'API_VIEW_ONE':
    return Object.assign(state.api, {shit: action.payload})
  }
 return state
}
