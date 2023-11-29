import React, { useState, useContext } from "react";
import Context from "../context/StateContext";
import { urlFor } from '../lib/client'
import { Minus, Plus, Trash2 } from "lucide-react";


const Cartitems = ({ cartItem, deleteItemFromCart }) => {
  const { addQuantityToCartItem, subtractQuantityToCartItem } = useContext(Context)

  return (
    <div className="cart-item flex gap-4 pb-4 sm:pb-6 border-b border-black/20">
      <div className="w-[150px] max-sm:w-[120px] aspect-square rounded-lg border border-black/30 overflow-hidden bg-zinc-100">
        <img src={urlFor(cartItem.image)} alt={cartItem?.image} className="w-full h-full object-cover"/>
      </div>
      <div className="flex-1 flex max-sm:flex-col max-sm:gap-2 max-sm:items-start justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-lg sm:text-2xl font-semibold">{ cartItem?.name}</h3>
          <span className="text-sm sm:text-lg font-bold py-2">${ cartItem?.price}</span>
          <div className="w-[120px] max-sm:w-[90px] p-1 bg-slate-400 text-white rounded-full flex gap-3 sm:gap-6 items-center justify-center">
            <button onClick={() => subtractQuantityToCartItem(cartItem) }>
              <Minus size={20} strokeWidth={3} />
            </button>
            <span className="text-lg font-semibold">{ cartItem?.quantity }</span>
            <button onClick={() => addQuantityToCartItem(cartItem) }>
              <Plus size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
        <button className="ml-auto" onClick={() => deleteItemFromCart(cartItem)}>
            <Trash2 size={20} className="text-red-400"/>
        </button>
      </div>
    </div>
  );
};

export default Cartitems;
