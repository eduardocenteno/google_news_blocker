{
  "manifest_version": 3,
  "name": "Google News Blocker",
  "version": "1.0",
  "description": "Allows toggling the visibility of Google News in search results.",
  "permissions": ["activeTab", "scripting", "storage"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["*://*.google.com/*"],
      "js": ["content.js"]
    }
  ],
  "icons": {
    "48": "icon48.png",
    "128": "icon128.png"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon48.png"
  }
}
