const row = document.querySelector('.container-carousel');
const carImg = document.querySelectorAll('.container-img-cars'); 
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

arrowLeft.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;

    const indicatorActive = document.querySelector('.indicators .active');
    if(indicatorActive.previousSibling){
        indicatorActive.previousSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
});

arrowRight.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;

    const indicatorActive = document.querySelector('.indicators .active');
    if(indicatorActive.nextSibling){
        indicatorActive.nextSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
});

const numberPage = Math.ceil(carImg.length / 4);

for(let i = 0; i < numberPage; i++){
    const indicator = document.createElement('button');

    if(i === 0){
        indicator.classList.add('active')
    }

    document.querySelector('.indicators').appendChild(indicator).classList.add('indicators-button');

    indicator.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;
        document.querySelector('.indicators .active').classList.remove('active');
        e.target.classList.add('active');
    });
}

carImg.forEach( img  => {
    img.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            carImg.forEach( img => img.classList.remove('hover'));
            element.classList.add('hover');
        }, 300)

    })
});

row.addEventListener('mouseleave', () => {
    carImg.forEach( img => img.classList.remove('hover'));
})