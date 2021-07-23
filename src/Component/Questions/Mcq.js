import React from 'react'
import './mcq.css'
import Header from '../Layout/Header'
import questions from './Data'
import ReactTooltip from 'react-tooltip';


function Mcq() {

    
    
    return (
        <div className="mcq_wrapper">
            <Header/>
            <div className="container p-3">
            <h1 className=" text-center mt-3 mb-5 q-title">Mock Interview MCQ Questions</h1>
            <div className="ques-wrapper m-3">
               {
                   questions.map(ques=>{
                       return (
                           <div className="ques">
                               <h4>{ques.id}{" "}{ques.title}</h4>
                                 
                                   <p> A. {ques.op1}</p>
                                   <p> B. {ques.op2}</p>
                                   <p> C. {ques.op3}</p>
                                   <p> D. {ques.op4}</p>
                                   <button type="button" class="btn btn-primary" data-tip="React-tooltip">View Answer</button>
                                   <ReactTooltip place="right" type="dark" effect="solid">
                                       <h6>{ques.correct}</h6>
                                       <p>{ques.exp}</p>
                                   </ReactTooltip>    
                           </div>
                       )
                   })
               }
            </div>
            </div>
            
        </div>
    )
}

export default Mcq
