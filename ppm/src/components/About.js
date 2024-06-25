import React from 'react';
import bioData from "../data/bios"
import '../About.css'

const About = () => {
    return (
      <div>

<div className="origin-story">
    <h2>How it All Began</h2>
<div className=" origin-text">
<p>Postpartum Momma was founded by Anaidys Jimenez as a forum to provided resources during the postpartum period of motherhood. In her first few months postpartum, Anaidys realized that not only was being a new mom difficult; it was isolating. She struggled with anxious and depressive thoughts that kept her from being fully present for herself and her baby. By the end of the day she was unbathed, with streaks of spit up on her robe, and tears streaming down her cheeks as she held her sleeping baby. In the middle of a 3am nursing session, when it felt like everyone but her was sound asleep, she wondered if she was really the only one feeling this way. Postpartum Momma is here to empower your motherhood journey and remind you that you are not alone in this! </p>
</div>
</div>

<div className="about-us"> 
    <h2>Meet the Team</h2>
    {bioData.map((bio) => (
        <div key={bio.id}className="team-blurb">
        <div className="name-photo">
            <div className="momma-photo">
            <img src={`/images/${bio.image}`} className="mom-photo" alt={bio.name}/>
        </div>
            <h3>{bio.name}</h3>
        </div>
        <span>
        <p> {bio.bio} </p>
        </span>
</div>
    ))}
</div>

<div className="beliefs">
    <h2>Our Beliefs</h2>
  
<div className="beliefs-row">
    <div className="beliefs-text">
       
        <h3>You are a great mother.</h3>
        <p>Motherhood looks different for different women. Although our journeys may be different we are all trying to do what is best for our child. No one can tell you how to best parent your child. Postpartum Momma is here as a resource to provide insight and allow you to learn different skills. Feel free to pick and choose as you build your motherhood tool belt. </p>
    </div>
<br/>
    <div className="beliefs-text">
        
        <h3>Fed is best.</h3>
        <p>Postpartum Momma does not endorse one method of feeding as the best method. As previously mentioned, each motherhood journey is unique and we intend to encourage and support all mothers through their feeding journeys. We provide various resources for breastfeeding (nursing and pumping) and formula-feeding mothers. Please choose the method that is most conducive to your mental health, lifestyle, and child's needs.</p>
    </div>
<br/>
    <div className="beliefs-text"> 
        
        <h3>You cannot pour from an empty cup.</h3>
        <p>As they say, the days are long and the years are short. As mothers, we can often get so caught up in being everything at all times for our babies that we forget to do things for ourselves. This is understandable; you have a tiny human that depends on you for their livelihood and you don't want to miss a single moment! Just remember, in order to pour yourself into your child you're going to need to refuel spiritually, physically, and mentally.</p>
    </div>
    
</div>
</div>
      </div>
      
    )
  }


export default About;