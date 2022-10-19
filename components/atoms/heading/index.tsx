import React, { ReactNode } from 'react'

import { CSSProperties } from 'styled-components'

import { StyledHeading } from './index.styled'

export type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  title?: string
  color?: string
  className?: string
  style?: CSSProperties
  fontWeight?: 'bold' | 'semibold'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  dataEventCategory?: string
  dataEventAction?: string
  dataEventLabel?: string
}

const Heading = ({
  as,
  tag,
  className,
  children,
  title,
  color,
  style,
  fontWeight,
  dataEventCategory,
  dataEventAction,
  dataEventLabel,
}: Props) => {
  const asTag = as || tag
  return (
    <StyledHeading
      title={title}
      style={{
        ...(color
          ? { ['--custom-heading-color' as string]: color }
          : undefined),
        ...style,
      }}
      data-tag={tag}
      data-font-weight={fontWeight || undefined}
      data-event-category={dataEventCategory}
      data-event-action={dataEventAction}
      data-event-label={dataEventLabel}
      as={asTag}
      className={className}
      headingFontWeight={fontWeight}
      headingTag={tag}
    >
      {children}
    </StyledHeading>
  )
}

export { Heading }
