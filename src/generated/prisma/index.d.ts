
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UploadedFile
 * 
 */
export type UploadedFile = $Result.DefaultSelection<Prisma.$UploadedFilePayload>
/**
 * Model PhoneData
 * 
 */
export type PhoneData = $Result.DefaultSelection<Prisma.$PhoneDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadedFile`: Exposes CRUD operations for the **UploadedFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadedFiles
    * const uploadedFiles = await prisma.uploadedFile.findMany()
    * ```
    */
  get uploadedFile(): Prisma.UploadedFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phoneData`: Exposes CRUD operations for the **PhoneData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneData
    * const phoneData = await prisma.phoneData.findMany()
    * ```
    */
  get phoneData(): Prisma.PhoneDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UploadedFile: 'UploadedFile',
    PhoneData: 'PhoneData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "uploadedFile" | "phoneData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UploadedFile: {
        payload: Prisma.$UploadedFilePayload<ExtArgs>
        fields: Prisma.UploadedFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadedFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadedFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          findFirst: {
            args: Prisma.UploadedFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadedFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          findMany: {
            args: Prisma.UploadedFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          create: {
            args: Prisma.UploadedFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          createMany: {
            args: Prisma.UploadedFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadedFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          delete: {
            args: Prisma.UploadedFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          update: {
            args: Prisma.UploadedFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          deleteMany: {
            args: Prisma.UploadedFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadedFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadedFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          upsert: {
            args: Prisma.UploadedFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          aggregate: {
            args: Prisma.UploadedFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadedFile>
          }
          groupBy: {
            args: Prisma.UploadedFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadedFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadedFileCountArgs<ExtArgs>
            result: $Utils.Optional<UploadedFileCountAggregateOutputType> | number
          }
        }
      }
      PhoneData: {
        payload: Prisma.$PhoneDataPayload<ExtArgs>
        fields: Prisma.PhoneDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>
          }
          findFirst: {
            args: Prisma.PhoneDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>
          }
          findMany: {
            args: Prisma.PhoneDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>[]
          }
          create: {
            args: Prisma.PhoneDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>
          }
          createMany: {
            args: Prisma.PhoneDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>[]
          }
          delete: {
            args: Prisma.PhoneDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>
          }
          update: {
            args: Prisma.PhoneDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>
          }
          deleteMany: {
            args: Prisma.PhoneDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>[]
          }
          upsert: {
            args: Prisma.PhoneDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneDataPayload>
          }
          aggregate: {
            args: Prisma.PhoneDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneData>
          }
          groupBy: {
            args: Prisma.PhoneDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneDataCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    uploadedFile?: UploadedFileOmit
    phoneData?: PhoneDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UploadedFileCountOutputType
   */

  export type UploadedFileCountOutputType = {
    phoneData: number
  }

  export type UploadedFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phoneData?: boolean | UploadedFileCountOutputTypeCountPhoneDataArgs
  }

  // Custom InputTypes
  /**
   * UploadedFileCountOutputType without action
   */
  export type UploadedFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFileCountOutputType
     */
    select?: UploadedFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UploadedFileCountOutputType without action
   */
  export type UploadedFileCountOutputTypeCountPhoneDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model UploadedFile
   */

  export type AggregateUploadedFile = {
    _count: UploadedFileCountAggregateOutputType | null
    _avg: UploadedFileAvgAggregateOutputType | null
    _sum: UploadedFileSumAggregateOutputType | null
    _min: UploadedFileMinAggregateOutputType | null
    _max: UploadedFileMaxAggregateOutputType | null
  }

  export type UploadedFileAvgAggregateOutputType = {
    fileSize: number | null
    recordCount: number | null
  }

  export type UploadedFileSumAggregateOutputType = {
    fileSize: number | null
    recordCount: number | null
  }

  export type UploadedFileMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSize: number | null
    recordCount: number | null
    uploadDate: Date | null
    status: string | null
  }

  export type UploadedFileMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSize: number | null
    recordCount: number | null
    uploadDate: Date | null
    status: string | null
  }

  export type UploadedFileCountAggregateOutputType = {
    id: number
    fileName: number
    fileSize: number
    recordCount: number
    uploadDate: number
    status: number
    _all: number
  }


  export type UploadedFileAvgAggregateInputType = {
    fileSize?: true
    recordCount?: true
  }

  export type UploadedFileSumAggregateInputType = {
    fileSize?: true
    recordCount?: true
  }

  export type UploadedFileMinAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    recordCount?: true
    uploadDate?: true
    status?: true
  }

  export type UploadedFileMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    recordCount?: true
    uploadDate?: true
    status?: true
  }

  export type UploadedFileCountAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    recordCount?: true
    uploadDate?: true
    status?: true
    _all?: true
  }

  export type UploadedFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedFile to aggregate.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadedFiles
    **/
    _count?: true | UploadedFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadedFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadedFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadedFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadedFileMaxAggregateInputType
  }

  export type GetUploadedFileAggregateType<T extends UploadedFileAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadedFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadedFile[P]>
      : GetScalarType<T[P], AggregateUploadedFile[P]>
  }




  export type UploadedFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadedFileWhereInput
    orderBy?: UploadedFileOrderByWithAggregationInput | UploadedFileOrderByWithAggregationInput[]
    by: UploadedFileScalarFieldEnum[] | UploadedFileScalarFieldEnum
    having?: UploadedFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadedFileCountAggregateInputType | true
    _avg?: UploadedFileAvgAggregateInputType
    _sum?: UploadedFileSumAggregateInputType
    _min?: UploadedFileMinAggregateInputType
    _max?: UploadedFileMaxAggregateInputType
  }

  export type UploadedFileGroupByOutputType = {
    id: string
    fileName: string
    fileSize: number
    recordCount: number
    uploadDate: Date
    status: string
    _count: UploadedFileCountAggregateOutputType | null
    _avg: UploadedFileAvgAggregateOutputType | null
    _sum: UploadedFileSumAggregateOutputType | null
    _min: UploadedFileMinAggregateOutputType | null
    _max: UploadedFileMaxAggregateOutputType | null
  }

  type GetUploadedFileGroupByPayload<T extends UploadedFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadedFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadedFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadedFileGroupByOutputType[P]>
            : GetScalarType<T[P], UploadedFileGroupByOutputType[P]>
        }
      >
    >


  export type UploadedFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    recordCount?: boolean
    uploadDate?: boolean
    status?: boolean
    phoneData?: boolean | UploadedFile$phoneDataArgs<ExtArgs>
    _count?: boolean | UploadedFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    recordCount?: boolean
    uploadDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    recordCount?: boolean
    uploadDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    recordCount?: boolean
    uploadDate?: boolean
    status?: boolean
  }

  export type UploadedFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileSize" | "recordCount" | "uploadDate" | "status", ExtArgs["result"]["uploadedFile"]>
  export type UploadedFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phoneData?: boolean | UploadedFile$phoneDataArgs<ExtArgs>
    _count?: boolean | UploadedFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UploadedFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UploadedFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UploadedFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadedFile"
    objects: {
      phoneData: Prisma.$PhoneDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      fileSize: number
      recordCount: number
      uploadDate: Date
      status: string
    }, ExtArgs["result"]["uploadedFile"]>
    composites: {}
  }

  type UploadedFileGetPayload<S extends boolean | null | undefined | UploadedFileDefaultArgs> = $Result.GetResult<Prisma.$UploadedFilePayload, S>

  type UploadedFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadedFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadedFileCountAggregateInputType | true
    }

  export interface UploadedFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadedFile'], meta: { name: 'UploadedFile' } }
    /**
     * Find zero or one UploadedFile that matches the filter.
     * @param {UploadedFileFindUniqueArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadedFileFindUniqueArgs>(args: SelectSubset<T, UploadedFileFindUniqueArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadedFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadedFileFindUniqueOrThrowArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadedFileFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadedFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindFirstArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadedFileFindFirstArgs>(args?: SelectSubset<T, UploadedFileFindFirstArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindFirstOrThrowArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadedFileFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadedFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadedFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadedFiles
     * const uploadedFiles = await prisma.uploadedFile.findMany()
     * 
     * // Get first 10 UploadedFiles
     * const uploadedFiles = await prisma.uploadedFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadedFileFindManyArgs>(args?: SelectSubset<T, UploadedFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadedFile.
     * @param {UploadedFileCreateArgs} args - Arguments to create a UploadedFile.
     * @example
     * // Create one UploadedFile
     * const UploadedFile = await prisma.uploadedFile.create({
     *   data: {
     *     // ... data to create a UploadedFile
     *   }
     * })
     * 
     */
    create<T extends UploadedFileCreateArgs>(args: SelectSubset<T, UploadedFileCreateArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadedFiles.
     * @param {UploadedFileCreateManyArgs} args - Arguments to create many UploadedFiles.
     * @example
     * // Create many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadedFileCreateManyArgs>(args?: SelectSubset<T, UploadedFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadedFiles and returns the data saved in the database.
     * @param {UploadedFileCreateManyAndReturnArgs} args - Arguments to create many UploadedFiles.
     * @example
     * // Create many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadedFiles and only return the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadedFileCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadedFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadedFile.
     * @param {UploadedFileDeleteArgs} args - Arguments to delete one UploadedFile.
     * @example
     * // Delete one UploadedFile
     * const UploadedFile = await prisma.uploadedFile.delete({
     *   where: {
     *     // ... filter to delete one UploadedFile
     *   }
     * })
     * 
     */
    delete<T extends UploadedFileDeleteArgs>(args: SelectSubset<T, UploadedFileDeleteArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadedFile.
     * @param {UploadedFileUpdateArgs} args - Arguments to update one UploadedFile.
     * @example
     * // Update one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadedFileUpdateArgs>(args: SelectSubset<T, UploadedFileUpdateArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadedFiles.
     * @param {UploadedFileDeleteManyArgs} args - Arguments to filter UploadedFiles to delete.
     * @example
     * // Delete a few UploadedFiles
     * const { count } = await prisma.uploadedFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadedFileDeleteManyArgs>(args?: SelectSubset<T, UploadedFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadedFileUpdateManyArgs>(args: SelectSubset<T, UploadedFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedFiles and returns the data updated in the database.
     * @param {UploadedFileUpdateManyAndReturnArgs} args - Arguments to update many UploadedFiles.
     * @example
     * // Update many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadedFiles and only return the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadedFileUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadedFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadedFile.
     * @param {UploadedFileUpsertArgs} args - Arguments to update or create a UploadedFile.
     * @example
     * // Update or create a UploadedFile
     * const uploadedFile = await prisma.uploadedFile.upsert({
     *   create: {
     *     // ... data to create a UploadedFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadedFile we want to update
     *   }
     * })
     */
    upsert<T extends UploadedFileUpsertArgs>(args: SelectSubset<T, UploadedFileUpsertArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileCountArgs} args - Arguments to filter UploadedFiles to count.
     * @example
     * // Count the number of UploadedFiles
     * const count = await prisma.uploadedFile.count({
     *   where: {
     *     // ... the filter for the UploadedFiles we want to count
     *   }
     * })
    **/
    count<T extends UploadedFileCountArgs>(
      args?: Subset<T, UploadedFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadedFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadedFileAggregateArgs>(args: Subset<T, UploadedFileAggregateArgs>): Prisma.PrismaPromise<GetUploadedFileAggregateType<T>>

    /**
     * Group by UploadedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadedFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadedFileGroupByArgs['orderBy'] }
        : { orderBy?: UploadedFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadedFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadedFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadedFile model
   */
  readonly fields: UploadedFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadedFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadedFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phoneData<T extends UploadedFile$phoneDataArgs<ExtArgs> = {}>(args?: Subset<T, UploadedFile$phoneDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadedFile model
   */
  interface UploadedFileFieldRefs {
    readonly id: FieldRef<"UploadedFile", 'String'>
    readonly fileName: FieldRef<"UploadedFile", 'String'>
    readonly fileSize: FieldRef<"UploadedFile", 'Int'>
    readonly recordCount: FieldRef<"UploadedFile", 'Int'>
    readonly uploadDate: FieldRef<"UploadedFile", 'DateTime'>
    readonly status: FieldRef<"UploadedFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UploadedFile findUnique
   */
  export type UploadedFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile findUniqueOrThrow
   */
  export type UploadedFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile findFirst
   */
  export type UploadedFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile findFirstOrThrow
   */
  export type UploadedFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile findMany
   */
  export type UploadedFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFiles to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile create
   */
  export type UploadedFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadedFile.
     */
    data: XOR<UploadedFileCreateInput, UploadedFileUncheckedCreateInput>
  }

  /**
   * UploadedFile createMany
   */
  export type UploadedFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadedFiles.
     */
    data: UploadedFileCreateManyInput | UploadedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedFile createManyAndReturn
   */
  export type UploadedFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data used to create many UploadedFiles.
     */
    data: UploadedFileCreateManyInput | UploadedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedFile update
   */
  export type UploadedFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadedFile.
     */
    data: XOR<UploadedFileUpdateInput, UploadedFileUncheckedUpdateInput>
    /**
     * Choose, which UploadedFile to update.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile updateMany
   */
  export type UploadedFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadedFiles.
     */
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyInput>
    /**
     * Filter which UploadedFiles to update
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to update.
     */
    limit?: number
  }

  /**
   * UploadedFile updateManyAndReturn
   */
  export type UploadedFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data used to update UploadedFiles.
     */
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyInput>
    /**
     * Filter which UploadedFiles to update
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to update.
     */
    limit?: number
  }

  /**
   * UploadedFile upsert
   */
  export type UploadedFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadedFile to update in case it exists.
     */
    where: UploadedFileWhereUniqueInput
    /**
     * In case the UploadedFile found by the `where` argument doesn't exist, create a new UploadedFile with this data.
     */
    create: XOR<UploadedFileCreateInput, UploadedFileUncheckedCreateInput>
    /**
     * In case the UploadedFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadedFileUpdateInput, UploadedFileUncheckedUpdateInput>
  }

  /**
   * UploadedFile delete
   */
  export type UploadedFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter which UploadedFile to delete.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile deleteMany
   */
  export type UploadedFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedFiles to delete
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to delete.
     */
    limit?: number
  }

  /**
   * UploadedFile.phoneData
   */
  export type UploadedFile$phoneDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    where?: PhoneDataWhereInput
    orderBy?: PhoneDataOrderByWithRelationInput | PhoneDataOrderByWithRelationInput[]
    cursor?: PhoneDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneDataScalarFieldEnum | PhoneDataScalarFieldEnum[]
  }

  /**
   * UploadedFile without action
   */
  export type UploadedFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
  }


  /**
   * Model PhoneData
   */

  export type AggregatePhoneData = {
    _count: PhoneDataCountAggregateOutputType | null
    _min: PhoneDataMinAggregateOutputType | null
    _max: PhoneDataMaxAggregateOutputType | null
  }

  export type PhoneDataMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    telNum: string | null
    customTitle: string | null
    classificationName: string | null
    parentClassificationName: string | null
    city: string | null
    address: string | null
    regCity: string | null
    regProvince: string | null
  }

  export type PhoneDataMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    telNum: string | null
    customTitle: string | null
    classificationName: string | null
    parentClassificationName: string | null
    city: string | null
    address: string | null
    regCity: string | null
    regProvince: string | null
  }

  export type PhoneDataCountAggregateOutputType = {
    id: number
    fileId: number
    telNum: number
    customTitle: number
    classificationName: number
    parentClassificationName: number
    city: number
    address: number
    regCity: number
    regProvince: number
    _all: number
  }


  export type PhoneDataMinAggregateInputType = {
    id?: true
    fileId?: true
    telNum?: true
    customTitle?: true
    classificationName?: true
    parentClassificationName?: true
    city?: true
    address?: true
    regCity?: true
    regProvince?: true
  }

  export type PhoneDataMaxAggregateInputType = {
    id?: true
    fileId?: true
    telNum?: true
    customTitle?: true
    classificationName?: true
    parentClassificationName?: true
    city?: true
    address?: true
    regCity?: true
    regProvince?: true
  }

  export type PhoneDataCountAggregateInputType = {
    id?: true
    fileId?: true
    telNum?: true
    customTitle?: true
    classificationName?: true
    parentClassificationName?: true
    city?: true
    address?: true
    regCity?: true
    regProvince?: true
    _all?: true
  }

  export type PhoneDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneData to aggregate.
     */
    where?: PhoneDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneData to fetch.
     */
    orderBy?: PhoneDataOrderByWithRelationInput | PhoneDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneData
    **/
    _count?: true | PhoneDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneDataMaxAggregateInputType
  }

  export type GetPhoneDataAggregateType<T extends PhoneDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneData[P]>
      : GetScalarType<T[P], AggregatePhoneData[P]>
  }




  export type PhoneDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneDataWhereInput
    orderBy?: PhoneDataOrderByWithAggregationInput | PhoneDataOrderByWithAggregationInput[]
    by: PhoneDataScalarFieldEnum[] | PhoneDataScalarFieldEnum
    having?: PhoneDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneDataCountAggregateInputType | true
    _min?: PhoneDataMinAggregateInputType
    _max?: PhoneDataMaxAggregateInputType
  }

  export type PhoneDataGroupByOutputType = {
    id: string
    fileId: string
    telNum: string
    customTitle: string | null
    classificationName: string | null
    parentClassificationName: string | null
    city: string | null
    address: string | null
    regCity: string | null
    regProvince: string | null
    _count: PhoneDataCountAggregateOutputType | null
    _min: PhoneDataMinAggregateOutputType | null
    _max: PhoneDataMaxAggregateOutputType | null
  }

  type GetPhoneDataGroupByPayload<T extends PhoneDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneDataGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneDataGroupByOutputType[P]>
        }
      >
    >


  export type PhoneDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    telNum?: boolean
    customTitle?: boolean
    classificationName?: boolean
    parentClassificationName?: boolean
    city?: boolean
    address?: boolean
    regCity?: boolean
    regProvince?: boolean
    uploadedFile?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneData"]>

  export type PhoneDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    telNum?: boolean
    customTitle?: boolean
    classificationName?: boolean
    parentClassificationName?: boolean
    city?: boolean
    address?: boolean
    regCity?: boolean
    regProvince?: boolean
    uploadedFile?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneData"]>

  export type PhoneDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    telNum?: boolean
    customTitle?: boolean
    classificationName?: boolean
    parentClassificationName?: boolean
    city?: boolean
    address?: boolean
    regCity?: boolean
    regProvince?: boolean
    uploadedFile?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneData"]>

  export type PhoneDataSelectScalar = {
    id?: boolean
    fileId?: boolean
    telNum?: boolean
    customTitle?: boolean
    classificationName?: boolean
    parentClassificationName?: boolean
    city?: boolean
    address?: boolean
    regCity?: boolean
    regProvince?: boolean
  }

  export type PhoneDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "telNum" | "customTitle" | "classificationName" | "parentClassificationName" | "city" | "address" | "regCity" | "regProvince", ExtArgs["result"]["phoneData"]>
  export type PhoneDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedFile?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }
  export type PhoneDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedFile?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }
  export type PhoneDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedFile?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }

  export type $PhoneDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneData"
    objects: {
      uploadedFile: Prisma.$UploadedFilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      telNum: string
      customTitle: string | null
      classificationName: string | null
      parentClassificationName: string | null
      city: string | null
      address: string | null
      regCity: string | null
      regProvince: string | null
    }, ExtArgs["result"]["phoneData"]>
    composites: {}
  }

  type PhoneDataGetPayload<S extends boolean | null | undefined | PhoneDataDefaultArgs> = $Result.GetResult<Prisma.$PhoneDataPayload, S>

  type PhoneDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneDataCountAggregateInputType | true
    }

  export interface PhoneDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneData'], meta: { name: 'PhoneData' } }
    /**
     * Find zero or one PhoneData that matches the filter.
     * @param {PhoneDataFindUniqueArgs} args - Arguments to find a PhoneData
     * @example
     * // Get one PhoneData
     * const phoneData = await prisma.phoneData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneDataFindUniqueArgs>(args: SelectSubset<T, PhoneDataFindUniqueArgs<ExtArgs>>): Prisma__PhoneDataClient<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhoneData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneDataFindUniqueOrThrowArgs} args - Arguments to find a PhoneData
     * @example
     * // Get one PhoneData
     * const phoneData = await prisma.phoneData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneDataClient<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneDataFindFirstArgs} args - Arguments to find a PhoneData
     * @example
     * // Get one PhoneData
     * const phoneData = await prisma.phoneData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneDataFindFirstArgs>(args?: SelectSubset<T, PhoneDataFindFirstArgs<ExtArgs>>): Prisma__PhoneDataClient<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneDataFindFirstOrThrowArgs} args - Arguments to find a PhoneData
     * @example
     * // Get one PhoneData
     * const phoneData = await prisma.phoneData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneDataClient<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhoneData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneData
     * const phoneData = await prisma.phoneData.findMany()
     * 
     * // Get first 10 PhoneData
     * const phoneData = await prisma.phoneData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneDataWithIdOnly = await prisma.phoneData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneDataFindManyArgs>(args?: SelectSubset<T, PhoneDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhoneData.
     * @param {PhoneDataCreateArgs} args - Arguments to create a PhoneData.
     * @example
     * // Create one PhoneData
     * const PhoneData = await prisma.phoneData.create({
     *   data: {
     *     // ... data to create a PhoneData
     *   }
     * })
     * 
     */
    create<T extends PhoneDataCreateArgs>(args: SelectSubset<T, PhoneDataCreateArgs<ExtArgs>>): Prisma__PhoneDataClient<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhoneData.
     * @param {PhoneDataCreateManyArgs} args - Arguments to create many PhoneData.
     * @example
     * // Create many PhoneData
     * const phoneData = await prisma.phoneData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneDataCreateManyArgs>(args?: SelectSubset<T, PhoneDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneData and returns the data saved in the database.
     * @param {PhoneDataCreateManyAndReturnArgs} args - Arguments to create many PhoneData.
     * @example
     * // Create many PhoneData
     * const phoneData = await prisma.phoneData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneData and only return the `id`
     * const phoneDataWithIdOnly = await prisma.phoneData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhoneData.
     * @param {PhoneDataDeleteArgs} args - Arguments to delete one PhoneData.
     * @example
     * // Delete one PhoneData
     * const PhoneData = await prisma.phoneData.delete({
     *   where: {
     *     // ... filter to delete one PhoneData
     *   }
     * })
     * 
     */
    delete<T extends PhoneDataDeleteArgs>(args: SelectSubset<T, PhoneDataDeleteArgs<ExtArgs>>): Prisma__PhoneDataClient<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhoneData.
     * @param {PhoneDataUpdateArgs} args - Arguments to update one PhoneData.
     * @example
     * // Update one PhoneData
     * const phoneData = await prisma.phoneData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneDataUpdateArgs>(args: SelectSubset<T, PhoneDataUpdateArgs<ExtArgs>>): Prisma__PhoneDataClient<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhoneData.
     * @param {PhoneDataDeleteManyArgs} args - Arguments to filter PhoneData to delete.
     * @example
     * // Delete a few PhoneData
     * const { count } = await prisma.phoneData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneDataDeleteManyArgs>(args?: SelectSubset<T, PhoneDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneData
     * const phoneData = await prisma.phoneData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneDataUpdateManyArgs>(args: SelectSubset<T, PhoneDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneData and returns the data updated in the database.
     * @param {PhoneDataUpdateManyAndReturnArgs} args - Arguments to update many PhoneData.
     * @example
     * // Update many PhoneData
     * const phoneData = await prisma.phoneData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhoneData and only return the `id`
     * const phoneDataWithIdOnly = await prisma.phoneData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhoneDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhoneData.
     * @param {PhoneDataUpsertArgs} args - Arguments to update or create a PhoneData.
     * @example
     * // Update or create a PhoneData
     * const phoneData = await prisma.phoneData.upsert({
     *   create: {
     *     // ... data to create a PhoneData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneData we want to update
     *   }
     * })
     */
    upsert<T extends PhoneDataUpsertArgs>(args: SelectSubset<T, PhoneDataUpsertArgs<ExtArgs>>): Prisma__PhoneDataClient<$Result.GetResult<Prisma.$PhoneDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhoneData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneDataCountArgs} args - Arguments to filter PhoneData to count.
     * @example
     * // Count the number of PhoneData
     * const count = await prisma.phoneData.count({
     *   where: {
     *     // ... the filter for the PhoneData we want to count
     *   }
     * })
    **/
    count<T extends PhoneDataCountArgs>(
      args?: Subset<T, PhoneDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhoneDataAggregateArgs>(args: Subset<T, PhoneDataAggregateArgs>): Prisma.PrismaPromise<GetPhoneDataAggregateType<T>>

    /**
     * Group by PhoneData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhoneDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneDataGroupByArgs['orderBy'] }
        : { orderBy?: PhoneDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhoneDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneData model
   */
  readonly fields: PhoneDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedFile<T extends UploadedFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UploadedFileDefaultArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneData model
   */
  interface PhoneDataFieldRefs {
    readonly id: FieldRef<"PhoneData", 'String'>
    readonly fileId: FieldRef<"PhoneData", 'String'>
    readonly telNum: FieldRef<"PhoneData", 'String'>
    readonly customTitle: FieldRef<"PhoneData", 'String'>
    readonly classificationName: FieldRef<"PhoneData", 'String'>
    readonly parentClassificationName: FieldRef<"PhoneData", 'String'>
    readonly city: FieldRef<"PhoneData", 'String'>
    readonly address: FieldRef<"PhoneData", 'String'>
    readonly regCity: FieldRef<"PhoneData", 'String'>
    readonly regProvince: FieldRef<"PhoneData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PhoneData findUnique
   */
  export type PhoneDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * Filter, which PhoneData to fetch.
     */
    where: PhoneDataWhereUniqueInput
  }

  /**
   * PhoneData findUniqueOrThrow
   */
  export type PhoneDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * Filter, which PhoneData to fetch.
     */
    where: PhoneDataWhereUniqueInput
  }

  /**
   * PhoneData findFirst
   */
  export type PhoneDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * Filter, which PhoneData to fetch.
     */
    where?: PhoneDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneData to fetch.
     */
    orderBy?: PhoneDataOrderByWithRelationInput | PhoneDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneData.
     */
    cursor?: PhoneDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneData.
     */
    distinct?: PhoneDataScalarFieldEnum | PhoneDataScalarFieldEnum[]
  }

  /**
   * PhoneData findFirstOrThrow
   */
  export type PhoneDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * Filter, which PhoneData to fetch.
     */
    where?: PhoneDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneData to fetch.
     */
    orderBy?: PhoneDataOrderByWithRelationInput | PhoneDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneData.
     */
    cursor?: PhoneDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneData.
     */
    distinct?: PhoneDataScalarFieldEnum | PhoneDataScalarFieldEnum[]
  }

  /**
   * PhoneData findMany
   */
  export type PhoneDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * Filter, which PhoneData to fetch.
     */
    where?: PhoneDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneData to fetch.
     */
    orderBy?: PhoneDataOrderByWithRelationInput | PhoneDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneData.
     */
    cursor?: PhoneDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneData.
     */
    skip?: number
    distinct?: PhoneDataScalarFieldEnum | PhoneDataScalarFieldEnum[]
  }

  /**
   * PhoneData create
   */
  export type PhoneDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneData.
     */
    data: XOR<PhoneDataCreateInput, PhoneDataUncheckedCreateInput>
  }

  /**
   * PhoneData createMany
   */
  export type PhoneDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneData.
     */
    data: PhoneDataCreateManyInput | PhoneDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneData createManyAndReturn
   */
  export type PhoneDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * The data used to create many PhoneData.
     */
    data: PhoneDataCreateManyInput | PhoneDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneData update
   */
  export type PhoneDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneData.
     */
    data: XOR<PhoneDataUpdateInput, PhoneDataUncheckedUpdateInput>
    /**
     * Choose, which PhoneData to update.
     */
    where: PhoneDataWhereUniqueInput
  }

  /**
   * PhoneData updateMany
   */
  export type PhoneDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneData.
     */
    data: XOR<PhoneDataUpdateManyMutationInput, PhoneDataUncheckedUpdateManyInput>
    /**
     * Filter which PhoneData to update
     */
    where?: PhoneDataWhereInput
    /**
     * Limit how many PhoneData to update.
     */
    limit?: number
  }

  /**
   * PhoneData updateManyAndReturn
   */
  export type PhoneDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * The data used to update PhoneData.
     */
    data: XOR<PhoneDataUpdateManyMutationInput, PhoneDataUncheckedUpdateManyInput>
    /**
     * Filter which PhoneData to update
     */
    where?: PhoneDataWhereInput
    /**
     * Limit how many PhoneData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneData upsert
   */
  export type PhoneDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneData to update in case it exists.
     */
    where: PhoneDataWhereUniqueInput
    /**
     * In case the PhoneData found by the `where` argument doesn't exist, create a new PhoneData with this data.
     */
    create: XOR<PhoneDataCreateInput, PhoneDataUncheckedCreateInput>
    /**
     * In case the PhoneData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneDataUpdateInput, PhoneDataUncheckedUpdateInput>
  }

  /**
   * PhoneData delete
   */
  export type PhoneDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
    /**
     * Filter which PhoneData to delete.
     */
    where: PhoneDataWhereUniqueInput
  }

  /**
   * PhoneData deleteMany
   */
  export type PhoneDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneData to delete
     */
    where?: PhoneDataWhereInput
    /**
     * Limit how many PhoneData to delete.
     */
    limit?: number
  }

  /**
   * PhoneData without action
   */
  export type PhoneDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneData
     */
    select?: PhoneDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneData
     */
    omit?: PhoneDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UploadedFileScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileSize: 'fileSize',
    recordCount: 'recordCount',
    uploadDate: 'uploadDate',
    status: 'status'
  };

  export type UploadedFileScalarFieldEnum = (typeof UploadedFileScalarFieldEnum)[keyof typeof UploadedFileScalarFieldEnum]


  export const PhoneDataScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    telNum: 'telNum',
    customTitle: 'customTitle',
    classificationName: 'classificationName',
    parentClassificationName: 'parentClassificationName',
    city: 'city',
    address: 'address',
    regCity: 'regCity',
    regProvince: 'regProvince'
  };

  export type PhoneDataScalarFieldEnum = (typeof PhoneDataScalarFieldEnum)[keyof typeof PhoneDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type UploadedFileWhereInput = {
    AND?: UploadedFileWhereInput | UploadedFileWhereInput[]
    OR?: UploadedFileWhereInput[]
    NOT?: UploadedFileWhereInput | UploadedFileWhereInput[]
    id?: StringFilter<"UploadedFile"> | string
    fileName?: StringFilter<"UploadedFile"> | string
    fileSize?: IntFilter<"UploadedFile"> | number
    recordCount?: IntFilter<"UploadedFile"> | number
    uploadDate?: DateTimeFilter<"UploadedFile"> | Date | string
    status?: StringFilter<"UploadedFile"> | string
    phoneData?: PhoneDataListRelationFilter
  }

  export type UploadedFileOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    phoneData?: PhoneDataOrderByRelationAggregateInput
  }

  export type UploadedFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UploadedFileWhereInput | UploadedFileWhereInput[]
    OR?: UploadedFileWhereInput[]
    NOT?: UploadedFileWhereInput | UploadedFileWhereInput[]
    fileName?: StringFilter<"UploadedFile"> | string
    fileSize?: IntFilter<"UploadedFile"> | number
    recordCount?: IntFilter<"UploadedFile"> | number
    uploadDate?: DateTimeFilter<"UploadedFile"> | Date | string
    status?: StringFilter<"UploadedFile"> | string
    phoneData?: PhoneDataListRelationFilter
  }, "id">

  export type UploadedFileOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    _count?: UploadedFileCountOrderByAggregateInput
    _avg?: UploadedFileAvgOrderByAggregateInput
    _max?: UploadedFileMaxOrderByAggregateInput
    _min?: UploadedFileMinOrderByAggregateInput
    _sum?: UploadedFileSumOrderByAggregateInput
  }

  export type UploadedFileScalarWhereWithAggregatesInput = {
    AND?: UploadedFileScalarWhereWithAggregatesInput | UploadedFileScalarWhereWithAggregatesInput[]
    OR?: UploadedFileScalarWhereWithAggregatesInput[]
    NOT?: UploadedFileScalarWhereWithAggregatesInput | UploadedFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadedFile"> | string
    fileName?: StringWithAggregatesFilter<"UploadedFile"> | string
    fileSize?: IntWithAggregatesFilter<"UploadedFile"> | number
    recordCount?: IntWithAggregatesFilter<"UploadedFile"> | number
    uploadDate?: DateTimeWithAggregatesFilter<"UploadedFile"> | Date | string
    status?: StringWithAggregatesFilter<"UploadedFile"> | string
  }

  export type PhoneDataWhereInput = {
    AND?: PhoneDataWhereInput | PhoneDataWhereInput[]
    OR?: PhoneDataWhereInput[]
    NOT?: PhoneDataWhereInput | PhoneDataWhereInput[]
    id?: StringFilter<"PhoneData"> | string
    fileId?: StringFilter<"PhoneData"> | string
    telNum?: StringFilter<"PhoneData"> | string
    customTitle?: StringNullableFilter<"PhoneData"> | string | null
    classificationName?: StringNullableFilter<"PhoneData"> | string | null
    parentClassificationName?: StringNullableFilter<"PhoneData"> | string | null
    city?: StringNullableFilter<"PhoneData"> | string | null
    address?: StringNullableFilter<"PhoneData"> | string | null
    regCity?: StringNullableFilter<"PhoneData"> | string | null
    regProvince?: StringNullableFilter<"PhoneData"> | string | null
    uploadedFile?: XOR<UploadedFileScalarRelationFilter, UploadedFileWhereInput>
  }

  export type PhoneDataOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    telNum?: SortOrder
    customTitle?: SortOrderInput | SortOrder
    classificationName?: SortOrderInput | SortOrder
    parentClassificationName?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    regCity?: SortOrderInput | SortOrder
    regProvince?: SortOrderInput | SortOrder
    uploadedFile?: UploadedFileOrderByWithRelationInput
  }

  export type PhoneDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhoneDataWhereInput | PhoneDataWhereInput[]
    OR?: PhoneDataWhereInput[]
    NOT?: PhoneDataWhereInput | PhoneDataWhereInput[]
    fileId?: StringFilter<"PhoneData"> | string
    telNum?: StringFilter<"PhoneData"> | string
    customTitle?: StringNullableFilter<"PhoneData"> | string | null
    classificationName?: StringNullableFilter<"PhoneData"> | string | null
    parentClassificationName?: StringNullableFilter<"PhoneData"> | string | null
    city?: StringNullableFilter<"PhoneData"> | string | null
    address?: StringNullableFilter<"PhoneData"> | string | null
    regCity?: StringNullableFilter<"PhoneData"> | string | null
    regProvince?: StringNullableFilter<"PhoneData"> | string | null
    uploadedFile?: XOR<UploadedFileScalarRelationFilter, UploadedFileWhereInput>
  }, "id">

  export type PhoneDataOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    telNum?: SortOrder
    customTitle?: SortOrderInput | SortOrder
    classificationName?: SortOrderInput | SortOrder
    parentClassificationName?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    regCity?: SortOrderInput | SortOrder
    regProvince?: SortOrderInput | SortOrder
    _count?: PhoneDataCountOrderByAggregateInput
    _max?: PhoneDataMaxOrderByAggregateInput
    _min?: PhoneDataMinOrderByAggregateInput
  }

  export type PhoneDataScalarWhereWithAggregatesInput = {
    AND?: PhoneDataScalarWhereWithAggregatesInput | PhoneDataScalarWhereWithAggregatesInput[]
    OR?: PhoneDataScalarWhereWithAggregatesInput[]
    NOT?: PhoneDataScalarWhereWithAggregatesInput | PhoneDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhoneData"> | string
    fileId?: StringWithAggregatesFilter<"PhoneData"> | string
    telNum?: StringWithAggregatesFilter<"PhoneData"> | string
    customTitle?: StringNullableWithAggregatesFilter<"PhoneData"> | string | null
    classificationName?: StringNullableWithAggregatesFilter<"PhoneData"> | string | null
    parentClassificationName?: StringNullableWithAggregatesFilter<"PhoneData"> | string | null
    city?: StringNullableWithAggregatesFilter<"PhoneData"> | string | null
    address?: StringNullableWithAggregatesFilter<"PhoneData"> | string | null
    regCity?: StringNullableWithAggregatesFilter<"PhoneData"> | string | null
    regProvince?: StringNullableWithAggregatesFilter<"PhoneData"> | string | null
  }

  export type UserCreateInput = {
    username: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UploadedFileCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    recordCount: number
    uploadDate?: Date | string
    status: string
    phoneData?: PhoneDataCreateNestedManyWithoutUploadedFileInput
  }

  export type UploadedFileUncheckedCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    recordCount: number
    uploadDate?: Date | string
    status: string
    phoneData?: PhoneDataUncheckedCreateNestedManyWithoutUploadedFileInput
  }

  export type UploadedFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    phoneData?: PhoneDataUpdateManyWithoutUploadedFileNestedInput
  }

  export type UploadedFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    phoneData?: PhoneDataUncheckedUpdateManyWithoutUploadedFileNestedInput
  }

  export type UploadedFileCreateManyInput = {
    id?: string
    fileName: string
    fileSize: number
    recordCount: number
    uploadDate?: Date | string
    status: string
  }

  export type UploadedFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UploadedFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PhoneDataCreateInput = {
    id?: string
    telNum: string
    customTitle?: string | null
    classificationName?: string | null
    parentClassificationName?: string | null
    city?: string | null
    address?: string | null
    regCity?: string | null
    regProvince?: string | null
    uploadedFile: UploadedFileCreateNestedOneWithoutPhoneDataInput
  }

  export type PhoneDataUncheckedCreateInput = {
    id?: string
    fileId: string
    telNum: string
    customTitle?: string | null
    classificationName?: string | null
    parentClassificationName?: string | null
    city?: string | null
    address?: string | null
    regCity?: string | null
    regProvince?: string | null
  }

  export type PhoneDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telNum?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    classificationName?: NullableStringFieldUpdateOperationsInput | string | null
    parentClassificationName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    regCity?: NullableStringFieldUpdateOperationsInput | string | null
    regProvince?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedFile?: UploadedFileUpdateOneRequiredWithoutPhoneDataNestedInput
  }

  export type PhoneDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    telNum?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    classificationName?: NullableStringFieldUpdateOperationsInput | string | null
    parentClassificationName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    regCity?: NullableStringFieldUpdateOperationsInput | string | null
    regProvince?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneDataCreateManyInput = {
    id?: string
    fileId: string
    telNum: string
    customTitle?: string | null
    classificationName?: string | null
    parentClassificationName?: string | null
    city?: string | null
    address?: string | null
    regCity?: string | null
    regProvince?: string | null
  }

  export type PhoneDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telNum?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    classificationName?: NullableStringFieldUpdateOperationsInput | string | null
    parentClassificationName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    regCity?: NullableStringFieldUpdateOperationsInput | string | null
    regProvince?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    telNum?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    classificationName?: NullableStringFieldUpdateOperationsInput | string | null
    parentClassificationName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    regCity?: NullableStringFieldUpdateOperationsInput | string | null
    regProvince?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PhoneDataListRelationFilter = {
    every?: PhoneDataWhereInput
    some?: PhoneDataWhereInput
    none?: PhoneDataWhereInput
  }

  export type PhoneDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UploadedFileCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
  }

  export type UploadedFileAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    recordCount?: SortOrder
  }

  export type UploadedFileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
  }

  export type UploadedFileMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
  }

  export type UploadedFileSumOrderByAggregateInput = {
    fileSize?: SortOrder
    recordCount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UploadedFileScalarRelationFilter = {
    is?: UploadedFileWhereInput
    isNot?: UploadedFileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PhoneDataCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    telNum?: SortOrder
    customTitle?: SortOrder
    classificationName?: SortOrder
    parentClassificationName?: SortOrder
    city?: SortOrder
    address?: SortOrder
    regCity?: SortOrder
    regProvince?: SortOrder
  }

  export type PhoneDataMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    telNum?: SortOrder
    customTitle?: SortOrder
    classificationName?: SortOrder
    parentClassificationName?: SortOrder
    city?: SortOrder
    address?: SortOrder
    regCity?: SortOrder
    regProvince?: SortOrder
  }

  export type PhoneDataMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    telNum?: SortOrder
    customTitle?: SortOrder
    classificationName?: SortOrder
    parentClassificationName?: SortOrder
    city?: SortOrder
    address?: SortOrder
    regCity?: SortOrder
    regProvince?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PhoneDataCreateNestedManyWithoutUploadedFileInput = {
    create?: XOR<PhoneDataCreateWithoutUploadedFileInput, PhoneDataUncheckedCreateWithoutUploadedFileInput> | PhoneDataCreateWithoutUploadedFileInput[] | PhoneDataUncheckedCreateWithoutUploadedFileInput[]
    connectOrCreate?: PhoneDataCreateOrConnectWithoutUploadedFileInput | PhoneDataCreateOrConnectWithoutUploadedFileInput[]
    createMany?: PhoneDataCreateManyUploadedFileInputEnvelope
    connect?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
  }

  export type PhoneDataUncheckedCreateNestedManyWithoutUploadedFileInput = {
    create?: XOR<PhoneDataCreateWithoutUploadedFileInput, PhoneDataUncheckedCreateWithoutUploadedFileInput> | PhoneDataCreateWithoutUploadedFileInput[] | PhoneDataUncheckedCreateWithoutUploadedFileInput[]
    connectOrCreate?: PhoneDataCreateOrConnectWithoutUploadedFileInput | PhoneDataCreateOrConnectWithoutUploadedFileInput[]
    createMany?: PhoneDataCreateManyUploadedFileInputEnvelope
    connect?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PhoneDataUpdateManyWithoutUploadedFileNestedInput = {
    create?: XOR<PhoneDataCreateWithoutUploadedFileInput, PhoneDataUncheckedCreateWithoutUploadedFileInput> | PhoneDataCreateWithoutUploadedFileInput[] | PhoneDataUncheckedCreateWithoutUploadedFileInput[]
    connectOrCreate?: PhoneDataCreateOrConnectWithoutUploadedFileInput | PhoneDataCreateOrConnectWithoutUploadedFileInput[]
    upsert?: PhoneDataUpsertWithWhereUniqueWithoutUploadedFileInput | PhoneDataUpsertWithWhereUniqueWithoutUploadedFileInput[]
    createMany?: PhoneDataCreateManyUploadedFileInputEnvelope
    set?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
    disconnect?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
    delete?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
    connect?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
    update?: PhoneDataUpdateWithWhereUniqueWithoutUploadedFileInput | PhoneDataUpdateWithWhereUniqueWithoutUploadedFileInput[]
    updateMany?: PhoneDataUpdateManyWithWhereWithoutUploadedFileInput | PhoneDataUpdateManyWithWhereWithoutUploadedFileInput[]
    deleteMany?: PhoneDataScalarWhereInput | PhoneDataScalarWhereInput[]
  }

  export type PhoneDataUncheckedUpdateManyWithoutUploadedFileNestedInput = {
    create?: XOR<PhoneDataCreateWithoutUploadedFileInput, PhoneDataUncheckedCreateWithoutUploadedFileInput> | PhoneDataCreateWithoutUploadedFileInput[] | PhoneDataUncheckedCreateWithoutUploadedFileInput[]
    connectOrCreate?: PhoneDataCreateOrConnectWithoutUploadedFileInput | PhoneDataCreateOrConnectWithoutUploadedFileInput[]
    upsert?: PhoneDataUpsertWithWhereUniqueWithoutUploadedFileInput | PhoneDataUpsertWithWhereUniqueWithoutUploadedFileInput[]
    createMany?: PhoneDataCreateManyUploadedFileInputEnvelope
    set?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
    disconnect?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
    delete?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
    connect?: PhoneDataWhereUniqueInput | PhoneDataWhereUniqueInput[]
    update?: PhoneDataUpdateWithWhereUniqueWithoutUploadedFileInput | PhoneDataUpdateWithWhereUniqueWithoutUploadedFileInput[]
    updateMany?: PhoneDataUpdateManyWithWhereWithoutUploadedFileInput | PhoneDataUpdateManyWithWhereWithoutUploadedFileInput[]
    deleteMany?: PhoneDataScalarWhereInput | PhoneDataScalarWhereInput[]
  }

  export type UploadedFileCreateNestedOneWithoutPhoneDataInput = {
    create?: XOR<UploadedFileCreateWithoutPhoneDataInput, UploadedFileUncheckedCreateWithoutPhoneDataInput>
    connectOrCreate?: UploadedFileCreateOrConnectWithoutPhoneDataInput
    connect?: UploadedFileWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UploadedFileUpdateOneRequiredWithoutPhoneDataNestedInput = {
    create?: XOR<UploadedFileCreateWithoutPhoneDataInput, UploadedFileUncheckedCreateWithoutPhoneDataInput>
    connectOrCreate?: UploadedFileCreateOrConnectWithoutPhoneDataInput
    upsert?: UploadedFileUpsertWithoutPhoneDataInput
    connect?: UploadedFileWhereUniqueInput
    update?: XOR<XOR<UploadedFileUpdateToOneWithWhereWithoutPhoneDataInput, UploadedFileUpdateWithoutPhoneDataInput>, UploadedFileUncheckedUpdateWithoutPhoneDataInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PhoneDataCreateWithoutUploadedFileInput = {
    id?: string
    telNum: string
    customTitle?: string | null
    classificationName?: string | null
    parentClassificationName?: string | null
    city?: string | null
    address?: string | null
    regCity?: string | null
    regProvince?: string | null
  }

  export type PhoneDataUncheckedCreateWithoutUploadedFileInput = {
    id?: string
    telNum: string
    customTitle?: string | null
    classificationName?: string | null
    parentClassificationName?: string | null
    city?: string | null
    address?: string | null
    regCity?: string | null
    regProvince?: string | null
  }

  export type PhoneDataCreateOrConnectWithoutUploadedFileInput = {
    where: PhoneDataWhereUniqueInput
    create: XOR<PhoneDataCreateWithoutUploadedFileInput, PhoneDataUncheckedCreateWithoutUploadedFileInput>
  }

  export type PhoneDataCreateManyUploadedFileInputEnvelope = {
    data: PhoneDataCreateManyUploadedFileInput | PhoneDataCreateManyUploadedFileInput[]
    skipDuplicates?: boolean
  }

  export type PhoneDataUpsertWithWhereUniqueWithoutUploadedFileInput = {
    where: PhoneDataWhereUniqueInput
    update: XOR<PhoneDataUpdateWithoutUploadedFileInput, PhoneDataUncheckedUpdateWithoutUploadedFileInput>
    create: XOR<PhoneDataCreateWithoutUploadedFileInput, PhoneDataUncheckedCreateWithoutUploadedFileInput>
  }

  export type PhoneDataUpdateWithWhereUniqueWithoutUploadedFileInput = {
    where: PhoneDataWhereUniqueInput
    data: XOR<PhoneDataUpdateWithoutUploadedFileInput, PhoneDataUncheckedUpdateWithoutUploadedFileInput>
  }

  export type PhoneDataUpdateManyWithWhereWithoutUploadedFileInput = {
    where: PhoneDataScalarWhereInput
    data: XOR<PhoneDataUpdateManyMutationInput, PhoneDataUncheckedUpdateManyWithoutUploadedFileInput>
  }

  export type PhoneDataScalarWhereInput = {
    AND?: PhoneDataScalarWhereInput | PhoneDataScalarWhereInput[]
    OR?: PhoneDataScalarWhereInput[]
    NOT?: PhoneDataScalarWhereInput | PhoneDataScalarWhereInput[]
    id?: StringFilter<"PhoneData"> | string
    fileId?: StringFilter<"PhoneData"> | string
    telNum?: StringFilter<"PhoneData"> | string
    customTitle?: StringNullableFilter<"PhoneData"> | string | null
    classificationName?: StringNullableFilter<"PhoneData"> | string | null
    parentClassificationName?: StringNullableFilter<"PhoneData"> | string | null
    city?: StringNullableFilter<"PhoneData"> | string | null
    address?: StringNullableFilter<"PhoneData"> | string | null
    regCity?: StringNullableFilter<"PhoneData"> | string | null
    regProvince?: StringNullableFilter<"PhoneData"> | string | null
  }

  export type UploadedFileCreateWithoutPhoneDataInput = {
    id?: string
    fileName: string
    fileSize: number
    recordCount: number
    uploadDate?: Date | string
    status: string
  }

  export type UploadedFileUncheckedCreateWithoutPhoneDataInput = {
    id?: string
    fileName: string
    fileSize: number
    recordCount: number
    uploadDate?: Date | string
    status: string
  }

  export type UploadedFileCreateOrConnectWithoutPhoneDataInput = {
    where: UploadedFileWhereUniqueInput
    create: XOR<UploadedFileCreateWithoutPhoneDataInput, UploadedFileUncheckedCreateWithoutPhoneDataInput>
  }

  export type UploadedFileUpsertWithoutPhoneDataInput = {
    update: XOR<UploadedFileUpdateWithoutPhoneDataInput, UploadedFileUncheckedUpdateWithoutPhoneDataInput>
    create: XOR<UploadedFileCreateWithoutPhoneDataInput, UploadedFileUncheckedCreateWithoutPhoneDataInput>
    where?: UploadedFileWhereInput
  }

  export type UploadedFileUpdateToOneWithWhereWithoutPhoneDataInput = {
    where?: UploadedFileWhereInput
    data: XOR<UploadedFileUpdateWithoutPhoneDataInput, UploadedFileUncheckedUpdateWithoutPhoneDataInput>
  }

  export type UploadedFileUpdateWithoutPhoneDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UploadedFileUncheckedUpdateWithoutPhoneDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PhoneDataCreateManyUploadedFileInput = {
    id?: string
    telNum: string
    customTitle?: string | null
    classificationName?: string | null
    parentClassificationName?: string | null
    city?: string | null
    address?: string | null
    regCity?: string | null
    regProvince?: string | null
  }

  export type PhoneDataUpdateWithoutUploadedFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    telNum?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    classificationName?: NullableStringFieldUpdateOperationsInput | string | null
    parentClassificationName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    regCity?: NullableStringFieldUpdateOperationsInput | string | null
    regProvince?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneDataUncheckedUpdateWithoutUploadedFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    telNum?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    classificationName?: NullableStringFieldUpdateOperationsInput | string | null
    parentClassificationName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    regCity?: NullableStringFieldUpdateOperationsInput | string | null
    regProvince?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneDataUncheckedUpdateManyWithoutUploadedFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    telNum?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    classificationName?: NullableStringFieldUpdateOperationsInput | string | null
    parentClassificationName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    regCity?: NullableStringFieldUpdateOperationsInput | string | null
    regProvince?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}