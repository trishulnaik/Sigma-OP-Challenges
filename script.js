function createCard(
  vnumber,
  title,
  cName,
  views,
  monthsOld,
  duration,
  thumbnail
) {
  // finish the function
  let textViews = views;
  if (textViews > 1000000) {
    textViews = `${(views / 1000000).toFixed(2)}M`;
  } else if (textViews < 1000000 && textViews > 1000) {
    textViews = `${(views / 1000).toFixed(2)}K`;
  }
  let html = `
    <div class="item">
        <div class="index-number">
            ${videoNumber}
        </div>
        <div class="image-container">
            <img src=${thumbnail}-${vnumber} alt=thumbnail-${videoNumber}</img>
            <span class="video-duration">${duration}</span>
        </div>
        <div class="card-description">
            <h3 class="video-title">${title}</h3>
            <div class="desciption">
                <span class="channel-name">${cName}</span>
                <span class="views">${textViews}</span>
                <span class="uploaded">${monthsOld} months ago</span>
            </div>
        </div>`;
  document.querySelector(".container").innerHTML += html;
}

// creation of cards
let videoNumber = 23;
createCard(
  videoNumber,
  `Introduction to BackEnd | Sigma Web Development - Tutorial #${videoNumber}`,
  "Code with Harry",
  13459000,
  7,
  "32:34",
  "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg"
);
