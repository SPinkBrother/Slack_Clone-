
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { useCreateWorkspace } from '../api/use-create-workspaces';
  import { useCreateWorkSpacesModal } from "../store/use-create-workspace-modal"
import { toast } from "sonner";
 
export const CreateWorkspaceModal = () => {

    const router = useRouter();
    const [open,setOpen] = useCreateWorkSpacesModal();
    const [name,setName] = useState("");

    const {mutate, isPending} = useCreateWorkspace();

    const handlerClose =() =>{
        setOpen(false);
        setName("");
    };

    const handlerSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate({name}, {
            onSuccess(id) {
                toast.success("Workspace created");
                router.push(`/workspace/${id}`);
                handlerClose();
            },
        })
    };

    return(
        <Dialog open={open} onOpenChange={handlerClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a workspace</DialogTitle>
                </DialogHeader>
                <form onSubmit={handlerSubmit} className="space-y-4">
                    <Input 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        disabled={isPending}
                        required
                        autoFocus
                        minLength={3}
                        placeholder="Workspace name e.g. 'Work','Personal'"
                    />
                    <div className="flex justify-end">
                        <Button disabled={isPending}>Create</Button>
                    </div>                
                </form>
            </DialogContent>
        </Dialog>
    );
  };