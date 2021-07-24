const Trends = () => {
  // axios call to get trends and map results
  return (
    <div
      className="nm-flat-white w-full p-5 rounded-lg"
      style={{ height: "max-content" }}>
      <p className="font-montserrat font-bold text-lg mb-3">Hot Bunkers 🔥</p>
      <hr />
      <div className="tags">
        <p className="py-2 font-raleway font-semibold">Elon always knew about BTC clean energy usage</p>
        <p className="font-raleway font-medium text-gray-600">856 Staked</p>
      </div>
      <div className="tags">
        <p className="py-2 font-raleway font-semibold">Chinese miner exodus its a hoax</p>
        <p className="font-raleway font-medium text-gray-600">550 Staked</p>
      </div>
      <div className="tags">
        <p className="py-2 font-raleway font-semibold">EU to ban private wallets</p>
        <p className="font-raleway font-medium text-gray-600">476 Staked</p>
      </div>
      <div className="tags">
        <p className="py-2 font-raleway font-semibold">"Altcoin Psycho" EOY BTC price prediction</p>
        <p className="font-raleway font-medium text-gray-600">330 Staked</p>
      </div>
    </div>
  );
};

export default Trends;
