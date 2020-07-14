import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';

const PlayerBar = ({ url }) => {
  return (
    <div className="music_player" style={{ marginBottom: '41px' }}>
      <AudioPlayer
        autoPlay
        src={url ?? 'http://49.236.212.220:88/broadwave.mp3'}
        onPlay={(e) => console.log('onPlay')}
        // other props here
      />
    </div>
  );
};

export default PlayerBar;
