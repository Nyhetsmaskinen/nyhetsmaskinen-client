function clone (src) {
  return Object.assign({}, src);
}

function addScript (src) {
  var script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
}

export {
  clone,
  addScript
}
