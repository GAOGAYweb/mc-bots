const spawn = require('child_process').spawn;

var exports = module.exports;

exports.say = (msg) => {
	const chatterbot = spawn('python3', ['./chatter_bot.py', msg]);
	var sync = true;
	var response;
	chatterbot.stdout.on('data', (data) => {
		response = data;
		sync = false;
	});
	while (sync) require('deasync').sleep(100);
	return response.toString();
}

// console.log(exports.say('hi'));

// chatterbot.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// chatterbot.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// chatterbot.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });