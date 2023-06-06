import styled from "styled-components";
import Layouth from "../components/layouth/Layouth";
import Skills from "./components/Skills";

export default function ResultsSummary() {
  return (
    <ResultsSummaryCss>
      <Layouth>
        <section>
          <div>
            <h3>Your Result</h3>
            <div>
              <p>
                76 <span>of 100</span>
              </p>
              <p>Great</p>
              <span>
                You scored higher than 65% of the people who have taken these
                tests.
              </span>
            </div>
          </div>
          <div>
            <strong>Summary</strong>
            <div>
              <Skills text="Reaction" puntos={80} img="src/results-summary-component-main/assets/images/icon-reaction.svg"
              />
              <Skills text="Memory" puntos={92} img="src/results-summary-component-main/assets/images/icon-memory.svg"/>
              <Skills text="Verbal" puntos={61} img="src/results-summary-component-main/assets/images/icon-verbal.svg"/>
              <Skills text="Visual" puntos={72} img="src/results-summary-component-main/assets/images/icon-visual.svg"/>
            </div>
            <button>Continue</button>
          </div>
        </section>
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
