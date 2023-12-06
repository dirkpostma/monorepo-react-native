// Because metro bundler has a live reload issue with symlinks,
// I added shared package using "file:"" in mobile's package.json
// To still support live reload while making changes in shared,
// this script can be run to watch for changes in shared and copy them to mobile

const chokidar = require('chokidar');
const fs = require('fs-extra');
const path = require('path');

const sourceFolder = 'packages/shared/dist';
const targetFolders = ['packages/mobile/node_modules/shared/dist'];

// Initialize watcher to watch the entire source folder
const watcher = chokidar.watch(sourceFolder, {
  persistent: true
});

// Function to replicate the change to all target folders
function replicateChange(type, filePath) {
  const relativePath = path.relative(sourceFolder, filePath);

  targetFolders.forEach(target => {
    const targetPath = path.join(target, relativePath);

    if (type === 'add' || type === 'change') {
      fs.copy(filePath, targetPath, err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`File ${filePath} was ${type}d, copied to ${targetPath}`);
        }
      });
    } else if (type === 'unlink') {
      fs.remove(targetPath, err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`File ${filePath} was removed, also removed from ${targetPath}`);
        }
      });
    }
  });
}

// Event listeners for the watcher
watcher
  .on('add', path => replicateChange('add', path))
  .on('change', path => replicateChange('change', path))
  .on('unlink', path => replicateChange('unlink', path))
  .on('error', error => console.log(`Watcher error: ${error}`))
  .on('ready', () => console.log('Initial scan complete. Ready for changes'));

