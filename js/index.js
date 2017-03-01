 
  document.addEventListener("DOMContentLoaded",init,false);
  function init () {
      var container = document.getElementById('container');
      
      container.onclick = function (e) {
      var selected = e.target;
      var filter = selected.dataset.field;
      [].slice.call(container.querySelectorAll('[data-' + filter +']')).sort(function(a,b){ return (a.dataset[filter].toLowerCase() > b.dataset[filter].toLowerCase()) - (a.dataset[filter].toLowerCase() < b.dataset[filter].toLowerCase()); }).map(function(n,i){ n.parentElement.style.order = i+1; return n;});
      };
  }