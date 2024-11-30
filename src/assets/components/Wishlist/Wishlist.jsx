import { Helmet } from "react-helmet-async";
import { useGadgets } from "../../contexts/GadgetProvider";
import { TiDeleteOutline } from "react-icons/ti";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, moveToCart } = useGadgets();

  return (<>
    <Helmet>
        <title>Wishlist - Gadget Heaven</title>
      </Helmet>
    <div className="">
      
      <div className="flex items-center justify-between py-10 container mx-auto px-4">
        <h2 className="font-bold text-xl mb-3">Wishlist</h2>
      </div>

      <div className="bg-gray-100 py-8 rounded-lg">
        {wishlist.length === 0 ? (
          <p className="text-2xl font-bold text-center">
            Your wishlist is empty.
          </p>
        ) : (
          <div className="flex flex-col gap-4 container mx-auto">
            {wishlist.map((item) => (
              <div
                key={item.product_id}
                className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-20 rounded-lg"
                  />
                  <div className=" space-y-1">
                    <h1 className="text-lg font-bold">{item.product_title}</h1>
                    <p className="text-sm text-gray-600"><span className="font-bold">Description: </span>{item.description}</p>
                    <p className=" font-bold">Price: ${item.price}</p>
                    <button
                    onClick={() => moveToCart(item)}
                    className="px-4 py-2 bg-purple-500 text-white rounded-3xl font-bold hover:bg-purple-600"
                  >
                    Add to Cart
                  </button>
                  </div>
                </div>

                <div >
                  

                  <button
                    onClick={() => removeFromWishlist(item.product_id)}
                    className="text-3xl px-4 py-2 text-red-500 rounded-full"
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div></>
  );
};

export default Wishlist;
