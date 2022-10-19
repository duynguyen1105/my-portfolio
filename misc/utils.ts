export const Breakpoints = {
  BREAK_POINT_SMALL_MOBILE: 481,
  BREAK_POINT_MOBILE: 768,
  BREAK_POINT_TABLET: 1024,
  BREAK_POINT_PC: 1200,
}

/**
 * List of mediaQueries to use in StyledComponents
 * New naming convention base around breakpoints
 *
 * Note: smb = small mobile; mb = mobile; td = tablet device; pc = pc/laptop device
 *
 * smbDown: BREAK_POINT_SMALL_MOBILE go down.
 * smbUp: BREAK_POINT_SMALL_MOBILE go up
 *
 * mbDown: BREAK_POINT_MOBILE go down.
 * mbOnly: from BREAK_POINT_SMALL_MOBILE to BREAK_POINT_MOBILE
 * mbUp: BREAK_POINT_MOBILE go up
 *
 * tdDown: BREAK_POINT_TABLET go down
 * tdOnly: from BREAK_POINT_MOBILE to BREAK_POINT_TABLET
 * tdUp: BREAK_POINT_TABLET go up
 *
 * pcDown: BREAK_POINT_PC go down
 * pcOnly: from BREAK_POINT_TABLET to BREAK_POINT_PC
 * pcUp: BREAK_POINT_PC go up
 *
 * @example
 *  ${MediaQueries.mbDown} {
 *    color: ${(props) => props.theme.colors.neutral100 }};
 *  }
 */
export const MediaQueries = {
  smbDown: `@media (max-width: ${Breakpoints.BREAK_POINT_SMALL_MOBILE - 1}px)`,
  smbUp: `@media (min-width: ${Breakpoints.BREAK_POINT_SMALL_MOBILE}px)`,

  mbDown: `@media (max-width: ${Breakpoints.BREAK_POINT_MOBILE - 1}px)`,
  mbOnly: `@media (min-width: ${
    Breakpoints.BREAK_POINT_SMALL_MOBILE
  }px) and (max-width: ${Breakpoints.BREAK_POINT_MOBILE - 1}px)`,
  mbUp: `@media (min-width: ${Breakpoints.BREAK_POINT_MOBILE}px)`,

  tdDown: `@media (max-width: ${Breakpoints.BREAK_POINT_TABLET - 1}px)`,
  tdOnly: `@media (min-width: ${
    Breakpoints.BREAK_POINT_MOBILE
  }px) and (max-width: ${Breakpoints.BREAK_POINT_TABLET - 1}px)`,
  tdUp: `@media (min-width: ${Breakpoints.BREAK_POINT_TABLET}px)`,

  pcUp: `@media (min-width: ${Breakpoints.BREAK_POINT_PC}px)`,
  pcOnly: `@media (min-width: ${
    Breakpoints.BREAK_POINT_TABLET
  }px) and (max-width: ${Breakpoints.BREAK_POINT_PC - 1}px)`,
  pcDown: `@media (max-width: ${Breakpoints.BREAK_POINT_PC - 1}px)`,
}
