import AtomsIFrame from "@/components/atoms/atoms_iframe";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";

const DashboardWardrobeIndex = () => {    
    const iframes = [
        {
            title: "App Summary",
            url: "http://127.0.0.1:3001/embed/app_summary",
            class: "col-md-4 col-sm-12",
            height: 350
        },
        {
            title: "Feedback Summary",
            url: "http://127.0.0.1:3001/embed/feedback_summary",
            class: "col-md-4 col-sm-12",
            height: 350
        },
        {
            title: "Clothes Summary",
            url: "http://127.0.0.1:3001/embed/clothes_summary",
            class: "col-md-4 col-sm-12",
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

export default DashboardWardrobeIndex;