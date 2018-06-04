import article from './article'
import * as types from '../constants/actionTypes'

describe('article reducer', () => {
  it('should return the initial state', () => {
    expect(article(undefined, {})).toEqual({})
  })



  it('should handle ARTICLE_PAGE_LOADED', () => {
    expect(
      article(["test1","test2"], {
        type: types.ARTICLE_PAGE_LOADED,
        payload: ["test1", "test1"]
      })
    ).toEqual(
 		{
 			"0": "test1",
 			"1": "test2",
 			"article": undefined,
 			"comments": undefined
 		}
    )

	var articlePayload = {article:"This is a story all about how my life got flip turned upside down..."};
	var commentsPayload = {comments:"relatable; nostalgia; love this song;"};

    expect(
      article(["test1","test2"], {
        type: types.ARTICLE_PAGE_LOADED,
        payload: [articlePayload, commentsPayload]
      })
    ).toEqual(
{"0": "test1", "1": "test2", "article": "This is a story all about how my life got flip turned upside down...", "comments": "relatable; nostalgia; love this song;"}
    )

  })

})