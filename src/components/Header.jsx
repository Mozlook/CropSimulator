import { useState } from "react";
export default function Header({ isPlantOpen, handleButtonClick, cropAmount }) {
	return (
		<header>
			<nav>
				<div className="dropdown">
					<button
						onClick={() => handleButtonClick("placeholder", !isPlantOpen)}
						className="nav-button"
					>
						Roślinka
					</button>
					{isPlantOpen && (
						<ul className="plant-list">
							<li onClick={() => handleButtonClick("Pszenica", false)}>
								{`Pszenica ${cropAmount[0]}`}
							</li>
							<li onClick={() => handleButtonClick("Marchewka", false)}>
								{`Marchewka ${cropAmount[1]}`}
							</li>
							<li onClick={() => handleButtonClick("Ziemniak", false)}>
								{`Ziemniak ${cropAmount[2]}`}
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
