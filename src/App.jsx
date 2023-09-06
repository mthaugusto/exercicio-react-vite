import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu";
Outlet;
import Rodape from "./components/Rodape";

function App() {
	return (
		<>
			<Menu />
			<Outlet />
			<Rodape />
		</>
	);
}

export default App;