import { useQuery, useQueryClient } from "react-query";
import { getBids } from "../services/auth/providers/user";

const key = "bids";

export function useGetUserQuery() {
    return useQuery([key], getBids);
}

export function useGetQuery() {
    const queryClient = useQueryClient();
    return queryClient.getQueryData([key]);
}
