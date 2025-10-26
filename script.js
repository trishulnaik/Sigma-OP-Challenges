function createCard(vnumber, title, cName, views, monthsOld, duration ,thumbnail){
    // finish the function
    const videoNumber = document.querySelector(".container .index-number");
    videoNumber.textContent = vnumber;
    const thumbailContainer = document.querySelector(".image-container")
    thumbailContainer.style.backgroundImage = `url(${thumbnail})`;
    document.querySelector(".video-duration").textContent = duration;
    const vtitle = document.querySelector(".container .video-title");
    vtitle.textContent = title;
    document.querySelector(".channel-name").textContent = cName;

    let textViews = views;
    if(textViews>1000000) {textViews = `${(views/1000000).toFixed(2)}M`}
    else if(textViews<1000000 && textViews>1000){
        textViews = `${(views/1000).toFixed(2)}K`
    }

    document.querySelector(".views").textContent = textViews;
    document.querySelector(".uploaded").textContent = `${monthsOld} months ago`;
}

let videoNumber = 23;
createCard(videoNumber, `Introduction to BackEnd | Sigma Web Development - Tutorial #${videoNumber}`, "Code with Harry", 13459000, 7, "32:34", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg")