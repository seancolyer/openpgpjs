if (typeof define !== 'undefined' && define.amd) {
  define([], function() {
    return openpgp;
  });
} else {
  this.openpgp = openpgp;
}


}());
