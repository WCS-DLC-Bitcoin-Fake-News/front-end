const Filters = () => {
  return (
    <div
      className="w-full bg-white rounded-lg p-5"
      style={{ height: "max-content" }}>
      <li className="font-poppins font-semibold text-base  py-4 list-none text-primary">
        Comments
      </li>
      <li className="font-poppins font-semibold text-base text-gray-600 py-4 list-none ">
        Highlights
      </li>
      <li className="font-poppins font-semibold text-base text-gray-600 py-4 list-none ">
        Sources
      </li>
      <li className="font-poppins font-semibold text-base text-gray-600 py-4 list-none ">
        Upvotes
      </li>
    </div>
  );
};

export default Filters;
