const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
//const ThemeJSON = JSON.stringify(Theme);

const refs = {
input: document.querySelector('#theme-switch-toggle'),
typed: document.querySelector('#checkbox'),
body: document.querySelector("body"),
};

changeTheme ();

refs.input.addEventListener('change', event => {
  if(!event.target.checked){
    localStorage.setItem('theme', 'light-theme');
  }
  else{
    localStorage.setItem('theme', 'dark-theme');
  }
  changeTheme ();
} );

function changeTheme (){
  currentTheme = localStorage.getItem('theme');
  if (currentTheme == 'dark-theme') {
      refs.body.classList.add('dark-theme');
      refs.body.classList.remove('light-theme');
      refs.input.checked = true;}
    else {
      refs.body.classList.remove('dark-theme');
      refs.body.classList.add('light-theme');
      refs.input.checked = false;}   
}


