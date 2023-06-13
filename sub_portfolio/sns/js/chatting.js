const chat = [];

for (let i = 1; i <= 13; i++) {
  const chatting = {
    image: `chat_pro${i}.jpg`,
    chatId: `cozleID_${i}`,
    sendImg: 'send.png'
  };
  
  chat.push(chatting);
}

function Chat() {
  const chattingList = document.getElementById('chatting');
  let html = '';
  for (const chatting of chat) {
    html += `
      <ul class="chatting fb ic">
        <li class="chat_pro df">
          <img src="img/${chatting.image}">
          <p>${chatting.chatId}</p>
        </li>
        <li><img class="send" src="img/${chatting.sendImg}"></li>
      </ul>
    `;
  }
  chattingList.innerHTML = html;
}

window.onload = function() {
 Chat();
};

const btnremove = document.getElementById("dm_remove");
const btnshow = document.getElementById("dm_X");
const chatting_wrap = document.getElementById("chatting");

chatting_wrap.addEventListener("click", function() {
  this.style.display = "none";
  btnremove.style.display = "none";
  btnshow.style.display = "block";
});

btnshow.addEventListener("click", function() {
  this.style.display = "none";
  btnremove.style.display = "block";
  chatting_wrap.style.display = "block";
});

