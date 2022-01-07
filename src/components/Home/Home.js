import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncMovies());
		dispatch(fetchAsyncShows());
	}, [dispatch]);
	
	return (
		<div className="banner-img">
			<MovieList />
		</div>
	);
};

export default Home;