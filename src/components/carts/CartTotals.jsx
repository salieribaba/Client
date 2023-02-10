import { Button } from "antd";
import {
  ClearOutlined,
  CheckOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import React from "react";

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2
        className="cart-header-title
           bg-blue-600
           text-center
           py-4
            text-white
            font-bold
            tracking-wide
            "
      >
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-2 pt-2 overflow-y-auto py-2">
        <li className="cart-item flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              className="w-16 h-16 object-cover"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold">Eski Kaşar</span>
              <span className="text-sm text-gray-500">12 ₺ x 1</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              className="w-full mt-2 flex items-center justify-center"
              danger
              size="small"
              type="primary"
              icon={<MinusCircleOutlined />}
            />
            <span className="text-lg mt-2 font-bold items-center justify-center">
              10
            </span>
            <Button
              className="w-full mt-2 flex items-center justify-center"
              size="small"
              type="primary"
              icon={<PlusCircleOutlined />}
            />
          </div>
        </li>
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99 ₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>Kdv %8</b>
            <span className="text-red-700">+7.92 ₺</span>
          </div>
          <div className="border-b mt-4">
            <div className="flex justify-between p-2">
              <b className="text-xl text-green-500">Genel Toplam</b>
              <span className="text-xl">106.92 ₺</span>
            </div>
          </div>

          <div className="py-4 px-2">
            <Button
              className="w-full mt-2 flex items-center justify-center"
              size="large"
              type="primary"
              icon={<CheckOutlined />}
            >
              Sepeti Onayla
            </Button>
            <Button
              className="w-full mt-2 flex items-center justify-center"
              danger
              size="large"
              type="primary"
              icon={<ClearOutlined />}
            >
              Sepeti Temizle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
