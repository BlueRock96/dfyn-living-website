import React, { useEffect, useState } from "react";
import AboutFooter from "../../component/about-footer/AboutFooter";
import DfynLiving from "../../component/dfyn-living/DfynLiving";
import RoleWithUs from "../../component/role-with-us/RoleWithUs";
import WhyDfyn from "../../component/why-dfyn/WhyDfyn";
import WorkingWithUs from "../../component/working-with-us/WorkingWithUs";

export default function Career() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  },[loading]);
  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <WorkingWithUs />
          <WhyDfyn />
          <RoleWithUs />
          <DfynLiving />
          <AboutFooter />
        </>
      )}
    </div>
  );
}
