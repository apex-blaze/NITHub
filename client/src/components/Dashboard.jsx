import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "./css/Dashboard.css";
import img from "../images/2.png";
import Ajax from "../apis/ajax";
function Dashboard() {
  let ley;
  const [sorce, setSorce] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [feed, setFeed] = useState(false);
  const [activity, setActivity] = useState(false);
  const [news, setNews] = useState(true);
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

  function handleFile(e) {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }
  function openPDF(link) {
    window.open(link);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("pdf", file);
    formData.append("title", title);
    formData.append("description", description);
    // for (let key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const respo = await Ajax.post(`/notices`, formData, config);
    if (respo.status === 200) {
      console.log("Notice submitted successfully");
    } else {
      console.log("Error while submitting notice");
    }
  }

  useEffect(() => {
    async function fetchNotices() {
      const response = await Ajax.get(`/notices`);
      console.log(response);
      setSorce(`data:application/pdf;base64,${response.data[0].pdf}`);
      console.log(sorce);
      // const buff = response.data[0].pdf;
      // console.log(buff);
      // const data = response.data;
    }
    fetchNotices();
  }, [sorce]);

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
            <form
              action="/notices"
              method="POST"
              onSubmit={handleSubmit}
              enctype="multipart/form-data"
            >
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
                onChange={(e) => onChange(e, setTitle)}
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
                onChange={(e) => onChange(e, setDescription)}
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
                onClick={Feeder}
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
              </a>
            </p>
          </div>

          <hr className="profile-hr1" />

          <div
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
          </div>
          <div className={feed ? "collapse-op" : "collapse-clos"} id="feed">
            <div className="card card-body">
              <p className="dashboard-para">
                1st Feed:
                <a href="/Dashboard" alt="1st one" style={{ color: "black" }}>
                  hello! I'm Feed
                </a>
                <button>Download</button>
                <object data={sorce} type="application/pdf">
                  <embed
                    id="pdfID"
                    type="application/pdf"
                    width="400"
                    height="300"
                    src={sorce}
                  />
                </object>
              </p>
            </div>
          </div>
          <div className={news ? "collapse-op" : "collapse-clos"} id="news">
            <div className="card card-body">
              <p className="dashboard-para">
                1st News:
                <a href="/Dashboard" alt="1st one" style={{ color: "black" }}>
                  hello! I'm News
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
