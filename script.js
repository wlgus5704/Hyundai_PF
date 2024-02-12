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
    

    //slide cursors
    const cursors = document.querySelectorAll('.pointers>div');

    //slide
    const slider = document.querySelector('.slidewarp'); 
    let clone = slider.firstElementChild.cloneNode(true); 
    slider.append(clone); 
    let index =0;

    setInterval(() => {

        for(let i =0; i<cursors.length; i++){
            cursors[i].classList.remove('on');   
        }

        index++;

        slider.style.marginLeft = -index * 1920 + 'px';
        slider.style.transition = "all 1s"
        cursors[index % cursors.length].classList.add('on'); 
        // 배열 길이를 초과하는 인덱스를 처리 
        
        if(index == cursors.length){
            setTimeout(() => {
                slider.style.marginLeft = '0';
                slider.style.transition = '0s';
                index = 0;
            },1000);
        }

    
    }, 6000);



    ////slide cursors event

    for (let i = 0; i < cursors.length; i++) {
        cursors[i].addEventListener("click", function() {
            for (let j = 0; j < cursors.length; j++) {
                cursors[j].classList.remove('on');
            }
            cursors[i].classList.add('on');
            slider.style.marginLeft = `-${1920 * i}px`;
            slider.style.transition = '1s';
            index = i;
        });
    }
    //---------------------------- MainV Fin ---------------------------


    //banner btn
    let icons = document.querySelectorAll('.btns>div>a>i');

    function handleMouseEnter(event) {
        event.currentTarget.querySelector('i').classList.add('fa-beat');
    }

    function handleMouseLeave(event) {
        event.currentTarget.querySelector('i').classList.remove('fa-beat');
    }

    icons[0].parentElement.addEventListener('mouseenter', handleMouseEnter);
    icons[0].parentElement.addEventListener('mouseleave', handleMouseLeave);

    icons[1].parentElement.addEventListener('mouseenter', handleMouseEnter);
    icons[1].parentElement.addEventListener('mouseleave', handleMouseLeave);
    //---------------------------- Banner Fin ---------------------------

    

    let cars = document.querySelectorAll('.carswrap>div');
    let carswrap = document.querySelector('.carswrap');
    let slidecount = cars.length;
    let slidewidth = 480;
    let currentWidth =2880;
    let cindex =7;


    for(let i =0; i<slidecount; i++){
        let newSlide = cars[i].cloneNode(true);
        // newSlide.classList.add('hydro_off');
        carswrap.appendChild(newSlide);
    };
    for(let i =slidecount-1; i>=0; i--){
        let newSlide = cars[i].cloneNode(true);
        // newSlide.classList.add('hydro_off');
        carswrap.prepend(newSlide);
        
    };

   
    cars[1].classList.add('hydro_on');
    
    cars = document.querySelectorAll('.carswrap>div');
  
    carswrap.style.transform = `translateX(-${currentWidth}px)`;


    setInterval(()=>{
        carswrap.style.transition = 'all 0.6s';
        currentWidth += slidewidth;
        carswrap.style.transform = `translateX(-${currentWidth}px)`;
        cars[cindex].classList.remove('hydro_on');
        cindex+=1;
        cars[cindex].classList.add('hydro_on');


        if(cindex == 13){
            setTimeout(() => {
                carswrap.style.transition = 'all 0s';
                currentWidth = 2880;
                carswrap.style.transform = `translateX(-${currentWidth}px)`;
                cars[cindex].classList.remove('hydro_on');
                cindex =7;
                cars[cindex].classList.add('hydro_on');

            },600);
            
        };
    },6000);

    let leftBtn = document.querySelector('.hydro_LeftButton>a');
    let rightBtn = document.querySelector('.hydro_RightButton>a');

    leftBtn.addEventListener('click', function(){
        event.preventDefault();
        carswrap.style.transition = 'all 0.6s';
        currentWidth += slidewidth;
        carswrap.style.transform = `translateX(-${currentWidth}px)`;
        cars[cindex].classList.remove('hydro_on');
        cindex+=1;
        cars[cindex].classList.add('hydro_on');

        if(cindex == 13){
            setTimeout(() => {
                carswrap.style.transition = 'all 0s';
                currentWidth = 2880;
                carswrap.style.transform = `translateX(-${currentWidth}px)`;
                cars[cindex].classList.remove('hydro_on');
                cindex =7;
                cars[cindex].classList.add('hydro_on');

            },600);
            
        };
    });

    rightBtn.addEventListener('click', function(){
        event.preventDefault();
        carswrap.style.transition = 'all 0.6s';
        currentWidth -= slidewidth;
        carswrap.style.transform = `translateX(-${currentWidth}px)`;
        setTimeout(() => {
            cars[cindex].classList.remove('hydro_on');
            cindex-=1;
            cars[cindex].classList.add('hydro_on');
        },100);

        if(cindex == 2){
            setTimeout(() => {
                carswrap.style.transition = 'all 0s';
                currentWidth = 2880;
                carswrap.style.transform = `translateX(-${currentWidth}px)`;
                cars[cindex].classList.remove('hydro_on');
                cindex =7;
                cars[cindex].classList.add('hydro_on');

            },600);
            
        };
        
    });
    //---------------------------- Sllide Fin ---------------------------

    //best
    let bestNav = document.querySelectorAll('.bestNav>div>a');
    let bestCon = document.querySelectorAll('.bestConwrap>div');
    let Blbtn = document.querySelector('.Blbtn');
    let Brbtn = document.querySelector('.Brbtn');
    let Bindex =0;

  

    bestCon[1].style.opacity = '0';
    bestCon[2].style.opacity = '0';
    bestCon[3].style.opacity = '0';
    
    for (let i = 0; i < bestNav.length; i++) {
        bestNav[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            for (let j = 0; j < bestCon.length; j++) {
                bestCon[j].style.opacity = '0';
                bestNav[j].classList.remove('bestOn');
                bestCon[j].style.transition = 'all 0.6s';
            }
           
            bestCon[i].style.opacity = '1';
            bestNav[i].classList.add('bestOn');
            Bindex = i; 
        });
    };

    Blbtn.addEventListener('click', function(){
        event.preventDefault();
        --Bindex;
        
        if(Bindex == -1){
            Bindex=3;
        };
        for(let i=0; i<bestCon.length; i++){
            bestNav[i].classList.remove('bestOn');
            bestCon[i].style.opacity = '0';
            bestCon[i].style.transition = 'all 0.6s';
        };
        bestNav[Bindex].classList.add('bestOn');
        bestCon[Bindex].style.opacity = '1';
    });

    Brbtn.addEventListener('click', function(){
        event.preventDefault();
        ++Bindex;
        
        if(Bindex == 4){
            Bindex=0;
        };
        for(let i=0; i<bestCon.length; i++){
            bestNav[i].classList.remove('bestOn');
            bestCon[i].style.opacity = '0';
            bestCon[i].style.transition = 'all 0.6s';
        };
        bestNav[Bindex].classList.add('bestOn');
        bestCon[Bindex].style.opacity = '1';
    });

    









    //events
    
    let eventWrap = document.querySelector('.eventswrap>ul');
    let eventCon = document.querySelectorAll('.eventswrap>ul>li');
    let ELength = eventCon.length;
    const Elbtn = document.querySelector('.lbtn');
    const Erbtn = document.querySelector('.rbtn');
    let Eindex = 1;

    eventWrap.style.marginLeft = `-1640px`;

    for (let i = 0; i < ELength - 3; i++) {
        let con = eventCon[i].cloneNode(true);
        eventWrap.appendChild(con);
    }

    for (let i = ELength - 1; i >= 3; i--) {
        let con = eventCon[i].cloneNode(true);
        eventWrap.prepend(con);
    }

    Elbtn.addEventListener('click', function(event) {
        event.preventDefault();
        Eindex++;
        eventWrap.style.marginLeft = `-${Eindex * 1640}px`;
    
        if (Eindex == 3) {
            setTimeout(() => {
                eventWrap.style.transition = "0s";
                Eindex = 1;
                eventWrap.style.marginLeft = `-${Eindex * 1640}px`;
                setTimeout(() => {
                    eventWrap.style.transition = "all 0.6s"; //복원
                }, 100);
            }, 700);
        };
    });
    
    Erbtn.addEventListener('click', function(event) {
        event.preventDefault();

        Eindex--;
        eventWrap.style.marginLeft = `-${Eindex * 1640}px`;

        if (Eindex == 0) {
            setTimeout(() => {
                eventWrap.style.transition = "0s";
                Eindex = 2;
                eventWrap.style.marginLeft = `-${Eindex * 1640}px`;
                setTimeout(() => {
                    eventWrap.style.transition = "all 0.6s"; //복원
                }, 100);
            }, 600);
        };
       
    });


    //---------------------------- Events Fin ---------------------------


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

}; //end
