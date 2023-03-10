$(document).ready(function(){


    let $btns= $('.hobbies-area .button-group button');

    $btns.click(function(e){
        $('.hobbies-area .button-group button').removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $('.hobbies-area .grid').isotope({
            filter : selector
        });
       return false; 
    })

//sticky navigation menu

let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll= $(window).scrollTop();
            if(scroll >= nav_offset_top){
             $('.header_area .main-menu').addClass('navbar_fixed');   
            }
            else{
                $('.header_area .main-menu').removeClass('navbar_fixed');   
            }
        })
    }
}

navbarFixed();

});