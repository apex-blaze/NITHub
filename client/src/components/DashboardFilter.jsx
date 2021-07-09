import React,{useState} from 'react'
import Ajax from "../apis/ajax";
import "../components/css/Dashboard.css";
import { useHistory } from "react-router-dom";
function DashboardFilter() {
  const [branchtype,setBranchtype]=useState("");
  function onChange(e, fun) {
    fun(e.target.value);
  }
  let history = useHistory();
function restart(){
    history.go(0);
}
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("branchtype", branchtype);
    const respo = await Ajax.post(`/filter`, formData);
    if (respo.status === 200) {
      console.log("Filter successfully");
      history.go(0);
    } else {
      console.log("Error while Filtering");

    }
    
  }

    return (
        <div className="part1" style={{height:"15rem",display:"block"}} id="partupload">
      <div className="file">
        <form
          action="/filter"
          method="POST"
          onSubmit={handleSubmit}

        >
          <label
            className="dashboard-para"
            style={{ fontSize: "1.6rem" }}
            htmlFor="Description"
          >
            Filter:
          </label>
          <hr className="profile-hr1" />
          <select
            id="types"
            required="required"
            name="types"
            className="upload-menu"
            onChange={(e) => onChange(e, setBranchtype)}
          >
            <option value="">Notices..</option>
            <option value="all">All..</option>
            <option value="ECE">
              Electronics and Communication Engineering
            </option>
            <option value="CSE">Computer Science Engineering</option>
            <option value="Electrical">Electrical Engineering</option>
            <option value="Civil">Civil Engineering</option>
            <option value="Mechanical">Mechanical Engineering</option>
            <option value="Material">Material Engineering</option>
            <option value="Architecture">Architecture Engineering</option>
          </select>
          <button style={{marginTop:"3.5rem"}} onClick={restart} className="submit-button">Filter!!</button>
        </form>
      </div>
    </div>
    )
}

export default DashboardFilter
