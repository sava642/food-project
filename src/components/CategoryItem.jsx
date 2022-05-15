import { Link } from 'react-router-dom'

function CategoryItem(props) {

	const {
		strCategory,
		strCategoryThumb,
		strCategoryDescription,
	} = props;

	return (
		<div className="card">
			<div className="card-image">
				<img src={strCategoryThumb} alt={strCategory} />
				<span className="card-title">{strCategory}</span>
				<a href="#!" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
			</div>
			<div className="card-content">
				<p>{strCategoryDescription.slice(0, 60)}...</p>
			</div>
			<div className="card-action">
				<Link to={`/category/${strCategory}`} className='btn'>
					Watch category
				</Link>
			</div>
		</div>
	)
}

export { CategoryItem }