var Router = function () {

	var hashTable = {};

	var otherwiseHash = null;

	var router = {
		on: bindRoute,
		start: start,
		otherwise: otherwise
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

	function otherwise (hash) {
		otherwiseHash = hash;
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
		//var otherwiseHandler = hashTable[otherwiseHash];
		if (handler) {
			handler();
		} else if (otherwiseHash) {
			window.location.hash = otherwiseHash;
		}
	}

	return router;

};

var router = Router();

router
	.on('#/', function () {
		React.render(<div><h1>Welcome! This is root page!</h1></div>, document.getElementById('container'));
		console.log('im in root');
	})
	.on('#/authenticate', function () {
		//TODO: render here page. But in page render components
		React.render(<AuthenticationViewPage />, document.getElementById('container'));
		console.log('in auth');
	})
	.otherwise('#/');
router.start();
