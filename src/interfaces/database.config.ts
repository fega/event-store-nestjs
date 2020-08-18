export enum supportedDatabases {
  mongodb = 'mongodb',
  redis = 'redis',
  elasticsearch = 'elasticsearch',
  inmemory = 'inmemory',
  // dynamodb = 'dynamodb',
}

export const isSupported = (dbname: string): boolean => !!supportedDatabases[dbname]

// NOTE: DBs supported by eventstore - [inmemory, mongodb, redis, tingodb, elasticsearch, azuretable, dynamodb]

/**
 * Sample DatabaseConfig
 * {
 *  dialect: 'mongodb',
 *  uri: 'mongo://localhost:27017/<collectionName>?useUnifiedTopology=true',
 *  host: 'localhost',
 *  port: 27017, 
 * }
 */

export interface DatabaseConfig {
  dialect: string,
  uri?: string,
  host?: string;
  port?: number;
  options?: {
    ssl: boolean;
    [key: string]: unknown;
  }
}
