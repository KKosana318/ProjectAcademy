import React from 'react';
import './Issue.css';

const Issue = (props) => {
  return (
    <div key={props.keyValue} className="issue-container">
      <div className="issue-accent-color" />
      <div className="issue-content">
        <div className="issue-title">{props.title}</div>
        <div className="issue-body">&gt;&gt;&gt; “{props.text}”</div>
      </div>
    </div>
  );
};

export default Issue;
