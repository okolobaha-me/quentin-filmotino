import { refs } from '../firebaseRefs';
const { firebaseuiAuthContainer, signInBtn, signOutBtn } = refs();

import { uiConfig } from '../firebaseUiConfig';
import { ui } from '../firebase';

export function onSignInBtn(e) {
  firebaseuiAuthContainer.classList.toggle('visually-hidden');
  ui.start('#firebaseui-auth-container', uiConfig);
}
