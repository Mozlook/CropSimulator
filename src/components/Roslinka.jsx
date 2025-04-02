import { useEffect } from "react";

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
	const ready_border = props.ready && !props.spoiled ? "ready" : "fill-border";
	return (
		<div
			className={`pole-grzadka ${ready_border}`}
			onClick={() => props.handleElementClick(props.id)}
		>
			<img src={`${img_path}`} alt="roślinka" />
			<div className="status-text">
				{props.ready || props.stage == 4
					? !props.spoiled && (
							<p>Zwiednie za: {props.max - props.spoilCount} sekund</p>
					  )
					: props.type != 0 && (
							<p>Gotowa za: {props.max - props.growthCount} sekund</p>
					  )}
			</div>
		</div>
	);
}
