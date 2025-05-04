import { useQuery } from "convex/react"
import { current } from '../../../../convex/users';
import { api } from "../../../../convex/_generated/api";

export const useCurrentuser = () => {
    const data = useQuery(api.users.current);
    const isLoading = data === undefined;

    return {data, isLoading};
}