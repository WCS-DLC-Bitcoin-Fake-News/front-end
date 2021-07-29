import { useState, useEffect } from "react"

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  const containerStyles = {
    lineHeight: "2rem",
    width: "380px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 40,
  }
  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  }
  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: "raleway"
  }
  return (
    <div className="nm-inset-white h-8 items-center" style={containerStyles}>
      <div className="nm-flat-yellowBunker" style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

const Filters = ({ bunker }) => {
  console.log("Here in filters...", bunker);

  const [ authorEarned, setAuthorEarned ] = useState(0)
  const [ proEarned, setProEarned ] = useState(0)
  const [ winnerGrowth, setWinnerGrowth ] = useState(0)
  const [ authorGrowth, setAuthorGrowth ] = useState(0);
  const [ isWinner, setIsWinner ] = useState("pro");
  const [ proStake, setProStake ] = useState(0);
  const [ proPercentage, setProPercentage ] = useState(0);
  const [ totalStake, setTotalStake ] = useState(0);
  const [numberOfProVotants, setNumberOfProVotants] = useState(0)
  const [numberOfConVotants, setNumberOfConVotants] = useState(0)

  // console.log("yo", initialProStake, initialConStake);

  // const declareWinner = () => {
  //   if(intialProVotes > initialDownVotes) {
  //     setIsWinner("pro")
  //   }
  //   else {
  //     setIsWinner("con")
  //   }
  // }
  
  const dispatchFunds = () => {
    setTotalStake(bunker.stake) 
    // const initialBunkerStake = bunker.initialStake;
  
    const initialProStake = bunker.votes ? bunker.votes.reduce((sum, li) => {
      const result = li.pro ? sum + li.stake : 1;
      console.log(result)
      return result
    }, 0) : 0

    const initialConStake = bunker.votes ? bunker.votes.reduce((sum, li) => {
      const result = !li.pro ? sum + li.stake : 1;
      console.log(result)
      return result
    }, 0) : 0

    const numberOfProVotants = bunker.votes ? bunker.votes.filter((vote) => vote.pro).length : 1
    const numberOfConVotants = bunker.votes ? bunker.votes.filter((vote) => !vote.pro).length : 1

    setNumberOfProVotants(numberOfProVotants)
    setNumberOfConVotants(numberOfConVotants)

    console.log("test", initialConStake);
    console.log("test2", initialProStake);

    // declareWinner();
    setAuthorEarned(initialConStake / 2);
    setProEarned(initialConStake / 2);
    setWinnerGrowth(calculateGrowth(initialProStake, proEarned))
    // setAuthorGrowth(calculateGrowth(initialBunkerStake, authorEarned))
    setProPercentage((numberOfProVotants / numberOfConVotants | 1) * 100);

  }
 
  const calculateGrowth = (before, after) => {
    console.log("goog", before - after / before)
    return before - after / before 
  }
  
  useEffect(() => {
    bunker && dispatchFunds()

  }, [bunker])

  return (
    <div style={{ position: "fixed"}}>
      <div
        className="w-full bg-white rounded-lg p-5 sticky"
        style={{ height: "max-content" }}>
        <li className="font-montserrat font-semibold text-lg flex justify-center py-2 list-none">
          Consensus
        </li>
        <ProgressBar bgcolor="#9EAEC0" completed={proPercentage} />
        <li className="font-montserrat font-semibold text-lg  py-2 list-none">
          Pro ✅
        </li>
            <li className="font-raleway text-lg py-2 list-none">
              {numberOfProVotants} Users - Bounty {winnerGrowth}%
            </li>
        <li className="font-montserrat font-semibold text-lg text-black py-2 list-none ">
          Con ❎
        </li>
            <li className="font-raleway text-lg py-2 list-none">
              {numberOfConVotants} Users - Bounty 0%
            </li>
        <li className="font-montserrat font-semibold text-lg text-black py-2 list-none ">
          Author earned 🤲
        </li>
          <li className="font-raleway text-lg py-2 list-none">
                {authorEarned} Tokens
            </li>
        <li className="font-montserrat font-semibold text-lg text-black py-2 list-none ">
          Total Stake 💰
        </li>
            <li className="font-raleway text-lg py-2 list-none">
                {totalStake} Tokens
            </li>
          {/* <div>
            <label className="py-2 font-montserrat font-semibold text-lg" for="votes bar">Votes</label>
            <progress className="nm-inset-white w-full p-5 rounded-full" id="votes bar" max="100" value="70"> 70% </progress>
          </div> */}
      </div>
    </div>
  );
};
export default Filters;
