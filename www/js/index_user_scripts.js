/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Fried Rice & Chicken */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_FriedRice"); 
         return false;
    });
    
        /* button  #backBtnFriedRice */
    $(document).on("click", "#backBtnFriedRice", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
     
     
     
     
    var iabRef = null;

    // Inject our custom JavaScript into the InAppBrowser window
    //
     
  
    function iabClose(event) {
         iabRef.removeEventListener('exit', iabClose);
    }
     
     
     
     
     
        /* button  #takeAwayBtn */
    $(document).on("click", "#takeAwayBtn", function(evt)
    {
         iabRef = window.open('http://www.shawacademy.com', '_blank', 'location=yes');
         iabRef.addEventListener('loadstop', replaceHeaderImage);
         iabRef.addEventListener('exit', iabClose);
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
