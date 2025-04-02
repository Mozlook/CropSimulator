import { useState } from "react";

import Field from "./components/Field.jsx";
import Shop from "./components/Shop.jsx";
function App() {
	const [page, setPage] = useState(1);
	const MAX = 20;
	const [cropAmount, setCropAmount] = useState(Array(3).fill(1));
	const [plants, setPlants] = useState(
		Array(10)
			.fill()
			.map(() => ({
				type: 0,
				stage: 1,
				growthCount: 0,
				spoilCount: 0,
				spoiled: false,
				ready: false,
			}))
	);

	switch (page) {
		case 1:
			return (
				<Field
					cropAmount={cropAmount}
					setCropAmount={setCropAmount}
					plants={plants}
					setPlants={setPlants}
					MAX={MAX}
					setPage={setPage}
				/>
			);
		case 2:
			return (
				<Shop
					setPage={setPage}
					cropAmount={cropAmount}
					setCropAmount={setCropAmount}
				/>
			);

		default:
			return null;
	}
}

export default App;
