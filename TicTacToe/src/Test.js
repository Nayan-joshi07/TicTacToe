import { useState } from "react";

function Test() {
    const [color, setColor] = useState("red");
    return (
        <div>
            <h1>My FavoriteColor is {color}</h1>
        </div>
    );
}

export default Test;