const gulp = require('gulp');
const connect = require('gulp-connect');

// Запуск сервера с автообновлением
gulp.task('serve', () => {
    connect.server({
        root: 'src', // Рабочая папка (где лежат HTML/CSS)
        port: 3000,
        livereload: true
    });
});

// Следим за изменениями файлов
gulp.task('watch', () => {
    gulp.watch(['src/**/*.html', 'src/**/*.css'], gulp.series('reload'));
});

// Перезагружаем страницу
gulp.task('reload', (done) => {
    connect.reload();
    done();
});

// Задача по умолчанию
gulp.task('default', gulp.parallel('serve', 'watch'));