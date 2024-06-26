import classNames from "classnames/bind"
import { format, getDay, parseISO } from 'date-fns';
import Section from "../shared/Section";
import styles from './Calender.module.scss';
import {ko} from 'date-fns/locale'
import 'react-day-picker/dist/style.css'
import { DayPicker } from "react-day-picker";

const cx = classNames.bind(styles);

const css = `
    .rdp-caption {
        display : none;
    }
    .rdp-cell {
        cursor : default;
    }
    .rdp-head_cell {
        font-weight : 500;
        font-size : 14px;
        font-weight : bold;
    }
    .rdp-day_selected {
        background-color : var(--red);
        font-weight : bold;
    }
    .rdp-day_selected:hover{
        background-color : var(--red);
    }
`

export default function Calender({date} : {date : string}) {
    const weddingDate = parseISO(date);
    return (
    <Section>
        <div className={cx('wrap-header')}>
            <span className={cx('txt-date')}>{format(weddingDate, 'yyyy.MM.dd')}</span>
            <span className={cx('txt-time')}>{format(weddingDate, 'aaa h시 eeee', {locale : ko})}</span>
        </div>
        <div className={cx('wrap-calender')}>
            <style>{css}</style>
            <DayPicker locale={ko} month={weddingDate} selected={weddingDate} formatters= {{formatCaption : ()=>''}}/>
        </div>
    </Section>
  )
}
