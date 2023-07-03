const FoodContainer = () => {
  const foodData = [
    {
      id: 1,
      title: "کوفته برنجی",
      imageSrc: "",
      description: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
      rate: 5,
      price: 145000,
      discountRate: 35,
    },
  ];

  return (
    <section>
      <div>
        {foodData.map((food) => (
          <div key={food.id} className="border">
            <div>
              <p className="">awdawdawd</p>
            </div>
            <div>
              <div className="">
                <p className="text-yellow-400">{food.title}</p>
                <div>
                  <p className="text-yellow-600">awdawdawd</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodContainer;
