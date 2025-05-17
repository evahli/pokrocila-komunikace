import './style.css';

export const CoinButton = ({ value, onCoinClick }) => {
  const handeClick = () => {
    onCoinClick(value)
  }
  return (
    <button onClick={handeClick} className="icon-button">
      <i className="plus-icon" />
      <div className="button-label">{value}</div>
    </button>
  );
};
