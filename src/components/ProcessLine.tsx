import React from 'react'
import styled from 'styled-components'
import { Color } from 'styles/color'

type ProcessLineProps = React.HTMLAttributes<HTMLDivElement> & {
  current: number // percentage of current process
}

const ProcessLineStyled = styled.div<ProcessLineProps>`
  background: ${Color.grey07};
  height: 5px;
  width: 100%;
  border-radius: 2.5px;
  position: relative;

  &::before {
    content: '';
    height: 5px;
    background: ${Color.blueDark};
    position: absolute;
    animation: process 1s ease-in-out forwards;
    border-radius: 2.5px;
  }

  @keyframes process {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ current }) => current}%;
    }
  }
`

const ProcessLine: React.FC<ProcessLineProps> = ({ current, ...rest }) => {
  return <ProcessLineStyled {...rest} current={current}></ProcessLineStyled>
}

export default ProcessLine
