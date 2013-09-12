chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
          'width': 400,
          'height': 500
        }
    });

    chrome.notifications.create('break-reminder', {
        type: 'basic',
        title: 'Primary title',
        message: 'message',
        iconUrl: 'calculator-16.png'
    }, function done() {
        console.log('done');
    });
});
