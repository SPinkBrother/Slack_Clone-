import { useMutation } from "convex/react";

import { api } from "../../../../convex/_generated/api";
import { mutation } from '../../../../convex/_generated/server';
import { useCallback, useMemo, useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";

type RequestType = {name: string; id: Id<"channels"> } ;
type ResponseType = Id<"channels">| null;

type Options = {
    onSuccess?: (data: ResponseType) => void;
    onError?: (error: Error)=> void;
    onSettled?: () => void;
    throwError?: boolean;
}

export const useUpdateChannel  = () =>{
    const [data, setData] = useState<ResponseType>(null);
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState< "success"| "error" | "pending" | "settled" | null>(null);


    const isPending = useMemo(() => status === "pending", [status]);
    const isSuccess = useMemo(() => status === "success", [status]);
    const isError = useMemo(() => status === "error", [status]);
    const isSettled = useMemo(() => status === "settled", [status]);

    const mutation = useMutation(api.channels.update);

    const mutate = useCallback(async (values: RequestType, options?: Options) => {
        try {

            setData(null);
            setError(null);
            setStatus("pending");


            const response = await mutation(values);
            options?.onSuccess?.(response);
            return response;
        } catch(error) {
            setStatus("error")
            // Make sure it give right error value
            options?.onError?.(error as Error);

            if(options?.throwError){
                throw error;
            }
        } finally {
            setStatus("settled");
            // for clean up
            options?.onSettled?.();
        }
    } , [mutation])

    return {
        mutate,
        data,
        error,
        isPending,
        isSuccess,
        isError,
        isSettled,
    };

};