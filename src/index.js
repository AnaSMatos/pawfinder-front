import ReactDOM from "react-dom";
import App from './App.js';

function Root() {
    return (
        <App />
    );
}
const element = document.querySelector(".root");
ReactDOM.render(<Root />, element);