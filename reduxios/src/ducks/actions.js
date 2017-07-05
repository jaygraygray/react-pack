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

export function getAPIViewOne() {
 axios.get('http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=2a71fc11ed3e7be089142b2de53f9cd5')
 .then(r => {
   return {
    type: API_VIEW_ONE,
    payload: r.data
   }
 })

}

