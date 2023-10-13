$(document).ready(function () {
  function fetchposts() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      success: function (data) {
        showPosts(data);
        console.log(data);
      },
      error: function (error) {
        alert("Error" + error);
      },
    });
  }

  function likeCount(count, postItem) {
    const likeCountE = postItem.find(".like-count");

    console.log(likeCountE)

    likeCountE.text(count);
  }

  function showPosts(posts) {
    const postItems = $("#postitem");

    posts.slice(0, 5).forEach(function (post) {
      const item = $('<div class="mt-3">');

      var countLike = 0;

      item.html(`<div class="avatar-main">
              <img
                src="./assets/images/profile-picture.jpg"
                alt="Jessica"
                class="avatar" />&nbsp;
              <span class="avatar-name">Jessica</span>
            </div>
            <div class="post-text mt-3">
              <div class="post-title">
                <h4>
    ${post.title}
                </h4>
              </div>
              <div class="post-description">
                <p>
${post.body}
                </p>
              </div>
              <div class="like-post">
                <button class="w-100 btn like-btn">
                  <i class="bi bi-hand-thumbs-up fs-24"></i>
                  &nbsp;<span class="like-count">${countLike}</span>
                </button>
              </div>
            </div>`);

      item.find(".like-btn").on("click", function () {
        countLike++;
        likeCount(countLike, item);
      });

      postItems.append(item);
    });
  }

  fetchposts();
});
