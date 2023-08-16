import { Description } from "./ProfileDescription";
import { Stats } from "./ProfileStats";

export const Profile = ({ info: { username, tag, avatar, stats } }) => {
  return (
    <div className="Profile">
      <Description avatar={avatar} username={username} tag={tag}/>

      <Stats stats={stats}/>
    </div>
  );
};
