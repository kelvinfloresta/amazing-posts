import { useEffect, useState, useCallback } from "react";
import { listPost } from "services/Post.service";
import { finalize } from "rxjs/operators";
import Post from "entities/Post.entity";

export default function useListPost(userId?: number) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(() => {
    setIsLoading(true);
    setError(null);
    return listPost(userId)
      .pipe(finalize(onFinalize))
      .subscribe(setPosts, setError);
  }, [userId]);

  useEffect(() => {
    const subscription = fetch();
    return () => subscription.unsubscribe();
  }, [fetch]);

  function onFinalize() {
    setIsLoading(false);
  }

  function retry() {
    fetch();
  }

  return {
    posts,
    listPostError: error,
    listPostLoading: isLoading,
    retryListPost: retry,
  };
}
