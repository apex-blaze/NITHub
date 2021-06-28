import React,{useState,useEffect} from 'react'
import Ajax from "../apis/ajax";
import "../components/css/Dashboard.css"
import DashboardCard from './DashboardCard';
function DashboardNotices() {

  const header = "data:application/pdf;base64,";
  const [data, setData] = useState(null);

    const [feed, setFeed] = useState(true);

  useEffect(() => {
    async function fetchNotices() {
      const  response = await Ajax.get(`/notices`);
      console.log(response.data);
      setData(response.data);
      // setSorce(`data:application/pdf;base64,${response.data[0].pdf}`);
      // console.log(sorce);
    }
    fetchNotices();
  }, []);
    return (
        <div className="part2">
          <div className="wrap">
            <p>
              <a
                className="collapse-button"
                data-bs-toggle="collapse"
                href="#activity"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={()=>setFeed(true)}
              >
                Feed
              </a>
            </p>
          </div>

          {data && data.map(notice=>{
            return(
              <div className={feed ? "collapse-op wrapby" : "collapse-clos wrapby"} id="feed">
            <DashboardCard title={notice.title} description={notice.description} type={notice.type}  src={header+notice.pdf} date={notice.date} />
        </div>
            )
          })}
          
        </div>
    )
}

export default DashboardNotices
