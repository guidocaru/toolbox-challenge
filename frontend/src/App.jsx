import FilesTable from "./components/FilesTable.jsx";
import NavBar from "./components/NavBar.jsx";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <p className="title">Files Data</p>
        <FilesTable></FilesTable>
      </main>
    </div>
  );
};

export default App;
