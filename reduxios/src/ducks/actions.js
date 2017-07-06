import axios from 'axios'

export const VIEW_ONE = 'VIEW_ONE'
export const VIEW_TWO = 'VIEW_TWO'
export const VIEW_THREE = 'VIEW_THREE'


export function getViewOne() {
 return {
  type: VIEW_ONE,
  payload: ''
 }
}

export function getViewTwo() {
 return {
  type: VIEW_TWO,
  payload: ''
 }
}

export function getViewThree() {
 return {
  type: VIEW_THREE,
  payload: ''
 }
}

export const API_VIEW_ONE = 'API_VIEW_ONE'
export const API_VIEW_TWO = 'API_VIEW_TWO'
export const API_VIEW_THREE = 'API_VIEW_THREE'

export function getAPIViewOne(data) {
return {
    type: API_VIEW_ONE,
    payload: data
   }
}

export function getAPIViewTwo(data) {
    return {
        type: API_VIEW_TWO,
        payload: data
    }
}

export function getAPIViewThree(data) {
    return {
        type: API_VIEW_THREE,
        payload: data
    }
}