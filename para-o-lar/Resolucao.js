class DnaTranscriber{
    toRna(dna){
        let rna = ''
        for (let i = 0; i < dna.length; i++) {
            if (dna.charAt(i) == 'G')
                rna = rna+'C'
            if (dna.charAt(i) == 'C')
                rna = rna+'G'
            if (dna.charAt(i) == 'T')
                rna = rna+'A'
            if (dna.charAt(i) == 'A')
                rna = rna+'U'
            
        }
        console.log(rna)
        return rna 
    }
}
const dnaTranscriber = new DnaTranscriber()
dnaTranscriber.toRna('C') //=> G
dnaTranscriber.toRna('G') //=> C
dnaTranscriber.toRna('A') //=> U
dnaTranscriber.toRna('T') //=> A
dnaTranscriber.toRna('ACGTGGTCTTAA')

