import { useEffect, useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";
const _ = require("lodash");

function CardContainer({ resetScore, addToScore, score }) {
	const data = [
		{
			name: "Gorya",
			url: require("../images/gorya.jpg"),
			id: uniqid(),
			isClick: false,
		},
		{
			name: "Kavin",
			url: require("../images/kavin.jpg"),
			id: uniqid(),
			isClick: false,
		},
		{
			name: "MJ",
			url: require("../images/mj.jpg"),
			id: uniqid(),
			isClick: false,
		},
		{
			name: "Ren",
			url: require("../images/ren.jpg"),
			id: uniqid(),
			isClick: false,
		},
		{
			name: "Thyme",
			url: require("../images/thyme.jpg"),
			id: uniqid(),
			isClick: false,
		},
	];

	const [list, setList] = useState(data);

	const onClick = (e, id) => {
		e.preventDefault();
		const currentListIndex = list.findIndex((child) => child.id === id);

		if (list[currentListIndex].isClick === true) {
			resetScore();
			alert("You lose");
			setList(data);
			return;
		}

		const updatedList = { ...list[currentListIndex], isClick: true };
		const newList = [...list];
		newList[currentListIndex] = updatedList;
		console.log(id);
		setList(newList);
		addToScore();
	};

	useEffect(() => {
		const newList = _.shuffle(list);
		setList(newList);
	}, [score]);

	return (
		<div className="content">
			{list.map((child) => {
				return (
					<Card
						name={child.name}
						url={child.url}
						key={child.id}
						isClick={child.isClick}
						clickHandle={(e) => {
							onClick(e, child.id);
						}}
					/>
				);
			})}
		</div>
	);
}

export default CardContainer;
