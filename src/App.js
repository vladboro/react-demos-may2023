import { useState } from "react";
import Link from "./components/Link";
import Route from "./components/Route";
const App = () => {
  const [location, setLocation] = useState("/");
  return (
    <div>
      <h1>Header</h1>
      <Link href="/" className="ui link" text="Home" onClick={setLocation} />
      <Link
        href="/about"
        className="ui link"
        text="About"
        onClick={setLocation}
      />
      <Link
        href="/contacts"
        className="ui link"
        text="Contacts"
        onClick={setLocation}
      />
      <div className="ui container">
        <Route path="/">
          <h1>Home page</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contacts">
          <h1>Contacts</h1>
        </Route>
      </div>
    </div>
  );
};

export default App;
