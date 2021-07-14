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
//   const [query, updateQuery] = useState("");
//   const [data, setData] = useState("");
//   const [isLoading,setLoading]=useState(true);
 
//   useEffect(async() => {
        
//     const response= await axios({
//      method: 'post',
//      withCredentials: true,
//      url: Url()+"/post/getall",
//    });
//    console.log(response);
//    setInterview(response.data.data);
  
  
//    setLoading(false)
//  }, [isLoading]);
//  const [interview ,setInterview]=useState([]);
//  const fuzzySearcher = new FuzzySearch(interview, ['postTitle','company']);
//  const [search,setSearch]=useState('');
//   const result = fuzzySearcher.search(search);
//   const dropDown=()=>{
//     let ls=[];
//     let ans=[];
//     for(let i=0;i<interview.length;i++)
//     {
//       if(ls.indexOf(interview[i].company)==-1)
//       {
//         ls.push(interview[i].company);
//         ans.push( <Dropdown.Item  eventKey={interview[i].company}>
//         {interview[i].company}
//       </Dropdown.Item>)
//       }
//     }
//     return ans;
//   };
//   const history = useHistory();
//   const AllTags=value=>{
//     var tag=[];
//     var t=value.split(",");
//     for(let i=0;i<t.length;i++)
//     {
//       if(t[i]!='')
//     tag.push(<div className="tag">{t[i]}</div>)
//     }
//     return tag
//   }
//   const goToEvent = i => {

//     history.push("/interview/" + i);
//    };
//   const handleSelect = (e) => {
//    setSearch(e)
//   };

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
                // value={search} 
                // onChange={e=>setSearch(e.target.value)}
                />
            </form>

            <div className="filterDiv">
              <DropdownButton
                id="dropdown-item-button"
                title="Filter"
                // onSelect={handleSelect}
              >
               {/* {isLoading?(<Dropdown.Item  eventKey="">
                                Loading
                           </Dropdown.Item>):dropDown()} */}
                <Dropdown.Item>Google</Dropdown.Item>
                <Dropdown.Item>Dropbox</Dropdown.Item>
                <Dropdown.Item>TechCrunch</Dropdown.Item>
              </DropdownButton>
            </div>
            
          </div>

          <div className="Hackathon__section">
            <div className="hackathons">

              {/* {isLoading?'Loading....':(result.length>0?result.map((item)=>(
               
               
                  <div className="Int__card" onClick={e=>goToEvent(item._id)}>
                    <h2 className="Int__name">{item.postTitle}</h2>
                    <div className="tag__area">
                      <h3 className="Int__tag tag__header">tags: </h3>
                      <div className="Int__tag">
                        
                        <div className="tag">{item.company}</div>
                        {

                       AllTags(item.tags)
                        }
                      </div>
                    </div>
                  </div>
               
                )):"No result found try again.")} */}
                
                <div className="Hackathon__card" >
                    <h2 className="Hackathon__name">Code Jam</h2>
                    <div className="tag__area">
                      <h3 className="Hackathon__tag tag__header">tags: </h3>
                      <div className="Int__tag">
                        
                        <div className="tag">Google</div>
                        
                      </div>
                    </div>
                </div>
                <div className="Hackathon__card" >
                    <h2 className="Hackathon__name">Hack Week</h2>
                    <div className="tag__area">
                      <h3 className="Hackathon__tag tag__header">tags: </h3>
                      <div className="Int__tag">
                        
                        <div className="tag">Dropbox</div>
                        
                      </div>
                    </div>
                </div>
                <div className="Hackathon__card" >
                    <h2 className="Hackathon__name">Docracy</h2>
                    <div className="tag__area">
                      <h3 className="Hackathon__tag tag__header">tags: </h3>
                      <div className="Int__tag">
                        
                        <div className="tag">TechCrunch</div>
                        
                      </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hackathon;