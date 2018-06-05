import common from './common'
import * as types from '../constants/actionTypes'


describe('common reducer', () => {
  it('should return the initial state', () => {
    expect(common(undefined, {})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 0})
  })

  it('should handle APP_LOAD', () => {
    expect(common({}, {
    	type: types.APP_LOAD,
    	token: true,
    	payload: {user:"jason"}
    })).toEqual({"appLoaded": true, "currentUser": "jason", "token": true})
  })


  it('should handle REDIRECT', () => {
    expect(common(undefined, {type: types.REDIRECT})).toEqual({"appName": "Collective Knowledge", "redirectTo": null, "token": null, "viewChangeCounter": 0})
  })

    it('should handle LOGOUT', () => {
    expect(common(undefined, {type: types.LOGOUT})).toEqual({"appName": "Collective Knowledge", "currentUser": null, "redirectTo": "/", "token": null, "viewChangeCounter": 0})
  })



    it('should handle ARTICLE_SUBMITTED', () => {
    expect(common(undefined, {
    	type: types.ARTICLE_SUBMITTED,
    	payload: {article:{slug:44}}
    })).toEqual({"appName": "Collective Knowledge", "redirectTo": "/article/44", "token": null, "viewChangeCounter": 0})
  })
    it('should handle SETTINGS_SAVED', () => {
    expect(common(undefined, {
    	type: types.SETTINGS_SAVED,
    	payload: {user:{token:333}},
    	error:false
    })).toEqual({"appName": "Collective Knowledge", "currentUser": {"token": 333}, "redirectTo": "/", "token": null, "viewChangeCounter": 0})
  })
    it('should handle LOGIN', () => {
    expect(common(undefined, {
    	type: types.LOGIN,
    	payload: {user:{token:333}},
    	error:false
    })).toEqual({"appName": "Collective Knowledge", "currentUser": {"token": 333}, "redirectTo": "/", "token": 333, "viewChangeCounter": 0})
  })
    it('should handle DELETE_USER', () => {
    expect(common(undefined, {type: types.DELETE_USER})).toEqual({"appName": "Collective Knowledge", "currentUser": null, "redirectTo": "/", "token": null, "viewChangeCounter": 0})
  })
    it('should handle DELETE_ARTICLE', () => {
    expect(common(undefined, {type: types.DELETE_ARTICLE})).toEqual({"appName": "Collective Knowledge", "redirectTo": "/", "token": null, "viewChangeCounter": 0})
  })
    it('should handle REGISTER', () => {
    expect(common(undefined, {
    	type: types.REGISTER,
    	payload: {user:{token:333}},
    	error:false
    })).toEqual({"appName": "Collective Knowledge", "currentUser": {"token": 333}, "redirectTo": "/", "token": 333, "viewChangeCounter": 0})
  })


    it('should handle ARTICLE_PAGE_UNLOADED', () => {
    expect(common(undefined, {type: types.ARTICLE_PAGE_UNLOADED})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 1})
  })

    it('should handle EDITOR_PAGE_UNLOADED', () => {
    expect(common(undefined, {type: types.EDITOR_PAGE_UNLOADED})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 1})
  })

    it('should handle HOME_PAGE_UNLOADED', () => {
    expect(common(undefined, {type: types.HOME_PAGE_UNLOADED})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 1})
  })
    it('should handle PROFILE_PAGE_UNLOADED', () => {
    expect(common(undefined, {type: types.PROFILE_PAGE_UNLOADED})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 1})
  })

    it('should handle PROFILE_FAVORITES_PAGE_UNLOADED', () => {
    expect(common(undefined, {type: types.PROFILE_FAVORITES_PAGE_UNLOADED})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 1})
  })

    it('should handle SETTINGS_PAGE_UNLOADED', () => {
    expect(common(undefined, {type: types.SETTINGS_PAGE_UNLOADED})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 1})
  })

    it('should handle LOGIN_PAGE_UNLOADED', () => {
    expect(common(undefined, {type: types.LOGIN_PAGE_UNLOADED})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 1})
  })

    it('should handle REGISTER_PAGE_UNLOADED', () => {
    expect(common(undefined, {type: types.REGISTER_PAGE_UNLOADED})).toEqual( {"appName": "Collective Knowledge", "token": null, "viewChangeCounter": 1})
  })



    it('should handle ARTICLE_SUBMITTED', () => {
    expect(common({viewChangeCounter: 1}, {
    	type: types.ARTICLE_SUBMITTED,
    	payload: {article:{slug:44}}
    })).toEqual({"redirectTo": "/article/44", "viewChangeCounter": 1})
  })
    it('should handle SETTINGS_SAVED', () => {
    expect(common({viewChangeCounter: 3}, {
    	type: types.SETTINGS_SAVED,
    	payload: {user:{token:333}},
    	error:false
    })).toEqual({"currentUser": {"token": 333}, "redirectTo": "/", "viewChangeCounter": 3})
  })
    it('should handle LOGIN', () => {
    expect(common({viewChangeCounter: 5}, {
    	type: types.LOGIN,
    	payload: {user:{token:333}},
    	error:false
    })).toEqual({"currentUser": {"token": 333}, "redirectTo": "/", "token": 333, "viewChangeCounter": 5})
  })
    it('should handle DELETE_USER', () => {
    expect(common({viewChangeCounter: 7}, {type: types.DELETE_USER})).toEqual({"currentUser": null, "redirectTo": "/", "token": null, "viewChangeCounter": 7})
  })
    it('should handle DELETE_ARTICLE', () => {
    expect(common({viewChangeCounter: 9}, {type: types.DELETE_ARTICLE})).toEqual({"redirectTo": "/", "viewChangeCounter": 9})
  })
    it('should handle REGISTER', () => {
    expect(common({viewChangeCounter: 11}, {
    	type: types.REGISTER,
    	payload: {user:{token:333}},
    	error:false
    })).toEqual({"currentUser": {"token": 333}, "redirectTo": "/", "token": 333, "viewChangeCounter": 11})
  })

})