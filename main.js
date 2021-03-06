new fullpage('#fullpage', {
    //autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination,direction) => {
        const section = destination.item
        const title = section.querySelector('h1')
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title, 0.5, {y: '50', opacity: 0}, { y:0, opacity: 1})


        if(destination.index === 1) {
            const chairs = document.querySelectorAll('.chair')
            const description = document.querySelector('.description')

            tl
                //.fromTo(chairs, 0.7, {x: '100%'}, {x: '-35%'})
                .fromTo(description, 0.75, {y: '50', opacity: 0}, {y: 0, opacity: 1})
                .fromTo(chairs[0], 1, {x: '100%', opacity: 1}, {x: '-55%', opacity: 1})
                .fromTo(chairs[1], 1, {x: '100%', opacity: 0}, {x: '-45%', opacity: 1})
                .fromTo(chairs[2], 1, {x: '100%', opacity: 0}, {x: '-35%', opacity: 1})

        }

        if(destination.index === 2) {
            const cards = document.querySelectorAll('.card')
            
            tl
                .fromTo(cards[0], 0.5, {y: '100', opacity: 0}, {y: 50, opacity: 1})
                .fromTo(cards[1], 0.7, {y: '100', opacity: 0}, {y: 50, opacity: 1})
                .fromTo(cards[2], 0.9, {y: '100', opacity: 0}, {y: 50, opacity: 1})

        }
    }
})