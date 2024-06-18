let banner = document.querySelector('.banner')
let corazones = document.querySelectorAll('.section__cards__block__corazon')
let bannerGallery = [
    'https://images.unsplash.com/photo-1616046386594-c152babc9e15?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
let counter = 0

setInterval( ()=> {
    setTimeout( () => {
        banner.style.opacity = '0'
    }, 200)

    setTimeout( () => {
        counter++

        if (counter >= bannerGallery.length) {
            counter = 0
        }

        banner.style.opacity = '1'
        banner.style.background = `url(${bannerGallery[counter]})`
        banner.style.backgroundRepeat = 'no-repeat'
        banner.style.backgroundSize = 'cover'
        banner.style.backgroundPosition = 'center'

    }, 400)
}, 2000)


corazones.forEach( (corazon) => {
    corazon.addEventListener('click', () => {
        corazones.forEach( (c) => {
            // quitar el estilo de todos los corazones
            c.style.fill = '';
            c.style.stroke = '';
        });
        // alicar el estilo solo al corazón clickeado
        corazon.style.fill = '#9edfff';
        corazon.style.stroke = '#9edfff';
    });
});
