import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import no_products from "../assets/images/empty.png";
import { db, storage } from "../firebase/firebase-config";
import { getDownloadURL, ref } from "firebase/storage";
import { collection, getDocs, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/utilities/LoadingSpinner";
import Card from "../components/Card";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const handleClick = (item) => {
    addToCart(item);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      const productsCollection = collection(db, "products");
      const q = query(productsCollection, where("approved", "==", true));
      const querySnapshot = await getDocs(q);

      const productsData = [];

      for (const docRef of querySnapshot.docs) {
        const product = docRef.data();
        // if product.approved == true --> push to productsData
        const imageURL = await getFirstImageURL(docRef.id);
        productsData.push({ ...product, id: docRef.id, imageURL });
        // console.log(docRef.data())
      }

      console.log(productsData);
      setAllProducts(productsData);
      setLoading(false);
    };

    fetchAllProducts();
  }, []);

  const getFirstImageURL = async (productId) => {
    const storageReference = ref(storage, `products/${productId}/products.jpg`);
    console.log("Product ID:", productId);
    console.log("Storage Reference:", storageReference);

    try {
      const imageURL = await getDownloadURL(storageReference);
      console.log("Image URL:", imageURL);
      return imageURL;
    } catch (error) {
      console. error("Error fetching image URL:", error);
      return null;
    }
  };

  return (
    <div
      style={{ backgroundColor: "rgb(196,243,199)" }}
      className="p-12 h-screen"
    >
      <div className="flex gap-2 ">
        <h1 className="vanBold text-5xl ml-4">All Products</h1>
        <Link to="/sell">
          <IoIosAddCircle size={48} className="text-green-500" />
        </Link>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : allProducts.length > 0 ? (
        <div className="flex flex-wrap mt-8">
          {allProducts.map((item) => (
            <Card key={item.id} item={item} handleClick={handleClick} />
          ))}
        </div>
      ) : (
        <div className="w-full">
          <div className="flex flex-col items-center my-8">
            <img
              src={no_products}
              alt="No products available"
              className="w-36"
            />
            <p className="vanRegular text-lg mt-4">No products available.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
