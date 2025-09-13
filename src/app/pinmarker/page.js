"use client"
import AtomsIFrame from "@/components/atoms/atoms_iframe";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";
import { useState } from "react";
import MoleculesFilterYear from "../../components/molecules/filter_year";

const DashboardPinmarkerIndex = () => {    
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

    const iframes = [
        {
            title: "Feedback Comparison",
            url: "http://127.0.0.1:8080/EmbedController/feedback_distribution",
            class: "col-md-4 col-sm-12",
            height:null
        },
        {
            title: "Most Visited Pin Category",
            url: "http://127.0.0.1:8080/EmbedController/most_visited_pin_category",
            class: "col-md-4 col-sm-12",
            height:null
        },
        {
            title: "Most Active User",
            url: "http://127.0.0.1:8080/EmbedController/most_active_user",
            class: "col-md-4 col-sm-12",
            height:null
        },
        {
            title: "Bot Distrubution",
            url: "http://127.0.0.1:8080/EmbedController/distribution_bot",
            class: "col-12",
            height:500
        },
        {
            title: "Pin Visit Distribution",
            url: "http://127.0.0.1:8080/EmbedController/distribution_pin_visit",
            class: "col-12",
            height:500
        },
        {
            title: "Apps Summary",
            url: "http://127.0.0.1:8080/EmbedController/apps_summary",
            class: "col-lg-6 col-md-12",
            height:150
        },
        {
            title: "Total Pin Created Monthly",
            url: `http://127.0.0.1:8080/EmbedController/total_pin_created_monthly_by_year?year=${selectedYear}`,
            class: "col-12",
            height:500
        },
        {
            title: "Total Visit Monthly",
            url: `http://127.0.0.1:8080/EmbedController/total_visit_monthly_by_year?year=${selectedYear}`,
            class: "col-12",
            height:500
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

export default DashboardPinmarkerIndex;