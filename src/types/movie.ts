import Comment from "./comment";
import Rating from "./rating";

interface Movie {
    id: string,
    title: string,
    genre: string,
    year: number,
    backgroundImage: string,
    poster: string,
    duration: number,
    src: string,
    cover: string,
    rating: Rating,
    description: string,
    director: string,
    actors: Array<string>,
    comments: Array<Comment>,
    isFavorite: boolean
};

export default Movie;
