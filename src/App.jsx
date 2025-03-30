import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Roslinka from "./components/Roslinka.jsx";

function App() {
	const [plantType, setPlantType] = useState(Array(10).fill(0));
	const [Stage, setStage] = useState(Array(10).fill(1));
	const [growthCount, setGrowthCount] = useState(Array(10).fill(0));
	const [spoilCount, setSpoilCount] = useState(Array(10).fill(0));
	const [spoiledPlants, setSpoiledPlants] = useState(Array(10).fill(false));
	const [ready, setReady] = useState(Array(10).fill(false));
	const [isPlantOpen, setIsPlantOpen] = useState(false);
	const [activeButton, setActiveButton] = useState(null);

	const handleButtonClick = (actionName, plantList) => {
		setIsPlantOpen(plantList);
		setActiveButton(actionName);
	};

	const setCrop = (id, plant_type) => {
		setPlantType((prevArray) =>
			prevArray.map((prevValue, i) => (i === id ? plant_type : prevValue))
		);
		setStage((prevArray) =>
			prevArray.map((prevValue, i) => (i === id ? 1 : prevValue))
		);
		setReady((prevArray) =>
			prevArray.map((prevValue, i) => (i === id ? false : prevValue))
		);
		setGrowthCount((prevArray) =>
			prevArray.map((prevValue, i) => (i === id ? 0 : prevValue))
		);
		setSpoilCount((prevArray) =>
			prevArray.map((prevValue, i) => (i === id ? 0 : prevValue))
		);
	};

	const handleElementClick = (id, ready) => {
		if (activeButton === "Pszenica") {
			setCrop(id, 1);
		}
		if (activeButton === "Marchewka") {
			setCrop(id, 2);
		}
		if (activeButton === "Ziemniak") {
			setCrop(id, 3);
		}
		if (activeButton === "Podlewanie") {
			console.log("podlewam");
		}
		if (activeButton === "Nawozenie") {
			if (ready) {
				setStage((prevArray) =>
					prevArray.map((prevValue, i) =>
						i === id ? Math.min(4, prevValue + 1) : prevValue
					)
				);
				setReady((prevArray) =>
					prevArray.map((prevValue, i) => (i === id ? false : prevValue))
				);
				setGrowthCount((prevArray) =>
					prevArray.map((prevValue, i) => (i === id ? 0 : prevValue))
				);
			}
		}
		if (activeButton === "Ratowanie") {
			setSpoiledPlants((prevArray) =>
				prevArray.map((spoiled, i) => (i === id ? false : spoiled))
			);
		}
		if (activeButton === "Scinanie") {
			console.log("Scinam");
		}
	};

	// useEffect(() => {
	// 	console.log("Ready state:", ready);
	// 	console.log("Spoil count:", spoilCount);
	// 	console.log("Spoiled plants:", spoiledPlants);
	// }, [ready, spoilCount, spoiledPlants]);

	// Wzrost rosliny
	useEffect(() => {
		const growthTimer = setInterval(() => {
			setGrowthCount((prevGrowthCount) =>
				prevGrowthCount.map((count, index) =>
					plantType[index] !== 0 && Stage[index] < 4 && count < 5
						? count + 1
						: count
				)
			);
		}, 1000);
		return () => clearInterval(growthTimer);
	}, [Stage, plantType]);

	// Psucie rosliny
	useEffect(() => {
		const spoilTimer = setInterval(() => {
			setSpoilCount((prevSpoilCount) => {
				return prevSpoilCount.map((count, index) => {
					if (ready[index] && plantType[index] !== 0 && !spoiledPlants[index]) {
						console.log(
							`Zwiększam spoilCount dla rośliny ${index}: ${count} -> ${
								count + 1
							}`
						);
						return count + 1;
					}
					return count;
				});
			});
		}, 1000);

		return () => clearInterval(spoilTimer);
	}, []);

	useEffect(() => {
		setReady((prevReady) =>
			growthCount.map((count, index) =>
				count >= 5 && plantType[index] !== 0 && Stage[index] !== 4
					? true
					: prevReady[index]
			)
		);
	}, [growthCount]);

	useEffect(() => {
		setSpoiledPlants((prevSpoiledPlants) =>
			prevSpoiledPlants.map((spoiled, index) =>
				spoilCount[index] >= 5 && plantType[index] !== 0 ? true : spoiled
			)
		);
	}, [spoilCount, plantType]);

	return (
		<>
			<Header handleButtonClick={handleButtonClick} isPlantOpen={isPlantOpen} />
			<div className="pole">
				{plantType.map((plant_type, index) => (
					<Roslinka
						key={index}
						id={index}
						plant_type={plant_type}
						stage={Stage[index]}
						max={5}
						interval={1000}
						spoiled={spoiledPlants[index]}
						ready={ready[index]}
						growthCount={growthCount[index]}
						spoilCount={spoilCount[index]}
						handleElementClick={handleElementClick}
					/>
				))}
			</div>
		</>
	);
}

export default App;
