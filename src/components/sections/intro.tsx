import classNames from "classnames/bind"
import { format, parseISO } from "date-fns";
import LoadingHeart from "../icons/LoadingHeart";
import Section from "../shared/Section"
import styles from './intro.module.scss'
import {ko} from 'date-fns/locale'
import Text from "../shared/Text";
import FlowerIcon from "../icons/FlowerIcon";

const cx = classNames.bind(styles)

interface IntroType {
    groomName : string;
    brideName : string;
    date : string;
    location : string;
    message : string
}

export default function intro({groomName, brideName, date, location, message} : IntroType) {

  return (
    <Section className={cx('container')}>
        <div className={cx('wrap-persons')}>
            <span>{groomName}</span>
            <LoadingHeart />
            <span>{brideName}</span>
        </div>
        <div className={cx('wrap-location')}>
          <span>{format(parseISO(date), "yyyy년 M월 d일 eeee", {locale : ko})}</span>
          <span>{location}</span>
        </div>
        <FlowerIcon className = {cx('icon-flower')}/>
        <Text>{message}</Text>
    </Section>
  )
}
