import{g as e}from"./index-31200106.js";import{r as D}from"./sql-8bae50a2.js";function C(I,R){for(var N=0;N<R.length;N++){const A=R[N];if(typeof A!="string"&&!Array.isArray(A)){for(const E in A)if(E!=="default"&&!(E in I)){const T=Object.getOwnPropertyDescriptor(A,E);T&&Object.defineProperty(I,E,T.get?T:{enumerable:!0,get:()=>A[E]})}}}return Object.freeze(Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}))}var O,r;function t(){if(r)return O;r=1;var I=D();O=R,R.displayName="plsql",R.aliases=[];function R(N){N.register(I),function(A){var E=A.languages.plsql=A.languages.extend("sql",{comment:[/\/\*[\s\S]*?\*\//,/--.*/]}),T=E.keyword;Array.isArray(T)||(T=E.keyword=[T]),T.unshift(/\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i);var S=E.operator;Array.isArray(S)||(S=E.operator=[S]),S.unshift(/:=/)}(N)}return O}var L=t();const U=e(L),a=C({__proto__:null,default:U},[L]);export{a as p};
