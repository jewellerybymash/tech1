import Image from "next/image";
import localFont from "next/font/local";
import { GoogleApis } from "googleapis";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Banner Section Start
const BannerSection = () => (
  <div className="rs-banner banner-style3">
    <div className="container">
      <div className="row y-middle">
        <div className="col-lg-6">
          <div className="banner-content">
            <h1 className="title wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="250ms">
              Plumber near me in <span>USA</span>
            </h1>
            <p className="description wow fadeInLeft" data-wow-delay="250ms" data-wow-duration="260ms">
              Looking for Plumber services near you? Find reliable and experienced Plumbing Company in the USA.
            </p>
            <div className="btn-part mt-45">
              <a
                className="readon view orange wow fadeInUp"
                data-wow-delay="260ms"
                data-wow-duration="200ms"
                href="tel:(619) 332-4873"
              >
                <i className="flaticon-call"></i> (619) 332-4873
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
// Banner Section End


// Counter Section End

// Service Section Start
const ServiceSection = () => (
  <div className="col-lg-4 col-md-6 mb-30">
    <div className="services-slider">
      <div className="services-item">
        <div className="services-content">
          <h3 className="title">Emergency Plumbing Services Near Me</h3>
          <p className="description">
            Get top-rated emergency plumbing services near you. Call (619) 332-4873 for immediate assistance near you.
          </p>
          <div className="services-btn">
            <a href="tel:(619) 332-4873">
              <span className="btn-text">Get Quotes</span>
              <i className="fi fi-rr-arrow-small-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
// Service Section End

export default BannerSection;
export { CounterSection, ServiceSection };
