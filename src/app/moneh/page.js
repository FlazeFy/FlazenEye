import AtomsIFrame from "@/components/atoms/atoms_iframe";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";

const DashboardMonehIndex = () => {    
    const iframes = [
        {
            title: "Flow Summary",
            url: "http://127.0.0.1:3001/embed/flow_summary",
            class: "col-md-4 col-sm-12",
            height: 350
        },
        {
            title: "Pocket Summary",
            url: "http://127.0.0.1:3001/embed/pocket_summary",
            class: "col-md-4 col-sm-12",
            height: 350
        },
        {
            title: "User Summary",
            url: "http://127.0.0.1:3001/embed/user_summary",
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

export default DashboardMonehIndex;