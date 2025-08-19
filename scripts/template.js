'use strict';

// toFixed() method converts a number to a string and rounds the string to a specified number of decimals; replace() can be only applied to strings not numbers

// <div id="comments${indexBook}"></div> better use empty div because we don't know how many comments will show up and it's a new array, keeps code cleaner by pointing to commentsRef.innerHTML += getHTMLForComments(i, j);
// it seperates the functions's responsibilities getHTMLForComments from getHTMLForBookTemplate, each function only does one thing.
// Without ${indexBook}, every <div> would have the same ID, and document.getElementById(...) wouldn’t work (because IDs must be unique)

// heart icon explained: id="numberOfLikesFromPeople-${indexBook}" makes the ID unique for each book (numberOfLikesFromPeople-0, numberOfLikesFromPeople-1, etc.). ${indexBook} is string interpolation:It inserts the actual index of the book (0, 1, 2, …) into the string.
// ${books[indexBook].likes} inserts the actual number of likes from the book object
// &#10084; is the HTML entity for the heart symbol. onclick="toggleLike(${indexBook}, this)" → when clicked, it calls your toggleLike function: indexBook tells the function which book is being liked/unliked.
// this (parameter in onclick="toggleLike(${indexBook}, this)") Inside an inline onclick, this refers to the DOM element that was clicked. In this case, it is the <span class="heart_icon"> itself.
// So when you click the heart, the call looks like: toggleLike(0, <span class="heart_icon">♥</span>). So here: indexBook = 0heartIcon = <span class="heart_icon">♥</span> (the actual HTML element that was clicked).
// That’s why inside your function you can write: if (heartIcon.classList.contains('liked')) {...}
function getHTMLForBookTemplate(indexBook) {
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
  <div class="seperator_container">
      <div class="seperator_line_comments"></div> 
    </div>
  <div class="add_comment">
    <input class="input_field" id="newCommentName-${indexBook}" type="text" placeholder="Your name" />
    <div class="commentText_sendButton_container"><input class="input_field" id="newCommentText-${indexBook}" type="text" placeholder="Write a comment..." />
      <button class="comment_button" onclick="addComment(${indexBook})">
        <img src="./img/send.png" alt="send message icon" class="send_message_icon" />
      </button>
      </div>
      <div class="red_error_message" id="error_message-${indexBook}"></div>
</div>

</div>
  `;
}

function getHTMLForCommentsTemplate(indexA, indexB) {
  // indexA → the index of the book in the books array. indexB → the index of the comment inside that book’s comments array
  const commentObj = books[indexA].comments[indexB]; // books[indexA] → selects the book at position indexA. .comments[indexB] → selects the comment at position indexB inside that book’s comments
  return `
   <div class="gap_for_values_comments">
    <div class="comment_name">${commentObj.name}:</div>
    <div class="comment_text">${commentObj.comment}</div>
  </div>
`;
}
