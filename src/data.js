import reactIcon from './imgs/react_logo-512.png'
import sassIcon from './imgs/sass-1-logo-png-transparent.png'

import ignite from './imgs/ignite.png'
import musicApp from './imgs/musicapp.png'
import kittyKingdom from './imgs/kitty kingdom.png'

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
    ];
}

export default projectsData