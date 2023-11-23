//  free, pro, vip
// проверка подписки только для pro, vip

const sub = 'free';

const can = sub === 'pro' || sub === 'vip';
// если польз про или вип, есть доступ

console.log('is access?', can);