import { useState } from "react";
import { deletePost } from "services/Post.service";

export default function useDeletePost() {
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  function fetch(postId: number, onSuccess: () => void) {
    setIsLoading(true);
    setError(null);
    return deletePost(postId).subscribe(beforeSuccess(onSuccess), onFail);
  }

  function beforeSuccess(onSuccess: () => void) {
    return () => {
      setIsLoading(false);
      onSuccess();
    };
  }

  function onFail(error: unknown) {
    setIsLoading(false);
    setError(error);
  }

  return {
    deletePostError: error,
    deletePostLoading: isLoading,
    deletePost: fetch,
  };
}
