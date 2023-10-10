import React, { useEffect, useState } from "react";

const DUMMYDATA = [
  {
    id: "1",
    tag: "top",
    src: "https://cdn.sportdepot.bg/files/catalog/detail/NIKE-BV2662-010_01.jpg",
    name: "Nike air BB",
    price: "80",
  },
  {
    id: "2",
    tag: "top",
    src: "https://s13emagst.akamaized.net/products/4138/4137743/images/res_c2f3066457873dc569d1bd46aca9f15a.jpg?v2",
    name: "Nike Crw",
    price: "90",
  },
  {
    id: "3",
    tag: "top",
    src: "https://www.sportihobi.bg/sites/default/files/styles/uc_product_full/public/266212603/66212603_xxl.jpg?itok=SQDsK1ER",
    name: "Nike Phoenix",
    price: "100",
  },

  {
    id: "4",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_default/6be83de8-2bc6-4cea-b4a5-525bb19dcd88/air-max-2021-shoe-jkzqGt.png",
    name: "Nike Air Max 2021",
    price: "80",
  },
  {
    id: "5",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-older-shoe-1hqfHl.png",
    name: "Nike Air Force",
    price: "90",
  },
  {
    id: "6",
    tag: "shoe",
    src: "https://gele-sport.com/image/cache/catalog/Nike29-08-20/maratonki-nike-CJ4066-001-800x800.jpg",
    name: "Nike Air Max2090",
    price: "100",
  },

  {
    id: "7",
    tag: "pant",
    src: "https://www.sportihobi.bg/sites/default/files/styles/uc_product_full/public/637193095/nike-sportswear-club-jogger.jpg?itok=SXYOoIoE",
    name: "Nike Clubjogger",
    price: "80",
  },
  {
    id: "8",
    tag: "pant",
    src: "https://static.nike.com/a/images/t_default/qi3v2xse7ubyc4kubr37/sportswear-club-fleece-trousers-2bHDLX.png",
    name: "Nike Club Fleece",
    price: "90",
  },
  {
    id: "9",
    tag: "pant",
    src: "",
    name: "Nike Clubflex",
    price: "100",
  },

  {
    id: "10",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bewcot7nnfgjpvwdkvjn/sportswear-windrunner-down-fill-hooded-puffer-parka-l5twkx.png",
    name: "Nike air BB",
    price: "80",
  },
  {
    id: "11",
    tag: "jacket",
    src: "https://di2ponv0v5otw.cloudfront.net/posts/2021/11/13/61909ad7920786abe4540185/m_61909b1e7f80d2aab98e0f94.jpg",
    name: "Nike Hdrus",
    price: "90",
  },
  {
    id: "12",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/86a0e790-369c-4d02-a113-00e93f5a0f2e/sportswear-windrunner-canvas-insulated-hooded-jacket-k9jhJj.png",
    name: "Nike Nsw",
    price: "100",
  },
];

const customKey = "clothes"; // Your custom key
const firebaseUrl = `https://shop-190b9-default-rtdb.firebaseio.com/${customKey}.json`;
const PostDataToFirebase = () => {
  const [isDataPosted, setIsDataPosted] = useState(false);

  useEffect(() => {
    const postDataToFirebase = async () => {
      try {
        const response = await fetch(firebaseUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(DUMMYDATA),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        setIsDataPosted(true);
      } catch (error) {
        console.error("Error posting data to Firebase:", error);
      }
    };
    postDataToFirebase();
  }, []);

  return (
    <div>
      {isDataPosted ? (
        <p>Data has been successfully posted to Firebase!</p>
      ) : (
        <p>Posting data to Firebase...</p>
      )}
    </div>
  );
};

export default PostDataToFirebase;
