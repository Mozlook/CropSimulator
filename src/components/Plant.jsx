export default function Roslinka(props) {
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
			className={`pole-grzadka`}
			onClick={() => props.handleElementClick(props.id)}
		>
			<img src={`${img_path}`} alt="roślinka" className={`${ready_border}`} />
			<div className="status-text">
				{props.ready || props.stage == 4
					? !props.spoiled && (
							<p>Spoiled in: {props.max - props.spoilCount} seconds</p>
					  )
					: props.type != 0 && (
							<p>Ready in: {props.max - props.growthCount} seconds</p>
					  )}
			</div>
		</div>
	);
}
