import {atom, useAtom} from "jotai"

const modalState = atom(false);

export const useCreateWorkSpacesModal = () => {
    return useAtom(modalState)
}