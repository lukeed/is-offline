function listen(evts, func, toAdd) {
	var fn = window[(toAdd ? 'add' : 'remove') + 'EventListener'];
	evts.split(' ').forEach(function (ev) {
		fn(ev, func);
	});
}

export function check() {
	return Promise.resolve(!navigator.onLine);
}

export function watch(cb) {
	var listener = listen.bind(null, 'online offline', function () {
		return check().then(cb);
	});
	listener(true);
	return function () {
		listener(false);
	};
}
