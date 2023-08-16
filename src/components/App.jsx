
import user from "../user.json";
import { Profile } from "./task_one/Profile";

export const App = () => {
  return <div>
    <Profile info={user}/>
  </div>;
};
