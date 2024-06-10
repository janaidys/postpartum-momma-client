import React from "react";

const Home = () => {
  return (
    <div>
      <span className="container1">
        <span className="blogs-section">
          <span className="blog-card">
            <img
              src="./images/baby-nursery.jpg"
              className="blog-image"
              alt="baby-nursery"
            />
            <h1 className="blog-title">Bedtime Routine</h1>
            <p class="blog-overview">
              Take a peak into Anaidys' bedtime routine with baby Luca.
            </p>
            <input type="button" class="blog-button" value="READ" />
          </span>

          <span className="blog-card">
            <img
              src="./public/images/diastasis-recti.png"
              className="blog-image"
              alt="diastasis-recti"
            />
            <h1 className="blog-title">Restore your Core</h1>
            <p className="blog-overview">Mommy pooch? Do I even know her? </p>
            <input type="button" className="blog-button" value="READ" />
          </span>

          <span className="blog-card">
            <img
              src="./images/tummy-time.jpeg"
              className="blog-image"
              alt="luca-tummy-time"
            />
            <h1 className="blog-title">Play Kits</h1>
            <p className="blog-overview">
              Play is such an integral part of your baby's development. But how
              do I play with my baby? These kits take out all the guessing.
            </p>
            <input type="button" className="blog-button" value="READ" />
          </span>

          <span className="blog-card">
            <img
              src="./images/formula-banner.jpeg"
              className="blog-image"
              alt="baby-formula"
            />
            <h1 className="blog-title">
              Choosing the Right Formula for your Baby
            </h1>
            <p className="blog-overview">
              With so many formula's on the market how do I know which is the
              right fit for me and my baby? Truth is...there is no one size fits
              all, but here are some of our personal favs.
            </p>
            <input type="button" className="blog-button" value="READ" />
          </span>
        </span>
      </span>
    </div>
  );
};

export default Home;
