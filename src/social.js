// https://developers.facebook.com/docs/javascript/quickstart
// https://developers.facebook.com/docs/plugins/share-button/#configurator
const facebook = `
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '158471404493763',
            xfbml      : true,
            version    : 'v2.6'
        });
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        // js.src = "//connect.facebook.net/en_US/sdk/debug.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    `
// https://about.twitter.com/resources/buttons#tweet
const twitter = `!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');`

const socialScripts = facebook + twitter

const initSocialScripts = function() {
    if (typeof FB !== 'undefined') {
        FB.XFBML.parse(document.getElementById('app'))
    }
    if (typeof twittr !== 'undefined') {
        twttr.widgets.load(document.getElementById('app'))
    }
}

export {
    socialScripts,
    initSocialScripts
}