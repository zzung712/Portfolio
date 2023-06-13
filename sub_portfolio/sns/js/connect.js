const friendlistBox = document.querySelector('.friendlist_box');
const follow = document.querySelector('.plus');
const following = document.querySelector('.minus');

let followCnt = 6;
let followingCnt = 12;

for (let i = 0; i < 12; i++) {
  let displayStyle = '';
  if (i <= 8) {
    displayStyle = 'style="display: none;"';
  }

  friendlistBox.innerHTML += `
    <ul class="friendlist fb ic" ${displayStyle}>
      <li>
        <ul class="friend_name fb ic">
          <li><img src="img/chat_pro${i+1}.jpg"></li>
          <li><p>cozleID_${i+1}</p></li>
        </ul>
      </li>
      <li>
        <ul class="friend_btn fb ic">
          <li class="delete fs"><button onclick="friendClick(event, 'unfollow')">UnFollow</button></li>
          <li class="add fe"><button onclick="friendClick(event, 'follow')">Follow</button></li>
        </ul>
      </li>
    </ul>
    <!-- friendlist end -->
  `;
}

function friendClick(event, action) {
  if (action === 'follow') {
    follow.textContent = ++followCnt;
  } else if (action === 'unfollow') {
    following.textContent = --followingCnt;
  }
  
  const friendDelete = event.target.closest('.friendlist');
  friendDelete.style.display = 'none';
}


//showmore 더보기
const showmore = document.querySelector('.showmore');
const friendlist = document.querySelectorAll('.friendlist');

let show = false;

showmore.addEventListener('click', function() {
  if (show) {
    friendlist.forEach(function(friend, box) {
      if (box < 9) {
        friend.style.display = 'none';
      }
    });
    show = false;
  } else {
    friendlist.forEach(function(friend, box) {
      if (box < 9) {
        friend.style.display = '';
      }
    });
    show = true;
  }
});

// 친구추천 목록 반복
const recommendBox = document.querySelector('.recommend_box');

for (let i = 0; i < 12; i++) {
  recommendBox.innerHTML += `
  <ul class="people fc fw">
  <li class="fc ic"><img class="pr" src="img/chat_pro${i+1}.jpg"></li>
  <li class="info_box">
   <ul class="info_text">
    <li class="fc ie"><h3 class="info_name">Name_${i+1}</h3></li>
    <li class="fc ic"><p class="info_tit">WebPublish Developer</p></li>
    <li class="fc ic"><p class="info_intro">안녕하세요. 웹퍼블리셔 name입니다.</p></li>
    <li class="fc ic"><button class="info_btn" onclick="followClick()">팔로잉하기</button></li>
   </ul>
  </li>
 </ul>
 <!-- people end -->
  `;
}

function followClick() {
  following.textContent = ++followCnt;
  const recommendDelete = event.target.closest('.people');
  recommendDelete.style.display = 'none';
}