import styled from "styled-components";

export default function Skills({text = '', puntos = 0, img = ''}) {
  return (
    <SkillsCss>
      <div className="skills">
        <div className="textSkill">
          <img
            src={img} alt="iconos"/>
          <p>{text}</p>
        </div>
        <p className="puntos">
          {puntos} <span>/ 100</span>
        </p>
      </div>
    </SkillsCss>
  );
}

const SkillsCss = styled.div`
  background-color: hsl(0, 100%, 67%);

`