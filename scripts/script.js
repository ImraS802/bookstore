'use strict';

let books = [
  {
    'name': 'The Secrets of the Ocean',
    'image': './img/dieGeheimnissedesOzeans.jpg',
    'author': 'Clara Meer',
    'likes': 1250,
    'liked': false,
    'price': 19.99,
    'publishedYear': 2018,
    'genre': 'Fantasy',
    'comments': [
      {
        'name': 'Reader123',
        'comment':
          'A fascinating adventure book that gripped me from the very first page.',
      },
      {
        'name': 'Bookworm84',
        'comment':
          'A romantic story that touched my heart and made me reflect.',
      },
      {
        'name': 'FantasyFanatic',
        'comment': 'An exciting fantasy world that I could hardly put down.',
      },
      {
        'name': 'SciFiGuru',
        'comment':
          'A clever science fiction novel with interesting time travel concepts and characters.',
      },
      {
        'name': 'NovelLover',
        'comment': 'A book full of magical surprises that delighted me.',
      },
    ],
  },
  {
    'name': 'The Forgotten Path',
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
    'name': 'The Colors of the Sky',
    'image': './img/dieFarbendesHimmels.jpg',
    'author': 'Laura Blue',
    'likes': 1520,
    'liked': false,
    'price': 22.95,
    'publishedYear': 2019,
    'genre': 'Romance',
    'comments': [
      {
        'name': 'ReaderPeter',
        'comment':
          'The plot was captivating and the characters were portrayed incredibly vividly.',
      },
      {
        'name': 'BookLover21',
        'comment': 'A romantic masterpiece that deeply touched and moved me.',
      },
      {
        'name': 'FantasyNerd',
        'comment': 'Fantastic worlds and epic adventures — just my taste!',
      },
      {
        'name': 'SciFiEnthusiast',
        'comment':
          'The time travel elements were brilliant and made the story thrilling.',
      },
      {
        'name': 'ReadingAddict',
        'comment': 'An unforgettable book that took me on a magical journey.',
      },
    ],
  },
  {
    'name': 'The Riddle of Time',
    'image': './img/dasRaetselderZeit.jpg',
    'author': 'Alexander White',
    'likes': 750,
    'liked': false,
    'price': 18.0,
    'publishedYear': 2020,
    'genre': 'Science Fiction',
    'comments': [
      {
        'name': 'BookExpert',
        'comment':
          'An exciting adventure that carried me along from the very beginning.',
      },
      {
        'name': 'Bookworm',
        'comment': 'The love story was heartwarming and beautifully written.',
      },
    ],
  },
  {
    'name': 'The Last Guardian',
    'image': './img/derletzteWaechter.jpg',
    'author': 'Sabine Green',
    'likes': 1300,
    'liked': false,
    'price': 16.75,
    'publishedYear': 2017,
    'genre': 'Fantasy',
    'comments': [],
  },
  {
    'name': 'In the Shadow of the Moon',
    'image': './img/imSchattendesMondes.jpg',
    'author': 'Philip Silver',
    'likes': 890,
    'liked': false,
    'price': 12.3,
    'publishedYear': 2022,
    'genre': 'Science Fiction',
    'comments': [
      {
        'name': 'BookLover',
        'comment':
          'A magical journey through a fascinating fantasy world, absolutely captivating.',
      },
      {
        'name': 'Bookworm',
        'comment': 'A gripping science fiction novel that made me think.',
      },
    ],
  },
  {
    'name': 'Beyond the Stars',
    'image': './img/jenseitsderSterne.jpg',
    'author': 'Oliver Black',
    'likes': 1450,
    'liked': false,
    'price': 21.9,
    'publishedYear': 2015,
    'genre': 'Science Fiction',
    'comments': [
      {
        'name': 'Reader123',
        'comment':
          'A thrilling adventure that carried me along from beginning to end.',
      },
    ],
  },
  {
    'name': 'The Hidden Kingdom',
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
          'A fascinating book that gripped me from the very first page.',
      },
    ],
  },
  {
    'name': 'Love in Times of War',
    'image': './img/liebeinZeitendesKrieges.jpg',
    'author': 'Emily Red',
    'likes': 1800,
    'liked': false,
    'price': 19.99,
    'publishedYear': 2016,
    'genre': 'Romance',
    'comments': [
      {
        'name': 'Bibliophile23',
        'comment':
          'The fantasy world was so vivid, I could hardly put the book down.',
      },
      {
        'name': 'StorySeeker',
        'comment': 'An incredibly moving love story that deeply touched me.',
      },
      {
        'name': 'SciFiExplorer',
        'comment':
          'Exciting visions of the future and interesting characters made this novel unique.',
      },
    ],
  },
];

function init() {
  const localStorageSavedBooks = localStorage.getItem('books');
  if (localStorageSavedBooks) {
    books = JSON.parse(localStorageSavedBooks);
  }
  renderBooks();

  for (let index = 0; index < books.length; index++) {
    const book = books[index];
    const heartIcon = document.getElementById(`heart-${index}`);
    const likesRef = document.getElementById(
      `numberOfLikesFromPeople-${index}`
    );

    if (book.liked) {
      heartIcon.classList.add('liked');
    }
    likesRef.innerText = book.likes;
  }
}

function renderBooks() {
  let bookRef = document.getElementById('content');
  bookRef.innerHTML = '';

  for (let i = 0; i < books.length; i++) {
    bookRef.innerHTML += getHTMLForBookTemplate(i);

    let commentsRef = document.getElementById(`comments${i}`);

    if (books[i].comments.length > 0) {
      for (let j = 0; j < books[i].comments.length; j++) {
        commentsRef.innerHTML += getHTMLForCommentsTemplate(i, j); // Calls getHTMLForCommentsTemplate(i, j) which returns HTML for one specific comment of one specific book.
      }
    } else {
      commentsRef.innerHTML = `<div class="gap_for_values"><div></div><i>No comments yet</i></div>`; // if no comments are written yet
    }
  }
}

function toggleLike(indexBook) {
  const likesRef = document.getElementById(
    `numberOfLikesFromPeople-${indexBook}`
  );
  const heartIcon = document.getElementById(`heart-${indexBook}`);
  let currentLikes = parseInt(likesRef.innerText);

  if (heartIcon.classList.contains('liked')) {
    likesRef.innerText = currentLikes - 1;
    books[indexBook].likes--;
    books[indexBook].liked = false;
    heartIcon.classList.remove('liked');
  } else {
    likesRef.innerText = currentLikes + 1;
    books[indexBook].likes++;
    books[indexBook].liked = true;
    heartIcon.classList.add('liked');
  }
  likesRef.innerText = books[indexBook].likes;

  localStorage.setItem('books', JSON.stringify(books));
}

function addComment(indexBook) {
  const nameInput = document.getElementById(`newCommentName-${indexBook}`);
  const textInput = document.getElementById(`newCommentText-${indexBook}`);
  const commentsRef = document.getElementById(`comments${indexBook}`);
  const errorMsg = document.getElementById(`error_message-${indexBook}`);

  const name = nameInput.value.trim();
  const comment = textInput.value.trim();
  if (name === '' || comment === '') {
    errorMsg.innerHTML = '<div>Please type in a name and comment</div>';
    errorMsg.style.display = 'block';
    return;
  }

  errorMsg.style.display = 'none';

  books[indexBook].comments.push({
    name: name,
    comment: comment,
  });

  localStorage.setItem('books', JSON.stringify(books));

  commentsRef.innerHTML += getHTMLForCommentsTemplate(
    indexBook,
    books[indexBook].comments.length - 1
  );

  nameInput.value = '';
  textInput.value = '';
}

function checkScrollForBackToTopButtonAppearence() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
