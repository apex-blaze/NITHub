import React,{useEffect,useState} from "react";
import Footer from "./Footer";
import "./css/Dashboard.css";
import img from "../images/2.png";
import Ajax from "../apis/ajax";
function Dashboard() {
  const[title,settitle]=useState("");
  const[description,setdescription]=useState("");
  const [file,setFile] = useState(null);
  function onChange(e, fun) {
    fun(e.target.value);
  }

  function handleFile(e){
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();

    formData.append("pdf",file);
    formData.append("title",title);
    formData.append("description",description);

    const respo = await Ajax.post(`/notices`,{
      formData
    });
    if(respo.status === 200){
      console.log("Notice submitted successfully");
    }else{
      console.log("Error while submitting notice");
    }
  }

  useEffect(async ()=>{
    const response = await Ajax.get(`/notices`);
    // const data = response.data;
  },[]);

  return (
    <div className="Dashboard">
      <div className="Dashboard-profile">
        <div
          className="profile"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            {" "}
            <img src={img} alt="Avatar" className="avatar" />
          </div>
          <div>
            <h2 className="dashboard-para">Full Name</h2>
            <p className="dashboard-para">Branch Name</p>
            <p className="dashboard-para">NITH</p>
            <p className="dashboard-para">
              <button>+91 9876543210</button>
            </p>
          </div>
        </div>
      </div>
      <hr className="profile-hr"></hr>

      <div className="Dashboard-down">
        <div className="part1" id="partupload">
          <div className="file">
            <form action="/notices" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
              <label
                className="dashboard-para"
                style={{ fontSize: "1.6rem" }}
                htmlFor="Description"
              >
                Description:
              </label>
              <hr className="profile-hr1" />
              <input
                className="dashboard-title"
                name="title"
                type="text"
                id="Title"
                placeholder="Title.."
                onChange={(e)=>onChange(e, settitle)}
                required
              />
              <textarea
                rows="4"
                cols="50"
                className="dashboard-input"
                name="description"
                type="text"
                id="Description"
                placeholder="Description.."
                onChange={(e)=>onChange(e, setdescription)}

                required
              />
              <input
                type="file"
                name="file"
                className="dashboard-para dashboard-file"
                onChange={handleFile}
                required
              />
              <button className="submit-button">Upload!!</button>
            </form>
          </div>
        </div>
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
              >
                Feed
              </a>
              <a
                className="collapse-button"
                data-bs-toggle="collapse"
                href="#feed"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
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
              >
                News
              </a>
            </p>
          </div>

          <hr className="profile-hr1" />

          <div className="collapse" id="activity">
            <div className="card card-body">
              <p className="dashboard-para">
                1st Notification:
                <a href="/Dashboard" alt="1st one" style={{ color: "black" }}>
                  hello! I'm First one
                </a>
              </p>
            </div>
          </div>
          <div className="collapse" id="feed">
            <div className="card card-body">
              <p className="dashboard-para">
                1st Feed:
                <a href="/Dashboard" alt="1st one" style={{ color: "black" }}>
                  hello! I'm First one
                </a>
              </p>
            </div>
          </div>
          <div className="collapse" id="news">
            <div className="card card-body">
              <p className="dashboard-para">
                1st News:
                <a href="/Dashboard" alt="1st one" style={{ color: "black" }}>
                  hello! I'm First one
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="part3"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
