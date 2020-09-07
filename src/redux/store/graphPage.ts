import { useSelector } from "react-redux";
import { Store } from "../../types";

type Props = {
    gzip: number,
    size: number,
}

/** Get package value selected by user */
export const useUserSelectedPackage = () => {
    const { userSelectedPackage } = useSelector(({ root } : Store) => ({
        userSelectedPackage: root.userSelectedPackage,
    }));
    return { userSelectedPackage };
};

export const useSizes = () => {
    const dependency = useSelector(({ root } : Store) => (root.dependency));
    const lastVersion  = Object.keys(dependency).map(item => item).pop();
    const lastVersionPackage = dependency[lastVersion || ""];
    const  { gzip, size } = lastVersionPackage || {};
    return { gzip, size };
};

export const useVersionsArray = () => {
    const dependency = useSelector(({ root } : Store) => (root.dependency));
    const versionsArray  = Object.keys(dependency).map(item => dependency[item]).slice(dependency.lenght - 9, dependency.lenght);
    return { versionsArray };
};