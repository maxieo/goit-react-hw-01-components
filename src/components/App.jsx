import { Profile } from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics"
import {FriendList} from "./FriendList/FriendList"
import {Transactions} from "./Transactions/Transactions"
import user from '../user.json'
import statistics from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'


export const App = () => {
  const { username, tag, location, avatar, stats } = user
  return (
    <div>
      <Profile
    username={username}
    tag={tag}
    location={location}
    avatar={avatar}
    stats={stats}
  />
      <Statistics title = "Upload stats" stats={statistics}/>
      <FriendList friends = {friends} />
      <Transactions items = {transactions}/>
    </div>
         
  );
};
