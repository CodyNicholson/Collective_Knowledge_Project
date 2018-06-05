import editor from './editor'
import * as types from '../constants/actionTypes'

describe('editor reducer', () => {
  it('should return the initial state', () => {
    expect(editor(undefined, {})).toEqual({})
  })

var tags = ["ice cream", "puppies", "cartoons", "another tag example"];

var articleData = {slug:"slugData", title:"articleTitle", description:"this is an article description", body: "this is the body of the article.", tagList: tags};

  it('should handle EDITOR_PAGE_LOADED', () => {
    expect(editor(undefined, {
    	type: types.EDITOR_PAGE_LOADED,
    	payload: {article:articleData}
    })).toEqual(
      {
        "articleSlug": "slugData", 
        "body": "this is the body of the article.", 
        "description": "this is an article description", 
        "tagInput": "", 
        "tagList": ["ice cream", "puppies", "cartoons", "another tag example"], 
        "title": "articleTitle"
      }
    )
  })

  it('should handle EDITOR_PAGE_UNLOADED', () => {
    expect(editor(undefined, {type: types.EDITOR_PAGE_UNLOADED})).toEqual({})
  })

  it('should handle ARTICLE_SUBMITTED', () => {
    expect(editor(undefined, {
      type: types.ARTICLE_SUBMITTED,
      error: true,
      payload: {errors:"This is the error message"}
    })).toEqual({"errors": "This is the error message", "inProgress": null})
  })
  it('should handle ARTICLE_SUBMITTED', () => {
    expect(editor(undefined, {
      type: types.ARTICLE_SUBMITTED,
      error: false,
      payload: {errors:"This is an error message that should not be seen"}
    })).toEqual({"errors": null, "inProgress": null})
  })

  it('should handle ASYNC_START', () => {
    expect(editor(undefined, {
      type: types.ASYNC_START,
      subtype: types.ARTICLE_SUBMITTED
    })).toEqual({"inProgress": true})
  })

  it('should handle REMOVE_TAG', () => {
    expect(editor({tagList: tags}, {
      type: types.REMOVE_TAG,
      tag: "puppies"
    })).toEqual({"tagList": ["ice cream", "cartoons", "another tag example"]})
  })

  it('should handle UPDATE_FIELD_EDITOR', () => {
    expect(editor(undefined, {
      type: types.UPDATE_FIELD_EDITOR,
      key: 997,
      value: "Smooth McGroove"
    })).toEqual( {"997": "Smooth McGroove"})
  })


})