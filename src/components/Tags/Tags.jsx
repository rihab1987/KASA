import "./tags.css";

function Tags({tagData}){
    if (!tagData){
        return <div>Loading tags...</div>
    }
    return(
        <div className="tags">
            {tagData.map((tag,index) =>(
                <p key={index} className="tag_item">
                    {tag}
                </p>
            ))}
        </div>

    );
}
export default Tags;
