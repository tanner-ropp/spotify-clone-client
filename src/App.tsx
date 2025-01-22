import "./App.css";
import { getIsAuthenticated } from "./services/authorization";
import { UserPage } from "./user";
import { GuestPage } from "./guest";

const App = () => {
  return getIsAuthenticated() ? <UserPage /> : <GuestPage />;
};

export default App;
