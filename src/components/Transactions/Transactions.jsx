import PropTypes from 'prop-types';
import css from './Transactions.module.css'

export const Transactions = ({items}) => {
  return(
  <table className={css.transactions}>
  <thead>
    <tr className={css.tableHead}>
      <th className={css.tableHeadItem}>Type</th>
      <th className={css.tableHeadItem}>Amount</th>
      <th className={css.tableHeadItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
    <tr key = {id} className={css.tableRow}>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>
    ))}
  </tbody>
</table>
)
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
