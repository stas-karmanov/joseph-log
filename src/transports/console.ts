import { Transport, TransportFactory } from './transport.models';
import { Level } from '../levels';

class ConsoleTransport implements Transport {
    private readonly levelMap = {
        [Level.ERROR]: this.error.bind(this),
        [Level.WARN]: this.warn.bind(this),
        [Level.INFO]: this.info.bind(this),
        [Level.HTTP]: this.http.bind(this),
        [Level.VERBOSE]: this.verbose.bind(this),
        [Level.DEBUG]: this.debug.bind(this),
        [Level.SILLY]: this.silly.bind(this),
    };

    constructor(private level: Level) {}

    public getLevel(): Level {
        return this.level;
    }

    public send(level: Level, message: string) {
        this.levelMap[level](`[${level}] ${message}`);
    }

    private error(message: string) {
        console.error(message);
    }

    private warn(message: string) {
        console.warn(message);
    }

    private info(message: string) {
        console.info(message);
    }

    private http(message: string) {
        console.info(message);
    }

    private verbose(message: string) {
        console.info(message);
    }

    private debug(message: string) {
        console.info(message);
    }

    private silly(message: string) {
        console.info(message);
    }
}

export const consoleFactory: TransportFactory = (customLevel?: Level) => (defaultLoggerLevel: Level) => {
    return new ConsoleTransport(customLevel || defaultLoggerLevel);
};
