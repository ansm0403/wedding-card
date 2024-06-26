
import classNames from "classnames/bind";
import React from "react";
import styles from './Section.module.scss'

const cx = classNames.bind(styles);

interface SectionProps {
    children : React.ReactNode;
    className?  : string;
    title? : string
}
export default function Section({children, className, title} : SectionProps){
    return (
        <section className={cx(['container', className])}>
            {title ? <div className={cx('title')}>{title}</div> : null}
            {children}
        </section>
    )
}