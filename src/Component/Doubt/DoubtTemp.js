
import React ,{useContext,useState,useEffect} from "react";
import './Doubtsp.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
//import Sidebar from "../Component/Layout/Sidebar";

const DoubtTemp = ({id}) => {
    
  
    const [doubtpage, setdoubtpage] = useState()
   
    const [reply,setReply]=useState([]);
    const [comment,setComment]=useState([]);
    const [loading,setLoading]=useState(true);
    const [loading1,setLoading1]=useState(true);
    const [com,setCom]=useState();
    const [pa,setPa]=useState();
    const [ms,setMs]=useState();
    const [oldreply,setOldReply]=useState([]);
    const [oldcomment,setOldComment]=useState([]);
    const [oldcom,setOldCom]=useState([]);
    const Handlefetch=async e=>{
      try{


const response= await axios({
  method: 'post',
  withCredentials: true,
  url: 'http://localhost:5000/doubt/showReply',
  data:{
      QforumId:id
  }
});
const responseComment= await axios({
 method: 'post',
 withCredentials: true,
 url: 'http://localhost:5000/doubt/showComments',
 data:{
     QforumId:id
 }
});

setReply(response.data.data)
setComment(responseComment.data.data)
console.log(reply);
console.log(comment);

for(let i=0;i<comment.length;i++)
{
if(!graph[comment[i].PCmtId])
{
graph[comment[i].PCmtId]=[{id:comment[i]._id,msg:comment[i].message,name:comment[i].userId.personalDetails.name,register:comment[i].userId.personalDetails.registerNo}];
}
else
{
graph[comment[i].PCmtId].push({id:comment[i]._id,msg:comment[i].message,name:comment[i].userId.personalDetails.name,register:comment[i].userId.personalDetails.registerNo});
}


}
//jhj
setCom(graph)
setOldCom(com);
setOldReply(reply)
setOldComment(comment);
console.log(com)
setLoading(false);

      }catch(err)
      {
        console.log(err);
      }

    };
    const Get=()=>{
      if(loading)
      Handlefetch();
    }
    const handleComment=async(e)=>{
try{
e.preventDefault();
setLoading(true);
const response= await axios({
  method: 'post',
  withCredentials: true,
  url: 'http://localhost:5000/doubt/addComment',
  data:{
      QforumId:id,
      message:ms,
      PCmtId:pa
  }
});

setMs('');
//setLoading(false);
}catch(err)
{
console.log(err);
}
    };
    const displayReply=()=>{
return (<div >
  
  <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Post Your Reply</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div  className=" h-75  px-4 p-3  "> 
    
    <form>
    <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-10">
          <textarea type="text"  value={ms} onChange={e=>setMs(e.target.value)} class="form-control" id="inputPassword"></textarea>
        </div>
      </div>
    
 
      
    </form>
    
    </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onClick={handleComment}>Save changes</button>
        </div>
      </div>
    </div>
  </div>
  </div>);
    };
    const handleReply=async(e)=>{
      try{
        e.preventDefault();
        setLoading(true);
        const response= await axios({
          method: 'post',
          withCredentials: true,
          url: 'http://localhost:5000/doubt/addReply',
          data:{
              QforumId:id,
              message:ms,
              
          }
        });
      
        setMs('');
       // setLoading(false)
      }catch(err)
      {
        console.log(err);
      }
          };
   let parent=[];
   var graph=[];
    const [cookies, setCookie] = useCookies(['user']); 
const viewComment=(com,child)=>{

const card=[];
for(let i=0;i<com[child].length;i++)
{
  card.push( <div class="media">
  
 <div class="media-heading">
<button class="btn btn-default btn-xs" type="button" data-toggle="collapse" data-target={"#collapseOne"+com[child][i].id} aria-expanded="true" aria-controls="collapseExample"><i class="fas fa-minus"  aria-hidden="true"></i></button> <span class="label label-info">{com[child][i].name+com[child][i].register}</span>  12 hours ago
 </div>

 <div class="panel-collapse collapse in" id={"collapseOne"+com[child][i].id}>

   <div class="media-left">
     <div class="vote-wrap">
       <div class="save-post">
         <a href="javascript:void(0)"></a>
       </div>
       <div class="vote up">
         <i class="glyphicon glyphicon-menu-up"></i>
       </div>
       <div class="vote inactive">
         <i class="glyphicon glyphicon-menu-down"></i>
       </div>
     </div>
   {' '}
   </div>
   {' '}


   <div class="media-body">
<p>{com[child][i].msg}</p>
     <div class="comment-meta">
       <span><a href="javascript:void(0)">delete</a></span>
       <span><a href="javascript:void(0)">report</a></span>
       <span><a href="javascript:void(0)">hide</a></span>
       <span>
                 <a class="" role="button" data-toggle="modal" data-target="#exampleModal"  onClick={e=>setPa(child)}>reply</a>
               </span>
              
       <div class="collapse" id={"replyCommentT"+com[child][i].id}>
         <form >
           <div class="form-group">
             <label for="comment">Your Comment</label>
             <textarea  name="comment" class="form-control" rows="3"></textarea>
           </div>
           <button type="submit" class="btn btn-default">Send</button>
         </form>
       </div>
     </div>
 {com[com[child][i].id]?viewComment(com,com[child][i].id):''}
   </div>
 </div>
 {' '}

</div>)
}
return card
};
  const viewReply=(com,reply)=>{
const card=[]
for(let i=0;i<reply.length;i++)
{
  card.push( <div class="media">
  {' '}

 <div class="media-heading">
   <button class="btn btn-default btn-xs" type="button" data-toggle="collapse" data-target={"#collapseOne"+reply[i]._id} aria-expanded="true" aria-controls="collapseExample"><span class="glyphicon glyphicon-minus" aria-hidden="false"></span></button> <span class="label label-info">{reply[i].userId.personalDetails.name+reply[i].userId.personalDetails.registerNo}</span>  12 hours ago
 </div>

 <div class="panel-collapse collapse show" id={"collapseOne"+reply[i]._id}>

  <br/>
   {' '}


   <div class="media-body">
<p>{reply[i].message}</p>
     <div class="comment-meta">
       <span><a href="javascript:void(0)"><i class="fas fa-trash-alt"></i></a></span>
       <span><a href="javascript:void(0)">report</a></span>
       <span><a href="javascript:void(0)">hide</a></span>
       <span>
                 <a class="" role="button" data-toggle="modal" data-target="#exampleModal" onClick={e=>setPa(reply[i]._id)}><i class="fas fa-reply"></i></a>
             
               </span>
       <div class="collapse" id={"replyCommentT"+reply[i]._id}>
         <form>
           <div class="form-group">
             <label for="comment">Your Comment</label>
             <textarea name="comment" class="form-control" rows="3"></textarea>
           </div>
           <button type="submit" class="btn btn-default">Send</button>
         </form>
       </div>
     </div>
     {com[reply[i]._id]?( <button class="btn btn-secondary btn-xs" type="button" data-toggle="collapse" data-target={"#showReply"+reply[i]._id} aria-expanded="true" aria-controls="collapseExample">Show Reply</button>):''}
    
     <div class="panel-collapse collapse in" id={"showReply"+reply[i]._id}>
 {com[reply[i]._id]?viewComment(com,reply[i]._id):''}
 </div>
   </div>
 </div>
</div>
)
}
return card;
  };
        

        return (<div><h3>Comment</h3><hr style={{border:"2px solid purple"}}/>
            
            
            <div class="container">
  <div class="post-comments">

    <form onSubmit={handleReply}>
      <div class="form-group">
        <label for="comment">Your Comment</label>
        <textarea name="comment" value={ms} onChange={e=>setMs(e.target.value)} placeholder="Add your public comment" class="form-control" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>

    <div class="comments-nav">
      <ul class="nav nav-pills">
        <li role="presentation" class="dropdown">
        
          <ul class="dropdown-menu">
         
          </ul>
        </li>
      </ul>
    </div>

    <div >
    {loading?Get():''}
    {loading?viewReply(oldcom,oldreply):viewReply(com,reply)}

    
  {displayReply()}
        </div>
    
      </div>

    </div>

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>)
};

export default DoubtTemp;