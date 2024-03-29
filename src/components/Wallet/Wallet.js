import { useState } from "react";

const Wallet = ({text, count, currency=`$`}) => {
    return(
        <div>
            <h5>{text} {count} {currency}</h5>
        </div>
    )
}

export default Wallet;