import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div
          className="flex justify-evenly p-spacing-2"
          data-testid="header-menu"
        >
          <Link to="home">Home</Link>
        </div>

        <div className="flex flex-col flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
