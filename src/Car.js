const Cars = () => {
  const carList = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1 className="font-family-times-new-roman">Who Lives in my garage?</h1>
      <ul>
        {carList.map((car) => {
          return <li className="font-family-times-new-roman">I am a {car}</li>;
        })}
      </ul>
    </>
  );
};
export default Cars;
