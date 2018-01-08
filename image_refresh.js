var refresh_url = ['https://source.unsplash.com/random/?nature', 'https://source.unsplash.com/random/?animals'];
var target_div;

kiwi.plugin('image_refresh', function() {  
    var settings = kiwi.state.settings;
    if (settings.startupScreen == 'welcome') {
        target_div = document.querySelector('.kiwi-welcome-simple-section-info');
    }
    else if (settings.startupScreen == 'znc') {
        target_div = document.querySelector('.kiwi-welcome-znc-section-info');
    }
    
    if (target_div != null) {
        var div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.top = '5px';
        div.style.left = '10px'
        var link = document.createElement('a');
        link.setAttribute('onclick', 'refresh_img()');
        link.className = 'u-link';
        link.style.fontWeight = '900';
        link.style.fontSize = '2em'
        link.innerHTML = '&#8634;';
        div.appendChild(link);
        
        addLoadEvent(function () {
            target_div.insertBefore(div, target_div.childNodes[0]);
            if (refresh_url instanceof Array) {
                refresh_img();
            }
        });
    }
});

function refresh_img() {
    if (typeof refresh_url == 'undefined') {
        refresh_url = target_div.style.backgroundImage;
    }
    if (typeof refresh_url == 'string') {
        target_div.style.backgroundImage = refresh_url.replace(/\?/i, '?ctime=' + Math.floor(new Date().getTime() / 1000) + '&');
    }
    else if (refresh_url instanceof Array && refresh_url.length > 0) {
        target_div.style.backgroundImage = 'url("' + refresh_url[Math.floor(Math.random() * refresh_url.length)] + '&ctime=' + Math.floor(new Date().getTime() / 1000) + '")';
    }
}