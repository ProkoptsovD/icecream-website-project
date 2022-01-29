$( document ).ready(function() {
    jQuery('.thumb-1').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-2').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-3').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-4').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-5').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-6').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-7').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-8').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-9').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );
    
    jQuery('.thumb-10').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    jQuery('.thumb-11').hover(
        function(){
            $(this).addClass("grid__thumb--is-hovered");
        },
        function(){
            $(this).removeClass("grid__thumb--is-hovered");
        }
    );

    var sizer = ".sizer";

    var container = $("#gallery");

    container.imagesLoaded(function () {
        container.masonry({
            itemSelector: ".grid__thumb",
            columnWidth: sizer,
            percentPosition: true
        });
    });
});