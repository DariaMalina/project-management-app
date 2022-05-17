import { FC, useEffect } from 'react';
import { BoardsHeader, BoardsList, Flex } from './styled';
import { ReactComponent as Open } from '../../../../assets/svg/open.svg';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import BoardsItem from '../boardsItem/boardsItem';
import { AppDispatch, RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { loadBoard } from '../../../../store/reducers/boardsReducer';

const BoardsMain: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { boards } = useSelector((state: RootState) => state.boards);

  useEffect(() => {
    dispatch(loadBoard());
    console.log('ok');
  }, [dispatch]);
  return (
    <>
      <BoardsHeader>
        <Flex>
          <Open style={{ marginRight: '10px' }} />
          {` 0 `}
          открыто
        </Flex>
        <Flex>
          <Close style={{ marginRight: '10px' }} />
          {` 0 `}
          закрыто
        </Flex>
      </BoardsHeader>
      <BoardsList>
        {boards.map(({ title, description }, i) => (
          <BoardsItem key={i} title={title} description={description} />
        ))}
      </BoardsList>
    </>
  );
};

export default BoardsMain;
