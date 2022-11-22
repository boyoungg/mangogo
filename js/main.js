let backGround = document.getElementById('ani-back');
let character = document.getElementById('ani-cha');
let bottomImg = document.getElementById('ani-bottom');
let mainSection = document.getElementById('mainApp-img');
let mainLogo = document.getElementById('mainPos');
let aniText = document.getElementById('ani-text');

let target = document.querySelector('#section-back-03');
let targetRect = target.getBoundingClientRect().top;

let overview = document.querySelector('.mean-section');
let overviewRect = overview.getBoundingClientRect().top;

// let videoSection = document.querySelector('#sec01');

window.addEventListener('scroll', function(){
    var scrollTopValue = $(document).scrollTop();
    // var scrollAnimation =  $('#section-back-02').scrollTop();
    console.log('스크롤' + scrollAnimation);


    // if(scrollTopValue > 10){
    //     character.classList.add('move');
        
    // }

    // if(scrollTopValue <= 2800){
    //     mainSection.style.display ='block';
    //     mainLogo.style.display ='block';

    //     backGround.style.display ='block';
    //     backGround.style.left = scrollTopValue*-0.01+'vw';
    
    //     character.style.display ='block';
    //     character.style.left = scrollTopValue*0.01+'vw';

    // }
    // else if(scrollTopValue <= 3000){
    //     backGround.style.display ='none';
    //     character.style.display ='none';
    //     mainSection.style.display ='none';
    //     mainLogo.style.display ='none';

    // }

    // if(scrollTopValue <= 2500){
    //     aniText.style.display ='none';
    //     aniText.style.left = scrollTopValue*0.01+'vw';
        
    // } else if(scrollTopValue <= 2800){
    //     aniText.style.display ='block';

    // }else{
    //     aniText.style.display ='none';
    //     backGround.style.display ='none';
    //     character.style.display ='none';
    //     mainSection.style.display ='none';
    //     mainLogo.style.display ='none';
    // }





    // const service01 = $(".todoSv").offset();
    // const service02 = $("#mangomap").offset();
    // const service03 = $("#mangodiary").offset();


    // console.log("top: " + service01.top + 'px'+ service02.top +'px'+ service03.top+'px');
    // console.log(scrollTopValue);

    // if(scrollTopValue >= service03.top){
    //     $('.circleY').removeClass('yellow-circle second-circle last-circle')
    //     $('.circleY').addClass('third-circle')
    // }
    // else if(scrollTopValue >= service02.top ){
    //     $('.circleY').removeClass('yellow-circle third-circle last-circle')
    //     $('.circleY').addClass('second-circle')

    // }else if(scrollTopValue >= service01.top-200){
    //     $('.circleY').removeClass('second-circle third-circle last-circle')
    //     $('.circleY').addClass('yellow-circle')

    // }else{
    //     $('.circleY').removeClass('yellow-circle')
    // }

    /* 캐릭터 모션 */
    // const characterSection = $("#character").offset();

    // if(scrollTopValue >= characterSection.top-700){
    //     $('#first-gif').addClass('first-gif')
    //     $('#second-gif').addClass('second-gif')
    //     $('#third_gif').addClass('third_gif')
    //     $('#four_gif').addClass('four_gif')
    //     $('#five_gif').addClass('five_gif')
    // }
    // if(scrollTopValue < characterSection.top-700){
    //     $('#first-gif').removeClass('first-gif')
    //     $('#second-gif').removeClass('second-gif')
    //     $('#third_gif').removeClass('third_gif')
    //     $('#four_gif').removeClass('four_gif')
    //     $('#five_gif').removeClass('five_gif')
    // }

});
