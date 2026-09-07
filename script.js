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

// 2. D-Day 계산 기능
function updateDDay() {
  const now = new Date();
  const targetDate = new Date('2026-12-31T23:59:59');
  
  const diff = targetDate - now;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  const dDayElement = document.getElementById('d-day-count');
  if (dDayElement) {
    dDayElement.innerText = `2026년 연말까지 D-${daysLeft}일`;
  }
}

// 3. 다크 모드 토글 기능 (수정완료)
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.innerText = '☀️ 라이트 모드';
    } else {
      themeToggleBtn.innerText = '🌙 다크 모드';
    }
  });
}

// 4. 초기 실행 및 1초 주기 타이머
updateClock();
updateDDay();
setInterval(updateClock, 1000);