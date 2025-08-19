'use strict';

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
                    <span class="numberOfLikesFromPeople" id="numberOfLikesFromPeople-${indexBook}">${
    books[indexBook].likes
  }</span>
                    <span id="heart-${indexBook}" class="heart_icon" onclick="toggleLike(${indexBook})">&#10084;
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
         <div class="inputField_name_text_container">
            <input class="input_field_name" id="newCommentName-${indexBook}" type="text" placeholder="Your name" />
            </div>
            <div class="inputField_name_text_container"><input class="input_field" id="newCommentText-${indexBook}"
                    type="text" placeholder="Write a comment..." />
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
  const commentObj = books[indexA].comments[indexB];
  return `
      <div class="gap_for_values_comments">
        <div class="comment_name">${commentObj.name}:</div>
        <div class="comment_text">${commentObj.comment}</div>
    </div>
`;
}
