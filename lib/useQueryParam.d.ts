import { EncodedQueryWithNulls, QueryParamConfig } from 'serialize-query-params';
/**
 * Given a query param name and query parameter configuration ({ encode, decode })
 * return the decoded value and a setter for updating it.
 *
 * The setter takes two arguments (newValue, updateType) where updateType
 * is one of 'replace' | 'replaceIn' | 'push' | 'pushIn', defaulting to
 * 'replaceIn'.
 *
 * You may optionally pass in a rawQuery object, otherwise the query is derived
 * from the location available in the QueryParamContext.
 *
 * D = decoded type
 * D2 = return value from decode (typically same as D)
 */
export declare const useQueryParam: <D, D2 = D>(name: string, paramConfig?: QueryParamConfig<D, D2>, rawQuery?: EncodedQueryWithNulls | undefined) => [D2 | undefined, (newValue: D, updateType?: "replace" | "replaceIn" | "push" | "pushIn" | undefined) => void];
