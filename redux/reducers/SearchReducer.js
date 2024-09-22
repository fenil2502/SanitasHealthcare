import { Constants } from "../../utils/Constants";
import { SEARCH_PARAMS, SEARCH_RESULT, SEARCH_TYPE } from "../constants/SearchConstants";

const initTextSearch = {
    pageNo: 1,
    pageSize: 15,
    orderByColumn: 'ProductName',
    orderFlag: 0,
    searchText: '',
    searchType: ''
};

const initSearchResult = {
    pageNo: 1,
    pageSize: 15,
    orderByColumn: 'ProductName',
    orderFlag: 0,
    searchText: '',
    productList: [],
    appliedFilters: {
        availabilities: [],
        prices: [],
        others: []
    }
};

const initState = {
    textSearchParams: initTextSearch,
    searchResultParams: initSearchResult,
    searchType: Constants.SearchConstant.TextType
};

const SearchReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_PARAMS:
            return {
                ...state,
                textSearchParams: Object.assign({}, action.value)
            }
        case SEARCH_RESULT:
            return {
                ...state,
                searchResultParams: Object.assign({}, action.value)
            }
        case SEARCH_TYPE:
            return{
                ...state,
                searchType: action.value
            }
    }
    return state;
};

export default SearchReducer;