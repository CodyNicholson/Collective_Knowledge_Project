import devnotes from './devnotes'
import * as types from '../constants/actionTypes'

describe('devnotes reducer', () => {
  it('should return the initial state', () => {
    expect(devnotes(undefined, {})).toEqual({})
  })

	var tags = ["ice cream", "puppies", "cartoons", "another tag example"];
	

  it('should handle HOME_PAGE_LOADED', () => {
    expect(devnotes(undefined, {
    	type: types.HOME_PAGE_LOADED,
    	payload: [{tags:tags}]
    })).toEqual( {"tags": ["ice cream", "puppies", "cartoons", "another tag example"]})
  })
  it('should handle HOME_PAGE_UNLOADED', () => {
    expect(devnotes(undefined, {type: types.HOME_PAGE_UNLOADED})).toEqual({})
  })
})