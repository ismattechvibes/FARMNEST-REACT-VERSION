import React, { useRef, useState, useEffect } from "react";
import Image1 from "../components/images/farm1.jpg";
import Image2 from "../components/images/farm2.jpg";
import Image3 from "../components/images/farm3.jpg";
import Image4 from "../components/images/farm4.jpg";
import Image9 from "../components/images/fm1.jpg";
import Image10 from "../components/images/fm2.jpg";
import Image12 from "../components/images/pose1.jpg";
import Image13 from "../components/images/pose2.jpg";
import Image14 from "../components/images/Logo.png";
import Image15 from "../components/images/pose3.jpg";
import Image16 from "../components/images/pose4.jpg";
import Image17 from "../components/images/im2.webp";
import Image18 from "../components/images/fm3.jpg";
import Image19 from "../components/images/farmnest.png";
import Image20 from "../components/images/FarmNest Dashboard Overview.png";
import "./App.css"; 
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What is FarmNest?",
    answer: (
      <>
        Farmnest is an innovative agro-connect platform that empowers
        farmers by connecting them directly with buyers, eliminating
        middlemen and ensuring fair prices. With Farmnest, farmers can
        effortlessly sell their local produce from the comfort of their
        homes, while buyers gain access to fresh, high-quality farm products
        with just a few clicks.
      </>
    ),
  },
  {
    question: "location matters, how do people get their orders",
    answer: (
      <>
        <b>Great question!</b> Since Farmnest connects farmers with buyers,
        ensuring smooth and reliable delivery is crucial. Here’s how you can
        structure the order fulfillment and delivery process while.
        accounting for location:
        <h3>1. Location-Based Order Matching Geotagging</h3>
        <b>Farms & Buyers:</b> Farmers list their produce with their
        location, and buyers see available products nearest to them
        (reducing logistics costs). Smart Matching Algorithm: Prioritize
        showing buyers farmers within their region/state for faster, fresher
        deliveries.
        <h3>
          2.Flexible Delivery Options Farmnest can offer multiple delivery
          methods based on buyer/farmer preferences:
        </h3>
        A. Farmer-Assisted Delivery (Local Sales) Farmers deliver directly
        to nearby buyers (for hyperlocal transactions). Buyers pick up from
        the farm or designated collection points (reduces costs). B.
        Third-Party Logistics (For Distant Buyers) Partner with agro-focused
        logistics providers (e.g., trucks, bikes, or cold-chain vehicles for
        perishables). 
        Aggregate orders from multiple farmers in a region to
        optimize shipping costs. C. Drop-off/Pickup Hubs Establish Farmnest
        collection centers in key markets where farmers can drop off
        produce, and buyers/agents pick up. Works well for bulk buyers
        (hotels, restaurants, retailers) who order in large quantities.
        <h3>3.Real-Time Tracking & Notifications</h3>
        Buyers get live updates on their order status (harvested, in
        transit, delivered). Farmers receive alert when orders come in and
        can schedule harvests accordingly.
        <h3>
          4. Subscription & Bulk Delivery Models Weekly/Monthly Farm Boxes:
        </h3>
        Buyers subscribe to regular deliveries of fresh produce. B2B Bulk
        Orders: For supermarkets, processors, or exporters who need large,
        consistent supply.
        <h3>5.Handling Remote or Low-Access Areas</h3>
        Use local agents/cooperatives to aggregate produce from smallholder
        farmers. Mobile payment integration so farmers get paid even if
        delivery is handled by a third party.
        <h3>Key Selling Point:</h3>
        "Farmnest ensures you get the freshest farm products, whether you're
        next door or across the region—delivered seamlessly, every time."
      </>
    ),
  },
  {
    question: "how does it help buyers",
    answer: (
      <>
        <h3>1.Fresh, Local Produce</h3>
        Buyers get direct access to farm-fresh products, ensuring quality
        and reducing middlemen markups.
        <h3>2. Competitive Prices</h3>
        Farmers list fair prices, and buyers enjoy lower costs compared to
        traditional markets.
        <h3>3. Easy Ordering</h3>
        Browse, order, and pay in one place no need to visit multiple farms
        or markets.
        <h3>4. Reliable Delivery</h3>
        Choose between pickup, doorstep delivery, or bulk shipping based on
        location.
        <h3>5. Transparency & Trust</h3>
        See farmer profiles, product origins, and real-time updates,
        ensuring a secure buying experience.
      </>
    ),
  },
  {
    question: "Does FarmNest work offline?",
    answer: (
      <>
        Currently, an internet connection is required. Offline support will
        be added in future versions.
      </>
    ),
  },
  {
    question: "Is FarmNest free?",
    answer: (
      <>
        FarmNest is a premium agro-platform designed to maximize your farm’s
        profits.
        <h3>🔹 No free plans</h3>
        Pay for guaranteed value.
        <h3>🔹3-week free trial</h3>
        Test full features risk-free.
        <h3>🔹 Low-cost subscription</h3>
        Affordable pricing for big returns. Serious farming starts here.
      </>
    ),
  },
];

const Index = () => {
  const slideShowRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const slides = slideShowRef.current.querySelectorAll(".slide");
    let currentSlide = 0;
    slides.forEach((slide, i) =>
      slide.classList.toggle("active", i === 0)
    );
    const interval = setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* NAVIGATION */}
      <nav>
        <div className="logo-content">
          <div className="logo">
            <img src={Image14} alt="logo" />
          </div>
          <div className="list">
          <ul>
            <div className="parent-drop">
              <li>
                <div className="drop-content">
                  Suppliers <i className="fa fa-solid fa-caret-down"></i>
                </div>
                <div className="drop">
                  <ul>
                    <li><a href="">Farmer</a></li>
                    <li><a href="">Cooperatives</a></li>
                    <li><a href="">Wholesalers</a></li>
                    <li><a href="">Vendors</a></li>
                    <li><a href="">Agro-Allied Suppliers</a></li>
                  </ul>
                </div>
              </li>
            </div>
            <div className="parent-drop">
              <li>
                <div className="drop-content">
                  Buyers <i className="fa fa-solid fa-caret-down"></i>
                </div>
                <div className="drop">
                  <ul>
                    <li><a href="">Buying guide</a></li>
                    <li><a href="">Delivery & Payment</a></li>
                    <li><a href="">Order Tracking</a></li>
                    <li><a href="">Special Offers</a></li>
                  </ul>
                </div>
               
              </li>
            </div>
            <div className="parent-drop">
              <li>
                <div className="drop-content">
                  Guides <i className="fa fa-solid fa-caret-down"></i>
                </div>
                <div className="drop">
                  <ul>
                    <li><a href="aboutUs.html">About Us</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">FAQS </a></li>
                    <li><a href="">Contacts </a></li>
                  </ul>
                </div>
                
              </li>
            </div>
          </ul>
        </div>
        </div>
        <div className="links">
          <div className="no">
            <a href="tel:+2349074645784" className="number">
              Contact
            </a>
          </div>
          <div className="btns">
            <Link to={'/login'}> <button className="btn btn1">Log In</button></Link>
            <Link to={'/form'}> <button className="btn btn2">Sign Up</button></Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
    <section className="herosection">
        <div className="hero-content">
          <div className="intro-txt">
            <h1>AgriConnect Platform</h1>
            <p>
              Trusted by the worlds best farms, grocers, and restaurants,
              Farmnest is the leading e-commerce platform for buying & selling
              local food.
            </p>
            <div className="fvr">
              <div className="image">
                <div className="im im1">
                  <img src={Image12} alt="..." width="60px" height="60px" />
                </div>
                <div className="im im2">
                  <img src={Image13} alt="" width="60px" height="60px" />
                </div>
                <div className="im im3">
                  <img src={Image15} alt="..." width="60px" height="60px" />
                </div>
                <div className="im im4">
                  <img src={Image16} alt="..." width="60px" height="60px" />
                </div>
              </div>
              <div className="icons-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="but">
              <div className="btn btn1">
                <button>Take a 3D Tour</button>
              </div>
              <div className="btn btn2">
                <Link to={'/form'}> <button className="btn btn2">Create Your Account</button></Link>
              </div>
            </div>
          </div>
          <div className="slideshow-container" ref={slideShowRef}>
            <div>
              <img src={'https://i.pinimg.com/1200x/34/dd/dd/34dddd3d90214be7d9f23960af281060.jpg'} className="slide" alt="slide6" />
              <img className="slide active" src={Image3} alt="Slide 1" />
              <img src={Image9} className="slide" alt="" />
              <img src={Image10} className="slide" alt="..." />
              <img className="slide" src={Image4} alt="Slide 2" />
              <img className="slide" src={Image2} alt="Slide 3" />
              <img src={Image1} className="slide" alt="slide4" />
              <img src={Image18} className="slide" alt="slide5" />
              <img src={'https://i.pinimg.com/736x/75/6d/09/756d09b4d7205156227bfded841d580e.jpg'} className="slide" alt="slide7" />
              <img className="slide" src={'https://i.pinimg.com/1200x/67/5e/c5/675ec5a5a56c0c867642cbf93fdf35f0.jpg'} alt="Slide8" />
            </div>
          </div>
        </div>
        <div class="blur"></div>
    </section>

    <section class="more-det">
      <div class="moredet-cont">
        <div class="det det1">
          <h1>23%</h1>
          <p>Annual Sales Growth</p>
        </div>
        <div class="det det2">
          <h1>12hrs</h1>
          <p>Weekly Time Savings</p>
        </div>
        <div class="det det3">
          <h1>10x</h1>
          <p>ROI Per Year</p>
        </div>
        <div class="det det4">
          <h1>1</h1>
          <p>Country</p>
        </div>
      </div>
    </section>

    <section class="platform">
      <div class="header">
        <span>Field-to-Table Digital Solutions</span>
        <h1>Empowering Sustainable Agriculture with End-to-End Tech</h1>
      </div>
      <div class="disp">
        <div class="im-cont">
          <div class="img">
            <img src={Image20} alt="..." />
          </div>
        </div>
        <div class="im-cont">
          <div class="img">
            <img src={Image19} alt="..." />
          </div>
        </div>
      </div>

      <div class="content">
        <div class="cont">
          <h1>Farm Sales Software, Grow Your Business with Ease</h1>
          <p>
            The ultimate sales and marketing platform designed exclusively for
            farms and food hubs. Streamline direct sales to restaurants,
            grocers, and CSA programs all in one powerful tool.
          </p>
        </div>
        <div class="cont">
          <h1>Wholesale Food Sourcing Made Simple</h1>
          <p>
            The leading domestic sourcing platform for grocery retailers,
            restaurant chains, and foodservice distributors. Discover, connect,
            and order from trusted suppliers all in one place.
          </p>
        </div>
      </div>
    </section>

    <section class="marqee-img">
      <div class="marquee-container">
        <div class="marquee">
          <img
            src="https://i.pinimg.com/736x/94/5d/84/945d8445511e6d80298187c989ebd82a.jpg"
            alt="..."
          />
          <img
            src="https://i.pinimg.com/736x/ff/d1/61/ffd161c56cab9dbf82a2d87291a6bea3.jpg"
            alt="..."
          />
          <img
            src="https://i.pinimg.com/736x/8a/d4/6e/8ad46e1f588b8cc8352be6d7260916bd.jpg"
            alt="..."
          />
          <img
            src="https://i.pinimg.com/736x/8b/ec/be/8becbeda6888de2d41164ac949e5816b.jpg"
            alt="..."
          />
          <img
            src="https://i.pinimg.com/736x/d6/2c/10/d62c10886a243b7ea0aeeda500731ad5.jpg"
            alt="..."
          />
      
          <img
            src="https://i.pinimg.com/736x/ac/ab/b9/acabb94b29050f19a82246f432b21c6f.jpg"
            alt="..."
          />
          <img
            src="https://i.pinimg.com/736x/94/5d/84/945d8445511e6d80298187c989ebd82a.jpg"
            alt="..."
          />
        </div>
      </div>
    </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="frequent">
          <div className="head">
            <h3>FAQS</h3>
            <h1>You have question, we have answer!</h1>
            <p>Everything you need to know about Farmnest</p>
          </div>
          <div className="faqs">
            {faqData.map((faq, idx) => (
              <div className="faq" key={idx}>
                <div
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{ cursor: "pointer" }}
                >
                  {faq.question}
                </div>
                <div
                  className={
                    "faq-answer" + (activeFaq === idx ? " active" : "")
                  }
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-cont">
          <div className="foot foot1">
            <h3>Supplier</h3>
            <ul>
              <li><a href="">Price list</a></li>
              <li><a href="">E-commerce</a></li>
              <li><a href="">Farm Logo Design</a></li>
            </ul>
          </div>
          <div className="foot foot2">
            <h3>Buyer</h3>
            <ul>
              <li><a href="">Pricing For Buyers</a></li>
              <li><a href="">Order Management</a></li>
              <li><a href="">Payment</a></li>
            </ul>
          </div>
          <div className="foot foot3">
            <h3>Resources</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Blogs</a></li>
              <li><a href="">FAQS</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="foot foot4">
            <h3>Get In Touch</h3>
            <ul>
              <li>
                <div><b>General Inquiry</b></div>
                <div><a href="">infofarmnest@gmail.com</a></div>
              </li>
              <li>
                <div><b>Support</b></div>
                <div><a href="">farmnestsupport@gmail.com</a></div>
              </li>
              <li>
                <div><b>Phone</b></div>
                <div><a href="">+234(9000000000)</a></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="web">copyright &copy; 2025 Farmnest, All right reserved.</div>
      </footer>
    </div>
  );
};

export default Index;