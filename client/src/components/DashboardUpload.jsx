import React,{useState} from 'react'
import Ajax from "../apis/ajax";
import "../components/css/Dashboard.css";
import { useHistory } from "react-router-dom";

function DashboardUpload() {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [type,setType]=useState("");
  const dat=new Date();
  const date=dat.getDay()+"/"+dat.getMonth()+"/"+dat.getFullYear();
  let history=useHistory();
  console.log(date);
  function onChange(e, fun) {
    fun(e.target.value);
  }
 
  function handleFile(e) {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }
 
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("pdf", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("type",type);
    formData.append("date",date);
    // for (let key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const respo = await Ajax.post(`/notices`, formData, config);
    if (respo.status === 200) {
      console.log("Notice submitted successfully");
      history.go(0);
    } else {
      console.log("Error while submitting notice");
    }
  }

  

    return (
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
             <select
            id="types"
            required="required"
            name="types"
            className="upload-menu"
            onChange={(e) => onChange(e, setType)}

          >
            <option value="">Type of Notice..</option>
            <option value="Academic">Academic</option>
            <option value="Intern/Placement">Internship/Placement</option>
            <option value="ExtraCurricular">ExtraCurricular</option>
            <option value="Others">Others</option>
          </select>
            <button className="submit-button">Upload!!</button>
          </form>
        </div>
      </div>
    )
}
export default DashboardUpload;
