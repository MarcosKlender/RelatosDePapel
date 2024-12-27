import { HomeHero } from "../components/HomeHero"
import { HomeTop } from "../components/HomeTop"

export function Home({ addToCart }) {
    return (
        <>
            <HomeHero />
            <HomeTop addToCart={addToCart} />
        </>
    )
}