import React, { useState } from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'

// TODO Add accessibility

export default function Input(props) {
  const { 
    children,
    errorMessage,
    infoMessage,
    icon,
    inline,
    label,
    maxLength,
    minLength,
    onChange,
    placeholder,
    type = 'text',
  } = props

  const [focus, setFocus] = useState(false)

  const inputClasses = classNames(
    styles.input, {
    [styles.inline]: inline
  })

  const wrapperClasses = classNames(
    styles.wrapper,{
    [styles.error]: errorMessage,
    [styles.focused]: focus
  })
  
  const iconContent = icon ? (
    <Icon 
      source={icon}
      size={'small'}
    />
  ) : null

  const infoContent = infoMessage ? (
    <div className={styles.infoText}>
      {infoMessage}
    </div>
  ) : null

  const errorContent = errorMessage ? (
    <div className={styles.errorText}>
      {errorMessage}
    </div>
  ) : null
  
  return(
    <div className={inputClasses}>
      <label>
        {label}
      </label>
      <div className={wrapperClasses}>
        {iconContent}
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={children}
        />
      </div>
      {infoContent}
      {errorContent}
    </div>
  )
}

Input.propTypes = {
  errorMessage: PropTypes.string,
  infoMessage: PropTypes.string,
  icon: PropTypes.func,
  inline: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'number',
    'email',
    'password'
  ]),
}