import styles from './Share.module.scss'
import classNames from 'classnames/bind'
import Section from '../shared/Section';
import { useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale'
import KakaoIcon from '../icons/KakaoIcon';
import ClipboardIcon from '../icons/ClipboardIcon';
import CopyToClipboard from 'react-copy-to-clipboard';


const cx = classNames.bind(styles);

declare global {
    interface Window {
        Kakao : any
    }
}

interface ShareType {
    groomName : string
    brideName : string
    date : string
}

export default function Share({groomName, brideName, date} : ShareType){
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
        script.async = true;

        document.head.appendChild(script);

        script.onload = ()=>{
            if(!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
            }
        }
        
    },[])

    const handleShareKakao = () =>{
        window.Kakao.Share.sendDefault({
            objectType :"feed",
            content : {
                title : `${groomName} ♥ ${brideName} 결혼합니다.`,
                description : `${format(parseISO(date), 'M월 d일 eeee aaa h시',{
                    locale : ko
                })}`,
                imageUrl : 'https://i1.ruliweb.com/img/24/02/29/18df4391beb19ea12.jpg',
                link : {
                    mobileWebUrl : window.location.origin,
                    webUrl : window.location.origin,
                },
            },
            buttons : [
                {
                    title : "청첩장 보기",
                    link : {
                        mobileWebUrl : window.location.origin,
                        webUrl : window.location.origin,
                    },
                }
            ]
        })
    }
    return (
        <Section>
            <div className={cx('wrap-share')}>
                <button onClick = {handleShareKakao}>
                    <KakaoIcon />
                </button>
                <CopyToClipboard text= {window.location.origin} onCopy = {()=>{
                    window.alert("복사가 완료되었습니다.")
                }}>
                    <button>
                        <ClipboardIcon />
                    </button>
                </CopyToClipboard>
            </div>
        </Section>
    )
}
