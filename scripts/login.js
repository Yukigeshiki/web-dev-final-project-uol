/**
 *  Changes the login nav item to logout.
 */
function onLogin() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('logout').style.display = 'block';
}

/**
 *  Changes the logout nav item to login.
 */
function onLogout() {
  document.getElementById('login').style.display = 'block';
  document.getElementById('logout').style.display = 'none';
}
