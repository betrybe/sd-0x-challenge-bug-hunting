let YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_AUTH_KEY = 'AIzaSyAmBAp-oCAGaGuZP1N4A2aF2misxBcKOJQ';

export const searchVideos = async (searchText) => {
  const URL = `${YOUTUBE_API_URL}/search?part=snippet&q=${searchText}&maxResults=25&key=${YOUTUBE_AUTH_KEY}`;

  return fetch(URL).then((data) => data.json()); // promise inside a promise thats called inside life cycles bug 4
};

export const getVideoInfo = async (videoId) => {
  const urlParams = `part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_AUTH_KEY}`;
  const URL = `${YOUTUBE_API_URL}/videos?${urlParams}`;

  return fetch(URL).then((data) => data.json());
};

export const getVideoComments = async (videoId) => {
  const urlParams = `part=snippet&videoId=${videoId}&textFormat=plainText&key=${YOUTUBE_AUTH_KEY}`;
  const URL = `${YOUTUBE_API_URL}/commentThreads?${urlParams}`;

  return fetch(URL).then((data) => data.json());
};
