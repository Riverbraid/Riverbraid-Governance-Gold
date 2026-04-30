const { verifyThreshold } = require('./threshold');
const assert = require('assert');

try {
  assert.strictEqual(verifyThreshold([{weight: 20}, {weight: 5}], 25), true);
  assert.strictEqual(verifyThreshold([{weight: 10}], 25), false);
  console.log("Governance Threshold Logic: PASS");
} catch (e) {
  console.error("Governance Threshold Logic: FAIL", e);
  process.exit(1);
}
