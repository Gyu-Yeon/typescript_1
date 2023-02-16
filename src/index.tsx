import ReactDom from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./state/events/EventComponents";
import { Child, ChildAsFC } from "./props/Child";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
