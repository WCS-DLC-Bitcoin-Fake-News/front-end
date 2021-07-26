const Filters = () => {
  return (
    <div
      className="w-full bg-white rounded-lg p-5"
      style={{ height: "max-content" }}>
      <li className="font-montserrat font-semibold text-lg  py-4 list-none">
        Comments
      </li>
      <li className="font-montserrat font-semibold text-lg text-black py-4 list-none ">
        Highlights
      </li>
      <li className="font-montserrat font-semibold text-lg text-black py-4 list-none ">
        Sources
      </li>
        {/* <div>
          <label className="py-2 font-montserrat font-semibold text-lg" for="votes bar">Votes</label>
          <progress className="nm-inset-white w-full p-5 rounded-full" id="votes bar" max="100" value="70"> 70% </progress>
        </div> */}
    </div>
  );
};

export default Filters;
