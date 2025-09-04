import AtomsIFrame from "@/components/atoms/atoms_iframe";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";

const DashboardKumandendex = () => {    
    const iframes = [
        {
            title: "App Summary",
            url: "http://127.0.0.1:8000/embed/app_summary",
            class: "col-12",
            height: 250
        },
        {
            title: "Consume Summary",
            url: "http://127.0.0.1:8000/embed/consume_summary",
            class: "col-12",
            height: 250
        },
        {
            title: "BMI Summary",
            url: "http://127.0.0.1:8000/embed/bmi_summary",
            class: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
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

export default DashboardKumandendex;