const dropouts = document.querySelectorAll('.lang__dropout');

dropouts.forEach(dropout => {
    const select = dropout.querySelector('.lang__select');
    const caret = dropout.querySelector('.caret');
    const menu = dropout.querySelector('.lang__menu');
    const options = dropout.querySelectorAll('.lang__menu li');
    const selected = dropout.querySelector('.lang__selected');

    select.addEventListener('click' , () => {
    select.classList.toggle('lang__select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('lang__menu-open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('lang__select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('lang__menu-open');

      options.forEach(option => {
        option.classList.remove('lang__active');
      });
        option.classList.add('lang__active');
    });
  });
});

