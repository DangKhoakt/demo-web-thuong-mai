// Sao chép menu cho điện thoại di động
function copyMenu() {
    // Sao chép nội dung bên trong .dpt-cat vào .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // Sao chép nội dung bên trong .header-nav nav vào .off-canvas nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // Sao chép nội dung bên trong .header-top .wrapper vào .off-canvas .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

// show mobile menu
const menuButton = document.querySelector('.trigger');
    closeButton = document.querySelector('.t-close');
    addclass = document.querySelector('.site')
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() {  
    addclass.classList.remove('showmenu')
})

// hiện menu cho điện thoại 

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggler));

function toggler(e) {
    e.preventDefault();
    submenu.forEach((item) => item !== this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classlist !== 'expand') {
        this.closest('.has-child').classList.toggle('expand');
    }
}

// Hien menu cho dien thoai

// const submenu = document.querySelectorAll('.has-child .icon-small');
// submenu.forEach((menu) => menu.addEventListener('click', toggler));

// function toggler(e) {
//     e.preventDefault();
//     submenu.forEach((item) => item !== this ? item.closest('.has-child').classList.remove('expand') : null);
//     if (this.closest('.has-child').classList !== 'expand') {
//         this.closest('.has-child').classList.toggle('expand');
//     }
// }


// slider

const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
  });


