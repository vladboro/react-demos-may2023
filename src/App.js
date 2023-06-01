import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
const App = () => {
  return (
    <div>
      <h1>Header</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>}/>
          <Route path="about" element={<h1>About</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="*" element={<h1>No match</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
