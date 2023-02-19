/** @format */

import axios from 'axios';
const key = 'AIzaSyC4Zuy3gqBLlb7HetFpeXsJzoX6YHL7Ajo';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',

  params: {
    part: 'snippet',
    type: 'video',
    key: key,
    maxResults: 50,
  },
});
