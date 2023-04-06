import React from "react";
import Card from "../Components/Card";
import { useGetData } from '../hooks/useGetData';


export const endpoint = "https://jsonplaceholder.typicode.com/users";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {values} = useGetData(endpoint);
 
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {values &&
          values.map((dentist) => {
            return <Card key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
             />;
          })}
      </div>
    </main>
  );
};

export default Home;