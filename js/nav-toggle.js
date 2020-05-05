$(document).ready(function(){
        
    $("#navi-list").click(function() {
        var checkBox = $("#navi-toggle");
        checkBox.prop("checked",!checkBox.prop("checked"));
    });      
      
});