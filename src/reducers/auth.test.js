import auth from './auth'
import * as types from '../constants/actionTypes'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(auth(undefined, {})).toEqual({})
  })
  it('should handle LOGIN', () => {
    expect(auth(undefined, {
    	type: types.LOGIN
    })).toEqual({"errors": null, "inProgress": false})
  })

  it('should handle REGISTER', () => {
    expect(auth(undefined, {
      type: types.REGISTER,
      error: true,
      payload: {errors:"This is the error message"}
    })).toEqual({"errors": "This is the error message", "inProgress": false})
  })
  it('should handle REGISTER', () => {
    expect(auth(undefined, {
      type: types.REGISTER,
      error: false,
      payload: {errors:"This is an error message that should not be seen"}
    })).toEqual({"errors": null, "inProgress": false})
  })

  it('should handle LOGIN_PAGE_UNLOADED', () => {
    expect(auth(undefined, {
    	type: types.LOGIN_PAGE_UNLOADED
    })).toEqual({})
  })
  it('should handle REGISTER_PAGE_UNLOADED', () => {
    expect(auth(undefined, {
    	type: types.REGISTER_PAGE_UNLOADED
    })).toEqual({})
  })


  it('should handle ASYNC_START', () => {
    expect(auth(undefined, {
      type: types.ASYNC_START,
      subtype: types.LOGIN
    })).toEqual({"inProgress": true})
  })

  it('should handle UPDATE_FIELD_AUTH', () => {
    expect(auth(undefined, {
      type: types.UPDATE_FIELD_AUTH,
      key: 997,
      value: "Smooth McGroove"
    })).toEqual( {"997": "Smooth McGroove"})
  })

})