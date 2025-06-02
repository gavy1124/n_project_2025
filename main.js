/**
 * 랜덤번호지정
 * 유저) 번호 입력
 * 유저) go버튼 클릭
 * 
 * 시스템)
 * 랜덤숫자 맞추면 --> 맞췄습니다!
 * 랜덤숫자 > 유저입력 --> Down
 * 랜덤숫자 < 유저입력 --> Up
 * Reset버튼 클릭시 --> 게임 리셋
 * 처음 5번 기회제공 (모두 소진시 종료, 버튼 disable)
 * 유저가 1~100 범위 밖 숫자 입력시 --> 안내 (기회차감x)
 * 유저가 이미 입력한 숫자를 재입력시 --> 안내 (기회차감x)
 * 
 */

let computerNum = 0;

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100);
    console.log('정답 : ', computerNum);
}
pickRandomNum()