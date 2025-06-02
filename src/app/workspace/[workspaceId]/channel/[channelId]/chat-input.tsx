import { useChannelId } from "@/hooks/use-channel-id";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { useCreateMessage } from "@/features/messages/api/use-create-message";

import dynamic from "next/dynamic"
import Quill from "quill";
import { useRef, useState } from "react";
import { toast } from "sonner";

const Editor = dynamic(() => import ("@/components/editor"),{ssr: false});

interface ChatInputProps {
    placeholder: string;
}

export const ChatInput = ({ placeholder} : ChatInputProps) => {
    // Trick to clean after Enter
    const [editorKey, setEditorKey] = useState(0);
    const [isPending, setIsPending] = useState(false);

    const editorRef = useRef <Quill | null >(null);

    const workspaceId = useWorkSpaceId();
    const channelId = useChannelId();
    const { mutate: createMessage} = useCreateMessage();

    const handleSubmit = async ({
        body,
        image
    }: {
        body: string;
        image: File | null;
    }) => {
        try{
            setIsPending(true);
            await createMessage({
                workspaceId,
                channelId,
                body,
                // image: undefined,
            }, { throwError: true});
    
            setEditorKey((prevKey) => prevKey + 1);
        } catch(error) {
            toast.error("Failed to send message")
        } finally{
            setIsPending(false);
        }
    } ;

    

    return(
        <div className=" px-5 w-full">
            <Editor
                key={editorKey}
                placeholder={placeholder}
                onSubmit={handleSubmit}
                disabled={isPending}
                innerRef={editorRef}
               />
        </div>
    )
}