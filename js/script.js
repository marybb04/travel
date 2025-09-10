// "use strict"
// window.addEventListener('load', windowLoad);

// function windowLoad(){
//     document.addEventListener('click',documentActions)
// }

// function documentActions(e){
//     const targetElement = e.targer;

//     if (targetElement.hasAttribute('data-goto')){
//         const gotoElement = document.querySelector('${targetElement.dataset.goto}');
//         const headerHeight = document.querySelector('.header').offsetHeight;
//         console.log('test3')

//     if (gotoElement){
//         console.log('test2')
//         window.scrollTo({
//             top: gotoElement.offsetTop - headerHeight, 
//             behavior: "smooth"
//         })
//     }
//     e.preventDefault()
// }
// if (targetElement.classlist.contains('item-works__type') && !targetElement.classlist.contains('active')){

//     const activeElement = document.querySelector('item-works__type.active');
//     const elements = document.querySelectorAll('item-works__item');
//     const elementType = targetElement.dataset.workType;


//     activeElement.classlist.remove('active')
//     activeElement.classlist.add('active')

//     elements.forEach(element => {
//         !elementType || element.dataset.workType === elementType ?
//             element.hidden = false :  element.hidden = false;


//     });
// }

// }
// console.log('test')

// ========== Переменные для "tabo'v" ==========
const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');


// Перебираем все заголовки табов и вешаем на них click
tabsTitle.forEach(item => item.addEventListener('click', event => {
    
    // Получаем атрибут заголовка на который мы кликнули конкретно!
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    // Удаляем от всех заголовков класс active-tab
    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    // Добавляем всем tab__content класс hidden-tab-content, который скрывает содержимое!
    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    // Добавляем класс active-tab, заголовку который нажали в данный момент!
    item.classList.add('active-tab');

    // Удаляем класс hidden-tab-content, чтобы показывалось его содержимое!
    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));

// Мы указываем, какая конктретно вкладка должна быть активна при загрузке страницы со старта,
// если нужно, чтобы все вкладки были скрыты изначально, то удалите код ниже!
document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');