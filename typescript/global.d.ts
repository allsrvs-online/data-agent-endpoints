type Variable = string | number | Record<string, any>;

declare function gql<T>(
  query: string,
  variables?: Record<string, Variable>
): Promise<T>;

// declare function context<T = string>(variable: string): Promise<T>;

declare function fetch<T = any>(url: string, options?: any): Promise<T>;
