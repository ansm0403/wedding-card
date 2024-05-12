import classNames from "classnames/bind"
import PostIcon from "../icons/PostIcon";
import Section from "../shared/Section"
import Text from "../shared/Text";
import styles from './Invitation.module.scss'

const cx = classNames.bind(styles)

interface InvitationProps {
    message : string;
}

export default function Invitation({message} : InvitationProps) {
  return (
    <Section className={cx("container")}>
        <PostIcon className={cx("icon-post")} />
        <Text>{message}</Text>
    </Section>
  )
}
