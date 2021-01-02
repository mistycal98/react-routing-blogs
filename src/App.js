import "./App.css";

// Import Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BlogRoutes from "./routes/BlogRoutes";

// Style Import
import styles from "./components/Body.module.scss";

const App = () => {
	return (
		<div className="App">
			<Nav />
			<div className={styles.body}>
				<BlogRoutes />
			</div>
			<Footer />
		</div>
	);
};

export default App;
