import { useSelector } from "react-redux";
import { Store } from "../../types";

/** Get the page controller from redux state */
export const usePage = () => {
    const { page } = useSelector(({ root } : Store) => ({
        page: root.page,
    }));
    return { page };
};
