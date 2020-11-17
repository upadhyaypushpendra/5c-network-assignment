import React from 'react';
import {useParams} from 'react-router-dom';
import './repoDetail.css'
function RepoDetail(props) {
  let { id } = useParams();
  let repo = JSON.parse(localStorage.getItem('repos'))[id];
  return (
    <>
      <header>
        <a href="/home">Home</a>
      </header>
      <section className="repo-detail">
        <div className="repo-left" >
          <img className="avatar" alt="Avatar" src={repo.owner.avatar_url} />
        </div>
        <div className="repo-right">
          <h1>{repo.name}</h1>
          <p>{repo.description}</p>
        </div>
      </section>
    </>
  );
}
export default RepoDetail;
