const verifyThreshold = (votes, threshold) => {
  const totalWeight = votes.reduce((sum, v) => sum + v.weight, 0);
  return totalWeight >= threshold;
};

module.exports = { verifyThreshold };
