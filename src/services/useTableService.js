import axiosInstance from "@/api/axiosInstance";

const useTableService = () => {
    const getAll = async () => {
        const { data } = await axiosInstance.get("/tables");
        return data;
    };
    
    const create = async (payload) => {
        const { data } = await axiosInstance.post("/tables", payload);
        return data;
    }
    
    return {
        getAll,
        create
    };
};

export default useTableService;
