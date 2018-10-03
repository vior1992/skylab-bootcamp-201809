/**
 * 
 * @param {test} tests
 */

function testSuite(tests) {
    tests.forEach(function(test) {
        try {
            test();
        } catch(err) {
            console.error(err.message);
        }
    })
}
