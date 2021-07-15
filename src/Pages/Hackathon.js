import React, { useEffect, useState, useContext } from "react";

import SunEditor from "suneditor-react";
import DateTimePicker from "react-datetime-picker";
import "suneditor/dist/css/suneditor.min.css";
import axios from "axios";
import FuzzySearch from "fuzzy-search";

import Fuse from "fuse.js";
import Swal from "sweetalert2";
import { Url } from "../Url";
import "./hackathon.css";
import { useHistory } from "react-router-dom";
import Header from "../Component/Layout/Header";
import { useCookies } from "react-cookie";
import "./Button.css";

import { DropdownButton, Dropdown } from "react-bootstrap";

const Hackathon = () => {
  const [query, updateQuery] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
    console.log("hello");
    const response = await axios({
      method: "get",
      withCredentials: true,
      url: Url() + "/hackathon/hackathon",
    });
    console.log(response);
    setHackathon(response.data.data);

    setLoading(false);
  }, [isLoading]);
  const [hackathon, setHackathon] = useState([]);
  const fuzzySearcher = new FuzzySearch(hackathon, ["postTitle", "company"]);
  const [search, setSearch] = useState("");
  const result = fuzzySearcher.search(search);
  const dropDown = () => {
    let ls = [];
    let ans = [];
    for (let i = 0; i < hackathon.length; i++) {
      if (ls.indexOf(hackathon[i].company) == -1) {
        ls.push(hackathon[i].company);
        ans.push(
          <Dropdown.Item eventKey={hackathon[i].company}>
            {hackathon[i].company}
          </Dropdown.Item>
        );
      }
    }
    return ans;
  };
  const history = useHistory();
  const AllTags = (value) => {
    var tag = [];

    var t = value.toString().split(",");
    for (let i = 0; i < t.length; i++) {
      if (t[i] != "") tag.push(<div className="tag">{t[i]}</div>);
    }
    return tag;
  };
  const goToEvent = (i) => {
    history.push("/hackathon/" + i);
  };
  const handleSelect = (e) => {
    setSearch(e);
  };

  return (
    <>
      <div className="home"></div>
      <Header />
      <div className="Hackathon__page">
        <div className="Hackathon__container">
          <div className="Hackathon__heading">
            <h1>Hackathons</h1>
          </div>

          <div className="search_filter">
            <form className="search">
              <label>Search</label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <div className="filterDiv">
              <DropdownButton
                id="dropdown-item-button"
                title="Filter"
                onSelect={handleSelect}
              >
                {isLoading ? (
                  <Dropdown.Item eventKey="">Loading</Dropdown.Item>
                ) : (
                  dropDown()
                )}
                <Dropdown.Item>Google</Dropdown.Item>
                <Dropdown.Item>Dropbox</Dropdown.Item>
                <Dropdown.Item>TechCrunch</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div className="Hackathon__section">
            <div className="hackathons">
              {isLoading
                ? "Loading...."
                : result.length > 0
                ? result.map((item) => (
                    <div
                      className="Hackathon__card"
                      onClick={(e) => {
                        goToEvent(item._id);
                        console.log(item);
                      }}
                    >
                      <h2 className="Hackathon__name">{item.hackathonTitle}</h2>
                      <h3 className="Hackathon_body">{item.hackathonBody}</h3>
                      <div className="tag__area">
                        <h3 className="Hackathon__tag tag__header">tags: </h3>
                        <div className="Hackathon__tag">
                          <div className="tag">{item.company}</div>
                          {AllTags(item.tags)}
                        </div>
                      </div>
                    </div>
                  ))
                : "No result found try again."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hackathon;
