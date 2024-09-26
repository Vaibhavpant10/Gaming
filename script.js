

const sideMenu = document.querySelector("#sideMenu");
const menuicon = document.getElementById("menuIcon");

const class_open_menu = document.getElementsByClassName('openMenu');
for (let i = 0; i < class_open_menu.length; i++) {
    class_open_menu[i].addEventListener('click', () => {
        sideMenu.style.transform = 'translateX(-16rem)';
        if(!menuicon.classList.contains('hidden')){
            menuicon.classList.add('hidden');
        }
        
    });
}

const class_close_menu = document.getElementsByClassName('closeMenu');
for (let i = 0; i < class_close_menu.length; i++) {
    class_close_menu[i].addEventListener('click', () => {
        sideMenu.style.transform = 'translateX(16rem)';
        if(menuicon.classList.contains('hidden')){
            menuicon.classList.remove('hidden');
        }
    });
}