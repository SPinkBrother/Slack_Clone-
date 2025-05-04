"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { useCreateWorkSpacesModal } from "../store/use-create-workspace-modal"
 
export const CreateWorkspaceModal = () => {
    const [open,setOpen] = useCreateWorkSpacesModal();

    const handlerClose =() =>{
        setOpen(false);
    };

    return(
        <Dialog open={open} onOpenChange={handlerClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a workspace</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
  };