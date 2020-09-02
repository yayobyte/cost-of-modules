import { useSelector } from "react-redux";
import { PackageInfo, Store } from "../../types";

/** Get results obtained from github */
export const useSuggestions = () => {
    const { suggestions } = useSelector(({ root } : Store) => ({
        suggestions: root.results,
    }));
    return { suggestions };
};

/** Get package information from the user input */
export const usePackageInfo = () : PackageInfo => {
    const { packageName, version } = useSelector(({ root } : Store) => ({
        packageName: root.packageName,
        version: root.version,
    }));
    return { packageName, version };
};