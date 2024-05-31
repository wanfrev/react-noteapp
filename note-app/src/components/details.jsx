import ".assets/css/details.css";

export const Details = (setView) => {
    return <div className = "note-details">
        <div className = "details-wrapper">
            <div className = "details-back-btn" onClick = {() => setView(false)}>
                <i className = "fa-solid fa-arrow-left"></i>
            </div>
            <h2 className="details-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur ipsam accusamus, perferendis fuga eum neque similique, quo praesentium debitis animi quam iste deleniti, laboriosam obcaecati porro culpa modi doloremque.</h2>
            <span className = "details-timeline">{new Date().toDateString()}</span>
            <div className = "details-body">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta porro, nam consequatur unde sit incidunt exercitationem magni et dolores architecto natus, autem at delectus, optio quo neque dolorum aliquid explicabo.
                </p>
            </div>
        </div>
    </div>;
};
