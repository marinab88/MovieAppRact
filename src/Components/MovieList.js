import React from "react";
import Result from "./Result/Result";

const MovieList = ({ movies }) => {

	return (
		<div>
				<Result movies={movies} />
		</div>
	);

}

export default MovieList;