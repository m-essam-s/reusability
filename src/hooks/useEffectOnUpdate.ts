import { useEffect, useRef } from "react";

const useEffectOnUpdate = <T>(effectFunction: () => void, deps: T[]) => {
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            effectFunction();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

export default useEffectOnUpdate;