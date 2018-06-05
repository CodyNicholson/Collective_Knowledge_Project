import settings from './settings'
import * as types from '../constants/actionTypes'

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(settings(undefined, {})).toEqual({})
  })

  it('should handle SETTINGS_SAVED', () => {
    expect(settings(undefined, {
    	type: types.SETTINGS_SAVED
    })).toEqual({"errors": null, "inProgress": false})
  })


  it('should handle SETTINGS_PAGE_UNLOADED', () => {
    expect(settings(undefined, {type: types.SETTINGS_PAGE_UNLOADED})).toEqual({})
  })
  it('should handle ASYNC_START', () => {
    expect(settings(undefined, {
    	type: types.ASYNC_START
    })).toEqual({"inProgress": true})
  })
})