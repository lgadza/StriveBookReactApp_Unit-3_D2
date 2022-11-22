import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <MyFooter />
    </div>
  );
}

export default App;
