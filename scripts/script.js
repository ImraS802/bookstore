'use strict';

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
  let bookRef = document.getElementById('content'); // Finds the HTML element with the id="content" in your HTML

  for (let i = 0; i < books.length; i++) {
    // Loops through every book in your books array. i is the index of the current book.
    bookRef.innerHTML += getHTMLForBook(i); // Calls getHTMLForBoook(i). This function returns a block of HTML for the i-th book. Appends (+=) that HTML to whatever is already inside bookRef.

    let commentsRef = document.getElementById(`comments${i}`); // Finds the <div> where this specific book’s comments should go.
    // The ID is dynamically generated using template literals:
    // For example, when i = 0, it looks for id="comments0".
    // When i = 1, it looks for id="comments1", and so on.
    // Stores that element reference in commentsRef

    if (books[i].comments.length > 0) {
      // Checks if the current book has any comments
      for (let j = 0; j < books[i].comments.length; j++) {
        // j is the index of the current comment in that book’s comments array
        // if yes, loop through all of them
        commentsRef.innerHTML += getHTMLForComments(i, j); // Calls getHTMLForComments(i, j) which returns HTML for one specific comment of one specific book.
        // Appends this HTML to the commentsRef container so it shows up on the page
        //You pass it i (the current book’s index) and j (the current comment’s index for that book)
      }
    } else {
      commentsRef.innerHTML = `<div class="gap_for_values"><div></div><i>No comments yet</i></div>`; // if no comments are written yet
    }
  }
}

// toFixed() method converts a number to a string and rounds the string to a specified number of decimals; replace() can be only applied to strings not numbers

// <div id="comments${indexBook}"></div> better use empty div because we don't know how many comments will show up and it's a new array, keeps code cleaner by pointing to commentsRef.innerHTML += getHTMLForComments(i, j);
// it seperates the functions's responsibilities getHTMLForComments from getHTMLForBook, each function only does one thing.
// Without ${indexBook}, every <div> would have the same ID, and document.getElementById(...) wouldn’t work (because IDs must be unique)

// heart icon explained: id="numberOfLikesFromPeople-${indexBook}" makes the ID unique for each book (numberOfLikesFromPeople-0, numberOfLikesFromPeople-1, etc.). ${indexBook} is string interpolation:It inserts the actual index of the book (0, 1, 2, …) into the string.
// ${books[indexBook].likes} inserts the actual number of likes from the book object
// &#10084; is the HTML entity for the heart symbol. onclick="toggleLike(${indexBook}, this)" → when clicked, it calls your toggleLike function: indexBook tells the function which book is being liked/unliked.
// this (parameter in onclick="toggleLike(${indexBook}, this)") Inside an inline onclick, this refers to the DOM element that was clicked. In this case, it is the <span class="heart_icon"> itself.
// So when you click the heart, the call looks like: toggleLike(0, <span class="heart_icon">♥</span>). So here: indexBook = 0heartIcon = <span class="heart_icon">♥</span> (the actual HTML element that was clicked).
// That’s why inside your function you can write: if (heartIcon.classList.contains('liked')) {...}
function getHTMLForBook(indexBook) {
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
          .replace('.', ',')} € 
        </div>
      <div class="likes_container">
        <span id="numberOfLikesFromPeople-${indexBook}">${
    books[indexBook].likes
  }</span>
        <span id="heart-${indexBook}" 
              class="heart_icon" 
              onclick="toggleLike(${indexBook})">&#10084;
        </span>
     </div>
  </div>
  <div class="gap_for_values">
      <div>Author:</div>
    <div>${books[indexBook].author}</div>
</div>
    <div class="gap_for_values">
      <div>Year published:</div>
    <div>${books[indexBook].publishedYear}</div>
</div>
   <div class="gap_for_values">
      <div>Genre:</div>
    <div>${books[indexBook].genre}</div>
  </div>
    <div class="comments_headline">Comments:</div>
      <div id="comments${indexBook}"></div>
  </div>
  <div class="add_comment">
    <input id="commentName-${indexBook}" type="text" placeholder="Your name" />
    <input id="commentText-${indexBook}" type="text" placeholder="Write a comment..." />
      <button onclick="addComment(${indexBook})">
        Post
      </button>
</div>

</div>
  `;
}

function getHTMLForComments(indexA, indexB) {
  // indexA → the index of the book in the books array. indexB → the index of the comment inside that book’s comments array
  const commentObj = books[indexA].comments[indexB]; // books[indexA] → selects the book at position indexA. .comments[indexB] → selects the comment at position indexB inside that book’s comments
  return `
   <div class="gap_for_values_comments">
    <div class="comment_name">${commentObj.name}:</div>
    <div class="comment_text">${commentObj.comment}</div>
  </div>
`;
}

// heart icon likes
function toggleLike(indexBook) {
  // It checks if the heart already has the "liked" class
  // indexBook, tells the function which book in your books array was clicked
  const likesRef = document.getElementById(
    `numberOfLikesFromPeople-${indexBook}`
  ); // Finds the <span> where the number of likes is displayed. Example: for book 0 → document.getElementById("numberOfLikesFromPeople-0"). Saves a reference to it in likesRef
  const heartIcon = document.getElementById(`heart-${indexBook}`); // Finds the <span> element for the heart icon of this book
  let currentLikes = parseInt(likesRef.innerText); // Reads the text inside the likesRef element (the number of likes). parseInt converts it from a string "1250" into the number 1250

  if (heartIcon.classList.contains('liked')) {
    // Checks if the heart icon already has the class "liked". (if true → user already liked). "liked" is what you add when the user has clicked the heart (turning it red, for example). So this condition means: “Has the user already liked this book?”
    // Unlike
    likesRef.innerText = currentLikes - 1; // If the book is already liked: Decrease the like counter by 1 (currentLikes - 1) and update the <span> text.
    heartIcon.classList.remove('liked'); // Remove "liked" class from the heart so the heart goes back to white
  } else {
    // Like
    likesRef.innerText = currentLikes + 1; // Increase the number shown (currentLikes + 1)
    heartIcon.classList.add('liked'); // Add "liked" class so the heart turns red
  }
}
