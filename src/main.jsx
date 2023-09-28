//----------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import Roads from "./routes/routes";

//----------------------------------------------------
//styles
// import "./styles/vendors/_normalize.scss";

//----------------------------------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Roads />
    </React.StrictMode>,
);
