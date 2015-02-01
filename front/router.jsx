var Router = function () {

	var hashTable = {};

	var router = {
		on: bindRoute,
		start: start
	};

	function bindRoute (name, handler) {
		hashTable[name] = handler;
		return router;
	}

	function start () {
		window.addEventListener('hashchange', hashChangeListener);
		var currentHash = window.location.hash;
		handleHash(currentHash);
		return router;
	}

	function hashChangeListener (e) {
		var newHash = window.location.hash;
		console.log('started route change to', newHash);
		handleHash(newHash);
		e.preventDefault()
	}

	function handleHash (hash) {
		var handler = hashTable[hash];
		if (handler) {
			handler();
		}
	}

	return router;

};

var router = Router();

router.on('#/', function () {
	console.log('im in root');
});
router.on('#/authenticate', function () {
	//TODO: render here page. But in page render components
	React.render(<AuthenticationForm />, document.getElementById('container'));
	console.log('in auth');
});
router.start();
