import { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"

  import { useCreateChannel } from "../api/use-create-channel"
  import { useCreateChannelModal } from "../store/use-create-channel-modal"
import { useWorkSpaceId } from "@/hooks/use-workspace-id"

export const CreateChannelModal = () =>{

    const workspaceId = useWorkSpaceId();
    
    const [open, setOpen] = useCreateChannelModal()

    const  {mutate,isPending} = useCreateChannel()

    const [name, setName] = useState("");

    const handleClose = () => {
        setName("");
        setOpen(false);
    };

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
        setName(value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(
            {name, workspaceId},
            {
                onSuccess: (id) => {
                    // Redirect to new channel
                    handleClose();
                }
            }
        )
    }

    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add a channel
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className=" space-y-4">
                    <Input
                        value={name}
                        disabled={isPending}
                        onChange={handlerChange}
                        required
                        autoFocus
                        minLength={3}
                        maxLength={80}
                        placeholder="e.g. plan-budget"
                    />

                    <div className=" flex justify-end">
                        <Button disabled={isPending}>
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}