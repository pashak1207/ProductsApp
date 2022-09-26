import { useContext } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

export const ProductsPage = () => {
  const { products, error, loading, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5 relative">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal onClose={close} title="Create new product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      {!modal && (
        <button
          className="px-4 py-2 border rounded bg-red-400 fixed bottom-10 right-10 hover:text-white"
          onClick={open}
        >
          Add new product
        </button>
      )}
    </div>
  );
};
