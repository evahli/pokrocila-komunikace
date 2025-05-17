import './style.css';

export const SwitchButton = ({ label, onSwitch, on }) => {
  const handleSwitch = () => {
    onSwitch(true)
  };

  return (
    <button onClick={handleSwitch} className="switch-button switch-button--on">
      <i className="switch-icon" />
      <div className={on ?"button-label switch-button--on" :"button-label"}>{label}</div>
    </button>
  );
};
