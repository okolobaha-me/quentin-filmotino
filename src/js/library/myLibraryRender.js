import { refs } from '../firebase/firebaseRefs';
const { libraryBtn, watchedBtn, queueBtn, homeBtn } = refs();

import { onLibraryBtn, onWatchedBtn, onQueueBtn } from './onLibraryBtn';
import { onHomeBtn } from './onLibraryBtn';

libraryBtn.addEventListener('click', onLibraryBtn);
watchedBtn.addEventListener('click', onWatchedBtn);
queueBtn.addEventListener('click', onQueueBtn);
homeBtn.addEventListener('click', onHomeBtn);
