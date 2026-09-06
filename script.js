// 1. 실시간 시계 기능
function updateClock() {
  const now = new Date();
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const clockElement = document.getElementById('live-clock');
  if (clockElement) {
    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
  }
}

// 2. 간단한 D-Day 계산 기능 (예: 2026년 연말까지 남은 날짜)
function updateDDay() {
  const now = new Date();
  const targetDate = new Date('2026-12-31T23:59:59'); // 목표 날짜
  
  const diff = targetDate - now;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  const dDayElement = document.getElementById('d-day-count');
  if (dDayElement) {
    dDayElement.innerText = `2026년 연말까지 D-${daysLeft}일`;
  }
}

// 페이지가 로드되면 즉시 실행 후, 1초(1000ms)마다 시계 갱신
updateClock();
updateDDay();
setInterval(updateClock, 1000);
