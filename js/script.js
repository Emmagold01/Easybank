const toggleBtn = document.querySelector ('.toggle-btn');
const toggleBtnIcon = document.querySelector ('.toggle-btn i');
const dropDownMenu = document.querySelector ('.dropdown-menu');

toggleBtn.onclick = function toggleDropdownMenu() {
    dropDownMenu.classList.toggle('open');
    const menuIsOpen = dropDownMenu.classList.contains('open');

    if (menuIsOpen) {
        toggleBtnIcon.classList.remove('bx-menu');
        toggleBtnIcon.classList.add('bx-x');
    } else {
        toggleBtnIcon.classList.remove('bx-x');
        toggleBtnIcon.classList.add('bx-menu');
    }
}