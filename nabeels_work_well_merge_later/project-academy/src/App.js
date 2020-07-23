import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Issue from './components/Issue';
import IssueModal from './components/IssueModal';

const App = () => {
  const [issueModal, setIssueModal] = useState({display: true, X: 0, Y: 0});
  const [issues, setIssues] = useState([]);

  // Handle text selection
  const handleTextSelection = (event) => {
    /*

    Still very buggy. Need to fix:
    - buggy placement. Add boundaries for menu
    - clicking on menu will make selection disappear;
      has to do with preventDefault(); bug
    - "double click effect" where clicking a selection still shows the menu
    */

    // if it is not the modal itself
    if (!document.getElementById('issueModal').contains(event.target)) {
      // if user has made selection
      if (window.getSelection().toString().length > 0) {
        const {clientX, clientY} = event;
        setIssueModal({
        // Add more logic to make it dynamic if it goes too high or too low
          display: true,
          X: clientX + 20,
          Y: clientY - 100,
        });
      } else {
        setIssueModal({
          display: false,
        });
      }
    }
  };

  const addIssueHandler = ({type, comment}) => {
    setIssues([...issues, {type, comment}]);
  };

  return (
    <div>
      <Header />
      <div className="app-content">
        <div className="editor-container">
          <div className="editor-wrapper">
            <div className="editor">
              <div className="editor-title">
              Inside Trump’s Failure: The Rush to Abandon Leadership
              Role on the Virus
              </div>
              <div
                onMouseUpCapture={handleTextSelection}
                className="editor-body"
              >

                <IssueModal
                  display={issueModal.display}
                  X={issueModal.X}
                  Y={issueModal.Y}
                  issueTypes={[
                    'Incorrect Punctuation',
                  ]}
                  addIssue={(data) => {
                    addIssueHandler(data);
                  }}
                />

              WASHINGTON — Each morning at 8 as the coronavirus crisis
              was raging in April, Mark Meadows, the White House chief
              of staff, convened a small group of aides to steer the
              administration through what had become a public health,
              economic and political disaster. <br/><br/> Seated around Mr.
              Meadows’s conference table and on a couch in his office
              down the hall from the Oval Office, they saw their
              immediate role, as practical problem solvers. Produce
              more ventilators. Find more personal protective
              equipment. Provide more testing. <br/><br/> But their ultimate
              goal was to shift responsibility for leading the fight
              against the pandemic from the White House to the states.
              They referred to this as “state authority handoff,” and
              it was at the heart of what would become at once a
              catastrophic policy blunder and an attempt to escape
              blame for a crisis that had engulfed the country — perhaps
              one of the greatest failures of presidential leadership in
              generations. <br/><br/> Over a critical period beginning in
              mid-April, President Trump and his team convinced themselves
              that the outbreak was fading, that they had given state
              governments all the resources they needed to contain its remaining
              “embers” and that it was time to ease up on the lockdown.
              In doing so, he was ignoring warnings that the numbers
              would continue to drop only if social distancing was kept
              in place, rushing instead to restart the economy and tend
              to his battered re-election hopes. <br/><br/> Casting the
              decision in ideological terms, Mr. Meadows would tell people:
              “Only in Washington, D.C., do they think that they have the answer
              for all of America.”
              </div>
            </div>
          </div>
        </div>
        <div className="issues-container">
          <div className="issues-wrapper">
            <div className="issues">
              <div className="issues-title">Issues</div>
              <div className="issues-body">
                {
                  issues.map((issue, index) => {
                    return (
                      <Issue
                        key={index}
                        title={issue.type}
                        text={issue.comment}
                      />
                    );
                  })
                }
                <Issue
                  title="Incorrect Punctuation"
                  text="immediate role, as practical"/>
              </div>
              <div className="issues-submit">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
