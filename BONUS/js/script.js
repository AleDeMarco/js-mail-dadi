var mail = prompt('Inserisci la tua mail:');
var allow = ["1", "2", "3", "4", "5"];
var access = 0;

for (var i = 0; i < allow.length; i++) {
  if (mail == allow[i]) {access = 1};
}

if (access == 1) {
  document.getElementById('pass').className = 'show';
  document.getElementById('pass-text').className = 'show';
}
else {
  document.getElementById('refused').className = 'show';
  document.getElementById('refused-text').className = 'show';
}
