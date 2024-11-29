import { FC } from "react";
import { FourSquare } from "react-loading-indicators";

interface LoadingProps {
    color?: string;
    size?: "medium" | "small" | "large";
    text?: string;
}

const Loading: FC<LoadingProps> = ({ color = "#22edf6", size = "medium", text = "Loading..." }) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <FourSquare color={color} size={size} text={text} />
        </div>
    );
};

export default Loading;
