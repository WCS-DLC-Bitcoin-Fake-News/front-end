
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  const containerStyles = {
    lineHeight: "2rem",
    width: "250px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
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



const Filters = () => {
  return (
    <>
    <div
      className="w-full bg-white rounded-lg p-5"
      style={{ height: "max-content" }}>
      <ProgressBar className="mr-" bgcolor="#9EAEC0" completed={70} />
      <li className="font-montserrat font-semibold text-lg  py-4 list-none">
        Pro
      </li>
          <li className="font-raleway text-lg py-4 list-none">
            75 Votes
          </li>
      <li className="font-montserrat font-semibold text-lg text-black py-4 list-none ">
        Con
      </li>
           <li className="font-raleway text-lg py-4 list-none">
              32 Votes
          </li>
      <li className="font-montserrat font-semibold text-lg text-black py-4 list-none ">
        Author earned
      </li>
        <li className="font-raleway text-lg py-4 list-none">
              1531 Votes
          </li>
      <li className="font-montserrat font-semibold text-lg text-black py-4 list-none ">
        Total Stake
      </li>
          <li className="font-raleway text-lg py-4 list-none">
              500 Votes
          </li>
        {/* <div>
          <label className="py-2 font-montserrat font-semibold text-lg" for="votes bar">Votes</label>
          <progress className="nm-inset-white w-full p-5 rounded-full" id="votes bar" max="100" value="70"> 70% </progress>
        </div> */}
    </div>
    </>
  );
};
export default Filters;
