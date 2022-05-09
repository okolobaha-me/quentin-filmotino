function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    })
  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('spinner-box');
      preloaderEl.classList.add('spinner-box--hide');
      
    });