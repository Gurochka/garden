module.exports = [{
  id: 1,
 
  commonType: 'Apple tree',
  commonKind: 'Granny Smith',

  plantingZone: [5, 9],
  winterHardiness: 'middle', // ( low / low-to-middle / middle / middle-to-high / high)
  matureHeigh: 3.5,

  isFruit: true,
  fruitSize: [250, 300],
  harvest: 10, // когда созревает
  harvestPeak: [5, 8],
  harvestStartingAge: 4,
  harvestUntilAge: 13,  
  isSelfFertile: true,  
  pollinators: [],  // plant ids
  
  commonDiseases: [], // diseases ids
  commonPests: []    // pests ids
}]