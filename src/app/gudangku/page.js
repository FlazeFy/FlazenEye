"use client"
import { useState } from "react";
import AtomsIFrame from "@/components/atoms/atoms_iframe";
import MoleculesFilterYear from "@/components/molecules/filter_year";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";

const DashboardGudangKuIndex = () => {    
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

    const iframes = [
        {
            title: "Total Inventory By Room",
            url: "http://127.0.0.1:8000/embed/distribution_inventory_room",
            class: "col-12"
        },
        {
            title: "Total Inventory By Category",
            url: "http://127.0.0.1:8000/embed/distribution_inventory_category",
            class: "col-12"
        },
        {
            title: "Total Inventory By Merk",
            url: "http://127.0.0.1:8000/embed/distribution_inventory_merk",
            class: "col-12"
        },
        {
            title: "Total Inventory By Favorite",
            url: "http://127.0.0.1:8000/embed/distribution_inventory_favorite",
            class: "col-12"
        },
        {
            title: "Total Inventory Created Monthly",
            url: `http://127.0.0.1:8000/embed/inventory_created_per_month/${selectedYear}`,
            class: "col-12",
        },
        {
            title: "Total Report Created Monthly",
            url: `http://127.0.0.1:8000/embed/report_created_per_month/${selectedYear}`,
            class: "col-12",
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
                            <div className={item.class}>
                                <AtomsIFrame key={idx} title={item.title} url={item.url} height={700}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <OrganismsFooter/>
        </>
    );
}

export default DashboardGudangKuIndex;