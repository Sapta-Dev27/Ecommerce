import React from "react";
import useAuth from '../../../context/authContext';
import useProductContext from "../../../context/productContext";
import Card from "./card";


const List = () => {

  const { user } = useAuth();
  const { smartphones } = useProductContext();
  console.log("Products in List component:", smartphones);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center  text-gray-600 mt-8">
        Purchase your Dream Laptop <span className="text-blue-600">{user.displayName}</span>
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-4 mt-12">
        {
          smartphones.map((product) => (
            <Card key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default List;