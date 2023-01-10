import { useMutation, useQueryClient } from "react-query";
import { signIn, signOut } from "../services/auth/providers/aws";

const key = "auth";

export function useLoginMutate() {
    const queryClient = useQueryClient();

    return useMutation(signIn, {
        onSuccess: () => {
            queryClient.invalidateQueries([key]);
        },
    });
}

export function useLogoutMutate() {
    const queryClient = useQueryClient();

    return useMutation(signOut, {
        onSuccess: () => {
            queryClient.invalidateQueries([key]);
        },
    });
}
