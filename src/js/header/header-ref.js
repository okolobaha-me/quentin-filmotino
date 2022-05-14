export const dataHeadBtnVal = {
    home: 'home',
    myLib: 'myLib'
}
export const headerSelector = {
    da_myLibBox: 'data-my-lib-box',
    da_container: 'data-header-container',
    cl_visuallyHidden: 'visually-hidden',
    cl_headerHome: 'header-home',
    cl_headerMyLib: 'header-my-lib',
    cl_actBtnS: 'header-btn-current'
};
export const headerRef = {
    btnHome: document.querySelector('[data-header-btn = "home"]'),
    btnMyLib: document.querySelector('[data-header-btn = "myLib"]'),
    form: document.querySelector('#search-form'),
    nav: document.querySelector('.nav'),
    btn: document.querySelectorAll('[data-header-btn]')
};