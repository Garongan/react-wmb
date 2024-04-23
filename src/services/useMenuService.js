import axiosInstance from "@/api/axiosInstance";

const useMenuService = () => {
    const getAll = async () => {
        const { data } = await axiosInstance.get("/menus");
        return data;
    };
    return {
        getAll,
    };
};

export default useMenuService;
