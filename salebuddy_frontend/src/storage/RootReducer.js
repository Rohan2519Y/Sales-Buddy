const initialState = {
       cart: {},
       user: {}

}

export default function RootReducer(state = initialState, action) {
       switch (action.type) {
              case "ADD_CART":
                     state.cart[action.payload[0]] = action.payload[1]
                     localStorage.setItem('cart', JSON.stringify(state.cart))
                     console.log(state)
                     return { cart: state.cart, user: state.user }
              case "DEL_CART":
                     delete state.cart[action.payload[0]]
                     localStorage.setItem('cart', JSON.stringify(state.cart))
                     return { cart: state.cart, user: state.user }
              case "ADD_USER":
                     state.user[action.payload[0]] = action.payload[1]
                     localStorage.setItem('user', JSON.stringify(state.user))
                     return { cart: state.cart, user: state.user }
              case "CLEAR_CART":
                     state.cart = {}
                     localStorage.removeItem('cart')
                     return { cart: state.cart, user: state.user }
              case "LOGOUT":
                     state.user = {}
                     localStorage.removeItem('user')
                     return { cart: state.cart, user: state.user }
              default:
                     return { cart: state.cart, user: state.user }
       }

}