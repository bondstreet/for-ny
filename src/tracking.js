
let gtmScript = ''
let ga = undefined

if (process.env.NODE_ENV !== 'development') {
    gtmScript = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5W79SK');
    `
}

export const logPageView = function() {
    if (!ga) {
        ga = require('react-ga');
        ga.initialize('UA-49611446-1');
    }
    ga.pageview(window.location.pathname);
}

export {
    gtmScript,
    logPageView
}
