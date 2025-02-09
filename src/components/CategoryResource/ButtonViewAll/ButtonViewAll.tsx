import './index.css';

type Props = {
  onClick: (category: string) => void;
  category: string
};

const ButtonViewAll = ({ onClick, category }: Props) => {
  return (
    <button className='btn-view-all' onClick={() => onClick(category)}>
      View All
    </button>
  );
};

export default ButtonViewAll;
