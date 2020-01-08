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

Datatypes Conflictions
* synonyms bloat the language, similar names spread throught datatype oriented methods
* datatypes returned selection bloats naming & handling information

i.e. datatypes synonyms bloat society

// All rely on values exists or find value or contains value, etc.
// Input Args have diff syntaxes, which is just codebase complexity-stupidity

  Object.hasOwnProperty();
  String.includes();
  Array.includes();
  Map.has();
  Set.has();

solution

  // data = any relevant datatype

  find(data,value,handler);
  // or sugar syntax
  data.find(value,handler);
  
  // All of the synonyms method perform the same concept, tho return different values;
  // configurable programming can fix this.
  // handler is return as datatype-option or callback, or found value
  // The configurable programming would have somekind of transpiler that removes 
  // the extra conditional processing caused by the inputs. The whole point is to make the coding as loopable as possible.


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

// ALL WORDS PRELISTED INSIDE OF NAMESPACE NEED ROOT MEANING EXAMINATION
//// look for words that double meaning like "task"  ... I task(you, with this) what is my task:{} like a method & data packet

//// clever functional naming system ////

multipurpose root     /////  post()      /// method // verb & nounish
objectable root       /////  post        /// { id, headers, msgs } .
action / doer         /////  poster .    /// Action class
state / past/finished /////  posted      /// Measureable States
plural                /////  posts       /// List Plurals
ables                 /////  postable    /// object building
undo / revert         /////  unpost      /// revert changes

const namespace = [
/** 
 * There should not be any reserved namespace. The namespace its self is reserved. No future timebomb confusions allowed.
*/
/** 
 * figureout the distinctions, agree on in uses for system
*/
"bit","data","memory","cache","ram","store / storage",
"bank",

"flood","blast","fill",
"flush"

"logic",

"create","read","update","delete",

"post","get","put","delete",

"bear",

"structure","interface","organization","anatomy","frame","template",

"protocol","packet","contract","message","compass","pack","head",
"form","model","scheme","",

"config","standard","custom",

"static","fixed",

"dynamic",

"event",

"flow", 

"cluster","batch","bundle","array","collection","heap","stack",

"constraint","validation","proof","test","proof","auth","guard","filter",

"request","response","reply","answer","ask",

"remote","network","contact"

"connect","link",

"disconnect", "seperate",

"transfer","transport","send","receive","import","export",

"scope","accessibility","permissions",

"language","compile","interpet","transpile",

"program","file","main","script",

"directory","catalogable","roster","book",

"referance","variable","dependency",

"input","ouput","param","arg","result","yield",

"condition","pivot","switches","case",""

"data","value",

"element","root","base","source","core","seed",

"cause","effect",

"singular","plural",
"uni","multi","poly",

"operate / operators","equation","function","method","lambda","function","procedure","instruction","routine","process","expression"

"action","

"task","job","purpose",

"service","utility","use",

"creational","structural","behavioral",

"synchronous","asynchronous","concurrency","distributed","parallel","sequence","serial",

"merge","join","combine","fuse","meld",
"split","sever",

"assemble", "build", "construct",

"compute","execute","invoke","call","run",

"stop","halt","kill",

"lock","freeze","seal",

"box","capsule","container","bubble",

"block",

"open","peel","crack",

"convert","translate","transform","modify",

"generate","factory","machine",

"hand / hanlder","control",

"loop","engine","cycle","brute"

"id","name","alias",

"properties","attributes","description",

"inherit","extend",

"begin","start","pre",
"dur",
"finish","end","post",

"boot","cold boot","hot boot",


"break", // used for breaking loops
"catch",

"observe   / observer   / observable", 
"subscribe / subscriber / subscribable"

"numer / numerver / numerable / numerate  / numerated / numerates / numers / numered",

"count / counter / countable / counterate / counterated / counterates / counters / counted"


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// 101 DUO NOUN VERBS to filter out to computer actions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


* "back" is not real. Computers always move forwards.  // direction("forw | back")
* 

design        FOR DIFFERENT USE CASE
divorce       PHYSCHOLOGICAL MIND FUCK
double        TERRIBLE, QUANTIFIABLE NEEDS NO WORDS
doubt         DEBATEABLE , COULD BE GOOD FOR "FAIL SAFE" TERMINOLOGY
dust          A SYNONYM FOR GARBAGE COLLECTION
estimate      FOR DIFF USE CASE
fish          FOR DIFF USE CASE
glue          FIND SYNONYMS
kick          FOR HIGHER LEVEL USE CASES
play          DEBATEABLE FIND SYNONYMS
train         FOR DIFFERENT USE CASE
bend          FIND SYNONYM
visit         UNKNOWN
wake          UNKNOWN
work          UNNKOWN
zone          FIND SYNONYMS
echo          FOR DIFF USE CASE
face          UNKNOWN

loan          DEBATEABLE
man           DEBATEABLE
permit        DEBATEABLE
trace         DEBATEABLE



];
