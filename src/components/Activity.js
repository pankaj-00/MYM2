import "./Activity.css";

const Activity = () => {
  return (
    <div className="recent-activity-parent">
      <b className="recent-activity">Recent Activity</b>
      <div className="alex-morgan-sent-container">
        <b>{`Alex Morgan `}</b>
        <span>sent you a</span>
        <b> message.</b>
      </div>
      <div className="mujo-prosper-sent-container">
        <b>{`Mujo Prosper `}</b>
        <span>sent you a</span>
        <b> connection request.</b>
      </div>
      <div className="upcoming-task-container">
        <span>Upcoming Task</span>
        <b>{` - Create a campaign for designers `}</b>
        <span>due on</span>
        <b> 02/04/2023.</b>
      </div>
      <img className="ellipse-icon" alt="" src="/ellipse-5@2x.png" />
      <img className="frame-child5" alt="" src="/ellipse-6@2x.png" />
      <img className="frame-child6" alt="" src="/ellipse-7.svg" />
      <img
        className="vuesaxlinear3square-icon"
        alt=""
        src="/vuesaxlinear3square.svg"
      />
      <img className="vector-icon" alt="" src="/vector-11.svg" />
      <img className="frame-child7" alt="" src="/vector-11.svg" />
      <div className="h-parent">
        <b className="h">24h</b>
        <div className="last">Last</div>
        <img
          className="vuesaxlineararrow-square-dow-icon2"
          alt=""
          src="/vuesaxlineararrowsquaredown.svg"
        />
      </div>
      <div className="scrollbar" />
    </div>
  );
};

export default Activity;
