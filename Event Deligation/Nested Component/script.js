let commentContainers = document.querySelector(".comment-container");

commentContainers.addEventListener("click", function (e) {
  let closestCommentContainer = e.target.closest(".comment-container");
  if (e.target.classList.contains("reply")) {
    let commentReplyContainer = document.createElement("div");
    commentReplyContainer.setAttribute("class", "comment-reply-container");
    // console.log(commentReplyContainer);
    commentReplyContainer.innerHTML = `<input placeholder="write you comment reply" type="text">
        <button class="btn-submit">submit</button>`;
    closestCommentContainer.appendChild(commentReplyContainer);
  } else if (e.target.classList.contains("btn-submit")) {
    let closestCommentReply = e.target.closest(".comment-reply-container");
    let input = closestCommentReply.querySelector("input");
    let value = input.value;

    let newComment = document.createElement("div");
    newComment.setAttribute("class", "comment-container");
    newComment.innerHTML = `<h3>${value} </h3><div class="reply">Reply</div>`;
    closestCommentContainer.appendChild(newComment);
    closetCommentReply.remove();
  }
});
