
import classNames from 'classnames/bind';
import styles from './App.module.scss'
import Heading from './components/sections/Heading';
import Video from './components/sections/Video';
import { Wedding } from '@models/wedding';
import ImageGallery from './components/sections/ImageGallery';
import Intro from './components/sections/intro';
import Invitation from './components/sections/Invitation';
import Calender from './components/sections/Calender';
import Map from './components/sections/Map';
import Contact from './components/sections/Contact';
import Share from './components/sections/Share';
import AttendCountModal from './components/AttendCountModal';
import { useSuspenseQuery } from '@tanstack/react-query';

const cx = classNames.bind(styles);

function App() {
  // const [wedding, setWedding] = useState<Wedding | null>(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const fetchWedding = async () : Promise<Wedding>=> {
      return fetch('http://localhost:8888/wedding')
      .then((res)=>{
        if(!res.ok){
          throw new Error("청첩장 정보를 받아오지 못했습니다.")
        }
        return res.json()
  })}

  const { data : wedding } = useSuspenseQuery({
    queryKey : ["wedding"], 
    queryFn : fetchWedding,
  })
  // useEffect(()=>{
  //   setLoading(true);
  //   fetch('http://localhost:8888/wedding')
  //   .then((res)=>{
  //     if(!res.ok){
  //       throw new Error("청첩장 정보를 받아오지 못했습니다.")
  //     }
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     setWedding(data)
  //   })
  //   .catch((error)=>{
  //     setError(true);
  //     console.log(error);
  //   })
  //   .finally(()=>{
  //     setLoading(false);
  //   })
  
  // },[])

  if (wedding == null) {
    return null
  }

  const {
    date, 
    galleryImages, 
    groom, 
    bride, 
    location, 
    message : {intro, invitation}
  
  } = wedding
  return (
    <div className={cx('container')}>
      <Heading date = {date}/>
      <Video />
      <Intro 
        groomName={groom.name} 
        brideName = {bride.name} 
        date = {date} 
        location = {location.name}
        message = {intro}
      />
      <Invitation message =  {invitation} />
      <ImageGallery images = {galleryImages} />
      <Calender date = {date}/>
      <Map location = {location}/>
      <Contact groom = {groom} bride = {bride}/>
      <Share groomName = {groom.name} brideName = {bride.name} date= {date}/>
      <AttendCountModal wedding={wedding}/>
    </div>
  );
}

export default App;
