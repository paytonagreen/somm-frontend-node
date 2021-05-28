module.exports = {
  dateSeeds(seeds) {
    const datedSeeds = seeds.map((seed) => {
      const object = {
        ...seed,
        createdAt: new Date(Math.floor(new Date().getTime() / 1000)),
        updatedAt: new Date(Math.floor(new Date().getTime() / 1000)),
      };
      return object;
    });
    return datedSeeds;
  }
}
