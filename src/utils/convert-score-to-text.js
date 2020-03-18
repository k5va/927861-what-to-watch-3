import {MovieScore} from "@consts";

const convertScoreToText = (score) => {

  if (score < 0) {
    throw new Error(`Score can't be negative`);
  }

  if (score < 3) {
    return MovieScore.BAD;
  }

  if (score < 5) {
    return MovieScore.NORMAL;
  }

  if (score < 8) {
    return MovieScore.GOOD;
  }

  if (score < 10) {
    return MovieScore.VERY_GOOD;
  }

  return MovieScore.AWESOME;
};

export default convertScoreToText;
