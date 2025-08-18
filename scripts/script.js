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
  const localStorageSavedBooks = localStorage.getItem('books');
  if (localStorageSavedBooks) {
    books = JSON.parse(localStorageSavedBooks); // overwrite books with saved version, books is stored in localStorage (as JSON).
  }
  renderBooks();

  // After rendering, re-apply liked class for localStorage
  books.forEach((book, index) => {
    const heartIcon = document.getElementById(`heart-${index}`);
    const likesRef = document.getElementById(
      `numberOfLikesFromPeople-${index}`
    );

    if (book.liked) {
      heartIcon.classList.add('liked');
    }
    likesRef.innerText = book.likes; // make sure UI matches saved likes
  });
}

function renderBooks() {
  let bookRef = document.getElementById('content'); // Finds the HTML element with the id="content" in your HTML
  bookRef.innerHTML = '';

  for (let i = 0; i < books.length; i++) {
    // Loops through every book in your books array. i is the index of the current book.
    bookRef.innerHTML += getHTMLForBookTemplate(i); // Calls getHTMLForBoook(i). This function returns a block of HTML for the i-th book. Appends (+=) that HTML to whatever is already inside bookRef.

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
        commentsRef.innerHTML += getHTMLForCommentsTemplate(i, j); // Calls getHTMLForCommentsTemplate(i, j) which returns HTML for one specific comment of one specific book.
        // Appends this HTML to the commentsRef container so it shows up on the page
        //You pass it i (the current book’s index) and j (the current comment’s index for that book)
      }
    } else {
      commentsRef.innerHTML = `<div class="gap_for_values"><div></div><i>No comments yet</i></div>`; // if no comments are written yet
    }
  }
}

// heart icon likes
function toggleLike(indexBook) {
  // It checks if the heart already has the "liked" class
  // indexBook, it takes indexBook as a parameter → this tells the function which book in the books array we’re updating
  const likesRef = document.getElementById(
    `numberOfLikesFromPeople-${indexBook}`
  ); // Finds the <span> where the number of likes is displayed. Example: for book 0 → document.getElementById("numberOfLikesFromPeople-0"). Saves a reference to it in likesRef
  const heartIcon = document.getElementById(`heart-${indexBook}`); // Finds the <span> element for the heart icon of this book
  let currentLikes = parseInt(likesRef.innerText); // Reads the current number of likes from the likesRef element’s text. parseInt converts it from a string "1250" into the number 1250

  if (heartIcon.classList.contains('liked')) {
    // Checks if the heart icon already has the class "liked". (if true → user already liked). "liked" is what you add when the user has clicked the heart (turning it red, for example). So this condition means: “Has the user already liked this book?”
    // Unlike
    likesRef.innerText = currentLikes - 1; // If the book is already liked: Decrease the like counter by 1 (currentLikes - 1) and update the <span> text.
    books[indexBook].likes--; // update in books array (for localStorage functionality), substract one like from the value of the key "likes"
    books[indexBook].liked = false;
    heartIcon.classList.remove('liked'); // Remove "liked" class from the heart so the heart goes back to white
  } else {
    // Like
    likesRef.innerText = currentLikes + 1; // Increase the number shown (currentLikes + 1)
    books[indexBook].likes++; // update in books array (for localStorage functionality), add one like to the value of the key "likes"
    books[indexBook].liked = true;
    heartIcon.classList.add('liked'); // Add "liked" class so the heart turns red
  }
  // Update DOM for localStorage
  likesRef.innerText = books[indexBook].likes;

  // Save updated books array to localStorage
  localStorage.setItem('books', JSON.stringify(books));
}

function addComment(indexBook) {
  // Get input fields for this specific book
  const nameInput = document.getElementById(`newCommentName-${indexBook}`);
  const textInput = document.getElementById(`newCommentText-${indexBook}`);
  const commentsRef = document.getElementById(`comments${indexBook}`); // comments container for this specific book
  const errorMsg = document.getElementById(`error_message-${indexBook}`);

  // Read values
  const name = nameInput.value.trim(); // get typed in value and trim() removes empty space
  const comment = textInput.value.trim();
  console.log(errorMsg);
  // Simple validation (no empty comments)
  if (name === '' || comment === '') {
    errorMsg.innerHTML = '<div>Please type in a name and comment</div>';
    errorMsg.style.display = 'block'; // Guard clause: if either field is empty, show a message and stop (prevents adding empty comments)
    return;
  }

  errorMsg.style.display = 'none';

  // Add new comment to the books array
  books[indexBook].comments.push({
    // Add a new comment object to the correct book’s comments array
    name: name,
    comment: comment,
  });

  // Update the UI without re-rendering everything: append HTML for just the newly added comment.
  commentsRef.innerHTML += getHTMLForCommentsTemplate(
    indexBook,
    books[indexBook].comments.length - 1 // books[indexBook].comments.length - 1 is the index of the last (just pushed) comment
  );

  // Clear input fields
  nameInput.value = '';
  textInput.value = '';
}
