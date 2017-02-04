$(document).ready(function(){
    var normalsize = $('#phonenumber').css('font-size');
    
    var enlargedText = false;
    $("#phone").click(function(){
        if(enlargedText){
        normalsize = parseFloat(enlargesize)/1.5;
            $('#phonenumber').css('font-size',normalText);
        }
        else{
        var enlargedsize = parseFloat(normalsize)*1.5;
        $('#phonenumber').css('font-size', enlargedsize);
        }
    });
});