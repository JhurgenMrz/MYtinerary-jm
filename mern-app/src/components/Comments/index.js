import React, {useState} from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import './Comments.css'

export const Comments = () => {

    const [comment, setValue] = useState({
        "content": ''
    })
    const [comments, setComment] = useState([
        {
            "content":"Que buen lugar! Recomendable"
        },
        {
            "content":"Me diverti mucho!"
        },
        {
            "content":"Muy divertida la guía y las actividades!"
        },
        {
            "content":"Me encantó que fuese un dia completo! Recomendado!"
        },
    ])

    const handleComment = event =>{
        if(event.key === 'Enter'){
            setComment([...comments, comment])
            setValue({"content":''})
        }
    }


    return (
        <div className="Comments">
            <h4>Comments</h4>
            <div className="Comments__container">
                {
                    comments.map((comment,index) => <p key={index}>{comment.content}</p> )
                }
            </div>
            <div className="Comments__input">
                <input 
                    value={comment.content}
                    onChange={(e)=>setValue({"content": e.target.value})}
                    type="text" 
                    placeholder="Your Comment..." 
                    name="comment"
                    onKeyDown={handleComment}
                />
                <IoMdArrowDropright style={{fontSize: "30px"}} onClick={()=>{
                    setComment([...comments, comment])
                    setValue({"content":''})
                    }} />
            </div>
        </div>
    )
}
