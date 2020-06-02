$(document).ready(function(){
    $("p").click(function() {
        $("#walrus-showing").toggle().slideDown();
        $("#walrus-hidden").toggle();
      });
      
      $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("green-background");
      });
    
      $("button#yellow").click(function() {
        $("body").removeClass();
        $("body").addClass("yellow-background");
      });
    
      $("button#red").click(function() {
        $("test").removeClass();
        $("body").addClass("red-background");
      });




    });
