import React from "react";
import { fetchStoreMainData } from "./utils/api";
import "./App.css";

import { StoreMainDataProvider } from "./contexts/storeMainData";

import Stripe from "./components/Stripe/Stripe";
import Overview from "./containers/Overview/Overview";

function App() {
  const [storeMainData, setStoreMainData] = React.useState("");

  React.useEffect(() => {
    fetchStoreMainData()
      .then((data) => setStoreMainData(data))
      .catch(({ message }) => console.log(message));
  }, []);

  return (
    <div className="App">
      <StoreMainDataProvider value={storeMainData}>
        <Stripe />
        <Overview />
      </StoreMainDataProvider>
    </div>
  );
}

export default App;
