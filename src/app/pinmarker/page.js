import AtomsIFrame from "@/components/atoms/atoms_iframe";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";

const DashboardPinmarkerIndex = () => {    
    const iframes = [
        {
            title: "Feedback Comparison",
            url: "http://127.0.0.1:8080/EmbedController/feedback_distribution",
            class: "col-md-4 col-sm-12"
        },
        {
            title: "Most Visited Pin Category",
            url: "http://127.0.0.1:8080/EmbedController/most_visited_pin_category",
            class: "col-md-4 col-sm-12"
        },
        {
            title: "Most Active User",
            url: "http://127.0.0.1:8080/EmbedController/most_active_user",
            class: "col-md-4 col-sm-12"
        },
        {
            title: "Bot Distrubution",
            url: "http://127.0.0.1:8080/EmbedController/distribution_bot",
            class: "col-12"
        },
        {
            title: "Pin Visit Distribution",
            url: "http://127.0.0.1:8080/EmbedController/distribution_pin_visit",
            class: "col-12"
        },
        {
            title: "Apps Summary",
            url: "http://127.0.0.1:8080/EmbedController/apps_summary",
            class: "col-lg-6 col-md-12"
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
                                <AtomsIFrame key={idx} title={item.title} url={item.url}/>
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