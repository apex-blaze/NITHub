import React,{useState} from 'react';
import "../components/css/Dashboard.css";

function DashboardCard(props) {
    const [more,setMore]=useState(true);
    var desc=props.description;
    var len=desc.length;
    let less=desc.slice(0,81);
    let mor=desc.slice(82,len);
    console.log(props)
    return (
        <>
            <div className="card card-body  wrap-card" > 
            <div>
              <h2 className="dashboard-titl">   {props.title}
              </h2>
                <p>{less}<span  className={more?"showless":"showmore"} style={{color:"black",fontWeight:"normal"}}> {mor}</span></p>
               <a className={more?"read-more":"read-less"} style={{color:"#00ba8e",cursor:"pointer"}} onClick={()=>setMore(!more)} >Read More..</a>
               <a className={more?"read-less":"read-more"} style={{color:"#00ba8e",cursor:"pointer"}} onClick={()=>setMore(!more)} >Read Less..</a>
                </div>
                <div className="pdf-wala">
                  <div className="type-of">
                    <p>Type : {props.type}</p>
                </div>
                <object  data={props.src} className="notice-pdf" type="application/pdf">
                
                </object>
                <p className="date"><a download="notice-1" target="_blank" href={props.src} className="Notice-Download"><i className="fa fa-download icon" aria-hidden="true" /></a>Date Created  <span>{props.date}</span></p>
                </div>
          </div>
        </>
    )
}

export default DashboardCard
