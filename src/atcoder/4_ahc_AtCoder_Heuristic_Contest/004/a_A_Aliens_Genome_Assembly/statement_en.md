
<div>

<span>

<span>

<div>

<section>

### **Story**

<p>
Human genetic information is recorded in DNA with a double helix structure and is represented by a very long string consisting of four characters, `A`, `G`, `C`, and `T`.
Recently, alien cells were found in a meteorite.
As a result of research, it was found that the genetic information of this alien is recorded in a <a href="https://en.wikipedia.org/wiki/Torus">torus</a>-shaped material and is represented as an $N\times N$matrix consisting of eight characters, `A`, `B`, `C`, `D`, `E`, `F`, `G`, and `H`.
Existing devices have failed to read this matrix directly, but they have succeeded in reading many one-dimensional subsequences that are contiguous vertically or horizontally.
Please estimate the matrix based on this information.
</p>

</section>

</div>

<div>

<section>

### **Problem Statement**

<p>
We define that a one-dimensional sequence $b=(b_0, \ldots, b_{k-1})$is a 
<strong>
subsequence
</strong>
of a matrix $a=(a_{i,j})_{0\leq i,j\leq N-1}$if and only if there exists $(i, j)$satisfying at least one of the following two conditions:
</p>

<ul>

<li>
For all $p=0,\ldots,k-1$, $b_p=a_{i,(j+p)\bmod N}$holds. (horizontal match)
</li>

<li>
For all $p=0,\ldots,k-1$, $b_p=a_{(i+p)\bmod N,j}$holds. (vertical match)
</li>

</ul>

<p>
Note that if the index is greater than or equal to $N$, we take the remainder divided by $N$(in other words, $a$is connected at the left and right ends, and the top and bottom ends).
</p>

<p>
Given $M$strings $s_1, \ldots, s_M$consisting of eight characters, `A`, `B`, $\ldots$, `H`, your goal is to find an $N\times N$matrix consisting of characters `A`, `B`, $\ldots$, `H`, or `.`which contains as many of the given strings as possible as subsequences.
Here, `.`indicates an empty.
</p>

</section>

</div>

<div>

<section>

### **Scoring**

<p>
Let $c$($\leq M$) be the number of $i$'s such that $s_i$is a subsequence of the output matrix, and let $d$($\leq N^2$) be the number of `.`contained in the output.
Then, you will obtain the following score.
</p>

<ul>

<li>
If $c<M$, $\mathrm{round}(10^8\times \frac{c}{M})$.
</li>

<li>
If $c=M$, $\mathrm{round}(10^8\times \frac{2 N^2}{2 N^2-d})$.
</li>

</ul>

<p>
If the output is illegal (not an $N\times N$matrix, or containing a character other than `A`, `B`, $\ldots$, `H`, `.`), it is judged as `WA`.
There are 100 test cases, and the score of a submission is the total score for each test case.
If you get a result other than `AC`for one or more test cases, the score of the submission will be zero. The highest score obtained during the contest time will determine the final ranking, and there will be no system test after the contest.
If more than one participant gets the same score, the ranking will be determined by the submission time of the submission that received that score.
</p>

</section>

</div>

---

<div>

<div>

<section>

### **Input**

<p>
Input is given from Standard Input in the following format:
</p>

<div>

$N$$M$$s_1$$\vdots$$s_M$
</div>

<ul>

<li>
$N$is fixed to 20 throughout all the test cases.
</li>

<li>
$M$is an integer satisfying $400\leq M\leq 800$.
</li>

<li>
Each $s_i$is a string consisting of characters `A`, `B`, $\ldots$, `H`, and its length is at least 2 and at most 12.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Output**

<p>
Output $N$lines, each containing a string of length exactly $N$consisting of characters `A`, `B`, $\ldots$, `H`, or `.`.
</p>

</section>

</div>

<div>

<section>

### **Input Generation**

<p>
Let $\mathrm{rand}(L,U)$be a function that generates a uniformly random integer between $L$and $U$, inclusive.
</p>

<p>
We first generate an $N\times N$matrix $a=(a_{i,j})_{0\leq i,j\leq N-1}$by generating each element uniformly randomly from `A`, `B`, $\ldots$, `H`.
We then generate a parameter $L=\mathrm{rand}(4, 10)$, which decides the average length of the strings, and the number of strings $M=\mathrm{rand}(400, 800)$.
We generate $M$strings $s_1,\ldots,s_M$by repeating the following process $M$times.
</p>

<p>
We generate two integers $i=\mathrm{rand}(0, N-1)$and $j=\mathrm{rand}(0, N-1)$representing a starting point, an integer $d=\mathrm{rand}(0,1)$representing a direction, and an integer $k=\mathrm{rand}(L-2, L+2)$representing the length of the string.
</p>

<ul>

<li>
If $d=0$, we choose a horizontal subsequence $(a_{i,j},a_{i,(j+1)\bmod N},\ldots,a_{i,(j+k-1)\bmod N})$.
</li>

<li>
If $d=1$, we choose a vertical subsequence $(a_{i,j},a_{(i+1)\bmod N,j},\ldots,a_{(i+k-1)\bmod N,j})$.
</li>

</ul>

</section>

</div>

<div>

<section>

### **Tools**

<ul>

<li>
<a href="https://img.atcoder.jp/ahc004/a45fa3f18ab177158bf5961b12872f93.zip">Inputs</a>: A set of 100 inputs (seed 0-99) for local testing, including the sample input (seed 0). These inputs are different from the actual test cases.
</li>

<li>
<a href="https://img.atcoder.jp/ahc004/a42b6f0655821d8b384b31377108e5512.html">Visualizer on the web</a>
</li>

<li>
<a href="https://img.atcoder.jp/ahc004/222362f13a30b1342bf79d0041bd4d39.zip">Input generator and visualizer</a>: If you want to use more inputs, or if you want to visualize your output locally, you can use this program. You need a compilation environment of <a href="https://www.rust-lang.org/ja">Rust language</a>.
</li>

</ul>

</section>

</div>

</div>

---

<div>

<section>

### **Sample Input 1**

<div>

20 742
AFHCGEH
HDBCHG
EAHC
ABHDG
DGAHHG
GAHHGB
DHBBEB
GEAD
GCEBD
GHGFGA
BHC
BAGCCB
CAF
HBGGC
AHEBA
FBGEB
GHGFGA
CFA
FEHB
GDCEFBE
BACEGGG
CBA
GEHDC
CFACHAF
ACGBA
CEE
AADDCCH
GGDHHHC
EDAEE
ECA
EBEED
BGCAH
AEAH
GFCGEH
CGAGHE
HAGEA
FEA
CEDHAG
EEH
AGHECFC
EFGDDA
DCCHGD
ADDHB
FCGF
BAGE
CFA
HBCE
CGFG
CEFECCB
BADEBDD
AGACG
DCAGGCE
HEHHDB
DDHDB
HCFFAB
HEBDADD
DGFCGFG
AFFFBCG
FCEAC
EGGG
DADDC
EDH
BHCAACH
GCE
HAHGB
BFFDAHE
CFAEAHC
ACCHE
BFH
CHDC
CFHDCB
DED
GACG
HECFCFE
FEAFEH
CADFGE
GCHD
BEEHEG
GDH
FBEHHB
FHAG
BGCAHDC
DCCCE
GDH
CCBA
GEH
EDEHH
HHDBCH
HGB
EHD
CFFABFC
DGG
DBHEC
GEAGCFE
CCGAGHE
DHAGAC
CCCGHH
CBBFFDA
EFA
DFGD
HDCAADD
HDCFC
GHECFCF
CCDDE
AFC
CCE
DAHD
FAGFCB
FEC
DHAGG
EGEFAG
CGDD
AACCHE
FFC
HED
FBCFFHD
BAGE
HEBD
GBBE
DHBCEFG
CAAAEAA
DBFG
GHCC
DEGGE
BCGCHD
EEA
BEE
ECG
DHHHCCA
CHD
GCDECG
FFCCFAE
HGH
EGFB
CFFEGE
GEADHAG
GBGDCHD
EFGC
BEHHB
DBECC
DCFF
CFE
DCADDHG
ADHAGGB
ABD
DAEEGF
DEG
CHFFHGH
CGAGH
FCCB
FHGHD
EBGCAHD
CFHDC
FEHB
FHC
CHGDHBB
EDBECCD
DCF
GBADEB
AAHF
CEFECC
DCGA
HAFHFE
HDCAAD
GDH
CEF
DCBDFDE
GDHHHCC
FCCC
GAGHE
CHFEE
GDD
HEDEHHD
BDD
HCAHC
EEH
GBG
HEDEG
GAFAHB
BBFHB
DGF
BCHGFCC
GCCFACH
FAGAE
DBFGDC
GHDD
GGE
FFFBCG
EGGGE
CCCEE
GABCHED
EDHA
EFAGA
FHDCAD
GGGD
DHBGGCC
DHAGACG
GECCH
FABFCD
GCC
CCE
EADHAG
EEHEG
FDAD
DFH
AFC
DCCCE
CGE
EBDCCC
GBDGEAB
CAHCBH
CGCHD
FGAEDDB
FAGAFAH
HEEFBDC
HAGGBAH
DCCEFEC
ADH
CHEDE
DAFHCG
BCFA
GDCBDF
HDC
FFGEH
EAEFHC
DDCHCA
GHGD
HGGGD
EGFCF
CADF
GGCCGA
CGDDAA
DDAACC
DDHDGG
GDHEDA
HEBDAD
DCGHG
EFHG
BHDGAA
ADDCCHG
FBGEBG
GFEGHE
CFAA
CFDE
FCBBG
BDCC
GBBEAFD
GDFCA
GHEDG
BDGEABH
ADCFGAE
HHGBCF
AAHAFHF
EDA
CHGDH
DDDFHEH
HDCA
CDCF
FCFH
CDGAH
CHEDEHH
CCBHEBD
FBC
HHDBC
CEE
FGCFA
CEBDCCC
BEAFDEF
HHDB
AEGECE
HHCCA
HDDHBCE
GEH
HBADFFB
BECC
GCAHDCA
DBAEEHD
DGAACA
EEH
EAFEHDC
FFHGHDD
BFEHB
AHDCAA
BADFF
CHCEDH
CGHAHG
CCCGHH
AEEGFED
DFGDDEF
GDDAAC
GEC
CDAC
GBDGEAB
HGCBFEH
CFA
CEBE
BHDGA
FHEHHD
BFHB
AGCDE
AFCDEDD
GGAA
FACAA
EDA
CCG
EHFBCF
HGBBEA
AGFCB
EAADBA
CFAEAH
AAHFCEA
EEG
DGBGD
GDHHH
HHCCAC
EAGDDHD
ECCHFE
GDBC
DCC
EFHDFEA
BBFF
FGBGF
HDBBEFD
FCC
EBGBG
ADDH
EBDCCCE
EGG
EDH
DEFHGB
DHCDE
DCH
HGBGE
BAAHFC
DGGAAF
DGFC
AEFHCCF
EAFDE
HFBCF
DEEBEAD
FDE
CCD
FCGFGB
EGGE
EDE
GCDECGD
EBF
EGGGEB
HEDAE
CEBE
GDHBB
DABDEA
HGCBFE
HDCADD
DEGFBAG
DFBEEH
GBDGEA
GCEGGGE
ADHAGG
GDDADA
FGBG
HBCE
AGFCEEA
DCF
BEHHBG
DFGEA
DCHDABD
ADCFG
BEHHB
DHBGGC
ADFGEAD
DDH
BEBGC
BFEH
GHH
FFBCG
BDDB
HDCADD
AHF
GGD
FFDAHE
EGBEEHE
BBGDEE
EFCF
CGFGB
GCFE
CEEF
HFBG
CCGA
FFDAHEE
GBGE
GBGDCHD
FGDC
GCEBDC
FGBGFCE
EFBDCG
AACC
CBHCAAC
GDDAD
AAHA
GAFF
CBAAHFC
GAF
GAFAHBE
CCGAG
DHA
CEA
BCEFGCF
CEDCAGG
HFB
AGHGCB
AADD
BCGC
EDCA
GCF
BEADECD
AHDBEA
FBCG
GHCCE
EBDC
DCAD
AGCD
FHFEDB
FCE
FEAADDH
BGC
GGEBD
EABGF
AGE
CGDBC
FEAFEHD
CGH
DABDEA
CAHCB
EDFGDDE
DAA
EAGAFF
DAH
AFAHBE
DCBA
DCB
BGC
FFHDC
FAGFCB
ECFCF
CFAAFFF
HGHDDCH
BGCB
AHDB
BACE
FCCD
ACEDDHD
CEF
BFEH
EGBFEA
GEHFBC
GBDGA
HGCEG
DBCFHA
ADE
CGHG
GDHHHCC
GFG
DHEDAE
ECEEA
BHCHCE
HAF
FCEE
CCBAG
CEGGGE
DDCHCAH
EFHC
AED
FGBGFCE
HEG
AEE
BGEBGBG
ADDHBG
GFGABC
GDEC
BGEBGB
EAEF
BBG
GBGDH
FCGEH
BEEHEG
EACBCEG
GEAB
GBFE
HDAB
EEDAF
ACBCEG
FEGHEDG
HCAAC
HFBGEBG
HGCBF
GEBGBG
BAAHA
EBEED
CCEFAGA
BAD
FHBGDEG
AACAAA
EGF
AEF
ECEG
AGGCEBD
CEBDCCC
DCCEF
FGAB
HGDFCAA
AACGBD
AAGFC
AHC
FEBCC
EDE
BBGDEED
AACC
CAAC
EGDCE
DCFFGEH
BCEG
CEDHAG
GHE
AFCD
BGCBBFH
DHBCEF
BGBGD
DECGDDA
HDBAGEC
HGCBFEH
HHDBCHG
AGDDHD
EECGHA
DDF
DHB
EEB
HEBDA
DEDDH
EEFFAG
HCHCED
DDAAC
EEHAGEA
EFA
HCC
CCFDEE
FCFHDC
GHED
DFBE
EADHAGG
GGEB
AGHGC
HBBEBG
AHDCAA
CCGAG
HGBGEE
FEEF
EECGHA
CCHED
ECGHAHG
EEDAFH
FBAGCDE
HAGACG
FAGA
DBH
HEBDA
HHCCACE
BEBGCAH
HDDH
FFECHD
HDAB
DACAF
AEEHAGE
GFCG
HDDDF
HHDBA
HGFGA
HDF
CCHGD
AGGBA
DBAGE
GGAAFF
GDBC
CHDABD
FFB
DHBB
BDAH
DDH
HDF
GAED
EADECDC
DDBA
AAGFCEE
EGFBAGC
DDCCEF
GFC
CGF
HDFE
BDCCCE
HGD
EEFB
CCACED
EAFDEF
HDCFCE
BBEF
FAG
HBEGBE
EDAEE
FHE
CGH
FGDEC
AEA
CAAD
DCF
DDBH
GBGDCH
AAGFC
DCB
DEBAA
BEFDADC
ECEBE
GHGD
EDEGFBA
DBCFH
AFA
FGC
DABD
DDCC
AAHAFH
FCFEA
DBHCH
BBEB
AGDD
CCGA
DGACG
EBCCED
FEGHE
DBA
GFCEEAG
FFHDCA
HDCG
FBCGC
FFGEHDC
CFEA
FDEBA
EADCBA
CCBAGC
FHCGEH
ADEBFCB
DCFFGEH
CEDD
HECFC
GGCEBD
GGG
EBGCA
FGEHD
DDCH
EGECEDC
CHD
FACH
EGEFA
GFEDHFB
FFEG
ECCB
DBAGEC
EEFG
AGE
CHCAH
AHEB
GBD
AHE
GAGHEC
CEACBCE
DBCFHAG
FCEA
DAH
CACED
CCHFEE
ACEDD
CBFEHBA
CBC
BFCDG
EGHCCE
DDFBE
EAGCF
FFE
AFFECHD
AHH
HAF
HHB
HFBGEBG
CDDEG
CCCEEA
CCFFE
ABFCDGA
CGCHDD
EEAADBA
ACEDDHD
BACEG
FEB
FECHDC
FCEEF
FHG
AEFH
HFEDB
AFFE
GFG
EGFBA
BEEHEG
AACCH
AEDDB
EAFD
DBAC
GBGDHED
FHB
BHDG
HDCG
EDGB
EDDHDBA
FCB
CFHAGH
GFED
FCCDBF
ABG
CHFEE
DBBEFD
FAEEHAG
EBFC
FGDECE
CDGAH
DAC
GEHDC
BEFDADC
GBGF
EECG
CEEAAD
EHHBGC
GAEDFCC
HAFH
EAAGF
CAFC
EHH

</div>

</section>

</div>

<div>

<section>

### **Sample Output 1**

<div>

FFGAEEABCE.CBAEBH.C.
EHBFHCGHFGA.G.AE.AAC
.GBAED.ACHBDG.GDGG.C
DDFADEGGBDEFFACBB.FA
.EFBFGEEDGHBCGCEDEEB
HAAHBDAGBCCE.CCADAFH
GAFFE.G.CBEG.F.DDCEE
ACE.F.GDAAGH.DHECDBA
DAFB.HHFBABHEBBBD.CE
EGFFHDGEHFBAB.DECADA
DEAHCFGG..CG.BGDBBEC
.CBAGCAFCDEBGACEHF.D
GG.CGFA.GHGHG.GG.EHH
CECG.G.DGBCCAACFCDH.
FB.DH.F.CEHEH.CGGHFB
ADHCH.HCCBFGBADFBACE
CE.EHC.AAGADC.FAAEFB
ED.F..HGEACAHACFGAGG
AADAABC.CA.GF.CADCAF
CFAHEFGCA.CFGFGECBCH

</div>

</section>

</div>

</span>

</span>

</div>
