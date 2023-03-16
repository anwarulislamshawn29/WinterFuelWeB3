import axios from 'axios';

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/auth';
const CLIENT_ID = '579555840797-qodit28qd5kunt9lej7mvgn4v9b2p619.apps.googleusercontent.com';
const REDIRECT_URI = 'https://localhost/3000';
const SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';
const ACCESS_TYPE = 'offline';

export const getCodeFromGoogle = async () => {
  try {
    const response = await axios.get(`${GOOGLE_AUTH_URL}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&access_type=${ACCESS_TYPE}`);
    if (response.request.responseURL.startsWith(REDIRECT_URI)) {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      return code;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get code from Google');
  }
};