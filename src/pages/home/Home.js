import React, { useEffect, useState } from "react";
import AboutFooter from "../../component/about-footer/AboutFooter";
import DfynLiving from "../../component/dfyn-living/DfynLiving";
import HomeBrand from "../../component/home-brand/HomeBrand";
import HomeHero from "../../component/home-hero/HomeHero";
import HomeMedia from "../../component/home-media/HomeMedia";
import Testimonial from "../../component/testimonial/Testimonial";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);
  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <HomeHero />
          <HomeBrand />
          <HomeMedia />
          <Testimonial />
          <DfynLiving />
          <AboutFooter />
        </>
      )}
    </div>
  );
}
