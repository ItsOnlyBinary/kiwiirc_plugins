var refresh_url;

kiwi.plugin('image_refresh', function() {  
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
        var parent = document.querySelector('.kiwi-welcome-simple-section-info');
        parent.insertBefore(div, parent.childNodes[0]);
    });
});

function refresh_img() {
    var parent = document.querySelector(".kiwi-welcome-simple-section-info");
    if (refresh_url == null) {
        refresh_url = parent.style.backgroundImage;
    }
    parent.style.backgroundImage = refresh_url.replace(/\?/i, '?ctime=' + new Date().getTime() + '&');
}