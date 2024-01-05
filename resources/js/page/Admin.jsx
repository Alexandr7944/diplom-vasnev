import ReactDOM from "react-dom/client";
import React from "react";

export const Admin = (props) => {
    return (
        <div>Admin</div>
    );
}

if (document.getElementById('admin')) {
    const Index = ReactDOM.createRoot(document.getElementById("admin"));

    Index.render(
        <React.StrictMode>
            <Admin/>
        </React.StrictMode>
    )
}
