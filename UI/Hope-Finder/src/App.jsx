import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/Navbar/navbar";
import Analysis from "./Pages/Analysis/analysis";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Col>
        <Navbar />
      </Col>

      <Col>
        <Row>
          <Header name="Analysis" />
        </Row>

        <Row>
          <Analysis />
        </Row>
      </Col>
    </div>
  );
}

export default App;
