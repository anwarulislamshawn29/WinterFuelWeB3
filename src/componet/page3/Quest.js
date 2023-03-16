import React, { useState, useEffect } from 'react';
import YoutubeAPI from '../../apis/youtube';
import keys from '../../resources/youtube/keys.json'

function Quest() {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
      async function fetchData() {
        const response = await YoutubeAPI.handleLike();
        if (response === 'like') {
          setLiked(true);
        } else {
          setLiked(false);
        }
      }
      fetchData();
    }, []);
const url = `https://www.youtube.com/watch?v=${keys.videoId}`
  return (
    <div>
    <div>
        
      <a href={url} target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=zNABOcxGkt8</a><br></br>
      <label>{liked ? 'Liked' : 'Not liked'}</label>
    </div>
  </div>
  );
}

export default Quest;
