import VerticalFood from "@/components/verticalCard/VerticalCard";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 px-4 lg:px-[7vw]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <VerticalFood key={item} />
      ))}
    </div>
  );
};

export default Loading;
