import { useState } from "react";

const Wallet = () => {
const [balance, setBalance] = useState(0);
    return(
        <div>
            <h5>Your balance: {balance}</h5>
        </div>
    )
}

export default Wallet;