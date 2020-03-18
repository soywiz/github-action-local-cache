const config = require('./config')
const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async function() {
	try {
                const LOCAL_PATH = config.LOCAL_PATH
                const CACHE_PATH = config.CACHE_PATH
		const { stdout, stderr } = await exec(`cp -rf $LOCAL_PATH/ $CACHE_PATH/`);
		console.log(stdout);
		console.log(stderr);
	} catch (e) {
		console.error(e);
	}
})();
