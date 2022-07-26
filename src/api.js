import { videosHash, videosByCategory, usersHash } from './data'

export default async path => {
  switch (path) {
    case '/api/videos/':
      const videos = await findVideos(path.replace('/api/videos', ''))
      return videos
      break
    case '/api/video':
      const video =  await findVideo(path.replace('/api/video/', ''))
      return video
      break
    case '/api/users':
      const users = await allUsers(path.replace('/api/users', ''))
      return users
    default:
      return []
  }
}

const findVideos = async category => {
  await fakeDelay(1000)
  return videosByCategory[category] || []
}

const findVideo = async slug => {
  await fakeDelay(500)
  return videosHash[slug]
}

const allUsers = async () => {
  console.log(usersHash)
  await fakeDelay(500)
  return usersHash
}

const fakeDelay = ms => new Promise(res => setTimeout(res, ms))
