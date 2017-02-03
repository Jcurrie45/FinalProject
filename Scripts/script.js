$(document).ready(function(){
    var normalsize = $('#phonenumber').css('font-size');
    
    $("#phone").click(function(){
        var enlargedsize = parseFloat(normalsize)*1.5;
        $('#phonenumber').css('font-size', enlargedsize);
    });
});