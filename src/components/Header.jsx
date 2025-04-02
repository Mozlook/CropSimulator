import { useState } from "react";
export default function Header({ isPlantOpen, handleButtonClick, cropAmount }) {
	return (
		<header>
			<nav>
				<div className="dropdown">
					<button
						onClick={() => handleButtonClick(null, !isPlantOpen)}
						className="nav-button dropdown-button"
					>
						Roślinki
					</button>
					{isPlantOpen && (
						<ul className="plant-list">
							<li onClick={() => handleButtonClick("Pszenica", false)}>
								<img src="wheatIcon.webp" alt="wheat icon" />
								{`Pszenica: ${cropAmount[0]}`}
							</li>
							<li onClick={() => handleButtonClick("Marchewka", false)}>
								<img src="carrotIcon.webp" alt="wheat icon" />
								{`Marchewka: ${cropAmount[1]}`}
							</li>
							<li onClick={() => handleButtonClick("Ziemniak", false)}>
								<img src="potatoIcon.webp" alt="wheat icon" />
								{`Ziemniak: ${cropAmount[2]}`}
							</li>
						</ul>
					)}
				</div>
				<button
					onClick={() => handleButtonClick("Podlewanie", false)}
					className="nav-button"
				>
					Podlewanie
				</button>
				<button
					onClick={() => handleButtonClick("Nawozenie", false)}
					className="nav-button"
				>
					Nawożenie
				</button>
				<button
					onClick={() => handleButtonClick("Ratowanie", false)}
					className="nav-button"
				>
					Ratowanie
				</button>
				<button
					onClick={() => handleButtonClick("Scinanie", false)}
					className="nav-button"
				>
					Ścinanie
				</button>
			</nav>
		</header>
	);
}
