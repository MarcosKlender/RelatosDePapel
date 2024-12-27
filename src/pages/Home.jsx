import { HomeHero } from "../components/HomeHero"
import { HomeTop } from "../components/HomeTop"

export function Home({ addToCart }) {
    return (
        <>
            <h1 className="page-title">Bienvenido a Relatos de Papel</h1>
            <HomeHero />
            <HomeTop addToCart={addToCart} />
        </>
    )
}