// 변수 초기화
let participants = [];
let winner = '';

// HTML 요소 찾기
const nameInput = document.getElementById('name-input');
const addParticipantButton = document.getElementById('add-participant-button');
const participantsList = document.getElementById('participants-list');
const drawWinnerButton = document.getElementById('draw-winner-button');
const winnerElement = document.getElementById('winner');
const resetButton = document.getElementById('reset-button');

// 이벤트 리스너 등록
addParticipantButton.addEventListener('click', addParticipant);
drawWinnerButton.addEventListener('click', drawWinner);
resetButton.addEventListener('click', reset);

// 등록 버튼 클릭 시 실행되는 함수
function addParticipant() {
  const name = nameInput.value.trim();
  if (name) {
    participants.push(name);
    nameInput.value = '';
    renderParticipants();
  }
}

// 참가자 리스트를 HTML에 렌더링하는 함수
function renderParticipants() {
  participantsList.innerHTML = '';
  participants.forEach((participant) => {
    const li = document.createElement('li');
    li.textContent = participant;
    participantsList.appendChild(li);
  });
}

// 추첨 버튼 클릭 시 실행되는 함수
function drawWinner() {
  const numParticipants = participants.length;
  if (numParticipants > 0) {
    const randomIndex = Math.floor(Math.random() * numParticipants);
    winner = participants[randomIndex];
    winnerElement.textContent = `축하합니다! ${winner} 님!`;
  } else {
    winnerElement.textContent = '참가자가 없습니다.';
  }
}

  
// 초기화 버튼 클릭 시 실행되는 함수
function reset() {
  participants = [];
  winner = '';
  renderParticipants();
  winnerElement.textContent = '';
}
