var nome = prompt('Come ti chiami?');
var p = 0;
var c = 0;

document.getElementById('user-name').innerHTML = nome;

document.getElementById('play').addEventListener('click', function() {
  document.getElementById('b1-l').className = 'hidden';
  document.getElementById('b2-l').className = 'hidden';
  document.getElementById('b3-l').className = 'hidden';
  document.getElementById('b4-l').className = 'hidden';
  document.getElementById('b5-l').className = 'hidden';
  document.getElementById('b6-l').className = 'hidden';
  document.getElementById('b1-r').className = 'hidden';
  document.getElementById('b2-r').className = 'hidden';
  document.getElementById('b3-r').className = 'hidden';
  document.getElementById('b4-r').className = 'hidden';
  document.getElementById('b5-r').className = 'hidden';
  document.getElementById('b6-r').className = 'hidden';
  document.getElementById('n1-l').className = 'hidden';
  document.getElementById('n2-l').className = 'hidden';
  document.getElementById('n3-l').className = 'hidden';
  document.getElementById('n4-l').className = 'hidden';
  document.getElementById('n5-l').className = 'hidden';
  document.getElementById('n6-l').className = 'hidden';
  document.getElementById('n1-r').className = 'hidden';
  document.getElementById('n2-r').className = 'hidden';
  document.getElementById('n3-r').className = 'hidden';
  document.getElementById('n4-r').className = 'hidden';
  document.getElementById('n5-r').className = 'hidden';
  document.getElementById('n6-r').className = 'hidden';
  document.getElementById('user-win').className = 'hidden';
  document.getElementById('draw').className = 'hidden';
  document.getElementById('user-lose').className = 'hidden';

  var p1 = Math.floor(Math.random()*6)+1;
  if (p1 == 1) {document.getElementById('b1-l').className = 'show';}
  if (p1 == 2) {document.getElementById('b2-l').className = 'show';}
  if (p1 == 3) {document.getElementById('b3-l').className = 'show';}
  if (p1 == 4) {document.getElementById('b4-l').className = 'show';}
  if (p1 == 5) {document.getElementById('b5-l').className = 'show';}
  if (p1 == 6) {document.getElementById('b6-l').className = 'show';}
  var p2 = Math.floor(Math.random()*6)+1;
  if (p2 == 1) {document.getElementById('b1-r').className = 'show';}
  if (p2 == 2) {document.getElementById('b2-r').className = 'show';}
  if (p2 == 3) {document.getElementById('b3-r').className = 'show';}
  if (p2 == 4) {document.getElementById('b4-r').className = 'show';}
  if (p2 == 5) {document.getElementById('b5-r').className = 'show';}
  if (p2 == 6) {document.getElementById('b6-r').className = 'show';}
  var c1 = Math.floor(Math.random()*6)+1;
  if (c1 == 1) {document.getElementById('n1-l').className = 'show';}
  if (c1 == 2) {document.getElementById('n2-l').className = 'show';}
  if (c1 == 3) {document.getElementById('n3-l').className = 'show';}
  if (c1 == 4) {document.getElementById('n4-l').className = 'show';}
  if (c1 == 5) {document.getElementById('n5-l').className = 'show';}
  if (c1 == 6) {document.getElementById('n6-l').className = 'show';}
  var c2 = Math.floor(Math.random()*6)+1;
  if (c2 == 1) {document.getElementById('n1-r').className = 'show';}
  if (c2 == 2) {document.getElementById('n2-r').className = 'show';}
  if (c2 == 3) {document.getElementById('n3-r').className = 'show';}
  if (c2 == 4) {document.getElementById('n4-r').className = 'show';}
  if (c2 == 5) {document.getElementById('n5-r').className = 'show';}
  if (c2 == 6) {document.getElementById('n6-r').className = 'show';}
  var dadiP = p1 + p2;
  var dadiC = c1 + c2;
  if (dadiP > dadiC) {
    document.getElementById('user-win').className = 'show';
    p++;
  }
  if (dadiP == dadiC) {document.getElementById('draw').className = 'show';}
  if (dadiP < dadiC) {
    document.getElementById('user-lose').className = 'show';
    c++;
  }
  document.getElementById('score').innerHTML = p + ' : ' + c;
})
