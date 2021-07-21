import BunkerVisualizer from "./BunkerVisualizer";

const ReadingTime = () => (
  <span className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="text-blue-500 font-semibold text-xs">6 Mins</p>
  </span>
);

const BunkerContent = ({ tags, argument, source, printedSource }) => {
  return (
    <>
      {/* Custom visualizer */}
      {printedSource.length && (
        <BunkerVisualizer source={source} printedSource={printedSource} />
      )}

      {/* Bunker tags */}
      <div className="flex flex-start mt-4 px-4">
        {/* Tags */}
        {tags.map((tag) => (
          <span className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5">
            {tag}
          </span>
        ))}
      </div>

      {/* Bunker argument */}
      <div className="px-4 space-y-2">
        <p className="text-gray-400 font-normal leading-5 tracking-wide">
          <div dangerouslySetInnerHTML={{ __html: argument }} />
        </p>
        <div
          to="blog/detail"
          className="font-bold hover:text-blue-400 text-gray-100"
        >
          read more...
        </div>
      </div>
    </>
  );
};

export default BunkerContent;
