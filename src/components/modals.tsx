"use client";

import { useEffect, useState } from "react";
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspaces-modal";
import { CreateChannelModal } from "@/features/channels/components/create-channel-modal";

export const Modals = () => {
    // only show modals when on client
    // prevent Hydration missmatch

    // Because Nextjs will go after HTMl , and dont want to show up if not necessary
    const [mounted,setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
    }, []);

    if(!mounted ) return null;
    return (
        <>
            <CreateChannelModal/>
            <CreateWorkspaceModal/>
        </>
    );
};