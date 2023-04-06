import React from "react";
import { useReducer } from "react";
import { initialState, reducer } from "./Example";
import HomeCardExample from "./HomeCardExample";

const FavsExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { favorites } = state;

  return (
    <>
      {favorites.map((dentist) => (
        <HomeCardExample
          key={dentist.id}
          dentist={dentist}
          dispatch={dispatch}
          btnText={"Remove Fav"}
        />
      ))}
    </>
  );
};

export default FavsExample;
