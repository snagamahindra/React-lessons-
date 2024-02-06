import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div className="d-flex p-4">
            <Link to="/" className="p-2">Landing</Link>
            <Link to="form-handling" className="p-2">FormHandling</Link>
            <Link to="theme-context" className="p-2">ThemeContext</Link>
            <Link to="state-management" className="p-2">StateManagement</Link>
            <Link to="local-storage" className="p-2">LocalStorage</Link>
        </div>
    )
}