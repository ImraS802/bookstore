'use strict';

let books = [
  {
    'name': 'The Secrets of the Ocean',
    'image': './img/dieGeheimnissedesOzeans.jpg',
    'author': 'Clara Meer',
    'likes': 1250,
    'liked': true,
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
    'liked': true,
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
    'liked': true,
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
    'liked': true,
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
  const localStorageSavedBooks = localStorage.getItem('books'); // Looks into the browser’s localStorage and tries to fetch the item stored under the key "books". localStorage.getItem() always returns a string (or null if nothing is found)
  if (localStorageSavedBooks) {
    // Checks if something was actually found in localStorage. If yes, the block runs. If no, nothing happens and your code will use the default books array you defined above.
    books = JSON.parse(localStorageSavedBooks); // localStorage only stores strings. JSON.parse() converts the saved JSON string back into a real JavaScript array of book objects. Then you overwrite your current books array with this saved version from the localStorage
  }
  renderBooks(); // This generates the HTML

  // After rendering, re-apply liked class for localStorage
  for (let index = 0; index < books.length; index++) {
    // Loops through every book in your books array
    const book = books[index]; // book is the current book object; index is its position in the array (used to build the correct IDs for DOM elements)
    const heartIcon = document.getElementById(`heart-${index}`); // Finds the DOM element for that book’s heart icon
    const likesRef = document.getElementById(
      // Finds the DOM element showing the number of likes for that book
      `numberOfLikesFromPeople-${index}`
    );

    if (book.liked) {
      // Checks if the saved book object has liked: true;
      heartIcon.classList.add('liked'); // If yes → add the liked class to the heart. The liked class in your CSS makes the heart red. This ensures hearts stay red after a reload
    }
    likesRef.innerText = book.likes; // Updates the text inside the like counter <span> to match the saved number of likes from localStorage. This ensures the count stays correct across reload
  }
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

  localStorage.setItem('books', JSON.stringify(books)); // Save updated books array to localStorage
  // Global declaration of 'books', referring to let books = [...] which holds your array of book objects; Convert the current books array into a JSON string; Save that string under the key "books" in localStorage

  // Update the UI without re-rendering everything: append HTML for just the newly added comment.
  commentsRef.innerHTML += getHTMLForCommentsTemplate(
    indexBook,
    books[indexBook].comments.length - 1 // books[indexBook].comments.length - 1 is the index of the last (just pushed) comment
  );

  // Clear input fields
  nameInput.value = '';
  textInput.value = '';
}
