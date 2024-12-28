import React, { createContext, useReducer } from "react";
import uuid from "react-native-uuid";

// Create Context
export const POSContext = createContext();

// Initial State
const initialState = {
  order: [
    {
      guid: "donhangmacdinh",
      OrderItem: [],
      name: `Đơn 1`,
    },
  ],
  selection: {
    guid: "donhangmacdinh",
    OrderItem: [],
    name: `Đơn 1`,
    totalPrice: 0,
  },
};

const calculateTotalPrice = (orderItemList) => {
  return orderItemList.reduce(
    (total, item) => total + item.quantity * item.originPrice,
    0
  );
};

// Reducer Function
const posReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      const newOrder = {
        guid: uuid.v4(),
        OrderItem: [],
        name: `Đơn ${state.order.length + 1}`,
      };
      return {
        ...state,
        order: [...state.order, newOrder],
        selection: state.order.length === 0 ? newOrder : state.selection,
      };

    case "SET_SELECTION":
      return { ...state, selection: action.payload };

    case "REMOVE_ORDER":
      if (action.payload === "donhangmacdinh") return state;
      const updatedOrders = state.order.filter(
        (item) => item.guid !== action.payload
      );
      return {
        ...state,
        order: updatedOrders,
        selection: updatedOrders[0] || undefined,
      };

    case "ADD_ITEM_TO_ORDER":
      const { item } = action.payload;
      if (!item || !state.selection.guid) return state;

      const updatedOrderWithNewItem = state.order.map((order) => {
        if (order.guid === state.selection.guid) {
          const existingItemIndex = order.OrderItem.findIndex(
            (orderItem) => orderItem.id === item.id
          );

          const updatedOrderItems =
            existingItemIndex !== -1
              ? order.OrderItem.map((orderItem, index) =>
                  index === existingItemIndex
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    : orderItem
                )
              : [...order.OrderItem, { ...item, quantity: 1 }];

          return { ...order, OrderItem: updatedOrderItems };
        }
        return order;
      });

      // Find the updated order that matches the selection
      const updatedSelection = updatedOrderWithNewItem?.find(
        (order) => order?.guid === state.selection.guid
      );

      return {
        ...state,
        order: updatedOrderWithNewItem,
        selection: {
          ...updatedSelection,
          totalPrice: calculateTotalPrice(updatedSelection.OrderItem),
        },
      };

    case "REMOVE_ITEM_FROM_ORDER":
      const itemId = action.payload;
      const updatedOrderAfterItemRemoval = state.order.map((order) => {
        if (order.guid === state.selection.guid) {
          return {
            ...order,
            OrderItem: order.OrderItem.filter((item) => item.id !== itemId),
          };
        }
        return order;
      });

      // Find the updated order that matches the selection
      const tmp = updatedOrderAfterItemRemoval?.find(
        (order) => order?.guid === state.selection.guid
      );

      return {
        ...state,
        order: updatedOrderAfterItemRemoval,
        selection: {
          ...tmp,
          totalPrice: calculateTotalPrice(tmp.OrderItem),
        },
      };

    default:
      return state;
  }
};

// Provider Component
export const POSProvider = ({ children }) => {
  const [state, dispatch] = useReducer(posReducer, initialState);

  return (
    <POSContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </POSContext.Provider>
  );
};
