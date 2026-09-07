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

// 2. 커스텀 D-Day 계산 기능
const dateInput = document.getElementById('target-date-input');
const dDayElement = document.getElementById('d-day-count');

function calculateDDay() {
  if (!dateInput || !dDayElement) return;

  const selectedDateValue = dateInput.value;
  
  if (!selectedDateValue) {
    dDayElement.innerText = "목표 날짜를 선택하세요";
    return;
  }

  const now = new Date();
  const targetDate = new Date(selectedDateValue);
  
  // 시간 단위를 맞추기 위해 오늘 날짜의 시/분/초를 0으로 초기화
  now.setHours(0, 0, 0, 0);

  const diffTime = targetDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    dDayElement.innerText = `목표일까지 D-${diffDays}일`;
  } else if (diffDays === 0) {
    dDayElement.innerText = `🔥 오늘이 D-Day입니다!`;
  } else {
    dDayElement.innerText = `지나간 날짜입니다 (D+${Math.abs(diffDays)}일)`;
  }
}

// 날짜 선택 창의 값이 바뀔 때마다 D-Day 재계산
if (dateInput) {
  dateInput.addEventListener('change', calculateDDay);
}

// 3. 다크 모드 토글 기능
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
setInterval(updateClock, 1000);