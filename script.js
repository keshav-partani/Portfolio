var text = $('#my_development_field').text();
var length = text.length;
var character = 0;


(function typeWriter() { 
    var timeOut;
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('#my_development_field').text(type);
        typeWriter();

    }, 250);
}() );