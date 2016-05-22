(function() {
  var solve = function(base, set, hash, code){
    return [Math.floor(hash/base), set[hash%base] + code]
  };
  var solvePuzzle = solve.bind(null, 37, "acdegilmnoprstuw");
  var puzzle = [956446786872726, ''], iterations = 9;
  while(iterations--)
    puzzle = solvePuzzle.apply(null, puzzle);
  console.log(puzzle);
})();
