import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';

//creating an array to hold a value and then map with Ef6 & impport Feature and pass props inside it.
//  key={item.title + index} will make it unquie so that it will have diff.  keys
const featuresData = [
  {
  title: 'Improving end distrust instantly',
  text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
  }
]

const Features = () => {
  return (
    <div className='gpt3_features section__padding' id='features'>
      <div className='gpt3_features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3_features-container'>
        {featuresData.map(( item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features;