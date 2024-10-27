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

window.onscroll = function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const instagramBtn = document.getElementById("instagramBtn");
  if (window.scrollY > 200) { // 스크롤이 200px 이상 내려가면
    scrollToTopBtn.style.display = "flex";
    instagramBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
    instagramBtn.style.display = "none";
  }
};

// 위로 이동 버튼 클릭 시 페이지 상단으로 스크롤
document.getElementById("scrollToTopBtn").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


// 버튼 클릭 시 페이지 상단으로 이동
document.getElementById("scrollToTopBtn").onclick = function() {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
};
// 드롭다운 메뉴 표시 및 선택한 항목으로 버튼 텍스트 변경
function toggleDropdown(dropdownId) {
const dropdownContent = document.getElementById(dropdownId);
dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// 드롭다운 메뉴 항목 선택 시 버튼 텍스트 변경 함수
function setDropdownText(buttonId, text) {
const button = document.getElementById(buttonId);
button.textContent = text;
}

// 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", () => {
// 첫 번째 드롭다운
document.querySelectorAll("#dropdown-content-1 a").forEach(item => {
  item.addEventListener("click", (event) => {
    setDropdownText("dropdown-button-1", event.target.textContent);
    toggleDropdown("dropdown-content-1");
  });
});

// 세 번째 드롭다운
document.querySelectorAll("#dropdown-content-2 a").forEach(item => {
  item.addEventListener("click", (event) => {
    setDropdownText("dropdown-button-2", event.target.textContent);
    toggleDropdown("dropdown-content-2");
  });
});
});
 
