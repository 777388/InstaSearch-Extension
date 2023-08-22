chrome.contextMenus.create({
  id: "InstaSearch",
  title: "InstaSearch",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "InstaSearch") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://www.instagram.com/explore/search/keyword/?q=${selectedText}`
    chrome.tabs.create({ url: archiveUrl });
  }
});
