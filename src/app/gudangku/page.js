import AtomsIFrame from "@/components/atoms/atoms_iframe";
import OrganismsFooter from "@/components/organisms/organisms_footer";
import OrganismsNavbar from "@/components/organisms/organisms_navbar";

const DashboardGudangKuIndex = () => {    
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

export default DashboardGudangKuIndex;