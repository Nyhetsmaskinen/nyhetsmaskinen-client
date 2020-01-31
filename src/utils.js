function clone (src) {
  return Object.assign({}, src);
}

function addScript (src) {
  var script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
  return script
}

function addScripts (srcs) {
  if(srcs.length > 0){
    var script = addScript(srcs[0]);
    srcs.shift();
    script.onload = function() {
      addScripts(srcs)
    };
  }
}

export {
  clone,
  addScript,
  addScripts
}
