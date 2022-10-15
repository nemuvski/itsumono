/**
 * Dateのモック
 */
const date = new Date('August 19, 1975 23:15:30')
global.Date.now = jest.fn().mockReturnValue(date.valueOf())
