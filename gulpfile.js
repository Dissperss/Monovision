const gulp = require('gulp');
const connect = require('gulp-connect');

// 1. Запускаем сервер + livereload
gulp.task('server', function () {
    connect.server({
        root: 'src',       // папка с проектом
        port: 3000,        // порт сервера
        livereload: true,  // включаем автообновление
    });
});

// 2. Следим за файлами
gulp.task('watch', function () {
    gulp.watch(['src/**/*.html', 'src/**/*.css'], gulp.series('reload'));
});

// 3. Перезагружаем страницу
gulp.task('reload', function (done) {
    gulp.src('src/**/*')  // берём все файлы
        .pipe(connect.reload());  // отправляем сигнал на перезагрузку
    done();
});

// 4. Запускаем всё вместе
gulp.task('default', gulp.parallel('server', 'watch'));