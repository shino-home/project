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
/* 다크 모드 토글 버튼 디자인 */
.theme-btn {
  margin-top: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
}// 3. 다크 모드 토글 기능
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function() {
    // body 태그에 'dark-mode' 클래스를 껐다 켰다(toggle) 합니다.
    document.body.classList.toggle('dark-mode');

    // 현재 다크 모드인지 확인 후 버튼 텍스트 변경
    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.innerText = '☀️ 라이트 모드';
    } else {
      themeToggleBtn.innerText = '🌙 다크 모드';
    }
  });
}
