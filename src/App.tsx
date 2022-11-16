import "./App.css";
import { Orders } from "./components"; //
import { api } from "./api";

const dataUrls = ["https://public.kanga.exchange/api/market/pairs", "https://public.kanga.exchange/api/market/summary"];

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Orders />
        <button onClick={() => api.get(dataUrls[0])}>Fetch data1</button>
        <button onClick={() => api.get(dataUrls[1])}>Fetch data2</button>
      </header>
    </div>
  );
}
