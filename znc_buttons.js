kiwi.plugin('znc_buttons', function() {
    var manageUrl = '/manage/';
    welcome_add();
    sidebar_add();
    
    function welcome_add() {
        // Add link to welcome screen
        var div = document.createElement('div');
        div.align = 'center';
        var link = document.createElement('a');
        link.setAttribute('onclick', 'location.href="' + manageUrl + '"');
        link.className = 'u-link';
        link.innerHTML = 'Manage ZNC';
        div.appendChild(link);
        addLoadEvent(function () {
            document.querySelector('.u-form').appendChild(div);
        });
    }
    function sidebar_add() {
        // Add link to side bar
        var div = document.createElement('div');
        div.align = 'center';
        var link = document.createElement('a')
        link.setAttribute('onclick', 'window.open("' + manageUrl + '", "zncmanage");');
        link.style.cursor = 'pointer';
        link.innerHTML = 'Manage ZNC';
        div.appendChild(link);
        kiwi.addUi('browser', div);
    }
});