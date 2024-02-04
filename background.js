chrome.runtime.onInstalled.addListener(() => {
    const urls = [
        'https://www.google.com/',
        'https://www.youtube.com/',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ];

    chrome.storage.local.set({ urls }, () => {
        console.log("Default URI keyboard shortcuts saved!");
    });
});

chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`);
    const number = parseInt(command.replace('url-', ''));

    chrome.storage.local.get("urls", function (storage) {
        chrome.tabs.create({ url: storage.urls[number] });
    });
});

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        console.log(message)
    }
);
