const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
const PACKAGE = require('../package.json');
const fse = require('fs-extra');

// =============================================================================
const kScriptDir = path.dirname(require.main.filename);
const kProjectDir = path.join(kScriptDir, '..');

const kBuildDir = path.join(kProjectDir, 'build');
const kDistDir = path.join(kProjectDir, 'dist');
const kModulesDir = path.join(kProjectDir, 'node_modules');

const kPackageName = PACKAGE.name;
const kPackageVersion = PACKAGE.version;
// -----------------------------------------------------------------------------

const browsers = ['chrome', 'firefox'];
browsers.forEach(browser => {
  const buildDir = path.join(kBuildDir, browser);
  const outName = `${kPackageName}_v${kPackageVersion}_${browser}.zip`;
  const srcPath = path.join(buildDir);
  const outPath = path.join(kDistDir, outName);

  if (!fs.existsSync(buildDir)) {
    console.error(`Error: build folder "${buildDir}" unavailable`);
    process.exit(1);
  }

  console.log('Preparing dist directory ...');
  fse.ensureDirSync(kDistDir);

  console.log(`Archiving for "${browser}" ...`);

  fse.removeSync(outPath);
  child_process.spawnSync('zip', ['-j', '-r', '-9', outPath, srcPath],
    { stdio: 'inherit' });

  console.log(`Packed for "${browser}" !!`);
});