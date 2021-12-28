const resource = [ /* --- CSS --- */ '/doc/assets/css/style.css', /* --- JavaScripts --- */ '/doc/assets/js/dist/home.min.js', '/doc/assets/js/dist/page.min.js', '/doc/assets/js/dist/post.min.js', '/doc/assets/js/dist/categories.min.js', '/doc/assets/js/data/search.json', '/doc/app.js', '/doc/sw.js', /* --- HTML --- */ '/doc/index.html', '/doc/404.html', '/doc/categories/', '/doc/tags/', '/doc/archives/', '/doc/about/', /* --- Favicons --- */ '/doc/assets/img/favicons/android-chrome-192x192.png', '/doc/assets/img/favicons/android-chrome-512x512.png', '/doc/assets/img/favicons/apple-touch-icon.png', '/doc/assets/img/favicons/favicon-16x16.png', '/doc/assets/img/favicons/favicon-32x32.png', '/doc/assets/img/favicons/favicon.ico', '/doc/assets/img/favicons/mstile-150x150.png', '/doc/assets/img/favicons/site.webmanifest', '/doc/assets/img/favicons/browserconfig.xml' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'togino77.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
