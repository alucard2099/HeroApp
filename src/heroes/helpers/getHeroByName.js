import { heroes } from '../data/heroes'



export const getHeroByName = (name = '') => {
    name = name.toLocaleLowerCase().trim() // quitamos espacios y todo en minu
    if (name.length === 0) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )

}
