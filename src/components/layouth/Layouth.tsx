import { Link } from "react-router-dom";
import { ReactNode } from 'react';
import styled from "styled-components";

type MyComponentProps = {
  children: ReactNode;
};
export default function Layouth({ children }: MyComponentProps) {
  return (
    <LayouthCss>
      <nav>
        <h1>Retos</h1>
        <div>
          <Link className="link" to="/">ResoultSummary</Link>
        </div>
      </nav>
      <div>{children}</div>
    </LayouthCss>
  );
}

export const LayouthCss = styled.div`
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: grey; 
    }

    .link{
        text-decoration: none;
    }

`


