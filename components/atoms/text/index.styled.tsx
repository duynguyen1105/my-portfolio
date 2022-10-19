import styled from 'styled-components'

import { Props } from '.'
import { MediaQueries, theme, ThemeProps } from '@/misc/index'

type CssProps = {
  textSize: Props['size']
  textType: Props['type']
  textColor: Props['color']
}

const getSize = (size: Props['size']) => {
  switch (size) {
    case 'lg':
    case 'md':
      return `
        font-size: 16px;
        line-height: 28px;
        ${MediaQueries.tdUp} {
            font-size: 18px;
            line-height: 32px;
            letter-spacing: -0.2px;
        }
      `
    case 'base':
      return `
        font-size: 16px;
        line-height: 24px;
        ${MediaQueries.tdUp} {
          font-size: 16px;
          line-height: 24px;
        }
      `
    case 'sm':
      return `
      font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.2px;
        ${MediaQueries.tdUp} {
          font-size: 16px;
          line-height: 24px;
        }
      `
    case 'p4':
    case 'xs':
      return `
        font-size: 12px;
        line-height: 18px;
        ${MediaQueries.tdUp} {
          font-size: 14px;
          line-height: 24px;
        }
      `
    // https://www.figma.com/file/oC0v0apXhnjTuqI2FrL2ic/E-Shopping?node-id=1243%3A215305
    case 's1':
      return `
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.6px;
      ${MediaQueries.tdUp} {
        font-size: 22px;
        line-height: 32px;
        letter-spacing: -0.6px;
        }
      `
    case 's2':
      return `
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        ${MediaQueries.tdUp} {
          font-size: 18px;
          line-height: 28px;
          letter-spacing: -0.2px;
        }
      `
    case 's3':
      return `
        font-size: 14px;
        line-height: 22px;
        ${MediaQueries.tdUp} {
          font-size: 16px;
          line-height: 24px;
        }
      `
    case 's4':
      return `
        font-size: 12px;
        line-height: 18px;
        ${MediaQueries.tdUp} {
          font-size: 14px;
          line-height: 22px;
        }
      `
    case 's5':
      return `
        font-size: 10px;
        line-height: 16px;
        ${MediaQueries.tdUp} {
          font-size: 12px;
          line-height: 18px;
        }
      `
    // https://www.figma.com/file/oC0v0apXhnjTuqI2FrL2ic/E-Shopping?node-id=1243%3A215323
    case 'p1':
      return `
        font-size: 18px;
        line-height: 28px;
        ${MediaQueries.tdUp} {
          font-size: 18px;
          line-height: 28px;
          letter-spacing: -0.2px;
        }
      `
    case 'p2':
      return `
        font-size: 16px;
        line-height: 24px;
        ${MediaQueries.tdUp} {
          font-size: 16px;
          line-height: 26px;
        }
      `
    case 'p3':
      return `
        font-size: 14px;
        line-height: 18px;
        ${MediaQueries.tdUp} {
          font-size: 14px;
          line-height: 24px;
        }
      `
    // https://www.figma.com/file/oC0v0apXhnjTuqI2FrL2ic/E-Shopping?node-id=1243%3A215337
    case 'c1':
      return `
        font-size: 14px;
        line-height: 24px;
        ${MediaQueries.tdUp} {
          font-size: 16px;
          line-height: 26px;
        }
      `
    case 'c2':
      return `
        font-size: 12px;
        line-height: 18px;
        ${MediaQueries.tdUp} {
          font-size: 14px;
          line-height: 24px;
        }
      `
    /* https://www.figma.com/file/oC0v0apXhnjTuqI2FrL2ic/E-Shopping?node-id=1243%3A215356 */
    case 'n1':
      return `
        font-size: 12px;
        line-height: 18px;
        ${MediaQueries.tdUp} {
          font-size: 12px;
          line-height: 18px;
        }
      `
    case 'label1':
      return `
        font-size: 14px;
        line-height: 22px;
        ${MediaQueries.tdUp} {

        }
      `
    case 'label2':
      return `
        font-size: 12px;
        line-height: 18px;
        ${MediaQueries.tdUp} {

        }
      `
  }
}

const getFontWeight = (type: Props['type']) => {
  switch (type) {
    case 'bold':
    case 'caption':
      return theme.sizes.fwBold
    case 'semiBold':
      return theme.sizes.fwSemiBold
    default:
      return theme.sizes.fwRegular
  }
}

export const StyledText = styled.p<CssProps>`
  color: ${(props) => props.textColor};
  letter-spacing: 0px;
  font-weight: ${(props) => getFontWeight(props.textType)};
  ${(props) => getSize(props.textSize)}

  /* Make caption uppercase */
  ${(props) =>
    props.textType === 'caption' &&
    `
    text-transform: uppercase;
  `}
`
