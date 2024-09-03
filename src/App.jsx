import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import "./index.css"

function App() {
	return (
		<>
			<div className="scroll-smooth md:scroll-auto">
				<Navbar />
				<Home />
				<Footer />
			</div>
		</>
	)
}

export default App
