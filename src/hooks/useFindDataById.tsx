import { useEffect, useState } from "react";

export default function useFindDataById<T extends DataGenericType>({
  id,
  data,
}: useFindDataByIdProps<T>) {
  const [newData, setData] = useState<T | null>(null);

  useEffect(() => {
    const dataById = data.find((d) => d.id === id);
    if (dataById) {
      setData(dataById);
    } else {
      throw new Error("Project not found");
    }
  }, [id, data]);

  return newData;
}

type DataGenericType = {
  id: string;
};

type useFindDataByIdProps<T> = {
  id: string;
  data: T[];
};
