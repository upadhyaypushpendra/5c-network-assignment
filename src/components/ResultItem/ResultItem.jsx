import React from 'react';
import './resultItem.css';

function ResultItem(props) {

  return (
      <div className="result-item">
          <img className="avatar" alt="Avatar" src={props.repo.owner.avatar_url} />
          <div className="result-detail" >
            <a className="title" href={`/home/detail/${props.repo.id}`} >{props.repo.name}</a>
            <a className="followers" href={`/home/followers/${props.repo.owner.login}`}  >Followers</a>
            <div className="description">{props.repo.description}</div>
          </div>
      </div>
  );
}

export default ResultItem;
