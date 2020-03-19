// html header code heavily inspired by w3school
document.write(`
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
          <a href="login.html" class="nav-item">Login</a>
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
