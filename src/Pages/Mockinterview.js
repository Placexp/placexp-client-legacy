import React, { useEffect, useState, useContext } from "react";

import SunEditor from "suneditor-react";
import DateTimePicker from "react-datetime-picker";
import "suneditor/dist/css/suneditor.min.css";
import axios from "axios";
import FuzzySearch from "fuzzy-search";

import Fuse from "fuse.js";
import Swal from "sweetalert2";
import { Url } from "../Url";
import "./Mockinterview.css";
import { useHistory } from "react-router-dom";
import Header from "../Component/Layout/Header";
import { useCookies } from "react-cookie";
import "./Button.css";

import { DropdownButton, Dropdown } from "react-bootstrap";

const Mockinterview = () => {
  const [query, updateQuery] = useState("");
  const [data, setData] = useState("");
  const [isLoading,setLoading]=useState(true);
 
  useEffect(async() => {
        
    const response= await axios({
     method: 'get',
     withCredentials: true,
     url: Url()+"/mock/mock",
   });
   console.log(response);
   setMockInterview(response.data.data);
  
  
   setLoading(false)
 }, [isLoading]);
 const [mockinterview ,setMockInterview]=useState([]);
 const fuzzySearcher = new FuzzySearch(mockinterview, ["postTitle", "mockTitle"]);
 const [search,setSearch]=useState('');
  const result = fuzzySearcher.search(search);
  const dropDown=()=>{
    let ls=[];
    let ans=[];
    for(let i=0;i<mockinterview.length;i++)
    {
      if(ls.indexOf(mockinterview[i].mockTitle)==-1)
      {
        ls.push(mockinterview[i].mockTitle);
        ans.push( <Dropdown.Item  eventKey={mockinterview[i].Organizer}>
        {mockinterview[i].Organizer}
      </Dropdown.Item>)
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
    window.location.href = window.location.href+ "/" + i;
  };
  const handleSelect = (e) => {
    setSearch(e);
  };
  

  return (
    <>
      <div className="home"></div>
      <Header />
      <div className="Mockinterview__page">
        <div className="Mockinterview__container">
          <div className="Mockinterview__heading">
            <h1>Mock Interviews</h1>
          </div>

          <div className="search_filter">
            <form className="search">
              <label>Search</label>
              <input 
                type="text"
                value={search} 
                onChange={e=>setSearch(e.target.value)}
                />
            </form>

            <div className="filterDiv">
              <DropdownButton
                id="dropdown-item-button"
                title="Filter"
                onSelect={handleSelect}
              >
               {isLoading?(<Dropdown.Item  eventKey="">
                                Loading
                           </Dropdown.Item>):dropDown()}
              </DropdownButton>
            </div>
            
          </div>

          <div className="Mockinterview__section">
            <div className="mockinterviews">

              {isLoading?'Loading....':(result.length>0?result.map((item)=>(
               
               
                  <div className="Mockinterview__card" onClick={e=>goToEvent(item._id)}>
                    <h2 className="Mockinterview__name">{item.mockTitle}</h2>
                    <h3 className="Mockinterview_body">{item.mockBody}</h3>
                    <div className="tag__area">
                      <h3 className="Mockinterview__tag tag__header">tags: </h3>
                      <div className="Mockinterview__tag">
                        
                        <div className="tag">{item.Organizer}</div>
                        {

                       AllTags(item.tags)
                        }
                      </div>
                    </div>
                  </div>
               
                )):"No result found try again.")}            

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mockinterview;
