import UseGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = UseGenres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
