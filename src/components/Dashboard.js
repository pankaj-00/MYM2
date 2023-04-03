import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-parent">
      <b className="dashboard1">Dashboard</b>
      <div className="rectangle-parent">
        <div className="frame-child2" />
        <b className="follows">Connections</b>
      </div>
      <div className="rectangle-group">
        <div className="frame-child3" />
        <b className="follows">Follows</b>
      </div>
      <div className="rectangle-container">
        <div className="frame-child4" />
        <b className="follows">Connect Invites</b>
      </div>
    </div>
  );
};

export default Dashboard;
