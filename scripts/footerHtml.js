document.write(`
    <!-- create footer using footer tag -->
    <footer>
    <!-- create a container for all body elements (centers elements) -->
    <div class="row">
      <!-- create a container for contact us elements using div -->
      <div class="contact-us">
        <!-- create title for contact us using h3 -->
        <h3>Contact us:</h3>
        <!-- create tel text using p -->
        <p><strong>Tel: </strong> +27 00 000 0000</p>
        <!-- create email text using p -->
        <p><strong>Email: </strong> info@oddplantsucculents.com</p>
        <!-- create address text using p -->
        <p>
          <strong>Address: </strong><br />
          04 Fictional Way<br />
          Fictional Suburb<br />
          7777<br />
          Cape Town<br />
          South Africa<br />
        </p>
      </div>
      <!-- create a container for follow us elements using div -->
      <div class="follow-us">
        <!-- create title for follow us using h3 -->
        <h3>Follow us:</h3>
        <!-- create a container for the social media icons using div -->
        <div class="icons">
          <!-- create a link to instagram using a -->
          <a
            href="https://www.instagram.com"
            class="inline-link"
            target="_blank"
          >
            <!-- credit to https://icons8.com/icon/85154/instagram for insta icon -->
            <!-- display instagram icon image using img -->
            <img
              class="icon"
              src="https://img.icons8.com/material-outlined/48/000000/instagram-new.png"
            />
          </a>
          <!-- create a link to facebook using a -->
          <a
            href="https://www.facebook.com"
            class="inline-link"
            target="_blank"
          >
            <!-- credit to https://icons8.com/icon/118487/facebook for facebook icon -->
            <!-- display facebook icon image using img -->
            <img
              class="icon"
              src="https://img.icons8.com/material-outlined/48/000000/facebook-new.png"
            />
          </a>
          <!-- create link to twitter -->
          <a
            href="https://www.twitter.com"
            class="inline-link"
            target="_blank"
          >
            <!-- credit to https://icons8.com/icon/3861/twitter for twitter icon -->
            <!-- display twitter icon image using img -->
            <img
              class="icon"
              src="https://img.icons8.com/android/96/000000/twitter.png"
            />
          </a>
        </div>
      </div>
      <!-- create a container for newsletter subscription elements using div -->
      <div class="newsletter">
        <!-- create a title for signup to newsletter using h3 -->
        <h3>Signup for our monthly newsletter:</h3>
        <!-- create a form using form -->
        <form class="newsletter-form">
          <!-- create email address input using input -->
          <input type="text" class="input" placeholder="Email Address" />
          <!-- create submit button using button -->
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    <!-- -->
    <p class="copyright">&copy 2020 Odd Plant Succulents</p>
    </footer>`);
