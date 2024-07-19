document.addEventListener('DOMContentLoaded', function () {
  const toggleNews = document.getElementById('toggleNews');

  // Load the current state from storage
  chrome.storage.sync.get(['hideNews'], function (data) {
    toggleNews.checked = data.hideNews || false;
  });

  // Save the state to storage when the checkbox is toggled
  toggleNews.addEventListener('change', function () {
    chrome.storage.sync.set({ hideNews: toggleNews.checked });
  });
});
