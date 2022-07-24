import { redirect, NOT_FOUND } from 'redux-first-router'
import fetch from './api'

const routesMap = {
  HOME: '/',
  LIST: {
    path: '/list/:category',
    thunk: async (dispatch, getState) => {
      const {
        location: {
          payload: { category: cat },
        },
        videosByCategory,
      } = getState()

      if (videosByCategory[cat]) return
      const vids = await fetch(`/api/videos/${cat}`)

      if (vids.length === 0) {
        return dispatch({ type: NOT_FOUND })
      }

      dispatch({
        type: 'VIDEOS_FETCHED',
        payload: { videos: vids, category: cat },
      })
    },
  },
  VIDEO: {
    path: '/video/:slug',
    thunk: async (dispatch, getState) => {
      // TASK FOR YOU. YES, YOU!
      //
      // visit a VIDEO page in the app, then refresh the
      // page, then make this work when visited directly
      // by copying the LIST  route above and using
      // fetchData(`/api/video/${slug}`) and by
      // dispatching the corresponding action type which
      // I'll leave up to you to find in
      // ../reducers/index.js :)

      const {
        location: {
          payload: { slug },
        },
      } = getState()
      const video = await fetch(`/api/video/${slug}`)

      console.log(`found a video ${video}`)


      if (!video) {
        return dispatch({ type: NOT_FOUND })
      }

      dispatch({ type: 'VIDEO_FOUND', payload: { slug, video } })
    },
  },
  PLAY: {
    path: '/video/:slug/play',
    thunk: (dispatch, getState) => {
      if (typeof window === 'undefined') {
        const { slug } = getState().location.payload
        const action = redirect({ type: 'VIDEO', payload: { slug } })
        dispatch(action)
      }
    },
  },
  LOGIN: '/login',
  ADMIN: {
    path: '/admin', // TRY: visit this path ADMIN
    role: 'admin', // + set the user's role to admin
  },
}

export default routesMap

// DON'T GO DOWN THERE!
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// ▼

// ANSWER: videoRoute.thunk.body:
/* HURRAY! You found the answers on the cereal box!

thunk: async (dispatch, getState) => {
  const { location: { payload: { slug } } } = getState()
  const video = await fetchData(`/api/video/${slug}`)

  if (!video) {
    return dispatch({ type: NOT_FOUND })
  }

  dispatch({ 
    type: 'VIDEO_FOUND',
    payload: { slug, video } 
  })
}
*/
