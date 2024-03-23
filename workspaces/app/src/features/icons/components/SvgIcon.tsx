import { NavigateNext } from '@mui/icons-material';
import { ArrowBack } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';
import { Search } from '@mui/icons-material';

type Props = {
  color: string;
  height: number;
  width: number;
  type: 'NavigateNext' | 'ArrowBack' | 'Close' | 'Favorite' | 'FavoriteBorder' | 'Search'; // アイコンのタイプを追加
};

export const SvgIcon: React.FC<Props> = ({ color, height, width, type }) => {
  let Icon;

  // アイコンの種類に応じて、適切なアイコンを選択する
  switch (type) {
    case 'NavigateNext':
      Icon = NavigateNext;
      break;
    case 'ArrowBack':
      Icon = ArrowBack;
      break;
    case 'Close':
      Icon = Close;
      break;
    case 'Favorite':
      Icon = Favorite;
      break;
    case 'FavoriteBorder':
      Icon = FavoriteBorder;
      break;
    case 'Search':
      Icon = Search;
      break;
  }

  return <Icon style={{ color, height, width }} />;
};
