import { dataHeadBtnVal, headerSelector } from './header-ref';

export const addStyle = (btn, header) => {
    const valBtn = btn.dataset.headerBtn;
    btn.classList.add(headerSelector.cl_actBtnS);
    
    console.log(`add - ${valBtn}`);
    switch (valBtn) {
    case dataHeadBtnVal.home:
        {
            header.classList.add(headerSelector.cl_headerHome);
            header.children['my-lib-box'].classList.add(headerSelector.cl_visuallyHidden);
        }
        break;
    case dataHeadBtnVal.myLib:
        {
            header.classList.add(headerSelector.cl_headerMyLib);
            header.children['my-lib-box'].classList.remove(headerSelector.cl_visuallyHidden);
        }
        break;
    default:
        {
            console.log('ADD-DEFAULT');
            header.classList.add(headerSelector.cl_headerHome);
            header.children['my-lib-box'].classList.add(headerSelector.cl_visuallyHidden);
            header.children['search-form'].removeAttribute('style');
        }
        break;
    }
};