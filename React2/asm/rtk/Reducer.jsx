import { createSlice } from "@reduxjs/toolkit";
import { login, register, fetchProducts, fetchCategories } from "./API";

const initialState = {
    user: null, // thông tin user đăng nhập
    cart: [], // {_id, name, price, quantity, images}
    products: [], // Danh sách sản phẩm
    categories: [], //danh sách danh mục
    status: 'idle', // Trạng thái yêu cầu
    error: null // Lỗi nếu có
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;
            const index = state.cart.findIndex(e => e._id === item._id);
            if (index === -1) {
                state.cart.push({ ...item });
            } else {
                state.cart[index].quantity = item.quantity;
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload);
        },
        changeQuantity: (state, action) => {
            const { _id, quantity } = action.payload;
            const index = state.cart.findIndex(item => item._id === _id);
            if (index !== -1) {
                state.cart[index].quantity = quantity;
                if (state.cart[index].quantity <= 0) {
                    state.cart.splice(index, 1);
                }
            }
        },
        logout: (state) => {
            state.user = null;
        },
        clearCart: (state) => {
            state.cart = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log("...Rejected");
            state.user = null;
        });

        builder.addCase(register.pending, (state, action) => {
            console.log('Đang chờ...');
        });
        builder.addCase(register.fulfilled, (state, action) => {
            console.log('Đăng ký thành công');
        });
        builder.addCase(register.rejected, (state, action) => {
            console.log('Bị từ chối');
            state.user = null;
        });
        
        // Xử lý fetchProducts
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
        
        // Xử lý fetchProducts
        builder.addCase(fetchCategories.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.categories = [{ _id: 'All', name: 'All'}, ...action.payload];
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });

    }
});

export const { addItemToCart, logout, clearCart, changeQuantity, removeItem } = appSlice.actions;
export default appSlice.reducer;




