'strict';
let books = [
  {
    'name': 'Die Geheimnisse des Ozeans',
    'image': './img/dieGeheimnissedesOzeans.jpg',
    'author': 'Clara Meer',
    'likes': 1250,
    'liked': true,
    'price': 19.99,
    'publishedYear': 2018,
    'genre': 'Fantasy',
    'comments': [
      {
        'name': 'Leser123',
        'comment':
          'Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.',
      },
      {
        'name': 'Bookworm84',
        'comment':
          'Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.',
      },
      {
        'name': 'FantasyFanatic',
        'comment':
          'Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.',
      },
      {
        'name': 'SciFiGuru',
        'comment':
          'Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.',
      },
      {
        'name': 'NovelLover',
        'comment':
          'Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.',
      },
    ],
  },
  {
    'name': 'Der vergessene Pfad',
    'image': './img/dervergessenePfad.jpg',
    'author': 'Maximilian Schwarz',
    'likes': 980,
    'liked': false,
    'price': 14.5,
    'publishedYear': 2021,
    'genre': 'Fantasy',
    'comments': [],
  },
  {
    'name': 'Die Farben des Himmels',
    'image': './img/dieFarbendesHimmels.jpg',
    'author': 'Laura Blau',
    'likes': 1520,
    'liked': true,
    'price': 22.95,
    'publishedYear': 2019,
    'genre': 'Romantik',
    'comments': [
      {
        'name': 'LeserPeter',
        'comment':
          'Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.',
      },
      {
        'name': 'BookLover21',
        'comment':
          'Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.',
      },
      {
        'name': 'FantasyNerd',
        'comment':
          'Fantastische Welten und epische Abenteuer - genau mein Geschmack!',
      },
      {
        'name': 'SciFiEnthusiast',
        'comment':
          'Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.',
      },
      {
        'name': 'ReadingAddict',
        'comment':
          'Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.',
      },
    ],
  },
  {
    'name': 'Das Rätsel der Zeit',
    'image': './img/dasRaetselderZeit.jpg',
    'author': 'Alexander Weiss',
    'likes': 750,
    'liked': false,
    'price': 18.0,
    'publishedYear': 2020,
    'genre': 'Science-Fiction',
    'comments': [
      {
        'name': 'BuchKenner',
        'comment':
          'Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.',
      },
      {
        'name': 'LeseWurm',
        'comment':
          'Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.',
      },
    ],
  },
  {
    'name': 'Der letzte Wächter',
    'image': './img/derletzteWaechter.jpg',
    'author': 'Sabine Grün',
    'likes': 1300,
    'liked': true,
    'price': 16.75,
    'publishedYear': 2017,
    'genre': 'Fantasy',
    'comments': [],
  },
  {
    'name': 'Im Schatten des Mondes',
    'image': './img/imSchattendesMondes.jpg',
    'author': 'Philipp Silber',
    'likes': 890,
    'liked': false,
    'price': 12.3,
    'publishedYear': 2022,
    'genre': 'Science-Fiction',
    'comments': [
      {
        'name': 'BücherLiebhaber',
        'comment':
          'Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.',
      },
      {
        'name': 'Leseratte',
        'comment':
          'Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.',
      },
    ],
  },
  {
    'name': 'Jenseits der Sterne',
    'image': './img/jenseitsderSterne.jpg',
    'author': 'Oliver Schwarz',
    'likes': 1450,
    'liked': true,
    'price': 21.9,
    'publishedYear': 2015,
    'genre': 'Science-Fiction',
    'comments': [
      {
        'name': 'Leser123',
        'comment':
          'Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.',
      },
    ],
  },
  {
    'name': 'Das verborgene Königreich',
    'image': './img/dasverborgeneKoenigreich.jpg',
    'author': 'Elena Gold',
    'likes': 920,
    'liked': false,
    'price': 17.5,
    'publishedYear': 2020,
    'genre': 'Fantasy',
    'comments': [
      {
        'name': 'Bookworm92',
        'comment':
          'Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.',
      },
    ],
  },
  {
    'name': 'Liebe in Zeiten des Krieges',
    'image': './img/liebeinZeitendesKrieges.jpg',
    'author': 'Emilia Rot',
    'likes': 1800,
    'liked': true,
    'price': 19.99,
    'publishedYear': 2016,
    'genre': 'Romantik',
    'comments': [
      {
        'name': 'Bibliophile23',
        'comment':
          'Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.',
      },
      {
        'name': 'StorySeeker',
        'comment':
          'Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.',
      },
      {
        'name': 'SciFiExplorer',
        'comment':
          'Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.',
      },
    ],
  },
];

function init() {
  renderBooks();
  loadFromLocalStorage();
}

function renderBooks() {
  let bookRef = document.getElementById('content');

  for (let i = 0; i < books.length; i++) {
    bookRef.innerHTML += getHTMLForBoook(i);
    let commentsRef = document.getElementById(`comments${i}`);
    for (let j = 0; j < books[i].comments.length; j++) {
      commentsRef.innerHTML += getHTMLForComments(i, j);
    }
  }
}

// toFixed() method converts a number to a string and rounds the string to a specified number of decimals; replace() can be only applied to strings not numbers
function getHTMLForBoook(indexBook) {
  return `
  <div class="book_card">
  <h4 id="nameOfBook">${books[indexBook].name}</h4>
  <div class="book_image_container">
  <img src="${books[indexBook].image}" alt="Cover of ${
    books[indexBook].name
  }" class="book_image" />
  </div>
  <div class="seperator_container">
  <div class="seperator_line"></div> 
  </div>
  <div class="book_details">
  <div class="price_likes_container">
  <div id="price">${books[indexBook].price
    .toFixed(2)
    .replace('.', ',')} € </div>
  <div id="likesFromPeople">${books[indexBook].likes}</div>
  </div>
  <div id="liked"></div>
  <div class="gap_for_values">
  <div>Author:</div>
  <div>${books[indexBook].author}</div>
  </div>
  <div class="gap_for_values">
  <div>Year published:</div>
  <div>${books[indexBook].publishedYear}</div>
</div>
  <div>Genre:</div>
  <div>Comments:</div>
  <div id="comments${indexBook}"></div>
  <div></div>
  </div>
  </div>
  `;
}

function getHTMLForComments(indexA, indexB) {
  return `
  <div>${books[indexA].comments[indexB]}</div>`;
}
