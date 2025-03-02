import reactIcon from './imgs/react_logo-512.png'
import sassIcon from './imgs/sass-1-logo-png-transparent.png'
import ignite from './imgs/ignite.png'
import musicApp from './imgs/musicapp.png'
import kittyKingdom from './imgs/kitty kingdom.png'
import omdbCover from './imgs/Screenshot (18).png' // Make sure to add this image

function projectsData() {
    return [
        {
            name: 'Ignite',
            description: 'An amazing website for searching up games',
            url: 'https://cablooo.github.io/ignite/',
            icons: [reactIcon],
            cover: ignite,
        },
        {
            name: 'Music App',
            description: 'Small website for cool songs',
            url: 'https://cablooo.github.io/music-app/',
            icons: [reactIcon, sassIcon],
            cover: musicApp,
        },
        {
            name: 'Kitty Kingdom',
            description: 'Random websites for cats',
            url: 'https://cablooo.github.io/kitty-kingdom/',
            icons: [reactIcon],
            cover: kittyKingdom,
        },
        {
            name: 'OMDB Search',
            description: 'Search engine for TV shows, movies, and cartoons using OMDB API',
            url: 'https://cablooo.github.io/omdb/',
            icons: [reactIcon],
            cover: omdbCover,
        }
    ];
}

export default projectsData