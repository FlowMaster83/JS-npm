// ОТКРЫТИЕ ЧАТА

// скрипт проверяет возможность открыть чат с пользователем
// - другом
// - онлайн
// - без режима не беспокоить

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Open chat?', canOpenChat);