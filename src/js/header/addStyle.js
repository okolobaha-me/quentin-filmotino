import { dataHeadBtnVal, headerSelector, headerRef } from './header-ref';
const addHeaderStyle = (header) => {
    //show style home (background-home + form)
    header.classList.add(headerSelector.cl_headerHome);
    //!hide button-my-lib
    header.children['my-lib-box'].classList.add(headerSelector.cl_visuallyHidden);
};
const addMyLibStyle = (header) => {
    //show style my lib (background-my-lib + button-my-lib)
    header.classList.add(headerSelector.cl_headerMyLib);
    //show buttons-my-lib
    header.children['my-lib-box'].classList.remove(headerSelector.cl_visuallyHidden);
}
const showHeaderSearchForm = (header) => { 
    //show form
    header.children['search-form'].removeAttribute('style');
    //show header-btn-current
    headerRef.btnHome.classList.add(headerSelector.cl_actBtnS);
};
export const addStyle = (btn, header) => {
    const valBtn = btn.dataset.headerBtn;
    btn.classList.add(headerSelector.cl_actBtnS);
    
    switch (valBtn) {
    case dataHeadBtnVal.home:
        {
            addHeaderStyle(header);
            //#region TODO #
                //can be a function that run when the Btn Home was clicked

            //#endregion #
        }
        break;
    case dataHeadBtnVal.myLib:
        {
            addMyLibStyle(header);
            //#region TODO #
                //can be a function that run when the Btn MyLib was clicked

            //#endregion #
        }
            break;
    case dataHeadBtnVal.signIn:
        {
            addHeaderStyle(header);
            showHeaderSearchForm(header);
            //headerRef.btnHome.classList.remove(headerSelector.cl_actBtnS);
            //#region TODO #
                //can be a function that run when the Btn SignIn was clicked

            //#endregion #
        }
        break;
    case dataHeadBtnVal.signOut:
        {
            addHeaderStyle(header);
            showHeaderSearchForm(header);
            headerRef.btnSignOut.classList.remove(headerSelector.cl_actBtnS);
            headerRef.btnSignIn.classList.remove(headerSelector.cl_actBtnS);
            //#region TODO #
                //can be a function that run when the Btn SignOut was clicked

            //#endregion #
        }
        break;
    default:
        break;
    }
};