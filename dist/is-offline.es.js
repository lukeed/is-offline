function check() {
	return Promise.resolve(!navigator.onLine);
}

function listen(evts, func, toAdd) {
	var fn = window[(toAdd ? 'add' : 'remove') + 'EventListener'];
	evts.split(' ').forEach(function (ev) {
		fn(ev, func);
	});
}

function watch(cb) {
	var fn = function (_) { return check().then(cb); };
	var listener = listen.bind(null, 'online offline', fn);
	listener(true);
	return function (_) {
		listener(false);
	}
}

export { watch };
export default check;
