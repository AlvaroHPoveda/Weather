import Request from "./components/Request.js";
import "./styles.css";

document.body.style = "background: #000";

document.title = "Weather App";

function App() {
  return (
    <div className="background">
      <Request />
    </div>
  );
}

export default App;
