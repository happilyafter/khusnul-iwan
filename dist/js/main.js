// One Page loader
function openPage(pageName, elmnt, color) {

    // PWA
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

(function($) {
    "use strict";
    
    
    // Set the count down timer
    if ($('.countdown').length) {
        var count = $('.countdown').data('count');
        var template = $('.countdown').html();
        $('.countdown').countdown(count, function(event) {
            $(this).html(event.strftime(template));
        });
    }
    
    //get url custom
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
        
        var sn = getParameterByName('to');
        document.getElementById("write").innerHTML = sn;

    // Modal
    $('#myModal').modal('show');
    
    // otomasi music
    $('#modal-open').click(function() {
        //AOS Initialization
        AOS.init();
        musik.play();
    });
    
    
})(jQuery);

