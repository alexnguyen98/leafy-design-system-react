import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from "@storybook/addon-knobs"
import Select from './index'

storiesOf('Select', module)
  .add('playground', () => {
    const
      infoMessage = text('Info message'),
      inline = boolean('Inline', false),
      label = text('Label', 'Stuff'),
      placeholder= text('Placeholder', 'Select stuff')

    return (
      <Select
        infoMessage={infoMessage}
        inline={inline}
        items={['thing 1','thing 2','thing 3']}
        label={label}
        placeholder={placeholder}
      />
    )
  })