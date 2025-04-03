export default function Shop({
	setPage,
	cropAmount,
	setCropAmount,
	unlocks,
	setUnlocks,
}) {
	return (
		<>
			<div className="shop">
				<nav>
					<button onClick={() => setPage(1)} className="nav-button">
						Back to the Field
					</button>
				</nav>
				<div className="upgrades-container">
					<div className="upgrade">
						<p>Unlock New Plot</p>
						<button>Price</button>
					</div>
					{!unlocks.carrotsUnlocked ? (
						<div className="upgrade">
							<p>Unlock Carrots</p>
							<button>Price</button>
						</div>
					) : !unlocks.potatosUnlocked ? (
						<div className="upgrade">
							<p>Unlock Potato</p>
							<button>Price</button>
						</div>
					) : (
						<div className="upgrade">
							<p>All crops Unlocked!</p>
						</div>
					)}
					<div></div>

					<div className="upgrade">
						<p>Upgrade Watering Can</p>
						<button>Price</button>
					</div>
					<div className="upgrade">
						<p>Upgrade Crop Yield</p>
						<button>Price</button>
					</div>
					<div className="upgrade">
						<p>Upgrade Growth Speed</p>
						<button>Price</button>
					</div>
				</div>
			</div>
		</>
	);
}
