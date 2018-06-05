import articleList from './articleList'
import * as types from '../constants/actionTypes'

describe('articleList reducer', () => {
  it('should return the initial state', () => {
    expect(articleList(undefined, {})).toEqual({})
  })

  var article1 = {slug:1131, favorited:false, favoritesCount:8};
  var article2 = {slug:1132, favorited:true, favoritesCount:3};
  var article3 = {slug:1133, favorited:true, favoritesCount:6};
  var article4 = {slug:1134, favorited:false, favoritesCount:5};

  it('should handle ARTICLE_FAVORITED', () => {
    expect(articleList({articles:[article1, article2, article3, article4]}, {
    	type: types.ARTICLE_FAVORITED,
    	payload: {article: article1}
    })).toEqual({"articles": [
	    {"favorited": false, "favoritesCount": 8, "slug": 1131},
	    {"favorited": true, "favoritesCount": 3, "slug": 1132},
	    {"favorited": true, "favoritesCount": 6, "slug": 1133},
	    {"favorited": false, "favoritesCount": 5, "slug": 1134}
    ]})
  })
  it('should handle ARTICLE_UNFAVORITED', () => {
    expect(articleList({articles:[article1, article2, article3, article4], tags:"candy"}, {
    	type: types.ARTICLE_UNFAVORITED,
    	payload: {article: article1}
    })).toEqual({"articles": [
	    {"favorited": false, "favoritesCount": 8, "slug": 1131},
	    {"favorited": true, "favoritesCount": 3, "slug": 1132},
	    {"favorited": true, "favoritesCount": 6, "slug": 1133},
	    {"favorited": false, "favoritesCount": 5, "slug": 1134}],
	    "tags":"candy"
    })
  })
  it('should handle SET_PAGE', () => {
    expect(articleList(undefined, {
    	type: types.SET_PAGE,
    	payload: {articles: [article1, article2, article3, article4], articlesCount:4},
    	page:2

    })).toEqual( {"articles": [{"favorited": false, "favoritesCount": 8, "slug": 1131}, {"favorited": true, "favoritesCount": 3, "slug": 1132}, {"favorited": true, "favoritesCount": 6, "slug": 1133}, {"favorited": false, "favoritesCount": 5, "slug": 1134}], "articlesCount": 4, "currentPage": 2})
  })
  it('should handle APPLY_TAG_FILTER', () => {
    expect(articleList({tags:"candy"}, {
    	type: types.APPLY_TAG_FILTER,
    	payload: {articles:[article1, article2, article3, article4], artilesCount:4},
      pager: "pagertext"
    })).toEqual({"articles": [  {"favorited": false, "favoritesCount": 8, "slug": 1131}, 
							    {"favorited": true, "favoritesCount": 3, "slug": 1132}, 
							    {"favorited": true, "favoritesCount": 6, "slug": 1133}, 
							    {"favorited": false, "favoritesCount": 5, "slug": 1134}], 
   				"articlesCount": undefined, 
   				"currentPage": 0, 
   				"pager": "pagertext", 
   				"tab": null, 
   				"tags": "candy"})
  })

  it('should handle CHANGE_TAB', () => {
    expect(articleList({}, {
    	type: types.CHANGE_TAB,
    	payload: {articles:[article1, article2, article3, article4], artilesCount:4},
      tab:"tabText"
    })).toEqual({"articles": [  {"favorited": false, "favoritesCount": 8, "slug": 1131}, 
							    {"favorited": true, "favoritesCount": 3, "slug": 1132}, 
							    {"favorited": true, "favoritesCount": 6, "slug": 1133}, 
							    {"favorited": false, "favoritesCount": 5, "slug": 1134}], 
   				"articlesCount": undefined, 
   				"currentPage": 0, 
   				"pager": undefined, 
   				"tab": "tabText", 
   				"tag": null})
  })


    it('should handle HOME_PAGE_LOADED', () => {
    expect(articleList(undefined, {
    	type: types.HOME_PAGE_LOADED,
    	payload: [{tags:"puppies"},{articles:[article1, article2, article3, article4], articlesCount: 4}]
    })).toEqual(      {"articles": [{"favorited": false, "favoritesCount": 8, "slug": 1131}, {"favorited": true, "favoritesCount": 3, "slug": 1132}, {"favorited": true, "favoritesCount": 6, "slug": 1133}, {"favorited": false, "favoritesCount": 5, "slug": 1134}], "articlesCount": 4, "currentPage": 0, "pager": undefined, "tab": undefined, "tags": "puppies"})
  })

   it('should handle HOME_PAGE_UNLOADED', () => {
    expect(articleList(undefined, {type: types.HOME_PAGE_UNLOADED})).toEqual({})
  })



    it('should handle PROFILE_PAGE_LOADED', () => {
    expect(articleList(undefined, {
    	type: types.PROFILE_PAGE_LOADED,
    	payload: ["placeholder", {articles:[article1, article2, article3, article4], articlesCount: 4}]
    })).toEqual({"articles": [{"favorited": false, "favoritesCount": 8, "slug": 1131}, {"favorited": true, "favoritesCount": 3, "slug": 1132}, {"favorited": true, "favoritesCount": 6, "slug": 1133}, {"favorited": false, "favoritesCount": 5, "slug": 1134}], "articlesCount": 4, "currentPage": 0, "pager": undefined})
  })

    it('should handle PROFILE_FAVORITES_PAGE_LOADED', () => {
    expect(articleList(undefined, {
    	type: types.PROFILE_FAVORITES_PAGE_LOADED,
    	payload: ["placeholder", {articles:[article1, article2, article3, article4], articlesCount: 4}]
    })).toEqual({"articles": [{"favorited": false, "favoritesCount": 8, "slug": 1131}, {"favorited": true, "favoritesCount": 3, "slug": 1132}, {"favorited": true, "favoritesCount": 6, "slug": 1133}, {"favorited": false, "favoritesCount": 5, "slug": 1134}], "articlesCount": 4, "currentPage": 0, "pager": undefined})
  })


   it('should handle PROFILE_PAGE_UNLOADED', () => {
    expect(articleList(undefined, {type: types.PROFILE_PAGE_UNLOADED})).toEqual({})
  })

     it('should handle PROFILE_FAVORITES_PAGE_UNLOADED', () => {
    expect(articleList(undefined, {type: types.PROFILE_FAVORITES_PAGE_UNLOADED})).toEqual({})
  })

})