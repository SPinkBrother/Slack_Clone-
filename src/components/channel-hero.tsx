import { format } from "date-fns";

interface ChannelHeroProps {
    name: string;
    creationTime: number;
};

export const ChannelHero = ({ name, creationTime}:ChannelHeroProps ) => {
    return (
        <div className="mt-[88px] mx-5 mb-4">
            <div>
                <p className="text-2xl font-bold flex items-center mb-2">
                    # {name}
                </p>
                <p className=" font-normal text-slate-800 mb-4">
                    This channel was created {format(creationTime,"MMMM do, yyyy")}. This is the beginning of the <strong>{name}</strong> channel.
                </p>
            </div>
        </div>
    )
}