import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { StoreProvider } from "./store/StoreProvider";

function App() {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </StoreProvider>
    </>
  );
}

export default App;
