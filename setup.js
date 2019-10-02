window.onload = function() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    alert("Your device is a mobile device. This site has not been updated to support mobile devices yet, so it may not display properly.");
  }
  var q = getQueries();
  document.head.innerHTML += "<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,500,700,900&display=swap'>";
  document.head.innerHTML += "<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Ubuntu:700&display=swap'>";
  switch (q.type) {
    default:
      document.head.innerHTML += "<link rel='stylesheet' href='https://styles.simplexshotz.tk/basic.css'>";
      document.body.innerHTML = "<div id='header'><div id='header-inner'><div class='logo'><div class='logo-tag'>&lt/></div><div class='logo-text'>" + (q.name ? q.name.split("_").join(" ") : "Brandon") + "</div></div><div id='header-right'>" + (q.head ? q.head.split("_").join(" ") : document.title) + "</div></div></div><div id='content'>" + document.body.innerHTML + "</div>";
    break;
  }
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
