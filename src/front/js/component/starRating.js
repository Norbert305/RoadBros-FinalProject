import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export function StarRating() {
	const [rating, setRating] = React.useState(undefined);
	const [hover, setHover] = React.useState(undefined);

	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				return (
					<>
						<input
							className="d-none"
							type="radio"
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<FaStar
							className="star"
							size={60}
							name="rating"
							color={ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"}
							onMouseEnter={() => setRating(ratingValue)}
							onMouseLeave={() => setRating(undefined)}
						/>
					</>
				);
			})}
			<p className="mt-4 fs-5">Your Rating is {rating} Stars</p>
		</div>
	);
}
