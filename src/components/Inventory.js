import React from "react";

const Inventory = () => {
  return (
    <div>
      <h2>Inventory Assessment</h2>
      <div>
        <p>
          I learn the most when the lesson engages my sense of <em>sight</em>.
        </p>
        <ul>
          <li>Strongly Disagree (1 point)</li>
          <li>Disagree (2 points)</li>
          <li>Neutral (3 points)</li>
          <li>Agree (4 points)</li>
          <li>Strongly Agree (5 points)</li>
        </ul>
        <p>
          I learn the most when the lesson engages my sense of <em>hearing</em>.
        </p>
      </div>
    </div>
  );
};

export default Inventory;

// {
//   "code": "q1",
//   "type": "likert",
//   "stem": "I learn the most when the lesson engages my sense of <em>sight</em>.",
//   "scale": "Agreement"
// },
// {
//   "code": "q2",
//   "type": "likert",
//   "stem": "I learn the most when the lesson engages my sense of <em>hearing</em>.",
//   "scale": "Agreement"
// },
// {
//   "code": "q3",
//   "type": "likert",
//   "stem": "I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em>.",
//   "scale": "Agreement",
//   "pagebreak": true
// },
