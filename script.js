function toggleDropdown(id) {
    const dropdownContent = document.getElementById(id);
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  }
  
  // Close dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };
  // 페이지네이션 버튼 클릭 이벤트
document.querySelectorAll('.page-button').forEach(button => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.page-button').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      // 여기에 페이지 변경에 따른 갤러리 업데이트 코드를 추가할 수 있습니다.
    });
  });
 
// 버튼 클릭 시 페이지 상단으로 이동
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  // 스크롤 이벤트 감지
window.onscroll = function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// 스크롤 이벤트 감지
window.onscroll = function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "flex"; // 스크롤이 일정 높이 이상이면 버튼 보이기
  } else {
    scrollToTopBtn.style.display = "none"; // 스크롤 높이가 낮으면 버튼 숨기기
  }
};

// 버튼 클릭 시 페이지 상단으로 이동
document.getElementById("scrollToTopBtn").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};