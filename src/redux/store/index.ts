import { useSelector } from "react-redux";
import { StoreType } from "../../types";

export const useSuggestions = () => {
    const { suggestions } = useSelector(({ store } : { store: StoreType }) => ({
        suggestions: store.results,
    }));
    return { suggestions };
};
