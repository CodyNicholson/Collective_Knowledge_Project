import home from './home'
import * as types from '../constants/actionTypes'

describe('home reducer', () => {
  it('should return the initial state', () => {
    expect(home(undefined, {})).toEqual({})
  })

  it('should handle HOME_PAGE_LOADED', () => {
    expect(home(undefined, {
    	type: types.HOME_PAGE_LOADED,
    	payload: [{tags:["ice cream", "puppies", "cartoons", "another tag example"]}]
    })).toEqual( {"tags": ["ice cream", "puppies", "cartoons", "another tag example"]})
  })


  it('should handle HOME_PAGE_UNLOADED', () => {
    expect(home(undefined, {type: types.HOME_PAGE_UNLOADED})).toEqual({})
  })

})