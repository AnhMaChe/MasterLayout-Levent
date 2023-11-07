
            // Hide header on scroll down
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var navbarHeight = $('header').outerHeight();

            $(window).scroll(function(event){
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                var st = $(this).scrollTop();
                
                // Make scroll more than delta
                if(Math.abs(lastScrollTop - st) <= delta)
                    return;
                
                // If scrolled down and past the navbar, add class .nav-up.
                if (st > lastScrollTop && st > navbarHeight){
                    // Scroll Down
                    $('header').removeClass('up').addClass('down');
                } else {
                    // Scroll Up
                    if(st + $(window).height() < $(document).height()) {
                        $('header').removeClass('down').addClass('up');
                    }
                }
                lastScrollTop = st;
            }
        
       
    
        ///
            export default function menu() {
                // Dropdown check //
                // let dropdown = document.querySelectorAll('#menu-main-menu .dropdown');
                // dropdown.forEach((el) => {
                //   el.innerHTML += `<div class="subBtn submenu__btn hov-df"><img src="./assets/images/svg/ic-arr.svg" alt="" /></div>`;
                // });

                // Menu resize mobile //
                let _hd = document.querySelector('.hdJS').offsetHeight;
                document.documentElement.style.setProperty('--headH', `${_hd}px`);
                window.addEventListener('resize', () => {
                    let _vh = window.innerHeight * 0.01;
                    document.documentElement.style.setProperty('--vh', `${_vh}px`);
                    let _hd = document.querySelector('.hdJS').offsetHeight;
                    document.documentElement.style.setProperty('--headH', `${_hd}px`);
                });

                // Menu control mobile //
                let menuBtn = document.querySelector('.menuBtn');
                let menu = document.querySelector('.menuBoard');
                let menuBg = document.querySelector('.menuBg');

                menuBtn.addEventListener('click', menuAct);
                menuBg.addEventListener('click', menuAct);
                function menuAct() {
                    menuBtn.classList.toggle('active');
                    menu.classList.toggle('active');
                    document.querySelector('body').classList.toggle('no-scroll');
                }
                document.addEventListener('click', function (e) {
                    let mCheck = e.target.closest('.menuBoard');
                    let bCheck = e.target.closest('.menuBtn');
                    if (mCheck == null && bCheck == null) {
                    menuBtn.classList.remove('active');
                    menu.classList.remove('active');
                    document.querySelector('body').classList.remove('no-scroll');
                    }
                });

                // Submenu control mobile //
                let menuH = 0;
                document.documentElement.style.setProperty('--menuH', `${menuH}px`);
                let subBtn = document.querySelectorAll('.subBtn');
                let drop = document.querySelectorAll('#menu-main-menu .dropdown');
                subBtn.forEach((el, i) => {
                    el.addEventListener('click', () => {
                    // subAct(i);
                    const sub = el.parentElement.querySelectorAll(".submenu")[0];
                    $(sub).slideToggle();
                    $(el.parentElement).toggleClass("active")
                    // $( el.parentElement ).toggleClass( "show" )
                    });
                });
                function subAct(a) {
                    drop.forEach((el, i) => {
                    if (a === i) {
                        el.classList.toggle('show');
                        let b = el.querySelectorAll('.submenu li');
                        let menuH = b.length * b[0].offsetHeight;
                        document.documentElement.style.setProperty('--menuH', `${menuH}px`);
                    } else {
                        el.classList.remove('show');
                    }
                    });
                }

                // Submenu overflow //
                let subMenu = document.querySelectorAll('.submenu');
                subMenu.forEach((el) => {
                    let subPos = el.getBoundingClientRect().left + el.offsetWidth;
                    if (subPos > window.innerWidth) {
                    el.classList.add('sub-over');
                    }
                });

                //  Header small  //
                let header = document.querySelector('.hdJS');
                window.scrollY > 0 ? header.classList.add('small') : '';
                window.addEventListener('scroll', () => {
                    window.scrollY > 0 ? header.classList.add('small') : header.classList.remove('small');
                });
                
                }
                
                //
                export default function active() {
                    let aPanel = document.querySelectorAll('.actPanel');
                    let aBtn = document.querySelectorAll('.actBtn');
            
                    aBtn.forEach((btn) => {
                        btn.addEventListener('click', () => {
                        let key = btn.getAttribute('data-act');
                        btn.classList.toggle('active');
            
                        aPanel.forEach((el) => {
                            let lock = el.getAttribute('data-act');
            
                            if (key === lock) {
                            el.classList.toggle('active');
                            } else {
                            btn.classList.remove('active');
                            el.classList.remove('active');
                            }
                        });
                        });
                    });
                    document.addEventListener('click', function (e) {
                        let cPanel = e.target.closest('.actPanel');
                        let cBtn = e.target.closest('.actBtn');
                        if (cPanel == null && cBtn == null) {
                        aBtn.forEach((el) => {
                            el.classList.remove('active');
                        });
                        aPanel.forEach((el) => {
                            el.classList.remove('active');
                        });
                        }
                    });
                    }
                 

        