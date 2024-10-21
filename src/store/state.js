export default {
    apiDomain: 'https://api.ubric.ru/',
    shareUrl: 'https://t.me/kruzhkov_bot?start=',
    shareTextTemplate: 'Подключайся к кружку "@name" и будь счастлив!',
    shareButtonText: 'Пригласить',
    group_types: ['Запись', 'Группа', 'Очередь', 'Чеклист', 'Организация'],

    events: [
        { date: '2024-09-16', startTime: '12:00', endTime: '20:00', breakStart: '14:00', breakEnd: '15:00' },
        { date: '2024-09-20', startTime: '12:00', endTime: '20:00', breakStart: '14:00', breakEnd: '15:00' },
        { date: '2024-09-21', startTime: '12:00', endTime: '21:00', breakStart: '14:00', breakEnd: '15:00' },
    ],
    activeDays: [],
    modalVisible: false,
    currentModalComponent: null,
    services: [
        { name: 'Услуги стоматолога', price: '2000 руб.', duration: '30 мин', break: '30 мин' },
        { name: 'Услуги стоматолога', price: '2000 руб.', duration: '30 мин', break: '30 мин' },
    ],
};
