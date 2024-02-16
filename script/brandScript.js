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

        if (scrollPosition > 5250) { 
            for(let i =0; i<submenus.length; i++){
                submenus[i].classList.remove('on')
            };
            submenus[3].classList.add('on')
        } 
        else if (scrollPosition > 3590) { 
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

    //hydro
    var hydro = document.querySelectorAll('.hydrowrap>div');
    var active = 'active';
    var def = 'def';

    for(let i =0; i< hydro.length; i++){
        hydro[i].addEventListener('mouseenter', function(){
            for(let j=0; j<hydro.length; j++){
                hydro[j].classList.remove(active);
                hydro[j].classList.add(def);
            };
            hydro[i].style.transition = "ease-in 0.6s";
            hydro[i].classList.add(active);
            hydro[i].classList.remove(def);
        });
    };



    //news
    let news = document.querySelectorAll('.newsul>li>a');
    let news_lbtn = document.querySelector('.newswrap>.lbtn>a');
    let news_rbtn = document.querySelector('.newswrap>.rbtn>a');
    let magin = 3320;

    let conwrap = document.querySelector('.conwrap');
    let con = document.querySelectorAll('.conwrap>div');
    let fclone = con[0].cloneNode(true);
    let lclone = con[1].cloneNode(true);

    conwrap.prepend(lclone);
    conwrap.append(fclone);

    for(let i =0; i<news.length; i++){
        news[i].addEventListener('click', function(event){
            event.preventDefault();
            for(let j =0; j<news.length; j++){
                news[j].classList.remove('on');
            }
            news[i].classList.add('on');
        });
    }

    news[0].addEventListener('click', function(event){
        event.preventDefault();
        magin = 3320;
        conwrap.style.transition = 'all 0.6s';
        conwrap.style.marginLeft = `-${magin}px`;
    });
    news[7].addEventListener('click', function(event){
        event.preventDefault();
        magin = 6640;
        conwrap.style.transition = 'all 0.6s';
        conwrap.style.marginLeft = `-${magin}px`;
    });

    news_lbtn.addEventListener('click', function(event){
        event.preventDefault();
        conwrap.style.transition = 'all 0.6s';
        magin -= 1660
        conwrap.style.marginLeft = `-${magin}px`;

        setTimeout(()=>{
            if(magin== 1660){
                conwrap.style.transition = '0s';
                magin = 8300
                conwrap.style.marginLeft = `-${magin}px`;
            }
        },600);

        if(magin==1660){
            for(let i =0; i<news.length; i++){
                news[i].classList.remove('on');
            }
            news[7].classList.add('on');
        }
        if(magin==4980){
            for(let i =0; i<news.length; i++){
                news[i].classList.remove('on');
            }
            news[0].classList.add('on');
        }


        
    }); 
    
    news_rbtn.addEventListener('click', function(event){
        event.preventDefault();
        conwrap.style.transition = 'all 0.6s';
        magin += 1660
        conwrap.style.marginLeft = `-${magin}px`;
        
        setTimeout(()=>{
            if(magin==9960){
                conwrap.style.transition = '0s';
                magin = 3320
                conwrap.style.marginLeft = `-${magin}px`;
            }
        },600);
        
        if(magin==6640){
            for(let i =0; i<news.length; i++){
                news[i].classList.remove('on');
            }
            news[7].classList.add('on');
        }
        if(magin==9960){
            for(let i =0; i<news.length; i++){
                news[i].classList.remove('on');
            }
            news[0].classList.add('on');
        }
    }); 
    
};