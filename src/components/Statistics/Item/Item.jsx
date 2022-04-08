import PropTypes from 'prop-types';
import RenderItem from 'components/RenderItem/RenderItem';

const Item = ({ item: { id, label, percentage } }) => {
  return (
    <RenderItem id={id} label={label} percentage={percentage} />
    // <li key={id} className="item" style={{ backgroundColor: randomColor() }}>
    //   <span className="label">{label}</span>:
    //   <span className="percentage">{percentage}</span>
    // </li>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
