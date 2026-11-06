/* Clickable lexical subtypes, extending the stable lesson catalogue. */
(() => {
  const details={};
  function item(id,title,en,formula,take,steps,examples,quiz,classification,pitfalls,related=[]){
    add('parts',id,title,en,'基础与进阶','参考《英语语法知识体系详解》· 词性细分；补充讲解与练习',formula,take,steps,examples,quiz,related);
    details[id]={classification,pitfalls};
  }
  item('pronoun-personal','人称代词与主格、宾格','Personal pronouns & case','I / me；he / him；she / her；we / us；they / them','先判断代词在句中的作用，再选择形式。',[
    ['主格用来组织主语','I、you、he、she、it、we、they 常作主语：She called me. 中 She 是打电话的人。复数主语可以由代词与名词并列构成，如 Leo and I are ready，不能因为前面有 and 就改用 me 作正式书面主语。'],
    ['宾格用于动词和介词之后','me、you、him、her、it、us、them 常作宾语，如 Please help us 和 between you and me。先把包含并列结构的复杂短语还原为单独代词，有助于检查格：for Anna and me 中 me 仍是介词 for 的宾语。'],
    ['指代与一致同时核对','代词要有可辨认的所指对象，并在人称、数和谓语形式上配合。单数 they 可指性别未知、不必说明或使用该代词的一个人；仍说 they are、they have，不能因为所指只有一人就写 they is。'],
    ['语域差别不等于固定错误','独立简答和 be 后的代词形式会受语域影响，如 Who is there?—Me.、It is me 在日常英语中很常见。不能把“主格作主语”的规则机械扩展为“句首或 be 后永远只能用主格”。']
  ],[
    ['She sent the photographs to us.','她把照片发给了我们。','She 作主语用主格；us 是介词 to 的宾语，用宾格。'],
    ['Someone has left their umbrella; they may come back for it.','有人落下了伞；那个人可能会回来取。','their / they 可指性别不明的单个人；it 指前文那把伞。']
  ],[
    mc('正式书面句中，哪一种主语形式合适？',['Leo and I are ready.','Leo and me are ready.','Leo and us is ready.','Leo and him is ready.'],0,'并列主语中的人称代词在正式书面表达中用主格 I，整个并列主语配 are。'),
    fill('I spoke to ____ (she) after class.','her','to 后的人称代词作介词宾语，使用宾格 her。'),
    mc('Someone may need help. 后用单数 they 指这个人，哪种形式正确？',['They is waiting.','They are waiting.','They am waiting.','Them are waiting.'],1,'单数 they 指一个人时仍与 are 等形式搭配，不能改成 they is。')
  ],['人称与数','主格','宾格','单数 they 与语域'],[
    {title:'介词后用宾格',wrong:'Please wait for I.',right:'Please wait for me.',text:'for 后的人称代词作介词宾语，需要 me，而不是主格 I。'},
    {title:'单数 they 的谓语形式',wrong:'Someone called, but they is not here now.',right:'Someone called, but they are not here now.',text:'这里 they 指前面的某个人；即使所指为单数，they 仍配 are。'}
  ],['pronouns','agreement']);
  item('pronoun-possessive','物主限定词与物主代词','Possessive determiners & pronouns','my book ↔ mine；her coat ↔ hers；our room ↔ ours','名词是否已经出现，决定用限定形式还是独立形式。',[
    ['名词前用物主限定词','my、your、his、her、its、our、their 放在名词或名词短语前，限定所属关系，如 her new coat。传统教学常称它们为形容词性物主代词；按功能分类时，物主限定词这个名称能更清楚地表明其作用。'],
    ['独立使用物主代词','mine、yours、his、hers、ours、theirs 可替代已知的“物主限定词＋名词”，如 Your bag is blue; mine is black。mine 已包含“我的包”的意义，不能再写 mine bag；his 在两种结构中形式相同。'],
    ['限定词不能随意叠放','普通名词短语中，my、the、this 等主要限定词通常不能直接叠加。因此不用 the my notebook；可以说 my notebook、this notebook 或 this notebook of mine。最后一种结构中的 mine 仍然独立表示所属。'],
    ['物主形式的拼写与所指','hers、ours、yours、theirs 不加所有格撇号；its 表所属，it’s 通常是 it is 或 it has 的缩写。物主形式主要由拥有者决定，如 Anna has two cats. Her cats...，不能根据 cats 是复数而改成 their。']
  ],[
    ['This is our classroom, and that one is theirs.','这是我们的教室，那间是他们的。','our 限定 classroom；theirs 替代 their classroom。'],
    ['A colleague of mine lent me her dictionary.','我的一位同事把她的词典借给了我。','of mine 表示所属关系；her 后面仍接名词 dictionary。']
  ],[
    mc('“我的这本书”可自然表达为：',['the my book','this book of mine','mine this book','this book of my'],1,'this book of mine 避免 this 与 my 直接叠加，mine 独立表示“我的”。'),
    fill('That coat belongs to Anna. It is ____ (her).','hers','空格后没有被限定的名词，要用独立的物主代词 hers。'),
    mc('哪个物主表达的拼写正确？',['our’s','her’s','theirs','your’s'],2,'ours、hers、yours、theirs 这些物主代词均不加撇号。')
  ],['名词前的限定形式','独立的物主代词','双重所有格','its 与 it’s'],[
    {title:'独立形式不能直接限定名词',wrong:'This is mine notebook.',right:'This is my notebook.',text:'notebook 已明确出现，前面需要物主限定词 my；mine 应独立使用。'},
    {title:'物主代词不加撇号',wrong:'The blue folders are our’s.',right:'The blue folders are ours.',text:'ours 本身就是表示所属的独立代词，不再加所有格撇号。'}
  ],['pronouns','determiners','possession']);
  item('pronoun-reflexive','反身代词与相互代词','Reflexive & reciprocal pronouns','herself / themselves；each other / one another','反身表示回到同一主体，相互表示不同主体之间的往来。',[
    ['动作回到主语自身','myself、yourself、himself、herself、itself、ourselves、yourselves、themselves 可在主语与宾语为同一对象时使用。Anna introduced herself 中介绍的人与被介绍的人都是 Anna；Anna introduced her 则通常指另一个女性。'],
    ['用来强调亲自完成','反身代词也可作强调附加成分，如 I checked the figures myself，强调我亲自核对。去掉 myself 后 I checked the figures 仍是完整句；不要因此把它误当作宾语，真正的宾语是 the figures。'],
    ['相互与分别对自己不同','They congratulated each other 表示他们互相祝贺；They congratulated themselves 表示各自或共同为自身感到得意。each other 与 one another 在现代英语中有广泛重叠，不必机械地按两人或多人划分。'],
    ['固定搭配与使用边界','by oneself 可表示独自、没有帮助，如 She learned by herself。普通及物用法中若宾语不是主语自身，要使用 him、her 等普通宾格。人称代词作普通独立主语时，也不能随意换成 myself 一类形式。']
  ],[
    ['Mina taught herself the basics of coding.','米娜自学了编程基础。','herself 与主语 Mina 指同一个人，是 taught 的宾语。'],
    ['The two partners checked each other’s calculations.','两位搭档互相核对对方的计算。','each other’s 表示相互的所属关系，核对的是对方的计算。']
  ],[
    fill('I cut ____ while preparing dinner.（误伤的是我自己；填反身代词）','myself','主语 I 与被割伤的人是同一人，需要反身代词 myself。'),
    mc('要明确表示“两位同学互相帮助”，应说：',['The two students helped each other.','The two students helped himself.','The two students helped itself.','The two students helped herself.'],0,'each other 表示不同对象之间的相互关系，其他选项的单数反身形式也不与复数主语一致。'),
    mc('I repaired the chair myself. 中 myself 主要表示：',['椅子的数量','我亲自完成','另一个人修理','必须替代 the chair'],1,'myself 在这里强调动作由我亲自完成，the chair 才是 repaired 的宾语。')
  ],['反身宾语','强调亲自','独自 by oneself','相互 each other'],[
    {title:'反身形式与主语配合',wrong:'I taught himself to swim.',right:'I taught myself to swim.',text:'表达“我自学游泳”时，反身代词与主语 I 对应，应使用 myself。'},
    {title:'不能任意替代普通主语',wrong:'Myself will send the report tomorrow.',right:'I will send the report tomorrow.',text:'这里需要普通人称代词作主语，标准书面表达用 I；myself 不能随意独立替代。'}
  ],['pronouns','pronoun-personal']);
  item('pronoun-indefinite','不定代词与范围','Indefinite pronouns & scope','someone / everyone / nothing；both / either / neither / none','先确定指代范围，再检查数、位置及否定含义。',[
    ['复合不定代词的基本结构','someone、anybody、everything、nothing 等通常按单数与谓语搭配，如 Everything is ready。修饰它们的形容词常后置，如 something useful，而不是 useful something；后面的代词指代则可根据语境使用单数 they。'],
    ['两者范围与多个对象','both 表两者都，either 表两者任一个，neither 表两者都不；all 与 none 可用于更大的集合。不要只把它们译成中文“都”就混用，尤其要注意 either / neither 与后面单数名词的常见结构。'],
    ['some、any 与实际语境','some 常见于肯定陈述，也可用于期待肯定回答的请求或提供，如 Would you like some tea?；any 常见于疑问、否定及自由选择意义。不能将“疑问句一律用 any”当成没有例外的规定。'],
    ['none 的一致与否定范围','none 的谓语可随所指名词、数的理解和语域而变化：None of the water is clean，None of the students were absent 都可成立。Not everyone agreed 只否定全体同意，不等于 No one agreed。']
  ],[
    ['Everyone is ready, and someone has brought extra paper.','大家都准备好了，而且有人带来了额外的纸。','Everyone、someone 在这些句子中分别配 is、has。'],
    ['Would you like something warm to drink?','你想喝点热饮吗？','提供饮品时可用 something；形容词 warm 放在其后。']
  ],[
    fill('Everything ____ ready for the meeting.（填 be 的一般现在时形式）','is','Everything 在这里作单数主语，一般现在时用 is。'),
    mc('请选择“不是什么人都同意”的准确解释。',['Not everyone agreed. 表示全员反对','Not everyone agreed. 表示并非全员同意','No one agreed. 表示全员同意','Everyone agreed. 表示无人同意'],1,'Not everyone 是部分否定；它否定“全员同意”，并不表示每个人都反对。'),
    mc('下列名词性表达中，形容词位置正确的是：',['interesting something','nothing useful','useful nothing','someone kindly person'],1,'修饰 nothing 等复合不定代词的形容词通常后置，所以说 nothing useful。')
  ],['复合不定代词','两者与多者','some / any','否定与数的一致'],[
    {title:'复合不定代词通常配单数谓语',wrong:'Everything are in the box.',right:'Everything is in the box.',text:'Everything 作主语时通常按单数处理，因此用 is。'},
    {title:'形容词后置',wrong:'I need useful something.',right:'I need something useful.',text:'something 的形容词修饰语通常放在后面，不套普通名词前的形容词位置。'}
  ],['pronouns','quantifiers','agreement']);
  item('pronoun-demonstrative','指示代词与指示限定词','Demonstratives','this / that；these / those','独立指代时作代词，带名词时发挥限定作用。',[
    ['距离与语篇中的指向','this、these 常用于较近、当前或将要展开的信息；that、those 常用于较远或前面提到的信息。所谓距离也可以是时间、心理或语篇距离，不能只理解为物体离说话者几米远。'],
    ['单数与复数形式','this、that 通常对应单数，these、those 对应复数，如 this notebook、those notebooks。作独立主语时也要配合谓语：This is useful，These are useful；不能只改变名词而不改变指示形式。'],
    ['代词与限定作用','This is my seat 中 This 独立指物，是代词；This seat is mine 中 This 后接中心名词 seat，起限定作用。词的形式相同，结构位置不同，不能因为都译成“这”就把成分也认成同一种。'],
    ['比较中的 that 与 those','that / those 可在比较中代替已知名词，以避免把事物和地点或所属者直接相比。The roads here are wider than those there 中 those 替代 roads；替代时仍须检查名词的数与比较对象。']
  ],[
    ['These are the notes that I took yesterday.','这些是我昨天做的笔记。','These 独立作复数主语，配 are；后面明确所指为多份笔记。'],
    ['The weather here is warmer than that in Oslo.','这里的天气比奥斯陆的暖和。','that 替代 weather，使比较发生在两地天气之间。']
  ],[
    fill('____ books belong to the library.（这些；填一个指示词）','These','books 是复数，表达“这些”用 These，不能用单数 this。'),
    mc('This notebook is new. 中 this 的作用是：',['独立替代整个主语短语','限定后面的 notebook','充当谓语动词','连接两个独立分句'],1,'this 后面紧接它限定的名词 notebook，属于名词前的限定用法。'),
    mc('哪一句的指示词与谓语配合正确？',['Those is my keys.','These are my keys.','This are my keys.','That are my key.'],1,'These 指复数对象，与 are 和复数 keys 配合。')
  ],['this / that 单数','these / those 复数','独立与名词前用法','比较替代'],[
    {title:'复数名词搭配复数指示形式',wrong:'This books are interesting.',right:'These books are interesting.',text:'books 是复数，表达“这些书”用 These，不使用单数 this。'},
    {title:'指示主语与谓语协调',wrong:'Those is the documents you requested.',right:'Those are the documents you requested.',text:'Those 作复数主语，当前陈述要配 are。'}
  ],['pronouns','determiners','comparison-clauses']);
  item('article-indefinite','不定冠词 a 与 an','Indefinite articles','a + 辅音起始音素；an + 元音起始音素','先看实际发音，再看是否为单数可数名词的泛指。',[
    ['一个不特定的成员','a / an 通常限定单数可数名词，表示某一个、某类中的一员或身份，如 a student。它不要求后面的名词是听者知道的具体对象；介绍第一次出现的人或物时，经常使用这种表达。'],
    ['依据相邻词的起始音素','a university 以辅音 /j/ 起始，an hour 的 h 不发音；an honest answer 中相邻的是 honest 的元音起始音素。不能按书写首字母是不是 a、e、i、o、u 来直接决定。'],
    ['缩写和修饰语也会改变选择','说 an MRI scan 是因为字母 M 读音以元音起始；说 a useful tool 是因为 useful 以 /j/ 起始。冠词与中心名词之间若有形容词，要判断紧接冠词的那个词的发音。'],
    ['不与普通不可数用法直接搭配','information、advice 等在通常意义上不可数，不直接说 an information；可说 a piece of information。同一名词若转为份数、种类等可数意义，又可能带 a，如 a coffee 表示一份咖啡。']
  ],[
    ['She gave me an honest answer and a useful suggestion.','她给了我一个诚实的回答和一条有用的建议。','honest 起始 h 不发音，useful 以 /j/ 起始，因而分别用 an、a。'],
    ['A visitor is waiting outside the office.','有一位访客在办公室外等候。','a 引入尚未明确身份的一位访客；visitor 是单数可数名词。']
  ],[
    mc('依据通常发音，哪一种搭配正确？',['an university','a hour','an honest answer','an useful map'],2,'honest 的 h 不发音，以元音音素起始，用 an；university、useful 则以辅音 /j/ 起始。'),
    fill('Her sister is ____ engineer.（首次泛指一位工程师，填不定冠词）','an','engineer 为单数可数名词且以元音音素起始，泛指身份时用 an。'),
    mc('“一条建议”在 advice 的通常不可数用法中应说：',['an advice','a piece of advice','a advice','one advices'],1,'advice 通常不可数，用 a piece of advice 表达一条建议。')
  ],['泛指成员与身份','发音选择','修饰语与缩写','可数性限制'],[
    {title:'按发音选择 an',wrong:'It took a hour to finish.',right:'It took an hour to finish.',text:'hour 的 h 不发音，通常以元音音素起始，因此用 an。'},
    {title:'a / an 后接单数可数意义',wrong:'She gave me an advice.',right:'She gave me a piece of advice.',text:'advice 在这里为不可数名词，要借助单位词 piece 表示一条。'}
  ],['articles','countable']);
  item('article-definite','定冠词 the 与可识别对象','The definite article','the + 语境中可确定的名词性对象','特指的关键是听读双方能识别所指对象。',[
    ['前文出现与当前环境','I bought a lamp. The lamp is small. 中第二次提及同一盏灯用 the。Please close the door 中即使前文未提到门，双方所在环境也可能让所指明确，因此并不要求一定是第二次提及。'],
    ['修饰使对象得到限定','the book on the top shelf 可通过后面的修饰短语明确是哪本书。但名词后有修饰语，不代表必须用 the：a book about birds 仍可泛指任意一本有关鸟的书。是否特指要按整体语境判断。'],
    ['可数性并不限制 the 只接单数','the boy、the boys、the water 都可成立；the 的作用是限定对象，不是表示一个。复数或不可数名词泛指时常不用 the，如 Water is essential 与 The water in this bottle is cold 的范围不同。'],
    ['名称与固定结构需一起掌握','the Nile、the United States 等名称习惯带 the，多数人名和单个国家名通常不带。the best answer 等最高级名词短语常用 the，但已有 my 等限定词时不再加成 the my best answer。']
  ],[
    ['I borrowed a guidebook. The guidebook includes several walking routes.','我借了一本指南。这本指南介绍了几条步行路线。','第二句的 the guidebook 指第一句已引入的同一本书。'],
    ['The water in this glass is for the patient.','这个杯子里的水是给那位病人的。','water 虽不可数，仍可由 the 与后面的修饰语共同限定。']
  ],[
    mc('I found a key. ____ key was under the desk.（同一把钥匙）',['A','An','The','不填'],2,'后一句指前句已引入的同一把钥匙，使用 The。'),
    fill('Please close ____ door.（双方都知道是哪扇门；填冠词）','the','当前语境让双方能够识别所指的门，因此用定冠词 the。'),
    mc('关于 the，哪项正确？',['the 只接单数可数名词','the 不能修饰不可数名词','the water 可以指特定范围的水','只要第一次提到就绝对不能用 the'],2,'the 可限定不可数名词，环境明确的对象第一次提及也可能使用 the。')
  ],['前文与环境特指','限定性修饰','单数、复数与不可数','名称与最高级'],[
    {title:'不要把两个主要限定词直接叠加',wrong:'The my best friend lives nearby.',right:'My best friend lives nearby.',text:'my 已承担所属限定功能，不再在前面直接加 the。'},
    {title:'单数普通名词不能无故裸用',wrong:'Please pass me book on the top shelf.（指双方都明确的那本书）',right:'Please pass me the book on the top shelf.',text:'这里指可识别的特定一本书，单数 book 需要限定，使用 the。'}
  ],['articles','determiners','article-zero']);
  item('article-zero','零冠词与泛指','Zero article','Books are useful；Water is essential；study English','零冠词是结构选择，不是随意漏掉限定词。',[
    ['复数与不可数名词的泛指','Books can change lives 讨论书这一类，Water is essential 讨论水这种物质，通常不加冠词。若把范围限定为某批书或某杯水，则可用 the；不能把泛指规则套到普通的单数可数名词上。'],
    ['名称、学科与日常活动','多数人名、单个国家名、学科和语言名前常不加冠词，如 Anna、Japan、study chemistry、speak English。固定名称也有例外，需要按习惯记忆，不能一概概括为所有专有名词都不加 the。'],
    ['机构意义与具体建筑不同','go to school 可表示上学，go to the school 可以表示前往某所学校的建筑。是否有冠词会改变指称；医院等机构表达还有英美差异，应结合语境与所采用的英语变体理解。'],
    ['固定搭配与特定情境','have breakfast、at night 等常不带冠词，但 a large breakfast、the breakfast we had yesterday 又可根据修饰和指称带冠词。学习时同时检查名词意义、限定范围和搭配，而不是背“某词前永远不加冠词”。']
  ],[
    ['Children need time to play.','孩子们需要玩耍的时间。','Children 与 time 都是一般性讨论，分别为复数可数名词和不可数意义。'],
    ['She goes to school here, but her father went to the school to meet a teacher.','她在这里上学，但她父亲去那所学校是为了见一位老师。','前一个 school 表机构活动，后一个特指那所学校。']
  ],[
    mc('泛指“书能帮助我们理解世界”，哪句最自然？',['Books help us understand the world.','A books help us understand the world.','Book help us understand the world.','An books help us understand the world.'],0,'泛指书这一类，常用不带冠词的复数 Books；普通单数 Book 不宜这样裸用。'),
    mc('通常搭配中，哪一个短语表示“吃早餐”？',['have breakfast','have a breakfasts','have an breakfast','have breakfastes'],0,'日常用餐活动通常说 have breakfast；特定修饰或指称可采用其他冠词结构。'),
    mc('哪种理解正确？',['零冠词意味着所有单数名词都可省冠词','school 前永远不能出现 the','泛指的 water 与特指的 the water 可表达不同范围','所有专有名称都禁止 the'],2,'water 泛指某种物质时常不用冠词，the water 则可限定语境中某一范围的水。')
  ],['复数泛指','不可数泛指','名称、语言与学科','固定搭配与机构意义'],[
    {title:'普通单数名词不照搬复数泛指形式',wrong:'She is teacher.',right:'She is a teacher.',text:'teacher 在这里是单数可数普通名词，泛指职业身份时通常使用 a。'},
    {title:'泛指语言学习通常不加 the',wrong:'She studies the English.（表示她学习英语这门语言）',right:'She studies English.',text:'表示学习英语这门语言时通常直接用 English；the English 可以有另外的名词性含义，不能与此处混同。'}
  ],['articles','article-definite']);
  item('verb-transitive','及物与不及物用法','Transitive & intransitive uses','discuss sth.；arrive at a place；open sth. / sth. opens','判断的是动词在当前结构中的用法，而非给每个词贴不可改变的标签。',[
    ['及物用法直接接宾语','discuss the plan、answer a question 中，动词后直接接宾语。不能因为中文表达含“关于”就给 discuss 额外加 about。确定及物结构后，再看该动词要求名词、从句还是特定非谓语形式作为宾语。'],
    ['不及物用法与介词搭配','arrive、happen 等普通用法不直接接可作其宾语的名词，如 arrive at the station。station 是介词 at 的宾语，不是 arrive 的直接宾语，因此也不能由此生造 The station was arrived。'],
    ['同一个动词可以有两种用法','She opened the door 与 The door opened 都可成立。前句 opened 及物，door 是宾语；后句 opened 不及物，door 是主语。是否及物取决于具体词义及当前句法框架，而非单凭词典中某一条标签。'],
    ['搭配决定转换是否允许','双宾语、宾补和被动转换也受具体动词限制。give sb. sth. 可换为 give sth. to sb.，explain 却通常说 explain sth. to sb.，不照搬 explain sb. sth.。分析时应保留整组动词搭配和意义。']
  ],[
    ['The meeting ended at noon, and we ended the discussion soon afterwards.','会议中午结束，随后不久我们结束了讨论。','第一个 ended 没有直接宾语；第二个 ended 直接接 the discussion。'],
    ['They discussed the proposal before arriving at the office.','他们到办公室前讨论了提案。','discuss 直接接 proposal；arrive 通过 at 引出到达地点。']
  ],[
    mc('表达“讨论这个问题”，哪种结构正确？',['discuss about the problem','discuss the problem','discuss to the problem','discuss with the problem'],1,'discuss 在这里直接接内容宾语 the problem，不额外加 about。'),
    mc('The door opened. 与 She opened the door. 说明：',['open 只能及物','open 只能不及物','同一个词可在不同结构中有及物与不及物用法','两句都缺少谓语'],2,'第一句的 opened 无直接宾语，第二句直接接 door，展示当前用法的区别。'),
    mc('arrive 的普通到达用法，哪一种搭配正确？',['arrive the airport','be arrived the airport','arrive at the airport','arrive to the airport'],2,'表达到达机场通常说 arrive at the airport，不能直接把地点名词当作 arrive 的宾语。')
  ],['直接宾语','介词引出的对象','可变及物性','搭配与被动边界'],[
    {title:'不要给直接宾语额外加介词',wrong:'We discussed about the budget.',right:'We discussed the budget.',text:'discuss 的该用法直接接讨论内容，不需要 about。'},
    {title:'到达地点通过合适介词引出',wrong:'They arrived the station before noon.',right:'They arrived at the station before noon.',text:'arrive 在这里是不及物用法，station 由 at 引出。'}
  ],['auxiliaries','verb-forms','passive-special']);
  item('verb-linking','系动词与表语','Linking verbs & subject complements','be / seem / become / look + 表语','系动词后的成分说明主语的状态或身份，不是普通动作宾语。',[
    ['连接主语与说明部分','She is a doctor 与 She seems tired 中，后面的名词短语或形容词描述主语。is、seems 是谓语动词，a doctor、tired 是表语。整个关系不能按普通及物动词与动作承受者来分析。'],
    ['感官词的不同用法','The soup smells delicious 中 smells 作系动词，delicious 描述汤；She smelled the flowers 中 smelled 表闻这一动作，flowers 是宾语。同一个词可因用法不同进入不同句型，不能见到 smell 就一律判断为系动词。'],
    ['变化、保持与印象','become、get、grow 可表达变化，remain、stay 可表达保持，seem、appear、look 可表达印象。后面具体可接哪些形式受动词搭配限制，如 become a teacher、stay calm、seem to know；不能任意互换所有系动词。'],
    ['形容词与副词按作用选择','系动词后描述主语性质时常用形容词，如 sounds clear；修饰动作方式才常用副词，如 explains clearly。well 也可作形容词表示身体健康，因此 I feel well 并不是错误，不能机械排斥所有 -ly 或 well 形式。']
  ],[
    ['The explanation sounds clear, but she speaks rather quietly.','这个解释听起来很清楚，但她说话相当轻。','clear 描述 explanation 的性质，quietly 修饰 speaks 的方式。'],
    ['The children grew quiet as the lights went out.','灯熄灭时，孩子们安静了下来。','grew 在这里表示状态变化，quiet 作表语而不是宾语。']
  ],[
    mc('The soup tastes ____.（说明汤的味道很好）',['delicious','deliciously','deliciousness','deliciouses'],0,'tastes 在这里作系动词，表语用形容词 delicious 描述汤。'),
    fill('After the long trip, they seem ____ (tire).（他们似乎很疲惫）','tired','表示主语感到疲惫，seem 后用形容词 tired 作表语。'),
    mc('She smelled the flowers. 中 smelled 的当前用法是：',['连接主语和表语','表示动作并带宾语','没有任何动词意义','与所有 smells 句子都完全同一结构'],1,'这里表示她闻花这一动作，the flowers 是直接宾语，与 The flowers smell sweet 的系表结构不同。')
  ],['身份与状态','感官系动词','变化与保持','与动作动词的区别'],[
    {title:'说明主语的性质用合适的形容词',wrong:'The soup tastes deliciously.（说明汤本身很好吃）',right:'The soup tastes delicious.',text:'此处 delicious 作表语说明 soup 的性质，不是用副词描述汤做品尝动作。'},
    {title:'系动词仍需必要的表语',wrong:'Her idea seems.（想表达她的主意似乎很实用）',right:'Her idea seems practical.',text:'在此独立陈述中，seems 需要补出说明 idea 的成分，practical 作表语。'}
  ],['adjadv','skeleton','verb-transitive']);
  item('adjective-functions','形容词的定语、表语与宾补','Adjective functions','a quiet room；The room is quiet；keep the room quiet','词性相同，进入不同结构时可以承担不同句子成分。',[
    ['名词内部的定语','a useful book 中 useful 修饰名词 book，属于名词短语内部的定语。形容词常前置，但也有后置情形，如 something useful、students interested in art，因此不能把“形容词总在名词前”当成绝对规则。'],
    ['系动词后的表语','The task is difficult 中 difficult 说明主语的性质，作表语。系动词不只是 be，也包括当前用作连接的 seem、become、look 等；有的形容词的位置和补充形式受到词语本身的搭配限制。'],
    ['补充宾语的状态或结果','We found the room empty 中 empty 说明宾语 room 的状态，作宾语补足语。与双宾语结构不同，room 与 empty 不是两个独立接受动作的对象，而是形成“房间是空的”这样的说明关系。'],
    ['按修饰对象选择形式','careful 描述人或事物，carefully 常描述动作方式，如 a careful driver 与 drives carefully。判断时先找它说明哪一个对象，再选形式；并非只要汉语中带“地”就能一律加 -ly。']
  ],[
    ['The patient looked calm, and the nurse kept the room quiet.','病人看起来很平静，护士让房间保持安静。','calm 作主语 patient 的表语；quiet 作宾语 room 的补足语。'],
    ['We need something useful for the next lesson.','我们需要下节课能用得上的东西。','useful 修饰复合不定代词 something，通常放在其后。']
  ],[
    mc('We found the classroom empty. 中 empty 的成分是：',['主语','直接宾语','宾语补足语','限定谓语'],2,'empty 补充说明宾语 the classroom 的状态，是宾语补足语。'),
    fill('She is a ____ (care) driver.（表示她开车谨慎）','careful','空格在名词 driver 前，描述人的特征，要用形容词 careful。'),
    mc('哪一个短语符合复合不定代词的常见修饰位置？',['something important','important something','importantly something','something importance'],0,'形容词 important 修饰 something 时通常后置，构成 something important。')
  ],['名词前后定语','系动词后表语','宾语补足语','与副词的分工'],[
    {title:'修饰名词要选合适词性',wrong:'She is a carefully driver.',right:'She is a careful driver.',text:'driver 是名词，表达这个人谨慎用形容词 careful；carefully 通常修饰动作。'},
    {title:'复合不定代词的形容词修饰后置',wrong:'We heard interesting something.',right:'We heard something interesting.',text:'interesting 修饰 something 时通常放在后面，不能套普通前置定语的顺序。'}
  ],['adjadv','pronoun-indefinite','verb-linking']);
  item('adverb-types','副词的意义、位置与作用','Adverb types & position','方式 / 时间 / 地点 / 频率 / 程度 / 评注','先判断副词修饰哪一层，再决定意义和位置。',[
    ['方式、时间和地点','carefully、yesterday、outside 等可分别说明怎样、何时、何地。She worked carefully outside yesterday 中多个副词服务于同一个活动，但顺序会随重点、长度和语境改变，不应把常见顺序理解成不可违反的拼词公式。'],
    ['频率副词与谓语结构','often、usually 等常位于实义动词前、be 后，如 usually works、is usually ready；含多个助动词时常放在首个助动词之后，如 has often been invited。强调或语篇需要也可能使位置改变。'],
    ['程度与整句评注','very 可修饰形容词或副词，如 very clear、very clearly；fortunately 可对整件事作评注。enough 常放在它修饰的形容词、副词后，如 warm enough，不能照搬 very 的前置位置。'],
    ['词尾与意义不能机械推断','fast、hard、early 等不以 -ly 结尾也可作副词；friendly、lovely 通常是形容词。hard 与 hardly、late 与 lately 可能有不同意义，不能把加 -ly 视为不改变词义的万能转换。']
  ],[
    ['She usually explains the steps very clearly.','她通常把步骤解释得非常清楚。','usually 表频率，clearly 修饰 explains，very 再修饰 clearly。'],
    ['Fortunately, the room was warm enough for the guests.','幸运的是，房间足够暖和，适合客人待着。','Fortunately 评注整句；enough 放在所修饰的形容词 warm 后。']
  ],[
    fill('She speaks English ____ (clear).（表达她说得很清楚）','clearly','空格修饰 speaks 这一动作，应使用方式副词 clearly。'),
    mc('形容词与 enough 的常见位置是：',['enough warm','warm enough','warmth enough','enough warmly room'],1,'enough 修饰形容词 warm 时通常后置，说 warm enough。'),
    mc('He works hard, but he hardly rests. 中 hardly 的意思是：',['努力地','几乎不','很硬地','与 hard 完全相同'],1,'hard 表示努力地，hardly 表示几乎不，两者不能只按是否带 -ly 看作同义转换。')
  ],['方式、时间与地点','频率','程度','整句评注与易混词形'],[
    {title:'fast 的普通副词形式不加 -ly',wrong:'The train moves fastly.',right:'The train moves fast.',text:'现代标准英语的常用方式副词为 fast，不通过添加 -ly 构成这里的形式。'},
    {title:'enough 修饰形容词时后置',wrong:'The room is enough warm.',right:'The room is warm enough.',text:'在这个结构中，enough 通常放在形容词 warm 的后面。'}
  ],['degree-order','adjadv']);
  item('preposition-time','时间介词与时间范围','Time prepositions','at six；on Monday；in July；since a point / for a duration','先区分时间点、日历日期和持续时长，再看具体搭配。',[
    ['at、on、in 的常见时间层级','at 常用于钟点及某些固定时间表达，如 at six、at night；on 常用于星期或具体日期，如 on Tuesday、on May 3；in 常用于月、年、季节等较长范围，如 in June、in 2026。具体搭配仍应连同名词一起学习。'],
    ['具体某天的早晚','in the morning 是一般性的早晨时段；on Monday morning 指星期一这一具体早晨。next Monday、last year、every morning 等带有这类限定时，通常不再在前面机械添加 at、on、in。'],
    ['起点、时长与截止','since 引出持续状态的起点，for 引出持续多久；by 表截至某时完成或发生，until 表动作或状态持续到某时。要先理解句意，再选介词，不能只因为后面有一个时间词就固定配某个形式。'],
    ['时间介词也有变体和多义','at the weekend 常见于英式英语，on the weekend 常见于美式英语，两者不能脱离变体一概判错。in two days 还可表示从现在起两天后；具体时间关系要结合句子时态和语境判断。']
  ],[
    ['The workshop starts at nine on Friday morning.','工作坊星期五上午九点开始。','at 引出钟点；on 引出具体星期的早晨。'],
    ['We have lived here since 2020, for more than five years.','我们自2020年起住在这里，已经超过五年了。','since 后是起点，for 后是持续时长，二者观察角度不同。']
  ],[
    fill('The interview begins ____ nine o’clock.（九点整开始）','at','明确钟点 nine o’clock 通常由 at 引出。'),
    mc('表达“在星期二上午”，常见搭配是：',['in Tuesday morning','at Tuesday morning','on Tuesday morning','by Tuesday morning，且必定同义'],2,'具体某个星期的早晨通常用 on；by 表截止，不与此处时间位置同义。'),
    fill('She has worked here ____ 2020.（自从2020年起）','since','这里明确给出持续工作的起点，用 since；for 后一般接时长。')
  ],['时间点与日历范围','具体日期的早晚','since / for / by / until','零介词与英美变体'],[
    {title:'具体星期通常用 on',wrong:'The class meets in Monday.',right:'The class meets on Monday.',text:'Monday 表示具体星期，普通时间位置搭配通常用 on。'},
    {title:'for 引出持续时长',wrong:'We have waited since two hours.',right:'We have waited for two hours.',text:'two hours 是时长，不是一个起点；表示持续两小时使用 for。'}
  ],['prepositions','perfect','future-time']);
  item('preposition-place','地点、位置与方向介词','Place & direction prepositions','in / on / at；to / into / through / across','位置与路径是不同关系，介词取决于想表达的视角。',[
    ['位置中的 in、on、at','in 常把对象放入一个空间范围，on 常强调与表面的关系，at 常把地点视作活动点或位置点。at the station 与 in the station 可因观察视角不同都成立，不能规定站点名词前永远只准一种介词。'],
    ['目标与进入内部','to 表朝向或到某目标，into 明确跨入内部，如 walk to the building 与 walk into the building。put the papers in the box 也可根据动词意义表达放入位置，并非所有带动作的句子都必须用 into。'],
    ['横过、穿过与沿着','across 常侧重从一侧到另一侧的横过，through 常侧重穿过内部空间，along 表沿路径推进。across the bridge、through the tunnel 等应结合地点形状和说话者所强调的路径判断，不能只按中文“穿过”选词。'],
    ['宾语、搭配与关系整体','地点介词后常接名词性成分，如 beside her、under the desk；代词作宾语时通常用宾格。某些表达不需要介词，如 go home；beside 表在旁边，besides 常表除此之外，二者不是同义拼写。']
  ],[
    ['The cyclist rode through the tunnel and across the bridge.','骑车人穿过隧道，又骑过桥。','through 突出隧道内部通道，across 突出从桥的一边到另一边。'],
    ['She walked into the room and left the bag on the table.','她走进房间，把包放在桌上。','into 表进入内部；on the table 说明包最后的位置。']
  ],[
    mc('明确表示“走进房间内部”，哪一个短语最直接？',['walk into the room','walk beside the room','walk above the room','walk without the room'],0,'into 明确表达进入内部，与仅在旁边或上方的关系不同。'),
    fill('The keys are ____ the table.（钥匙在桌子表面上）',['on','upon'],'这里明确表示与桌面表面的接触关系，常用 on，较书面的 upon 也可接受。'),
    mc('哪一种看法正确？',['所有动作后都只能用 into','at the station 与 in the station 在不同视角下都可能成立','through 永远与 across 同义','go home 必须写成 go to home'],1,'at 常将车站看作活动点，in 可强调站内空间；需要根据实际关系判断。')
  ],['空间位置','目标与进入','路径','固定搭配与宾语'],[
    {title:'普通 go home 不加 to',wrong:'We went to home after the concert.',right:'We went home after the concert.',text:'home 在普通 go home 搭配中直接提供方向，不机械添加 to。'},
    {title:'介词后的人称代词用宾格',wrong:'The empty seat is beside she.',right:'The empty seat is beside her.',text:'beside 后的人称代词作介词宾语，应使用宾格 her。'}
  ],['prepositions','pronoun-personal']);
  item('conjunction-coordinate','并列连词与对应层级','Coordinating conjunctions','and / but / or / so；both ... and ...','连接地位相当的词、短语或分句，核对逻辑与结构对应。',[
    ['并列关系不局限于两个句子','and 可连接单词、短语或分句，如 tea and coffee、sing and dance、I stayed and she left。被连接项应在当前句中承担可对应的功能，但并不要求表面词尾完全相同。'],
    ['按逻辑选择连接词','and 常增加信息，but、yet 常表示转折，or 表选择或否则，so 常引出结果。Hurry up, or you will miss the bus 中 or 表否则，并不是在列两个同等愿望；选择时应先说明前后关系。'],
    ['成对结构检查两端','both ... and ...、either ... or ...、neither ... nor ... 等应连接相称结构。连接主语时还要分别检查主谓一致；不能因为看见一个连词，就套所有关联结构相同的数或倒装规则。'],
    ['与连接性副词分清','however、therefore 常为连接性副词，不等同于 but、so。两个独立分句可用句号或分号再配 however，通常不只用一个逗号加 however 直接拼接；并列连词也不能替代所有必要标点。']
  ],[
    ['The task was difficult, but the team finished it on time.','任务很难，但团队按时完成了。','but 把困难与仍然完成任务的转折关系连接起来。'],
    ['Both the timetable and the room number have changed.','时间表和房间号都改了。','both ... and ... 连接两个主语成分，整体按复数配 have。']
  ],[
    fill('She can sing ____ dance.（两种能力都有；填表示添加的并列连词）','and','这里增加第二项能力，使用并列连词 and。'),
    mc('哪一句清楚表达“因为累了，所以去睡觉”的结果关系？',['He was tired, so he went to bed.','He was tired, or he went to bed.','He was tired but because went to bed.','He was tired, however he went to bed.'],0,'so 引出前述疲惫带来的结果，并正确连接两个分句。'),
    mc('在正式写作中连接两个独立分句，哪种标点与 however 的组合合适？',['It was raining, however, we left.','It was raining; however, we left.','It was raining however we left.','It was raining however, we left.'],1,'however 常为连接性副词；此处用分号先明确独立分句边界，再用逗号与 however 配合。')
  ],['添加与转折','选择与结果','关联连词','与连接性副词的区别'],[
    {title:'直接对应的关联搭配要完整',wrong:'Both Leo or Anna will attend.（想表达两人都会出席）',right:'Both Leo and Anna will attend.',text:'表达“两者都”应使用 both ... and ...；both ... or ... 不构成这里需要的关联结构。'},
    {title:'however 不能代替句法边界',wrong:'The train was late, however, we arrived on time.',right:'The train was late; however, we arrived on time.',text:'两个独立分句不能仅靠逗号和 however 粘连；这里用分号标出边界。'}
  ],['conjunction-types','coordination','punctuation-analysis']);
  item('conjunction-subordinate','从属连词与分句依附','Subordinating conjunctions','because / although / if / when；that / whether','从属连词建立依附关系，引出的分句仍有自己的内部结构。',[
    ['从属关系与整体作用','I stayed because it rained 中 because 引出的分句说明原因；I know that she is ready 中 that 引出的内容作 know 的宾语。不要把所有从属连词都当成同一种状语，也不要只数动词就判定多谓语错误。'],
    ['引出完整分句而非普通名词','because it rained 中 because 后是 it + rained；because of the rain 则用介词组合接名词短语。although、despite 等表达也要分别核对后续形式，不能只因中文都表示相似逻辑而交换。'],
    ['引导与成分角色要分开','that 在普通宾语内容从句中通常只起连接作用；what、who 等连接代词还在从句内部承担成分，when、where 等也可承担状语作用。它们都可引出从句，却不意味着词类和内部作用完全相同。'],
    ['重复标记与时态边界','同一对直接对应分句通常不机械重复 although ... but ...、because ... so ...；复杂句中不同层级可有多个连词。时间和条件状语从句常用现在形式谈将来，而表示是否的宾语 if 从句不受同一口诀限制。']
  ],[
    ['Although the road was narrow, the driver remained calm.','虽然道路狭窄，司机仍保持冷静。','Although 引导让步从句；主句本身完整，不再机械加 but。'],
    ['I wonder whether the parcel has arrived.','我想知道包裹是否已经送到了。','whether 引导表达是否的宾语从句，内部使用陈述语序。']
  ],[
    mc('请选择“因为下雨，我们留在室内”的标准结构。',['We stayed inside because it was raining.','We stayed inside because of it was raining.','Because it was raining, so we stayed inside.','We stayed inside because was raining it.'],0,'because 后接完整从句 it was raining；同一直接对应结构不再重复 so。'),
    fill('____ the road was icy, we still completed the journey.（尽管路面结冰，这是已知事实；填让步连词或短语）',['Although','Though','Even though','While'],'Although、though、even though 以及让步用法的 while 都可引出已知事实的让步从句，不再额外加 but。'),
    mc('关于从句引导词，哪项正确？',['每个引导词都只连接而不作成分','what 在 I know what she needs 中还作 needs 的宾语','只要一个句子有两个连词就必定错误','表示是否的 if 从句永远不能出现 will'],1,'what 既引导整个内容从句，又在内部承担 needs 的宾语，不能与普通连接词 that 混为一谈。')
  ],['状语从句的逻辑关系','内容从句','与介词组合的区别','连接与内部成分'],[
    {title:'because 与 because of 的后续结构不同',wrong:'We waited because of the bus was late.',right:'We waited because the bus was late.',text:'the bus was late 是完整分句，这里应由 because 引出；because of 通常后接名词性成分。'},
    {title:'同一让步关系不重复 although 与 but',wrong:'Although it was cold, but we went outside.',right:'Although it was cold, we went outside.',text:'这里 although 已标记该让步从句与主句的关系，标准直接对应结构通常不再重复 but。'}
  ],['conjunction-types','clause-basics','real-if']);
  window.LESSON_DETAILS={...(window.LESSON_DETAILS||{}),...details};
})();
