/** credit to w3school for this javascript code */
function dropDown() {
  // get the the element with ID myTopNav
  var x = document.getElementById('myTopnav');
  // check if its class name is topnav. If true make its class name topnav responsive, else topnav
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
