import { dataHeadBtnVal, headerSelector, headerRef } from './header-ref';

export const delStyle = (btn, header) => {
    const valBtn = btn.dataset.headerBtn;
    btn.classList.remove(headerSelector.cl_actBtnS);
    
    switch (valBtn) {
        case dataHeadBtnVal.home:
        {
            // !DEL style home (background-home + form)
            header.classList.remove(headerSelector.cl_headerHome);
            // !HIDE FORM
            header.children['search-form'].style.display = 'none';
        }
            break;
        case dataHeadBtnVal.myLib:
            // !DEL style my-lib (background-home + form)
            header.classList.remove(headerSelector.cl_headerMyLib);
            // show form
            header.children['search-form'].removeAttribute('style');
            break;
        default:
            break;
    }
};