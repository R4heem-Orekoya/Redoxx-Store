import { useContext, useState } from "react"
import Context from "../context/StateContext"
import Productcard from "../Components/Productcard"

const Searchpage = () => {
  const { products, searchTerm } = useContext(Context)


  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {
      products
        .filter(product => {
          const searchTermLower = searchTerm.toLocaleLowerCase();
          if (searchTermLower === '') {
            return true; // Return all products if searchTerm is empty
          } else {
            return product.name.toLocaleLowerCase().includes(searchTermLower);
          }
        })
        .map(product => (
          <Productcard product={product} key={product.slug}/>
        ))
    }

    </div>
  )
}

export default Searchpage
