import { Dispatch, SetStateAction, useState } from 'react';

interface IResponse {
  limit: number;
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  plusLimit: () => void;
  setLimit: Dispatch<SetStateAction<number>>;
}

type TUsePagination = (limit?: number, page?: number) => IResponse;

const usePagination: TUsePagination = (defaultLimit = 8, defaultPage = 1) => {
  const [limit, setLimit] = useState<number>(defaultLimit);
  const [page, setPage] = useState<number>(defaultPage);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const plusLimit = () => {
    setLimit((prev) => prev + defaultLimit);
  };

  return { limit, page, prevPage, nextPage, setLimit, plusLimit };
};

export default usePagination;
