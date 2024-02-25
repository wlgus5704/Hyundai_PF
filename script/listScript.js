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

     //list script

     //scroll
      //scroll-submenu
    window.addEventListener('scroll', function() {
        var submenu = document.querySelector('.submenu2');
        var scrollPosition = window.scrollY;
        var quick = document.querySelector('.quickmenu>.menuwrap');
        

        if (scrollPosition > 678) { 
            submenu.classList.add('fixed');
            quick.classList.add('qfixed');
        } else {
            submenu.classList.remove('fixed'); 
            quick.classList.remove('qfixed'); 
        }

        if (scrollPosition > 688) { 
            quick.classList.add('fixed'); 
        } else {
            quick.classList.remove('fixed'); 
        }

    });



    //submenu
    let submenu2 = document.querySelector('.submenu2');
    let submenu2All = document.querySelectorAll('.submenu2>li>a');
    let cars = document.querySelectorAll('.carswrap > div');

    for(let i =0; i<submenu2All.length; i++){
        submenu2All[i].addEventListener('click', function(event){
            event.preventDefault();
            for(let j =0; j<submenu2All.length; j++){
                submenu2All[j].classList.remove('on');
            }
            for(let j =0; j<cars.length; j++){
                cars[j].style.height = '0px';
                cars[j].style.overflow = 'hidden';
                cars[j].style.opacity = '0';
                cars[j].style.transition = 'height 0s';
            }
            submenu2All[i].classList.add('on');


            if(i == 2){
                cars[0].style.transition = 'opacity 0.3s';
                cars[0].style.height = '3520px';
                setTimeout(()=>{
                    cars[0].style.opacity = '1';
                },100);
            }   
            else if (i == 3){
                cars[1].style.transition = 'opacity 0.3s';
                cars[1].style.height = '4600px';
                setTimeout(()=>{
                    cars[1].style.opacity = '1';
                },100);
            }
            else{
                cars[0].style.height = '3520px';
                cars[0].style.opacity = '1';
            }
            
        });
        
    }
    //filter - checkBox
    var allCheckbox = document.getElementById('price1');
    var Checkboxes = document.querySelectorAll('.filter2 .checkbox:not(#price1)');

    allCheckbox.addEventListener('change', function() {
        if (allCheckbox.checked) {
            Checkboxes.forEach(function(checkbox) {
                checkbox.checked = false;
            });
        }
    });

    Checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                allCheckbox.checked = false;
            }
        });
    });


    // //banner
    let bannerwrap = document.querySelector('.bannerwrap');
    let banners = document.querySelectorAll('.bannerwrap>a'); 
    let banner1 = banners[0].cloneNode(true);
    let banner2 = banners[1].cloneNode(true);
    bannerwrap.prepend(banner2);
    bannerwrap.append(banner1);
    let bannerIndex =1;
    bannerwrap.style.marginLeft = '-1920px';

    //bannerbtn
    let bannerbtn = document.querySelectorAll('.slidebtn>a');
    let btnIndex= 0;
    
    let isPaused =false;
    let bannerInterval; // 인터벌 ID를 저장할 변수 추가
    function interval() {
        bannerInterval = setInterval(() => {
            bannerIndex++;
            bannerwrap.style.marginLeft = `-${bannerIndex*1920}px`;
            bannerwrap.style.transition = 'all 0.6s';
            bannerbtn[btnIndex].classList.remove('on');
            btnIndex++;
            if(btnIndex == 2){
                btnIndex=0;
            };
            bannerbtn[btnIndex].classList.add('on');
            
            if(bannerIndex == 2) {
                setTimeout(() => {
                    bannerIndex = 0;
                    bannerwrap.style.marginLeft = `-${bannerIndex*1920}px`;
                    bannerwrap.style.transition = '0s';
                }, 600);
            };
        }, 4000);
    }
    interval();


    bannerbtn[0].addEventListener('click', function(){
        bannerwrap.style.marginLeft = `-1920px`;
        bannerwrap.style.transition = 'all 0.6s';
        bannerbtn[1].classList.remove('on');
        bannerbtn[0].classList.add('on');
    });

    bannerbtn[1].addEventListener('click', function(){
        bannerwrap.style.marginLeft = `-3840px`;
        bannerwrap.style.transition = 'all 0.6s';
        bannerbtn[0].classList.remove('on');
        bannerbtn[1].classList.add('on');
    });

    bannerbtn[2].addEventListener('click', function(){
        if (!isPaused) {
            clearInterval(bannerInterval); //일시정지
            bannerbtn[2].style.backgroundImage="url('/imgs/List/icon-play.png')";
        } else {
            interval(); //재생 시작
            bannerbtn[2].style.backgroundImage="url('/imgs/List/icon-pause.png')";
        }
        isPaused = !isPaused; //토글
    });
    
    

};