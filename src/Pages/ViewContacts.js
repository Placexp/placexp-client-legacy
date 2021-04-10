import React, { useContext, useState, useEffect } from "react";
import "../Component/Admin/table.css";
import { Url } from "../Url";
import { useCookies } from "react-cookie";
import { Link, Redirect } from "react-router-dom";
import Header from "../Component/Layout/Header";
import axios from "axios";
import "./Interview.css";
import Swal from "sweetalert2";
import FuzzySearch from "fuzzy-search";
import { DropdownButton, Dropdown } from "react-bootstrap";

const ViewContacts = () => {
  const [doubtpage, setdoubtpage] = useState("view");
  const [cookies, setCookie] = useCookies(["user"]);
  const [isLoading, setLoading] = useState(false);
  const [event, setEvent] = useState([]);
  const fuzzySearcher = new FuzzySearch(event, [
    "postTitle",
    "company",
    "status",
  ]);

  useEffect(async () => {
    const response = await axios({
      method: "get",
      withCredentials: true,
      url:
        Url() +
        "/admin/contact?id=" +
        cookies.user.id +
        "&role=" +
        cookies.user.role +
        "&token=" +
        cookies.user.token,
    });
    if (response.data.code == 400) {
      console.log(response);
    } else {
      console.log(response);
      setEvent(response.data.data);
      setLoading(false);
    }
  }, [isLoading]);
  const [search, setSearch] = useState("");
  const result = fuzzySearcher.search(search);

  const handleSelect = (e) => {
    setSearch(e);
  };

  const VeriyEvents = () => {
    let card = [];

    for (let i = 0; i < result.length; i++) {
      card.push(
        <tr>
          <td data-title="Username">{result[i].name}</td>
          <td data-title="Message">{result[i].subject}</td>
        </tr>
      );
    }
    return card;
  };

  return (
    <div className="container">
      <Header />

      <br />
      <br />
      <div>
        <center>
          <div className="search_filter row">
            <form className="search">
              <label>Search</label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </center>
      </div>
      <table class="responsive-table">
        <caption>View Messages</caption>
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Message</th>
          </tr>
        </thead>

        <tbody>{VeriyEvents()}</tbody>
      </table>
    </div>
  );
};
export default ViewContacts;