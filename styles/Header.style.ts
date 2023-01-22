import styled, { css } from "styled-components"

export const Text = styled.div<{ done: boolean }>`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${({ done }) =>
        done && 
        css`
    color: #ced4da;
  `}
`;

