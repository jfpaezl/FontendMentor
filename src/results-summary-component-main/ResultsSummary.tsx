import styled from "styled-components";
import Layouth from "../components/layouth/Layouth";

export default function ResultsSummary() {
  return (
    <ResultsSummaryCss>
      <Layouth>
        <h2>Hola Mundo</h2>
        <p>
          Your Result 76 of 100 Great You scored higher than 65% of the people
          who have taken these tests. Summary Reaction 80 / 100 Memory 92 / 100
          Verbal 61 / 100 Visual 72 / 100 Continue
        </p>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </Layouth>
    </ResultsSummaryCss>
  );
}

const ResultsSummaryCss = styled.div`
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
`;
