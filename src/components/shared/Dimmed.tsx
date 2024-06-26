import classNames from "classnames/bind"
import React from "react";
import styles from './Dimmed.module.scss'

const cx = classNames.bind(styles);

export default function Dimmed({children} : {children : React.ReactNode}) {
  return (
    <div className={cx('dimmed')}>
      {children}
    </div>
  )
}
