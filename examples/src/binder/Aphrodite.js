import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { animate } from '../../../src/index'

export const AphroditeSample = ({label, keyframeInput, keyframeOption}) => {
  const style = StyleSheet.create({
    item: animate(keyframeInput, keyframeOption)
  })
  return <div className={css(style.item)}>{label}</div>
}
