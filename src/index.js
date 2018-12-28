function listen(fn, action) {
	action = window[action + 'EventListener'];
	action('offline', fn);
	action('online', fn);
}

export function check() {
	return Promise.resolve(!navigator.onLine);
}

export function watch(cb) {
	function checker() {
		return check().then(cb);
	}
	listen(checker, 'add');
	return function () {
		listen(checker, 'remove');
	};
}
