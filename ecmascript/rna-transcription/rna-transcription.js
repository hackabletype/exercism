class Transcriptor {
  constructor() {
    // set up what we're testing against
    this.nucleotides = /^[ACGT]$/;
  }

  toRna(dnaStrand) {
    // what does the conversion look like
    const conversion = { G: 'C', C: 'G', T: 'A', A: 'U' };
    let rna = '';

    // loop through char by char as there is overlap in the conversion table
    for (const nucleotide of dnaStrand) {
      if (this.nucleotides.test(nucleotide.toUpperCase())) {
        // do the thing
        rna += nucleotide.replace(this.nucleotides, s => conversion[s]);
      } else {
        // whoops, not a nucleotide
        throw new Error('Invalid input DNA.');
      }
    }
    return rna;
  }
}

module.exports = Transcriptor;
