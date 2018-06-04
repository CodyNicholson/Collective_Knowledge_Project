import article from './article'
import * as types from '../constants/actionTypes'

describe('article reducer', () => {
  it('should return the initial state', () => {
    expect(article(undefined, {})).toEqual({})
  })



  it('should handle ARTICLE_PAGE_LOADED', () => {
    expect(
      article(["state"], {
        type: types.ARTICLE_PAGE_LOADED,
        payload: ["test1", "test1"]
      })
    ).toEqual(
 		{
 			"0": "state",
 			"article": undefined,
 			"comments": undefined
 		}
    )

	var articlePayload = {article:"This is a story all about how my life got flip turned upside down..."};
	var commentsPayload = {comments:"relatable; nostalgia; love this song;"};

    expect(
      article(["state"], {
        type: types.ARTICLE_PAGE_LOADED,
        payload: [articlePayload, commentsPayload]
      })
    ).toEqual(
		{
			"0": "state",
			"article": "This is a story all about how my life got flip turned upside down...", 
			"comments": "relatable; nostalgia; love this song;"
		})
  })


  it('should handle ARTICLE_PAGE_UNLOADED', () => {
    expect(
      article([], {
        type: types.ARTICLE_PAGE_UNLOADED
      })
    ).toEqual({})
  })



  it('should handle ADD_COMMENT', () => {

  	var commentsData = ["commentA", "commentB", "commentC"];
  	expect(article({comments: commentsData}, 
  	{
  		type: types.ADD_COMMENT, 
  		payload: {comment:"commentD"}
  	})
  	).toEqual(
		{
			"commentErrors": null, 
			"comments": ["commentA", "commentB", "commentC", "commentD"]
		}
	)
  })

  it('should handle DELETE_COMMENT', () => {

  	var commentsData = [{id:4, text:"commentA"}, {id:8, text:"commentB"}, {id:2, text:"commentC"}];

  	expect(article({comments: commentsData}, 
  	{
  		type: types.DELETE_COMMENT, 
  		commentId: 8
  	})
  	).toEqual(
		{
			"comments": [
				{"id": 4, "text": "commentA"}, 
				{"id": 2, "text": "commentC"}
			]
		}
	)
  })

})