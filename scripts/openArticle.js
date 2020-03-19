/**
 *  Opens an article on a new page.
 *
 *  @param {String} title The articles title
 *  @param {String} body The articles body.
 */
function openArticle(title, body) {
  // get window object
  var win = window.open(''); // a window object
  // open a new page
  win.document.open('text/html', 'replace');
  // write html to the page
  win.document.write(`
    <!-- declare language in html tag -->
    <html lang="en">
      <head>
      <!-- declare page title -->
      <title>Article</title>
      <!-- declare meta fields -->
      <meta
        name="decription"
        content="This website is dedicated to Odd Plant Succulents and the discussion of succulent plants"
      />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Laurence Sonnenberg" />
      <meta name="refresh" content="600" />
      <meta
        name="keywords"
        content="'succulent plants' plants 'plant propagation' 'odd plant succulents'"
      />
      <!-- declare links -->
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:100,300,400&display=swap"
        rel="stylesheet"
      />
      </head>
      <body>
        <!-- get script to display header -->
        <script src="scripts/headerHtml.js"></script>

        <!-- create a container for all body elements (centers elements) -->
        <div class="row">
          <!-- create title for article using h2 and title paramater -->
          <h2 class="page-heading">${title}</h2>
          <!-- create body for article using p and body paramater -->
          <p class="page-intro" id="body">${body}</p>
        </div>

      <!-- get script to display footer -->
      <script src="scripts/footerHtml.js"></script>
      </body>
    </html>`);
  // close
  win.document.close();
}
