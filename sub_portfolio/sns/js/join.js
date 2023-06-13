function Back() {
  const backconfirm = confirm("뒤로가면 변경된 내용이 저장되지 않습니다. 뒤로 가시겠습니까?");
  if (!backconfirm) {
    return
  }
  window.location.href = 'joinus.html';
}

function Join() {
  const joinconfirm = confirm("저장하시겠습니까?");
  if (joinconfirm) {
    alert("회원가입이 완료되었습니다!");
    window.location.href = 'index.html';
  }
}

function Close() {
  const closeconfirm = confirm("변경된 내용이 저장되지 않습니다. 창을 닫으시겠습니까?");
  if (!closeconfirm) {
    return
  }
  window.location.href = 'index.html';
}