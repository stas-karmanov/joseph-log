import { createLogger, createConsole, createHttp, Level } from 'joseph-log';

const logger = createLogger({
    level: Level.ERROR,
    transports: [createConsole(Level.DEBUG), createHttp({ url: 'http://localhost:3001/logs' })],
});

document.getElementById('error').addEventListener('click', () => {
    logger.error('button error');
});

document.getElementById('warn').addEventListener('click', () => {
    logger.warn('button warn');
});

document.getElementById('info').addEventListener('click', () => {
    logger.info('button info');
});

document.getElementById('http').addEventListener('click', () => {
    logger.http('button http');
});

document.getElementById('verbose').addEventListener('click', () => {
    logger.verbose('button verbose');
});

document.getElementById('debug').addEventListener('click', () => {
    logger.debug('button debug');
});

document.getElementById('silly').addEventListener('click', () => {
    logger.silly('button silly');
});
