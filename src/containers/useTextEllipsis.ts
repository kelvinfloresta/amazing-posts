import { useMemo } from "react";

export default function useTextEllipsis(text?: string, length = 150) {
  const description = useMemo(() => {
    if (!text) return "";

    if (text.length <= length) return text;

    return text.slice(0, length) + "...";
  }, [text, length]);

  return description;
}
