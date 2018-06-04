import profile from './profile'
import * as types from '../constants/actionTypes'

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(profile(undefined, {})).toEqual({})
  })
  it('should handle PROFILE_PAGE_LOADED', () => {
    expect(profile(undefined, {
    	type: types.PROFILE_PAGE_LOADED,
    	payload: [{profile:"data"}]
    })).toEqual({"0": "d", "1": "a", "2": "t", "3": "a"})
  })
  it('should handle PROFILE_PAGE_UNLOADED', () => {
    expect(profile(undefined, {type: types.PROFILE_PAGE_UNLOADED})).toEqual({})
  })
  it('should handle FOLLOW_USER', () => {
    expect(profile(undefined, {
    	type: types.FOLLOW_USER,
    	payload: {profile: "data"}
    })).toEqual({"0": "d", "1": "a", "2": "t", "3": "a"})
  })
  it('should handle UNFOLLOW_USER', () => {
    expect(profile(undefined, {
    	type: types.FOLLOW_USER,
    	payload: {profile: "data"}
    })).toEqual({"0": "d", "1": "a", "2": "t", "3": "a"})
  })
})