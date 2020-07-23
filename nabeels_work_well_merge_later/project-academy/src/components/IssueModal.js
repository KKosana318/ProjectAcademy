import React, {useState} from 'react';
import './IssueModal.css';

const IssueModal = (props) => {
  const [issueModalData, setIssueModalData] = useState({
    type: '',
    comment: '',
  });

  return (
    <div
      id="issueModal"
      style={
        {
          display: props.display ? 'block' : 'none',
          left: props.X,
          top: props.Y,
        }
      }
      className="issue-modal-container"
    >
      <select onChange={(event)=>{
        setIssueModalData({...issueModalData, type: event.target.value});
      }} className="issue-modal-selector">
        <option></option>
        {props.issueTypes.map((type, index) => {
          return (
            <option key={index}>{type}</option>
          );
        })}
      </select>
      <textarea
        onChange={(event) => {
          setIssueModalData({...issueModalData, comment: event.target.value});
        }}
        placeholder="Comments"
        className="issue-modal-textarea"></textarea>
      <div
        onClick={() => {
          props.addIssue(
              issueModalData,
          );
        }}
        className="issue-modal-submit">Add Issue</div>
    </div>
  );
};


export default IssueModal;
