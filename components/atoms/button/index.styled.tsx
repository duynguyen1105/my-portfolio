import { ThemeProps } from 'misc/theme'
import styled, { keyframes, css } from 'styled-components'

import { Props } from '.'

type CssProps = {
  buttonHasIcon: boolean
  buttonTheme: Props['theme']
  buttonSize: Props['size']
  buttonColor: Props['color']
  buttonIsLoading: Props['isLoading']
  buttonIsBlock: Props['isBlock']
}

export const StyledButton = styled.button<CssProps>`
  width: auto;
  border-radius: 6px;
  ${(props) =>
    props.buttonTheme === 'marryBaby' &&
    css`
      border-radius: 16px;
    `}

  cursor: pointer;
  font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  transition: background-color 0.3s, border-color 0.3s;

  ${(props) =>
    props.buttonHasIcon &&
    css`
      & > span {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        vertical-align: middle;
      }

      & .button-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
    `}

  ${(props) =>
    props.buttonColor === 'primary' &&
    css`
      background-color: ${props.theme.colors.primaryBase};
      border: 1px solid ${props.theme.colors.primaryBase};
      color: ${props.theme.colors.white};

      ${props.buttonTheme === 'marryBaby' &&
      css`
        border: solid 2px ${props.theme.mbColors.pink};
        background-color: ${props.theme.mbColors.pink};
      `}

      ${props.buttonSize === 'lg' &&
      css`
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
      `}

    ${props.buttonSize === 'md' &&
      css`
        padding: 9px 24px;
        font-size: 14px;
        line-height: 22px;
      `}

    ${props.buttonSize === 'sm' &&
      css`
        padding: 5px 24px;
        font-size: 14px;
        line-height: 22px;
        font-weight: ${props.theme.sizes.fwSemiBold};
      `}

    &:hover:not(:disabled) {
        background-color: ${props.theme.colors.primaryHover};

        ${props.buttonTheme === 'marryBaby' &&
        css`
          border: solid 2px ${props.theme.mbColors.pink};
          background-color: ${props.theme.colors.white};
          color: ${props.theme.mbColors.pink};
        `}
      }

      &:not(:is([disabled], [data-is-loading='true'])):active {
        background-color: ${props.theme.colors.primaryActive};

        ${props.buttonTheme === 'marryBaby' &&
        css`
          background-color: ${props.theme.mbColors.pink};
        `}
      }
    `}

  ${(props) =>
    props.buttonColor === 'secondary' &&
    css`
      border: solid 2px ${props.theme.colors.primaryBase};
      background-color: ${props.theme.colors.white};
      color: ${props.theme.colors.primaryBase};

      ${props.buttonTheme === 'marryBaby' &&
      css`
        border-color: ${props.theme.mbColors.pink};
        background-color: transparent;
        color: ${props.theme.mbColors.pink};
      `}

      ${props.buttonSize === 'lg' &&
      css`
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
      `}

    ${props.buttonSize === 'md' &&
      css`
        padding: 9px 24px;
        font-size: 14px;
        line-height: 22px;
        border-width: 1.5px;
      `}

    ${props.buttonSize === 'sm' &&
      css`
        font-weight: ${props.theme.sizes.fwSemiBold};
        border-width: 1px;
        padding: 5px 24px;
        font-size: 13px;
        line-height: 20px;
      `}

    &:hover {
        border-color: ${props.theme.colors.primaryHover};
        background-color: ${props.theme.colors.primaryHover};
        color: ${props.theme.colors.white};

        ${props.buttonTheme === 'marryBaby' &&
        css`
          border-color: ${props.theme.mbColors.pink};
          background-color: ${props.theme.mbColors.pink};
        `}
      }

      &:not(:is([disabled], [data-is-loading='true'])):active {
        border-color: ${props.theme.colors.primaryActive};
        background-color: ${props.theme.colors.primaryActive};
        color: ${props.theme.colors.white};

        ${props.buttonTheme === 'marryBaby' &&
        css`
          border-color: ${props.theme.mbColors.pink};
          background-color: ${props.theme.mbColors.pink};
        `}
      }
    `}

  ${(props) =>
    props.buttonColor === 'tertiary' &&
    css`
      border: solid 2px ${props.theme.colors.gray300};
      background-color: transparent;
      color: ${props.theme.colors.gray800};

      ${props.buttonSize === 'lg' &&
      css`
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
      `}

      ${props.buttonSize === 'md' &&
      css`
        padding: 9px 24px;
        font-size: 14px;
        line-height: 22px;
        border-width: 1.5px;
        font-weight: ${props.theme.sizes.fwSemiBold};
      `}

    ${props.buttonSize === 'sm' &&
      css`
        padding: 5px 24px;
        font-size: 13px;
        line-height: 20px;
        border-width: 1px;
        font-weight: ${props.theme.sizes.fwSemiBold};
      `}
    `}

  ${(props) =>
    props.buttonColor === 'ghost' &&
    css`
      border: 0;
      background-color: transparent;
      color: ${props.theme.colors.primaryBase};

      ${props.buttonSize === 'lg' &&
      css`
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
      `}

      ${props.buttonSize === 'md' &&
      css`
        padding: 9px 24px;
        font-size: 14px;
        line-height: 22px;
      `}

   ${props.buttonSize === 'sm' &&
      css`
        padding: 5px 12px;
        font-size: 12px;
        line-height: 18px;
        font-weight: ${props.theme.sizes.fwSemiBold};
      `}

    &:disabled {
        border-color: 0;
        background-color: transparent;
        color: ${props.theme.colors.gray300};
        cursor: not-allowed;
      }
    `}

  ${(props) =>
    props.buttonColor === 'transparent' &&
    css`
      border: none;
      background-color: transparent;
      ${props.buttonSize === 'lg' &&
      css`
        font-size: 16px;
        line-height: 24px;
      `}

      ${props.buttonSize === 'md' &&
      css`
        font-size: 14px;
        line-height: 24px;
      `}

    ${props.buttonSize === 'sm' &&
      css`
        font-size: 13px;
        line-height: 20px;
      `}
    `}

    ${(props) =>
    props.buttonColor === 'danger' &&
    css`
      border: solid 2px ${props.theme.colors.red600};
      background-color: ${props.theme.colors.red600};
      color: ${props.theme.colors.white};

      ${props.buttonSize === 'lg' &&
      css`
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
      `}

      ${props.buttonSize === 'md' &&
      css`
        padding: 9px 24px;
        font-size: 14px;
        line-height: 22px;
        border-width: 1.5px;
      `}

      ${props.buttonSize === 'sm' &&
      css`
        font-weight: ${props.theme.sizes.fwSemiBold};
        border-width: 1px;
        padding: 5px 24px;
        font-size: 13px;
        line-height: 20px;
      `}

      &:hover {
        border-color: ${props.theme.colors.red200};
        background-color: ${props.theme.colors.red200};
        color: ${props.theme.colors.white};
      }
    `}

  ${(props) =>
    props.buttonIsLoading &&
    css`
      span {
        padding-left: 32px;
      }
      svg {
        position: absolute;
      }

      ${props.buttonSize === 'lg' &&
      css`
        svg {
          width: 26px;
          height: 26px;
        }
      `}

      ${props.buttonSize === 'md' &&
      css`
        svg {
          width: 24px;
          height: 24px;
        }
      `}

    ${props.buttonSize === 'sm' &&
      css`
        svg {
          width: 22px;
          height: 22px;
        }
      `}
    `}

  &[data-theme='marryBaby']:disabled,
  &:disabled {
    border-color: ${(props: ThemeProps) => props.theme.colors.gray300};
    background-color: ${(props: ThemeProps) => props.theme.colors.gray300};
    color: ${(props: ThemeProps) => props.theme.colors.white};
    cursor: not-allowed;
  }

  ${(props) =>
    props.buttonIsBlock &&
    css`
      width: 100%;
      padding: 12px auto;
    `}

  &[data-event-category] > * {
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid black;
  }
`

const circle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledLoader = styled.svg`
  animation: ${circle} 1.2s linear infinite;
`
