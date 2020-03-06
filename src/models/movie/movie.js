export default class Movie {

  constructor(data) {
    this.id = `` + data[`id`];
    this.title = data[`name`];
    this.genre = data[`genre`];
    this.year = data[`released`];
    this.duration = data[`run_time`];
    this.cover = data[`preview_image`];
    this.poster = data[`poster_image`];
    this.backgroundImage = data[`background_image`];
    this.backgroundColor = data[`background_color`];
    this.src = data[`video_link`];
    this.previewSrc = data[`preview_video_link`];
    this.description = data[`description`];
    this.director = data[`director`];
    this.actors = data[`starring`] || [];
    this.rating = {score: data[`rating`], count: data[`scores_count`]};
    this.isFavorite = data[`is_favorite`];
    this.comments = [];
    // this.comments = data[`comments`] ? data[`comments`].map((item) => Comment.parseComment(item)) : [];
  }

  static parseMovie(data) {
    return new Movie(data);
  }

  static parseMovies(data) {
    return data.map(Movie.parseMovie);
  }

}
