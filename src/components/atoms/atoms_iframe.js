import AtomsText from "./atoms_text";

export default function AtomsIFrame(props){
    return <div className="container-fluid m-3">
        <AtomsText text_type="mini_sub_heading" body={props.title}/>
        <iframe src={props.url} height="300" className="w-100" style={{ border: "none" }} title={props.title}/>
    </div>
}