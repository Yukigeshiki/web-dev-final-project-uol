/**
 *  Changes the login nav item to logout.
 */
function onLogin() {
  // change the element with ID login to have a display none
  document.getElementById('login').style.display = 'none';
  // change the element with ID logout to have a display block
  document.getElementById('logout').style.display = 'block';
}

/**
 *  Changes the logout nav item to login.
 */
function onLogout() {
  // change the element with ID login to have a display block
  document.getElementById('login').style.display = 'block';
  // change the element with ID logout to have a display none
  document.getElementById('logout').style.display = 'none';
}
