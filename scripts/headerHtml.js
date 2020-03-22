// html header code heavily inspired by w3school
// Appendix 2 on report page
/* Javascript code to write the header html to a page */
document.write(`
    <!-- get script with login functions -->
    <script src="./scripts/login.js"></script>

    <!-- create page header using header --> 
    <header>
    <!-- create page top nav bar using nav -->
    <nav class="topnav" id="myTopnav">
      <!-- create a container for all elements (centers elements) -->
      <div class="row">
        <!-- create logo with clubs name using h2 -->
        <h2 class="logo"><a href="./index.html">Odd Plant Succulents</a></h2>
    
        <!-- create container for nav items -->
        <div class="nav-items">
          <!-- create nav items using a and link them to pages -->
          <a href="home.html" class="nav-item home">Home</a>
          <a href="events.html" class="nav-item">Events</a>
          <a href="learn.html" class="nav-item">Learn</a>
          <a href="login.html" class="nav-item" id="login">Login</a>
          <!-- logout is hidden until login is clicked -->
          <a href="javascript:void(0);" class="nav-item" id="logout" onClick="onLogout()">Logout</a>
          <!-- create menu icon and set dropDown to trigger onlick using a -->
          <a href="javascript:void(0);" class="icon" onclick="dropDown()"
            >&#9776;</a
          >
        </div>
      </div>
    </nav>
    <!-- get dropDown script -->
    <script src="./scripts/dropDown.js"></script>
    </header>`);
