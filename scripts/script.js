// web swiper
const webS = new Swiper('.web .swiper',{
    autoplay:{delay:1000},
    loop:true,
    navigation:{
        nextEl:'.web .swiper-button-next',
        prevEl:'.web .swiper-button-prev',
    }
})
//이전, 다음 기본 값 position:absolute 인데
//swiper 클래스 대상의 안에 작성했을 땐 swiper가 absolute를 잡는 relative 기본내장으로 별도 설정을 안해도 되지만 밖에 작성했을 땐 밖 위치 기준으로 그 부모에게 relative 설정을 따로 해줘야 한다!!