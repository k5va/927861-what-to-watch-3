import ReviewTextSize from "./review-text-size";

const isReviewTextValid = (reviewText) => reviewText &&
  reviewText.length >= ReviewTextSize.MIN &&
  reviewText.length <= ReviewTextSize.MAX;

export default isReviewTextValid;
