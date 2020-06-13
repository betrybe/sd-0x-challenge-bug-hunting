let YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3"
const YOUTUBE_AUTH_KEY = "AIzaSyAtQupUU2o28doaArHbuAZhsWfS4QjiNJE"


export const searchVideos = async (searchText) => {
  const URL = `${YOUTUBE_API_URL}/search?part=snippet&q=${searchText}&maxResults=25&key=${YOUTUBE_AUTH_KEY}`

  return fetch(URL).then(data => data.json())
}


export const getVideoInfo = async (videoId) => {

}



export const getVideoComments = async (videoId) => {

}
