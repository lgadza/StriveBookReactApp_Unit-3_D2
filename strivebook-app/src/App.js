import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LastestRelease from "./components/LastestRelease";

function App() {
  return (
    <div className="App htmlBackgrourd">
      <MyNav />
      <Welcome />
      <LastestRelease />
      <hr className="hr" />
      <MyFooter />
    </div>
  );
}

export default App;
