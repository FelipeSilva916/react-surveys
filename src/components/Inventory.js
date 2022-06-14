import React from "react";

const Inventory = () => {
  return (
    <form>
      <div>
        <h2>Inventory Assessment</h2>
        <div>
          <p>
            I learn the most when the lesson engages my sense of <em>sight</em>.
          </p>
          <select name="q1">
            <Options />
          </select>
        </div>
        <div>
          <p>
            I learn the most when the lesson engages my sense of{" "}
            <em>hearing</em>.
          </p>
          <select name="q2">
            <Options />
          </select>
        </div>
        <div>
          <p>
            I learn the most when the lesson engages my sense of{" "}
            <em>touch, taste,</em> or <em>smell</em>.
          </p>
          <select name="q3">
            <Options />
          </select>
        </div>
      </div>
    </form>
  );
};

const Options = () => {
  return [
    <option key="prompt" value="" disabled>
      Select one...
    </option>,
    <option key="1" value={1}>
      Strongly Disagree
    </option>,
    <option key="2" value={2}>
      Disagree
    </option>,
    <option key="3" value={3}>
      Neutral
    </option>,
    <option key="4" value={4}>
      Agree
    </option>,
    <option key="5" value={5}>
      Strongly Agree
    </option>
  ];
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
