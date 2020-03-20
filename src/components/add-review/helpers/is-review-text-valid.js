import {ReviewTextSize} from "@consts";

const isReviewTextValid = (reviewText) => reviewText &&
  reviewText.length >= ReviewTextSize.MIN &&
  reviewText.length <= ReviewTextSize.MAX;

export default isReviewTextValid;
