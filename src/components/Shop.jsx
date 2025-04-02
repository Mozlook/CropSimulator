export default function Shop({ setPage, cropAmount, setCropAmount }) {
	return (
		<>
			<div className="shop">
				<nav>
					<button onClick={() => setPage(1)} className="nav-button">
						Back to the Field
					</button>
				</nav>
				<div className="upgrades-container">
					<div>
						<p>Unlock New Plot</p>
						<button>Price</button>
					</div>
					<div>
						<p>Unlock Carrots</p>
						<button>Price</button>
					</div>
					<div>
						<p>Unlock Potato</p>
						<button>Price</button>
					</div>
					<div>
						<p>Upgrade Watering Can</p>
						<button>Price</button>
					</div>
					<div>
						<p>Upgrade Crop Yield</p>
						<button>Price</button>
					</div>
					<div>
						<p>Upgrade Growth Speed</p>
						<button>Price</button>
					</div>
				</div>
			</div>
		</>
	);
}
