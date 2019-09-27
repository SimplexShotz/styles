window.onload = function() {
  alert(getQueries().name);
  document.head.innerHTML += "<link rel='stylesheet' href='https://simplexshotz.github.io/styles/basic.css'>";
  document.head.innerHTML += "<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,500,700,900&display=swap'>";
  document.head.innerHTML += "<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Ubuntu:700&display=swap'>";
  document.body.innerHTML = "<div id='header'><div id='header-inner'><div class='logo'><div class='logo-tag'>&lt/></div><div class='logo-text'>Brandon</div></div><div id='header-right'>" + document.title + "</div></div></div><div id='content'>" + document.body.innerHTML + "</div>";
};

function getQueries() {
  var q = document.getElementsByTagName("script");
  q = q[q.length - 1].src;
  q = q.split("?");
  q.shift();
  q = q.join("?").split("&");
  var temp = {};
  for (var i = 0; i < q.length; i++) {
    temp[q[i].split("=")[0]] = q[i].split("=")[1];
  }
  return temp;
}
