import { headerRef, headerSelector } from './header-ref';
import { headerRenderMain } from './header-render-main';
import { headerRenderMyLib } from './header-render-myLib';
import { delStyle } from './delStyle';
import { addStyle } from './addStyle';
//#region Static #
    /*
     * LOGO + NAVIGATION
     * {DYNAMIC}
     * LANG
    */

//#endregion #

headerRef.nav.addEventListener('click', (e) => {
    e.preventDefault();
    // DEL
    // headerRef.btnMyLib.classList.remove(headerSelector.cl_visuallyHidden);

    if (e.target.nodeName !== 'BUTTON') { return; }

    const currActBtn = document.querySelector(`.${headerSelector.cl_actBtnS}`);
    const header = document.querySelector(`[${headerSelector.da_container}]`);
    const myLibBox = document.querySelector(`[${headerSelector.da_myLibBox}]`);
    
    if (currActBtn)
    {
        delStyle(currActBtn, header);

    }

    const currBtn = e.target;
    addStyle(currBtn, header);
    
});
