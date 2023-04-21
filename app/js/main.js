$(function(){
  document.querySelectorAll(".counter").forEach((counter) => {
    const counterInput = counter.querySelector(".counter__input");
    const btnMinus = counter.querySelector(".minus");
    const btnPlus = counter.querySelector(".plus");
    let count = counterInput.value;
  
    counterInput.addEventListener("keyup", (e) => {
      let self = e.currentTarget;
  
      if (self.value == "0") self.value = 1;
  
      count = counterInput.value;
  
      disabledBtnMinus();
      disabledBtnPlus();
    });
  
    counterInput.addEventListener("keypress", (e) => {
      let code = e.which ? e.which : e.keyCode;
      if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
      }
    });
  
    counterInput.addEventListener("change", (e) => {
      let self = e.currentTarget;
  
      if (!self.value) self.value = 1;
  
      count = counterInput.value;
  
      disabledBtnMinus();
      disabledBtnPlus();
    });
  
    counterInput.addEventListener("focus", (e) => {
      counterInput.value = "";
    });
  
    counterInput.addEventListener("blur", (e) => {
      let self = e.currentTarget;
  
      if (!self.value) self.value = 1;
  
      count = counterInput.value;
  
      disabledBtnMinus();
    });
  
    btnPlus.addEventListener("click", (e) => {
      e.preventDefault();
  
      count++;
  
      disabledBtnMinus();
      disabledBtnPlus();
  
      counterInput.value = count;
    });
  
    btnMinus.addEventListener("click", (e) => {
      e.preventDefault();
  
      count--;
  
      disabledBtnMinus();
  
      count <= 999
        ? btnPlus.classList.remove("disabled")
        : btnPlus.classList.add("disabled");
  
      counterInput.value = count;
    });
  
    function disabledBtnMinus() {
      count == 1
        ? btnMinus.classList.add("disabled")
        : btnMinus.classList.remove("disabled");
    }
  
    function disabledBtnPlus() {
      count >= 999
        ? btnPlus.classList.add("disabled")
        : btnPlus.classList.remove("disabled");
    }
  });
  
  window.onload=function(){
  let filterMenu = document.querySelector('.shop__filterMenu');
  let filter = document.querySelector('.filter');
  let shopInner = document.querySelector('.shop__inner');
  let filterIcon = document.querySelector('.filterIcon');
      filterMenu.addEventListener('click',()=>{
         filterIcon.classList.toggle('active')
         filter.classList.toggle('active')
         if(filter.classList.contains('active')){
             shopInner.classList.add('active')
         }else{
             shopInner.classList.remove('active')
         }
      })
    }
  document.querySelectorAll(".select").forEach((select) => {
    const selectBtn = select.querySelector(".select__btn");
    const selectList = select.querySelector(".select__list");
    const  selectLinks = select.querySelectorAll(".select__link");
  
    selectBtn.addEventListener("click", () => {
      selectBtn.classList.toggle("active");
      selectList.classList.toggle("active");
  
      if (selectList.style.maxHeight) {
        selectList.style.maxHeight = null;
        selectList.removeAttribute('style');
      } else {
        selectList.style.maxHeight = selectList.scrollHeight + "px";
      }
    });
  
    selectLinks.forEach((selectLink) => {
      selectLink.addEventListener('click', selectActive)
    });
  
    function selectActive(e) {
      e.preventDefault();
      selectLinks.forEach((selectLink) => {
        selectLink.classList.remove('active');
  
        if (e.target.closest("a")) {
          selectBtn.innerHTML = "";
          selectBtn.append(e.target.cloneNode(true));
  
          selectHide();
        }
      });
      this.classList.add('active');
    }
  
    let selectHide = () => {
      selectBtn.classList.remove("active");
      selectList.classList.remove("active");
      selectList.removeAttribute('style');
    };
    document.addEventListener("mouseup", (e) => {
      if (!select.contains(e.target)) selectHide();
    });
  });





  let menu = document.querySelector('.burger-menu');
    menu.addEventListener('click',(e)=>{
        document.body.style.overflow ='hidden'
      if(menu.classList.contains('active')){
        document.body.style.overflow ='visible'
      }
    })


  let burger = document.querySelector('.burger-menu');
  burger.addEventListener('click', function(){
     this.classList.toggle('active'); 
    document.querySelector('.mobile-menu').classList.toggle("show");
  })


  $('.blog-page__slider').slick({
    nextArrow :'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="26px" viewBox="0 0 9 14" version="1.1"><path d="M 7.835938 6.382812 C 8.1875 6.722656 8.1875 7.277344 7.835938 7.621094 L 3.335938 11.996094 C 2.984375 12.335938 2.414062 12.335938 2.0625 11.996094 C 1.710938 11.652344 1.710938 11.097656 2.0625 10.757812 L 5.925781 7 L 2.0625 3.242188 C 1.710938 2.902344 1.710938 2.347656 2.0625 2.003906 C 2.414062 1.664062 2.988281 1.664062 3.339844 2.003906 L 7.839844 6.378906 Z M 7.835938 6.382812 "/></g></svg></button>',
    prevArrow :'<button type="button" class="slick-next"><svg  width="16px" height="20px" viewBox="0 0 9 14" version="1.1"><path d="M 1.164062 6.382812 C 0.8125 6.722656 0.8125 7.277344 1.164062 7.621094 L 5.664062 11.996094 C 6.015625 12.335938 6.585938 12.335938 6.9375 11.996094 C 7.289062 11.652344 7.289062 11.097656 6.9375 10.757812 L 3.074219 7 L 6.9375 3.242188 C 7.289062 2.902344 7.289062 2.347656 6.9375 2.003906 C 6.585938 1.664062 6.011719 1.664062 5.660156 2.003906 L 1.160156 6.378906 Z M 1.164062 6.382812 "/></g></svg></button>',
    infinite: false,
  })

  $('.product-tabs__top-item').on('click', function(e){
     e.preventDefault();
     $('.product-tabs__top-item').removeClass('product-tabs__top-item--active')
     $(this).addClass('product-tabs__top-item--active')

     $('.product-tabs__content-item').removeClass('product-tabs__content-item--active')
     $($(this).attr('href')).addClass('product-tabs__content-item--active')

  })

  $('.product-slide__thunb').slick({
     asNavFor: '.product-slide__big',
     focusOnSelect: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     vertical : true,
     draggable : false,
     arrows : false,
     initialSlide: 1,
  })
  $('.product-slide__big').slick({
     asNavFor:'.product-slide__thunb',
     draggable : false,
     arrows : false,
     fade : true,
     initialSlide: 0,
     responsive: [
      {
        breakpoint: 1170,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
     ]
     
  })
  let btnList = $('.button--list').on('click', function(){ 
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
       btnList.addClass('shop-content__filter-btn--active');
       $('.shop-content__inner').css({'display':'block' })
       $('.product-item').css({
         'max-width':'100%',
         'display':'flex' 
          })
       $('.product-item__img-box').css({
        'height':'250px',
        'width':'250px'
      })

     /*   $('.product-item__images').css({'width':'200px', 'height': '250px'}) */
       $('.product-item__link--line').css('display','none')
       $('.product-item__link-box').css({
        'right':'auto',
        'background-color':'transparent',
        'justify-content':'center',
        'width':'180px',
      })
       $('.product-item__link').css({
        'height':'50px',
        'width':'50px',
        'background-color':'#ffff',
        'border-radius':'50%',
        'justify-content':'space-around',
        'align-items':'center',
        'margin-left':'12px'
      })
      $('.product-item__wrapper-list').css('display','block')
      $('.product-item__wrapper-grid').css('display','none')

  })
   let btnGrid = $('.button--grid').on('click', function(){  
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
       btnGrid.addClass('shop-content__filter-btn--active');
       $('.shop-content__inner').css({'display':'grid' })
       $('.product-item').css({
        'max-width':'100%',
        'display':'block'
      })
       $('.product-item__img-box').css({'height':'auto','width':'auto'}) 
    /*    $('.product-item__images').css({'width':'auto', 'height': 'auto'}) */
       $('.product-item__link-box').css({
        'right':'0',
        'background-color':'#fff',
        'width':'220px',
        'justify-content':'space-around',
      })
      $('.product-item__link--line').css('display','flex')
      $('.product-item__wrapper-list').css('display','none')
      $('.product-item__wrapper-grid').css('display','block')

   })
   
    $('.button--list').on('click',function(){
    $('.product__items').css('display','block')
  })

  $('.button--grid').on('click',function(){
    $('.product__items').css('display','grid') 
   })


     

  $('.select-style, .produc-one__item-num').styler();
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data){
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    }
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000

  });

  $('.star').rateYo({
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
    starSvg:'<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px"viewBox="0 0 18 16" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;"d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625 " /> </g></svg>'
  });


})



document.addEventListener('DOMContentLoaded', () => {
  const newYear = new Date('December 31 2024 01:20:30');

  const daysVal = document.querySelector('.time-count__days .time-count__val');
  const hoursVal = document.querySelector('.time-count__hours .time-count__val');
  const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
  const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

  const daysText = document.querySelector('.time-count__days .time-count__text');
  const hoursText = document.querySelector('.time-count__hours .time-count__text');
  const minutesText = document.querySelector('.time-count__minutes .time-count__text');
  const secondsText = document.querySelector('.time-count__seconds .time-count__text');

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  const timeCount = () => {
    let now = new Date();
    let leftUntil = newYear - now;

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);

    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;

    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;

/*     daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']); */
  /*   hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
    minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']); */
  };

  timeCount();
  setInterval(timeCount, 1000);
});