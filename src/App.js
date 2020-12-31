import "./App.css";

// Import Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BlogRoutes from "./routes/BlogRoutes";

const App = () => {
	return (
		<div className="App">
			<Nav />
			<BlogRoutes />
			<Footer />
		</div>
	);
};

export default App;
