import React, { HTMLAttributes, ReactNode } from 'react'

import { StyledButton, StyledLoader } from './index.styled'

export type Props = Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  size: 'lg' | 'md' | 'sm'
  children?: ReactNode
  color?:
    | 'primary'
    | 'secondary'
    | 'transparent'
    | 'tertiary'
    | 'ghost'
    | 'danger'
  theme?: 'helloSites' | 'marryBaby'
  isDisabled?: boolean
  isBlock?: boolean
  title?: string
  className?: string
  icon?: JSX.Element
  isLoading?: boolean
  loadingText?: string
  onClick?: (evt?: any) => void
  dataEventCategory?: string
  dataEventAction?: string
  dataEventLabel?: string
  dataProductChannel?: string
  dataProductSku?: string
  dataProductBrand?: string
  dataProductName?: string
  dataProductPrice?: string
  dataProductCategory?: string
  dataProductPosition?: string
  isAmp?: boolean
  dataVarsTracking?: boolean
  on?: string
  type?: 'submit' | 'reset' | 'button'
}

const Button = ({
  size,
  color = 'primary',
  theme = 'helloSites',
  isDisabled,
  isBlock,
  title,
  className,
  onClick,
  icon,
  children,
  isLoading,
  loadingText,
  dataEventCategory,
  dataEventAction,
  dataEventLabel,
  dataProductChannel,
  dataProductSku,
  dataProductBrand,
  dataProductName,
  dataProductPrice,
  dataProductCategory,
  dataProductPosition,
  isAmp,
  on,
  dataVarsTracking,
  type,
  ...rest
}: Props) => {
  const getGtmProps = () => {
    if (isAmp) {
      return {
        'data-vars-event-category': dataEventCategory,
        'data-vars-event-action': dataEventAction,
        'data-vars-event-label': dataEventLabel,
        'data-vars-product-channel': dataProductChannel,
        'data-vars-product-sku': dataProductSku,
        'data-vars-product-brand': dataProductBrand,
        'data-vars-product-name': dataProductName,
        'data-vars-product-price': dataProductPrice,
        'data-vars-product-category': dataProductCategory,
        'data-vars-product-position': dataProductPosition,
        'data-vars-tracking': dataVarsTracking,
        on: on,
      }
    } else {
      return {
        'data-event-category': dataEventCategory,
        'data-event-action': dataEventAction,
        'data-event-label': dataEventLabel,
        'data-product-channel': dataProductChannel,
        'data-product-sku': dataProductSku,
        'data-product-brand': dataProductBrand,
        'data-product-name': dataProductName,
        'data-product-price': dataProductPrice,
        'data-product-category': dataProductCategory,
        'data-product-position': dataProductPosition,
      }
    }
  }

  return (
    <StyledButton
      {...getGtmProps()}
      className={className}
      data-size={size}
      data-color={color}
      data-block={isBlock}
      data-has-icon={!!icon || undefined}
      data-theme={theme}
      disabled={isDisabled}
      onClick={(evt) => {
        !isLoading && !isDisabled && onClick && onClick(evt)
      }}
      title={title}
      data-is-loading={isLoading || undefined}
      buttonHasIcon={!!icon}
      buttonTheme={theme}
      buttonSize={size}
      buttonColor={color}
      buttonIsLoading={isLoading}
      buttonIsBlock={isBlock}
      type={type}
      {...rest}
    >
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 24,
          }}
        >
          {(color === 'secondary' ||
            color === 'transparent' ||
            color === 'tertiary' ||
            color === 'ghost' ||
            color === 'danger') && (
            <>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#DBDFE5"
                  strokeWidth="4"
                />
              </svg>

              <StyledLoader
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <mask id="a" fill="#fff">
                  <path d="M12 0A12 12 0 11.19 9.88l3.9.7A8.03 8.03 0 1012 3.98V0z" />
                </mask>
                <path
                  d="M12 0A12 12 0 11.19 9.88l3.9.7A8.03 8.03 0 1012 3.98V0z"
                  stroke="#2D87F3"
                  strokeWidth="8"
                  mask="url(#a)"
                />
              </StyledLoader>
            </>
          )}

          {color === 'primary' && (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
              </svg>
              <StyledLoader
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask id="path-1-inside-1" fill="white">
                  <path d="M12 0C14.464 2.93833e-08 16.8683 0.758527 18.8863 2.17253C20.9042 3.58653 22.438 5.58746 23.2791 7.90347C24.1203 10.2195 24.2281 12.7383 23.5879 15.1177C22.9477 17.4971 21.5906 19.6218 19.7009 21.2031C17.8111 22.7843 15.4804 23.7456 13.0254 23.9561C10.5704 24.1667 8.11007 23.6164 5.97869 22.38C3.8473 21.1436 2.14819 19.281 1.1122 17.0454C0.0761991 14.8097 -0.246461 12.3093 0.188053 9.8839L4.09856 10.5845C3.8079 12.2069 4.02374 13.8795 4.71676 15.375C5.40977 16.8705 6.54637 18.1165 7.97213 18.9435C9.39789 19.7706 11.0437 20.1387 12.6859 19.9979C14.3282 19.857 15.8873 19.214 17.1514 18.1563C18.4155 17.0985 19.3233 15.6772 19.7516 14.0856C20.1798 12.4939 20.1077 10.8089 19.545 9.25969C18.9823 7.71042 17.9563 6.37193 16.6065 5.42605C15.2566 4.48017 13.6483 3.97277 12 3.97277L12 0Z" />
                </mask>
                <path
                  d="M12 0C14.464 2.93833e-08 16.8683 0.758527 18.8863 2.17253C20.9042 3.58653 22.438 5.58746 23.2791 7.90347C24.1203 10.2195 24.2281 12.7383 23.5879 15.1177C22.9477 17.4971 21.5906 19.6218 19.7009 21.2031C17.8111 22.7843 15.4804 23.7456 13.0254 23.9561C10.5704 24.1667 8.11007 23.6164 5.97869 22.38C3.8473 21.1436 2.14819 19.281 1.1122 17.0454C0.0761991 14.8097 -0.246461 12.3093 0.188053 9.8839L4.09856 10.5845C3.8079 12.2069 4.02374 13.8795 4.71676 15.375C5.40977 16.8705 6.54637 18.1165 7.97213 18.9435C9.39789 19.7706 11.0437 20.1387 12.6859 19.9979C14.3282 19.857 15.8873 19.214 17.1514 18.1563C18.4155 17.0985 19.3233 15.6772 19.7516 14.0856C20.1798 12.4939 20.1077 10.8089 19.545 9.25969C18.9823 7.71042 17.9563 6.37193 16.6065 5.42605C15.2566 4.48017 13.6483 3.97277 12 3.97277L12 0Z"
                  stroke="#91CAFF"
                  strokeWidth="8"
                  mask="url(#path-1-inside-1)"
                />
              </StyledLoader>
            </>
          )}

          <span>{loadingText}</span>
        </div>
      ) : (
        <span>
          {!isLoading && <span className="button-icon">{icon}</span>} {children}
        </span>
      )}
    </StyledButton>
  )
}

export { Button }
