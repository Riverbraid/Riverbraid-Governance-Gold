const { verifyThreshold } = require('../threshold');

describe('Phase 8: Threshold Governance', () => {
  test('Approves when weight meets threshold', () => {
    const votes = [
      { id: 'verifier_1', weight: 10 },
      { id: 'verifier_2', weight: 15 }
    ];
    expect(verifyThreshold(votes, 25)).toBe(true);
  });

  test('Rejects when weight is insufficient (Fail-Closed)', () => {
    const votes = [{ id: 'verifier_1', weight: 10 }];
    expect(verifyThreshold(votes, 25)).toBe(false);
  });
});
