import 'whatwg-fetch';
import Model from './Spotify-Track/model';
import View from './Spotify-Track/view';
import data from './data';


console.log(data['tracks']);

const results = document.querySelector('.results');


data['tracks'].items.forEach((track) => {
  const model = new Model(track);
  const view = new View(model);
  results.appendChild(view.track);
  view.render();
});
