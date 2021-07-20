import React from 'react';
import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";

class Upvote extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           steps: 1,
           count: 0,
           //hasUpvoted: false,
       }
   }
   increment = () => {
     this.setState({
        steps: this.state.steps + 1,
     })
     
   }
   decrement = () => {
      this.setState({
        steps: this.state.steps - 1,
      })
   }
   render() {
     return (
        <div>
            <IoArrowUpOutline onClick={this.increment} />
            <span>{Math.pow(this.state.steps, 2)}</span>
            <IoArrowDownOutline onClick={this.decrement} />
        </div>
    );
  }
}
export default Upvote;




// import React, { useState } from "react";
// import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";

// const VoteButtons = ({ post }) => {
//   const handleClick = async (type) => {
//     // Do calculation to save the vote.
//     let votesCount = 0;

//     const date = new Date();

//     if (type === "upvote") {
//       votesCount = votesCount + Math.pow(1, 2);
//     } else {
//       votesCount = votesCount - Math.pow(1, 2);
//     }
//   };

//   return (
//     <>
//       <IoArrowUpOutline onClick={() => handleClick("upvote")} />
//       <IoArrowDownOutline onClick={() => handleClick("downvote")} />
//     </>
//   );
// };

// export default VoteButtons;
