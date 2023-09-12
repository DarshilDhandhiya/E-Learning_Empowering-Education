import { BrowserRouter as Router} from "react-router-dom"
import "./App.css"
import Header from "./components/Common/header/Header"

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;