interface Props {
  isActive: (item: any) => Boolean;
  cartItems: any[];
}

const DesktopStepper = (props: Props) => {
  const { isActive, cartItems } = props;
  return (
    <>
      {cartItems.map((item) => (
        <div
          className={`items-center hidden md:flex ${
            isActive(item) ? "text-primary " : "text-slate-300"
          }`}
          key={item.id}
        >
          {cartItems.indexOf(item) !== 0 && (
            <div
              className={`border-dashed border-b-2 w-52 ${
                isActive(item) ? "border-primary " : "border-stale-300"
              }`}
            ></div>
          )}
          <div className="font-bold flex justify-center items-center mx-2">
            <span className="me-2">{item.icon}</span>
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default DesktopStepper;
