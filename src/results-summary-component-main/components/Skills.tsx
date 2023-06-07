import styled from "styled-components";

export default function Skills({ datos = {} }) {
  return (
    <SkillsCss>
      {datos.map((dat, index) => (
        <div
          key={index}
          className="skills"
          style={{ backgroundColor: dat.Bcolor }}
        >
          <div className="textSkill">
            <img src={dat.icon} alt="iconos" />
            <p style={{ color: dat.Ctext }}>{dat.category}</p>
          </div>
          <p className="puntos">
            {dat.score} <span>/ 100</span>
          </p>
        </div>
      ))}
    </SkillsCss>
  );
}

const SkillsCss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .skills {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: .8rem;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    .puntos{
      font-weight: bold;
    }
    span{
      font-size: 1.1rem ;
      font-weight: normal;
      color: hsl(241, 100%, 89%);
    }
  }
  img {
    width: 1.5rem;
  }
  .textSkill {
    display: flex;
    gap: 1rem;
  }
`;
