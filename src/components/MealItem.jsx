import { Link } from 'react-router-dom'

function MealItem(props) {
	const { strMeal, idMeal, strMealThumb } = props;

	return (
		<div className="card">
			<div className="card-image">
				<img src={strMealThumb} alt={strMeal} />
				<span className="card-title">{strMeal}</span>
				<a href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
			</div>

			<div className="card-action">
				<Link to={`/meal/${idMeal}`} className='btn'>
					Watch recipe
				</Link>
			</div>
		</div>
	)
}

export { MealItem }