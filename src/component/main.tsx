import React from "react"
import '../assets/fontawesome-free-5.15.4-web/css/all.min.css'
import '../css/style.css'
import './Addtodo'
import './Listodo'
// import AddTodo from "./Addtodo"
import Listodo from "./Listodo"

function Main() {
    return (
        <body>
            <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
                {/* <!-- App title section --> */}
                <div className="row m-1 p-4">
                    <div className="col">
                        <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                            <i className="fa fa-check bg-primary text-white rounded p-2"></i>
                            <u>My Todo-s</u>
                        </div>
                    </div>
                </div>
                {/* <!-- Create todo section --> */}
                <div className="row m-1 p-3">
                    <Listodo/>
                   
                </div>
                <div className="p-2 mx-4 border-black-25 border-bottom"></div>
                {/* <!-- View options section --> */}
                
                {/* <!-- Todo list section --> */}
                
            </div>
        </body>
    )
}
export default Main;