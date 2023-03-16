import axios from 'axios';
import keys from '../resources/youtube/keys.json';
import { getCodeFromGoogle } from '../resources/youtube/getcode';

const qs = require('qs');

class YoutubeAPI {
  async handleLike() {
    const code = await getCodeFromGoogle();
      
const data = {
     code: code,
     client_id: '579555840797-qodit28qd5kunt9lej7mvgn4v9b2p619.apps.googleusercontent.com',
     client_secret: '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',
     redirect_uri: 'https://goodproduck.com',
     grant_type: 'authorization_code'
   };
   
   const options = {
     method: 'post',
     url: 'https://oauth2.googleapis.com/token',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     },
     data: qs.stringify(data)
   };
   
   
     const response = await axios(options);
     const token = response.data.access_token;

     const videoConfig = {
  method: 'get',
  url: `https://www.googleapis.com/youtube/v3/videos/getRating?id=${keys.videoId}&access_token=${token}`,
  headers: {}
};

      const videoResponse = await axios(videoConfig);
      const rating = videoResponse.data.items[0].rating;
      return rating;
    } catch (error) {
      console.error(error);
    }
  }


export default new YoutubeAPI();
