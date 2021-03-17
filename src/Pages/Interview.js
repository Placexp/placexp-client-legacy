import React, { useEffect, useState, useContext } from "react";

import SunEditor from "suneditor-react";
import DateTimePicker from "react-datetime-picker";
import "suneditor/dist/css/suneditor.min.css";
import axios from "axios";
import FuzzySearch from "fuzzy-search";
import interviewsData from "./interviewsData.json";
import Fuse from "fuse.js";
import Swal from "sweetalert2";
import { Url } from "../Url";
import "./Interview.css";
import { useHistory } from "react-router-dom";
import Header from "../Component/Layout/Header";
import { useCookies } from "react-cookie";
import "./Button.css";

import { DropdownButton, Dropdown } from "react-bootstrap";

const Interview = () => {
  const [query, updateQuery] = useState("");
  const [data, setData] = useState("");

  const fuse = new Fuse(interviewsData, {
    keys: ["name", "branch", "company", "difficulty"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const interviewResults = query
    ? results.map((interview) => interview.item)
    : interviewsData;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  const handleSelect = (e) => {
    updateQuery(e);
  };

  return (
    <>
      <div className="home"></div>
      <Header />
      <div className="Interview__page">
        <div className="Interview__container">
          <div className="Int__heading">
            <h1>Interviews</h1>
          </div>

          <div className="search_filter">
            <form className="search">
              <label>Search</label>
              <input type="text" value={query} onChange={onSearch} />
            </form>

            <div className="filterDiv">
              <DropdownButton
                id="dropdown-item-button"
                title="Filter"
                onSelect={handleSelect}
                value={query}
              >
                <Dropdown.Item value="Amazon" as="button">
                  Amazon
                </Dropdown.Item>
                <Dropdown.Item as="button">Wipro</Dropdown.Item>
                <Dropdown.Item as="button">Paypal</Dropdown.Item>
                <Dropdown.Item as="button">Adobe</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div className="Int__section">
            <div className="interviews">
              {interviewResults.map((interview) => {
                const { name, branch, company, difficulty } = interview;
                return (
                  <div className="Int__card">
                    <h2 className="Int__name">{name}</h2>
                    <div className="tag__area">
                      <h3 className="Int__tag tag__header">tags: </h3>
                      <div className="Int__tag">
                        <div className="tag">{branch}</div>
                        <div className="tag">{company}</div>
                        <div className="tag">{difficulty}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Interview;
