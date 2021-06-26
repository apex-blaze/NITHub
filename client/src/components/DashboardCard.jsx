import React,{useState} from 'react';
import Ajax from "../apis/ajax";
import "../components/css/Dashboard.css";

function DashboardCard(props) {
    const [more,setMore]=useState(true);
    var desc=props.description;
    var len=desc.length;
    let less=desc.slice(0,70);
    let mor=desc.slice(71,len);
    console.log(props)
    return (
        <>
            <div className="card card-body" style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}> 
            <div>
              <h2 className="dashboard-titl">   {props.title}
              </h2>
                <p>{less}<span  className={more?"showless":"showmore"} style={{color:"black",fontWeight:"normal"}}> {mor}</span></p>
               <a className={more?"read-more":"read-less"} style={{color:"#00ba8e",cursor:"pointer"}} onClick={()=>setMore(!more)} >Read More..</a>
               <a className={more?"read-less":"read-more"} style={{color:"#00ba8e",cursor:"pointer"}} onClick={()=>setMore(!more)} >Read Less..</a>
                </div>
                <div>
                  <div className="type-of">
                    <p>Type : {props.type}</p>
                </div>
                <object  data={props.src} width="300" 
                    height="150" type="application/pdf">
                  <embed
                  className="notice-pdf"
                    id="pdfID"
                    type="application/pdf"
                    width="400"
                    height="300"
                    src={props.src}
                  />
                </object>
                <p className="date"><a download="notice-1" target="_blank" href={props.src} className="Notice-Download"><i className="fa fa-download icon" aria-hidden="true" /></a>Date Created - <span>{props.date}</span></p>
                </div>
          </div>
        </>
    )
}

export default DashboardCard
