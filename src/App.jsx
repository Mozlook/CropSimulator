import { useState, useEffect } from "react";

import Field from "./components/Field.jsx";

function App() {
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

	return (
		<>
			<Field
				cropAmount={cropAmount}
				setCropAmount={setCropAmount}
				plants={plants}
				setPlants={setPlants}
				MAX={MAX}
			/>
		</>
	);
}

export default App;
