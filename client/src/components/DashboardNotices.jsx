import React,{useState,useEffect} from 'react'
import Ajax from "../apis/ajax";
import "../components/css/Dashboard.css"

function DashboardNotices() {
  const [sorce, setSorce] = useState("");

    const [feed, setFeed] = useState(true);
    const [activity, setActivity] = useState(false);
    const [news, setNews] = useState(true);
    const [more,setMore]=useState(true);
    const date=new Date;
  function Feeder() {
    setFeed(true);
    setActivity(false);
    setNews(false);
  }
  function Activity() {
    setFeed(false);
    setActivity(true);
    setNews(false);
  }
  function News() {
    setFeed(false);
    setActivity(false);
    setNews(true);
  }
  function onChange(e, fun) {
    fun(e.target.value);
  }
  useEffect(() => {
    async function fetchNotices() {
      const response = await Ajax.get(`/notices`);
      console.log(response);
      setSorce(`data:application/pdf;base64,${response.data[0].pdf}`);
      console.log(sorce);
    }
    fetchNotices();
  }, [sorce]);
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
                onClick={Feeder}
              >
                Feed
              </a>
              {/* <a
                className="collapse-button"
                data-bs-toggle="collapse"
                href="#feed"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={Activity}
              >
                Activity
              </a>
              <a
                className="collapse-button"
                data-bs-toggle="collapse"
                href="#news"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={News}
              >
                News
              </a> */}
            </p>
          </div>


          {/* <div
            className={activity ? "collapse-op" : "collapse-clos"}
            id="activity"
          >
            <div className="card card-body">
              <p className="dashboard-para">
                1st Notification:
                <a href="/Dashboard" alt="1st one" style={{ color: "black" }}>
                  hello! I'm activity
                </a>
              </p>
            </div>
          </div> */}
          <div className={feed ? "collapse-op" : "collapse-clos"} id="feed">
            <div className="card card-body" style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}> 
            <div>
              <h2 className="dashboard-titl">
              1st Feed:

              </h2>
                <p>Hi I'm Notice please click on read more to fully read the description.<span  className={more?"showless":"showmore"} style={{color:"black",fontWeight:"normal"}}> 
                  that functional components do not have access to a state, unlike class-based components.</span> </p>
               <a className={more?"read-more":"read-less"} style={{color:"#00ba8e",cursor:"pointer"}} onClick={()=>setMore(!more)} >Read More..</a>
               <a className={more?"read-less":"read-more"} style={{color:"#00ba8e",cursor:"pointer"}} onClick={()=>setMore(!more)} >Read Less..</a>
                
                </div>
                <div>
                <p className="Notice-Download">Type</p>
                <object data={sorce} type="application/pdf">
                  <embed
                    id="pdfID"
                    type="application/pdf"
                    width="400"
                    height="300"
                    src={sorce}
                  />
                </object>
                <p className="date"><a download="notice-1" target="_blank" href={sorce} className="Notice-Download"><i className="fa fa-download icon" aria-hidden="true" /></a>Date Created - <span>dd/mm/yyyy</span></p>

                </div>
                
          </div>
          {/* <div className={news ? "collapse-op" : "collapse-clos"} id="news">
            <div className="card card-body">
              <p className="dashboard-para">
                1st News:
                <a href="/Dashboard" alt="1st one" style={{ color: "black" }}>
                  hello! I'm News
                </a>
                <p className={more?"":""}></p>
                <a onChange={()=>setMore(true)} >Read More..</a>
              </p>
            </div>
          </div> */}
        </div>
        </div>
    )
}

export default DashboardNotices
