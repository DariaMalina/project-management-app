import { FC } from 'react';
import { BoardsHeader, BoardsList, Flex } from './styled';
import { ReactComponent as Open } from '../../../../assets/svg/open.svg';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import BoardsItem from '../boardsItem/boardsItem';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { boardsSelector } from '../../../../store/selectors/boards';

const BoardsMain: FC = () => {
  const { t } = useTranslation();
  const { boards } = useSelector(boardsSelector);
  return (
    <>
      <BoardsHeader>
        <Flex>
          <Open style={{ marginRight: '10px' }} />
          {` 0 `}
          {t('boards.open')}
        </Flex>
        <Flex>
          <Close style={{ marginRight: '10px' }} />
          {` 0 `}
          {t('boards.close')}
        </Flex>
      </BoardsHeader>
      <BoardsList>
        {boards.map(({ id, title, description }) => (
          <BoardsItem key={title} title={title} id={id} description={description} />
        ))}
      </BoardsList>
    </>
  );
};

export default BoardsMain;
