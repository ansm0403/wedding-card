import Section from '@shared/Section'
import classNames from "classnames/bind"
import styles from './Video.module.scss'

const cx = classNames.bind(styles);

export default function Heading() {

  return (
    <Section className={cx('container')}>
        <video 
            autoPlay 
            muted 
            loop 
            controls
            poster='/assets/wedding.png'
        >
            <source src = "/assets/media/wedding.webm" type = "video/webm"></source>
            <source src = "/assets/media/wedding.mp4" type = "video/mp4"></source>
        </video>
    </Section>
  )
}
