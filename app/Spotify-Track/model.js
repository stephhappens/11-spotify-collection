import './data.json';
export default class model {

  constructor(data) {
    this.artist = data.artist;
    this.name = data.name;
    this.image = data.image;
    this.href = data.href;
  }
}

//
//     const el = document.createElement('div');
//     el.classList.add('track');
//     el.innerHTML = `
//   <p class= "character__name"> </p>
//   <p class= "character__profession"> </p>
//   <p class= "character__age"> </p>`;
//   }
// }
//
// render() {
//   el.querySelector('.character__name').innerText = `${c.first} ${c.last}`;
//   el.querySelector('.character__profession').innerText = c.profession;
//   el.querySelector('.character__age').innerText = c.age;
// }
