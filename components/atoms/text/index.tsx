import { theme } from '@/misc/theme'
import React, { ReactNode } from 'react'

import { CSSProperties } from 'styled-components'

import { StyledText } from './index.styled'

export type TextSize =
  | 'lg'
  | 'md'
  | 'base'
  | 'sm'
  | 'xs'
  | 's1'
  | 's2'
  | 's3'
  | 's4'
  | 's5'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'c1'
  | 'c2'
  | 'n1'
  | 'label1'
  | 'label2'

export type TextType = 'regular' | 'bold' | 'caption' | 'semiBold'

export type Props = {
  children?: ReactNode
  className?: string
  color?: string
  type?: TextType
  size?: TextSize
  style?: CSSProperties
  dangerouslySetInnerHTML?: {
    __html: string
  }
}

const Text = ({
  size = 'base',
  type = 'regular',
  className,
  style,
  children,
  color,
  dangerouslySetInnerHTML,
}: Props) => {
  const customColor = { '--custom-color': color } as React.CSSProperties

  return (
    <StyledText
      style={{ ...style, ...customColor }}
      className={className}
      textSize={size}
      textType={type}
      textColor={color || theme.colors.gray800}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </StyledText>
  )
}

export { Text }
