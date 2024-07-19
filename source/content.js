const removeTabs = () => {
  chrome.storage.sync.get(['hideFeed', 'hideNews'], function (data) {
    if (data.hideFeed) {
      // Hide feed logic here
    }
    if (data.hideNews) {
      const newsTab = document.querySelector('a.XIzzdf div.YmvwI[aria-current="page"]');
      if (newsTab && (newsTab.textContent === "News" || newsTab.textContent === "Noticias")) {
        newsTab.parentElement.style.display = 'none';
      }
    }
  });
};

// Run the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', removeTabs);
