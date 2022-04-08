import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss';

import RenderItem from 'components/RenderItem/RenderItem';

// import TransactionHistoryItem from './TransactionHistoryItem/ransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, ...items }) => {
          return <RenderItem key={id} {...items} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.protoType = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
