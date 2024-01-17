import axios from 'axios'

const KEY = 'AIzaSyBQ_os2P91OkRRRamEudH0Z7FYo52ZYDcw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, statistics',
        key: KEY
    }
  });