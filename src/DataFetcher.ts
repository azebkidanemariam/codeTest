import { useState, useEffect } from "react";
import { ResponseWrapper } from "./utils/data-transformer";

export type ApiResponse = {
  status: Number;
  statusText: String;
  data: ResponseWrapper | undefined;
  error: any;
  loading: Boolean;
};

export const useApiGet = (url: string): ApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<ResponseWrapper | undefined>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};
