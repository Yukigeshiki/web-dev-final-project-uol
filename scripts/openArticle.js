function openArticle(title, body) {
  var win = window.open(''); // a window object
  win.document.open('text/html', 'replace');
  win.document.write(`
    <html>
      <head>
        <meta name="author" content="Laurence Sonnenberg" />
        <title>Article</title>
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script src="scripts/headerHtml.js"></script>
        <div class="row">
          <h2 class="page-heading">${title}</h2>
          <p class="page-intro" id="body">${body}</p>
        </div>
      <script src="scripts/footerHtml.js"></script>;
      </body>
    </html>`);
  win.document.close();
}
