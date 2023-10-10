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
    tag: "top",
    src: "https://www.nike.com/bg/t/sportswear-club-long-sleeve-t-shirt-JMDvhL/AR5193-100",
    name: "Nike SportSwear",
    price: "60",
  },
  {
    id: "5",
    tag: "top",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ipyw8hman9u2d30o1vso/pacer-1-2-zip-running-top-n0tqHc.png",
    name: "Nike Pacer",
    price: "70",
  },
  {
    id: "6",
    tag: "top",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e7ec034f-be12-4827-8ba2-f710099c0fe2/paris-saint-germain-strike-jordan-dri-fit-football-drill-top-GPG8qD.png",
    name: "PSG Strike",
    price: "130",
  },
  {
    id: "7",
    tag: "top",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/48de3bd8-0b4f-4c46-9e3a-b0ca3ba23459/liverpool-fc-strike-dri-fit-football-drill-top-16Gcb2.png",
    name: "Liverpool Strike",
    price: "140",
  },
  {
    id: "8",
    tag: "top",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/34e566ef-f963-4e26-a5f4-e8c4c96bc8bc/jordan-dri-fit-sport-top-1xPlgq.png",
    name: "Jordan Dri-FIT",
    price: "40",
  },
  {
    id: "9",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_default/6be83de8-2bc6-4cea-b4a5-525bb19dcd88/air-max-2021-shoe-jkzqGt.png",
    name: "Nike Air Max 2021",
    price: "80",
  },
  {
    id: "10",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-older-shoe-1hqfHl.png",
    name: "Nike Air Force",
    price: "90",
  },
  {
    id: "11",
    tag: "shoe",
    src: "https://gele-sport.com/image/cache/catalog/Nike29-08-20/maratonki-nike-CJ4066-001-800x800.jpg",
    name: "Nike Air Max2090",
    price: "100",
  },
  {
    id: "12",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/80a0619e-754e-4bee-b601-b0bde5bd203a/air-force-1-07-shoes-cbBh9R.png",
    name: "Nike Air Force 1'7",
    price: "250",
  },
  {
    id: "13",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7edca621-e4a3-4038-8ed9-731a36bc1179/jordan-max-aura-4-shoes-SjXFxR.png",
    name: "Jordan Max Aura 4",
    price: "250",
  },
  {
    id: "14",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18f06b19-1f30-4579-8613-ab72339676a7/react-vision-shoe-dK1mnR.png",
    name: "Nike React Vision",
    price: "270",
  },
  {
    id: "15",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f3c4c0af-4274-464c-838e-77174bf9b2fb/air-max-pulse-shoes-k7XxPx.png",
    name: "Nike Air Max Pulse",
    price: "330",
  },
  {
    id: "16",
    tag: "shoe",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f21a648c-4017-442c-b1c6-270b28fab14d/air-max-plus-3-shoes-NbNLfP.png",
    name: "Nike Air Max Plus 3",
    price: "370",
  },
  {
    id: "17",
    tag: "pant",
    src: "https://www.sportihobi.bg/sites/default/files/styles/uc_product_full/public/637193095/nike-sportswear-club-jogger.jpg?itok=SXYOoIoE",
    name: "Nike Clubjogger",
    price: "80",
  },
  {
    id: "18",
    tag: "pant",
    src: "https://static.nike.com/a/images/t_default/qi3v2xse7ubyc4kubr37/sportswear-club-fleece-trousers-2bHDLX.png",
    name: "Nike Club Fleece",
    price: "90",
  },
  {
    id: "19",
    tag: "pant",
    src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ngjeza7zfbdnpk6xlo6z/sportswear-club-joggers-FcQ46n.png",
    name: "Nike Sportswear Club",
    price: "100",
  },
  {
    id: "20",
    tag: "pant",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ffdbb6c2-d70d-4f7e-8198-a559b5c57fe1/solo-swoosh-fleece-trousers-dFH1kV.png",
    name: "Nike Solo Swoosh",
    price: "160",
  },
  {
    id: "21",
    tag: "pant",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2cfcd81d-719c-4c04-bd11-519df8c26aea/jordan-essentials-holiday-french-terry-trousers-qnt7rf.png",
    name: "Jordan Essentials",
    price: "160",
  },
  {
    id: "22",
    tag: "pant",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ecba1b55-67e5-4375-820e-f8d261b13abe/air-max-joggers-wTM4G4.png",
    name: "Nike Air Max",
    price: "160",
  },
  {
    id: "23",
    tag: "pant",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/468d8dd2-9686-4672-8036-8907ae814ced/jordan-brooklyn-fleece-trousers-PG82L9.png",
    name: "Jordan Brooklyn Fleece",
    price: "140",
  },
  {
    id: "24",
    tag: "pant",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b44a8cad-5340-4629-84ab-eb2576993e09/jordan-sport-dri-fit-woven-trousers-LJMxFz.png",
    name: "Jordan Sport Dri-FIT",
    price: "120",
  },

  {
    id: "25",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bewcot7nnfgjpvwdkvjn/sportswear-windrunner-down-fill-hooded-puffer-parka-l5twkx.png",
    name: "Nike air BB",
    price: "80",
  },
  {
    id: "26",
    tag: "jacket",
    src: "https://di2ponv0v5otw.cloudfront.net/posts/2021/11/13/61909ad7920786abe4540185/m_61909b1e7f80d2aab98e0f94.jpg",
    name: "Nike Hdrus",
    price: "90",
  },
  {
    id: "27",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/86a0e790-369c-4d02-a113-00e93f5a0f2e/sportswear-windrunner-canvas-insulated-hooded-jacket-k9jhJj.png",
    name: "Nike Nsw",
    price: "100",
  },
  {
    id: "28",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e4637cba-5f06-4803-a0ed-75bcda394767/jordan-essential-puffer-jacket-4F2PnL.png",
    name: "Jordan Essential",
    price: "360",
  },
  {
    id: "29",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1719b541-a6be-476b-b367-ef99909cf8d2/sportswear-repel-hooded-jacket-xxDzDb.png",
    name: "Nike Sportswear Therma-FIT",
    price: "250",
  },
  {
    id: "30",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4c736df5-fc12-4278-82aa-ee3021c47b8c/sportswear-club-puffer-jacket-MX09dS.png",
    name: "Nike Sportswear Club",
    price: "390",
  },
  {
    id: "31",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dcfeb31e-62c1-497f-9f83-744dd1af87d6/windrunner-primaloft-hooded-puffer-jacket-LF2x2Z.png",
    name: "Nike Windrunner PrimaLoft",
    price: "450",
  },
  {
    id: "32",
    tag: "jacket",
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a8c268e0-7992-464d-9919-55cb85ed3f75/unlimited-versatile-jacket-bztrWt.png",
    name: "Nike Unlimited",
    price: "200",
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
