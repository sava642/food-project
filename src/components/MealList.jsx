import { MealItem } from './MealItem';

function MealList(props) {

	const { meals = [] } = props;

	return <div className="list">
		{
			meals.map((item) => (
				<MealItem key={item.idMeal} {...item} />
			))
		}
	</div>
}

export { MealList }