import { dataHeadBtnVal, headerSelector } from './header-ref';

export const delStyle = (btn, header) => {
    const valBtn = btn.dataset.headerBtn;
    btn.classList.remove(headerSelector.cl_actBtnS);
    
    console.log(`del - ${valBtn}`);
    
    switch (valBtn) {
        case dataHeadBtnVal.home:
        {
            header.classList.remove(headerSelector.cl_headerHome);
            header.children['search-form'].style.display = 'none';
        }
            break;
        case dataHeadBtnVal.myLib:
            header.classList.remove(headerSelector.cl_headerMyLib);
            header.children['search-form'].removeAttribute('style');
            break;
        default:
            break;
    }
};