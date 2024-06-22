// First we will import useColor from a folder named 'store'
import { useColor } from '../store/color';

const UseZustand = () => {
  const { text, color, setText, setColor } = useColor((state) => ({
    text: state.text,
    color: state.color,
    setText: state.setText,
    setColor: state.setColor,
  }));

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setColor(text);
  };

  return (
    <div className="container">
      <h1 style={{ color: color }}>State management using Zustand</h1>
      <br />
      <div className="input">
        <input
          type="text"
          className="input"
          value={text}
          onChange={handleInputChange}
        />
        <button
          className="btn"
          onClick={handleButtonClick}
        >
          Change Color
        </button>
      </div>
    </div>
  );
};

export default UseZustand;
