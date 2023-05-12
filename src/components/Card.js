function Card({ name, url, isClick, clickHandle }) {
	return (
		<div className="card" onClick={clickHandle}>
			<img src={url} alt={name} />
			<h2>{name}</h2>
		</div>
	);
}

export default Card;
