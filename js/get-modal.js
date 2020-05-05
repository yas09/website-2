$(document).ready(function () {
    
    // Get the modal
    var modal = document.getElementById('modal');
    
    var modalImg = $("#modal-img");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = $('.thumb');
    var captionText = document.getElementById("caption");
    $('.thumb').click(function(){
        console.log("TESTEEE");
        modal.style.display = "block";
        var newSrc = this.src;
        modalImg.attr('src', newSrc);
        captionText.innerHTML = this.alt;
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    $(document).click(function (e) {
        if ($(e.target).is('#modal')) {
            $('#modal').fadeOut(500);
        }
    });

});

