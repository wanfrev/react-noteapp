import ".assets/css/details.css";

export const Details = (setView) => {
    return <div className = "note-details">
        <div className = "details-wrapper">
            <div className = "details-back-btn" onClick = {() => setView(false)}>
                <i className = "fa-solid fa-arrow-left"></i>
            </div>
            <h2 className="details-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur ipsam accusamus, perferendis fuga eum neque similique, quo praesentium debitis animi quam iste deleniti, laboriosam obcaecati porro culpa modi doloremque.</h2>
            <span className = "details-timeline">{note?.createdAt}</span>
            <div className = "details-body">
                <p>{note?.desc}</p>
            </div>
        </div>
    </div>;
};
