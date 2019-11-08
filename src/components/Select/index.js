import React, { useState } from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { Down } from '../../icons'

// TODO Add accessibility

export default function Select(props) {
  const { 
    infoMessage,
    inline,
    items,
    label,
    onChange,
    placeholder,
  } = props

  const [focus, setFocus] = useState(false)

  const inputClasses = classNames(
    styles.input, {
    [styles.inline]: inline
  })

  const wrapperClasses = classNames(
    styles.wrapper,{
    [styles.focused]: focus
  })
  
  return(
    <div className={inputClasses}>
      <label>
        {label}
      </label>
      <div className={wrapperClasses}>
        <select
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onChange}
          type="select"
        >
          <option 
            value="" 
            selected 
            disabled
          >{placeholder}</option>
          {items.map((value,i) =>
            <option key={i}>{value}</option>
          )}
        </select>
        <Icon 
          source={Down}
          size={'small'}
        />
      </div>
      <p>{infoMessage}</p>
    </div>
  )
}

Select.propTypes = {
  infoMessage: PropTypes.string,
  inline: PropTypes.bool,
  placeholder: PropTypes.string,
}