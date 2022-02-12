const urls = new Map();
urls.set('url-1', 'https://www.facebook.com/');
urls.set('url-2', 'https://www.google.com/');
urls.set('url-3', 'https://www.yahoo.com/');

chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`);
    chrome.tabs.create({ url: urls.get(command) });
});