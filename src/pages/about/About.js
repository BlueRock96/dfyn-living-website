import React, { useEffect, useState } from "react";
// import AboutFooter from "../../component/about-footer/AboutFooter";
// import ApplicationReceived from "../../component/application-received/ApplicationReceived";
// import Consumers from "../../component/consumers/Consumer";
// import DfynLiving from "../../component/dfyn-living/DfynLiving";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  },[loading]);
  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
            <div className="loader"></div>
        </div>
      ) : (
        <>
          {/* <Consumers />
          <ApplicationReceived />
          <DfynLiving />
          <AboutFooter /> */}
        </>
      )}
    </>
  );
}
