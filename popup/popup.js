const url_0_input = document.getElementById('0');
const url_1_input = document.getElementById('1');
const url_2_input = document.getElementById('2');
const url_3_input = document.getElementById('3');
const url_4_input = document.getElementById('4');
const url_5_input = document.getElementById('5');
const url_6_input = document.getElementById('6');
const url_7_input = document.getElementById('7');
const url_8_input = document.getElementById('8');
const url_9_input = document.getElementById('9');

chrome.storage.sync.get("urls", function (storage) {
    url_0_input.value = storage.urls[0];
    url_1_input.value = storage.urls[1];
    url_2_input.value = storage.urls[2];
    url_3_input.value = storage.urls[3];
    url_4_input.value = storage.urls[4];
    url_5_input.value = storage.urls[5];
    url_6_input.value = storage.urls[6];
    url_7_input.value = storage.urls[7];
    url_8_input.value = storage.urls[8];
    url_9_input.value = storage.urls[9];
})

// chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//     console.log(response.farewell);
// });