import usePlatforms from "./usePlatforms";

const usePlatform = (Id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === Id);
};

export default usePlatform;
