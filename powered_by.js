var refresh_url;

kiwi.plugin('powered_by', function() {  
    var div = document.createElement('div');
    div.align = 'center';
    div.innerHTML = 'Powered by ';
    var link = document.createElement('a');
    link.setAttribute('onclick', 'window.open("https://kiwiirc.com", "kiwiirc.com");');
    link.className = 'u-link';
    link.innerHTML = 'Kiwi IRC';
    div.appendChild(link);
    addLoadEvent(function () {
        document.querySelector('.u-form').appendChild(div);
    });
});
