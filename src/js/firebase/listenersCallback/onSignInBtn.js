import { refs } from '../firebaseRefs';
const { firebaseuiAuthContainer } = refs();

import { uiConfig } from '../firebaseUiConfig';
import { ui } from '../firebase';

export function onSignInBtn(e) {
  firebaseuiAuthContainer.classList.toggle('is-hidden');
  ui.start('#firebaseui-auth-container', uiConfig);
}
