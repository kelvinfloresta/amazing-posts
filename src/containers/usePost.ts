import { useEffect, useState, useCallback } from "react";
import { getPost } from "services/Post.service";
import Post from "entities/Post.entity";
import { finalize } from "rxjs/operators";

export default function usePost(postId: number) {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = useCallback((postId: number) => {
    setIsLoading(true);
    setError(null);
    return getPost(postId)
      .pipe(finalize(onFinalize))
      .subscribe(setPost, setError);
  }, []);

  useEffect(() => {
    if (!postId) return;
    const subscription = fetchPost(postId);
    return () => subscription.unsubscribe();
  }, [fetchPost, postId]);

  function onFinalize() {
    setIsLoading(false);
  }

  function retry() {
    fetchPost(postId);
  }

  return {
    post,
    postError: error,
    postLoading: isLoading,
    retrypost: retry,
  };
}
