import PostsCard from "./components/PostsCard";
import { useGetPostsQuery } from "./redux/api";

export default function App() {
  // const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  const { isLoading, data } = useGetPostsQuery("");

  //
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-5 p-5 gap-4">
          {data?.map((card: Post) => (
            <PostsCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}
