window.onload = function(){

    //nav
    let navlist = document.querySelector('nav>ul');

    navlist.addEventListener("mouseover", function(){
        navlist.querySelectorAll('.submenu').forEach(function(nav){
            nav.style.height = '327px';
        });
        document.getElementById('header').classList.add('bgon');

    });


    navlist.addEventListener("mouseout", function(){
        navlist.querySelectorAll('.submenu').forEach(function(nav){
            nav.style.height = '0px';
            nav.style.transition = '0.3s';
        });
        document.getElementById('header').classList.remove('bgon');
    });

    //nav color
    let navcolor = document.querySelectorAll('nav>ul>li');


    navcolor.forEach(function(nc){
        nc.addEventListener('mouseover', function(){
            nc.querySelector('a').style.borderBottom="3px solid var(--gray_100)";
            nc.querySelectorAll('ul>li>a').forEach(function(titles){
                titles.style.color='var(--gray_100)';
            });
        }); 
    });

    navcolor.forEach(function(nc){
        nc.addEventListener('mouseout', function(){
            nc.querySelector('a').style.borderBottom="none";
            nc.querySelectorAll('ul>li>a').forEach(function(titles){
                titles.style.color='var(--gray_300)';
            });
        }); 
    });
    
    //footer
    let familysite = document.querySelector('.familysite');
    let check = document.querySelector('.drop');
    let arrow = document.querySelector('.familysite>img');

    familysite.addEventListener('click', function() {
        
        // .drop 요소에 active 클래스가 있는지 확인
        if (!check.classList.contains('active')) {
            // 없으면 추가
            check.classList.add('active');
            arrow.style.transform = 'rotate(180deg)';
        
        } else {
            // 있으면 제거
            check.classList.remove('active');
            arrow.style.transform = 'rotate(0deg)';
        }
    });


    //brand script


    //scroll-submenu
    window.addEventListener('scroll', function() {
        var submenu = document.querySelector('.submenu2');
        var submenus = document.querySelectorAll('.submenu2>li>a');
        var scrollPosition = window.scrollY;
    
        if (scrollPosition > 678) { 
            submenu.classList.add('fixed'); 
        } else {
            submenu.classList.remove('fixed'); 
        }

        if (scrollPosition > 3590) { 
            for(let i =0; i<submenus.length; i++){
                submenus[i].classList.remove('on')
            };
            submenus[2].classList.add('on')
        } 
        else if(scrollPosition > 2070){
            for(let i =0; i<submenus.length; i++){
                submenus[i].classList.remove('on')
            };
            submenus[1].classList.add('on')
        }
        else if(scrollPosition <= 2170){
            for(let i =0; i<submenus.length; i++){
                submenus[i].classList.remove('on')
            };
            submenus[0].classList.add('on')
        }
        
    });

    //tabmenu
    let tabmenu = document.querySelectorAll('.tabmenu>ul>li>a');
    let tabcon = document.querySelectorAll('.conwraps>div');

    for(let i = 0; i < tabmenu.length; i++) {
        tabmenu[i].addEventListener('click', function(event) {
            event.preventDefault(); // 기본 동작 방지
    
            for(let j = 0; j < tabmenu.length; j++) {
                tabmenu[j].classList.remove('active');
                tabcon[j].style.display = 'none';
            }
    
            tabmenu[i].classList.add('active');
            tabcon[i].style.display = 'block';
        });
    }
    

};