$("#textarea").keyup(function(){
    $("#count").text($(this).val().length);
});