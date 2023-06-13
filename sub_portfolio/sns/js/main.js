const cblcok = document.getElementById('cblcok');
const codepen = document.getElementById('codepen');

cblcok.addEventListener('click', function() {
  codepen.classList.toggle('dn');
});

// 피드안에 피드박스 생성
const feed = document.getElementById('feed');

for (let i = 0; i < 6; i++) {
  const feedBox = document.createElement('div');
  feedBox.className = 'feed_box';

  feedBox.innerHTML = `
    <ul class="feed_id fs ic">
      <li><img src="img/chat_pro${i + 1}.jpg"></li>
      <li><p>cozleID_${i + 1}</p></li>
    </ul>
    <ul class="feed_contents">
      <li class="codeblock">
      </li>
    </ul>
    <div class="tag_wrap fs is fw">
    <ul class="like_box fa">
        <li class="icon_like df ic pr">
          <img class="like" src="img/like.png">
          <span class="like_cnt">14</span>
        </li>
        <li class="icon_scrap df ic">
          <img class="scrap" src="img/scrap.png">
        </li>
        <li class="icon_comment df ic">
          <img class="comment" src="img/comment.png" onclick="toggleComment(${i + 1});">
        </li>
      </ul>
      <ul class="tag">
        <li class="text">
          <p class="tagJS">입력한 text가 출력됩니다. #tag 는 #보라색 으로 #tag 구분은 #띄어쓰기 로 #코드펜 #코드블럭삽입 #코드한눈에보기 #HTML #CSS #JS</p>
        </li>
      </ul>
    </div>
    <div class="comment_wrap dn" id="comment_wrap_${i + 1}">
      <ul class="my_comment df ic">
        <li class="df ic"><img src="img/sns_profile.jpg"><span>yujeong</span></li>
        <li class="width">
          <form action="">
            <input type="text" placeholder="댓글 작성...">
          </form>
        </li>
        <li><button>SEND</button></li>
      </ul>
      <ul class="comment df ic">
        <li class="df ic">
          <img src="img/chat_pro1.jpg">
          <span>cozleID_1</span>
        </li>
        <li class="commt_text"><p>다른 사람의 댓글입니다.</p></li>
      </ul>
    </div>
  `;
  
  feed.appendChild(feedBox);
}

// 좋아요 누르면 +-1 이미지 변경
const like = document.querySelectorAll('.like');
const likeNum = document.querySelectorAll('.like_cnt');

like.forEach((likeClick, index) => {
  likeClick.addEventListener('click', function() {
    const likeImg = this.src;
    const clickImg = likeImg.includes('like_click.png') ? 'img/like.png' : 'img/like_click.png';
    this.src = clickImg;

    const cnt = likeNum[index];
    let likeCnt = parseInt(cnt.textContent.replace(/,/g, ''));

    if (likeImg.includes('like_click.png')) {
      likeCnt -= 1;
    } else {
      likeCnt += 1;
    }

    cnt.textContent = likeCnt.toLocaleString();
  });
});

// 스크랩 이미지 변경
const scrap = document.querySelectorAll('.scrap');

scrap.forEach((scrapClick) => {
  scrapClick.addEventListener('click', function() {
    const scrapImg = this.src;
    const scrapClickImg = scrapImg.includes('scrap_click.png') ? 'img/scrap.png' : 'img/scrap_click.png';
    this.src = scrapClickImg;
  });
});

// 댓글 나타내기
const comment = document.querySelectorAll('.icon_comment');
const commentWrap = document.querySelectorAll('.comment_wrap');

comment.forEach((commentClick, index) => {
  commentClick.addEventListener('click', function() {
    const commentSlide = commentWrap[index];
    commentSlide.classList.toggle('dn');
  });
});

// 태그 글자색 바꾸기
const tagColor = document.querySelectorAll('.feed_box');

tagColor.forEach((feedBox) => {
  const tagText = feedBox.querySelector('.tagJS');
  tagText.innerHTML = tagText.innerHTML.replace(/#([a-zA-Z가-힣]+)/g, '<span style="color: #5f64ca;">#$1</span>');
});