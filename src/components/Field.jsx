import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Roslinka from "./Roslinka.jsx";

export default function Field({
	cropAmount,
	setCropAmount,
	plants,
	setPlants,
	MAX,
}) {
	const [isPlantOpen, setIsPlantOpen] = useState(false);
	const [activeButton, setActiveButton] = useState(null);

	const handleButtonClick = (actionName, plantList) => {
		setIsPlantOpen(plantList);
		setActiveButton(actionName);
	};

	const setCrop = (id, PlantType) => {
		setPlants((prevPlants) => {
			const newPlants = [...prevPlants];
			if (newPlants[id].type === 0) {
				newPlants[id] = {
					...newPlants[id],
					type: PlantType,
					stage: 1,
					growthCount: 0,
					spoilCount: 0,
					spoiled: false,
					ready: false,
				};
			}

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
			setPlants((prevPlants) => {
				const newPlants = [...prevPlants];
				const plant = newPlants[id];
				const newGrowthCount = plant.growthCount + 5;

				newPlants[id] = {
					...plant,
					growthCount: newGrowthCount,
					ready: newGrowthCount >= MAX && plant.stage < 4 ? true : plant.ready,
				};
				return newPlants;
			});
		} else if (activeButton === "Nawozenie" && plant.ready && !plant.spoiled) {
			setPlants((prevPlants) => {
				const newPlants = [...prevPlants];
				newPlants[id] = {
					...newPlants[id],
					stage: Math.min(4, newPlants[id].stage + 1),
					ready: false,
					growthCount: 0,
					spoilCount: 0,
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
			if (plants[id].stage === 4) {
				setCropAmount((prevAmount) => {
					const newAmount = [...prevAmount];
					newAmount[plants[id].type - 1] = newAmount[plants[id].type - 1] + 3;
					return newAmount;
				});
			}
			setPlants((prevPlants) => {
				const newPlants = [...prevPlants];

				newPlants[id] = {
					...newPlants[id],
					type: 0,
					stage: 1,
					growthCount: 0,
					spoilCount: 0,
					spoiled: false,
					ready: false,
				};

				return newPlants;
			});
		}
	};

	// Wzrost rosliny
	useEffect(() => {
		const growthTimer = setInterval(() => {
			setPlants((prevPlants) => {
				return prevPlants.map((plant) => {
					if (plant.type === 0 || plant.spoiled) return plant;

					if (plant.stage < 4 && plant.growthCount < MAX) {
						const newGrowthCount = plant.growthCount + 1;
						const becomeReady = newGrowthCount >= MAX && !plant.ready;

						return {
							...plant,
							growthCount: newGrowthCount,
							ready: becomeReady ? true : plant.ready,
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
					if (
						plant.type === 0 ||
						(!plant.ready && plant.stage !== 4) ||
						plant.spoiled
					)
						return plant;

					const newSpoilCount = plant.spoilCount + 1;
					const becomeSpoiled = newSpoilCount >= MAX;

					return {
						...plant,
						spoilCount: newSpoilCount,
						spoiled: becomeSpoiled ? true : plant.spoiled,
					};
				});
			});
		}, 1000);

		return () => clearInterval(spoilTimer);
	}, []);
	return (
		<>
			<Header
				handleButtonClick={handleButtonClick}
				isPlantOpen={isPlantOpen}
				cropAmount={cropAmount}
			/>
			<div className="pole">
				{plants.map((plant, index) => (
					<Roslinka
						key={index}
						id={index}
						type={plant.type}
						stage={plant.stage}
						max={MAX}
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
