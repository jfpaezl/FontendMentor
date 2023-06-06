import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import ResultsSummary from "./results-summary-component-main/ResultsSummary";

function App() {
  return (
    <>
      <GlobalStyles/>
        <Routes>
          <Route path="/" element={<ResultsSummary />} />
        </Routes>
    </>
  );
}

export default App;
