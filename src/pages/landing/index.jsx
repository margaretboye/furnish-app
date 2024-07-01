import About from "./components/about"
import Collection from "./components/collection"
import Hero from "./components/hero"
import Production from "./components/production"
import Reviews from "./components/reviews"
import Services from "./components/services"
import Statistics from "./components/statistics"

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <About/>
        <Collection/>
        <Statistics/>
        <Production/>
        <Reviews/>
    </div>
  )
}

export default LandingPage

