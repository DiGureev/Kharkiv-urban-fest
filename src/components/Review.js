import './Review.css';
import review1 from '../img/review1.png';
import review2 from '../img/review2.png';
import review3 from '../img/review3.png';
import review4 from '../img/review4.png';
import { useContext } from 'react';
import { AppContext } from '../App.js';

const Review = (props) => {
    const imgArr = [review1, review2, review3, review4]
    const {data} = useContext(AppContext)

    return (
        <div className='review'>
            <div className='review-header'><h2>reviews</h2></div>
            <div className='review-cards'>
                {data.data.review.map((item, idx) => {
                    return <div className='review-card' key={idx}>
                        <img src={imgArr[idx]}/>
                        <h3>{item.name}</h3>
                        <p>{item.review}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Review