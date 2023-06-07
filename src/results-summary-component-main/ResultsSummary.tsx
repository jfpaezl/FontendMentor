import styled from "styled-components";
import Layouth from "../components/layouth/Layouth";
import Skills from "./components/Skills";
import datos from "./data.json";

export default function ResultsSummary() {
  return (
    <Layouth>
      <ResultsSummaryCss>
        <section>
          <div className="container">
            <h3>Your Result</h3>
            <div className="container2">
              <p className="circulo">
                76 <span>of 100</span>
              </p>
              <p className="great">Great</p>
              <span className="spanText">
                You scored higher than 65% of the people who have taken these
                tests.
              </span>
            </div>
          </div>
          <div className="containerSkills">
            <strong>Summary</strong>
            <div className="containerSkills2">
              <Skills datos={datos} />
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
      </ResultsSummaryCss>
    </Layouth>
  );
}

const ResultsSummaryCss = styled.div`
  height: 100vh;
  font-size: 1.5rem;
  @font-face {
    font-family: "MiFuenteLocal";
    src: url("src/results-summary-component-main/assets/fonts/HankenGrotesk-VariableFont_wght.ttf");
  }
  font-family: "MiFuenteLocal";
  background-color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  section {
    max-width: 50rem;
    display: flex;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.062);
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .container {
    background-image: linear-gradient(
      to bottom,
      hsl(252, 100%, 67%),
      hsl(241, 81%, 54%)
    );
    width: 25rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    gap: 2rem;
    padding: 3rem;
    color: hsl(241, 100%, 89%);

    .container2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      text-align: center;
    }
    .circulo {
      font-size: 5rem;
      font-weight: bold;
      color: hsl(0, 0%, 100%);
      border-radius: 50%;
      width: 13rem;
      height: 13rem;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-image: linear-gradient(
        to bottom,
        hsla(256, 72%, 46%, 1),
        hsl(241, 81%, 54%),
        hsl(241, 81%, 60%)
      );
      span {
        font-size: 1.2rem;
        color: hsla(241.07142857142856, 100%, 89.01960784313725%, 0.534);
      }
    }
    .great {
      font-size: 2rem;
      font-weight: bold;
      color: hsl(0, 0%, 100%);
      margin-top: 1rem;
    }
    .spanText {
      font-size: 1.3rem;
    }
  }

  .containerSkills {
    width: 25rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    gap: 2rem;
    padding: 3rem;
    .containerSkills2 {
      width: 100%;
    }
    button {
      width: 100%;
      padding: 1rem;
      border-radius: 2rem;
      background-color: hsl(224, 30%, 27%);
      color: hsl(241, 100%, 89%);
      font-size: 1.3rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
`;
