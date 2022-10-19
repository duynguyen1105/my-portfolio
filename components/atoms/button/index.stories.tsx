import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Button, Props } from '.'

export default {
  component: Button,
  title: 'Atoms/Button',
}

const Template: Story<Props> = (args) => <Button {...args}>A Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 'md',
  isDisabled: false,
  isLoading: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  size: 'md',
  icon: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4198 11.4486L12.526 11.2306C12.0676 11.178 11.6167 11.3358 11.2935 11.659L9.9032 13.0493C8.8368 12.5082 7.8696 11.8025 7.03391 10.9661C6.19747 10.1304 5.4918 9.1632 4.95071 8.0968L6.34101 6.70649C6.66416 6.38334 6.82198 5.93243 6.76938 5.47401L6.55144 3.58018C6.46125 2.82115 5.82247 2.25 5.05592 2.25H3.75579C2.90658 2.25 2.20015 2.95643 2.25276 3.80564C2.45191 7.01386 3.83395 9.89894 5.96751 12.0325C8.10106 14.166 10.9861 15.5481 14.1944 15.7472C15.0436 15.7998 15.75 15.0934 15.75 14.2442V12.9441C15.75 12.1775 15.1788 11.5387 14.4198 11.4486Z"
        fill="#2685F1"
      />
    </svg>
  ),
  isDisabled: false,
  isLoading: false,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  color: 'tertiary',
  size: 'md',
  isDisabled: false,
  isLoading: false,
}

export const Transparent = Template.bind({})
Transparent.args = {
  color: 'transparent',
  size: 'md',
  isDisabled: false,
  isLoading: false,
}

export const Ghost = Template.bind({})
Ghost.args = {
  color: 'ghost',
  size: 'md',
  isDisabled: false,
  isLoading: false,
}

export const Medium = Template.bind({})
Medium.args = {
  color: 'primary',
  size: 'md',
  isDisabled: false,
  isLoading: false,
}

export const Small = Template.bind({})
Small.args = {
  color: 'primary',
  size: 'sm',
  isDisabled: false,
  isLoading: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: true,
  isLoading: false,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
  icon: <img src="//unsplash.it/16" />,
}

export const Loading = Template.bind({})
Loading.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: true,
}
