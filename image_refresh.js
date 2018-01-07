var refresh_url;
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
        });
    }
});

function refresh_img() {
    if (refresh_url == null) {
        refresh_url = target_div.style.backgroundImage;
    }
    if (refresh_url != null) {
        target_div.style.backgroundImage = refresh_url.replace(/\?/i, '?ctime=' + Math.floor(new Date().getTime() / 1000) + '&');
    }
}