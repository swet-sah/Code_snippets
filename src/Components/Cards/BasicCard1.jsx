import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import randomImg from '../../randomimg.jpeg';
import { Carousel } from 'react-bootstrap';

const BasicCardSlider = () => {
  const cards = [
    {
      title: 'Card Title 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Card Title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Card Title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Card Title 4',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Card Title 5',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Card Title 6',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        title: 'Card Title 2',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        title: 'Card Title 3',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        title: 'Card Title 4',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        title: 'Card Title 5',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        title: 'Card Title 6',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
  ];

  const [cardChunks, setCardChunks] = useState([]);

  useEffect(() => {
    const calculateCardChunks = () => {
      const windowWidth = window.innerWidth;
      let chunkSize;
      if (windowWidth >= 1200) {
        chunkSize = 3;
      } else if (windowWidth >= 768) {
        chunkSize = 2;
      } else {
        chunkSize = 1;
      }
      const newCardChunks = [];
      for (let i = 0; i < cards.length; i += chunkSize) {
        newCardChunks.push(cards.slice(i, i + chunkSize));
      }
      setCardChunks(newCardChunks);
    };

    calculateCardChunks();

    window.addEventListener('resize', calculateCardChunks);
    return () => {
      window.removeEventListener('resize', calculateCardChunks);
    };
  }, [cards]);

  return (
    <>
      <Carousel variant="dark">
        {cardChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center ">
              {chunk.map((card, cardIndex) => (
                <div className="card-wrapper m-5" key={cardIndex}>
                  <Card style={{ width: "20rem" ,height:"18rem"}}>
                    <Card.Img className='h-100' src={randomImg} />
                    <Card.Body className='position-absolute m-3'>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button variant="secondary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default BasicCardSlider;
