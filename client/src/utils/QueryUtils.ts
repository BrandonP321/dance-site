import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ResponsiveState } from "../features/slices/responsiveSlice";

export const client = new ApolloClient({
    uri: "https://api-us-west-2.graphcms.com/v2/ckslfyxai0kzt01yuhtib9yha/master",
    cache: new InMemoryCache()
})

interface IQueryAsset {
    url: string;
}

export const getQueryAssetUrl = (asset: IQueryAsset) => {
    return asset?.url;
}

export const getResponsiveQueryImgUrl = (desktopImg: IQueryAsset, mobileImg: IQueryAsset, responsiveState: ResponsiveState, convertToUrlString=false) => {
    const url = responsiveState.mobile
        ? mobileImg?.url
        : desktopImg?.url

    if (!url) {
        return undefined;
    } else if (convertToUrlString) {
        return `url(${url})`;
    } else {
        return url;
    }
}