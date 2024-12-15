import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db, storage } from "../firebase/firebase-config";
import { getDownloadURL, ref } from "firebase/storage";
import LoadingSpinner from "../components/utilities/LoadingSpinner";
const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("uid", "==", user.uid));
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
    setProducts(productsData);
    setIsLoading(false);
  };

  const getFirstImageURL = async (productId) => {
    const storageReference = ref(storage, `products/${productId}/products.jpg`);
    console.log("Product ID:", productId);
    console.log("Storage Reference:", storageReference);

    try {
      const imageURL = await getDownloadURL(storageReference);
      console.log("Image URL:", imageURL);
      return imageURL;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  };

  return (
    <div
      style={{ backgroundColor: "rgb(196,243,199)" }}
      className="p-12"
    >
      <h1 className="vanBold text-5xl text-center mb-8">My Products</h1>

      <table className="w-full border-collapse border border-gray-300 my-8 bg-white">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border text-center">No</th>
            <th className="py-2 px-4 border text-center">Title</th>
            <th className="py-2 px-4 border text-center">Price</th>
            <th className="py-2 px-4 border text-center">Description</th>
            <th className="py-2 px-4 border text-center">Status</th>
            <th className="py-2 px-4 border text-center">Action</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6}>
                <LoadingSpinner />
              </td>
            </tr>
          ) : products.length > 0 ? (
            products.map((product, index)=>(
              <tr key={product.id}>
                <td className="py-2 px-4 border text-center">{index+ 1}</td>
                <td className="py-2 px-4 border text-center">
                  <div className="flex gap-4 items-center">
                    <div>
                      <img className="h-16 w-16 object-contain	" src={product.imageURL}/>
                    </div>
                    <div>
                      {product.title}
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border text-center">{index+ 1}</td>
                <td className="py-2 px-4 border text-center">{index+ 1}</td>
                <td className="py-2 px-4 border text-center">
                  <div className={`rounded px-2 py-1 text-white ${
                    product.approved ? "bg-green-500"
                    : product.approved == false
                    ? "bg-yellow-500"
                    : "bg-red-500"
                  }`}> 
                    {product.approved ? "Approved" : product.approved == false ? "Pending" : "Rejected" }
                  </div>
                </td>
                <td className="py-2 px-4 border text-center">{index+ 1}</td> 
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>
                <h2 className="text-center font-bold my-12">
                  No Product Found
                </h2>
              </td>
            </tr>
          )}
        </tbody>
        {/* <button onClick={()=>console.log(products)}>Hello</button> */}
      </table>
    </div>
  );
};

export default MyProducts;