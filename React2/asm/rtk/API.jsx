import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../helpers/AxiosHelper"; // Đảm bảo bạn import đúng hàm AxiosHelper

export const login = createAsyncThunk(
    'users/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().post("/users/login", data);
            console.log(response);
            if (response.message === 'Đăng nhập thành công') {
                return response.user;
            }
            return rejectWithValue('Đăng nhập thất bại');
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message); // Chỉ trả về thông điệp lỗi
        }
    }
);

export const register = createAsyncThunk(
    'users/register',
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().post("/users/register", data);
            if (response.message === 'Đăng ký thành công') {
                return data;
            }
            return rejectWithValue('Đăng ký thất bại');
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message); // Chỉ trả về thông điệp lỗi
        }
    }
);

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().get("/products/list");
            // console.log('Fetch Products Response:', response); // Thêm log
            return response; // Giả sử response trả về danh sách sản phẩm trong thuộc tính data
        } catch (error) {
            console.log('Fetch Products Error:', error); // Thêm log
            return rejectWithValue(error.message); // Chỉ trả về thông điệp lỗi
        }
    }
);

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().get("/categories/list");
            // console.log('Fetch Categories Response:', response); // Thêm log
            return response; // Giả sử response trả về danh sách sản phẩm trong thuộc tính data
        } catch (error) {
            console.log('Fetch Categories Error:', error); // Thêm log
            return rejectWithValue(error.message); // Chỉ trả về thông điệp lỗi
        }
    }
);

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (data, { rejectWithValue }) => {
        try {
            const { id, ...userData } = data; // Tách id khỏi dữ liệu để gửi đúng endpoint
            const response = await AxiosHelper().put(`/users/update/${id}`, userData);
            console.log(response);
            if (response.message === 'Cập nhật thành công') {
                return response.user;
            }
            return rejectWithValue('Cập nhật thất bại');
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message); // Chỉ trả về thông điệp lỗi
        }
    }
);





