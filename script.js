let section = document.querySelectorAll('section');

window.onscroll = () =>{
    section.forEach(sec =>{
        let todo = window.onscrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate');
        }
    })   
}