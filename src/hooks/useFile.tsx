import { useEffect, useState } from "react";

export default function useLoadFile({ file, loading }: useLoadFileProps) {
  const [body, setBody] = useState<string>("");

  useEffect(() => {
    if (file && !loading?.isLoading && body === "") {
      loading.setIsLoading(true);

      fetch(file)
        .then((res) => res.text())
        .then((txt) => {
          setBody(txt);
          loading.setIsLoading(false);
        })
        .catch(console.error);
    }
  }, [body, loading, file]);

  return body;
}

type useLoadFileProps = {
  file: any;
  loading: {
    isLoading: boolean;
    setIsLoading: Function;
  };
};
