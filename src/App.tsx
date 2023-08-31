import "./App.css";
import { Home } from "./pages";
import { useSelector } from "react-redux";
import { AppStore } from "./redux/store";

function App() {
    const user = useSelector((state: AppStore) => state.user);

    return (
        <>
            <p>{JSON.stringify(user)}</p>

            <Home />
        </>
    );
}

export default App;
