import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Follower(props){
  return (
      <li style={{display:"flex",alignItems:"center"}} >
        <img className="avatar" alt="Avatar" src={props.follower.avatar_url} />
        <div className="result-detail" >
          <a className="title" href={props.follower.url} >{props.follower.login}</a>
        </div>
      </li>
  );
};

function Followers(props) {
  let { username } = useParams();
  const [followers,setFollowers] = React.useState([]);
  useEffect(()=>{
    const fetchFollowers = async ()=>{
      const response = await fetch(`https://api.github.com/users/${username}/followers`);
      if(!response.ok){
        console.log("Error occured",response.status);
      }
    const result = await response.json();
    setFollowers(result);
    };
    fetchFollowers();
  },[]);
  return (
    <>
      <header>
        <a href="/home">Home</a>
      </header>
      <div>
        {followers.length > 0 ?
        <ul>
          {followers.map(follower => <Follower follower={follower} />)}
        </ul>
        : "No Followers"}
      </div>
    </>
  );
}
export default Followers;
