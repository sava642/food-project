import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';

function Recipe() {

	const [recipe, setRecipe] = useState({})
	const navigate = useNavigate();
	const { id } = useParams();
	const goBack = () => navigate(-1);

	useEffect(() => {
		getMealById(id).then((data) => setRecipe(data.meals[0]))
	}, [id])

	return (<>
		<div className="card">
			<div className="card-image waves-effect waves-block waves-light">
				<img className="activator" src={recipe.strMealThumb} alt={recipe.strMeal} />
			</div>
			<div className="card-content">
				<span className="card-title grey-text text-darken-4">{recipe.strMeal}</span>
				<p>{recipe.strInstructions}</p>

				<table className='centered'>
					<thead>
						<tr>
							<th>Ingredient</th>
							<th>Measure</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(recipe).map((key) => {
							if (key.includes('Ingredient') && recipe[key]) {
								return (
									<tr key={key}>
										<td>
											{recipe[key]}
										</td>
										<td>
											{recipe[`strMeasure${key.slice(13)}`]}
										</td>
									</tr>
								)
							}
							return null
						})}

					</tbody>
				</table>

			</div>
			{recipe.strYoutube ? (
				<div className="row">
					<h5>Video Recipe</h5>
					<iframe
						title={id}
						src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
						allowFullScreen
					/>
				</div>

			) : null}

		</div>
		<button className='btn' onClick={goBack}>go back</button>
	</>
	)
}

export { Recipe }