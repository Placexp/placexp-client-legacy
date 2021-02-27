import React, {useRef, useEffect, useState } from "react";
import FuzzySearch from 'fuzzy-search';
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import CreateDoubt from './CreateDoubt';
import { useHistory } from "react-router-dom";
import "./View.css";
import {Url} from '../../Url';
import { useCookies } from 'react-cookie';
const View=()=>{
    const [cookies, setCookie] = useCookies(['user']);
    // const doubtQ=[{
    //     title:"Hello",
    //     subject:"Subject"

    // },{
    //     title:"Priyam",
    //     subject:"Is college off tommorow"

    // }];
    const handleLiked=async id=>{
        try{
            if(document.getElementById(id).style.color=="red")
            {

            document.getElementById(id).style.color="";
            setLoading(true);
            await   axios({
                method: 'post',
                withCredentials: true,
                url: Url()+"/user/dislike?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
                data:{
                    id:id
                }
              });
            }else
            {
            document.getElementById(id).style.color="red";
            setLoading(true);
            await   axios({
                method: 'post',
                withCredentials: true,
                url: Url()+"/user/like?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
                data:{
                    id:id
                }
              });
            }
      

        }
        catch(err)
        {
console.log(err);
        }
    }
    const history = useHistory();
    const [doubtQ,setDoubtQ]=useState([]);
    const [isLoading,setLoading]=useState(true);
    const goToChat = i => {
        //console.log(i);
                history.push("/query/" + result[i].title, { title:result[i].title,id:result[i]._id,subject:result[i].subject });
              };
    useEffect(async() => {
        
       const response= await axios({
        method: 'get',
        withCredentials: true,
        url: Url()+"/doubt/showAll?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
      });
      console.log(response);
      setDoubtQ(response.data.data);
      setLoading(false)
    }, [isLoading]);
    const [search,setSearch]=useState('');
    
    
    const doubt=()=>
    {
    const card=[];
    var p=0;
    if(search!='' && result.length==0)
    {
        card.push(<div>No result found</div>);
    }
    else
    {
    for(let i=0;i<result.length;i++)
    {
        if(result[i].isVisible.includes(cookies.user.personalDetails.program) || result[i].authorId._id==cookies.user.id||cookies.user.role=='C'||result[i].isVisible=='ALL')
        card.push(

            <div><div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                   
                                   
                                <i class="fas fa-user-graduate fa-2x" ></i>
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">{result[i].authorId.personalDetails.name}</div>
                                    <div class="h7 text-muted">{result[i].authorId.personalDetails.registerNo}</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Hide</a>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                        <a class="card-link" href="#">
        <h5 class="card-title">{result[i].title}</h5>
                        </a>

                        <p class="card-text " dangerouslySetInnerHTML={{__html:result[i].subject}}>
                            
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="javascript:void(0)" class="card-link" style={{color:  result[i].isLikedBy.includes(cookies.user.id)?"red":""}} id={result[i]._id} onClick={e=>handleLiked(e.target.id)}>{result[i].isLikedBy.length==0?'':result[i].isLikedBy.length}<i  class="fab fa-gratipay" aria-hidden="true"></i>Like </a>
                        <a href="#" class="card-link"><i class="fa fa-comment" ></i> Comment</a>
                     {   //<a href="#" class="card-link"><i class="far fa-paper-plane"></i>Share</a>
                     }
                        <a href="" class="card-link" onClick={e=>goToChat(i)}><i class="fas fa-info-circle"></i>More Info</a>
        
                    </div>
                
                </div>
<br/></div>

        );
        
    }   }
    return card;
    };
    const fuzzySearcher = new FuzzySearch(doubtQ, ['title', 'subject']);
    const result = fuzzySearcher.search(search);
return (<div>
<br/><br/>


    <div class="container-fluid gedf-wrapper">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="h5">{cookies.user.personalDetails.registerNo}</div>
                        <div class="h7 text-muted">Fullname : {cookies.user.personalDetails.name}</div>
                        <div class="h7">
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="h6 text-muted">Followers</div>
                            <div class="h5">0</div>
                        </li>
                        <li class="list-group-item">
                            <div class="h6 text-muted">Following</div>
                            <div class="h5">0</div>
                        </li>
                        <li class="list-group-item"></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 gedf-main">

               
                <div class="card gedf-card">

                    <div class="card-header">
                   
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Search Any Question</a>
                            </li>
                         
                        </ul>
                    
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div class="form-group">
                                    <label class="sr-only" for="message">post</label>
                                    <input type="text" class="form-control" id="message" rows="3" placeholder="What are you thinking?" value={search}
        onChange={e => setSearch(e.target.value)}/>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                <div class="form-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile"/>
                                        <label class="custom-file-label" for="customFile">Upload image</label>
                                    </div>
                                </div>
                                <div class="py-4"></div>
                            </div>
                        </div>
                        <div class="btn-toolbar justify-content-between">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-primary">Search</button>
                            </div>
                            <div class="btn-group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-danger " onClick={e=>setLoading(true)}>
                                    <i class="fas fa-redo" color="orange"></i>
                                </button>
                              
                            </div>
                        </div>
                    </div>
                </div>
          <br/>
          <CreateDoubt/>
         
          <LazyLoad height={200} offset={100}>
                {doubt()}
                </LazyLoad>
                
<br/>
            </div>
            <div class="col-md-3">
                <div class="card gedf-card">
                    <div class="card-body">
                        <h5 class="card-title">Any Doubt</h5>
                    
                        <p class="card-text">Cant find your question then why not post it and get answered</p>
                        <button data-toggle="modal" data-target="#exampleModal" className="btn btn-secondary">Add Question</button>
                    
                    </div>
                </div>
                <br/>

            </div>
        </div>
    </div>











</div>)
}
export default View;