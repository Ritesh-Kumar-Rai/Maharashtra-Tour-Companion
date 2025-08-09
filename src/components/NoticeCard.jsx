import "./NoticeCard.css";

const NoticeCard = () => {
    // <!-- From Uiverse.io by anniekoop --> 
    return (
        <div className="notice-card">
            <div className="container">
                <div className="left">
                    <div className="status-ind"></div>
                </div>
                <div className="right">
                    <div className="text-wrap">
                        <p className="text-content">
                            <a className="text-link" href="#">Jane Doe</a> invited you to edit the
                            <a className="text-link" href="#">Web Design</a> file.
                        </p>
                        <p className="time">2 hours ago</p>
                    </div>
                    <div className="button-wrap">
                        <button className="primary-cta">View file</button>
                        <button className="secondary-cta">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default NoticeCard;