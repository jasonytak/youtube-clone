import axios from 'axios';

const KEY = 'AIzaSyC8hLjHNLnSyhxbGTAn3zaILSiL7oMPLqQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});