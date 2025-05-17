import './style.css';

export const FunctionButton = ({ label, onFunctionClick }) => {
  return (
    <button onClick={() => onFunctionClick(true)} className="numpad-button">{label}</button>
  );
};
