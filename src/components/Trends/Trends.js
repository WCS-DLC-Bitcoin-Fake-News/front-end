const Trends = () => {
  // axios call to get trends and map results
  return (
    <div
      className="nm-flat-white w-full p-5 rounded-lg"
      style={{ height: "max-content" }}>
      <p className="font-poppins font-semibold text-base mb-3">Trends</p>
      <hr />
      <div className="tags">
        <p className="py-2 font-noto font-semibold">#bitcoin</p>
        <p className="font-noto font-medium text-gray-600">213k Bunkers</p>
      </div>
      <div className="tags">
        <p className="py-2 font-noto font-semibold">#dogecoin</p>
        <p className="font-noto font-medium text-gray-600">3k Bunkers</p>
      </div>
      <div className="tags">
        <p className="py-2 font-noto font-semibold">#speculation</p>
        <p className="font-noto font-medium text-gray-600">21.3k Bunkers</p>
      </div>
      <div className="tags">
        <p className="py-2 font-noto font-semibold">#musk</p>
        <p className="font-noto font-medium text-gray-600">33k Bunkers</p>
      </div>
      <div className="tags">
        <p className="py-2 font-noto font-semibold">#crash</p>
        <p className="font-noto font-medium text-gray-600">213k Bunkers</p>
      </div>
      <div className="tags">
        <p className="py-2 font-noto font-semibold">#energy</p>
        <p className="font-noto font-medium text-gray-600">25k Bunkers</p>
      </div>
      <div className="tags">
        <p className="py-2 font-noto font-semibold">#failures</p>
        <p className="font-noto font-medium text-gray-600">213k Bunkers</p>
      </div>
    </div>
  );
};

export default Trends;
