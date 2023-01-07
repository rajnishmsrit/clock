import {useState, useEffect} from "react";

function Clock () {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { timeStyle: "medium" }));

    setInterval(function () {setTime(new Date().toLocaleTimeString([], { timeStyle: "medium" }))}, 1000);

    return <div><span className="current-time">{time.toString()}</span></div>
}

export default Clock