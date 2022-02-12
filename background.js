chrome.runtime.onInstalled.addListener(() => {
    const urls = ['https://www.facebook.com/', '', '', '', '', '', '', '', '', ''];
    chrome.storage.sync.set({ urls }, () => {
        console.log("urls set");
    });
})

chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`);
    const number = parseInt(command.replace('url-', ''));
    chrome.storage.sync.get("urls", function (storage) {
        chrome.tabs.create({ url: storage.urls[number] });
    })
});

// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         console.log(sender.tab ?
//             "from a content script:" + sender.tab.url :
//             "from the extension");
//         if (request.greeting === "hello")
//             sendResponse({ farewell: "goodbye" });
//         console.log(request.greeting)
//     }
// );
