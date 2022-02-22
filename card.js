//dom elemnt section
const cardWrapper = document.querySelector('.cardWrapper');
const card = document.querySelector('.card');
const highlight = document.querySelector('.highlight');

//hightest values for angle
const mostX = 10;
const mostY = 10;

cardWrapper.addEventListener('mousemove', (e)=>{
    //remove transition
    card.style.transition = 'none';
    highlight.style.transition = 'none';

    const x = e.offsetX;
    const y = e.offsetY;
    //console.log(x," - ", y)

    const {width, height} = cardWrapper.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    //calcuate angle

    const rotationY = ((x - halfWidth) / halfWidth) * mostX;
    const rotationX = ((y - halfHeight)/ halfHeight) * mostY;

    //set the rotation

    card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;

    highlight.style.left = `${(rotationY / mostY * 50) * - 1}%`;
    highlight.style.top = `${(rotationX / mostX * 30) * - 1}%`;


} );

cardWrapper.addEventListener('mouseleave', ()=>{
    // add transition back
    card.style.transition = 'transform .5s ease-in-out';
    highlight.style.transition = 'left .5s ease-in-out, top .5s ease-in-out';

    //add default position back

    card.style.transform = `rotate(0)`;
    highlight.style.left = `-20%`;
    highlight.style.top = `-13%`

});