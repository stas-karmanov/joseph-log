import { Level } from '../levels';

export interface Transport {
    getLevel(): Level;
    send(level: Level, message: string): void;
}

export type TransportFactory = (defaultLoggerLevel: Level) => Transport;
