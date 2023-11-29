import React, { createContext, useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sanityClient from '../lib/client'
import { urlFor } from '../lib/client'
import Recentlyviewedproducts from '../Components/Recentlyviewedproducts';

const Context = createContext();

export const StateContextProvider = ({ children }) => {
     const [products, setProducts] = useState([]);
     const [banner, setBanner] = useState([]);
     const [searchTerm, setSearchTerm ] = useState('')
     const [cartItems, setCartItems] = useState(() => {
          const localCartItems = localStorage.getItem('cartItems')
          return localCartItems ? JSON.parse(localCartItems) : [];
     })
     const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([])
     const [total, setTotal ] = useState(0)

     const notify = (text) => toast.success(`${text}`, {position: "top-center",theme: "dark",});

     useEffect(() => {
          const fetchSanity = async () => {
               try{
                    const productsData = await sanityClient.fetch(`*[_type == 'Products']`);
                    const bannerData = await sanityClient.fetch(`*[_type == 'banner']`);
                    setProducts(productsData);
                    setBanner(bannerData)
               }catch(error){
                    console.error(error);
               }
          }

          const storedList = localStorage.getItem('recentlyViewedList');
          if (storedList) {
            setRecentlyViewedProducts(JSON.parse(storedList));
          }

          fetchSanity()
     }, [])

     useEffect(() => {
          localStorage.setItem('cartItems', JSON.stringify(cartItems))
     }, [cartItems])

     useEffect(() => {
          setTotal(calculateTotalPrice())
     }, [cartItems])

     const addItemToCart = (quantity, product) => {
          const index = cartItems.findIndex(item => item.id === product._id);

          if (index !== -1) {
               // If the product exist, increase the quantity
               const updatedCart = [...cartItems];
               updatedCart[index].quantity += quantity;
               setCartItems(updatedCart);
          }else{
               // Checking if the product already exists, if the product does not exist add a new product
               setCartItems(prevCartItems => [...prevCartItems, {name: product.name, price: product.price, id: product._id, image: product.image[2], quantity: quantity}])
          }
          notify(`${product.name} successfully added to cart!`)
     }

     const deleteItemFromCart = (product) => {
          setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== product.id))
          notify(`${product.name} successfully removed from cart!`)
     }

     const addQuantityToCartItem = (cartItem) => {

          const updatedCartItems = cartItems.map(item => {
               if (cartItem.id === item.id) {
                 return { ...item, quantity: item.quantity + 1 };
               }
               return item;
          });

          setCartItems(updatedCartItems);
     }

     const subtractQuantityToCartItem = (cartItem) => {

          const updatedCartItems = cartItems.map(item => {
               if (cartItem.id === item.id){
                    if (item.quantity === 1) return item
                    return { ...item, quantity: item.quantity - 1}
               }
               return item
          })

          setCartItems(updatedCartItems)
     }

     const calculateTotalPrice = () => {
          let totalPrice = 0;
        
          cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
          });
        
          return Math.round(totalPrice);
     };

     const addToRecentlyViewed = (product) => {
          window.scrollTo(0, 0)
          // Check if the product is already in the recentlyViewed list
          const index = recentlyViewedProducts.findIndex(item => item.name === product.name);

          if (index === -1) {
               // Add the product to the recentlyViewed list
               const updatedRecentlyViewed = [product, ...recentlyViewedProducts];
               const trimmedList = updatedRecentlyViewed.slice(0, 4);
               setRecentlyViewedProducts(trimmedList);

               // Store the updated list in local storage
               localStorage.setItem('recentlyViewedList', JSON.stringify(trimmedList));
          }else{
               // Product is already in the list, move it to the top
               const updatedRecentlyViewed = [
                    product,
                    ...recentlyViewedProducts.slice(0, index),
                    ...recentlyViewedProducts.slice(index + 1)
               ];
               setRecentlyViewedProducts(updatedRecentlyViewed)
  
               localStorage.setItem('recentlyViewedList', JSON.stringify(updatedRecentlyViewed));
          }
     };

     const setSearch = (e) => {
          setSearchTerm(e.target.value)
     }

     return(
          <Context.Provider 
               value={{ 
                    products, 
                    banner, 
                    cartItems, 
                    addItemToCart, 
                    deleteItemFromCart, 
                    addQuantityToCartItem, 
                    subtractQuantityToCartItem, 
                    total, addToRecentlyViewed,
                    recentlyViewedProducts,
                    setSearch, searchTerm
               }}>
               {children}
          </Context.Provider>
     )
}
export default Context