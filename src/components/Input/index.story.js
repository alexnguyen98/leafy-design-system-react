import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, text, number } from "@storybook/addon-knobs"
import Input from './index'
import { Phone } from '../../icons'

storiesOf('Input', module)
  .add('playground', () => {
    const
      errorMessage = text('Error message'),
      infoMessage = text('Info message'),
      icon = boolean('With Icon', false),
      inline = boolean('Inline', false),
      label = text('Label', 'Username'),
      maxLength = number('Max length'),
      minLength = number('Min length'),
      placeholder= text('Placeholder', 'Username'),
      Text = text('Text'),
      type = select('Type', ['text','number','email','password'], 'text')
      
    const placeholderIcon = icon ? Phone : null

    return (
      <Input
        errorMessage={errorMessage}
        infoMessage={infoMessage}
        icon={placeholderIcon}
        inline={inline}
        label={label}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        type={type}
      >{Text}</Input>
    )
  })