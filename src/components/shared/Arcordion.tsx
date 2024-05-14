import classNames from "classnames/bind"
import { useState } from "react";
import DownIcon from "../icons/DownIcon";
import styles from './Arcordion.module.scss'

const cx = classNames.bind(styles);

interface ArcordionType {
    label : string;
    children : React.ReactNode;
}

export default function Arcordion({label, children} : ArcordionType) {
  const [extended, setExtended] = useState(false);

  const handleToggle = () => {
    setExtended((prev)=>!prev);  
  }

  return (
    <div className={cx(["wrap-arcordion", extended ? 'open' : ''])}>
        <div className={cx("wrap-header")} onClick={handleToggle}>
            <span>{label}</span>
            <DownIcon className = {cx("ico-arrow-down")}/>
        </div>
        <div className={cx("wrap-content")}>{children}</div>
    </div>
  )
}
