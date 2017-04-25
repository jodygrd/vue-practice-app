
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#to_do_list',
    data: {
      list: [
      	'Wake Up!',
       	'Work Out!',
      	'Eat Breakfast'
      	]
    }
  });
});
