

$(function () {

    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > 0) {
            $('#navbar').addClass('stickyNav')
        } else {
            $('#navbar').removeClass('stickyNav')
        }
        if (scrollPosition > 600) {
            $('#backToTop').fadeIn(1000);
        } else {
            $('#backToTop').fadeOut(1000);
        }
    })
        $('#backToTop').on('click',function(){
            $('html,body').animate({
                scrollTop:0
            },1000)       
    })

    $(window).on('load',function(){
        $('#preloader_container').fadeOut(1000);
    })

    $('a').on('click', function(e){
        e.preventDefault();
        
        if(this.hash != "") {
            var hash = $(this.hash)
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            },2000)
        }
    })
})