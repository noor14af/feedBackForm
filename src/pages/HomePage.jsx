import React,{useState} from 'react'
import Header from '../components/Header';
import Reviews from "../components/Reviews";
import Form from "../components/Form";
import FeedBackList from "../components/FeedBackList";
import FeedBackData from "../data/FeedBackData";
const HomePage = () => {
    const[feedBack, setFeedBack] = useState(FeedBackData)
      const [ratingValue, setRatingValue] = useState("1");
  return (
    <div className='bg-[#202142] justify-items-center'>
      <Header/>
      <Form feedBack={feedBack} setFeedBack={setFeedBack} ratingValue={ratingValue} setRatingValue={setRatingValue}/>
      <Reviews feedBack={feedBack}/>
      <FeedBackList feedBack={feedBack} setFeedBack={setFeedBack}/>
    </div>
  )
}

export default HomePage
