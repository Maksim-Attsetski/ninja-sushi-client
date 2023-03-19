import { useActions, useTypedSelector } from 'hooks';
import { IQuery } from 'shared';
import { NewsService } from '..';

const useNews = () => {
  const { news } = useTypedSelector((state) => state.news);
  const { action } = useActions();

  const onGetNews = async (query?: IQuery, isReturn?: boolean) => {
    try {
      const response = await NewsService.getAll(query || {});

      if (isReturn) {
        return response;
      }

      action.setNewsAC(response);
    } catch (error) {
      throw error;
    }
  };

  return { news, onGetNews };
};

export default useNews;
