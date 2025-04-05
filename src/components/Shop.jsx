export default function Shop({
	setPage,
	cropAmount,
	setCropAmount,
	unlocks,
	setUnlocks,
}) {
	const addNewPlot = () => {
		setUnlocks((prevUnlocks) => ({
			...prevUnlocks,
			unlockedPlots: prevUnlocks.unlockedPlots + 1,
		}));
	};

	const unlockCarrot = () => {
		setUnlocks((prevUnlocks) => ({
			...prevUnlocks,
			carrotsUnlocked: true,
		}));
	};

	const unlockPotato = () => {
		setUnlocks((prevUnlocks) => ({
			...prevUnlocks,
			potatosUnlocked: true,
		}));
	};

	const upgradeWatering = () => {
		setUnlocks((prevUnlocks) => ({
			...prevUnlocks,
			wateringSpeed: prevUnlocks.wateringSpeed + 1,
		}));
	};

	const upgradeCropYield = () => {
		setUnlocks((prevUnlocks) => ({
			...prevUnlocks,
			cropYield: prevUnlocks.cropYield + 1,
		}));
	};

	const upgradeGrowthSpeed = () => {
		setUnlocks((prevUnlocks) => ({
			...prevUnlocks,
			growthSpeed: prevUnlocks.growthSpeed + 1,
		}));
	};

	return (
		<>
			<div className="shop">
				<nav>
					<button onClick={() => setPage(1)} className="nav-button">
						Back to the Field
					</button>
				</nav>
				<div className="upgrades-container">
					{unlocks.unlockedPlots < 10 ? (
						<div className="upgrade">
							<p>Unlock New Plot</p>
							<button onClick={() => addNewPlot()}>Price</button>
						</div>
					) : (
						<div className="upgrade">
							<p>All plots unlocked!</p>
						</div>
					)}
					{!unlocks.carrotsUnlocked ? (
						<div className="upgrade">
							<p>Unlock Carrots</p>
							<button onClick={() => unlockCarrot()}>Price</button>
						</div>
					) : !unlocks.potatosUnlocked ? (
						<div className="upgrade">
							<p>Unlock Potato</p>
							<button onClick={() => unlockPotato()}>Price</button>
						</div>
					) : (
						<div className="upgrade">
							<p>All crops Unlocked!</p>
						</div>
					)}
					<div></div>
					{unlocks.wateringSpeed < 10 ? (
						<div className="upgrade">
							<p>Upgrade Watering Can</p>
							<button onClick={() => upgradeWatering()}>Price</button>
						</div>
					) : (
						<div className="upgrade">
							<p>Maxed watering speed!</p>
						</div>
					)}

					{unlocks.cropYield < 10 ? (
						<div className="upgrade">
							<p>Upgrade Crop Yield</p>
							<button onClick={() => upgradeCropYield()}>Price</button>
						</div>
					) : (
						<div className="upgrade">
							<p>Maxed crop yield!</p>
						</div>
					)}

					{unlocks.growthSpeed < 10 ? (
						<div className="upgrade">
							<p>Upgrade Growth Speed</p>
							<button onClick={() => upgradeGrowthSpeed()}>Price</button>
						</div>
					) : (
						<div className="upgrade">
							<p>Maxed growth speed!</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
