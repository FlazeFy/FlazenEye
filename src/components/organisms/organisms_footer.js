import AtomsText from "../atoms/atoms_text";

export default function OrganismsFooter() {
    return  (
        <footer className="footer mt-auto py-3">
            <div className="w-100 pb-2 py-4 px-4">
                <div className="row text-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 pb-2">
                        <AtomsText text_type="mini_sub_heading" body={<span className="text-white">FlazenEye</span>}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 pb-2">
                        <AtomsText text_type="mini_sub_heading" body={<span className="text-white">2025 FlazeFy, Leo</span>}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 pb-2">
                        <AtomsText text_type="mini_sub_heading" body={<span className="text-white">Parts Of FlazenApps</span>}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}