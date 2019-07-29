$(document).ready(function () {
    var now = new Date(),
        secPassed = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds(),
        t = (60*60*24) - secPassed;

    $('.timer__timer').countdown({
        until: (t),
        labels: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        labels1: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        format: 'HMS',
        layout: '<div><p><span>0</span></p><p><span>0</span></p></div>' +
        '<div><p><span>{h10}</span></p><p><span>{h1}</span></p></div>' +
        '<div><p><span>{m10}</span></p><p><span>{m1}</span></p></div>' +
        '<div><p><span>{s10}</span></p><p><span>{s1}</span></p></div>'
    });
});
