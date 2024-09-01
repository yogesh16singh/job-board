import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="app-container poppins-regular">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
