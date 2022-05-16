import { headerRef, headerSelector } from './header-ref';
import { headerRenderMain } from './header-render-main';
import { headerRenderMyLib } from './header-render-myLib';
import { delStyle } from './delStyle';
import { addStyle } from './addStyle';

headerRef.nav.addEventListener('click', (e) => {
    e.preventDefault();
    const currBtn = e.target;

    if (e.target.nodeName !== 'BUTTON') { return; }

    const currActBtn = document.querySelector(`.${headerSelector.cl_actBtnS}`);
    const header = document.querySelector(`[${headerSelector.da_container}]`);
    
    if (currBtn.dataset.headerBtn === currActBtn.dataset.headerBtn)
    {
        return;
    }
    
    if (currActBtn)
    {
        delStyle(currActBtn, header);
    }
    //can add a function inside "addStyle.js"
    addStyle(currBtn, header);
});
