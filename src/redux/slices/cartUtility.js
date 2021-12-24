export const addItemToCart = (cartItems, cartItemBeingAdded) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.variantId === cartItemBeingAdded.variantId;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.variantId === cartItemBeingAdded.variantId) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else {
        return cartItem;
      }
    });
  }
  return [...cartItems, { ...cartItemBeingAdded, quantity: 1 }];
};

export const subtractItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.variantId === cartItemToRemove.variantId;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.variantId !== cartItemToRemove.variantId;
    });
  }

  return cartItems.map((cartItem) => {
    if (cartItem.variantId === cartItemToRemove.variantId) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
};
