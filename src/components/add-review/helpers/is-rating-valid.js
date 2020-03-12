const RatingValues = [1, 2, 3, 4, 5];

const isRatingValid = (rating) => rating && RatingValues.includes(+rating);

export default isRatingValid;
