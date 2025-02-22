import { QueryParamConfigMap, DecodedValueMap } from 'serialize-query-params';
/**
 * Different methods for updating the URL:
 *
 * - replaceIn: Replace just a single parameter, leaving the rest as is
 * - replace: Replace all parameters with just those specified
 * - pushIn: Push just a single parameter, leaving the rest as is (back button works)
 * - push: Push all parameters with just those specified (back button works)
 */
export declare type UrlUpdateType = 'replace' | 'replaceIn' | 'push' | 'pushIn';
/**
 * Adapted history object that provides a consistent interface
 * for pushing or replacing updates to a URL.
 */
export interface PushReplaceHistory {
    push: (location: Location) => void;
    replace: (location: Location) => void;
}
/**
 * The setter function signature mapping
 */
export declare type SetQuery<QPCMap extends QueryParamConfigMap> = (changes: Partial<DecodedValueMap<QPCMap>>, updateType?: UrlUpdateType) => void;
