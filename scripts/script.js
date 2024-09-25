// function toggleSidebar() {
//   var sidebar = document.getElementById("mySidebar");
//   var content = document.getElementById("mainContent");
//   var toggleBtn = document.getElementById("sidebarToggle");

  // Toggle the expanded class on the sidebar and content
  // sidebar.classList.toggle("expanded");
  // content.classList.toggle("expanded");

  // Change the button icon based on the sidebar's state
  // if (sidebar.classList.contains("expanded")) {
  //     toggleBtn.innerHTML = "×"; // Sidebar is open
  // } else {
  //     toggleBtn.innerHTML = "☰"; // Sidebar is closed
  // }
// }

const customToggleBtn = document.getElementById('customToggleBtn');
const customNavbarMenu = document.querySelector('.custom-navbar-menu');

customToggleBtn.addEventListener('click', () => {
  customNavbarMenu.classList.toggle('active');
});


