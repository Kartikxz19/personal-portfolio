import Col from "react-bootstrap/Col";
export const ProjectCard=({title,description,imgUrl})=>{
    return(
        <Col sm={6} md={4}>
        {/* Whole project will just have an img, on hovering you get the text */}
            <div className="proj-imgbox">
                <img src={imgUrl} alt="" />
                <div className="proj-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}