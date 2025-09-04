import AtomsIFrame from "@/components/atoms/atoms_iframe";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";

const DashboardMyRideIndex = () => {    
    const iframes = [
        {
            title: "App Summary",
            url: "http://127.0.0.1:8000/embed/app_summary",
            class: "col-xl-9 col-lg-8 col-md-7 col-md-7 col-sm-12",
            height: 250
        },
        {
            title: "Trip Summary",
            url: "http://127.0.0.1:8000/embed/trip_summary",
            class: "col-xl-3 col-lg-4 col-md-5 col-md-5 col-sm-12",
            height: 250
        },
        {
            title: "Vehicle Summary",
            url: "http://127.0.0.1:8000/embed/vehicle_summary",
            class: "col-12",
            height: 350
        },
    ];

    return (
        <>
            <OrganismsNavbar/>
            <div className="content">
                <div className="row">
                    {
                        iframes.map((item, idx) => (
                            <div className={item.class}>
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

export default DashboardMyRideIndex;