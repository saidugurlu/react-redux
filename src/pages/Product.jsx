import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const buttonFunc = () => {
    dispatch(createDataFunc());
  };

  const contentModal = (
    <>
      <Input
        type="text"
        placeholder="Produkt hinzufügen"
        name="name"
        id="name"
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        type="number"
        placeholder="Preis hinzufügen"
        name="price"
        id="price"
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type="file"
        placeholder="Bild hinzufügen"
        name="url"
        id="url"
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button btnText={"Erstellen"} onClick={buttonFunc} />
    </>
  );

  return (
    <div className="">
      <ProductCard />
      {modal && <Modal content={contentModal} title="Produkt erstellen" />}
    </div>
  );
};

export default Product;
