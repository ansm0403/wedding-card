import React from 'react'
import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

import {BiSolidError} from 'react-icons/bi'
import LoadingHeart from '../icons/LoadingHeart'

const cx = classNames.bind(styles)

interface FullScreenMessageProps{
    type : 'loading' | 'error'
}

export default function FullScreenMessage({type} : FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
        {
            type === 'loading' 
            ? <LoadingHeart size = "big" animation/>
            : <>
                <BiSolidError size={30} /> 
                에러가 발생했습니다. 다시 시도해주세요.
              </>
        }
    </div>
  )
}
