import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import Banner1 from '../assets/images/Banner1.webp';

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <div>
          <article>
            {/* <div>
              <h1 className="text-uppercase">Flipzon</h1>
              <p className="p1">Ecommerce</p>
              <p className="p2" data-aos="fade-in">
                Your product in just within 24hr in your doorstep
              </p>
              <div className="btnpnl pt-4" data-aos="fade-in"></div>
            </div> */}
            <aside>
              <img src={Banner1} alt="banner1" />
            </aside>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
