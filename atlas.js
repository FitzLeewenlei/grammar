/* Navigation curriculum. Lesson IDs in content.js remain the stable progress keys. */
(() => {
  const lesson = id => `lesson:${id}`;
  const topicKey = id => `topic:${id}`;
  const topics = [];
  const topic = (id, module, title, en, definition, classification, usage, pitfalls, children, examples = []) => {
    topics.push({key: topicKey(id), kind:'topic', id, module, title, en, definition, classification, usage, pitfalls, children:children.map(lesson), examples});
  };
  topic('nouns','lexis','名词','Nouns','名词用来表示人、事物、地点、群体和抽象概念，可以在句中作主语、宾语、表语等成分。',
    ['普通名词与专有名词','具体名词与抽象名词','集体名词与物质名词','可数名词与不可数名词'],
    ['先判断具体含义和可数性，再决定冠词、数量词和单复数。','名词的数会影响主谓一致；所有格或 of 短语可表达所属关系。','常见考点：information / advice 的不可数用法、children 等不规则复数、名词所有格。'],
    ['不要写 an information 或 two advices；可借助 a piece of 表达数量。','复数名词不一定直接加 s，如 child → children。','词性与成分要分开：名词不只用来作主语。'],
    ['noun-types','countable','noun-plurals','possession']);
  topic('pronouns','lexis','代词','Pronouns','代词用来指代人、事物或其他信息，帮助避免不必要的重复。',
    ['人称代词：I / me','物主限定词与物主代词：my / mine','反身代词：myself','指示代词、不定代词和疑问代词'],
    ['根据在句中的作用选择主格、宾格等形式。','明确代词指向谁或什么，保持人称和数一致。'],
    ['my 后通常接名词，mine 可独立使用。','himself 不能随意替代普通主语 he。','it、they 等必须有清晰的指代对象。'],['pronouns']);
  topic('articles','lexis','冠词','Articles','冠词放在名词短语前，帮助说明所指对象是泛指、特指，还是无需冠词。',
    ['不定冠词 a / an','定冠词 the','零冠词'],
    ['先看名词是否可数、是否单数，再判断是否特指。','a 与 an 依据后面实际发音的起始音素选择。'],
    ['可数名词单数通常不能没有限定词。','an hour 与 a university 按发音判断。','不是所有专有名词都绝对不用 the。'],['articles']);
  topic('adjectives','lexis','形容词','Adjectives','形容词描述人或事物的性质、特征和状态，常作定语或表语。',
    ['作定语与作表语','原级、比较级与最高级','-ing 与 -ed 形容词'],
    ['a careful driver 中 careful 修饰名词；The driver is careful 中作表语。','比较时同时检查比较对象、形式及 than / as 等结构。'],
    ['修饰动作通常需要副词，不能只按中文意思选择词形。','bored 表示感受，boring 描述令人无聊的特征。','不要把 more 与已有 -er 的比较级重复叠加。'],['adjadv','ing-ed','comparison']);
  topic('adverbs','lexis','副词','Adverbs','副词常修饰动词、形容词、其他副词或整句话，补充方式、时间、频率、程度等信息。',
    ['方式与程度副词','时间、地点与频率副词','修饰整句的副词'],
    ['频率副词的位置要结合实义动词、be 和助动词。','程度副词可修饰形容词或副词，如 very carefully。'],
    ['不是所有副词都以 -ly 结尾，如 fast。','hard 与 hardly 的意思不同。','good 是形容词；描述做得好通常用 well。'],['degree-order'],[
      {en:'She speaks very clearly.',zh:'她说话非常清楚。',note:'clearly 修饰 speaks，very 再修饰 clearly。'},
      {en:'He is usually on time.',zh:'他通常准时。',note:'usually 在这里放在 be 后面。'}]);
  topic('prepositions','lexis','介词','Prepositions','介词与其后的名词性成分组成介词短语，表示时间、地点、方向、方式等关系。',
    ['时间介词','地点与方向介词','方式、原因等介词','固定搭配中的介词'],
    ['把介词和搭配对象一起学习，如 interested in、depend on。','介词后接动词时通常用 -ing 形式。'],
    ['介词 to 不等于不定式符号 to。','at / in / on 不能只靠一个中文译词判断。','介词搭配需要结合实际词组核实。'],['prepositions']);
  topic('conjunctions','lexis','连词','Conjunctions','连词连接词、短语或分句，表示并列、转折、原因、条件等关系。',
    ['并列连词：and / but / or','从属连词：because / although / if','关联连词：either ... or ...'],
    ['先看要连接的成分是否处于同一层级。','从属连词引出从句，通常仍需要主句使表达完整。'],
    ['同一逻辑层级不要重复使用 although 与 but。','不能仅用逗号连接两个独立分句。','关联结构两侧要保持功能和层次相称。'],['conjunction-types','coordination']);
  topic('verbs','lexis','动词','Verbs','动词表达动作或状态，是构成谓语的核心；不同类别决定其后可以接什么结构。',
    ['实义动词：及物与不及物','系动词','助动词','情态动词','短语动词'],
    ['先找谓语，再判断宾语、表语和其他补足成分。','情态动词后通常接动词原形；时态、语态与非谓语用法在对应模块继续学习。'],
    ['can 后不加 to，也不把原形改为第三人称单数。','不及物用法不能任意添加直接宾语或套被动。','be / do / have 可有不同身份，要结合句子判断。'],['auxiliaries','can','must','should','phrasal']);
  topic('numerals','lexis','数词','Numerals','数词表示数量或顺序。基数词回答“多少”，序数词回答“第几”。',
    ['基数词','序数词','分数、百分数与倍数表达','相关数量词'],
    ['表达明确数量和泛指数量时，hundred 等词的结构不同。','数量表达作主语时，要结合所指名词或整体意义选择谓语。'],
    ['two hundred 不加 s；hundreds of 用于泛指。','my first book 前不再额外加 the。','分数和百分数后谓语不能只看数字形式。'],['numerals','quantifiers']);
  topic('interjections','lexis','感叹词','Interjections','感叹词直接表达惊讶、赞叹、疼痛等情绪，通常独立于句子主干。',
    ['惊讶或赞叹：oh / wow','疼痛：ouch','招呼或提示等语用表达'],
    ['根据情境和语调理解情绪强度。','感叹词可以用逗号或感叹号与后面的句子分开。'],
    ['感叹词和感叹句不是同一概念。','不要把感叹词误当作主语或谓语。','正式写作中避免无必要地堆叠感叹词。'],['interjections']);
  topic('sentence-structure','syntax','句子结构','Sentence structure','从结构看，句子可以由一个独立分句、多个并列分句或主从分句构成。',
    ['简单句','并列句','主从复合句'],
    ['先确定每个谓语所对应的主语，再判断分句之间的连接。','句子长短不直接决定结构类型。'],
    ['有多个单词或短语不等于有多个独立分句。','逗号本身通常不能连接两个独立句。','从句往往依赖主句，不能随意独立成句。'],['coordination']);
  topic('adverbial','clauses','状语从句','Adverbial clauses','状语从句在句中补充时间、地点、原因、条件、让步、目的、结果、比较或方式等信息。',
    ['时间与地点','原因、条件与让步','目的与结果','比较与方式'],
    ['引导词的含义要和上下文逻辑相符。','表示将来的时间、条件状语从句，常用现在形式。'],
    ['“主将从现”不是所有 if 或 when 从句的通用公式。','because 与 so、although 与 but 不要机械重复。','unless 自带否定条件含义。'],['real-if','future-time','time-connectors','contrast','purpose-result']);
  topic('relative','clauses','定语从句','Relative clauses','定语从句修饰名词或代词，关系词既连接从句，也在从句中承担相应作用。',
    ['限制性与非限制性','关系代词','关系副词','介词加关系代词'],
    ['先看从句缺少的成分，再结合先行词选择关系词。','用逗号和语境区分必要限定与补充说明。'],
    ['先行词表示地点，不代表一定用 where。','that 不引导非限制性定语从句。','关系词省略必须满足具体结构条件。'],['relative-pronouns','relative-adverbs','relative-omit','relative-extra']);
  topic('nominal','clauses','名词性从句','Noun clauses','名词性从句在句中承担类似名词的作用，可以作主语、宾语、表语或同位语。',
    ['主语从句','宾语从句','表语从句','同位语从句'],
    ['先判断从句在主句中的作用，再选择连接词。','从句通常采用陈述语序，连接词是否充当成分要分别判断。'],
    ['that 与 what 的句法作用不同。','表达“是否”时，whether 与 if 的可用范围不同。','同位语从句解释内容，不是像定语从句那样修饰先行词。'],['subject-clause','objects','predicative','appositive']);
  topic('conditionals','subjunctive','虚拟条件','Unreal conditionals','非真实条件表达与现实有距离的假设，动词形式需要对应现在、过去或将来的假设时间。',
    ['与现在事实相反','对过去的反事实','对将来的假设','错综时间条件句与含蓄条件'],
    ['先判断假设所指时间，再决定从句和主句的动词形式。','主从句可能指向不同时间，不能只靠一个时间词机械配对。'],
    ['if 后的过去形式不一定表示过去时间。','过去反事实常用 had done 与 would have done。','真实条件句不能直接照搬非真实条件的形式。'],['unreal']);
  const errorTopic=(id,title,definition,wrong,right,note,children,extra=[])=>topic(id,'writing',title,'Writing checkpoint',definition,
    ['识别错误','还原结构','改写并核对'],[note,...extra],['先检查完整句法结构，再处理词形和标点。',`易错写法：${wrong}`],children,[{en:right,zh:'改写后的表达',note}]);
  errorTopic('fragments','句子成分残缺','正式写作中的完整句通常需要独立主句，不能只留下一个依附成分。','Because I was tired.','I went home because I was tired.','because 从句依附主句；补上主句后表达完整。',['skeleton']);
  errorTopic('runons','逗号拼接与粘连句','两个独立分句需要合适的连接方式，通常不能仅靠一个逗号拼接。','I was tired, I went home.','I was tired, so I went home.','可以用句号、分号或合适的并列连词明确分句关系。',['coordination']);
  errorTopic('article-errors','冠词遗漏与误用','冠词错误常源于忽略单数可数名词、发音或特指语境。','She is teacher.','She is a teacher.','单数可数名词 teacher 在这里需要限定词 a。',['articles']);
  errorTopic('pronoun-errors','代词指代不清','代词的人称、数和具体指向应让读者能够清楚判断。','When Anna met Lily, she was worried.','Anna was worried when she met Lily.','明确担心的人是 Anna，可减少 she 指向谁的歧义。',['pronouns']);
  errorTopic('tense-errors','时态前后不一致','同一叙事中应建立清楚的时间线，避免没有理由地改变时态。','Yesterday I go to school and met Tom.','Yesterday I went to school and met Tom.','yesterday 指向过去，这两个并列动作都用过去形式。',['past','past-perfect']);
  errorTopic('wordform-errors','非谓语形式误用','动词后的形式由搭配和句法功能共同决定，不能随意在原形、to do 和 doing 之间替换。','She enjoys to read.','She enjoys reading.','enjoy 后通常接动名词，而不是 to do。',['verb-choice','gerund','participles']);
  errorTopic('agreement-errors','写作中的主谓搭配','写长主语时，需要找到真正的主语中心，而不是让谓语跟随最近的名词。','The list of names are long.','The list of names is long.','中心词 list 为单数，of names 是修饰语，所以用 is。',['agreement','agreement-nearest']);

  const modules = [
    {id:'lexis',title:'词法',en:'Lexis',color:'#839caf',children:['nouns','pronouns','articles','adjectives','adverbs','prepositions','conjunctions','verbs','numerals','interjections'].map(topicKey)},
    {id:'syntax',title:'句法',en:'Syntax',color:'#8c9fb4',children:[lesson('skeleton'),topicKey('sentence-structure'),lesson('questions'),lesson('there-be'),lesson('reported'),lesson('emphasis')]},
    {id:'tenses',title:'时态',en:'Tenses',color:'#7896aa',children:['present','continuous','past','past-cont','perfect','perf-cont','past-perfect','future'].map(lesson)},
    {id:'voice',title:'语态',en:'Voice',color:'#9ba6af',children:['active-voice','passive'].map(lesson)},
    {id:'clauses',title:'从句',en:'Clauses',color:'#9d9bb4',children:['adverbial','relative','nominal'].map(topicKey)},
    {id:'nonfinite',title:'非谓语',en:'Non-finite verbs',color:'#8fa69f',children:['infinitive','gerund','verb-choice','object-complement','prep-to','participles'].map(lesson)},
    {id:'agreement',title:'主谓一致',en:'Agreement',color:'#a49aab',children:['agreement','agreement-meaning','agreement-nearest'].map(lesson)},
    {id:'inversion',title:'倒装',en:'Inversion',color:'#8da0ae',children:['inversion-full','inversion-partial','inversion-conditional','inversion'].map(lesson)},
    {id:'subjunctive',title:'虚拟语气',en:'Subjunctive',color:'#b0a18f',children:[topicKey('conditionals'),lesson('wish'),lesson('subjunctive-suggestions')]},
    {id:'writing',title:'写作常见错误',en:'Writing checkpoints',color:'#ae969f',children:['fragments','runons','article-errors','pronoun-errors','tense-errors','wordform-errors','agreement-errors'].map(topicKey).concat(lesson('parallelism'))}
  ].map(m=>({...m,key:`module:${m.id}`,kind:'module'}));

  const classification = {
    skeleton:['句子成分','五种基本句型'],auxiliaries:['be','do','have'],questions:['一般疑问句','特殊疑问句','陈述语序'],passive:['一般时被动','进行时被动','完成时被动','情态动词被动'],agreement:['语法一致','主语中心词','特殊主语'],
    present:['习惯','事实与状态','第三人称单数'],continuous:['正在发生','暂时安排','将来安排'],past:['过去动作','过去状态'], 'past-cont':['过去正在进行','背景动作'],perfect:['经历','结果','持续至今'],'perf-cont':['持续活动','近期活动'],'past-perfect':['过去之前完成','过去时间的先后'],future:['will','be going to','将来进行与完成'],
    can:['能力','许可','委婉请求'],must:['必要','禁止','肯定推测'],should:['建议','责任','合理预期'],'real-if':['真实条件','一般规律','unless'],unreal:['现在反事实','过去反事实','wish'],infinitive:['作句子成分','表达目的','省略 to'],gerund:['作主语','作宾语','介词后用法'],'verb-choice':['remember','stop','try / need'],'object-complement':['宾语加 to do','使役动词','感官动词'],'prep-to':['介词 to','不定式 to'],participles:['现在分词','过去分词','分词短语'],
    countable:['可数名词','不可数名词','单位表达'],articles:['a / an','the','零冠词'],possession:['名词所有格','of 结构','名词修饰'],pronouns:['人称','物主','反身与指示'],quantifiers:['many / much','few / little','数量限定'],adjadv:['形容词用法','副词用法'],'ing-ed':['描述特征','表达感受'],comparison:['比较级','最高级','as ... as'],'degree-order':['程度','频率','位置'],
    'relative-pronouns':['who / whom','which / that'],'relative-adverbs':['where','when / why','whose'],'relative-omit':['关系词省略','分词简化'],'relative-extra':['限制性','非限制性'],objects:['that 从句','疑问词从句','whether / if'],'subject-clause':['从句作主语','形式主语'],predicative:['系动词后从句','连接词选择'],appositive:['名词同位语','同位语从句'],
    'future-time':['时间从句','条件从句','使用边界'],'time-connectors':['when / while','until','since'],contrast:['原因','让步','转折'],'purpose-result':['目的','结果'],coordination:['词与短语并列','分句并列'],prepositions:['时间','地点','固定搭配'],phrasal:['动词加小品词','宾语位置'],reported:['陈述转述','疑问转述','时间与指代'],inversion:['完全倒装','部分倒装','条件倒装'],'there-be':['单数与复数','否定与疑问','时态变化'],'subjunctive-suggestions':['建议','要求与命令','否定与被动'],emphasis:['it 强调句','do 谓语强调'],
    'noun-types':['普通与专有','具体与抽象','集体与物质'],'noun-plurals':['规则变化','不规则变化','不可数名词'],numerals:['基数词','序数词','数量表达'],interjections:['情绪','句法独立性','文体'],'conjunction-types':['并列','从属','关联'],'active-voice':['执行者作主语','时态与语态'],'agreement-meaning':['整体数量','集体名词','分数与百分数'],'agreement-nearest':['either ... or','neither ... nor','not only ... but also'],'inversion-full':['谓语整体前置','地点与方向','代词例外'],'inversion-partial':['否定状语','only 加状语','助动词前置'],'inversion-conditional':['had 前置','were 前置','should 前置'],wish:['现在愿望','过去遗憾','期待改变'],parallelism:['动词并列','关联结构','句法层级']
  };
  const nodes = new Map();
  modules.forEach(m=>nodes.set(m.key,m));
  topics.forEach(t=>nodes.set(t.key,t));
  window.GRAMMAR.lessons.forEach(l=>nodes.set(lesson(l.id),{
    key:lesson(l.id),kind:'lesson',id:l.id,title:l.title,en:l.en,children:[],lesson:l,
    definition:l.steps[0].t,classification:classification[l.id]||[],usage:l.steps.slice(1).map(s=>`${s.h}：${s.t}`),
    pitfalls:l.quiz.map(q=>({title:q.prompt,text:q.why})),examples:l.examples
  }));
  const parent = new Map(), owner = new Map();
  function visit(key, mod, ancestry=new Set()) {
    if(ancestry.has(key))throw Error(`Cycle in atlas: ${key}`);
    const n=nodes.get(key);if(!n)throw Error(`Unknown atlas node: ${key}`);
    if(!owner.has(key))owner.set(key,mod);
    const next=new Set(ancestry).add(key);
    for(const child of n.children){if(!parent.has(child))parent.set(child,key);visit(child,mod,next);}
  }
  modules.forEach(m=>visit(m.key,m.id));
  const knowledge=[...nodes.values()].filter(n=>n.kind!=='module');
  function descendants(key, kind) {
    const result=new Set(),seen=new Set();
    function walk(k){if(seen.has(k))return;seen.add(k);const n=nodes.get(k);if(!n)return;if(!kind||n.kind===kind)result.add(k);n.children.forEach(walk);}
    if(key==='root')modules.forEach(m=>walk(m.key));else walk(key);
    return [...result];
  }
  function path(key){const out=[];while(nodes.has(key)){out.unshift(key);key=parent.get(key);}return out;}
  function examplesFor(key){const n=nodes.get(key);if(n.examples?.length)return n.examples;return descendants(key,'lesson').flatMap(k=>nodes.get(k).examples).slice(0,2);}
  window.ATLAS={modules,topics,nodes,knowledge,parent,owner,get:key=>nodes.get(key),path,descendants,examplesFor,
    lessonKeys:key=>descendants(key,'lesson'),storageKey:key=>nodes.get(key)?.kind==='lesson'?nodes.get(key).id:key,
    fromStorage:key=>nodes.has(key)?key:nodes.has(lesson(key))?lesson(key):null};
})();
