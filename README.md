# Codebrarian-namespace
Systemic Unique Naming Library AKA single word code dictionary

NAMING CONSTRAINTS
* unique entries; no duplicates
* overrides or tweaks names of programming language namespace ... possibly just prefixes everything with _$
* a-z characters only ... no symbols yet

Why?
* namespaces can be params
* namespaces can be variables
* namespaces are just anything with a name ... it roots names
* might as build automated functionality around reusable words


ABSTRACTIONS

interface namespaceOBJ {
  [index:name]: nameslot
}
interface nameslot {
  name:       string,
  notes:      string[],
  //datatype:   string,
  constraints:string[]
  
  //// nameslots thought out ////
  // why no datatype?
  // why constraints?
    // numerical differences matter 
    // key characteristics give away duplications or suggest missing attributes/props
  // how does the namespace aid the code translations, predictions, and error handling
  // how to deal with umbrella words
  // when are the words to specific
}
abstract namespace {
  // uses a list class
  // no duplications
  // 
}









const namespace = [
/** 
 * There should not be any reserved namespace. The namespace its self is reserved. No future timebomb confusions allowed.
*/
/** 
 * figureout the distinctions, agree on in uses for system
*/
"bit","data","memory","cache","ram","storage",

"logic",

"create","read","update","delete",

"post","get","put","delete",

"structure","interface","organization","anatomy","frame","template",

"protocol","packet","contract","message",

"constraint","validation","proof","test","proof","authentication",

"remote","network",

"transfer","transport","send","receive","import","export",

"scope","accessibility","permissions",

"language","compile","interpet","transpile",

"program","file","main"

"referance","variable","dependency",

"input","ouput","param","arg","result","yield",

"singular","plural",

"operate / operators","equation","function","method","lambda","function","procedure","instruction","routine",

"compute","execute","invoke","call",

"convert","translate","transform","modify",

"id","name","alias",

"properties","attributes",

"begin","start","finish","end","pre","dur","post",

];
