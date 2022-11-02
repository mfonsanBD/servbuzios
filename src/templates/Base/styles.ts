import styled from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  ${HeadingStyles.Wrapper} {
    margin-bottom: 3rem;
  }
`

export const Content = styled.div`
  flex: 1 0 auto;
`
