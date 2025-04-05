import { FaTimesCircle } from "react-icons/fa";

export default function Roslinka(props) {
	const isLocked = props.id >= props.unlocks.unlockedPlots;

	const img_path = props.spoiled
		? "spoiled.png"
		: (() => {
				switch (props.type) {
					case 1:
						return `wheat/${props.stage}.png`;
					case 2:
						return `carrot/${props.stage}.png`;
					case 3:
						return `potato/${props.stage}.png`;
					default:
						return "empty.png";
				}
		  })();

	const ready_border =
		props.stage === 4 && !props.spoiled
			? "ready-harvest"
			: props.ready && !props.spoiled
			? "ready"
			: "fill-border";

	return (
		<div
			className={`pole-grzadka ${isLocked ? "locked" : ""}`}
			onClick={() => !isLocked && props.handleElementClick(props.id)}
		>
			<img src={`${img_path}`} alt="roślinka" className={`${ready_border}`} />
			{isLocked && <FaTimesCircle className="lock-icon" />}
			<div className={`status-text ${isLocked ? "locked" : ""}`}>
				{isLocked ? (
					<p>Locked</p>
				) : props.ready || props.stage === 4 ? (
					!props.spoiled && (
						<p>Spoiled in: {props.max - props.spoilCount} seconds</p>
					)
				) : (
					props.type !== 0 && (
						<p>
							Ready in:{" "}
							{Math.floor(
								props.max - props.growthCount - props.unlocks.growthSpeed
							)}{" "}
							seconds
						</p>
					)
				)}
			</div>
		</div>
	);
}
