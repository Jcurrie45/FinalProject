$(document).ready(function(){
    var normalsize = $('#phonenumber').css('font-size');
    var notEnlarged = $('#address').css('font-size');
    var enlargedText = false;
    $("#phone").click(function(){
        if(enlargedText){
        normalsize = parseFloat(normalsize);
            $('#phonenumber').css('font-size',normalsize);
            enlargedText=false;
        }
        else if(!enlargedText){
        var enlargedsize = parseFloat(normalsize)*1.5;
        $('#phonenumber').css('font-size', enlargedsize);
            enlargedText=true;
        }
    });
enlargedText = false;
    $("#address").click(function(){
        if(enlargedText){
        notEnlarged = parseFloat(notEnlarged);
            $('#address').css('font-size',notEnlarged);
            enlargedText=false;
        }
        else if(!enlargedText){
        var enlargedsize = parseFloat(notEnlarged)*1.5;
        $('#address').css('font-size', enlargedsize);
            enlargedText=true;
        }
    });
    enlargedText = false;
    $("#email").click(function(){
        if(enlargedText){
        notEnlarged = parseFloat(notEnlarged);
            $('#email').css('font-size',notEnlarged);
            enlargedText=false;
        }
        else if(!enlargedText){
        var enlargedsize = parseFloat(notEnlarged)*1.5;
        $('#email').css('font-size', enlargedsize);
            enlargedText=true;
        }
    });
});