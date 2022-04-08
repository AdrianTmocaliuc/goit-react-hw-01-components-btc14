// import PropTypes from 'prop-types';
import styled from 'styled-components';
import s from './renderItem.module.scss';
import randomColor from 'components/RandomColor/RandomColor';

const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'red' : 'green')};
`;
const RenderItem = ({
  label,
  percentage,
  avatar,
  name,
  isOnline,
  type,
  amount,
  currency,
}) => {
  if (currency) {
    return (
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  }
  return (
    <li
      className={avatar ? s.friendItem : s.staticItem}
      style={{ backgroundColor: avatar ? '' : randomColor() }}
    >
      {avatar ? (
        <>
          <Status isOnline={isOnline} />
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </>
      ) : (
        <>
          <span className="label">{label} </span>
          <span className="percentage">{percentage}</span>
        </>
      )}
    </li>
  );
};

export default RenderItem;

// RenderItem.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
// };
