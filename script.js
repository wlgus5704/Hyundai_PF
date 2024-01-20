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
    //---------------------------- Main Fin ---------------------------

    

}; //end
