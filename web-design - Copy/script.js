

$(document).ready(()=> {

    document.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 0){
            $('.navigation').css('background-color','white');
            $('.navigation').css('color','black');

            
        }else if(document.documentElement.scrollTop == 0){
            $('.navigation').css('background-color','transparent');
            $('.navigation').css('color','white');


        }



        
    })

})