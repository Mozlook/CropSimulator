import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Roslinka from "./components/Roslinka.jsx";

function App() {
	const MAX = 5;

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

	const [isPlantOpen, setIsPlantOpen] = useState(false);
	const [activeButton, setActiveButton] = useState(null);

	const handleButtonClick = (actionName, plantList) => {
		setIsPlantOpen(plantList);
		setActiveButton(actionName);
	};

	const setCrop = (id, plantType) => {
		setPlants((prevPlants) => {
			const newPlants = [...prevPlants];
			newPlants[id] = {
				...newPlants[id],
				type: plantType,
				stage: 1,
				growthCount: 0,
				spoilCount: 0,
				spoiled: false,
				ready: false,
			};
			return newPlants;
		});
	};

	const handleElementClick = (id) => {
		const plant = plants[id];

		if (activeButton === "Pszenica") {
			setCrop(id, 1);
		} else if (activeButton === "Marchewka") {
			setCrop(id, 2);
		} else if (activeButton === "Ziemniak") {
			setCrop(id, 3);
		} else if (activeButton === "Podlewanie") {
			console.log("podlewam");
		} else if (activeButton === "Nawozenie" && plant.ready && !plant.spoiled) {
			setPlants((prevPlants) => {
				const newPlants = [...prevPlants];
				newPlants[id] = {
					...newPlants[id],
					stage: Math.min(4, newPlants[id].stage + 1),
					ready: false,
					growthCount: 0,
				};
				return newPlants;
			});
		} else if (activeButton === "Ratowanie" && plant.spoiled) {
			setPlants((prevPlants) => {
				const newPlants = [...prevPlants];
				newPlants[id] = {
					...newPlants[id],
					spoiled: false,
					spoilCount: 0,
					ready: false,
					growthCount: 0,
				};
				return newPlants;
			});
		} else if (activeButton === "Scinanie") {
			console.log("Scinam");
		}
	};

	// Wzrost rosliny
	useEffect(() => {
		const growthTimer = setInterval(() => {
			setPlants((prevPlants) => {
				return prevPlants.map((plant) => {
					if (
						plant.type !== 0 &&
						plant.stage < 4 &&
						plant.growthCount < MAX &&
						!plant.spoiled
					) {
						return {
							...plant,
							growthCount: plant.growthCount + 1,
						};
					}
					return plant;
				});
			});
		}, 1000);

		return () => clearInterval(growthTimer);
	}, []);

	// Psucie rosliny
	useEffect(() => {
		const spoilTimer = setInterval(() => {
			setPlants((prevPlants) => {
				return prevPlants.map((plant) => {
					if (plant.ready && plant.type !== 0 && !plant.spoiled) {
						return {
							...plant,
							spoilCount: plant.spoilCount + 1,
						};
					}
					return plant;
				});
			});
		}, 1000);

		return () => clearInterval(spoilTimer);
	}, []);

	// Update ready state based on growth count
	useEffect(() => {
		setPlants((prevPlants) => {
			return prevPlants.map((plant) => {
				if (
					plant.growthCount >= MAX &&
					plant.type !== 0 &&
					plant.stage !== 4 &&
					!plant.ready
				) {
					return {
						...plant,
						ready: true,
					};
				}
				return plant;
			});
		});
	}, [plants]);

	// Update spoiled state based on spoil count
	useEffect(() => {
		setPlants((prevPlants) => {
			return prevPlants.map((plant) => {
				if (plant.spoilCount >= MAX && plant.type !== 0 && !plant.spoiled) {
					return {
						...plant,
						spoiled: true,
					};
				}
				return plant;
			});
		});
	}, [plants]);

	return (
		<>
			<Header handleButtonClick={handleButtonClick} isPlantOpen={isPlantOpen} />
			<div className="pole">
				{plants.map((plant, index) => (
					<Roslinka
						key={index}
						id={index}
						plant_type={plant.type}
						stage={plant.stage}
						max={5}
						interval={1000}
						spoiled={plant.spoiled}
						ready={plant.ready}
						growthCount={plant.growthCount}
						spoilCount={plant.spoilCount}
						handleElementClick={handleElementClick}
					/>
				))}
			</div>
		</>
	);
}

export default App;
