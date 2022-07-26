export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'VIDEOS_FETCHED': {
      const { videos } = action.payload
      videos.reduce((videos, video) => {
        state[video.slug] = video
        return video 
      }, state)
    }
    case 'VIDEO_FOUND': {
      const { slug, video } = action.payload
      console.log('found video ', slug, video)
      state[slug] = video
      // return { ...state, [slug]: video }
      return state
    }
    default:
      return state
  }
}

// eg: { 'slug-1': video1, 'slug-2': video2 }
