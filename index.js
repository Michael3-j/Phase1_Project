const url = "https://newsapi.org/v2/top-headlines";
const apiKey = "d5bd1003e8d74022841388bc302fe34b";

// DOM elements
const form = document.querySelector("#search_box");
const searchInput = document.querySelector("#search");
const articleList = document.querySelector(".articleLst");
const reviewDisplay = document.querySelector(".review");
const submitBtn = document.querySelector("#reviewBtn");

// Handle search form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        fetchNews(searchTerm);
    }
});

// Fetch news articles
const fetchNews = async (searchTerm) => {
    try {
        const response = await fetch(`${url}?q=${searchTerm}&apiKey=${apiKey}`);
        if (!response.ok) throw new Error("Failed to fetch news articles");
        const data = await response.json();
        renderArticles(data.articles);
    } catch (error) {
        console.error(error);
        alert("Error fetching news. Please try again later.");
    }
};

// Render articles to the page
const renderArticles = (articles) => {
    articleList.innerHTML = ""; 
    if (articles.length === 0) {
        articleList.innerHTML = "<li>The article is not available for now.</li>";
        return;
    }

    articles.forEach((article) => {
        const articleItem = document.createElement("li");
        articleItem.classList.add("article");
        articleItem.innerHTML = `
            <img src="${article.urlToImage || 'default.jpg'}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p class="description">${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank"> If Interested Read more Here</a>
        `;
        articleList.appendChild(articleItem);
    });
};

// Handle reviews submission
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const reviewInput = document.querySelector("#reviews");
    const reviewText = reviewInput.value.trim();
    if (reviewText) {
        const reviewItem = document.createElement("li");
        reviewItem.textContent = reviewText;
        reviewDisplay.appendChild(reviewItem);
        reviewInput.value = "";
        alert("The Review added Successfuly!");
        
    }
});
