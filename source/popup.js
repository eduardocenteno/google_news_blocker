document.addEventListener('DOMContentLoaded', function () {
  const toggleFeed = document.getElementById('toggleFeed');
  const toggleNews = document.getElementById('toggleNews');

  // Load the current state from storage
  chrome.storage.sync.get(['hideFeed', 'hideNews'], function (data) {
    toggleFeed.checked = data.hideFeed || false;
    toggleNews.checked = data.hideNews || false;
  });

  // Save the state to storage when the checkbox is toggled
  toggleFeed.addEventListener('change', function () {
    chrome.storage.sync.set({ hideFeed: toggleFeed.checked });
  });

  toggleNews.addEventListener('change', function () {
    chrome.storage.sync.set({ hideNews: toggleNews.checked });
  });
});
