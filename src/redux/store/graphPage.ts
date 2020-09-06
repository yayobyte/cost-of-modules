import { useSelector } from "react-redux";
import { Store } from "../../types";
import { rootCertificates } from "tls";

/** Get package value selected by user */
export const useUserSelectedPackage = () => {
    const { userSelectedPackage } = useSelector(({ root } : Store) => ({
        userSelectedPackage: root.userSelectedPackage,
    }));
    return { userSelectedPackage };
};

export const useSizes = () => {
    const { gzip, size } = useSelector(({ root } : Store) => ({
        gzip: root.dependency.gzip,
        size: root.dependency.size,
    }));
    return { gzip, size };
};