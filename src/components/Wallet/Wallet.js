import { useState } from "react";

const Wallet = ({text, count}) => {
// const [balance, setBalance] = useState(0);
    return(
        <div className="nm-concave-yellowBunker rounded-full p-2">
            <h5>{text} {count}</h5>
        </div>
    )
}

export default Wallet;