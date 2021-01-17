import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div>
			<h1>Instruction</h1>
			<ol className={styles.instruction}>
				<li>
					First Blogs fetch may take time because the backend is hosted on heroku and initializing
					the container may take time
				</li>
				<li>Blogs : Fetch all the blogs from the backend</li>
				<li>Blogs/:id : Fetch single blogs from backend(First rule may apply)</li>
				<li>About : Dummy About us page</li>
			</ol>
		</div>
	);
};

export default Home;
