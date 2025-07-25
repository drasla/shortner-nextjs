
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
 * Model BrowserStat
 * 
 */
export type BrowserStat = $Result.DefaultSelection<Prisma.$BrowserStatPayload>
/**
 * Model DailyStat
 * 
 */
export type DailyStat = $Result.DefaultSelection<Prisma.$DailyStatPayload>
/**
 * Model DeviceOsStat
 * 
 */
export type DeviceOsStat = $Result.DefaultSelection<Prisma.$DeviceOsStatPayload>
/**
 * Model HourlyStat
 * 
 */
export type HourlyStat = $Result.DefaultSelection<Prisma.$HourlyStatPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model ShortUrl
 * 
 */
export type ShortUrl = $Result.DefaultSelection<Prisma.$ShortUrlPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VisitLog
 * 
 */
export type VisitLog = $Result.DefaultSelection<Prisma.$VisitLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BrowserStats
 * const browserStats = await prisma.browserStat.findMany()
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
   * // Fetch zero or more BrowserStats
   * const browserStats = await prisma.browserStat.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.browserStat`: Exposes CRUD operations for the **BrowserStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrowserStats
    * const browserStats = await prisma.browserStat.findMany()
    * ```
    */
  get browserStat(): Prisma.BrowserStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyStat`: Exposes CRUD operations for the **DailyStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyStats
    * const dailyStats = await prisma.dailyStat.findMany()
    * ```
    */
  get dailyStat(): Prisma.DailyStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceOsStat`: Exposes CRUD operations for the **DeviceOsStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceOsStats
    * const deviceOsStats = await prisma.deviceOsStat.findMany()
    * ```
    */
  get deviceOsStat(): Prisma.DeviceOsStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hourlyStat`: Exposes CRUD operations for the **HourlyStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HourlyStats
    * const hourlyStats = await prisma.hourlyStat.findMany()
    * ```
    */
  get hourlyStat(): Prisma.HourlyStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shortUrl`: Exposes CRUD operations for the **ShortUrl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShortUrls
    * const shortUrls = await prisma.shortUrl.findMany()
    * ```
    */
  get shortUrl(): Prisma.ShortUrlDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.visitLog`: Exposes CRUD operations for the **VisitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitLogs
    * const visitLogs = await prisma.visitLog.findMany()
    * ```
    */
  get visitLog(): Prisma.VisitLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    BrowserStat: 'BrowserStat',
    DailyStat: 'DailyStat',
    DeviceOsStat: 'DeviceOsStat',
    HourlyStat: 'HourlyStat',
    PasswordResetToken: 'PasswordResetToken',
    Session: 'Session',
    ShortUrl: 'ShortUrl',
    User: 'User',
    VisitLog: 'VisitLog'
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
      modelProps: "browserStat" | "dailyStat" | "deviceOsStat" | "hourlyStat" | "passwordResetToken" | "session" | "shortUrl" | "user" | "visitLog"
      txIsolationLevel: never
    }
    model: {
      BrowserStat: {
        payload: Prisma.$BrowserStatPayload<ExtArgs>
        fields: Prisma.BrowserStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrowserStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrowserStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload>
          }
          findFirst: {
            args: Prisma.BrowserStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrowserStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload>
          }
          findMany: {
            args: Prisma.BrowserStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload>[]
          }
          create: {
            args: Prisma.BrowserStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload>
          }
          createMany: {
            args: Prisma.BrowserStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BrowserStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload>
          }
          update: {
            args: Prisma.BrowserStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload>
          }
          deleteMany: {
            args: Prisma.BrowserStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrowserStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrowserStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrowserStatPayload>
          }
          aggregate: {
            args: Prisma.BrowserStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrowserStat>
          }
          groupBy: {
            args: Prisma.BrowserStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrowserStatGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BrowserStatFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BrowserStatAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BrowserStatCountArgs<ExtArgs>
            result: $Utils.Optional<BrowserStatCountAggregateOutputType> | number
          }
        }
      }
      DailyStat: {
        payload: Prisma.$DailyStatPayload<ExtArgs>
        fields: Prisma.DailyStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload>
          }
          findFirst: {
            args: Prisma.DailyStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload>
          }
          findMany: {
            args: Prisma.DailyStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload>[]
          }
          create: {
            args: Prisma.DailyStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload>
          }
          createMany: {
            args: Prisma.DailyStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload>
          }
          update: {
            args: Prisma.DailyStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload>
          }
          deleteMany: {
            args: Prisma.DailyStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatPayload>
          }
          aggregate: {
            args: Prisma.DailyStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyStat>
          }
          groupBy: {
            args: Prisma.DailyStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyStatGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DailyStatFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DailyStatAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DailyStatCountArgs<ExtArgs>
            result: $Utils.Optional<DailyStatCountAggregateOutputType> | number
          }
        }
      }
      DeviceOsStat: {
        payload: Prisma.$DeviceOsStatPayload<ExtArgs>
        fields: Prisma.DeviceOsStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceOsStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceOsStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload>
          }
          findFirst: {
            args: Prisma.DeviceOsStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceOsStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload>
          }
          findMany: {
            args: Prisma.DeviceOsStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload>[]
          }
          create: {
            args: Prisma.DeviceOsStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload>
          }
          createMany: {
            args: Prisma.DeviceOsStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceOsStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload>
          }
          update: {
            args: Prisma.DeviceOsStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload>
          }
          deleteMany: {
            args: Prisma.DeviceOsStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceOsStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceOsStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceOsStatPayload>
          }
          aggregate: {
            args: Prisma.DeviceOsStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceOsStat>
          }
          groupBy: {
            args: Prisma.DeviceOsStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceOsStatGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DeviceOsStatFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DeviceOsStatAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DeviceOsStatCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceOsStatCountAggregateOutputType> | number
          }
        }
      }
      HourlyStat: {
        payload: Prisma.$HourlyStatPayload<ExtArgs>
        fields: Prisma.HourlyStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HourlyStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HourlyStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload>
          }
          findFirst: {
            args: Prisma.HourlyStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HourlyStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload>
          }
          findMany: {
            args: Prisma.HourlyStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload>[]
          }
          create: {
            args: Prisma.HourlyStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload>
          }
          createMany: {
            args: Prisma.HourlyStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HourlyStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload>
          }
          update: {
            args: Prisma.HourlyStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload>
          }
          deleteMany: {
            args: Prisma.HourlyStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HourlyStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HourlyStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyStatPayload>
          }
          aggregate: {
            args: Prisma.HourlyStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHourlyStat>
          }
          groupBy: {
            args: Prisma.HourlyStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<HourlyStatGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HourlyStatFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HourlyStatAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HourlyStatCountArgs<ExtArgs>
            result: $Utils.Optional<HourlyStatCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PasswordResetTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PasswordResetTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      ShortUrl: {
        payload: Prisma.$ShortUrlPayload<ExtArgs>
        fields: Prisma.ShortUrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShortUrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShortUrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          findFirst: {
            args: Prisma.ShortUrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShortUrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          findMany: {
            args: Prisma.ShortUrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>[]
          }
          create: {
            args: Prisma.ShortUrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          createMany: {
            args: Prisma.ShortUrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShortUrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          update: {
            args: Prisma.ShortUrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          deleteMany: {
            args: Prisma.ShortUrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShortUrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShortUrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortUrlPayload>
          }
          aggregate: {
            args: Prisma.ShortUrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortUrl>
          }
          groupBy: {
            args: Prisma.ShortUrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortUrlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ShortUrlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ShortUrlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ShortUrlCountArgs<ExtArgs>
            result: $Utils.Optional<ShortUrlCountAggregateOutputType> | number
          }
        }
      }
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VisitLog: {
        payload: Prisma.$VisitLogPayload<ExtArgs>
        fields: Prisma.VisitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          findFirst: {
            args: Prisma.VisitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          findMany: {
            args: Prisma.VisitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>[]
          }
          create: {
            args: Prisma.VisitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          createMany: {
            args: Prisma.VisitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          update: {
            args: Prisma.VisitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          deleteMany: {
            args: Prisma.VisitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitLogPayload>
          }
          aggregate: {
            args: Prisma.VisitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitLog>
          }
          groupBy: {
            args: Prisma.VisitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VisitLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VisitLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VisitLogCountArgs<ExtArgs>
            result: $Utils.Optional<VisitLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    browserStat?: BrowserStatOmit
    dailyStat?: DailyStatOmit
    deviceOsStat?: DeviceOsStatOmit
    hourlyStat?: HourlyStatOmit
    passwordResetToken?: PasswordResetTokenOmit
    session?: SessionOmit
    shortUrl?: ShortUrlOmit
    user?: UserOmit
    visitLog?: VisitLogOmit
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
   * Count Type ShortUrlCountOutputType
   */

  export type ShortUrlCountOutputType = {
    visits: number
    dailyStats: number
    browserStats: number
    deviceOsStats: number
    hourlyStats: number
  }

  export type ShortUrlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | ShortUrlCountOutputTypeCountVisitsArgs
    dailyStats?: boolean | ShortUrlCountOutputTypeCountDailyStatsArgs
    browserStats?: boolean | ShortUrlCountOutputTypeCountBrowserStatsArgs
    deviceOsStats?: boolean | ShortUrlCountOutputTypeCountDeviceOsStatsArgs
    hourlyStats?: boolean | ShortUrlCountOutputTypeCountHourlyStatsArgs
  }

  // Custom InputTypes
  /**
   * ShortUrlCountOutputType without action
   */
  export type ShortUrlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrlCountOutputType
     */
    select?: ShortUrlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShortUrlCountOutputType without action
   */
  export type ShortUrlCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitLogWhereInput
  }

  /**
   * ShortUrlCountOutputType without action
   */
  export type ShortUrlCountOutputTypeCountDailyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStatWhereInput
  }

  /**
   * ShortUrlCountOutputType without action
   */
  export type ShortUrlCountOutputTypeCountBrowserStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrowserStatWhereInput
  }

  /**
   * ShortUrlCountOutputType without action
   */
  export type ShortUrlCountOutputTypeCountDeviceOsStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceOsStatWhereInput
  }

  /**
   * ShortUrlCountOutputType without action
   */
  export type ShortUrlCountOutputTypeCountHourlyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HourlyStatWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    passwordResetTokens: number
    shortUrls: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    passwordResetTokens?: boolean | UserCountOutputTypeCountPasswordResetTokensArgs
    shortUrls?: boolean | UserCountOutputTypeCountShortUrlsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShortUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortUrlWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BrowserStat
   */

  export type AggregateBrowserStat = {
    _count: BrowserStatCountAggregateOutputType | null
    _avg: BrowserStatAvgAggregateOutputType | null
    _sum: BrowserStatSumAggregateOutputType | null
    _min: BrowserStatMinAggregateOutputType | null
    _max: BrowserStatMaxAggregateOutputType | null
  }

  export type BrowserStatAvgAggregateOutputType = {
    count: number | null
  }

  export type BrowserStatSumAggregateOutputType = {
    count: number | null
  }

  export type BrowserStatMinAggregateOutputType = {
    id: string | null
    browser: string | null
    count: number | null
    shortUrlId: string | null
  }

  export type BrowserStatMaxAggregateOutputType = {
    id: string | null
    browser: string | null
    count: number | null
    shortUrlId: string | null
  }

  export type BrowserStatCountAggregateOutputType = {
    id: number
    browser: number
    count: number
    shortUrlId: number
    _all: number
  }


  export type BrowserStatAvgAggregateInputType = {
    count?: true
  }

  export type BrowserStatSumAggregateInputType = {
    count?: true
  }

  export type BrowserStatMinAggregateInputType = {
    id?: true
    browser?: true
    count?: true
    shortUrlId?: true
  }

  export type BrowserStatMaxAggregateInputType = {
    id?: true
    browser?: true
    count?: true
    shortUrlId?: true
  }

  export type BrowserStatCountAggregateInputType = {
    id?: true
    browser?: true
    count?: true
    shortUrlId?: true
    _all?: true
  }

  export type BrowserStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrowserStat to aggregate.
     */
    where?: BrowserStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrowserStats to fetch.
     */
    orderBy?: BrowserStatOrderByWithRelationInput | BrowserStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrowserStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrowserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrowserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrowserStats
    **/
    _count?: true | BrowserStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrowserStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrowserStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrowserStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrowserStatMaxAggregateInputType
  }

  export type GetBrowserStatAggregateType<T extends BrowserStatAggregateArgs> = {
        [P in keyof T & keyof AggregateBrowserStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrowserStat[P]>
      : GetScalarType<T[P], AggregateBrowserStat[P]>
  }




  export type BrowserStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrowserStatWhereInput
    orderBy?: BrowserStatOrderByWithAggregationInput | BrowserStatOrderByWithAggregationInput[]
    by: BrowserStatScalarFieldEnum[] | BrowserStatScalarFieldEnum
    having?: BrowserStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrowserStatCountAggregateInputType | true
    _avg?: BrowserStatAvgAggregateInputType
    _sum?: BrowserStatSumAggregateInputType
    _min?: BrowserStatMinAggregateInputType
    _max?: BrowserStatMaxAggregateInputType
  }

  export type BrowserStatGroupByOutputType = {
    id: string
    browser: string
    count: number
    shortUrlId: string
    _count: BrowserStatCountAggregateOutputType | null
    _avg: BrowserStatAvgAggregateOutputType | null
    _sum: BrowserStatSumAggregateOutputType | null
    _min: BrowserStatMinAggregateOutputType | null
    _max: BrowserStatMaxAggregateOutputType | null
  }

  type GetBrowserStatGroupByPayload<T extends BrowserStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrowserStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrowserStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrowserStatGroupByOutputType[P]>
            : GetScalarType<T[P], BrowserStatGroupByOutputType[P]>
        }
      >
    >


  export type BrowserStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    browser?: boolean
    count?: boolean
    shortUrlId?: boolean
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["browserStat"]>



  export type BrowserStatSelectScalar = {
    id?: boolean
    browser?: boolean
    count?: boolean
    shortUrlId?: boolean
  }

  export type BrowserStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "browser" | "count" | "shortUrlId", ExtArgs["result"]["browserStat"]>
  export type BrowserStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }

  export type $BrowserStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrowserStat"
    objects: {
      shortUrl: Prisma.$ShortUrlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      browser: string
      count: number
      shortUrlId: string
    }, ExtArgs["result"]["browserStat"]>
    composites: {}
  }

  type BrowserStatGetPayload<S extends boolean | null | undefined | BrowserStatDefaultArgs> = $Result.GetResult<Prisma.$BrowserStatPayload, S>

  type BrowserStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrowserStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrowserStatCountAggregateInputType | true
    }

  export interface BrowserStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrowserStat'], meta: { name: 'BrowserStat' } }
    /**
     * Find zero or one BrowserStat that matches the filter.
     * @param {BrowserStatFindUniqueArgs} args - Arguments to find a BrowserStat
     * @example
     * // Get one BrowserStat
     * const browserStat = await prisma.browserStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrowserStatFindUniqueArgs>(args: SelectSubset<T, BrowserStatFindUniqueArgs<ExtArgs>>): Prisma__BrowserStatClient<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrowserStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrowserStatFindUniqueOrThrowArgs} args - Arguments to find a BrowserStat
     * @example
     * // Get one BrowserStat
     * const browserStat = await prisma.browserStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrowserStatFindUniqueOrThrowArgs>(args: SelectSubset<T, BrowserStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrowserStatClient<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrowserStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserStatFindFirstArgs} args - Arguments to find a BrowserStat
     * @example
     * // Get one BrowserStat
     * const browserStat = await prisma.browserStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrowserStatFindFirstArgs>(args?: SelectSubset<T, BrowserStatFindFirstArgs<ExtArgs>>): Prisma__BrowserStatClient<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrowserStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserStatFindFirstOrThrowArgs} args - Arguments to find a BrowserStat
     * @example
     * // Get one BrowserStat
     * const browserStat = await prisma.browserStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrowserStatFindFirstOrThrowArgs>(args?: SelectSubset<T, BrowserStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrowserStatClient<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrowserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrowserStats
     * const browserStats = await prisma.browserStat.findMany()
     * 
     * // Get first 10 BrowserStats
     * const browserStats = await prisma.browserStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const browserStatWithIdOnly = await prisma.browserStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrowserStatFindManyArgs>(args?: SelectSubset<T, BrowserStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrowserStat.
     * @param {BrowserStatCreateArgs} args - Arguments to create a BrowserStat.
     * @example
     * // Create one BrowserStat
     * const BrowserStat = await prisma.browserStat.create({
     *   data: {
     *     // ... data to create a BrowserStat
     *   }
     * })
     * 
     */
    create<T extends BrowserStatCreateArgs>(args: SelectSubset<T, BrowserStatCreateArgs<ExtArgs>>): Prisma__BrowserStatClient<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrowserStats.
     * @param {BrowserStatCreateManyArgs} args - Arguments to create many BrowserStats.
     * @example
     * // Create many BrowserStats
     * const browserStat = await prisma.browserStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrowserStatCreateManyArgs>(args?: SelectSubset<T, BrowserStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BrowserStat.
     * @param {BrowserStatDeleteArgs} args - Arguments to delete one BrowserStat.
     * @example
     * // Delete one BrowserStat
     * const BrowserStat = await prisma.browserStat.delete({
     *   where: {
     *     // ... filter to delete one BrowserStat
     *   }
     * })
     * 
     */
    delete<T extends BrowserStatDeleteArgs>(args: SelectSubset<T, BrowserStatDeleteArgs<ExtArgs>>): Prisma__BrowserStatClient<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrowserStat.
     * @param {BrowserStatUpdateArgs} args - Arguments to update one BrowserStat.
     * @example
     * // Update one BrowserStat
     * const browserStat = await prisma.browserStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrowserStatUpdateArgs>(args: SelectSubset<T, BrowserStatUpdateArgs<ExtArgs>>): Prisma__BrowserStatClient<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrowserStats.
     * @param {BrowserStatDeleteManyArgs} args - Arguments to filter BrowserStats to delete.
     * @example
     * // Delete a few BrowserStats
     * const { count } = await prisma.browserStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrowserStatDeleteManyArgs>(args?: SelectSubset<T, BrowserStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrowserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrowserStats
     * const browserStat = await prisma.browserStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrowserStatUpdateManyArgs>(args: SelectSubset<T, BrowserStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BrowserStat.
     * @param {BrowserStatUpsertArgs} args - Arguments to update or create a BrowserStat.
     * @example
     * // Update or create a BrowserStat
     * const browserStat = await prisma.browserStat.upsert({
     *   create: {
     *     // ... data to create a BrowserStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrowserStat we want to update
     *   }
     * })
     */
    upsert<T extends BrowserStatUpsertArgs>(args: SelectSubset<T, BrowserStatUpsertArgs<ExtArgs>>): Prisma__BrowserStatClient<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrowserStats that matches the filter.
     * @param {BrowserStatFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const browserStat = await prisma.browserStat.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BrowserStatFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BrowserStat.
     * @param {BrowserStatAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const browserStat = await prisma.browserStat.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BrowserStatAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of BrowserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserStatCountArgs} args - Arguments to filter BrowserStats to count.
     * @example
     * // Count the number of BrowserStats
     * const count = await prisma.browserStat.count({
     *   where: {
     *     // ... the filter for the BrowserStats we want to count
     *   }
     * })
    **/
    count<T extends BrowserStatCountArgs>(
      args?: Subset<T, BrowserStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrowserStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrowserStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrowserStatAggregateArgs>(args: Subset<T, BrowserStatAggregateArgs>): Prisma.PrismaPromise<GetBrowserStatAggregateType<T>>

    /**
     * Group by BrowserStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrowserStatGroupByArgs} args - Group by arguments.
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
      T extends BrowserStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrowserStatGroupByArgs['orderBy'] }
        : { orderBy?: BrowserStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrowserStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrowserStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrowserStat model
   */
  readonly fields: BrowserStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrowserStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrowserStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shortUrl<T extends ShortUrlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrlDefaultArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BrowserStat model
   */
  interface BrowserStatFieldRefs {
    readonly id: FieldRef<"BrowserStat", 'String'>
    readonly browser: FieldRef<"BrowserStat", 'String'>
    readonly count: FieldRef<"BrowserStat", 'Int'>
    readonly shortUrlId: FieldRef<"BrowserStat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BrowserStat findUnique
   */
  export type BrowserStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * Filter, which BrowserStat to fetch.
     */
    where: BrowserStatWhereUniqueInput
  }

  /**
   * BrowserStat findUniqueOrThrow
   */
  export type BrowserStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * Filter, which BrowserStat to fetch.
     */
    where: BrowserStatWhereUniqueInput
  }

  /**
   * BrowserStat findFirst
   */
  export type BrowserStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * Filter, which BrowserStat to fetch.
     */
    where?: BrowserStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrowserStats to fetch.
     */
    orderBy?: BrowserStatOrderByWithRelationInput | BrowserStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrowserStats.
     */
    cursor?: BrowserStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrowserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrowserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrowserStats.
     */
    distinct?: BrowserStatScalarFieldEnum | BrowserStatScalarFieldEnum[]
  }

  /**
   * BrowserStat findFirstOrThrow
   */
  export type BrowserStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * Filter, which BrowserStat to fetch.
     */
    where?: BrowserStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrowserStats to fetch.
     */
    orderBy?: BrowserStatOrderByWithRelationInput | BrowserStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrowserStats.
     */
    cursor?: BrowserStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrowserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrowserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrowserStats.
     */
    distinct?: BrowserStatScalarFieldEnum | BrowserStatScalarFieldEnum[]
  }

  /**
   * BrowserStat findMany
   */
  export type BrowserStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * Filter, which BrowserStats to fetch.
     */
    where?: BrowserStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrowserStats to fetch.
     */
    orderBy?: BrowserStatOrderByWithRelationInput | BrowserStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrowserStats.
     */
    cursor?: BrowserStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrowserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrowserStats.
     */
    skip?: number
    distinct?: BrowserStatScalarFieldEnum | BrowserStatScalarFieldEnum[]
  }

  /**
   * BrowserStat create
   */
  export type BrowserStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * The data needed to create a BrowserStat.
     */
    data: XOR<BrowserStatCreateInput, BrowserStatUncheckedCreateInput>
  }

  /**
   * BrowserStat createMany
   */
  export type BrowserStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrowserStats.
     */
    data: BrowserStatCreateManyInput | BrowserStatCreateManyInput[]
  }

  /**
   * BrowserStat update
   */
  export type BrowserStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * The data needed to update a BrowserStat.
     */
    data: XOR<BrowserStatUpdateInput, BrowserStatUncheckedUpdateInput>
    /**
     * Choose, which BrowserStat to update.
     */
    where: BrowserStatWhereUniqueInput
  }

  /**
   * BrowserStat updateMany
   */
  export type BrowserStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrowserStats.
     */
    data: XOR<BrowserStatUpdateManyMutationInput, BrowserStatUncheckedUpdateManyInput>
    /**
     * Filter which BrowserStats to update
     */
    where?: BrowserStatWhereInput
    /**
     * Limit how many BrowserStats to update.
     */
    limit?: number
  }

  /**
   * BrowserStat upsert
   */
  export type BrowserStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * The filter to search for the BrowserStat to update in case it exists.
     */
    where: BrowserStatWhereUniqueInput
    /**
     * In case the BrowserStat found by the `where` argument doesn't exist, create a new BrowserStat with this data.
     */
    create: XOR<BrowserStatCreateInput, BrowserStatUncheckedCreateInput>
    /**
     * In case the BrowserStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrowserStatUpdateInput, BrowserStatUncheckedUpdateInput>
  }

  /**
   * BrowserStat delete
   */
  export type BrowserStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    /**
     * Filter which BrowserStat to delete.
     */
    where: BrowserStatWhereUniqueInput
  }

  /**
   * BrowserStat deleteMany
   */
  export type BrowserStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrowserStats to delete
     */
    where?: BrowserStatWhereInput
    /**
     * Limit how many BrowserStats to delete.
     */
    limit?: number
  }

  /**
   * BrowserStat findRaw
   */
  export type BrowserStatFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BrowserStat aggregateRaw
   */
  export type BrowserStatAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BrowserStat without action
   */
  export type BrowserStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
  }


  /**
   * Model DailyStat
   */

  export type AggregateDailyStat = {
    _count: DailyStatCountAggregateOutputType | null
    _avg: DailyStatAvgAggregateOutputType | null
    _sum: DailyStatSumAggregateOutputType | null
    _min: DailyStatMinAggregateOutputType | null
    _max: DailyStatMaxAggregateOutputType | null
  }

  export type DailyStatAvgAggregateOutputType = {
    count: number | null
  }

  export type DailyStatSumAggregateOutputType = {
    count: number | null
  }

  export type DailyStatMinAggregateOutputType = {
    id: string | null
    date: Date | null
    count: number | null
    shortUrlId: string | null
  }

  export type DailyStatMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    count: number | null
    shortUrlId: string | null
  }

  export type DailyStatCountAggregateOutputType = {
    id: number
    date: number
    count: number
    shortUrlId: number
    _all: number
  }


  export type DailyStatAvgAggregateInputType = {
    count?: true
  }

  export type DailyStatSumAggregateInputType = {
    count?: true
  }

  export type DailyStatMinAggregateInputType = {
    id?: true
    date?: true
    count?: true
    shortUrlId?: true
  }

  export type DailyStatMaxAggregateInputType = {
    id?: true
    date?: true
    count?: true
    shortUrlId?: true
  }

  export type DailyStatCountAggregateInputType = {
    id?: true
    date?: true
    count?: true
    shortUrlId?: true
    _all?: true
  }

  export type DailyStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStat to aggregate.
     */
    where?: DailyStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatOrderByWithRelationInput | DailyStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyStats
    **/
    _count?: true | DailyStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyStatMaxAggregateInputType
  }

  export type GetDailyStatAggregateType<T extends DailyStatAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyStat[P]>
      : GetScalarType<T[P], AggregateDailyStat[P]>
  }




  export type DailyStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStatWhereInput
    orderBy?: DailyStatOrderByWithAggregationInput | DailyStatOrderByWithAggregationInput[]
    by: DailyStatScalarFieldEnum[] | DailyStatScalarFieldEnum
    having?: DailyStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyStatCountAggregateInputType | true
    _avg?: DailyStatAvgAggregateInputType
    _sum?: DailyStatSumAggregateInputType
    _min?: DailyStatMinAggregateInputType
    _max?: DailyStatMaxAggregateInputType
  }

  export type DailyStatGroupByOutputType = {
    id: string
    date: Date
    count: number
    shortUrlId: string
    _count: DailyStatCountAggregateOutputType | null
    _avg: DailyStatAvgAggregateOutputType | null
    _sum: DailyStatSumAggregateOutputType | null
    _min: DailyStatMinAggregateOutputType | null
    _max: DailyStatMaxAggregateOutputType | null
  }

  type GetDailyStatGroupByPayload<T extends DailyStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyStatGroupByOutputType[P]>
            : GetScalarType<T[P], DailyStatGroupByOutputType[P]>
        }
      >
    >


  export type DailyStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    count?: boolean
    shortUrlId?: boolean
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStat"]>



  export type DailyStatSelectScalar = {
    id?: boolean
    date?: boolean
    count?: boolean
    shortUrlId?: boolean
  }

  export type DailyStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "count" | "shortUrlId", ExtArgs["result"]["dailyStat"]>
  export type DailyStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }

  export type $DailyStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyStat"
    objects: {
      shortUrl: Prisma.$ShortUrlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      count: number
      shortUrlId: string
    }, ExtArgs["result"]["dailyStat"]>
    composites: {}
  }

  type DailyStatGetPayload<S extends boolean | null | undefined | DailyStatDefaultArgs> = $Result.GetResult<Prisma.$DailyStatPayload, S>

  type DailyStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyStatCountAggregateInputType | true
    }

  export interface DailyStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyStat'], meta: { name: 'DailyStat' } }
    /**
     * Find zero or one DailyStat that matches the filter.
     * @param {DailyStatFindUniqueArgs} args - Arguments to find a DailyStat
     * @example
     * // Get one DailyStat
     * const dailyStat = await prisma.dailyStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyStatFindUniqueArgs>(args: SelectSubset<T, DailyStatFindUniqueArgs<ExtArgs>>): Prisma__DailyStatClient<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyStatFindUniqueOrThrowArgs} args - Arguments to find a DailyStat
     * @example
     * // Get one DailyStat
     * const dailyStat = await prisma.dailyStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyStatFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyStatClient<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatFindFirstArgs} args - Arguments to find a DailyStat
     * @example
     * // Get one DailyStat
     * const dailyStat = await prisma.dailyStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyStatFindFirstArgs>(args?: SelectSubset<T, DailyStatFindFirstArgs<ExtArgs>>): Prisma__DailyStatClient<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatFindFirstOrThrowArgs} args - Arguments to find a DailyStat
     * @example
     * // Get one DailyStat
     * const dailyStat = await prisma.dailyStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyStatFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyStatClient<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyStats
     * const dailyStats = await prisma.dailyStat.findMany()
     * 
     * // Get first 10 DailyStats
     * const dailyStats = await prisma.dailyStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyStatWithIdOnly = await prisma.dailyStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyStatFindManyArgs>(args?: SelectSubset<T, DailyStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyStat.
     * @param {DailyStatCreateArgs} args - Arguments to create a DailyStat.
     * @example
     * // Create one DailyStat
     * const DailyStat = await prisma.dailyStat.create({
     *   data: {
     *     // ... data to create a DailyStat
     *   }
     * })
     * 
     */
    create<T extends DailyStatCreateArgs>(args: SelectSubset<T, DailyStatCreateArgs<ExtArgs>>): Prisma__DailyStatClient<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyStats.
     * @param {DailyStatCreateManyArgs} args - Arguments to create many DailyStats.
     * @example
     * // Create many DailyStats
     * const dailyStat = await prisma.dailyStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyStatCreateManyArgs>(args?: SelectSubset<T, DailyStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyStat.
     * @param {DailyStatDeleteArgs} args - Arguments to delete one DailyStat.
     * @example
     * // Delete one DailyStat
     * const DailyStat = await prisma.dailyStat.delete({
     *   where: {
     *     // ... filter to delete one DailyStat
     *   }
     * })
     * 
     */
    delete<T extends DailyStatDeleteArgs>(args: SelectSubset<T, DailyStatDeleteArgs<ExtArgs>>): Prisma__DailyStatClient<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyStat.
     * @param {DailyStatUpdateArgs} args - Arguments to update one DailyStat.
     * @example
     * // Update one DailyStat
     * const dailyStat = await prisma.dailyStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyStatUpdateArgs>(args: SelectSubset<T, DailyStatUpdateArgs<ExtArgs>>): Prisma__DailyStatClient<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyStats.
     * @param {DailyStatDeleteManyArgs} args - Arguments to filter DailyStats to delete.
     * @example
     * // Delete a few DailyStats
     * const { count } = await prisma.dailyStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyStatDeleteManyArgs>(args?: SelectSubset<T, DailyStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyStats
     * const dailyStat = await prisma.dailyStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyStatUpdateManyArgs>(args: SelectSubset<T, DailyStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyStat.
     * @param {DailyStatUpsertArgs} args - Arguments to update or create a DailyStat.
     * @example
     * // Update or create a DailyStat
     * const dailyStat = await prisma.dailyStat.upsert({
     *   create: {
     *     // ... data to create a DailyStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyStat we want to update
     *   }
     * })
     */
    upsert<T extends DailyStatUpsertArgs>(args: SelectSubset<T, DailyStatUpsertArgs<ExtArgs>>): Prisma__DailyStatClient<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyStats that matches the filter.
     * @param {DailyStatFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dailyStat = await prisma.dailyStat.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DailyStatFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DailyStat.
     * @param {DailyStatAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dailyStat = await prisma.dailyStat.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DailyStatAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatCountArgs} args - Arguments to filter DailyStats to count.
     * @example
     * // Count the number of DailyStats
     * const count = await prisma.dailyStat.count({
     *   where: {
     *     // ... the filter for the DailyStats we want to count
     *   }
     * })
    **/
    count<T extends DailyStatCountArgs>(
      args?: Subset<T, DailyStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyStatAggregateArgs>(args: Subset<T, DailyStatAggregateArgs>): Prisma.PrismaPromise<GetDailyStatAggregateType<T>>

    /**
     * Group by DailyStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatGroupByArgs} args - Group by arguments.
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
      T extends DailyStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyStatGroupByArgs['orderBy'] }
        : { orderBy?: DailyStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyStat model
   */
  readonly fields: DailyStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shortUrl<T extends ShortUrlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrlDefaultArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyStat model
   */
  interface DailyStatFieldRefs {
    readonly id: FieldRef<"DailyStat", 'String'>
    readonly date: FieldRef<"DailyStat", 'DateTime'>
    readonly count: FieldRef<"DailyStat", 'Int'>
    readonly shortUrlId: FieldRef<"DailyStat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyStat findUnique
   */
  export type DailyStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * Filter, which DailyStat to fetch.
     */
    where: DailyStatWhereUniqueInput
  }

  /**
   * DailyStat findUniqueOrThrow
   */
  export type DailyStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * Filter, which DailyStat to fetch.
     */
    where: DailyStatWhereUniqueInput
  }

  /**
   * DailyStat findFirst
   */
  export type DailyStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * Filter, which DailyStat to fetch.
     */
    where?: DailyStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatOrderByWithRelationInput | DailyStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStats.
     */
    cursor?: DailyStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStats.
     */
    distinct?: DailyStatScalarFieldEnum | DailyStatScalarFieldEnum[]
  }

  /**
   * DailyStat findFirstOrThrow
   */
  export type DailyStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * Filter, which DailyStat to fetch.
     */
    where?: DailyStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatOrderByWithRelationInput | DailyStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStats.
     */
    cursor?: DailyStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStats.
     */
    distinct?: DailyStatScalarFieldEnum | DailyStatScalarFieldEnum[]
  }

  /**
   * DailyStat findMany
   */
  export type DailyStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where?: DailyStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatOrderByWithRelationInput | DailyStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyStats.
     */
    cursor?: DailyStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    distinct?: DailyStatScalarFieldEnum | DailyStatScalarFieldEnum[]
  }

  /**
   * DailyStat create
   */
  export type DailyStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyStat.
     */
    data: XOR<DailyStatCreateInput, DailyStatUncheckedCreateInput>
  }

  /**
   * DailyStat createMany
   */
  export type DailyStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyStats.
     */
    data: DailyStatCreateManyInput | DailyStatCreateManyInput[]
  }

  /**
   * DailyStat update
   */
  export type DailyStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyStat.
     */
    data: XOR<DailyStatUpdateInput, DailyStatUncheckedUpdateInput>
    /**
     * Choose, which DailyStat to update.
     */
    where: DailyStatWhereUniqueInput
  }

  /**
   * DailyStat updateMany
   */
  export type DailyStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyStats.
     */
    data: XOR<DailyStatUpdateManyMutationInput, DailyStatUncheckedUpdateManyInput>
    /**
     * Filter which DailyStats to update
     */
    where?: DailyStatWhereInput
    /**
     * Limit how many DailyStats to update.
     */
    limit?: number
  }

  /**
   * DailyStat upsert
   */
  export type DailyStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyStat to update in case it exists.
     */
    where: DailyStatWhereUniqueInput
    /**
     * In case the DailyStat found by the `where` argument doesn't exist, create a new DailyStat with this data.
     */
    create: XOR<DailyStatCreateInput, DailyStatUncheckedCreateInput>
    /**
     * In case the DailyStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyStatUpdateInput, DailyStatUncheckedUpdateInput>
  }

  /**
   * DailyStat delete
   */
  export type DailyStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    /**
     * Filter which DailyStat to delete.
     */
    where: DailyStatWhereUniqueInput
  }

  /**
   * DailyStat deleteMany
   */
  export type DailyStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStats to delete
     */
    where?: DailyStatWhereInput
    /**
     * Limit how many DailyStats to delete.
     */
    limit?: number
  }

  /**
   * DailyStat findRaw
   */
  export type DailyStatFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DailyStat aggregateRaw
   */
  export type DailyStatAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DailyStat without action
   */
  export type DailyStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
  }


  /**
   * Model DeviceOsStat
   */

  export type AggregateDeviceOsStat = {
    _count: DeviceOsStatCountAggregateOutputType | null
    _avg: DeviceOsStatAvgAggregateOutputType | null
    _sum: DeviceOsStatSumAggregateOutputType | null
    _min: DeviceOsStatMinAggregateOutputType | null
    _max: DeviceOsStatMaxAggregateOutputType | null
  }

  export type DeviceOsStatAvgAggregateOutputType = {
    count: number | null
  }

  export type DeviceOsStatSumAggregateOutputType = {
    count: number | null
  }

  export type DeviceOsStatMinAggregateOutputType = {
    id: string | null
    device: string | null
    os: string | null
    count: number | null
    shortUrlId: string | null
  }

  export type DeviceOsStatMaxAggregateOutputType = {
    id: string | null
    device: string | null
    os: string | null
    count: number | null
    shortUrlId: string | null
  }

  export type DeviceOsStatCountAggregateOutputType = {
    id: number
    device: number
    os: number
    count: number
    shortUrlId: number
    _all: number
  }


  export type DeviceOsStatAvgAggregateInputType = {
    count?: true
  }

  export type DeviceOsStatSumAggregateInputType = {
    count?: true
  }

  export type DeviceOsStatMinAggregateInputType = {
    id?: true
    device?: true
    os?: true
    count?: true
    shortUrlId?: true
  }

  export type DeviceOsStatMaxAggregateInputType = {
    id?: true
    device?: true
    os?: true
    count?: true
    shortUrlId?: true
  }

  export type DeviceOsStatCountAggregateInputType = {
    id?: true
    device?: true
    os?: true
    count?: true
    shortUrlId?: true
    _all?: true
  }

  export type DeviceOsStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceOsStat to aggregate.
     */
    where?: DeviceOsStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceOsStats to fetch.
     */
    orderBy?: DeviceOsStatOrderByWithRelationInput | DeviceOsStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceOsStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceOsStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceOsStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceOsStats
    **/
    _count?: true | DeviceOsStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceOsStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceOsStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceOsStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceOsStatMaxAggregateInputType
  }

  export type GetDeviceOsStatAggregateType<T extends DeviceOsStatAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceOsStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceOsStat[P]>
      : GetScalarType<T[P], AggregateDeviceOsStat[P]>
  }




  export type DeviceOsStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceOsStatWhereInput
    orderBy?: DeviceOsStatOrderByWithAggregationInput | DeviceOsStatOrderByWithAggregationInput[]
    by: DeviceOsStatScalarFieldEnum[] | DeviceOsStatScalarFieldEnum
    having?: DeviceOsStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceOsStatCountAggregateInputType | true
    _avg?: DeviceOsStatAvgAggregateInputType
    _sum?: DeviceOsStatSumAggregateInputType
    _min?: DeviceOsStatMinAggregateInputType
    _max?: DeviceOsStatMaxAggregateInputType
  }

  export type DeviceOsStatGroupByOutputType = {
    id: string
    device: string
    os: string
    count: number
    shortUrlId: string
    _count: DeviceOsStatCountAggregateOutputType | null
    _avg: DeviceOsStatAvgAggregateOutputType | null
    _sum: DeviceOsStatSumAggregateOutputType | null
    _min: DeviceOsStatMinAggregateOutputType | null
    _max: DeviceOsStatMaxAggregateOutputType | null
  }

  type GetDeviceOsStatGroupByPayload<T extends DeviceOsStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceOsStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceOsStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceOsStatGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceOsStatGroupByOutputType[P]>
        }
      >
    >


  export type DeviceOsStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device?: boolean
    os?: boolean
    count?: boolean
    shortUrlId?: boolean
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceOsStat"]>



  export type DeviceOsStatSelectScalar = {
    id?: boolean
    device?: boolean
    os?: boolean
    count?: boolean
    shortUrlId?: boolean
  }

  export type DeviceOsStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device" | "os" | "count" | "shortUrlId", ExtArgs["result"]["deviceOsStat"]>
  export type DeviceOsStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }

  export type $DeviceOsStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceOsStat"
    objects: {
      shortUrl: Prisma.$ShortUrlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      device: string
      os: string
      count: number
      shortUrlId: string
    }, ExtArgs["result"]["deviceOsStat"]>
    composites: {}
  }

  type DeviceOsStatGetPayload<S extends boolean | null | undefined | DeviceOsStatDefaultArgs> = $Result.GetResult<Prisma.$DeviceOsStatPayload, S>

  type DeviceOsStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceOsStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceOsStatCountAggregateInputType | true
    }

  export interface DeviceOsStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceOsStat'], meta: { name: 'DeviceOsStat' } }
    /**
     * Find zero or one DeviceOsStat that matches the filter.
     * @param {DeviceOsStatFindUniqueArgs} args - Arguments to find a DeviceOsStat
     * @example
     * // Get one DeviceOsStat
     * const deviceOsStat = await prisma.deviceOsStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceOsStatFindUniqueArgs>(args: SelectSubset<T, DeviceOsStatFindUniqueArgs<ExtArgs>>): Prisma__DeviceOsStatClient<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceOsStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceOsStatFindUniqueOrThrowArgs} args - Arguments to find a DeviceOsStat
     * @example
     * // Get one DeviceOsStat
     * const deviceOsStat = await prisma.deviceOsStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceOsStatFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceOsStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceOsStatClient<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceOsStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceOsStatFindFirstArgs} args - Arguments to find a DeviceOsStat
     * @example
     * // Get one DeviceOsStat
     * const deviceOsStat = await prisma.deviceOsStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceOsStatFindFirstArgs>(args?: SelectSubset<T, DeviceOsStatFindFirstArgs<ExtArgs>>): Prisma__DeviceOsStatClient<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceOsStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceOsStatFindFirstOrThrowArgs} args - Arguments to find a DeviceOsStat
     * @example
     * // Get one DeviceOsStat
     * const deviceOsStat = await prisma.deviceOsStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceOsStatFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceOsStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceOsStatClient<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceOsStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceOsStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceOsStats
     * const deviceOsStats = await prisma.deviceOsStat.findMany()
     * 
     * // Get first 10 DeviceOsStats
     * const deviceOsStats = await prisma.deviceOsStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceOsStatWithIdOnly = await prisma.deviceOsStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceOsStatFindManyArgs>(args?: SelectSubset<T, DeviceOsStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceOsStat.
     * @param {DeviceOsStatCreateArgs} args - Arguments to create a DeviceOsStat.
     * @example
     * // Create one DeviceOsStat
     * const DeviceOsStat = await prisma.deviceOsStat.create({
     *   data: {
     *     // ... data to create a DeviceOsStat
     *   }
     * })
     * 
     */
    create<T extends DeviceOsStatCreateArgs>(args: SelectSubset<T, DeviceOsStatCreateArgs<ExtArgs>>): Prisma__DeviceOsStatClient<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceOsStats.
     * @param {DeviceOsStatCreateManyArgs} args - Arguments to create many DeviceOsStats.
     * @example
     * // Create many DeviceOsStats
     * const deviceOsStat = await prisma.deviceOsStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceOsStatCreateManyArgs>(args?: SelectSubset<T, DeviceOsStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeviceOsStat.
     * @param {DeviceOsStatDeleteArgs} args - Arguments to delete one DeviceOsStat.
     * @example
     * // Delete one DeviceOsStat
     * const DeviceOsStat = await prisma.deviceOsStat.delete({
     *   where: {
     *     // ... filter to delete one DeviceOsStat
     *   }
     * })
     * 
     */
    delete<T extends DeviceOsStatDeleteArgs>(args: SelectSubset<T, DeviceOsStatDeleteArgs<ExtArgs>>): Prisma__DeviceOsStatClient<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceOsStat.
     * @param {DeviceOsStatUpdateArgs} args - Arguments to update one DeviceOsStat.
     * @example
     * // Update one DeviceOsStat
     * const deviceOsStat = await prisma.deviceOsStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceOsStatUpdateArgs>(args: SelectSubset<T, DeviceOsStatUpdateArgs<ExtArgs>>): Prisma__DeviceOsStatClient<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceOsStats.
     * @param {DeviceOsStatDeleteManyArgs} args - Arguments to filter DeviceOsStats to delete.
     * @example
     * // Delete a few DeviceOsStats
     * const { count } = await prisma.deviceOsStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceOsStatDeleteManyArgs>(args?: SelectSubset<T, DeviceOsStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceOsStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceOsStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceOsStats
     * const deviceOsStat = await prisma.deviceOsStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceOsStatUpdateManyArgs>(args: SelectSubset<T, DeviceOsStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceOsStat.
     * @param {DeviceOsStatUpsertArgs} args - Arguments to update or create a DeviceOsStat.
     * @example
     * // Update or create a DeviceOsStat
     * const deviceOsStat = await prisma.deviceOsStat.upsert({
     *   create: {
     *     // ... data to create a DeviceOsStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceOsStat we want to update
     *   }
     * })
     */
    upsert<T extends DeviceOsStatUpsertArgs>(args: SelectSubset<T, DeviceOsStatUpsertArgs<ExtArgs>>): Prisma__DeviceOsStatClient<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceOsStats that matches the filter.
     * @param {DeviceOsStatFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const deviceOsStat = await prisma.deviceOsStat.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DeviceOsStatFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DeviceOsStat.
     * @param {DeviceOsStatAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const deviceOsStat = await prisma.deviceOsStat.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DeviceOsStatAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DeviceOsStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceOsStatCountArgs} args - Arguments to filter DeviceOsStats to count.
     * @example
     * // Count the number of DeviceOsStats
     * const count = await prisma.deviceOsStat.count({
     *   where: {
     *     // ... the filter for the DeviceOsStats we want to count
     *   }
     * })
    **/
    count<T extends DeviceOsStatCountArgs>(
      args?: Subset<T, DeviceOsStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceOsStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceOsStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceOsStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceOsStatAggregateArgs>(args: Subset<T, DeviceOsStatAggregateArgs>): Prisma.PrismaPromise<GetDeviceOsStatAggregateType<T>>

    /**
     * Group by DeviceOsStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceOsStatGroupByArgs} args - Group by arguments.
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
      T extends DeviceOsStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceOsStatGroupByArgs['orderBy'] }
        : { orderBy?: DeviceOsStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceOsStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceOsStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceOsStat model
   */
  readonly fields: DeviceOsStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceOsStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceOsStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shortUrl<T extends ShortUrlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrlDefaultArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DeviceOsStat model
   */
  interface DeviceOsStatFieldRefs {
    readonly id: FieldRef<"DeviceOsStat", 'String'>
    readonly device: FieldRef<"DeviceOsStat", 'String'>
    readonly os: FieldRef<"DeviceOsStat", 'String'>
    readonly count: FieldRef<"DeviceOsStat", 'Int'>
    readonly shortUrlId: FieldRef<"DeviceOsStat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeviceOsStat findUnique
   */
  export type DeviceOsStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * Filter, which DeviceOsStat to fetch.
     */
    where: DeviceOsStatWhereUniqueInput
  }

  /**
   * DeviceOsStat findUniqueOrThrow
   */
  export type DeviceOsStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * Filter, which DeviceOsStat to fetch.
     */
    where: DeviceOsStatWhereUniqueInput
  }

  /**
   * DeviceOsStat findFirst
   */
  export type DeviceOsStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * Filter, which DeviceOsStat to fetch.
     */
    where?: DeviceOsStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceOsStats to fetch.
     */
    orderBy?: DeviceOsStatOrderByWithRelationInput | DeviceOsStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceOsStats.
     */
    cursor?: DeviceOsStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceOsStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceOsStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceOsStats.
     */
    distinct?: DeviceOsStatScalarFieldEnum | DeviceOsStatScalarFieldEnum[]
  }

  /**
   * DeviceOsStat findFirstOrThrow
   */
  export type DeviceOsStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * Filter, which DeviceOsStat to fetch.
     */
    where?: DeviceOsStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceOsStats to fetch.
     */
    orderBy?: DeviceOsStatOrderByWithRelationInput | DeviceOsStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceOsStats.
     */
    cursor?: DeviceOsStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceOsStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceOsStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceOsStats.
     */
    distinct?: DeviceOsStatScalarFieldEnum | DeviceOsStatScalarFieldEnum[]
  }

  /**
   * DeviceOsStat findMany
   */
  export type DeviceOsStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * Filter, which DeviceOsStats to fetch.
     */
    where?: DeviceOsStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceOsStats to fetch.
     */
    orderBy?: DeviceOsStatOrderByWithRelationInput | DeviceOsStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceOsStats.
     */
    cursor?: DeviceOsStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceOsStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceOsStats.
     */
    skip?: number
    distinct?: DeviceOsStatScalarFieldEnum | DeviceOsStatScalarFieldEnum[]
  }

  /**
   * DeviceOsStat create
   */
  export type DeviceOsStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceOsStat.
     */
    data: XOR<DeviceOsStatCreateInput, DeviceOsStatUncheckedCreateInput>
  }

  /**
   * DeviceOsStat createMany
   */
  export type DeviceOsStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceOsStats.
     */
    data: DeviceOsStatCreateManyInput | DeviceOsStatCreateManyInput[]
  }

  /**
   * DeviceOsStat update
   */
  export type DeviceOsStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceOsStat.
     */
    data: XOR<DeviceOsStatUpdateInput, DeviceOsStatUncheckedUpdateInput>
    /**
     * Choose, which DeviceOsStat to update.
     */
    where: DeviceOsStatWhereUniqueInput
  }

  /**
   * DeviceOsStat updateMany
   */
  export type DeviceOsStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceOsStats.
     */
    data: XOR<DeviceOsStatUpdateManyMutationInput, DeviceOsStatUncheckedUpdateManyInput>
    /**
     * Filter which DeviceOsStats to update
     */
    where?: DeviceOsStatWhereInput
    /**
     * Limit how many DeviceOsStats to update.
     */
    limit?: number
  }

  /**
   * DeviceOsStat upsert
   */
  export type DeviceOsStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceOsStat to update in case it exists.
     */
    where: DeviceOsStatWhereUniqueInput
    /**
     * In case the DeviceOsStat found by the `where` argument doesn't exist, create a new DeviceOsStat with this data.
     */
    create: XOR<DeviceOsStatCreateInput, DeviceOsStatUncheckedCreateInput>
    /**
     * In case the DeviceOsStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceOsStatUpdateInput, DeviceOsStatUncheckedUpdateInput>
  }

  /**
   * DeviceOsStat delete
   */
  export type DeviceOsStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    /**
     * Filter which DeviceOsStat to delete.
     */
    where: DeviceOsStatWhereUniqueInput
  }

  /**
   * DeviceOsStat deleteMany
   */
  export type DeviceOsStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceOsStats to delete
     */
    where?: DeviceOsStatWhereInput
    /**
     * Limit how many DeviceOsStats to delete.
     */
    limit?: number
  }

  /**
   * DeviceOsStat findRaw
   */
  export type DeviceOsStatFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DeviceOsStat aggregateRaw
   */
  export type DeviceOsStatAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DeviceOsStat without action
   */
  export type DeviceOsStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
  }


  /**
   * Model HourlyStat
   */

  export type AggregateHourlyStat = {
    _count: HourlyStatCountAggregateOutputType | null
    _avg: HourlyStatAvgAggregateOutputType | null
    _sum: HourlyStatSumAggregateOutputType | null
    _min: HourlyStatMinAggregateOutputType | null
    _max: HourlyStatMaxAggregateOutputType | null
  }

  export type HourlyStatAvgAggregateOutputType = {
    hour: number | null
    count: number | null
  }

  export type HourlyStatSumAggregateOutputType = {
    hour: number | null
    count: number | null
  }

  export type HourlyStatMinAggregateOutputType = {
    id: string | null
    hour: number | null
    count: number | null
    shortUrlId: string | null
  }

  export type HourlyStatMaxAggregateOutputType = {
    id: string | null
    hour: number | null
    count: number | null
    shortUrlId: string | null
  }

  export type HourlyStatCountAggregateOutputType = {
    id: number
    hour: number
    count: number
    shortUrlId: number
    _all: number
  }


  export type HourlyStatAvgAggregateInputType = {
    hour?: true
    count?: true
  }

  export type HourlyStatSumAggregateInputType = {
    hour?: true
    count?: true
  }

  export type HourlyStatMinAggregateInputType = {
    id?: true
    hour?: true
    count?: true
    shortUrlId?: true
  }

  export type HourlyStatMaxAggregateInputType = {
    id?: true
    hour?: true
    count?: true
    shortUrlId?: true
  }

  export type HourlyStatCountAggregateInputType = {
    id?: true
    hour?: true
    count?: true
    shortUrlId?: true
    _all?: true
  }

  export type HourlyStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HourlyStat to aggregate.
     */
    where?: HourlyStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HourlyStats to fetch.
     */
    orderBy?: HourlyStatOrderByWithRelationInput | HourlyStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HourlyStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HourlyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HourlyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HourlyStats
    **/
    _count?: true | HourlyStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HourlyStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HourlyStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HourlyStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HourlyStatMaxAggregateInputType
  }

  export type GetHourlyStatAggregateType<T extends HourlyStatAggregateArgs> = {
        [P in keyof T & keyof AggregateHourlyStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHourlyStat[P]>
      : GetScalarType<T[P], AggregateHourlyStat[P]>
  }




  export type HourlyStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HourlyStatWhereInput
    orderBy?: HourlyStatOrderByWithAggregationInput | HourlyStatOrderByWithAggregationInput[]
    by: HourlyStatScalarFieldEnum[] | HourlyStatScalarFieldEnum
    having?: HourlyStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HourlyStatCountAggregateInputType | true
    _avg?: HourlyStatAvgAggregateInputType
    _sum?: HourlyStatSumAggregateInputType
    _min?: HourlyStatMinAggregateInputType
    _max?: HourlyStatMaxAggregateInputType
  }

  export type HourlyStatGroupByOutputType = {
    id: string
    hour: number
    count: number
    shortUrlId: string
    _count: HourlyStatCountAggregateOutputType | null
    _avg: HourlyStatAvgAggregateOutputType | null
    _sum: HourlyStatSumAggregateOutputType | null
    _min: HourlyStatMinAggregateOutputType | null
    _max: HourlyStatMaxAggregateOutputType | null
  }

  type GetHourlyStatGroupByPayload<T extends HourlyStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HourlyStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HourlyStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HourlyStatGroupByOutputType[P]>
            : GetScalarType<T[P], HourlyStatGroupByOutputType[P]>
        }
      >
    >


  export type HourlyStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hour?: boolean
    count?: boolean
    shortUrlId?: boolean
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hourlyStat"]>



  export type HourlyStatSelectScalar = {
    id?: boolean
    hour?: boolean
    count?: boolean
    shortUrlId?: boolean
  }

  export type HourlyStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hour" | "count" | "shortUrlId", ExtArgs["result"]["hourlyStat"]>
  export type HourlyStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }

  export type $HourlyStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HourlyStat"
    objects: {
      shortUrl: Prisma.$ShortUrlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hour: number
      count: number
      shortUrlId: string
    }, ExtArgs["result"]["hourlyStat"]>
    composites: {}
  }

  type HourlyStatGetPayload<S extends boolean | null | undefined | HourlyStatDefaultArgs> = $Result.GetResult<Prisma.$HourlyStatPayload, S>

  type HourlyStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HourlyStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HourlyStatCountAggregateInputType | true
    }

  export interface HourlyStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HourlyStat'], meta: { name: 'HourlyStat' } }
    /**
     * Find zero or one HourlyStat that matches the filter.
     * @param {HourlyStatFindUniqueArgs} args - Arguments to find a HourlyStat
     * @example
     * // Get one HourlyStat
     * const hourlyStat = await prisma.hourlyStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HourlyStatFindUniqueArgs>(args: SelectSubset<T, HourlyStatFindUniqueArgs<ExtArgs>>): Prisma__HourlyStatClient<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HourlyStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HourlyStatFindUniqueOrThrowArgs} args - Arguments to find a HourlyStat
     * @example
     * // Get one HourlyStat
     * const hourlyStat = await prisma.hourlyStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HourlyStatFindUniqueOrThrowArgs>(args: SelectSubset<T, HourlyStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HourlyStatClient<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HourlyStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyStatFindFirstArgs} args - Arguments to find a HourlyStat
     * @example
     * // Get one HourlyStat
     * const hourlyStat = await prisma.hourlyStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HourlyStatFindFirstArgs>(args?: SelectSubset<T, HourlyStatFindFirstArgs<ExtArgs>>): Prisma__HourlyStatClient<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HourlyStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyStatFindFirstOrThrowArgs} args - Arguments to find a HourlyStat
     * @example
     * // Get one HourlyStat
     * const hourlyStat = await prisma.hourlyStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HourlyStatFindFirstOrThrowArgs>(args?: SelectSubset<T, HourlyStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__HourlyStatClient<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HourlyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HourlyStats
     * const hourlyStats = await prisma.hourlyStat.findMany()
     * 
     * // Get first 10 HourlyStats
     * const hourlyStats = await prisma.hourlyStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hourlyStatWithIdOnly = await prisma.hourlyStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HourlyStatFindManyArgs>(args?: SelectSubset<T, HourlyStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HourlyStat.
     * @param {HourlyStatCreateArgs} args - Arguments to create a HourlyStat.
     * @example
     * // Create one HourlyStat
     * const HourlyStat = await prisma.hourlyStat.create({
     *   data: {
     *     // ... data to create a HourlyStat
     *   }
     * })
     * 
     */
    create<T extends HourlyStatCreateArgs>(args: SelectSubset<T, HourlyStatCreateArgs<ExtArgs>>): Prisma__HourlyStatClient<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HourlyStats.
     * @param {HourlyStatCreateManyArgs} args - Arguments to create many HourlyStats.
     * @example
     * // Create many HourlyStats
     * const hourlyStat = await prisma.hourlyStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HourlyStatCreateManyArgs>(args?: SelectSubset<T, HourlyStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HourlyStat.
     * @param {HourlyStatDeleteArgs} args - Arguments to delete one HourlyStat.
     * @example
     * // Delete one HourlyStat
     * const HourlyStat = await prisma.hourlyStat.delete({
     *   where: {
     *     // ... filter to delete one HourlyStat
     *   }
     * })
     * 
     */
    delete<T extends HourlyStatDeleteArgs>(args: SelectSubset<T, HourlyStatDeleteArgs<ExtArgs>>): Prisma__HourlyStatClient<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HourlyStat.
     * @param {HourlyStatUpdateArgs} args - Arguments to update one HourlyStat.
     * @example
     * // Update one HourlyStat
     * const hourlyStat = await prisma.hourlyStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HourlyStatUpdateArgs>(args: SelectSubset<T, HourlyStatUpdateArgs<ExtArgs>>): Prisma__HourlyStatClient<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HourlyStats.
     * @param {HourlyStatDeleteManyArgs} args - Arguments to filter HourlyStats to delete.
     * @example
     * // Delete a few HourlyStats
     * const { count } = await prisma.hourlyStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HourlyStatDeleteManyArgs>(args?: SelectSubset<T, HourlyStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HourlyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HourlyStats
     * const hourlyStat = await prisma.hourlyStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HourlyStatUpdateManyArgs>(args: SelectSubset<T, HourlyStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HourlyStat.
     * @param {HourlyStatUpsertArgs} args - Arguments to update or create a HourlyStat.
     * @example
     * // Update or create a HourlyStat
     * const hourlyStat = await prisma.hourlyStat.upsert({
     *   create: {
     *     // ... data to create a HourlyStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HourlyStat we want to update
     *   }
     * })
     */
    upsert<T extends HourlyStatUpsertArgs>(args: SelectSubset<T, HourlyStatUpsertArgs<ExtArgs>>): Prisma__HourlyStatClient<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HourlyStats that matches the filter.
     * @param {HourlyStatFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hourlyStat = await prisma.hourlyStat.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HourlyStatFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HourlyStat.
     * @param {HourlyStatAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hourlyStat = await prisma.hourlyStat.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HourlyStatAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HourlyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyStatCountArgs} args - Arguments to filter HourlyStats to count.
     * @example
     * // Count the number of HourlyStats
     * const count = await prisma.hourlyStat.count({
     *   where: {
     *     // ... the filter for the HourlyStats we want to count
     *   }
     * })
    **/
    count<T extends HourlyStatCountArgs>(
      args?: Subset<T, HourlyStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HourlyStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HourlyStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HourlyStatAggregateArgs>(args: Subset<T, HourlyStatAggregateArgs>): Prisma.PrismaPromise<GetHourlyStatAggregateType<T>>

    /**
     * Group by HourlyStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyStatGroupByArgs} args - Group by arguments.
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
      T extends HourlyStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HourlyStatGroupByArgs['orderBy'] }
        : { orderBy?: HourlyStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HourlyStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHourlyStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HourlyStat model
   */
  readonly fields: HourlyStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HourlyStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HourlyStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shortUrl<T extends ShortUrlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrlDefaultArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HourlyStat model
   */
  interface HourlyStatFieldRefs {
    readonly id: FieldRef<"HourlyStat", 'String'>
    readonly hour: FieldRef<"HourlyStat", 'Int'>
    readonly count: FieldRef<"HourlyStat", 'Int'>
    readonly shortUrlId: FieldRef<"HourlyStat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HourlyStat findUnique
   */
  export type HourlyStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * Filter, which HourlyStat to fetch.
     */
    where: HourlyStatWhereUniqueInput
  }

  /**
   * HourlyStat findUniqueOrThrow
   */
  export type HourlyStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * Filter, which HourlyStat to fetch.
     */
    where: HourlyStatWhereUniqueInput
  }

  /**
   * HourlyStat findFirst
   */
  export type HourlyStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * Filter, which HourlyStat to fetch.
     */
    where?: HourlyStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HourlyStats to fetch.
     */
    orderBy?: HourlyStatOrderByWithRelationInput | HourlyStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HourlyStats.
     */
    cursor?: HourlyStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HourlyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HourlyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HourlyStats.
     */
    distinct?: HourlyStatScalarFieldEnum | HourlyStatScalarFieldEnum[]
  }

  /**
   * HourlyStat findFirstOrThrow
   */
  export type HourlyStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * Filter, which HourlyStat to fetch.
     */
    where?: HourlyStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HourlyStats to fetch.
     */
    orderBy?: HourlyStatOrderByWithRelationInput | HourlyStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HourlyStats.
     */
    cursor?: HourlyStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HourlyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HourlyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HourlyStats.
     */
    distinct?: HourlyStatScalarFieldEnum | HourlyStatScalarFieldEnum[]
  }

  /**
   * HourlyStat findMany
   */
  export type HourlyStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * Filter, which HourlyStats to fetch.
     */
    where?: HourlyStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HourlyStats to fetch.
     */
    orderBy?: HourlyStatOrderByWithRelationInput | HourlyStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HourlyStats.
     */
    cursor?: HourlyStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HourlyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HourlyStats.
     */
    skip?: number
    distinct?: HourlyStatScalarFieldEnum | HourlyStatScalarFieldEnum[]
  }

  /**
   * HourlyStat create
   */
  export type HourlyStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * The data needed to create a HourlyStat.
     */
    data: XOR<HourlyStatCreateInput, HourlyStatUncheckedCreateInput>
  }

  /**
   * HourlyStat createMany
   */
  export type HourlyStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HourlyStats.
     */
    data: HourlyStatCreateManyInput | HourlyStatCreateManyInput[]
  }

  /**
   * HourlyStat update
   */
  export type HourlyStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * The data needed to update a HourlyStat.
     */
    data: XOR<HourlyStatUpdateInput, HourlyStatUncheckedUpdateInput>
    /**
     * Choose, which HourlyStat to update.
     */
    where: HourlyStatWhereUniqueInput
  }

  /**
   * HourlyStat updateMany
   */
  export type HourlyStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HourlyStats.
     */
    data: XOR<HourlyStatUpdateManyMutationInput, HourlyStatUncheckedUpdateManyInput>
    /**
     * Filter which HourlyStats to update
     */
    where?: HourlyStatWhereInput
    /**
     * Limit how many HourlyStats to update.
     */
    limit?: number
  }

  /**
   * HourlyStat upsert
   */
  export type HourlyStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * The filter to search for the HourlyStat to update in case it exists.
     */
    where: HourlyStatWhereUniqueInput
    /**
     * In case the HourlyStat found by the `where` argument doesn't exist, create a new HourlyStat with this data.
     */
    create: XOR<HourlyStatCreateInput, HourlyStatUncheckedCreateInput>
    /**
     * In case the HourlyStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HourlyStatUpdateInput, HourlyStatUncheckedUpdateInput>
  }

  /**
   * HourlyStat delete
   */
  export type HourlyStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    /**
     * Filter which HourlyStat to delete.
     */
    where: HourlyStatWhereUniqueInput
  }

  /**
   * HourlyStat deleteMany
   */
  export type HourlyStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HourlyStats to delete
     */
    where?: HourlyStatWhereInput
    /**
     * Limit how many HourlyStats to delete.
     */
    limit?: number
  }

  /**
   * HourlyStat findRaw
   */
  export type HourlyStatFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HourlyStat aggregateRaw
   */
  export type HourlyStatAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HourlyStat without action
   */
  export type HourlyStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    expiresAt: Date | null
    token: string | null
    email: string | null
    userId: string | null
    used: boolean | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    expiresAt: Date | null
    token: string | null
    email: string | null
    userId: string | null
    used: boolean | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    createdAt: number
    expiresAt: number
    token: number
    email: number
    userId: number
    used: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    token?: true
    email?: true
    userId?: true
    used?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    token?: true
    email?: true
    userId?: true
    used?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    createdAt?: true
    expiresAt?: true
    token?: true
    email?: true
    userId?: true
    used?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    createdAt: Date
    expiresAt: Date
    token: string
    email: string
    userId: string
    used: boolean
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    token?: boolean
    email?: boolean
    userId?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>



  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    token?: boolean
    email?: boolean
    userId?: boolean
    used?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "expiresAt" | "token" | "email" | "userId" | "used", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      expiresAt: Date
      token: string
      email: string
      userId: string
      used: boolean
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * @param {PasswordResetTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const passwordResetToken = await prisma.passwordResetToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PasswordResetTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PasswordResetToken.
     * @param {PasswordResetTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const passwordResetToken = await prisma.passwordResetToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PasswordResetTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly userId: FieldRef<"PasswordResetToken", 'String'>
    readonly used: FieldRef<"PasswordResetToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken findRaw
   */
  export type PasswordResetTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PasswordResetToken aggregateRaw
   */
  export type PasswordResetTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    token: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    token: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    token: number
    userId: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    token?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    token?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    token?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    token: string
    userId: string
    ipAddress: string | null
    userAgent: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    token?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    token?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "expiresAt" | "token" | "userId" | "ipAddress" | "userAgent", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      expiresAt: Date
      token: string
      userId: string
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model ShortUrl
   */

  export type AggregateShortUrl = {
    _count: ShortUrlCountAggregateOutputType | null
    _avg: ShortUrlAvgAggregateOutputType | null
    _sum: ShortUrlSumAggregateOutputType | null
    _min: ShortUrlMinAggregateOutputType | null
    _max: ShortUrlMaxAggregateOutputType | null
  }

  export type ShortUrlAvgAggregateOutputType = {
    clicks: number | null
  }

  export type ShortUrlSumAggregateOutputType = {
    clicks: number | null
  }

  export type ShortUrlMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    shortCode: string | null
    originalUrl: string | null
    clicks: number | null
    userId: string | null
  }

  export type ShortUrlMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    shortCode: string | null
    originalUrl: string | null
    clicks: number | null
    userId: string | null
  }

  export type ShortUrlCountAggregateOutputType = {
    id: number
    createdAt: number
    shortCode: number
    originalUrl: number
    clicks: number
    userId: number
    _all: number
  }


  export type ShortUrlAvgAggregateInputType = {
    clicks?: true
  }

  export type ShortUrlSumAggregateInputType = {
    clicks?: true
  }

  export type ShortUrlMinAggregateInputType = {
    id?: true
    createdAt?: true
    shortCode?: true
    originalUrl?: true
    clicks?: true
    userId?: true
  }

  export type ShortUrlMaxAggregateInputType = {
    id?: true
    createdAt?: true
    shortCode?: true
    originalUrl?: true
    clicks?: true
    userId?: true
  }

  export type ShortUrlCountAggregateInputType = {
    id?: true
    createdAt?: true
    shortCode?: true
    originalUrl?: true
    clicks?: true
    userId?: true
    _all?: true
  }

  export type ShortUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortUrl to aggregate.
     */
    where?: ShortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortUrls to fetch.
     */
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShortUrls
    **/
    _count?: true | ShortUrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShortUrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShortUrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortUrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortUrlMaxAggregateInputType
  }

  export type GetShortUrlAggregateType<T extends ShortUrlAggregateArgs> = {
        [P in keyof T & keyof AggregateShortUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortUrl[P]>
      : GetScalarType<T[P], AggregateShortUrl[P]>
  }




  export type ShortUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortUrlWhereInput
    orderBy?: ShortUrlOrderByWithAggregationInput | ShortUrlOrderByWithAggregationInput[]
    by: ShortUrlScalarFieldEnum[] | ShortUrlScalarFieldEnum
    having?: ShortUrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortUrlCountAggregateInputType | true
    _avg?: ShortUrlAvgAggregateInputType
    _sum?: ShortUrlSumAggregateInputType
    _min?: ShortUrlMinAggregateInputType
    _max?: ShortUrlMaxAggregateInputType
  }

  export type ShortUrlGroupByOutputType = {
    id: string
    createdAt: Date
    shortCode: string
    originalUrl: string
    clicks: number
    userId: string
    _count: ShortUrlCountAggregateOutputType | null
    _avg: ShortUrlAvgAggregateOutputType | null
    _sum: ShortUrlSumAggregateOutputType | null
    _min: ShortUrlMinAggregateOutputType | null
    _max: ShortUrlMaxAggregateOutputType | null
  }

  type GetShortUrlGroupByPayload<T extends ShortUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortUrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortUrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortUrlGroupByOutputType[P]>
            : GetScalarType<T[P], ShortUrlGroupByOutputType[P]>
        }
      >
    >


  export type ShortUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    shortCode?: boolean
    originalUrl?: boolean
    clicks?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    visits?: boolean | ShortUrl$visitsArgs<ExtArgs>
    dailyStats?: boolean | ShortUrl$dailyStatsArgs<ExtArgs>
    browserStats?: boolean | ShortUrl$browserStatsArgs<ExtArgs>
    deviceOsStats?: boolean | ShortUrl$deviceOsStatsArgs<ExtArgs>
    hourlyStats?: boolean | ShortUrl$hourlyStatsArgs<ExtArgs>
    _count?: boolean | ShortUrlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shortUrl"]>



  export type ShortUrlSelectScalar = {
    id?: boolean
    createdAt?: boolean
    shortCode?: boolean
    originalUrl?: boolean
    clicks?: boolean
    userId?: boolean
  }

  export type ShortUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "shortCode" | "originalUrl" | "clicks" | "userId", ExtArgs["result"]["shortUrl"]>
  export type ShortUrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    visits?: boolean | ShortUrl$visitsArgs<ExtArgs>
    dailyStats?: boolean | ShortUrl$dailyStatsArgs<ExtArgs>
    browserStats?: boolean | ShortUrl$browserStatsArgs<ExtArgs>
    deviceOsStats?: boolean | ShortUrl$deviceOsStatsArgs<ExtArgs>
    hourlyStats?: boolean | ShortUrl$hourlyStatsArgs<ExtArgs>
    _count?: boolean | ShortUrlCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShortUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShortUrl"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      visits: Prisma.$VisitLogPayload<ExtArgs>[]
      dailyStats: Prisma.$DailyStatPayload<ExtArgs>[]
      browserStats: Prisma.$BrowserStatPayload<ExtArgs>[]
      deviceOsStats: Prisma.$DeviceOsStatPayload<ExtArgs>[]
      hourlyStats: Prisma.$HourlyStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      shortCode: string
      originalUrl: string
      clicks: number
      userId: string
    }, ExtArgs["result"]["shortUrl"]>
    composites: {}
  }

  type ShortUrlGetPayload<S extends boolean | null | undefined | ShortUrlDefaultArgs> = $Result.GetResult<Prisma.$ShortUrlPayload, S>

  type ShortUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShortUrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShortUrlCountAggregateInputType | true
    }

  export interface ShortUrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShortUrl'], meta: { name: 'ShortUrl' } }
    /**
     * Find zero or one ShortUrl that matches the filter.
     * @param {ShortUrlFindUniqueArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortUrlFindUniqueArgs>(args: SelectSubset<T, ShortUrlFindUniqueArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShortUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortUrlFindUniqueOrThrowArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortUrlFindUniqueOrThrowArgs>(args: SelectSubset<T, ShortUrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlFindFirstArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortUrlFindFirstArgs>(args?: SelectSubset<T, ShortUrlFindFirstArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlFindFirstOrThrowArgs} args - Arguments to find a ShortUrl
     * @example
     * // Get one ShortUrl
     * const shortUrl = await prisma.shortUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortUrlFindFirstOrThrowArgs>(args?: SelectSubset<T, ShortUrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShortUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortUrls
     * const shortUrls = await prisma.shortUrl.findMany()
     * 
     * // Get first 10 ShortUrls
     * const shortUrls = await prisma.shortUrl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortUrlWithIdOnly = await prisma.shortUrl.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShortUrlFindManyArgs>(args?: SelectSubset<T, ShortUrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShortUrl.
     * @param {ShortUrlCreateArgs} args - Arguments to create a ShortUrl.
     * @example
     * // Create one ShortUrl
     * const ShortUrl = await prisma.shortUrl.create({
     *   data: {
     *     // ... data to create a ShortUrl
     *   }
     * })
     * 
     */
    create<T extends ShortUrlCreateArgs>(args: SelectSubset<T, ShortUrlCreateArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShortUrls.
     * @param {ShortUrlCreateManyArgs} args - Arguments to create many ShortUrls.
     * @example
     * // Create many ShortUrls
     * const shortUrl = await prisma.shortUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShortUrlCreateManyArgs>(args?: SelectSubset<T, ShortUrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShortUrl.
     * @param {ShortUrlDeleteArgs} args - Arguments to delete one ShortUrl.
     * @example
     * // Delete one ShortUrl
     * const ShortUrl = await prisma.shortUrl.delete({
     *   where: {
     *     // ... filter to delete one ShortUrl
     *   }
     * })
     * 
     */
    delete<T extends ShortUrlDeleteArgs>(args: SelectSubset<T, ShortUrlDeleteArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShortUrl.
     * @param {ShortUrlUpdateArgs} args - Arguments to update one ShortUrl.
     * @example
     * // Update one ShortUrl
     * const shortUrl = await prisma.shortUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShortUrlUpdateArgs>(args: SelectSubset<T, ShortUrlUpdateArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShortUrls.
     * @param {ShortUrlDeleteManyArgs} args - Arguments to filter ShortUrls to delete.
     * @example
     * // Delete a few ShortUrls
     * const { count } = await prisma.shortUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShortUrlDeleteManyArgs>(args?: SelectSubset<T, ShortUrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortUrls
     * const shortUrl = await prisma.shortUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShortUrlUpdateManyArgs>(args: SelectSubset<T, ShortUrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShortUrl.
     * @param {ShortUrlUpsertArgs} args - Arguments to update or create a ShortUrl.
     * @example
     * // Update or create a ShortUrl
     * const shortUrl = await prisma.shortUrl.upsert({
     *   create: {
     *     // ... data to create a ShortUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortUrl we want to update
     *   }
     * })
     */
    upsert<T extends ShortUrlUpsertArgs>(args: SelectSubset<T, ShortUrlUpsertArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShortUrls that matches the filter.
     * @param {ShortUrlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shortUrl = await prisma.shortUrl.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ShortUrlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ShortUrl.
     * @param {ShortUrlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shortUrl = await prisma.shortUrl.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ShortUrlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ShortUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlCountArgs} args - Arguments to filter ShortUrls to count.
     * @example
     * // Count the number of ShortUrls
     * const count = await prisma.shortUrl.count({
     *   where: {
     *     // ... the filter for the ShortUrls we want to count
     *   }
     * })
    **/
    count<T extends ShortUrlCountArgs>(
      args?: Subset<T, ShortUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortUrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShortUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShortUrlAggregateArgs>(args: Subset<T, ShortUrlAggregateArgs>): Prisma.PrismaPromise<GetShortUrlAggregateType<T>>

    /**
     * Group by ShortUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortUrlGroupByArgs} args - Group by arguments.
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
      T extends ShortUrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortUrlGroupByArgs['orderBy'] }
        : { orderBy?: ShortUrlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShortUrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShortUrl model
   */
  readonly fields: ShortUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShortUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortUrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visits<T extends ShortUrl$visitsArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrl$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyStats<T extends ShortUrl$dailyStatsArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrl$dailyStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    browserStats<T extends ShortUrl$browserStatsArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrl$browserStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrowserStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deviceOsStats<T extends ShortUrl$deviceOsStatsArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrl$deviceOsStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceOsStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hourlyStats<T extends ShortUrl$hourlyStatsArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrl$hourlyStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HourlyStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShortUrl model
   */
  interface ShortUrlFieldRefs {
    readonly id: FieldRef<"ShortUrl", 'String'>
    readonly createdAt: FieldRef<"ShortUrl", 'DateTime'>
    readonly shortCode: FieldRef<"ShortUrl", 'String'>
    readonly originalUrl: FieldRef<"ShortUrl", 'String'>
    readonly clicks: FieldRef<"ShortUrl", 'Int'>
    readonly userId: FieldRef<"ShortUrl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShortUrl findUnique
   */
  export type ShortUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrl to fetch.
     */
    where: ShortUrlWhereUniqueInput
  }

  /**
   * ShortUrl findUniqueOrThrow
   */
  export type ShortUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrl to fetch.
     */
    where: ShortUrlWhereUniqueInput
  }

  /**
   * ShortUrl findFirst
   */
  export type ShortUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrl to fetch.
     */
    where?: ShortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortUrls to fetch.
     */
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortUrls.
     */
    cursor?: ShortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortUrls.
     */
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * ShortUrl findFirstOrThrow
   */
  export type ShortUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrl to fetch.
     */
    where?: ShortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortUrls to fetch.
     */
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortUrls.
     */
    cursor?: ShortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortUrls.
     */
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * ShortUrl findMany
   */
  export type ShortUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter, which ShortUrls to fetch.
     */
    where?: ShortUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortUrls to fetch.
     */
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShortUrls.
     */
    cursor?: ShortUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortUrls.
     */
    skip?: number
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
  }

  /**
   * ShortUrl create
   */
  export type ShortUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * The data needed to create a ShortUrl.
     */
    data: XOR<ShortUrlCreateInput, ShortUrlUncheckedCreateInput>
  }

  /**
   * ShortUrl createMany
   */
  export type ShortUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShortUrls.
     */
    data: ShortUrlCreateManyInput | ShortUrlCreateManyInput[]
  }

  /**
   * ShortUrl update
   */
  export type ShortUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * The data needed to update a ShortUrl.
     */
    data: XOR<ShortUrlUpdateInput, ShortUrlUncheckedUpdateInput>
    /**
     * Choose, which ShortUrl to update.
     */
    where: ShortUrlWhereUniqueInput
  }

  /**
   * ShortUrl updateMany
   */
  export type ShortUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShortUrls.
     */
    data: XOR<ShortUrlUpdateManyMutationInput, ShortUrlUncheckedUpdateManyInput>
    /**
     * Filter which ShortUrls to update
     */
    where?: ShortUrlWhereInput
    /**
     * Limit how many ShortUrls to update.
     */
    limit?: number
  }

  /**
   * ShortUrl upsert
   */
  export type ShortUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * The filter to search for the ShortUrl to update in case it exists.
     */
    where: ShortUrlWhereUniqueInput
    /**
     * In case the ShortUrl found by the `where` argument doesn't exist, create a new ShortUrl with this data.
     */
    create: XOR<ShortUrlCreateInput, ShortUrlUncheckedCreateInput>
    /**
     * In case the ShortUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortUrlUpdateInput, ShortUrlUncheckedUpdateInput>
  }

  /**
   * ShortUrl delete
   */
  export type ShortUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    /**
     * Filter which ShortUrl to delete.
     */
    where: ShortUrlWhereUniqueInput
  }

  /**
   * ShortUrl deleteMany
   */
  export type ShortUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortUrls to delete
     */
    where?: ShortUrlWhereInput
    /**
     * Limit how many ShortUrls to delete.
     */
    limit?: number
  }

  /**
   * ShortUrl findRaw
   */
  export type ShortUrlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ShortUrl aggregateRaw
   */
  export type ShortUrlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ShortUrl.visits
   */
  export type ShortUrl$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    where?: VisitLogWhereInput
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    cursor?: VisitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * ShortUrl.dailyStats
   */
  export type ShortUrl$dailyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStat
     */
    select?: DailyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStat
     */
    omit?: DailyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatInclude<ExtArgs> | null
    where?: DailyStatWhereInput
    orderBy?: DailyStatOrderByWithRelationInput | DailyStatOrderByWithRelationInput[]
    cursor?: DailyStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyStatScalarFieldEnum | DailyStatScalarFieldEnum[]
  }

  /**
   * ShortUrl.browserStats
   */
  export type ShortUrl$browserStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrowserStat
     */
    select?: BrowserStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrowserStat
     */
    omit?: BrowserStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrowserStatInclude<ExtArgs> | null
    where?: BrowserStatWhereInput
    orderBy?: BrowserStatOrderByWithRelationInput | BrowserStatOrderByWithRelationInput[]
    cursor?: BrowserStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrowserStatScalarFieldEnum | BrowserStatScalarFieldEnum[]
  }

  /**
   * ShortUrl.deviceOsStats
   */
  export type ShortUrl$deviceOsStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceOsStat
     */
    select?: DeviceOsStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceOsStat
     */
    omit?: DeviceOsStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceOsStatInclude<ExtArgs> | null
    where?: DeviceOsStatWhereInput
    orderBy?: DeviceOsStatOrderByWithRelationInput | DeviceOsStatOrderByWithRelationInput[]
    cursor?: DeviceOsStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceOsStatScalarFieldEnum | DeviceOsStatScalarFieldEnum[]
  }

  /**
   * ShortUrl.hourlyStats
   */
  export type ShortUrl$hourlyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyStat
     */
    select?: HourlyStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyStat
     */
    omit?: HourlyStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyStatInclude<ExtArgs> | null
    where?: HourlyStatWhereInput
    orderBy?: HourlyStatOrderByWithRelationInput | HourlyStatOrderByWithRelationInput[]
    cursor?: HourlyStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HourlyStatScalarFieldEnum | HourlyStatScalarFieldEnum[]
  }

  /**
   * ShortUrl without action
   */
  export type ShortUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hashedId: string | null
    email: string | null
    salt: string | null
    hashedPassword: string | null
    isAdmin: boolean | null
    isAnonymous: boolean | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hashedId: string | null
    email: string | null
    salt: string | null
    hashedPassword: string | null
    isAdmin: boolean | null
    isAnonymous: boolean | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    hashedId: number
    email: number
    salt: number
    hashedPassword: number
    isAdmin: number
    isAnonymous: number
    isActive: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hashedId?: true
    email?: true
    salt?: true
    hashedPassword?: true
    isAdmin?: true
    isAnonymous?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hashedId?: true
    email?: true
    salt?: true
    hashedPassword?: true
    isAdmin?: true
    isAnonymous?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hashedId?: true
    email?: true
    salt?: true
    hashedPassword?: true
    isAdmin?: true
    isAnonymous?: true
    isActive?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    hashedId: string
    email: string | null
    salt: string
    hashedPassword: string | null
    isAdmin: boolean
    isAnonymous: boolean
    isActive: boolean
    _count: UserCountAggregateOutputType | null
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
    createdAt?: boolean
    updatedAt?: boolean
    hashedId?: boolean
    email?: boolean
    salt?: boolean
    hashedPassword?: boolean
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    shortUrls?: boolean | User$shortUrlsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hashedId?: boolean
    email?: boolean
    salt?: boolean
    hashedPassword?: boolean
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "hashedId" | "email" | "salt" | "hashedPassword" | "isAdmin" | "isAnonymous" | "isActive", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    shortUrls?: boolean | User$shortUrlsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
      shortUrls: Prisma.$ShortUrlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      hashedId: string
      email: string | null
      salt: string
      hashedPassword: string | null
      isAdmin: boolean
      isAnonymous: boolean
      isActive: boolean
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetTokens<T extends User$passwordResetTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shortUrls<T extends User$shortUrlsArgs<ExtArgs> = {}>(args?: Subset<T, User$shortUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly hashedId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly isAnonymous: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.passwordResetTokens
   */
  export type User$passwordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User.shortUrls
   */
  export type User$shortUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortUrl
     */
    select?: ShortUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortUrl
     */
    omit?: ShortUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortUrlInclude<ExtArgs> | null
    where?: ShortUrlWhereInput
    orderBy?: ShortUrlOrderByWithRelationInput | ShortUrlOrderByWithRelationInput[]
    cursor?: ShortUrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShortUrlScalarFieldEnum | ShortUrlScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VisitLog
   */

  export type AggregateVisitLog = {
    _count: VisitLogCountAggregateOutputType | null
    _min: VisitLogMinAggregateOutputType | null
    _max: VisitLogMaxAggregateOutputType | null
  }

  export type VisitLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    shortUrlId: string | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
  }

  export type VisitLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    shortUrlId: string | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
  }

  export type VisitLogCountAggregateOutputType = {
    id: number
    createdAt: number
    shortUrlId: number
    ipAddress: number
    userAgent: number
    referrer: number
    _all: number
  }


  export type VisitLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    shortUrlId?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
  }

  export type VisitLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    shortUrlId?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
  }

  export type VisitLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    shortUrlId?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
    _all?: true
  }

  export type VisitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitLog to aggregate.
     */
    where?: VisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitLogs to fetch.
     */
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitLogs
    **/
    _count?: true | VisitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitLogMaxAggregateInputType
  }

  export type GetVisitLogAggregateType<T extends VisitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitLog[P]>
      : GetScalarType<T[P], AggregateVisitLog[P]>
  }




  export type VisitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitLogWhereInput
    orderBy?: VisitLogOrderByWithAggregationInput | VisitLogOrderByWithAggregationInput[]
    by: VisitLogScalarFieldEnum[] | VisitLogScalarFieldEnum
    having?: VisitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitLogCountAggregateInputType | true
    _min?: VisitLogMinAggregateInputType
    _max?: VisitLogMaxAggregateInputType
  }

  export type VisitLogGroupByOutputType = {
    id: string
    createdAt: Date
    shortUrlId: string
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
    _count: VisitLogCountAggregateOutputType | null
    _min: VisitLogMinAggregateOutputType | null
    _max: VisitLogMaxAggregateOutputType | null
  }

  type GetVisitLogGroupByPayload<T extends VisitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitLogGroupByOutputType[P]>
            : GetScalarType<T[P], VisitLogGroupByOutputType[P]>
        }
      >
    >


  export type VisitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    shortUrlId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitLog"]>



  export type VisitLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    shortUrlId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
  }

  export type VisitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "shortUrlId" | "ipAddress" | "userAgent" | "referrer", ExtArgs["result"]["visitLog"]>
  export type VisitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrl?: boolean | ShortUrlDefaultArgs<ExtArgs>
  }

  export type $VisitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitLog"
    objects: {
      shortUrl: Prisma.$ShortUrlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      shortUrlId: string
      ipAddress: string | null
      userAgent: string | null
      referrer: string | null
    }, ExtArgs["result"]["visitLog"]>
    composites: {}
  }

  type VisitLogGetPayload<S extends boolean | null | undefined | VisitLogDefaultArgs> = $Result.GetResult<Prisma.$VisitLogPayload, S>

  type VisitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitLogCountAggregateInputType | true
    }

  export interface VisitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitLog'], meta: { name: 'VisitLog' } }
    /**
     * Find zero or one VisitLog that matches the filter.
     * @param {VisitLogFindUniqueArgs} args - Arguments to find a VisitLog
     * @example
     * // Get one VisitLog
     * const visitLog = await prisma.visitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitLogFindUniqueArgs>(args: SelectSubset<T, VisitLogFindUniqueArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitLogFindUniqueOrThrowArgs} args - Arguments to find a VisitLog
     * @example
     * // Get one VisitLog
     * const visitLog = await prisma.visitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogFindFirstArgs} args - Arguments to find a VisitLog
     * @example
     * // Get one VisitLog
     * const visitLog = await prisma.visitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitLogFindFirstArgs>(args?: SelectSubset<T, VisitLogFindFirstArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogFindFirstOrThrowArgs} args - Arguments to find a VisitLog
     * @example
     * // Get one VisitLog
     * const visitLog = await prisma.visitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitLogs
     * const visitLogs = await prisma.visitLog.findMany()
     * 
     * // Get first 10 VisitLogs
     * const visitLogs = await prisma.visitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitLogWithIdOnly = await prisma.visitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitLogFindManyArgs>(args?: SelectSubset<T, VisitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitLog.
     * @param {VisitLogCreateArgs} args - Arguments to create a VisitLog.
     * @example
     * // Create one VisitLog
     * const VisitLog = await prisma.visitLog.create({
     *   data: {
     *     // ... data to create a VisitLog
     *   }
     * })
     * 
     */
    create<T extends VisitLogCreateArgs>(args: SelectSubset<T, VisitLogCreateArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitLogs.
     * @param {VisitLogCreateManyArgs} args - Arguments to create many VisitLogs.
     * @example
     * // Create many VisitLogs
     * const visitLog = await prisma.visitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitLogCreateManyArgs>(args?: SelectSubset<T, VisitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VisitLog.
     * @param {VisitLogDeleteArgs} args - Arguments to delete one VisitLog.
     * @example
     * // Delete one VisitLog
     * const VisitLog = await prisma.visitLog.delete({
     *   where: {
     *     // ... filter to delete one VisitLog
     *   }
     * })
     * 
     */
    delete<T extends VisitLogDeleteArgs>(args: SelectSubset<T, VisitLogDeleteArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitLog.
     * @param {VisitLogUpdateArgs} args - Arguments to update one VisitLog.
     * @example
     * // Update one VisitLog
     * const visitLog = await prisma.visitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitLogUpdateArgs>(args: SelectSubset<T, VisitLogUpdateArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitLogs.
     * @param {VisitLogDeleteManyArgs} args - Arguments to filter VisitLogs to delete.
     * @example
     * // Delete a few VisitLogs
     * const { count } = await prisma.visitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitLogDeleteManyArgs>(args?: SelectSubset<T, VisitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitLogs
     * const visitLog = await prisma.visitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitLogUpdateManyArgs>(args: SelectSubset<T, VisitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VisitLog.
     * @param {VisitLogUpsertArgs} args - Arguments to update or create a VisitLog.
     * @example
     * // Update or create a VisitLog
     * const visitLog = await prisma.visitLog.upsert({
     *   create: {
     *     // ... data to create a VisitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitLog we want to update
     *   }
     * })
     */
    upsert<T extends VisitLogUpsertArgs>(args: SelectSubset<T, VisitLogUpsertArgs<ExtArgs>>): Prisma__VisitLogClient<$Result.GetResult<Prisma.$VisitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitLogs that matches the filter.
     * @param {VisitLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const visitLog = await prisma.visitLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VisitLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VisitLog.
     * @param {VisitLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const visitLog = await prisma.visitLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VisitLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VisitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogCountArgs} args - Arguments to filter VisitLogs to count.
     * @example
     * // Count the number of VisitLogs
     * const count = await prisma.visitLog.count({
     *   where: {
     *     // ... the filter for the VisitLogs we want to count
     *   }
     * })
    **/
    count<T extends VisitLogCountArgs>(
      args?: Subset<T, VisitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitLogAggregateArgs>(args: Subset<T, VisitLogAggregateArgs>): Prisma.PrismaPromise<GetVisitLogAggregateType<T>>

    /**
     * Group by VisitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitLogGroupByArgs} args - Group by arguments.
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
      T extends VisitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitLogGroupByArgs['orderBy'] }
        : { orderBy?: VisitLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitLog model
   */
  readonly fields: VisitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shortUrl<T extends ShortUrlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShortUrlDefaultArgs<ExtArgs>>): Prisma__ShortUrlClient<$Result.GetResult<Prisma.$ShortUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VisitLog model
   */
  interface VisitLogFieldRefs {
    readonly id: FieldRef<"VisitLog", 'String'>
    readonly createdAt: FieldRef<"VisitLog", 'DateTime'>
    readonly shortUrlId: FieldRef<"VisitLog", 'String'>
    readonly ipAddress: FieldRef<"VisitLog", 'String'>
    readonly userAgent: FieldRef<"VisitLog", 'String'>
    readonly referrer: FieldRef<"VisitLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VisitLog findUnique
   */
  export type VisitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLog to fetch.
     */
    where: VisitLogWhereUniqueInput
  }

  /**
   * VisitLog findUniqueOrThrow
   */
  export type VisitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLog to fetch.
     */
    where: VisitLogWhereUniqueInput
  }

  /**
   * VisitLog findFirst
   */
  export type VisitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLog to fetch.
     */
    where?: VisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitLogs to fetch.
     */
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitLogs.
     */
    cursor?: VisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitLogs.
     */
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * VisitLog findFirstOrThrow
   */
  export type VisitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLog to fetch.
     */
    where?: VisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitLogs to fetch.
     */
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitLogs.
     */
    cursor?: VisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitLogs.
     */
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * VisitLog findMany
   */
  export type VisitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitLogs to fetch.
     */
    where?: VisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitLogs to fetch.
     */
    orderBy?: VisitLogOrderByWithRelationInput | VisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitLogs.
     */
    cursor?: VisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitLogs.
     */
    skip?: number
    distinct?: VisitLogScalarFieldEnum | VisitLogScalarFieldEnum[]
  }

  /**
   * VisitLog create
   */
  export type VisitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a VisitLog.
     */
    data: XOR<VisitLogCreateInput, VisitLogUncheckedCreateInput>
  }

  /**
   * VisitLog createMany
   */
  export type VisitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitLogs.
     */
    data: VisitLogCreateManyInput | VisitLogCreateManyInput[]
  }

  /**
   * VisitLog update
   */
  export type VisitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a VisitLog.
     */
    data: XOR<VisitLogUpdateInput, VisitLogUncheckedUpdateInput>
    /**
     * Choose, which VisitLog to update.
     */
    where: VisitLogWhereUniqueInput
  }

  /**
   * VisitLog updateMany
   */
  export type VisitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitLogs.
     */
    data: XOR<VisitLogUpdateManyMutationInput, VisitLogUncheckedUpdateManyInput>
    /**
     * Filter which VisitLogs to update
     */
    where?: VisitLogWhereInput
    /**
     * Limit how many VisitLogs to update.
     */
    limit?: number
  }

  /**
   * VisitLog upsert
   */
  export type VisitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the VisitLog to update in case it exists.
     */
    where: VisitLogWhereUniqueInput
    /**
     * In case the VisitLog found by the `where` argument doesn't exist, create a new VisitLog with this data.
     */
    create: XOR<VisitLogCreateInput, VisitLogUncheckedCreateInput>
    /**
     * In case the VisitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitLogUpdateInput, VisitLogUncheckedUpdateInput>
  }

  /**
   * VisitLog delete
   */
  export type VisitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
    /**
     * Filter which VisitLog to delete.
     */
    where: VisitLogWhereUniqueInput
  }

  /**
   * VisitLog deleteMany
   */
  export type VisitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitLogs to delete
     */
    where?: VisitLogWhereInput
    /**
     * Limit how many VisitLogs to delete.
     */
    limit?: number
  }

  /**
   * VisitLog findRaw
   */
  export type VisitLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VisitLog aggregateRaw
   */
  export type VisitLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VisitLog without action
   */
  export type VisitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitLog
     */
    select?: VisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitLog
     */
    omit?: VisitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const BrowserStatScalarFieldEnum: {
    id: 'id',
    browser: 'browser',
    count: 'count',
    shortUrlId: 'shortUrlId'
  };

  export type BrowserStatScalarFieldEnum = (typeof BrowserStatScalarFieldEnum)[keyof typeof BrowserStatScalarFieldEnum]


  export const DailyStatScalarFieldEnum: {
    id: 'id',
    date: 'date',
    count: 'count',
    shortUrlId: 'shortUrlId'
  };

  export type DailyStatScalarFieldEnum = (typeof DailyStatScalarFieldEnum)[keyof typeof DailyStatScalarFieldEnum]


  export const DeviceOsStatScalarFieldEnum: {
    id: 'id',
    device: 'device',
    os: 'os',
    count: 'count',
    shortUrlId: 'shortUrlId'
  };

  export type DeviceOsStatScalarFieldEnum = (typeof DeviceOsStatScalarFieldEnum)[keyof typeof DeviceOsStatScalarFieldEnum]


  export const HourlyStatScalarFieldEnum: {
    id: 'id',
    hour: 'hour',
    count: 'count',
    shortUrlId: 'shortUrlId'
  };

  export type HourlyStatScalarFieldEnum = (typeof HourlyStatScalarFieldEnum)[keyof typeof HourlyStatScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    token: 'token',
    email: 'email',
    userId: 'userId',
    used: 'used'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    token: 'token',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ShortUrlScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    shortCode: 'shortCode',
    originalUrl: 'originalUrl',
    clicks: 'clicks',
    userId: 'userId'
  };

  export type ShortUrlScalarFieldEnum = (typeof ShortUrlScalarFieldEnum)[keyof typeof ShortUrlScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hashedId: 'hashedId',
    email: 'email',
    salt: 'salt',
    hashedPassword: 'hashedPassword',
    isAdmin: 'isAdmin',
    isAnonymous: 'isAnonymous',
    isActive: 'isActive'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VisitLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    shortUrlId: 'shortUrlId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    referrer: 'referrer'
  };

  export type VisitLogScalarFieldEnum = (typeof VisitLogScalarFieldEnum)[keyof typeof VisitLogScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type BrowserStatWhereInput = {
    AND?: BrowserStatWhereInput | BrowserStatWhereInput[]
    OR?: BrowserStatWhereInput[]
    NOT?: BrowserStatWhereInput | BrowserStatWhereInput[]
    id?: StringFilter<"BrowserStat"> | string
    browser?: StringFilter<"BrowserStat"> | string
    count?: IntFilter<"BrowserStat"> | number
    shortUrlId?: StringFilter<"BrowserStat"> | string
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }

  export type BrowserStatOrderByWithRelationInput = {
    id?: SortOrder
    browser?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
    shortUrl?: ShortUrlOrderByWithRelationInput
  }

  export type BrowserStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortUrlId_browser?: BrowserStatShortUrlIdBrowserCompoundUniqueInput
    AND?: BrowserStatWhereInput | BrowserStatWhereInput[]
    OR?: BrowserStatWhereInput[]
    NOT?: BrowserStatWhereInput | BrowserStatWhereInput[]
    browser?: StringFilter<"BrowserStat"> | string
    count?: IntFilter<"BrowserStat"> | number
    shortUrlId?: StringFilter<"BrowserStat"> | string
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }, "id" | "shortUrlId_browser">

  export type BrowserStatOrderByWithAggregationInput = {
    id?: SortOrder
    browser?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
    _count?: BrowserStatCountOrderByAggregateInput
    _avg?: BrowserStatAvgOrderByAggregateInput
    _max?: BrowserStatMaxOrderByAggregateInput
    _min?: BrowserStatMinOrderByAggregateInput
    _sum?: BrowserStatSumOrderByAggregateInput
  }

  export type BrowserStatScalarWhereWithAggregatesInput = {
    AND?: BrowserStatScalarWhereWithAggregatesInput | BrowserStatScalarWhereWithAggregatesInput[]
    OR?: BrowserStatScalarWhereWithAggregatesInput[]
    NOT?: BrowserStatScalarWhereWithAggregatesInput | BrowserStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BrowserStat"> | string
    browser?: StringWithAggregatesFilter<"BrowserStat"> | string
    count?: IntWithAggregatesFilter<"BrowserStat"> | number
    shortUrlId?: StringWithAggregatesFilter<"BrowserStat"> | string
  }

  export type DailyStatWhereInput = {
    AND?: DailyStatWhereInput | DailyStatWhereInput[]
    OR?: DailyStatWhereInput[]
    NOT?: DailyStatWhereInput | DailyStatWhereInput[]
    id?: StringFilter<"DailyStat"> | string
    date?: DateTimeFilter<"DailyStat"> | Date | string
    count?: IntFilter<"DailyStat"> | number
    shortUrlId?: StringFilter<"DailyStat"> | string
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }

  export type DailyStatOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
    shortUrl?: ShortUrlOrderByWithRelationInput
  }

  export type DailyStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortUrlId_date?: DailyStatShortUrlIdDateCompoundUniqueInput
    AND?: DailyStatWhereInput | DailyStatWhereInput[]
    OR?: DailyStatWhereInput[]
    NOT?: DailyStatWhereInput | DailyStatWhereInput[]
    date?: DateTimeFilter<"DailyStat"> | Date | string
    count?: IntFilter<"DailyStat"> | number
    shortUrlId?: StringFilter<"DailyStat"> | string
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }, "id" | "shortUrlId_date">

  export type DailyStatOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
    _count?: DailyStatCountOrderByAggregateInput
    _avg?: DailyStatAvgOrderByAggregateInput
    _max?: DailyStatMaxOrderByAggregateInput
    _min?: DailyStatMinOrderByAggregateInput
    _sum?: DailyStatSumOrderByAggregateInput
  }

  export type DailyStatScalarWhereWithAggregatesInput = {
    AND?: DailyStatScalarWhereWithAggregatesInput | DailyStatScalarWhereWithAggregatesInput[]
    OR?: DailyStatScalarWhereWithAggregatesInput[]
    NOT?: DailyStatScalarWhereWithAggregatesInput | DailyStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyStat"> | string
    date?: DateTimeWithAggregatesFilter<"DailyStat"> | Date | string
    count?: IntWithAggregatesFilter<"DailyStat"> | number
    shortUrlId?: StringWithAggregatesFilter<"DailyStat"> | string
  }

  export type DeviceOsStatWhereInput = {
    AND?: DeviceOsStatWhereInput | DeviceOsStatWhereInput[]
    OR?: DeviceOsStatWhereInput[]
    NOT?: DeviceOsStatWhereInput | DeviceOsStatWhereInput[]
    id?: StringFilter<"DeviceOsStat"> | string
    device?: StringFilter<"DeviceOsStat"> | string
    os?: StringFilter<"DeviceOsStat"> | string
    count?: IntFilter<"DeviceOsStat"> | number
    shortUrlId?: StringFilter<"DeviceOsStat"> | string
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }

  export type DeviceOsStatOrderByWithRelationInput = {
    id?: SortOrder
    device?: SortOrder
    os?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
    shortUrl?: ShortUrlOrderByWithRelationInput
  }

  export type DeviceOsStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortUrlId_device_os?: DeviceOsStatShortUrlIdDeviceOsCompoundUniqueInput
    AND?: DeviceOsStatWhereInput | DeviceOsStatWhereInput[]
    OR?: DeviceOsStatWhereInput[]
    NOT?: DeviceOsStatWhereInput | DeviceOsStatWhereInput[]
    device?: StringFilter<"DeviceOsStat"> | string
    os?: StringFilter<"DeviceOsStat"> | string
    count?: IntFilter<"DeviceOsStat"> | number
    shortUrlId?: StringFilter<"DeviceOsStat"> | string
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }, "id" | "shortUrlId_device_os">

  export type DeviceOsStatOrderByWithAggregationInput = {
    id?: SortOrder
    device?: SortOrder
    os?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
    _count?: DeviceOsStatCountOrderByAggregateInput
    _avg?: DeviceOsStatAvgOrderByAggregateInput
    _max?: DeviceOsStatMaxOrderByAggregateInput
    _min?: DeviceOsStatMinOrderByAggregateInput
    _sum?: DeviceOsStatSumOrderByAggregateInput
  }

  export type DeviceOsStatScalarWhereWithAggregatesInput = {
    AND?: DeviceOsStatScalarWhereWithAggregatesInput | DeviceOsStatScalarWhereWithAggregatesInput[]
    OR?: DeviceOsStatScalarWhereWithAggregatesInput[]
    NOT?: DeviceOsStatScalarWhereWithAggregatesInput | DeviceOsStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceOsStat"> | string
    device?: StringWithAggregatesFilter<"DeviceOsStat"> | string
    os?: StringWithAggregatesFilter<"DeviceOsStat"> | string
    count?: IntWithAggregatesFilter<"DeviceOsStat"> | number
    shortUrlId?: StringWithAggregatesFilter<"DeviceOsStat"> | string
  }

  export type HourlyStatWhereInput = {
    AND?: HourlyStatWhereInput | HourlyStatWhereInput[]
    OR?: HourlyStatWhereInput[]
    NOT?: HourlyStatWhereInput | HourlyStatWhereInput[]
    id?: StringFilter<"HourlyStat"> | string
    hour?: IntFilter<"HourlyStat"> | number
    count?: IntFilter<"HourlyStat"> | number
    shortUrlId?: StringFilter<"HourlyStat"> | string
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }

  export type HourlyStatOrderByWithRelationInput = {
    id?: SortOrder
    hour?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
    shortUrl?: ShortUrlOrderByWithRelationInput
  }

  export type HourlyStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortUrlId_hour?: HourlyStatShortUrlIdHourCompoundUniqueInput
    AND?: HourlyStatWhereInput | HourlyStatWhereInput[]
    OR?: HourlyStatWhereInput[]
    NOT?: HourlyStatWhereInput | HourlyStatWhereInput[]
    hour?: IntFilter<"HourlyStat"> | number
    count?: IntFilter<"HourlyStat"> | number
    shortUrlId?: StringFilter<"HourlyStat"> | string
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }, "id" | "shortUrlId_hour">

  export type HourlyStatOrderByWithAggregationInput = {
    id?: SortOrder
    hour?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
    _count?: HourlyStatCountOrderByAggregateInput
    _avg?: HourlyStatAvgOrderByAggregateInput
    _max?: HourlyStatMaxOrderByAggregateInput
    _min?: HourlyStatMinOrderByAggregateInput
    _sum?: HourlyStatSumOrderByAggregateInput
  }

  export type HourlyStatScalarWhereWithAggregatesInput = {
    AND?: HourlyStatScalarWhereWithAggregatesInput | HourlyStatScalarWhereWithAggregatesInput[]
    OR?: HourlyStatScalarWhereWithAggregatesInput[]
    NOT?: HourlyStatScalarWhereWithAggregatesInput | HourlyStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HourlyStat"> | string
    hour?: IntWithAggregatesFilter<"HourlyStat"> | number
    count?: IntWithAggregatesFilter<"HourlyStat"> | number
    shortUrlId?: StringWithAggregatesFilter<"HourlyStat"> | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    token?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    used?: BoolFilter<"PasswordResetToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    used?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    email?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    used?: BoolFilter<"PasswordResetToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    used?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    userId?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    used?: BoolWithAggregatesFilter<"PasswordResetToken"> | boolean
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    userId?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type ShortUrlWhereInput = {
    AND?: ShortUrlWhereInput | ShortUrlWhereInput[]
    OR?: ShortUrlWhereInput[]
    NOT?: ShortUrlWhereInput | ShortUrlWhereInput[]
    id?: StringFilter<"ShortUrl"> | string
    createdAt?: DateTimeFilter<"ShortUrl"> | Date | string
    shortCode?: StringFilter<"ShortUrl"> | string
    originalUrl?: StringFilter<"ShortUrl"> | string
    clicks?: IntFilter<"ShortUrl"> | number
    userId?: StringFilter<"ShortUrl"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    visits?: VisitLogListRelationFilter
    dailyStats?: DailyStatListRelationFilter
    browserStats?: BrowserStatListRelationFilter
    deviceOsStats?: DeviceOsStatListRelationFilter
    hourlyStats?: HourlyStatListRelationFilter
  }

  export type ShortUrlOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortCode?: SortOrder
    originalUrl?: SortOrder
    clicks?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    visits?: VisitLogOrderByRelationAggregateInput
    dailyStats?: DailyStatOrderByRelationAggregateInput
    browserStats?: BrowserStatOrderByRelationAggregateInput
    deviceOsStats?: DeviceOsStatOrderByRelationAggregateInput
    hourlyStats?: HourlyStatOrderByRelationAggregateInput
  }

  export type ShortUrlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortCode?: string
    AND?: ShortUrlWhereInput | ShortUrlWhereInput[]
    OR?: ShortUrlWhereInput[]
    NOT?: ShortUrlWhereInput | ShortUrlWhereInput[]
    createdAt?: DateTimeFilter<"ShortUrl"> | Date | string
    originalUrl?: StringFilter<"ShortUrl"> | string
    clicks?: IntFilter<"ShortUrl"> | number
    userId?: StringFilter<"ShortUrl"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    visits?: VisitLogListRelationFilter
    dailyStats?: DailyStatListRelationFilter
    browserStats?: BrowserStatListRelationFilter
    deviceOsStats?: DeviceOsStatListRelationFilter
    hourlyStats?: HourlyStatListRelationFilter
  }, "id" | "shortCode">

  export type ShortUrlOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortCode?: SortOrder
    originalUrl?: SortOrder
    clicks?: SortOrder
    userId?: SortOrder
    _count?: ShortUrlCountOrderByAggregateInput
    _avg?: ShortUrlAvgOrderByAggregateInput
    _max?: ShortUrlMaxOrderByAggregateInput
    _min?: ShortUrlMinOrderByAggregateInput
    _sum?: ShortUrlSumOrderByAggregateInput
  }

  export type ShortUrlScalarWhereWithAggregatesInput = {
    AND?: ShortUrlScalarWhereWithAggregatesInput | ShortUrlScalarWhereWithAggregatesInput[]
    OR?: ShortUrlScalarWhereWithAggregatesInput[]
    NOT?: ShortUrlScalarWhereWithAggregatesInput | ShortUrlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShortUrl"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShortUrl"> | Date | string
    shortCode?: StringWithAggregatesFilter<"ShortUrl"> | string
    originalUrl?: StringWithAggregatesFilter<"ShortUrl"> | string
    clicks?: IntWithAggregatesFilter<"ShortUrl"> | number
    userId?: StringWithAggregatesFilter<"ShortUrl"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hashedId?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    salt?: StringFilter<"User"> | string
    hashedPassword?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    isAnonymous?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    sessions?: SessionListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
    shortUrls?: ShortUrlListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedId?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hashedPassword?: SortOrder
    isAdmin?: SortOrder
    isAnonymous?: SortOrder
    isActive?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput
    shortUrls?: ShortUrlOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hashedId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    salt?: StringFilter<"User"> | string
    hashedPassword?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    isAnonymous?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    sessions?: SessionListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
    shortUrls?: ShortUrlListRelationFilter
  }, "id" | "hashedId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedId?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hashedPassword?: SortOrder
    isAdmin?: SortOrder
    isAnonymous?: SortOrder
    isActive?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    hashedId?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    salt?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    isAnonymous?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type VisitLogWhereInput = {
    AND?: VisitLogWhereInput | VisitLogWhereInput[]
    OR?: VisitLogWhereInput[]
    NOT?: VisitLogWhereInput | VisitLogWhereInput[]
    id?: StringFilter<"VisitLog"> | string
    createdAt?: DateTimeFilter<"VisitLog"> | Date | string
    shortUrlId?: StringFilter<"VisitLog"> | string
    ipAddress?: StringNullableFilter<"VisitLog"> | string | null
    userAgent?: StringNullableFilter<"VisitLog"> | string | null
    referrer?: StringNullableFilter<"VisitLog"> | string | null
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }

  export type VisitLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortUrlId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    shortUrl?: ShortUrlOrderByWithRelationInput
  }

  export type VisitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisitLogWhereInput | VisitLogWhereInput[]
    OR?: VisitLogWhereInput[]
    NOT?: VisitLogWhereInput | VisitLogWhereInput[]
    createdAt?: DateTimeFilter<"VisitLog"> | Date | string
    shortUrlId?: StringFilter<"VisitLog"> | string
    ipAddress?: StringNullableFilter<"VisitLog"> | string | null
    userAgent?: StringNullableFilter<"VisitLog"> | string | null
    referrer?: StringNullableFilter<"VisitLog"> | string | null
    shortUrl?: XOR<ShortUrlScalarRelationFilter, ShortUrlWhereInput>
  }, "id">

  export type VisitLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortUrlId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    _count?: VisitLogCountOrderByAggregateInput
    _max?: VisitLogMaxOrderByAggregateInput
    _min?: VisitLogMinOrderByAggregateInput
  }

  export type VisitLogScalarWhereWithAggregatesInput = {
    AND?: VisitLogScalarWhereWithAggregatesInput | VisitLogScalarWhereWithAggregatesInput[]
    OR?: VisitLogScalarWhereWithAggregatesInput[]
    NOT?: VisitLogScalarWhereWithAggregatesInput | VisitLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VisitLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VisitLog"> | Date | string
    shortUrlId?: StringWithAggregatesFilter<"VisitLog"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"VisitLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"VisitLog"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"VisitLog"> | string | null
  }

  export type BrowserStatCreateInput = {
    id?: string
    browser: string
    count?: number
    shortUrl: ShortUrlCreateNestedOneWithoutBrowserStatsInput
  }

  export type BrowserStatUncheckedCreateInput = {
    id?: string
    browser: string
    count?: number
    shortUrlId: string
  }

  export type BrowserStatUpdateInput = {
    browser?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrl?: ShortUrlUpdateOneRequiredWithoutBrowserStatsNestedInput
  }

  export type BrowserStatUncheckedUpdateInput = {
    browser?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrlId?: StringFieldUpdateOperationsInput | string
  }

  export type BrowserStatCreateManyInput = {
    id?: string
    browser: string
    count?: number
    shortUrlId: string
  }

  export type BrowserStatUpdateManyMutationInput = {
    browser?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type BrowserStatUncheckedUpdateManyInput = {
    browser?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrlId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyStatCreateInput = {
    id?: string
    date: Date | string
    count?: number
    shortUrl: ShortUrlCreateNestedOneWithoutDailyStatsInput
  }

  export type DailyStatUncheckedCreateInput = {
    id?: string
    date: Date | string
    count?: number
    shortUrlId: string
  }

  export type DailyStatUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrl?: ShortUrlUpdateOneRequiredWithoutDailyStatsNestedInput
  }

  export type DailyStatUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrlId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyStatCreateManyInput = {
    id?: string
    date: Date | string
    count?: number
    shortUrlId: string
  }

  export type DailyStatUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DailyStatUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrlId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceOsStatCreateInput = {
    id?: string
    device: string
    os: string
    count?: number
    shortUrl: ShortUrlCreateNestedOneWithoutDeviceOsStatsInput
  }

  export type DeviceOsStatUncheckedCreateInput = {
    id?: string
    device: string
    os: string
    count?: number
    shortUrlId: string
  }

  export type DeviceOsStatUpdateInput = {
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrl?: ShortUrlUpdateOneRequiredWithoutDeviceOsStatsNestedInput
  }

  export type DeviceOsStatUncheckedUpdateInput = {
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrlId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceOsStatCreateManyInput = {
    id?: string
    device: string
    os: string
    count?: number
    shortUrlId: string
  }

  export type DeviceOsStatUpdateManyMutationInput = {
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceOsStatUncheckedUpdateManyInput = {
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    shortUrlId?: StringFieldUpdateOperationsInput | string
  }

  export type HourlyStatCreateInput = {
    id?: string
    hour: number
    count?: number
    shortUrl: ShortUrlCreateNestedOneWithoutHourlyStatsInput
  }

  export type HourlyStatUncheckedCreateInput = {
    id?: string
    hour: number
    count?: number
    shortUrlId: string
  }

  export type HourlyStatUpdateInput = {
    hour?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    shortUrl?: ShortUrlUpdateOneRequiredWithoutHourlyStatsNestedInput
  }

  export type HourlyStatUncheckedUpdateInput = {
    hour?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    shortUrlId?: StringFieldUpdateOperationsInput | string
  }

  export type HourlyStatCreateManyInput = {
    id?: string
    hour: number
    count?: number
    shortUrlId: string
  }

  export type HourlyStatUpdateManyMutationInput = {
    hour?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type HourlyStatUncheckedUpdateManyInput = {
    hour?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    shortUrlId?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    token: string
    email: string
    used?: boolean
    user: UserCreateNestedOneWithoutPasswordResetTokensInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    token: string
    email: string
    userId: string
    used?: boolean
  }

  export type PasswordResetTokenUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    token: string
    email: string
    userId: string
    used?: boolean
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    token: string
    userId: string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    token: string
    userId: string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShortUrlCreateInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    user: UserCreateNestedOneWithoutShortUrlsInput
    visits?: VisitLogCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    userId: string
    visits?: VisitLogUncheckedCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatUncheckedCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatUncheckedCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatUncheckedCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutShortUrlsNestedInput
    visits?: VisitLogUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    visits?: VisitLogUncheckedUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUncheckedUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUncheckedUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUncheckedUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlCreateManyInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    userId: string
  }

  export type ShortUrlUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type ShortUrlUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    shortUrls?: ShortUrlCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    shortUrls?: ShortUrlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    shortUrls?: ShortUrlUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    shortUrls?: ShortUrlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisitLogCreateInput = {
    id?: string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    shortUrl: ShortUrlCreateNestedOneWithoutVisitsInput
  }

  export type VisitLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    shortUrlId: string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
  }

  export type VisitLogUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    shortUrl?: ShortUrlUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitLogUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortUrlId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    shortUrlId: string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
  }

  export type VisitLogUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitLogUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortUrlId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ShortUrlScalarRelationFilter = {
    is?: ShortUrlWhereInput
    isNot?: ShortUrlWhereInput
  }

  export type BrowserStatShortUrlIdBrowserCompoundUniqueInput = {
    shortUrlId: string
    browser: string
  }

  export type BrowserStatCountOrderByAggregateInput = {
    id?: SortOrder
    browser?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type BrowserStatAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type BrowserStatMaxOrderByAggregateInput = {
    id?: SortOrder
    browser?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type BrowserStatMinOrderByAggregateInput = {
    id?: SortOrder
    browser?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type BrowserStatSumOrderByAggregateInput = {
    count?: SortOrder
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

  export type DailyStatShortUrlIdDateCompoundUniqueInput = {
    shortUrlId: string
    date: Date | string
  }

  export type DailyStatCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type DailyStatAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type DailyStatMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type DailyStatMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type DailyStatSumOrderByAggregateInput = {
    count?: SortOrder
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

  export type DeviceOsStatShortUrlIdDeviceOsCompoundUniqueInput = {
    shortUrlId: string
    device: string
    os: string
  }

  export type DeviceOsStatCountOrderByAggregateInput = {
    id?: SortOrder
    device?: SortOrder
    os?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type DeviceOsStatAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type DeviceOsStatMaxOrderByAggregateInput = {
    id?: SortOrder
    device?: SortOrder
    os?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type DeviceOsStatMinOrderByAggregateInput = {
    id?: SortOrder
    device?: SortOrder
    os?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type DeviceOsStatSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type HourlyStatShortUrlIdHourCompoundUniqueInput = {
    shortUrlId: string
    hour: number
  }

  export type HourlyStatCountOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type HourlyStatAvgOrderByAggregateInput = {
    hour?: SortOrder
    count?: SortOrder
  }

  export type HourlyStatMaxOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type HourlyStatMinOrderByAggregateInput = {
    id?: SortOrder
    hour?: SortOrder
    count?: SortOrder
    shortUrlId?: SortOrder
  }

  export type HourlyStatSumOrderByAggregateInput = {
    hour?: SortOrder
    count?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    used?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    used?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    used?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
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
    isSet?: boolean
  }

  export type VisitLogListRelationFilter = {
    every?: VisitLogWhereInput
    some?: VisitLogWhereInput
    none?: VisitLogWhereInput
  }

  export type DailyStatListRelationFilter = {
    every?: DailyStatWhereInput
    some?: DailyStatWhereInput
    none?: DailyStatWhereInput
  }

  export type BrowserStatListRelationFilter = {
    every?: BrowserStatWhereInput
    some?: BrowserStatWhereInput
    none?: BrowserStatWhereInput
  }

  export type DeviceOsStatListRelationFilter = {
    every?: DeviceOsStatWhereInput
    some?: DeviceOsStatWhereInput
    none?: DeviceOsStatWhereInput
  }

  export type HourlyStatListRelationFilter = {
    every?: HourlyStatWhereInput
    some?: HourlyStatWhereInput
    none?: HourlyStatWhereInput
  }

  export type VisitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrowserStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOsStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HourlyStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShortUrlCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortCode?: SortOrder
    originalUrl?: SortOrder
    clicks?: SortOrder
    userId?: SortOrder
  }

  export type ShortUrlAvgOrderByAggregateInput = {
    clicks?: SortOrder
  }

  export type ShortUrlMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortCode?: SortOrder
    originalUrl?: SortOrder
    clicks?: SortOrder
    userId?: SortOrder
  }

  export type ShortUrlMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortCode?: SortOrder
    originalUrl?: SortOrder
    clicks?: SortOrder
    userId?: SortOrder
  }

  export type ShortUrlSumOrderByAggregateInput = {
    clicks?: SortOrder
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type ShortUrlListRelationFilter = {
    every?: ShortUrlWhereInput
    some?: ShortUrlWhereInput
    none?: ShortUrlWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShortUrlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedId?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hashedPassword?: SortOrder
    isAdmin?: SortOrder
    isAnonymous?: SortOrder
    isActive?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedId?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hashedPassword?: SortOrder
    isAdmin?: SortOrder
    isAnonymous?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedId?: SortOrder
    email?: SortOrder
    salt?: SortOrder
    hashedPassword?: SortOrder
    isAdmin?: SortOrder
    isAnonymous?: SortOrder
    isActive?: SortOrder
  }

  export type VisitLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortUrlId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
  }

  export type VisitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortUrlId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
  }

  export type VisitLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shortUrlId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
  }

  export type ShortUrlCreateNestedOneWithoutBrowserStatsInput = {
    create?: XOR<ShortUrlCreateWithoutBrowserStatsInput, ShortUrlUncheckedCreateWithoutBrowserStatsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutBrowserStatsInput
    connect?: ShortUrlWhereUniqueInput
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

  export type ShortUrlUpdateOneRequiredWithoutBrowserStatsNestedInput = {
    create?: XOR<ShortUrlCreateWithoutBrowserStatsInput, ShortUrlUncheckedCreateWithoutBrowserStatsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutBrowserStatsInput
    upsert?: ShortUrlUpsertWithoutBrowserStatsInput
    connect?: ShortUrlWhereUniqueInput
    update?: XOR<XOR<ShortUrlUpdateToOneWithWhereWithoutBrowserStatsInput, ShortUrlUpdateWithoutBrowserStatsInput>, ShortUrlUncheckedUpdateWithoutBrowserStatsInput>
  }

  export type ShortUrlCreateNestedOneWithoutDailyStatsInput = {
    create?: XOR<ShortUrlCreateWithoutDailyStatsInput, ShortUrlUncheckedCreateWithoutDailyStatsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutDailyStatsInput
    connect?: ShortUrlWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShortUrlUpdateOneRequiredWithoutDailyStatsNestedInput = {
    create?: XOR<ShortUrlCreateWithoutDailyStatsInput, ShortUrlUncheckedCreateWithoutDailyStatsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutDailyStatsInput
    upsert?: ShortUrlUpsertWithoutDailyStatsInput
    connect?: ShortUrlWhereUniqueInput
    update?: XOR<XOR<ShortUrlUpdateToOneWithWhereWithoutDailyStatsInput, ShortUrlUpdateWithoutDailyStatsInput>, ShortUrlUncheckedUpdateWithoutDailyStatsInput>
  }

  export type ShortUrlCreateNestedOneWithoutDeviceOsStatsInput = {
    create?: XOR<ShortUrlCreateWithoutDeviceOsStatsInput, ShortUrlUncheckedCreateWithoutDeviceOsStatsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutDeviceOsStatsInput
    connect?: ShortUrlWhereUniqueInput
  }

  export type ShortUrlUpdateOneRequiredWithoutDeviceOsStatsNestedInput = {
    create?: XOR<ShortUrlCreateWithoutDeviceOsStatsInput, ShortUrlUncheckedCreateWithoutDeviceOsStatsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutDeviceOsStatsInput
    upsert?: ShortUrlUpsertWithoutDeviceOsStatsInput
    connect?: ShortUrlWhereUniqueInput
    update?: XOR<XOR<ShortUrlUpdateToOneWithWhereWithoutDeviceOsStatsInput, ShortUrlUpdateWithoutDeviceOsStatsInput>, ShortUrlUncheckedUpdateWithoutDeviceOsStatsInput>
  }

  export type ShortUrlCreateNestedOneWithoutHourlyStatsInput = {
    create?: XOR<ShortUrlCreateWithoutHourlyStatsInput, ShortUrlUncheckedCreateWithoutHourlyStatsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutHourlyStatsInput
    connect?: ShortUrlWhereUniqueInput
  }

  export type ShortUrlUpdateOneRequiredWithoutHourlyStatsNestedInput = {
    create?: XOR<ShortUrlCreateWithoutHourlyStatsInput, ShortUrlUncheckedCreateWithoutHourlyStatsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutHourlyStatsInput
    upsert?: ShortUrlUpsertWithoutHourlyStatsInput
    connect?: ShortUrlWhereUniqueInput
    update?: XOR<XOR<ShortUrlUpdateToOneWithWhereWithoutHourlyStatsInput, ShortUrlUpdateWithoutHourlyStatsInput>, ShortUrlUncheckedUpdateWithoutHourlyStatsInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    upsert?: UserUpsertWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokensInput, UserUpdateWithoutPasswordResetTokensInput>, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutShortUrlsInput = {
    create?: XOR<UserCreateWithoutShortUrlsInput, UserUncheckedCreateWithoutShortUrlsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShortUrlsInput
    connect?: UserWhereUniqueInput
  }

  export type VisitLogCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<VisitLogCreateWithoutShortUrlInput, VisitLogUncheckedCreateWithoutShortUrlInput> | VisitLogCreateWithoutShortUrlInput[] | VisitLogUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutShortUrlInput | VisitLogCreateOrConnectWithoutShortUrlInput[]
    createMany?: VisitLogCreateManyShortUrlInputEnvelope
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
  }

  export type DailyStatCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<DailyStatCreateWithoutShortUrlInput, DailyStatUncheckedCreateWithoutShortUrlInput> | DailyStatCreateWithoutShortUrlInput[] | DailyStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: DailyStatCreateOrConnectWithoutShortUrlInput | DailyStatCreateOrConnectWithoutShortUrlInput[]
    createMany?: DailyStatCreateManyShortUrlInputEnvelope
    connect?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
  }

  export type BrowserStatCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<BrowserStatCreateWithoutShortUrlInput, BrowserStatUncheckedCreateWithoutShortUrlInput> | BrowserStatCreateWithoutShortUrlInput[] | BrowserStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: BrowserStatCreateOrConnectWithoutShortUrlInput | BrowserStatCreateOrConnectWithoutShortUrlInput[]
    createMany?: BrowserStatCreateManyShortUrlInputEnvelope
    connect?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
  }

  export type DeviceOsStatCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<DeviceOsStatCreateWithoutShortUrlInput, DeviceOsStatUncheckedCreateWithoutShortUrlInput> | DeviceOsStatCreateWithoutShortUrlInput[] | DeviceOsStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: DeviceOsStatCreateOrConnectWithoutShortUrlInput | DeviceOsStatCreateOrConnectWithoutShortUrlInput[]
    createMany?: DeviceOsStatCreateManyShortUrlInputEnvelope
    connect?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
  }

  export type HourlyStatCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<HourlyStatCreateWithoutShortUrlInput, HourlyStatUncheckedCreateWithoutShortUrlInput> | HourlyStatCreateWithoutShortUrlInput[] | HourlyStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: HourlyStatCreateOrConnectWithoutShortUrlInput | HourlyStatCreateOrConnectWithoutShortUrlInput[]
    createMany?: HourlyStatCreateManyShortUrlInputEnvelope
    connect?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
  }

  export type VisitLogUncheckedCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<VisitLogCreateWithoutShortUrlInput, VisitLogUncheckedCreateWithoutShortUrlInput> | VisitLogCreateWithoutShortUrlInput[] | VisitLogUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutShortUrlInput | VisitLogCreateOrConnectWithoutShortUrlInput[]
    createMany?: VisitLogCreateManyShortUrlInputEnvelope
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
  }

  export type DailyStatUncheckedCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<DailyStatCreateWithoutShortUrlInput, DailyStatUncheckedCreateWithoutShortUrlInput> | DailyStatCreateWithoutShortUrlInput[] | DailyStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: DailyStatCreateOrConnectWithoutShortUrlInput | DailyStatCreateOrConnectWithoutShortUrlInput[]
    createMany?: DailyStatCreateManyShortUrlInputEnvelope
    connect?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
  }

  export type BrowserStatUncheckedCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<BrowserStatCreateWithoutShortUrlInput, BrowserStatUncheckedCreateWithoutShortUrlInput> | BrowserStatCreateWithoutShortUrlInput[] | BrowserStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: BrowserStatCreateOrConnectWithoutShortUrlInput | BrowserStatCreateOrConnectWithoutShortUrlInput[]
    createMany?: BrowserStatCreateManyShortUrlInputEnvelope
    connect?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
  }

  export type DeviceOsStatUncheckedCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<DeviceOsStatCreateWithoutShortUrlInput, DeviceOsStatUncheckedCreateWithoutShortUrlInput> | DeviceOsStatCreateWithoutShortUrlInput[] | DeviceOsStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: DeviceOsStatCreateOrConnectWithoutShortUrlInput | DeviceOsStatCreateOrConnectWithoutShortUrlInput[]
    createMany?: DeviceOsStatCreateManyShortUrlInputEnvelope
    connect?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
  }

  export type HourlyStatUncheckedCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<HourlyStatCreateWithoutShortUrlInput, HourlyStatUncheckedCreateWithoutShortUrlInput> | HourlyStatCreateWithoutShortUrlInput[] | HourlyStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: HourlyStatCreateOrConnectWithoutShortUrlInput | HourlyStatCreateOrConnectWithoutShortUrlInput[]
    createMany?: HourlyStatCreateManyShortUrlInputEnvelope
    connect?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutShortUrlsNestedInput = {
    create?: XOR<UserCreateWithoutShortUrlsInput, UserUncheckedCreateWithoutShortUrlsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShortUrlsInput
    upsert?: UserUpsertWithoutShortUrlsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShortUrlsInput, UserUpdateWithoutShortUrlsInput>, UserUncheckedUpdateWithoutShortUrlsInput>
  }

  export type VisitLogUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<VisitLogCreateWithoutShortUrlInput, VisitLogUncheckedCreateWithoutShortUrlInput> | VisitLogCreateWithoutShortUrlInput[] | VisitLogUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutShortUrlInput | VisitLogCreateOrConnectWithoutShortUrlInput[]
    upsert?: VisitLogUpsertWithWhereUniqueWithoutShortUrlInput | VisitLogUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: VisitLogCreateManyShortUrlInputEnvelope
    set?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    disconnect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    delete?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    update?: VisitLogUpdateWithWhereUniqueWithoutShortUrlInput | VisitLogUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: VisitLogUpdateManyWithWhereWithoutShortUrlInput | VisitLogUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
  }

  export type DailyStatUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<DailyStatCreateWithoutShortUrlInput, DailyStatUncheckedCreateWithoutShortUrlInput> | DailyStatCreateWithoutShortUrlInput[] | DailyStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: DailyStatCreateOrConnectWithoutShortUrlInput | DailyStatCreateOrConnectWithoutShortUrlInput[]
    upsert?: DailyStatUpsertWithWhereUniqueWithoutShortUrlInput | DailyStatUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: DailyStatCreateManyShortUrlInputEnvelope
    set?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
    disconnect?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
    delete?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
    connect?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
    update?: DailyStatUpdateWithWhereUniqueWithoutShortUrlInput | DailyStatUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: DailyStatUpdateManyWithWhereWithoutShortUrlInput | DailyStatUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: DailyStatScalarWhereInput | DailyStatScalarWhereInput[]
  }

  export type BrowserStatUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<BrowserStatCreateWithoutShortUrlInput, BrowserStatUncheckedCreateWithoutShortUrlInput> | BrowserStatCreateWithoutShortUrlInput[] | BrowserStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: BrowserStatCreateOrConnectWithoutShortUrlInput | BrowserStatCreateOrConnectWithoutShortUrlInput[]
    upsert?: BrowserStatUpsertWithWhereUniqueWithoutShortUrlInput | BrowserStatUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: BrowserStatCreateManyShortUrlInputEnvelope
    set?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
    disconnect?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
    delete?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
    connect?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
    update?: BrowserStatUpdateWithWhereUniqueWithoutShortUrlInput | BrowserStatUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: BrowserStatUpdateManyWithWhereWithoutShortUrlInput | BrowserStatUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: BrowserStatScalarWhereInput | BrowserStatScalarWhereInput[]
  }

  export type DeviceOsStatUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<DeviceOsStatCreateWithoutShortUrlInput, DeviceOsStatUncheckedCreateWithoutShortUrlInput> | DeviceOsStatCreateWithoutShortUrlInput[] | DeviceOsStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: DeviceOsStatCreateOrConnectWithoutShortUrlInput | DeviceOsStatCreateOrConnectWithoutShortUrlInput[]
    upsert?: DeviceOsStatUpsertWithWhereUniqueWithoutShortUrlInput | DeviceOsStatUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: DeviceOsStatCreateManyShortUrlInputEnvelope
    set?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
    disconnect?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
    delete?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
    connect?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
    update?: DeviceOsStatUpdateWithWhereUniqueWithoutShortUrlInput | DeviceOsStatUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: DeviceOsStatUpdateManyWithWhereWithoutShortUrlInput | DeviceOsStatUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: DeviceOsStatScalarWhereInput | DeviceOsStatScalarWhereInput[]
  }

  export type HourlyStatUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<HourlyStatCreateWithoutShortUrlInput, HourlyStatUncheckedCreateWithoutShortUrlInput> | HourlyStatCreateWithoutShortUrlInput[] | HourlyStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: HourlyStatCreateOrConnectWithoutShortUrlInput | HourlyStatCreateOrConnectWithoutShortUrlInput[]
    upsert?: HourlyStatUpsertWithWhereUniqueWithoutShortUrlInput | HourlyStatUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: HourlyStatCreateManyShortUrlInputEnvelope
    set?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
    disconnect?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
    delete?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
    connect?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
    update?: HourlyStatUpdateWithWhereUniqueWithoutShortUrlInput | HourlyStatUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: HourlyStatUpdateManyWithWhereWithoutShortUrlInput | HourlyStatUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: HourlyStatScalarWhereInput | HourlyStatScalarWhereInput[]
  }

  export type VisitLogUncheckedUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<VisitLogCreateWithoutShortUrlInput, VisitLogUncheckedCreateWithoutShortUrlInput> | VisitLogCreateWithoutShortUrlInput[] | VisitLogUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: VisitLogCreateOrConnectWithoutShortUrlInput | VisitLogCreateOrConnectWithoutShortUrlInput[]
    upsert?: VisitLogUpsertWithWhereUniqueWithoutShortUrlInput | VisitLogUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: VisitLogCreateManyShortUrlInputEnvelope
    set?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    disconnect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    delete?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    connect?: VisitLogWhereUniqueInput | VisitLogWhereUniqueInput[]
    update?: VisitLogUpdateWithWhereUniqueWithoutShortUrlInput | VisitLogUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: VisitLogUpdateManyWithWhereWithoutShortUrlInput | VisitLogUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
  }

  export type DailyStatUncheckedUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<DailyStatCreateWithoutShortUrlInput, DailyStatUncheckedCreateWithoutShortUrlInput> | DailyStatCreateWithoutShortUrlInput[] | DailyStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: DailyStatCreateOrConnectWithoutShortUrlInput | DailyStatCreateOrConnectWithoutShortUrlInput[]
    upsert?: DailyStatUpsertWithWhereUniqueWithoutShortUrlInput | DailyStatUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: DailyStatCreateManyShortUrlInputEnvelope
    set?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
    disconnect?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
    delete?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
    connect?: DailyStatWhereUniqueInput | DailyStatWhereUniqueInput[]
    update?: DailyStatUpdateWithWhereUniqueWithoutShortUrlInput | DailyStatUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: DailyStatUpdateManyWithWhereWithoutShortUrlInput | DailyStatUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: DailyStatScalarWhereInput | DailyStatScalarWhereInput[]
  }

  export type BrowserStatUncheckedUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<BrowserStatCreateWithoutShortUrlInput, BrowserStatUncheckedCreateWithoutShortUrlInput> | BrowserStatCreateWithoutShortUrlInput[] | BrowserStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: BrowserStatCreateOrConnectWithoutShortUrlInput | BrowserStatCreateOrConnectWithoutShortUrlInput[]
    upsert?: BrowserStatUpsertWithWhereUniqueWithoutShortUrlInput | BrowserStatUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: BrowserStatCreateManyShortUrlInputEnvelope
    set?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
    disconnect?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
    delete?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
    connect?: BrowserStatWhereUniqueInput | BrowserStatWhereUniqueInput[]
    update?: BrowserStatUpdateWithWhereUniqueWithoutShortUrlInput | BrowserStatUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: BrowserStatUpdateManyWithWhereWithoutShortUrlInput | BrowserStatUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: BrowserStatScalarWhereInput | BrowserStatScalarWhereInput[]
  }

  export type DeviceOsStatUncheckedUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<DeviceOsStatCreateWithoutShortUrlInput, DeviceOsStatUncheckedCreateWithoutShortUrlInput> | DeviceOsStatCreateWithoutShortUrlInput[] | DeviceOsStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: DeviceOsStatCreateOrConnectWithoutShortUrlInput | DeviceOsStatCreateOrConnectWithoutShortUrlInput[]
    upsert?: DeviceOsStatUpsertWithWhereUniqueWithoutShortUrlInput | DeviceOsStatUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: DeviceOsStatCreateManyShortUrlInputEnvelope
    set?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
    disconnect?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
    delete?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
    connect?: DeviceOsStatWhereUniqueInput | DeviceOsStatWhereUniqueInput[]
    update?: DeviceOsStatUpdateWithWhereUniqueWithoutShortUrlInput | DeviceOsStatUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: DeviceOsStatUpdateManyWithWhereWithoutShortUrlInput | DeviceOsStatUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: DeviceOsStatScalarWhereInput | DeviceOsStatScalarWhereInput[]
  }

  export type HourlyStatUncheckedUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<HourlyStatCreateWithoutShortUrlInput, HourlyStatUncheckedCreateWithoutShortUrlInput> | HourlyStatCreateWithoutShortUrlInput[] | HourlyStatUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: HourlyStatCreateOrConnectWithoutShortUrlInput | HourlyStatCreateOrConnectWithoutShortUrlInput[]
    upsert?: HourlyStatUpsertWithWhereUniqueWithoutShortUrlInput | HourlyStatUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: HourlyStatCreateManyShortUrlInputEnvelope
    set?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
    disconnect?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
    delete?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
    connect?: HourlyStatWhereUniqueInput | HourlyStatWhereUniqueInput[]
    update?: HourlyStatUpdateWithWhereUniqueWithoutShortUrlInput | HourlyStatUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: HourlyStatUpdateManyWithWhereWithoutShortUrlInput | HourlyStatUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: HourlyStatScalarWhereInput | HourlyStatScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type ShortUrlCreateNestedManyWithoutUserInput = {
    create?: XOR<ShortUrlCreateWithoutUserInput, ShortUrlUncheckedCreateWithoutUserInput> | ShortUrlCreateWithoutUserInput[] | ShortUrlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortUrlCreateOrConnectWithoutUserInput | ShortUrlCreateOrConnectWithoutUserInput[]
    createMany?: ShortUrlCreateManyUserInputEnvelope
    connect?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type ShortUrlUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShortUrlCreateWithoutUserInput, ShortUrlUncheckedCreateWithoutUserInput> | ShortUrlCreateWithoutUserInput[] | ShortUrlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortUrlCreateOrConnectWithoutUserInput | ShortUrlCreateOrConnectWithoutUserInput[]
    createMany?: ShortUrlCreateManyUserInputEnvelope
    connect?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type ShortUrlUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShortUrlCreateWithoutUserInput, ShortUrlUncheckedCreateWithoutUserInput> | ShortUrlCreateWithoutUserInput[] | ShortUrlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortUrlCreateOrConnectWithoutUserInput | ShortUrlCreateOrConnectWithoutUserInput[]
    upsert?: ShortUrlUpsertWithWhereUniqueWithoutUserInput | ShortUrlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShortUrlCreateManyUserInputEnvelope
    set?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
    disconnect?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
    delete?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
    connect?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
    update?: ShortUrlUpdateWithWhereUniqueWithoutUserInput | ShortUrlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShortUrlUpdateManyWithWhereWithoutUserInput | ShortUrlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShortUrlScalarWhereInput | ShortUrlScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type ShortUrlUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShortUrlCreateWithoutUserInput, ShortUrlUncheckedCreateWithoutUserInput> | ShortUrlCreateWithoutUserInput[] | ShortUrlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortUrlCreateOrConnectWithoutUserInput | ShortUrlCreateOrConnectWithoutUserInput[]
    upsert?: ShortUrlUpsertWithWhereUniqueWithoutUserInput | ShortUrlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShortUrlCreateManyUserInputEnvelope
    set?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
    disconnect?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
    delete?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
    connect?: ShortUrlWhereUniqueInput | ShortUrlWhereUniqueInput[]
    update?: ShortUrlUpdateWithWhereUniqueWithoutUserInput | ShortUrlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShortUrlUpdateManyWithWhereWithoutUserInput | ShortUrlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShortUrlScalarWhereInput | ShortUrlScalarWhereInput[]
  }

  export type ShortUrlCreateNestedOneWithoutVisitsInput = {
    create?: XOR<ShortUrlCreateWithoutVisitsInput, ShortUrlUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutVisitsInput
    connect?: ShortUrlWhereUniqueInput
  }

  export type ShortUrlUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<ShortUrlCreateWithoutVisitsInput, ShortUrlUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: ShortUrlCreateOrConnectWithoutVisitsInput
    upsert?: ShortUrlUpsertWithoutVisitsInput
    connect?: ShortUrlWhereUniqueInput
    update?: XOR<XOR<ShortUrlUpdateToOneWithWhereWithoutVisitsInput, ShortUrlUpdateWithoutVisitsInput>, ShortUrlUncheckedUpdateWithoutVisitsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type ShortUrlCreateWithoutBrowserStatsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    user: UserCreateNestedOneWithoutShortUrlsInput
    visits?: VisitLogCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlUncheckedCreateWithoutBrowserStatsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    userId: string
    visits?: VisitLogUncheckedCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatUncheckedCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatUncheckedCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlCreateOrConnectWithoutBrowserStatsInput = {
    where: ShortUrlWhereUniqueInput
    create: XOR<ShortUrlCreateWithoutBrowserStatsInput, ShortUrlUncheckedCreateWithoutBrowserStatsInput>
  }

  export type ShortUrlUpsertWithoutBrowserStatsInput = {
    update: XOR<ShortUrlUpdateWithoutBrowserStatsInput, ShortUrlUncheckedUpdateWithoutBrowserStatsInput>
    create: XOR<ShortUrlCreateWithoutBrowserStatsInput, ShortUrlUncheckedCreateWithoutBrowserStatsInput>
    where?: ShortUrlWhereInput
  }

  export type ShortUrlUpdateToOneWithWhereWithoutBrowserStatsInput = {
    where?: ShortUrlWhereInput
    data: XOR<ShortUrlUpdateWithoutBrowserStatsInput, ShortUrlUncheckedUpdateWithoutBrowserStatsInput>
  }

  export type ShortUrlUpdateWithoutBrowserStatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutShortUrlsNestedInput
    visits?: VisitLogUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateWithoutBrowserStatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    visits?: VisitLogUncheckedUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUncheckedUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUncheckedUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlCreateWithoutDailyStatsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    user: UserCreateNestedOneWithoutShortUrlsInput
    visits?: VisitLogCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlUncheckedCreateWithoutDailyStatsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    userId: string
    visits?: VisitLogUncheckedCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatUncheckedCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatUncheckedCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlCreateOrConnectWithoutDailyStatsInput = {
    where: ShortUrlWhereUniqueInput
    create: XOR<ShortUrlCreateWithoutDailyStatsInput, ShortUrlUncheckedCreateWithoutDailyStatsInput>
  }

  export type ShortUrlUpsertWithoutDailyStatsInput = {
    update: XOR<ShortUrlUpdateWithoutDailyStatsInput, ShortUrlUncheckedUpdateWithoutDailyStatsInput>
    create: XOR<ShortUrlCreateWithoutDailyStatsInput, ShortUrlUncheckedCreateWithoutDailyStatsInput>
    where?: ShortUrlWhereInput
  }

  export type ShortUrlUpdateToOneWithWhereWithoutDailyStatsInput = {
    where?: ShortUrlWhereInput
    data: XOR<ShortUrlUpdateWithoutDailyStatsInput, ShortUrlUncheckedUpdateWithoutDailyStatsInput>
  }

  export type ShortUrlUpdateWithoutDailyStatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutShortUrlsNestedInput
    visits?: VisitLogUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateWithoutDailyStatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    visits?: VisitLogUncheckedUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUncheckedUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUncheckedUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlCreateWithoutDeviceOsStatsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    user: UserCreateNestedOneWithoutShortUrlsInput
    visits?: VisitLogCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlUncheckedCreateWithoutDeviceOsStatsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    userId: string
    visits?: VisitLogUncheckedCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatUncheckedCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatUncheckedCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlCreateOrConnectWithoutDeviceOsStatsInput = {
    where: ShortUrlWhereUniqueInput
    create: XOR<ShortUrlCreateWithoutDeviceOsStatsInput, ShortUrlUncheckedCreateWithoutDeviceOsStatsInput>
  }

  export type ShortUrlUpsertWithoutDeviceOsStatsInput = {
    update: XOR<ShortUrlUpdateWithoutDeviceOsStatsInput, ShortUrlUncheckedUpdateWithoutDeviceOsStatsInput>
    create: XOR<ShortUrlCreateWithoutDeviceOsStatsInput, ShortUrlUncheckedCreateWithoutDeviceOsStatsInput>
    where?: ShortUrlWhereInput
  }

  export type ShortUrlUpdateToOneWithWhereWithoutDeviceOsStatsInput = {
    where?: ShortUrlWhereInput
    data: XOR<ShortUrlUpdateWithoutDeviceOsStatsInput, ShortUrlUncheckedUpdateWithoutDeviceOsStatsInput>
  }

  export type ShortUrlUpdateWithoutDeviceOsStatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutShortUrlsNestedInput
    visits?: VisitLogUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateWithoutDeviceOsStatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    visits?: VisitLogUncheckedUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUncheckedUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUncheckedUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlCreateWithoutHourlyStatsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    user: UserCreateNestedOneWithoutShortUrlsInput
    visits?: VisitLogCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlUncheckedCreateWithoutHourlyStatsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    userId: string
    visits?: VisitLogUncheckedCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatUncheckedCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatUncheckedCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlCreateOrConnectWithoutHourlyStatsInput = {
    where: ShortUrlWhereUniqueInput
    create: XOR<ShortUrlCreateWithoutHourlyStatsInput, ShortUrlUncheckedCreateWithoutHourlyStatsInput>
  }

  export type ShortUrlUpsertWithoutHourlyStatsInput = {
    update: XOR<ShortUrlUpdateWithoutHourlyStatsInput, ShortUrlUncheckedUpdateWithoutHourlyStatsInput>
    create: XOR<ShortUrlCreateWithoutHourlyStatsInput, ShortUrlUncheckedCreateWithoutHourlyStatsInput>
    where?: ShortUrlWhereInput
  }

  export type ShortUrlUpdateToOneWithWhereWithoutHourlyStatsInput = {
    where?: ShortUrlWhereInput
    data: XOR<ShortUrlUpdateWithoutHourlyStatsInput, ShortUrlUncheckedUpdateWithoutHourlyStatsInput>
  }

  export type ShortUrlUpdateWithoutHourlyStatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutShortUrlsNestedInput
    visits?: VisitLogUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateWithoutHourlyStatsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    visits?: VisitLogUncheckedUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUncheckedUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUncheckedUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type UserCreateWithoutPasswordResetTokensInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    shortUrls?: ShortUrlCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    shortUrls?: ShortUrlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
  }

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserUpdateWithoutPasswordResetTokensInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    shortUrls?: ShortUrlUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    shortUrls?: ShortUrlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    shortUrls?: ShortUrlCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    shortUrls?: ShortUrlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    shortUrls?: ShortUrlUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    shortUrls?: ShortUrlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutShortUrlsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShortUrlsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedId: string
    email?: string | null
    salt: string
    hashedPassword?: string | null
    isAdmin?: boolean
    isAnonymous?: boolean
    isActive?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShortUrlsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShortUrlsInput, UserUncheckedCreateWithoutShortUrlsInput>
  }

  export type VisitLogCreateWithoutShortUrlInput = {
    id?: string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
  }

  export type VisitLogUncheckedCreateWithoutShortUrlInput = {
    id?: string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
  }

  export type VisitLogCreateOrConnectWithoutShortUrlInput = {
    where: VisitLogWhereUniqueInput
    create: XOR<VisitLogCreateWithoutShortUrlInput, VisitLogUncheckedCreateWithoutShortUrlInput>
  }

  export type VisitLogCreateManyShortUrlInputEnvelope = {
    data: VisitLogCreateManyShortUrlInput | VisitLogCreateManyShortUrlInput[]
  }

  export type DailyStatCreateWithoutShortUrlInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type DailyStatUncheckedCreateWithoutShortUrlInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type DailyStatCreateOrConnectWithoutShortUrlInput = {
    where: DailyStatWhereUniqueInput
    create: XOR<DailyStatCreateWithoutShortUrlInput, DailyStatUncheckedCreateWithoutShortUrlInput>
  }

  export type DailyStatCreateManyShortUrlInputEnvelope = {
    data: DailyStatCreateManyShortUrlInput | DailyStatCreateManyShortUrlInput[]
  }

  export type BrowserStatCreateWithoutShortUrlInput = {
    id?: string
    browser: string
    count?: number
  }

  export type BrowserStatUncheckedCreateWithoutShortUrlInput = {
    id?: string
    browser: string
    count?: number
  }

  export type BrowserStatCreateOrConnectWithoutShortUrlInput = {
    where: BrowserStatWhereUniqueInput
    create: XOR<BrowserStatCreateWithoutShortUrlInput, BrowserStatUncheckedCreateWithoutShortUrlInput>
  }

  export type BrowserStatCreateManyShortUrlInputEnvelope = {
    data: BrowserStatCreateManyShortUrlInput | BrowserStatCreateManyShortUrlInput[]
  }

  export type DeviceOsStatCreateWithoutShortUrlInput = {
    id?: string
    device: string
    os: string
    count?: number
  }

  export type DeviceOsStatUncheckedCreateWithoutShortUrlInput = {
    id?: string
    device: string
    os: string
    count?: number
  }

  export type DeviceOsStatCreateOrConnectWithoutShortUrlInput = {
    where: DeviceOsStatWhereUniqueInput
    create: XOR<DeviceOsStatCreateWithoutShortUrlInput, DeviceOsStatUncheckedCreateWithoutShortUrlInput>
  }

  export type DeviceOsStatCreateManyShortUrlInputEnvelope = {
    data: DeviceOsStatCreateManyShortUrlInput | DeviceOsStatCreateManyShortUrlInput[]
  }

  export type HourlyStatCreateWithoutShortUrlInput = {
    id?: string
    hour: number
    count?: number
  }

  export type HourlyStatUncheckedCreateWithoutShortUrlInput = {
    id?: string
    hour: number
    count?: number
  }

  export type HourlyStatCreateOrConnectWithoutShortUrlInput = {
    where: HourlyStatWhereUniqueInput
    create: XOR<HourlyStatCreateWithoutShortUrlInput, HourlyStatUncheckedCreateWithoutShortUrlInput>
  }

  export type HourlyStatCreateManyShortUrlInputEnvelope = {
    data: HourlyStatCreateManyShortUrlInput | HourlyStatCreateManyShortUrlInput[]
  }

  export type UserUpsertWithoutShortUrlsInput = {
    update: XOR<UserUpdateWithoutShortUrlsInput, UserUncheckedUpdateWithoutShortUrlsInput>
    create: XOR<UserCreateWithoutShortUrlsInput, UserUncheckedCreateWithoutShortUrlsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShortUrlsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShortUrlsInput, UserUncheckedUpdateWithoutShortUrlsInput>
  }

  export type UserUpdateWithoutShortUrlsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShortUrlsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VisitLogUpsertWithWhereUniqueWithoutShortUrlInput = {
    where: VisitLogWhereUniqueInput
    update: XOR<VisitLogUpdateWithoutShortUrlInput, VisitLogUncheckedUpdateWithoutShortUrlInput>
    create: XOR<VisitLogCreateWithoutShortUrlInput, VisitLogUncheckedCreateWithoutShortUrlInput>
  }

  export type VisitLogUpdateWithWhereUniqueWithoutShortUrlInput = {
    where: VisitLogWhereUniqueInput
    data: XOR<VisitLogUpdateWithoutShortUrlInput, VisitLogUncheckedUpdateWithoutShortUrlInput>
  }

  export type VisitLogUpdateManyWithWhereWithoutShortUrlInput = {
    where: VisitLogScalarWhereInput
    data: XOR<VisitLogUpdateManyMutationInput, VisitLogUncheckedUpdateManyWithoutShortUrlInput>
  }

  export type VisitLogScalarWhereInput = {
    AND?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
    OR?: VisitLogScalarWhereInput[]
    NOT?: VisitLogScalarWhereInput | VisitLogScalarWhereInput[]
    id?: StringFilter<"VisitLog"> | string
    createdAt?: DateTimeFilter<"VisitLog"> | Date | string
    shortUrlId?: StringFilter<"VisitLog"> | string
    ipAddress?: StringNullableFilter<"VisitLog"> | string | null
    userAgent?: StringNullableFilter<"VisitLog"> | string | null
    referrer?: StringNullableFilter<"VisitLog"> | string | null
  }

  export type DailyStatUpsertWithWhereUniqueWithoutShortUrlInput = {
    where: DailyStatWhereUniqueInput
    update: XOR<DailyStatUpdateWithoutShortUrlInput, DailyStatUncheckedUpdateWithoutShortUrlInput>
    create: XOR<DailyStatCreateWithoutShortUrlInput, DailyStatUncheckedCreateWithoutShortUrlInput>
  }

  export type DailyStatUpdateWithWhereUniqueWithoutShortUrlInput = {
    where: DailyStatWhereUniqueInput
    data: XOR<DailyStatUpdateWithoutShortUrlInput, DailyStatUncheckedUpdateWithoutShortUrlInput>
  }

  export type DailyStatUpdateManyWithWhereWithoutShortUrlInput = {
    where: DailyStatScalarWhereInput
    data: XOR<DailyStatUpdateManyMutationInput, DailyStatUncheckedUpdateManyWithoutShortUrlInput>
  }

  export type DailyStatScalarWhereInput = {
    AND?: DailyStatScalarWhereInput | DailyStatScalarWhereInput[]
    OR?: DailyStatScalarWhereInput[]
    NOT?: DailyStatScalarWhereInput | DailyStatScalarWhereInput[]
    id?: StringFilter<"DailyStat"> | string
    date?: DateTimeFilter<"DailyStat"> | Date | string
    count?: IntFilter<"DailyStat"> | number
    shortUrlId?: StringFilter<"DailyStat"> | string
  }

  export type BrowserStatUpsertWithWhereUniqueWithoutShortUrlInput = {
    where: BrowserStatWhereUniqueInput
    update: XOR<BrowserStatUpdateWithoutShortUrlInput, BrowserStatUncheckedUpdateWithoutShortUrlInput>
    create: XOR<BrowserStatCreateWithoutShortUrlInput, BrowserStatUncheckedCreateWithoutShortUrlInput>
  }

  export type BrowserStatUpdateWithWhereUniqueWithoutShortUrlInput = {
    where: BrowserStatWhereUniqueInput
    data: XOR<BrowserStatUpdateWithoutShortUrlInput, BrowserStatUncheckedUpdateWithoutShortUrlInput>
  }

  export type BrowserStatUpdateManyWithWhereWithoutShortUrlInput = {
    where: BrowserStatScalarWhereInput
    data: XOR<BrowserStatUpdateManyMutationInput, BrowserStatUncheckedUpdateManyWithoutShortUrlInput>
  }

  export type BrowserStatScalarWhereInput = {
    AND?: BrowserStatScalarWhereInput | BrowserStatScalarWhereInput[]
    OR?: BrowserStatScalarWhereInput[]
    NOT?: BrowserStatScalarWhereInput | BrowserStatScalarWhereInput[]
    id?: StringFilter<"BrowserStat"> | string
    browser?: StringFilter<"BrowserStat"> | string
    count?: IntFilter<"BrowserStat"> | number
    shortUrlId?: StringFilter<"BrowserStat"> | string
  }

  export type DeviceOsStatUpsertWithWhereUniqueWithoutShortUrlInput = {
    where: DeviceOsStatWhereUniqueInput
    update: XOR<DeviceOsStatUpdateWithoutShortUrlInput, DeviceOsStatUncheckedUpdateWithoutShortUrlInput>
    create: XOR<DeviceOsStatCreateWithoutShortUrlInput, DeviceOsStatUncheckedCreateWithoutShortUrlInput>
  }

  export type DeviceOsStatUpdateWithWhereUniqueWithoutShortUrlInput = {
    where: DeviceOsStatWhereUniqueInput
    data: XOR<DeviceOsStatUpdateWithoutShortUrlInput, DeviceOsStatUncheckedUpdateWithoutShortUrlInput>
  }

  export type DeviceOsStatUpdateManyWithWhereWithoutShortUrlInput = {
    where: DeviceOsStatScalarWhereInput
    data: XOR<DeviceOsStatUpdateManyMutationInput, DeviceOsStatUncheckedUpdateManyWithoutShortUrlInput>
  }

  export type DeviceOsStatScalarWhereInput = {
    AND?: DeviceOsStatScalarWhereInput | DeviceOsStatScalarWhereInput[]
    OR?: DeviceOsStatScalarWhereInput[]
    NOT?: DeviceOsStatScalarWhereInput | DeviceOsStatScalarWhereInput[]
    id?: StringFilter<"DeviceOsStat"> | string
    device?: StringFilter<"DeviceOsStat"> | string
    os?: StringFilter<"DeviceOsStat"> | string
    count?: IntFilter<"DeviceOsStat"> | number
    shortUrlId?: StringFilter<"DeviceOsStat"> | string
  }

  export type HourlyStatUpsertWithWhereUniqueWithoutShortUrlInput = {
    where: HourlyStatWhereUniqueInput
    update: XOR<HourlyStatUpdateWithoutShortUrlInput, HourlyStatUncheckedUpdateWithoutShortUrlInput>
    create: XOR<HourlyStatCreateWithoutShortUrlInput, HourlyStatUncheckedCreateWithoutShortUrlInput>
  }

  export type HourlyStatUpdateWithWhereUniqueWithoutShortUrlInput = {
    where: HourlyStatWhereUniqueInput
    data: XOR<HourlyStatUpdateWithoutShortUrlInput, HourlyStatUncheckedUpdateWithoutShortUrlInput>
  }

  export type HourlyStatUpdateManyWithWhereWithoutShortUrlInput = {
    where: HourlyStatScalarWhereInput
    data: XOR<HourlyStatUpdateManyMutationInput, HourlyStatUncheckedUpdateManyWithoutShortUrlInput>
  }

  export type HourlyStatScalarWhereInput = {
    AND?: HourlyStatScalarWhereInput | HourlyStatScalarWhereInput[]
    OR?: HourlyStatScalarWhereInput[]
    NOT?: HourlyStatScalarWhereInput | HourlyStatScalarWhereInput[]
    id?: StringFilter<"HourlyStat"> | string
    hour?: IntFilter<"HourlyStat"> | number
    count?: IntFilter<"HourlyStat"> | number
    shortUrlId?: StringFilter<"HourlyStat"> | string
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    token: string
    email: string
    used?: boolean
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    token: string
    email: string
    used?: boolean
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
  }

  export type ShortUrlCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    visits?: VisitLogCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    visits?: VisitLogUncheckedCreateNestedManyWithoutShortUrlInput
    dailyStats?: DailyStatUncheckedCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatUncheckedCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatUncheckedCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlCreateOrConnectWithoutUserInput = {
    where: ShortUrlWhereUniqueInput
    create: XOR<ShortUrlCreateWithoutUserInput, ShortUrlUncheckedCreateWithoutUserInput>
  }

  export type ShortUrlCreateManyUserInputEnvelope = {
    data: ShortUrlCreateManyUserInput | ShortUrlCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    token?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    used?: BoolFilter<"PasswordResetToken"> | boolean
  }

  export type ShortUrlUpsertWithWhereUniqueWithoutUserInput = {
    where: ShortUrlWhereUniqueInput
    update: XOR<ShortUrlUpdateWithoutUserInput, ShortUrlUncheckedUpdateWithoutUserInput>
    create: XOR<ShortUrlCreateWithoutUserInput, ShortUrlUncheckedCreateWithoutUserInput>
  }

  export type ShortUrlUpdateWithWhereUniqueWithoutUserInput = {
    where: ShortUrlWhereUniqueInput
    data: XOR<ShortUrlUpdateWithoutUserInput, ShortUrlUncheckedUpdateWithoutUserInput>
  }

  export type ShortUrlUpdateManyWithWhereWithoutUserInput = {
    where: ShortUrlScalarWhereInput
    data: XOR<ShortUrlUpdateManyMutationInput, ShortUrlUncheckedUpdateManyWithoutUserInput>
  }

  export type ShortUrlScalarWhereInput = {
    AND?: ShortUrlScalarWhereInput | ShortUrlScalarWhereInput[]
    OR?: ShortUrlScalarWhereInput[]
    NOT?: ShortUrlScalarWhereInput | ShortUrlScalarWhereInput[]
    id?: StringFilter<"ShortUrl"> | string
    createdAt?: DateTimeFilter<"ShortUrl"> | Date | string
    shortCode?: StringFilter<"ShortUrl"> | string
    originalUrl?: StringFilter<"ShortUrl"> | string
    clicks?: IntFilter<"ShortUrl"> | number
    userId?: StringFilter<"ShortUrl"> | string
  }

  export type ShortUrlCreateWithoutVisitsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    user: UserCreateNestedOneWithoutShortUrlsInput
    dailyStats?: DailyStatCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlUncheckedCreateWithoutVisitsInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
    userId: string
    dailyStats?: DailyStatUncheckedCreateNestedManyWithoutShortUrlInput
    browserStats?: BrowserStatUncheckedCreateNestedManyWithoutShortUrlInput
    deviceOsStats?: DeviceOsStatUncheckedCreateNestedManyWithoutShortUrlInput
    hourlyStats?: HourlyStatUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortUrlCreateOrConnectWithoutVisitsInput = {
    where: ShortUrlWhereUniqueInput
    create: XOR<ShortUrlCreateWithoutVisitsInput, ShortUrlUncheckedCreateWithoutVisitsInput>
  }

  export type ShortUrlUpsertWithoutVisitsInput = {
    update: XOR<ShortUrlUpdateWithoutVisitsInput, ShortUrlUncheckedUpdateWithoutVisitsInput>
    create: XOR<ShortUrlCreateWithoutVisitsInput, ShortUrlUncheckedCreateWithoutVisitsInput>
    where?: ShortUrlWhereInput
  }

  export type ShortUrlUpdateToOneWithWhereWithoutVisitsInput = {
    where?: ShortUrlWhereInput
    data: XOR<ShortUrlUpdateWithoutVisitsInput, ShortUrlUncheckedUpdateWithoutVisitsInput>
  }

  export type ShortUrlUpdateWithoutVisitsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutShortUrlsNestedInput
    dailyStats?: DailyStatUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateWithoutVisitsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    dailyStats?: DailyStatUncheckedUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUncheckedUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUncheckedUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type VisitLogCreateManyShortUrlInput = {
    id?: string
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
  }

  export type DailyStatCreateManyShortUrlInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type BrowserStatCreateManyShortUrlInput = {
    id?: string
    browser: string
    count?: number
  }

  export type DeviceOsStatCreateManyShortUrlInput = {
    id?: string
    device: string
    os: string
    count?: number
  }

  export type HourlyStatCreateManyShortUrlInput = {
    id?: string
    hour: number
    count?: number
  }

  export type VisitLogUpdateWithoutShortUrlInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitLogUncheckedUpdateWithoutShortUrlInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitLogUncheckedUpdateManyWithoutShortUrlInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyStatUpdateWithoutShortUrlInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DailyStatUncheckedUpdateWithoutShortUrlInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DailyStatUncheckedUpdateManyWithoutShortUrlInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type BrowserStatUpdateWithoutShortUrlInput = {
    browser?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type BrowserStatUncheckedUpdateWithoutShortUrlInput = {
    browser?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type BrowserStatUncheckedUpdateManyWithoutShortUrlInput = {
    browser?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceOsStatUpdateWithoutShortUrlInput = {
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceOsStatUncheckedUpdateWithoutShortUrlInput = {
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceOsStatUncheckedUpdateManyWithoutShortUrlInput = {
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type HourlyStatUpdateWithoutShortUrlInput = {
    hour?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type HourlyStatUncheckedUpdateWithoutShortUrlInput = {
    hour?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type HourlyStatUncheckedUpdateManyWithoutShortUrlInput = {
    hour?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    expiresAt: Date | string
    token: string
    email: string
    used?: boolean
  }

  export type ShortUrlCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    shortCode: string
    originalUrl: string
    clicks?: number
  }

  export type SessionUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShortUrlUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    visits?: VisitLogUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
    visits?: VisitLogUncheckedUpdateManyWithoutShortUrlNestedInput
    dailyStats?: DailyStatUncheckedUpdateManyWithoutShortUrlNestedInput
    browserStats?: BrowserStatUncheckedUpdateManyWithoutShortUrlNestedInput
    deviceOsStats?: DeviceOsStatUncheckedUpdateManyWithoutShortUrlNestedInput
    hourlyStats?: HourlyStatUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortUrlUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortCode?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    clicks?: IntFieldUpdateOperationsInput | number
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