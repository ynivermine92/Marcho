$(function(){

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
     initialSlide: 0
  })

   let btnList = $('.button--list').on('click', function(){ 
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
       btnList.addClass('shop-content__filter-btn--active');
       $('.shop-content__inner').addClass('shop-content__filter-btn--active')
       $('.product-item').css({
         'max-width':'100%',
         'display':'flex'
          })
       $('.product-item__img-box').css({
        'height':'250px',
        'width':'250px'
      })

       $('.product-item__images').css({'width':'200px', 'height': '250px'})
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
       $('.shop-content__inner').removeClass('shop-content__filter-btn--active')
       $('.product-item').css({
        'max-width':'370px',
        'display':'block'
      })
       $('.product-item__img-box').css({'height':'auto','width':'auto'}) 
       $('.product-item__images').css({'width':'none', 'height': 'none'})
       $('.product-item__images').css({'width':'auto', 'height': 'auto'})
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

  
  
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
})









/*  tabs,  +block
$('.product-tabs__top-item').on('click', function(e){
  e.preventDefault();
  $('.product-tabs__top-item').removeClass('product-tabs__top-item--active')
  $(this).addClass('product-tabs__top-item--active')
    клике на tab открывает block
  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active')
  $($(this).attr('href')).addClass('product-tabs__content-item--active')

}) 
sass 
    &__content-item
        display: none
        &.product-tabs__content-item--active
            display: block
    
*/

  
  /* //слайдер  tiny-slider
  ___________________________ */
  /* const slider = tns({
      container: '.slider',
      items: 1,
      slideBy: 'page',
      autoplay: false,
    });
    document.querySelector('.slider-left').onclick = function () {
      slider.goTo('prev');
    };
    document.querySelector('.slider-right').onclick = function () {
      slider.goTo('next');
    }; */
  
   /*  tabs */
  /* ---------------------------------------- */
  /* let showFun = () => {
    itemMenu.forEach((item)=>{
      item.style.display = "none"
    })
  }
  let addFun = (i = 0) => {
    itemMenu[i].style.display = "block"
  }
  menu.addEventListener('click', (e) => {       ///родиетль 
     let target = e.target;
     if(target && target.classList.contains("dropdown-item")){   //item которые при нажатии должны меняться
      itemS.forEach((item,i)=>{                      //item тотже
         if(target == item){
          showFun()
          addFun(i)
         } 
      })
     }
  })  */
   
  /* 2 варянт   ЛУчший 
  */
  /*  const [...items] = document.querySelectorAll('.dropdown-item');//илементы который нажимать 
   function clickHandler(e) {
       let menu = this.querySelector('.dropdown-menu');  //класс какой будет в нутри елемента открываться
       menu.classList.toggle('d-none');//класс какой будет в нутри елемента  активным , или офф
   }
   items.forEach(item => item.addEventListener('click', clickHandler)) */
   
  /* варянт 3 */
  /* let item = document.querySelectorAll('.dropdown-item')  айтами которые наэима.; 
  
  function toggleDropdownMenu(e) {
  const newItem = e.currentTarget.querySelector('.dropdown-menu')  событие которое случилось меню нутри айтома;
  newItem.classList.toggle('d-none')      меню класс('d-none') актива; 
  }
  item.forEach(d => d.addEventListener('click', toggleDropdownMenu));
  ПРИМЕР HTML
        <li class="dropdown-item">
          <span>Dropdown menu item</span>
          <div class="dropdown-menu d-none">
            <ul class="dropdown-list">
              <li>Dropdown item 1</li>
              <li>Dropdown item 2</li>
            </ul>
            <!-- / .dropdown-list -->
          </div>
          <!-- / .dropdown-menu -->
        </li>
        <!-- / .dropdown-item -->
        <li>
  
        CSS
      .d-none {
         display: none;
       }
  
     */
      
  
  //////проверку на импут имейл  ////// 2 проверка на регулярку 
  /* -------------------------------------------------------------------- */
  /* function validateEmail(email){
      let emaiL =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;;
      return emaiL.test(email);
  }
  consultationBtn.addEventListener('click',(e)=>{
    for(let i = 0; i < 2; i++){
  if (validateEmail(consultationInpt[2].value) && consultationInpt[i].value !== ''&&
      consultationInpt[i].value.length > 1){
          modelGratitude.style.display = 'block'
          consultationMistake.style.display = 'none'
  }else{
          modelGratitude.style.display = 'none'
          consultationMistake.style.display = 'block'
          e.preventDefault()    
       }
     }
  }) */
  
  //scrolling
  /* ----------------------------------- */
  /* let anchors = document.querySelectorAll('a[href*="#tabs"]')
      for(let anchor of  anchors){
        anchor.addEventListener('click', (e)=>{
          e.preventDefault();
          let blockID = anchor.getAttribute('href')
          document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
          })
        })
      } */
  
  
    /* masktell маска телефон */
  /*   ------------------------------------- */
  /*     let element = document.querySelectorAll('#tel');
      element.forEach((item)=>{
        let maskOptions = {
          mask: '+7(000)000-00-00',
          lazy: false
      } 
        let mask = new IMask(item, maskOptions); 
      }) */
       
      
  /* Регулярка на Буквы 
  -----------------------
    function isLetter(str) {
        return str.match(/[a-zA-Z]/);
      }
   */
  
  /*регулярка на количество совпадений 
  ---------------------------------------------
    let x = str.match(/x/gi)  (gi-это флаг )*/
    
  
  /* условие
  ------------------------------------
  /* разница между 2 масивами выводит реузльтат   */
  /*let difference = ary1.filter(x => ary2.indexOf(x) == -1); */
  
  
  /*  DOOOOOOOOOMMMMMMMMM */
  
  /*  coбытие 
    submit - форм 
    change - для select для списка выбора   */
   /*  select для списка гуглить если не понято  */
  
  
  /* __Атрибуты__ */
  
  /*  dataset - получение атрибута (названия)    const id = parent.dataset.taskId */
  /*   setAttribute() - создание атрибута  */
  /*  closest()    '[data-task-id]' возвращает ближайший родительский элемент (или сам элемент), */
  
  
  
  /*    записать узел (поместить  куда ) */
  /* listContainer.insertAdjacentElement('afterbegin', listItem)    
  insertAdjacentElement   добавляет переданный элемент в 
  DOM-дерево относительно элемента, вызвавшего метод.
  
   Object.values - переобразовует  из обьекта масив
   Object.entries() метод возвращает массив собственных перечисляемых свойств
   нутри добратся айтема ключу значению
  
      let selectOblect = themes[name] - имя обьекта[ключ обьекта]
      Object.entries(selectOblect).forEach(([key,value])=>{ вытягиваю из ключа глубже ключ имя
        document.documentElement.style.setProperty(key,value) создаю записываю клас переменою scc проперти(переменая стиль)
      })
  /* импуты поиск 
  ________________
  let forms = document.forms['addTask']; находим форму имя
  let inputTitle = forms.elements['title'];   имя импута не клас  без формы не найду импут*/
  /* ____________________________________ */
    /* проверка параметра есть ли он body 
    
    параметр   if (!(node instanceof Element)) return 'нет'; 
    HTMLElement = проверка текста в узле 
    Element = провекра елемента 
    instanceof = проверка в body тексты  Классы DOM-узлов = (прогуглить если нужна помощь ) */
    
   /* const fragment = document.createDocumentFragment() создаёт фрагмент типо видро которое
  
  
    не перезагружает дом ( не тянет опиративу ) */
  /*  node.nodeType, (провека на количество букв узле  nodeType)
      node.tagName (провека tagName имя узла  (проверка идёт на бульшую Букву Узла)),
      node.childNodes.length (провека childNodes проверка на колество дитей),
      child из узла достукивается до дитей (изменить конент) textContent
      ul.nextElementSibling вывод следуйщий узел после ul
  
    /*         создаём елемент  
       let strong = document.createElement('strong');
            находим родителя куда вставаить 
        let [...li] = document.querySelectorAll('li a');
            вставляем
        item.appendChild(strong);  */
       /*  body.insertBefore(img, div)   куда создать (1 атрибут созданый узел втрой , перед каким узлом доме) */
        /* classList.add('класс')  создать класс*/
  
        /* setAttribute * создаю в нутри узла атрибут (img,link  так далее, сылку создать )
           создал картинку
        let  img = document.createElement('img')
        img.setAttribute('src', 'https://via.placeholder.com/150/92c952');
        / 
       создание айтома 
    let ul = document.querySelector('ul');
    let btn = document.getElementById('btn-generate')
    console.log(btn)
    let itemAdd = (e) => {
        let liSet =  ul.children.length + 1         //получаю длину узла
        let liText = `Item ${liSet}`               // переписываю тект айтома
        let li = document.createElement('li')      // создаю  елемент
        ul.appendChild(li)                         // добавляю елемент узел
        li.textContent = liText                     // записую илмент текст
    }
    btn.addEventListener('click',itemAdd);     // слушатель на функции
   
  
  
  
  /* проверка на тип даных масив
  --------------------------------------
      масив
       Array.isArray(переменая)
      if(str instanceof Array) 
      Строка
       typeof() === 'string'
      Число 
       !isNaN()
       !isNaN() === Nuber
      */
  
     /// переобразование типов
     /* ----------------------------- */
     //Строка String(value) typeof(value)
     // числу Number(value) - * /
    //Boolean  Boolean()
  /*   Object.values('обьект') перобразует из обьекта масив */
  
  /*    Переберающие методы масива  */
  /* find записует новый масив только первое попавшоеся  true */  
  /* filter  - записует новый масив  все елементы true */
  /*map созадёт
            переберает каждый елемент масива возращает результат (есть 3 аргумента  итем индкс масив)
  /* reduce перебирает масив изаписует результат (каждой етерации) (есть 4 аргумента 
            (результат итрецаии (самое главное))  итем индкс масив)
             !с каждым результатом итерации можно что то вычеслять короче что то делать
              !получать какой то результа 
  /*some() проверяет, масив если хоть один елемент будет масива (true) вернёт резултат иначе false
            ! на условие проверять*/
  /*every() проверяет, масив (true) вернут все елементы масива которые будут true.  иначе false
            ! на условие проверять*/
  
  /*sort сортирут обьекты, масивы .sort((item, next) => item - nex) числа меньшему большему,буквы,
    длину */
  
  
  /* task *//*  удалить добавать  */
  /* _____________________
  
  const tasks = [
    {
      _id: '5d2ca9e2e03d40b326596aa7',
      completed: true,
      body:
        'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
      title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
      _id: '5d2ca9e29c8a94095c1288e0',
      completed: false,
      body:
        'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
      title:
        'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
      _id: '5d2ca9e2e03d40b3232496aa7',
      completed: true,
      body:
        'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
      title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
      _id: '5d2ca9e29c8a94095564788e0',
      completed: false,
      body:
        'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
      title:
        'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
  ];
  
  (function (arrOfTasks) {
  
     const objOfTasks = arrOfTasks.reduce((acc, task) => {
      acc[task._id] = task;
      return acc
    }, {});
  
  const listContainer = document.querySelector('.tasks-list-section .list-group')
  
  
  
  
  
    renderAllTasks(objOfTasks)
    function renderAllTasks(tasksList) {
      if (!tasksList) {
        console.error('передайте список задач!')
        return
      }
      const fragment = document.createDocumentFragment()
      Object.values(tasksList).forEach(task => {
            const li = listItemTemplate(task)
            fragment.appendChild(li)
      });
      listContainer.appendChild(fragment)
    }
     function listItemTemplate ({_id, title, body} = {}){
         const li = document.createElement('li')
         li.classList.add(
            'list-group-item', 
            'd-flex', 
            'align-items-center', 
            'flex-wrap', 
            'mt-2'
            );
         li.setAttribute('data-task-id', _id);
  
  
        const span = document.createElement('span')
        span.textContent = title
        span.style.fontWeight = 'bold';
  
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete task';
        deleteBtn.classList.add('btn','btn-danger','ml-auto','delete-btn')
        
        const article = document.createElement('p');
        article.textContent = body;
        article.classList.add('mt-2', 'w-100');
  
        li.appendChild(span)
        li.appendChild(deleteBtn)
        li.appendChild(article)
        return li
     }
  
  
  
  let forms = document.forms['addTask']; 
  let inputTitle = forms.elements['title'];
  let inputBody = forms.elements['body'];
  
  
  
  forms.addEventListener('submit',submitHedler)
  
  function submitHedler(e){
    e.preventDefault()
    let TitleValue = inputTitle.value
    let BodyValue =  inputBody.value
    if(!TitleValue || !BodyValue){
      alert('ведите Title, Boddy')
      return
    }
    let task = taskRenderDom(TitleValue, BodyValue);
    let listItem = listItemTemplate(task)
    listContainer.insertAdjacentElement('afterbegin', listItem)
  }
  
  
  
  function taskRenderDom(title, body){
   let newRender = {
      _id :`task - ${Math.random()}`,
      completed : false,
      body,
      title,
   }
      objOfTasks[newRender._id] = newRender
      return{ ...newRender}
  } 
  listContainer.addEventListener('click', onDeleteHendler);
  
  function deleteTask(id){
  
    const {title} = objOfTasks[id];
    
    const isConfirm = confirm(`вы диствительно хотите удалить ${title}`)
    if(!isConfirm) return isConfirm;
    delete objOfTasks[id]
    return isConfirm
  }
  function deleteTaskfromHtml(confirm, el){
    if(!confirm ) return
    el.remove()
  }
  
  function onDeleteHendler ({target}) {
     if(target.classList.contains('delete-btn')){
       const parent = target.closest('[data-task-id]')
       const id = parent.dataset.taskId
       const confirm = deleteTask(id)
       deleteTaskfromHtml(confirm, parent);
   
     }
  }
  
  })(tasks);
   */