const queryListCars = () => ({
  query: `{cars{id title purchase value active}}`
});
const queryFindCar = id => ({
  query: `{car_find(id:${id}){id title purchase value active}}`
});

const queriesCars = {
  queryListCars,
  queryFindCar
};

export default queriesCars;
