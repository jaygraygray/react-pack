import {VIEW_ONE, VIEW_TWO, VIEW_THREE} from './actions'


var initialState = {
  viewOne: {data : 'This is data coming from the storee'},
  viewTwo: {data : 'This is data coming from the store.'},
  viewThree: {data : 'This is data coming from the store.'}
}

export default function reducer(state = initialState, action) {
  switch(action.payload) {
    case VIEW_ONE:
      return {initialState}
    case VIEW_TWO:
      return {initialState} 
    case VIEW_THREE:
      return {initialState}
  }
  return state;
}