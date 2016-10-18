import 'whatwg-fetch';
import Model from './Spotify-Track/model';
import View from './Spotify-Track/view';
import data from './data';


const results = document.querySelector('.results');

console.log(data['tracks']);

data['tracks'].items.forEach((track) => {
  const model = new Model(track);
  const view = new View(model);
  results.appendChild(view.track);
  view.render();
});
