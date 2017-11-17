const gulp = require("gulp");
const typescript = require("gulp-typescript");

gulp.task("build", () => {
    const ts_project = typescript.createProject("tsconfig.json");
    gulp.src("src/**/*.ts")
            .pipe(ts_project())
            .pipe(gulp.dest("dist/"));
});

gulp.task("default", [ "build" ]);
