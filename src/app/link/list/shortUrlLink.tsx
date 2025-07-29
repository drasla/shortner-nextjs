"use client";

import { useEffect, useState } from "react";

type Props = {
    shortCode: string;
};

function ShortUrlLink({ shortCode }: Props) {
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        setOrigin(window.location.origin);
    }, []);

    const handleCopy = () => {
        if (shortCode) {
            navigator.clipboard.writeText(origin + "/" + shortCode).then(_ => {});
        }
    };

    if (!origin) return null;

    return (
        <div onClick={handleCopy}>
            {origin}/{shortCode}
        </div>
    );
}

export default ShortUrlLink;
