import axiosInstance from "@/api/axiosInstance";

const useTableService = () => {
    const getAll = async () => {
        const { data } = await axiosInstance.get("/tables");
        return data;
    };
    
    return {
        getAll,
    };
};

export default useTableService;
