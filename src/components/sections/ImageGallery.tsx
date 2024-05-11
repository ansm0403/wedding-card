import classNames from "classnames/bind";
import Section from "../shared/Section";
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles);

export default function ImageGallery({images} : {images: string[]}) {

    return(
        <Section title = "사진첩">
            <ul className={cx('images')}>
                {images.map((src, index)=>(
                    <li className={cx('image')} key = {index}>
                        <img src = {src} alt = "사진첩 이미지" />
                    </li>
                ))}
            </ul>
        </Section>
    ) 
}
