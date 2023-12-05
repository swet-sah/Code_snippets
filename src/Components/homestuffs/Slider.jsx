import {useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import randomImg from '../../randomimg.jpeg'
import DonateNowBtn from '../Donation/DonateNowBtn';
function Slider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const imgs = [
        { image: randomImg, par: "Nulla vitae elit libero, a pharetra augue mollis interdum.", h3: "First slide label" },
        { image: randomImg, par: "Nulla vitae elit libero, a pharetra augue mollis interdum.", h3: "First slide label" },
        { image: randomImg, par: "Nulla vitae elit libero, a pharetra augue mollis interdum.", h3: "First slide label" },
        { image: randomImg, par: "Nulla vitae elit libero, a pharetra augue mollis interdum.", h3: "First slide label" }
    ]
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' className='my-4'>
            {
                imgs.map((element) => {
                    return (
                        <Carousel.Item>
                            <Carousel.Caption className>
                                <div >
                                    <h3 >{element.h3}</h3>
                                    <p>{element.par}</p>
                                  <DonateNowBtn/>
                                </div>

                            </Carousel.Caption>
                            <div style={{ maxHeight: '50vh' }}>
                                <img className="d-block w-100 h-100" src={element.image} alt="First slide" />
                            </div>

                        </Carousel.Item>
                    )

                })
            }
        </Carousel>
    );
}

export default Slider;