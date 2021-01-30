import templateItem from '../templates/menu.hbs';
import menu from '../menu.json';


// const menuItem = document.querySelector('ul.js-menu');
// menuItem.insertAdjacentHTML('beforebegin', templateItem);



const menuItem = templateItem(menu);
console.log(menuItem);

const menuRef = document.querySelector('ul.js-menu');
menuRef.insertAdjacentHTML('afterbegin', menuItem );

//menuRef.append(...menuItem);