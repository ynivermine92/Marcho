$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000

  });
});










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