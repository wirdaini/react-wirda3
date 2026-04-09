import { createRoot } from "react-dom/client";
import Tailwindcss from "./TailwindCSS";
import "./tailwind.css";
import TailwinddCSS from "./TailwindCSS";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveText from "./ResponsiveDesign";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* Tes */}
            {/* <FrameworkList/> */}
            {/* <FrameworkListSearchFilter/> */}
            <ResponsiveText/>
        </div>
    )