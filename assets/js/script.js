function apex_check() {
  console.log(window.location.href)
  if (window.location.href.endsWith('index.html')) {
    window.location.href = window.location.href.replace("index.html","");
  }
}
