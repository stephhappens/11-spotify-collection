import 'whatwg-fetch';
import './katy.json';

class model {
  constructor(data) {
    this.artist = data.artist;
    this.name = data.name;
    this.image = data.image;
    this.href = data.href;
  }
}

const el = spotifyTrack(c);
