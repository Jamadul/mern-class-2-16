

const acc_header = document.querySelectorAll('.accordion-header');


acc_header.forEach(iteam => {

    iteam.addEventListener('click', function(){

        const currenlyActiveiteam = document.querySelector('.accordion-header.active');

        if( currenlyActiveiteam && currenlyActiveiteam !== iteam){

            currenlyActiveiteam.classList.toggle('active');
            currenlyActiveiteam.nextElementSibling.style.height ='0px';
        }

        iteam.classList.toggle('active');
        
        if((iteam.classList.contains('active'))){

            iteam.nextElementSibling.style.height = iteam.nextElementSibling.scrollHeight +'px';

        }else{

            iteam.nextElementSibling.style.height ='0px';

        }

    });

});