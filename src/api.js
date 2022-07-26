import { videosHash, videosByCategory, usersHash } from './data'

export default async path => {
  if (path.indexOf('/api/videos') === 0) {
    console.log('entered /api/videos')
    const videos = await findVideos(path.replace('/api/videos/', ''))
    console.log(videos)
    return videos
  } else if (path.indexOf('/api/video') === 0) {
    const video = await findVideo(path.replace('/api/video/', ''))
    return video
  } else if (path.indexOf('/api/users') === 0) {
    const users = await allUsers(path.replace('/api/users/', ''))
    return users
  } else {
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
