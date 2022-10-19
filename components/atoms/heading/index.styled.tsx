import styled from 'styled-components'

import { Props } from '.'
import { MediaQueries, theme, ThemeProps } from '@/misc/index'

type CssProps = {
  headingTag: Props['tag']
  headingFontWeight: Props['fontWeight']
}

const getSizes = (tag: Props['tag']) => {
  switch (tag) {
    case 'h1':
      return `
        font-size: 26px;
        letter-spacing: -0.9px;
        line-height: 34px;
        ${MediaQueries.tdUp} {
          font-size: 40px;
          line-height: 52px;
          letter-spacing: -1.2px;
        }
      `
    case 'h2':
      return `
        font-size: 24px;
        letter-spacing: -0.8px;
        line-height: 32px;
        ${MediaQueries.tdUp} {
          font-size: 32px;
          line-height: 42px;
          letter-spacing: -1px;
        }
      `
    case 'h3':
      return `
        font-size: 20px;
        letter-spacing: -0.7px;
        line-height: 26px;
        ${MediaQueries.tdUp} {
          font-size: 26px;
          line-height: 36px;
          letter-spacing: -0.8px;
        }
      `
    case 'h4':
      return `
        font-size: 18px;
        letter-spacing: -0.6px;
        line-height: 26px;
        ${MediaQueries.tdUp} {
          font-size: 22px;
          line-height: 32px;
          letter-spacing: -0.6px;
        }
      `
    case 'h5':
      return `
        font-size: 16px;
        letter-spacing: -0.2px;
        line-height: 24px;
        ${MediaQueries.tdUp} {
          font-size: 18px;
          line-height: 28px;
          letter-spacing: -0.2px;
        }
      `
    case 'h6':
      return `
        font-size: 14px;
        line-height: 22px;
        ${MediaQueries.tdUp} {
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0;
        }
      `
  }
}

const getFontWeight = (fontWeight: Props['fontWeight']) => {
  switch (fontWeight) {
    case 'bold':
      return `
       font-weight: ${theme.sizes.fwBold};
      `
    case 'semibold':
      return `
       font-weight: ${theme.sizes.fwSemiBold};
      `
    default:
      return `
        font-weight: ${theme.sizes.fwBold};
      `
  }
}

export const StyledHeading = styled.div<CssProps>`
  color: ${(props: ThemeProps) => props.theme.colors.gray800};
  ${(props) => getSizes(props.headingTag)}
  ${(props) => getFontWeight(props.headingFontWeight)}

  /* Base headings sizes and properties */
  &[data-tag] {
    color: var(--custom-heading-color, #262626);
  }
`
