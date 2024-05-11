import Section from '@shared/Section'
import classNames from "classnames/bind"
import { format, getDay, parseISO } from 'date-fns';
import styles from './Heading.module.scss'

const cx = classNames.bind(styles);

interface HeadingProps {
    date : string
}

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

export default function Heading({date} : HeadingProps) {
    const weddingDate = parseISO(date);

    return (
        <Section className={cx('container')}>
            <div className={cx('date')}>{format(weddingDate, 'yy.MM.dd')}</div>
            <div className={cx('day')}>{DAYS[getDay(weddingDate)]}</div>
        </Section>
    )
}
