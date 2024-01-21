import React from 'react';
import './Aboutus.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShareLink from 'react-facebook-share-link'

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center lead"><b>COMPANY OVERVIEW</b></h2>
              <p className="text-center lead">
               Coffee Shop Sdn Bhd is a vibrant and contemporary coffee haven established in 2024. Our commitment to creating a unique coffee experience sets us apart, as we blend the rich traditions of coffee craftsmanship with modern aesthetics. At BeanBliss, we believe in transforming a simple cup of coffee into a moment of pure indulgence.
              </p>
              <h2 className="text-center lead">MISION</h2>
              <p className="text-center lead">
               Our mission at Coffee Shop Sdn Bhd is to craft a delightful and immersive coffee experience that transcends the ordinary. We strive to be a place where people can escape the daily grind, connect with one another, and savor the artistry of our expertly brewed coffee and handcrafted delights.
              </p>
              <h2 className="text-center lead">VISION</h2>
              <p className="text-center lead">
              Coffee Shop Sdn Bhd, our vision is to be the heartbeat of communities, where the aroma of freshly brewed coffee and the warmth of genuine connections converge. We aspire to redefine the coffee experience, inspiring moments of joy, creativity, and contemplation. Through innovation, sustainability, and a relentless pursuit of excellence, we aim to cultivate a global coffee culture that transcends borders, creating a world where every sip of BeanBliss coffee is a journey into unparalleled bliss."
              </p>
              <div className="twobody">
              <h3 class="text-center" >BOARD OF DIRECTORS</h3>
              <div class="col-md-4 py-3 py-md-0"></div>

              <div class="is it">
              <div class="row"></div>

              <div className='name'>
              
              
             
              <div class="card-group">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">CEO</h4>
      <Card.Img variant="top" src="Image/Coffee.jpg" />
      <p class="card-text">"Meet Mohamad Ariff fakhri Ahamad buhari, a true virtuoso in the world of coffee mixing. Their talent transcends the ordinary, transforming the simple act of brewing coffee into an art form. With an intuitive understanding of flavor profiles and an unwavering commitment to perfection,Mohamad Ariff fakhri Ahamad buhari has mastered the delicate balance that makes each cup a symphony of taste.</p>
      <ShareLink link='https://your-site.com/some-page'>
   {link => (
      <a href={link} target='_blank'>Connect to Facebook</a>
   )}
</ShareLink>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">R&D Director</h4>
      <Card.Img variant="top" src="Image/male2.jpg" />
      <p class="card-text">"Meet Anudiip, a true virtuoso in the world of coffee mixing. Their talent transcends the ordinary, transforming the simple act of brewing coffee into an art form. With an intuitive understanding of flavor profiles and an unwavering commitment to perfection,Mohamad Ariff fakhri Ahamad buhari has mastered the delicate balance that makes each cup a symphony of taste.</p>
      <ShareLink link='https://your-site.com/some-page'>
   {link => (
      <a href={link} target='_blank'>Connect to Facebook</a>
   )}
</ShareLink>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Operation Director</h4>
      <Card.Img variant="top" src="Image/male3.jpg" />
      <p class="card-text">"Meet shashi, a true virtuoso in the world of coffee mixing. Their talent transcends the ordinary, transforming the simple act of brewing coffee into an art form. With an intuitive understanding of flavor profiles and an unwavering commitment to perfection,Mohamad Ariff fakhri Ahamad buhari has mastered the delicate balance that makes each cup a symphony of taste.</p>
      <ShareLink link='https://your-site.com/some-page'>
   {link => (
      <a href={link} target='_blank'>Connect to Facebook</a>
   )}
</ShareLink>
    </div>
  </div>
</div>


              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

