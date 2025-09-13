"use client"
import AtomsIFrame from "@/components/atoms/atoms_iframe";
import MoleculesFilterYear from "@/components/molecules/filter_year";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";
import { useState } from "react";

const DashboardWardrobeIndex = () => {   
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
 
    const iframes = [
        {
            title: "App Summary",
            url: "http://127.0.0.1:3000/embed/app_summary",
            class: "col-md-4 col-sm-12",
            height: 350
        },
        {
            title: "Feedback Summary",
            url: "http://127.0.0.1:3000/embed/feedback_summary",
            class: "col-md-4 col-sm-12",
            height: 350
        },
        {
            title: "Clothes Summary",
            url: "http://127.0.0.1:3000/embed/clothes_summary",
            class: "col-md-4 col-sm-12",
            height: 350
        },
        {
            title: "Clothes Monthly Created",
            url: `http://127.0.0.1:3000/embed/clothes_monthly_created/${selectedYear}`,
            class: "col-12",
            height: 420
        },
        {
            title: "Most Clothes Context",
            url: "http://127.0.0.1:3000/embed/most_clothes_context",
            class: "col-12",
            height: 520
        },
        {
            title: "Outfit Monthly Used",
            url: `http://127.0.0.1:3000/embed/outfit_monthly_used/${selectedYear}`,
            class: "col-12",
            height: 560
        },
    ];

    return (
        <>
            <OrganismsNavbar/>
            <div className="content">
                <div className="d-inline-block">
                    <MoleculesFilterYear onChange={(year) => setSelectedYear(year)} />
                </div>
                <div className="row">
                    {
                        iframes.map((item, idx) => (
                            <div className={item.class} key={idx}>
                                <AtomsIFrame key={idx} title={item.title} url={item.url} height={item.height}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <OrganismsFooter/>
        </>
    );
}

export default DashboardWardrobeIndex;