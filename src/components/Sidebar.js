import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="action-parent">
      <div className="action">
        <img
          className="vuesaxlineargrid-3-icon"
          alt=""
          src="/vuesaxlineargrid3.svg"
        />
        <b className="dashboard">Dashboard</b>
      </div>
      <b className="realply">Realply</b>
      <div className="action1">
        <img
          className="vuesaxlineargrid-3-icon"
          alt=""
          src="/vuesaxlinearmessage.svg"
        />
        <b className="dashboard">Messages</b>
      </div>
      <div className="action2">
        <img
          className="vuesaxlineargrid-3-icon"
          alt=""
          src="/vuesaxlinearcalculator.svg"
        />
        <b className="dashboard">Calendar</b>
      </div>
      <div className="action3">
        <img
          className="vuesaxlineargrid-3-icon"
          alt=""
          src="/vuesaxlinearflash.svg"
        />
        <b className="dashboard">Campaigns</b>
      </div>
      <div className="action4">
        <img
          className="vuesaxlineargrid-3-icon"
          alt=""
          src="/vuesaxlinearsetting3.svg"
        />
        <b className="dashboard">Settings</b>
      </div>
      <div className="action5">
        <img
          className="vuesaxlineargrid-3-icon"
          alt=""
          src="/vuesaxlineardanger.svg"
        />
        <b className="dashboard">Help?</b>
      </div>
      <div className="action6">
        <img
          className="vuesaxlineargrid-3-icon"
          alt=""
          src="/vuesaxlinearsendsquare.svg"
        />
        <b className="dashboard">Log out</b>
      </div>
      <img className="group-icon" alt="" src="/group-185.svg" />
      <div className="frame-child1" />
      <div className="frame-container">
        <div className="your-free-trial-is-about-to-en-parent">
          <div className="your-free-trial-container">
            <span className="your-free-trial-container1">
              <p className="your-free-trial-is-about-to-en">
                <span>Your free trial is about to end in</span>
                <span className="span">{` `}</span>
              </p>
              <p className="days">10 days.</p>
            </span>
          </div>
          <div className="you-will-not-container">
            <span className="your-free-trial-container1">
              <p className="your-free-trial-is-about-to-en">
                You will not be billed during your free trial.
              </p>
              <p className="your-free-trial-is-about-to-en">&nbsp;</p>
              <p className="your-free-trial-is-about-to-en">
                To keep your projects running after the trial end, upgrade to a
                paid option.
              </p>
            </span>
          </div>
        </div>
        <div className="a">
          <b className="upgrade">Upgrade</b>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
