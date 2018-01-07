var refresh_url;

kiwi.plugin('plugin_loader', function() {
    var settings = kiwi.state.settings;
    pluginLoad('static/plugins/image_refresh.js');
    pluginLoad('static/plugins/powered_by.js');
    
    if (settings.startupScreen == 'znc') {
        pluginLoad('static/plugins/znc_buttons.js');
    }
    
    function pluginLoad(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }
});

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
        if (oldonload) {
            oldonload();
        }
            func();
        }
    }
}