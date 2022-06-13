

$(document).ready(()=> {

    document.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 0){
            $('nav').css('background-color','white');
            $('nav a').css('color','black');

            $('nav').attr('class','nav')


//hi bevan shaquan


            
        }else if(document.documentElement.scrollTop == 0){
            $('nav').css('background-color','transparent');
            $('nav a').css('color','white');

            $('nav').attr('class','navigation')



    

            


        }



        
    })

})



let redirect = () => {
    document.location = 'index.html#section2Title'
}