import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// TODO Add accessibility

export default function Checkbox(props) {
  const {
    children,
    checked,
    infoMessage,
    onChange
  } = props
  
  const classes = classNames(
    styles.checkbox, {
    [styles.checked]: checked
  })
  
  return(
    <label className={classes}>
      <span className={styles.wrapper}>
        <span></span>
        <input 
          type="checkbox"
          onChange={onChange}
        />
      </span>
      <div>
        <span>{children}</span>
        <p>{infoMessage}</p>
      </div>
    </label>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  infoMessage: PropTypes.string,
  label: PropTypes.string,
}
