import { refs } from '../firebase/firebaseRefs';
const { libraryBtn, watchedBtn, queueBtn, homeBtn } = refs();

import { onLibraryBtn, onWatchedBtn, onQueueBtn } from './onLibraryBtn';
import { onSiteLoad } from '../render/main-render-logic';

libraryBtn.addEventListener('click', onLibraryBtn);
watchedBtn.addEventListener('click', onWatchedBtn);
queueBtn.addEventListener('click', onQueueBtn);
homeBtn.addEventListener('click', onSiteLoad);
