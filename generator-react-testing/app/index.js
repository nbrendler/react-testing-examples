var Base = require('yeoman-generator').Base;

module.exports = Base.extend({
  constructor: function() {
    Base.apply(this, arguments);

    this.appname = this.appname.replace(/\s+/g, '-');
  },
  writing: function() {
    this.fs.copyTpl(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('.npmignore-template'),
      this.destinationPath('.npmignore'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('test/.eslintrc'),
      this.destinationPath('test/.eslintrc'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('test/test-helper.js'),
      this.destinationPath('test/test-helper.js'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('test/mocha.opts'),
      this.destinationPath('test/mocha.opts'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('test/null-compiler.js'),
      this.destinationPath('test/null-compiler.js'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/index.js'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { name: this.appname }
    );

    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { name: this.appname }
    );
  },
  install: function() {
    this.npmInstall();
  }
});
