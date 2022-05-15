import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filteredCat, setFilteredCat] = useState([]);
	const navigate = useNavigate();

	const { pathname, search } = useLocation();



	const handleSearch = (str) => {
		setFilteredCat(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
		navigate({
			pathname,
			search: `?search=${str}`
		})


		navigate(`?search=${str}`)

	}

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.categories);
			setFilteredCat(search ?
				data.categories.filter(item =>
					item.strCategory
						.toLowerCase()
						.includes(search.split('=')[1].toLowerCase())
				) : data.categories
			);

		});
	}, [search]);
	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? (<Preloader />) : (<CategoryList catalog={filteredCat} />)}
		</>

	);
}
export { Home }