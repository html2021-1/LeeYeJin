$(document).ready(function() {
  // header는 4초 후에 보여진다
  $('#header').addClass('active');

  // 0.5초 뒤에 #wrap.load 를 추가해서 이미지와 흰육각형 회전
  setTimeout(function () {
    $('#wrap').addClass('load');
  }, 500);

  // 텍스트 bounce 되어 내려오기
  $('#cnt1 h2 .tit span').each(function (idx) {
    $(this).css('animationDelay', 2.5+idx*0.1+'s').addClass('ani')
  });
});