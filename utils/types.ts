export type RemoveUnderscoreFirstLetter<S extends string> = S extends
    `${infer FirstLetter}${infer U}`
    ? `${FirstLetter extends '_' ? U : `${FirstLetter}${U}`}`
    : S

export type CamelToSnakeCase<S extends string> = S extends
    `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? '_' : ''}${RemoveUnderscoreFirstLetter<
        Lowercase<T>
    >}${CamelToSnakeCase<U>}`
    : S

export type KeysToSnakeCase<T extends object> = {
    [K in keyof T as CamelToSnakeCase<K & string>]: T[K]
}
