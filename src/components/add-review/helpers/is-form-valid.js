import isReviewTextValid from "./is-review-text-valid";
import isRatingValid from "./is-rating-valid";

const isFormValid = (formData) => {
  return isReviewTextValid(formData.get(`review-text`)) && isRatingValid(formData.get(`rating`));
};

export default isFormValid;
