/* Additional curriculum adapted from the user-provided grammar reference.
   Existing lesson and question identifiers are intentionally left unchanged. */
(() => {
const ref=chapter=>`参考《英语语法知识体系详解》· ${chapter}；补充讲解与练习`;

add('parts','word-formation','构词法与词形变化','Word formation & inflection','基础',ref('构词法与词形变化'),'派生 / 合成 / 转化 ≠ 复数 / 时态 / 比较级','先区分“形成另一个词”和“同一词的语法变化”，再按句子位置选择词形。',[
 ['派生：意义和词性可能改变','前缀常改变意义，如 happy → unhappy；后缀常帮助构成新词类，如 success → successful → successfully。但前缀不一定改变词性，-ly 结尾也不一定是副词，如 friendly。词缀是线索，不能替代句法判断。'],
 ['合成：多个词共同组成一个单位','合成词可连写、分写或带连字符，如 classroom、bus stop、well-known。名词前的复合修饰语常用单位名词单数，如 a five-year-old child；The child is five years old 中却用复数 years，结构不同。'],
 ['转化：词形不变，工作改变','water the plants 中 water 是动词，a glass of water 中是名词；a clean room 中 clean 是形容词，clean the room 中是动词。判断要看它修饰什么、能否接宾语、是否承担谓语功能。'],
 ['屈折变化服务于当前语法关系','books、studies、studied、working、taller 分别表达数、主谓配合、时态或动作状态、比较程度，通常不是另外一个词汇项目。先找名词中心或动词组，再决定需要哪种词形，避免 success / successful / successfully 只凭中文选词。']
],[['The team completed the project successfully.','团队成功完成了这个项目。','successfully 修饰 completed，需要副词；successful 常用于修饰名词或作表语。'],['We took a ten-minute break.','我们休息了十分钟。','ten-minute 整体在名词前作修饰语，单位名词 minute 用单数。']],[mc('The experiment was ____. 应选哪一种词形？',['success','successful','successfully','succeed'],1,'was 在这里是系动词，后面用形容词 successful 说明实验的结果。'),fill('She answered the question ____ (careful).','carefully','空格修饰动作 answered，使用方式副词 carefully。'),mc('年龄复合修饰语中，哪一种表达正确？',['a five-years-old child','a five-year-old child','a five-year-olds child','a five-years-olds child'],1,'名词前的复合年龄修饰语用连字符连接，单位名词 year 用单数。')],['adjadv','verb-forms','noun-plurals']);

add('parts','determiners','限定词与名词前的顺序','Determiners','基础',ref('冠词与限定词'),'限定词 + 修饰语 + 名词中心','限定词说明所指范围；传统词类与限定功能会交叉。',[
 ['限定词是功能分类','the、this、my、some、three 都可放在名词前限定指称、所属或数量。它们按传统教学又分别属于冠词、代词或数词。词性名称和在名词短语中的作用是两个观察角度，并不矛盾。'],
 ['有无中心名词决定结构','This book is new 中 this 限定 book；This is new 中 This 独立指物。my 后通常需要名词，如 my bag；mine 可以独立替代“我的包”，如 This bag is mine。不能把两种形式机械互换。'],
 ['限定词共同出现有顺序限制','通常说 all my three books，而不说 the my book。the、my、this 等核心限定成分通常不能直接相互叠加；需要“我的这本书”可按语境用 this book of mine，或直接用 this book。'],
 ['限定词也受可数性限制','普通单数可数名词通常需要一个合适的限定成分，如 a pen、this pen、my pen；many 配复数可数名词，much 配不可数名词。all、some 等的结构要连同名词及 of 后的限定形式一起判断，如 some books / some of the books。']
],[['All my three cousins live nearby.','我的三个表亲都住在附近。','all 在物主限定词 my 和数词 three 之前，三个限定成分共同限定 cousins。'],['This umbrella is mine, and that one is yours.','这把伞是我的，那把是你的。','This 限定 umbrella；mine 与 yours 独立使用，one 替代同类可数名词。']],[mc('请选择自然的限定词搭配。',['the my notebook','my the notebook','my notebook','mine notebook'],2,'my 已承担所属限定功能，通常不再直接叠加 the；mine 不能这样限定后面的名词。'),fill('These books are ____ (our).','ours','空格独立表示“我们的书”，需要名词性物主代词 ours。'),mc('some books 与 some of the books 的区别是：',['前者总是错误','后者指一个已限定集合中的一部分','两者都必须接单数名词','some 只能限定不可数名词'],1,'some of the books 从语境已确定的那些书中选取一部分，the books 给出了限定集合。')],['articles','pronouns','quantifiers']);

add('parts','noun-phrase','名词短语与中心词','Noun phrases','基础',ref('短语·名词短语'),'限定词 + 前置修饰 + 中心名词 + 后置修饰','先圈出整个名词短语，再找决定核心指称的中心词。',[
 ['一个句子成分可以含许多词','名词短语以名词性中心为核心，整体作主语、宾语或表语，如 the two helpful students near the door。不要因为其中有形容词、介词短语，就把这个整体拆成互不相关的主句成分。'],
 ['中心词与前置修饰','a useful grammar book 中 book 是中心名词，useful 说明性质，grammar 说明类别，a 限定范围。判断主语的数时，通常找中心词，而不是离谓语最近的名词。'],
 ['后置修饰形成更长的短语','the books on the shelf、the students waiting outside、the story that she told 分别带介词短语、分词短语和定语从句。先辨认修饰对象，再分析其内部结构；后置部分可能很长，但不自动改变外层中心。'],
 ['边界清楚才能避免误读','The cover of these books is blue 中主语中心是 cover，of these books 为修饰语。I saw the boy with a telescope 中 with 短语可能修饰动作或男孩；如语境不能排除歧义，应改写说明谁使用望远镜。']
],[['The list of new students is on the desk.','新生名单在桌上。','整个 The list of new students 作主语，中心词 list 为单数，所以用 is。'],['I bought a useful book about birds.','我买了一本介绍鸟类的实用书。','book 是宾语短语中心；useful 在前，about birds 在后，共同修饰 book。']],[mc('The color of the walls ____ pleasant.',['are','is','have','be'],1,'主语中心是单数 color，of the walls 是修饰语，因此谓语用 is。'),fill('a useful grammar book 的中心名词是 ____。','book','book 决定整个短语指什么，useful 与 grammar 都提供修饰信息。'),mc('the girl standing by the window 整体最适合看作：',['一个名词短语','两个独立句','一个完整的过去时陈述句','一个主语倒装句'],0,'girl 是中心，standing by the window 是后置分词修饰，整个组合仍是名词短语。')],['agreement','relative-omit','phrase-types']);

add('parts','verb-forms','动词词形与谓语组合','Verb forms & finite groups','基础',ref('动词·基本形式；助动词'),'原形 / 第三人称单数 / 过去式 / 过去分词 / -ing','词形本身不能说明全部功能；要看它在整个动词组中的位置。',[
 ['五类常见词形各有用途','以 write 为例：原形 write、第三人称单数 writes、过去式 wrote、过去分词 written、-ing 形式 writing。过去式可直接构成一般过去时谓语，过去分词通常需要助动词，不能把 He written 当作普通完整陈述。'],
 ['助动词决定后一个成分的形式','情态动词后通常用原形，完成助动词 have 后用过去分词，进行 be 后用 -ing，被动 be 后用过去分词。She may have been working 中 may → have，have → been，进行 been → working，结构逐层衔接。'],
 ['一个谓语可由多个动词组成','has been repaired 是一个完成被动谓语组合，不是三个独立谓语。找句子骨架时，要把助动词与中心动词一起看，再区分 to repair、repairing 等非谓语结构。有限形式提供时态、情态或与主语的配合。'],
 ['同形形式要按结构分析','She is reading 中 reading 参与进行谓语；Reading helps 中 Reading 作主语；the girl reading outside 中 reading 引出修饰结构。非谓语可以带自己的宾语和状语，但通常不能独自构成普通完整的限定陈述句。']
],[['The report has been checked twice.','这份报告已经检查了两次。','has been checked 是一个现在完成被动谓语，checked 为过去分词。'],['Reading the instructions saves time.','阅读说明会节省时间。','Reading the instructions 整体作主语，限定谓语是 saves。']],[mc('He has ____ three letters.',['wrote','writing','written','writes'],2,'完成助动词 has 后接过去分词 written，不用过去式 wrote。'),fill('They may ____ (be) waiting outside.','be','情态动词 may 后接原形 be，be 再与 waiting 构成进行结构。'),mc('The door is being painted. 中整个限定谓语是：',['painted','being','is being painted','The door'],2,'is being painted 共同构成现在进行被动，不应把各个动词拆成独立谓语。')],['auxiliaries','participles','passive']);

add('sentence','phrase-types','短语类型与整体作用','Phrase types','基础',ref('短语'),'先找中心词，再判断整个短语作什么','短语按内部中心分类，句子成分按它在上层结构中的作用判断。',[
 ['名词、形容词与副词短语','名词短语如 the new teacher，形容词短语如 very proud of her team，副词短语如 much more carefully。内部中心不同，但不能只凭短语名称决定它在句中的全部作用，例如形容词短语既可作表语，也可作宾补。'],
 ['动词短语是组合而非词数游戏','has been studying 中助动词与中心动词共同表达完成进行；look after the child 等固定搭配又常被称作动词短语。分析时分清是助动词组合还是词汇搭配，再核对宾语与词形要求。'],
 ['介词短语的作用取决于依附对象','in the garden 修饰 the flowers 时可作后置定语；修饰 play 时可作地点状语；在 The children are in the garden 中说明所在位置。介词后可接名词短语、宾格代词或 -ing 结构。'],
 ['非谓语短语保留动词内部结构','to make the room tidy 中 the room 是 make 的宾语，tidy 是宾补；整个 to make the room tidy 又可作上层句子的目的状语。先看整体，再分析内部，不应把内部宾语误当外层主句宾语。']
],[['She is very proud of her team.','她非常为自己的团队骄傲。','very proud of her team 是形容词短语，整体作表语，中心为 proud。'],['The students in the garden are talking quietly.','花园里的学生正在轻声交谈。','in the garden 在主语名词短语内修饰 students；are talking 是谓语组合。']],[mc('very slowly 的中心词是：',['very','slowly','两者都是名词','没有中心词'],1,'slowly 提供主要方式意义，very 说明程度；整个组合是副词短语。'),fill('介词短语 with ____ (they) 中应填哪种代词形式？','them','介词 with 后使用人称代词宾格 them。'),mc('to help the new students 在 We stayed to help the new students 中整体作：',['目的状语','主句主语','主句限定谓语','定冠词'],0,'stayed 是主句谓语，to help... 整体说明留下的目的，内部 students 是 help 的宾语。')],['noun-phrase','infinitive','prepositions']);

add('sentence','sentence-elements','句子成分与分析层级','Sentence elements','基础',ref('句子成分'),'主语—谓语—宾语 / 表语 / 补足语；修饰语分层附着','词性是词的类别，成分是一个词或结构在当前句子中承担的作用。',[
 ['先找限定谓语与主语中心','谓语可能是 works，也可能是 will have been repaired 这样的组合。主语可以是一个名词、较长名词短语或从句，如 What she said matters。先确认“谁／什么”与动作或状态的关系，避免把修饰词当主语中心。'],
 ['宾语、表语、宾补要看关系','宾语是动词支配的对象，如 read a book；表语说明主语，如 She seems calm；宾补进一步说明宾语，如 We found the room empty。不能把谓语后所有名词都叫宾语，也不能把所有形容词都叫定语。'],
 ['定语、状语和同位语处在不同位置','定语修饰名词性中心，状语补充动作或整句的时间、地点、方式等，同位语重新说明同一个对象。my friend Anna 中 Anna 说明朋友是谁；a friend from Rome 中 from Rome 限定 friend，并非主句地点状语。'],
 ['整体和内部可以各有成分','I enjoy reading stories 中 reading stories 整体作 enjoy 的宾语，stories 又是 reading 内部的宾语。The news that she won surprised us 中 that 从句说明 news 的内容；外层谓语是 surprised，不应把 won 与 surprised 当同层并列。']
],[['We found the classroom unusually quiet.','我们发现教室异常安静。','We 为主语，found 为谓语，the classroom 为宾语，unusually quiet 为宾补。'],['What the guide explained was useful.','导游讲解的内容很有用。','What the guide explained 整体作主语；was useful 是外层系表部分。']],[mc('The news made Leo happy. 中 happy 是：',['宾语补足语','主语','直接宾语','限定谓语'],0,'happy 进一步说明宾语 Leo 的状态，是宾补，不能因为它是形容词就自动认作定语。'),fill('She looks tired. 中 tired 作 ____。',['表语','主语补足语'],'looks 是系动词，tired 描述主语 She 的状态，基础教学中称表语。'),mc('Reading stories helps me relax. 的外层主语是：',['stories','Reading stories','helps','me'],1,'Reading stories 整体作主语；stories 只是 reading 内部的宾语。')],['skeleton','phrase-types','subject-clause']);

add('sentence','double-object','双宾语与宾补的区别','Double objects & complements','基础',ref('基本句型·双宾语'),'give sb. sth. / give sth. to sb.；make sb. happy','后一个成分是“给出的东西”，还是在说明前一个宾语？',[
 ['双宾语表达接收或受益关系','She gave me a notebook 中 me 为间接宾语，a notebook 为直接宾语；它们指不同对象，notebook 不是在说明 me 的身份。give、show、send、buy 等在合适用法中可带这种结构。'],
 ['to 与 for 不能任意换','give / send / show sth. to sb. 通常突出接收对象；buy / make sth. for sb. 通常突出受益者。具体选择取决于动词搭配，不能把每个含“给”的中文表达都译成同一介词。'],
 ['并非所有动词都允许双宾语','可以说 explain the rule to me，但标准表达通常不说 explain me the rule。introduce、describe 等也需按自身结构学习。转换还受宾语长短、代词形式和信息重点影响，不要把一种形式当作通用公式。'],
 ['宾补与宾语建立说明关系','They made her captain 中 captain 说明 her 的身份；They made her a cake 中 a cake 是为她制作的东西。判断时尝试读成“她是队长／她是蛋糕”，前者语义相合，后者不合；再结合动词结构确认。']
],[['Nora bought her sister a ticket.','诺拉给妹妹买了一张票。','her sister 是受益者，a ticket 是购买物；可按语境改为 bought a ticket for her sister。'],['The club elected Nora captain.','俱乐部选诺拉为队长。','captain 说明 Nora 的身份，是宾补，不是另一件被给予的东西。']],[mc('请选择正确的 explain 搭配。',['Please explain me the plan.','Please explain the plan to me.','Please explain to the plan me.','Please explain me to the plan.'],1,'explain 内容 to 人是这里所需的结构，不能直接照搬 give me a book 的双宾语形式。'),fill('Leo bought a scarf ____ his mother.（为妈妈买围巾）','for','buy sth. for sb. 表示为某人购买某物，通常用 for 引出受益者。'),mc('We found the door open. 中 open 与 the door 的关系是：',['open 说明门的状态','open 是另一件被找到的东西','open 是间接宾语','open 与 found 构成并列谓语'],0,'open 描述宾语 the door 的状态，因此作宾语补足语。')],['skeleton','object-complement','prepositions']);

add('sentence','required-adverbials','不可随意省略的补足信息','Obligatory adverbials','进阶',ref('基本句型·含必需状语的句型'),'put + 物 + 位置；SV(A) / SVO(A)','形式上像状语的成分，也可能是动词当前用法所要求的。',[
 ['动词会要求特定补足内容','She put the cup on the tray 中 put 表示“把……放在……”，通常既需要被放置的物体，也需要位置说明。只写 She put the cup，在普通独立语境中往往信息不完整。'],
 ['区分必需信息与附加信息','She read a book yesterday 中 yesterday 为可添加的时间说明，去掉后 read a book 仍完整；She put the book on the shelf 中 on the shelf 满足放置地点要求，不能仅因它是介词短语就认定可随意删去。'],
 ['五句型与七句型是分析口径','基础教学常用五种句型概括骨架；另一些教材把含必需地点等成分的主谓状、主谓宾状单列，形成七种框架。名称不同不改变学习目标：检查当前动词用法是否得到必要的对象或位置补足。'],
 ['能否省略还受语境和词义影响','live 可说 I live in Chengdu，也可在表示“活着”时独立用，如 He still lives；明确场景中的省略也可能自然。不能仅把单词列入“必须带状语”的清单，应先确定这一次使用的具体意义和语境。']
],[['Please put the glasses beside the plates.','请把玻璃杯放在盘子旁边。','glasses 是放置对象，beside the plates 提供当前 put 用法要求的位置。'],['The guests stayed for two nights.','客人们住了两晚。','for two nights 说明持续时间；stay 的补足与省略要按具体意义判断。']],[mc('在独立叙述“她把钥匙放到抽屉里”时，哪一句信息最完整？',['She put.','She put the keys.','She put the keys in the drawer.','She the keys in the drawer.'],2,'put 表示放置时，通常需要放置对象及位置，完整句应同时交代。'),fill('Please put the folder ____ the drawer.（放进抽屉里）',['in','into'],'in the drawer 或 into the drawer 均可说明放进抽屉的位置或方向；这个放置用法需要地点信息。'),mc('关于基本句型分析，合理的是：',['所有介词短语都能删掉','动词的实际用法决定所需补足','五句型与七句型不能描述同一句话','凡有地点词就是定语'],1,'句型名称是概括方式，真正需要核对的是动词在当前含义中要求的结构。')],['skeleton','double-object','prepositions']);

add('sentence','imperatives','祈使句与行动建议','Imperatives','基础',ref('句子的种类·祈使句'),'动词原形；Don’t + 原形；Let’s + 原形','祈使句通常对听话者提出行动要求，主语 you 常省略。',[
 ['肯定祈使句用动词原形','Please wait here、Be careful、Take a seat 都可提出请求或提醒。主语通常理解为 you，不需要把 is 或 are 加在句首；be 在这类结构中也用原形。'],
 ['否定通常借助 do not','Don’t touch the cable、Don’t be late 用 Don’t + 原形。即使后面的词是 be，也不改成 Isn’t 或 Aren’t。Never give up 也可作否定性劝告，语气由场景决定。'],
 ['let 结构先看谁采取行动','Let me check 表示让我检查；Let’s begin 常提出共同建议，否定常说 Let’s not argue。let 后用宾格，再接不带 to 的不定式。Let us go 在具体语境中也可表示请求对方允许我们离开。'],
 ['and 与 or 建立条件结果联系','Check the address, and you will find it 表示做到前项可有后果；Leave now, or you will miss the bus 表示不做前项会有不利结果。句首称呼如 Mia, sit here 中 Mia 是呼语，并不强制改成第三人称单数动词。']
],[['Please be patient with the new students.','请耐心对待新同学。','be 用原形；祈使句通常省略可理解的 you。'],['Hurry up, or we will miss the train.','快一点，否则我们会赶不上火车。','or 在这里引出不采取前项行动的不利后果。']],[mc('请选择正确的否定祈使句。',['Not be noisy.','Don’t be noisy.','Doesn’t be noisy.','Aren’t noisy.'],1,'否定祈使句通常用 Don’t + 动词原形，be 也适用这个结构。'),fill('Let’s not ____ (argue) about it now.','argue','Let’s not 后接动词原形，不能再加 to 或使用 -ing。'),mc('Turn left, and you will see the station. 中 and 后面表示：',['按前项行动会出现的结果','动作发生的过去时间','主语的身份','与前项无关的插入语'],0,'祈使句与 and 引出的陈述句可共同表达条件与结果的逻辑。')],['questions','real-if','verb-forms']);

add('sentence','exclamations','what 与 how 感叹句','Exclamations','基础',ref('句子的种类·感叹句'),'What + 名词性部分；How + 形容词 / 副词','先判断被突出的核心是名词短语还是程度特征。',[
 ['what 引出名词性部分','What a useful guide it is! 突出 a useful guide；What beautiful flowers! 突出复数名词短语；What good advice! 突出不可数名词短语。只有单数可数名词才在此类结构中需要考虑 a / an。'],
 ['how 引出程度特征','How quiet the room is! 突出形容词 quiet；How carefully she works! 突出副词 carefully。后面的主体关系通常保持陈述语序，不按普通直接疑问句把 is 提到主语前。'],
 ['省略有特定表达条件','What a surprise!、How lovely! 在语境明确时自然。它们属于允许省略的感叹表达，并不意味着所有名词短语或目的短语都能独立充当正式完整陈述句。'],
 ['感叹词与感叹句不是同一层','Wow 是词类中的感叹词；What a lovely view! 是一种句式。How tall is the tower? 询问信息，How tall the tower is! 表达感叹，需同时看语序、标点和交际目的。']
],[['What an interesting question you asked!','你提了一个多么有趣的问题！','what 后是单数可数名词短语 an interesting question，an 按 interesting 的起始音素选择。'],['How clearly the guide explains the rules!','导游把规则讲得多么清楚啊！','how 突出副词 clearly，后面用 the guide explains 的陈述关系。']],[mc('____ useful advice this is!',['What','What a','How','How a'],0,'advice 通常不可数，what 后直接接 useful advice，不能加 a。'),fill('____ carefully she draws!','How','carefully 是副词，突出其程度时用 How 引出。'),mc('哪一句是自然的感叹表达？',['How beautiful the gardens is!','How the garden beautiful is!','How beautiful the garden is!','What beautiful is the garden!'],2,'How + 形容词后接陈述关系 the garden is，区别于询问程度的疑问语序。')],['interjections','articles','questions']);

add('sentence','negation','否定范围与部分否定','Negation & scope','进阶',ref('句子的种类·否定结构'),'not all ≠ none；mustn’t ≠ needn’t','先找否定落在哪一层，再判断它是否否定了整个集合或整个动作。',[
 ['否定形式与动词结构配合','be、情态或已有助动词后可加 not，如 is not、cannot、has not finished；普通一般时实义动词借 do / does / did，后面的动词恢复原形。非谓语否定常放在结构前，如 not to leave、not knowing。'],
 ['部分否定与全否定','Not all the answers are correct 表示并非所有答案正确，仍可能有一些正确；None of the answers is correct 表示没有一个正确。not every、not both 与 no、neither 等的范围不同，不能只凭出现 not 就理解为全盘否定。'],
 ['已有否定意义时检查标准表达','Nobody came、I never saw it 中 nobody、never 已表达否定。在标准书面英语中，通常不用 didn’t 与 nobody 再重复否定同一事实；某些方言中的否定一致需与标准教学口径区分。'],
 ['位置和语境会改变解释','I don’t think she is ready 常表达我认为她尚未准备好；not uncommon 意为并不少见。He didn’t leave because he was tired 可能否定离开，也可能否定原因，应改写明确，而不要宣称只存在一种读法。']
],[['Not all the passengers got off at this stop.','并非所有乘客都在这一站下了车。','not all 只否定“全部都下车”，不能推导出没有人下车。'],['You don’t have to finish it today.','你不必今天完成它。','没有必要不等于禁止；mustn’t 常表示不允许做。']],[mc('Not every student agreed. 表示：',['每个学生都没同意','并非每个学生都同意','每个学生都同意','没有学生能表示意见'],1,'not every 是部分否定，只说明“全员同意”不成立，不等于全员反对。'),fill('She did not ____ (notice) the sign.','notice','did 已承担过去时和否定结构，后面的实义动词用原形 notice。'),mc('标准书面表达中哪一句最合适？',['Nobody didn’t arrive.（表达无人到达）','Nobody arrived.（表达无人到达）','Everybody arrived.（表达无人到达）','Not all arrived.（明确表达无人到达）'],1,'Nobody 自带否定；Not all 只是否定全体，不准确等于无人。')],['must','questions','quantifiers']);

add('tenses','future-in-past','过去将来与过去视角','Future in the past','进阶',ref('动词时态·过去将来'),'would do / was going to do；would be doing / would have done','立足点在过去，所说动作发生在那个过去立足点之后。',[
 ['“将来”相对于哪一个时间点','He said he would call 中 said 是过去参照点，电话是从那时看尚未发生的事。电话相对现在可能已经发生，也可能尚未发生，过去将来形式本身不决定最终结果。'],
 ['过去的打算、安排和临近动作','was / were going to do 常表示当时的打算或迹象；was / were about to do 表示当时正要发生。I was going to call, but I forgot 的未实现来自 but 后的语境，不是所有 was going to 都必然未实现。'],
 ['同一过去视角也可表达不同体态','would be doing 表示从过去看后续某时正在进行；would have done 可表达后续某点之前会已完成；would have been doing 可表达届时已持续多久。它们较少见，主要出现在具体转述中，需先建立清楚参照点。'],
 ['would 不自动等于虚拟','She promised she would help 通常是过去视角的预期；If she had time, she would help 则可是假设结果。would 也能表达礼貌或过去习惯，分类必须依据上下文，而不是只看一个词。']
],[['Mina said she would be working at nine that evening.','米娜说那晚九点她会正在工作。','said 提供过去视角；would be working 把过程放在当时的后续时刻。'],['He expected that by Friday he would have finished the report.','他预期到周五之前会完成报告。','过去的 expected 与后续截止点 by Friday 共同支持过去将来完成解释。']],[mc('He told me he would return the next day. 中 would return 主要表示：',['过去某时看以后的动作','现在正在进行','必然与事实相反','过去之前已完成'],0,'told 是过去立足点，the next day 是从当时看以后的时间，不必理解为虚拟。'),fill('She said she ____ (be going to) study abroad.（用过去形式转述她当时的打算）','was going to','过去转述中的原打算可用 was going to；she 为单数主语。'),mc('区分 would have finished 的过去将来和虚拟结果，最需要：',['只数单词','检查参照时间与假设语境','一律判为遗憾','一律改为现在完成时'],1,'相同形式可用于过去转述中的后续完成，也可用于非真实条件结果，必须结合语境。')],['future','unreal','reported']);

add('tenses','future-continuous','将来进行时','Future continuous','进阶',ref('动词时态·将来进行'),'will be + doing','把镜头放在将来某时，观察那时正在展开的过程。',[
 ['进行过程需要将来观察点','At eight tomorrow, I will be travelling 表示明天八点时旅程正在进行。时间点可以明说，也可由对话提供；重点不是动作一定恰好在八点开始，而是那时处于过程中。'],
 ['结构按助动词顺序组成','will 后用原形 be，进行 be 后用现在分词，构成 will be doing。否定在 will 后加 not，疑问把 will 提到主语前，如 Will you be working?，不能省掉 be。'],
 ['区别将来事实与过程视角','I will work tomorrow 陈述将来的工作；I will be working at ten tomorrow 说明十点时正在工作。将来进行时也可表达按正常进程预期会发生的活动，或礼貌询问安排，并非只能搭配一个精确钟点。'],
 ['不要把所有将来安排都强制进行化','已安排的近期活动也常用现在进行时，如 I’m meeting Ava tomorrow。状态动词在普通状态含义下通常不用进行式；选择形式依表达重点，不能见到 tomorrow 就固定填 will be doing。']
],[['This time tomorrow, we will be crossing the bridge.','明天这个时候，我们会正在过桥。','将来观察点是明天此时，crossing 描述那个时刻展开的过程。'],['Will you be using the printer this afternoon?','你今天下午会用打印机吗？','可礼貌询问对方届时的使用安排，为自己的计划作准备。']],[mc('At ten tomorrow, I ____ in the laboratory.（强调届时正在工作）',['will working','will be working','will have work','am work'],1,'将来进行时由 will be + -ing 构成，强调将来十点时的过程。'),fill('We will be ____ (wait) outside when you arrive.','waiting','进行助动词 be 后接现在分词 waiting。'),mc('Will you be joining us later? 可能用于：',['礼貌询问后续安排','只询问过去事实','强制表示动作已完成','证明说话人不知道任何时间关系'],0,'将来进行形式可以询问按安排或自然进程预期发生的活动，不只用于精确时刻。')],['future','continuous','future-perfect']);

add('tenses','future-perfect','将来完成时','Future perfect','进阶',ref('动词时态·将来完成'),'will have + done；by + 将来参照点','从将来某点回看：到那时已经完成，或状态已经持续多久。',[
 ['先建立将来的参照点','By Friday, I will have finished the report 把周五设为观察点，从那个点回看完成的报告。它不等同于 I will finish on Friday，后者把完成安排在周五，而不是突出截至周五已经完成。'],
 ['完成结构使用过去分词','will 后用 have，have 后用过去分词，如 will have written。否定用 will not have done，疑问用 Will ... have done?；不要把 will have went 与 will have been 混为合法形式。'],
 ['by 与 by the time','by next month、by then 可给截止点；By the time you return, we will have left 中时间从句用现在形式 return 表达将来。不要把该时间从句机械改成 will return，也不要把所有含 by 的句子都强制判成将来完成。'],
 ['完成既可突出结果，也可表示持续','By June, she will have lived here for five years 描述截至将来某点的持续状态。需要强调活动过程时可用将来完成进行式；状态动词通常更适合完成式。实际时间关系比单一“标志词”更重要。']
],[['By the time the guests arrive, we will have prepared dinner.','客人到达时，我们就已经准备好晚餐了。','准备完成在客人到达这个将来参照点之前。'],['By July, Ken will have known Mia for ten years.','到七月，肯认识米娅就满十年了。','know 表状态，完成式自然；不必为强调时长强行使用进行形式。']],[mc('By noon tomorrow, I ____ the final draft.（届时已完成）',['will have completed','will completing','have complete','had been complete'],0,'从明天中午回看此前的完成，用 will have completed。'),fill('By the time she ____ (return), we will have finished.',['returns','has returned'],'表示将来的时间从句可用现在形式 returns；强调已经返回也可用现在完成形式 has returned。'),mc('will have written 中 written 是：',['过去分词','一般过去式','第三人称单数','不带 to 的名词'],0,'完成助动词 have 后要求过去分词，write 的过去分词为 written。')],['perfect','future-time','future-perfect-continuous']);

add('tenses','past-perfect-continuous','过去完成进行时','Past perfect continuous','进阶',ref('动词时态·过去完成进行'),'had been + doing','从过去某时回看此前持续的过程，而不是只定位一次过去动作。',[
 ['过去的观察点加此前过程','When the bus arrived, we had been waiting for forty minutes 把车到达设为过去参照点，说明此前已持续等候。参照点可来自另一事件或上下文，不是动作发生很久以前就必须用该形式。'],
 ['结构固定为 had been doing','had 表完成的过去视角，been 为 be 的过去分词，doing 表进行过程。所有人称都用 had；否定在 had 后加 not，疑问把 had 提前，不能省掉 been。'],
 ['与过去完成时比较结果和过程','She had written three pages 常突出完成数量；She had been writing all morning 常突出持续活动，可解释当时为何疲惫。完成进行形式不直接保证整个任务已经结束，是否仍持续由后文决定。'],
 ['状态与有界动作仍需审查','普通 know、belong 等状态含义通常不采用进行式，已持续的状态可用 had known。只说单次瞬间完成的事件时，过去完成通常更合适；反复或过程化解释另当别论。']
],[['The ground was wet because it had been raining all night.','地面很湿，因为此前整夜都在下雨。','从过去地面湿的时刻回看此前持续的下雨过程。'],['They had been discussing the plan for an hour when I arrived.','我到达时，他们已经讨论这个计划一小时了。','had been discussing 表示到过去到达时已持续多久，不表示刚好那时开始。']],[mc('She was tired because she ____ all morning.（强调此前持续奔跑）',['had been running','will be running','has run tomorrow','had running'],0,'过去的疲惫作为参照，用 had been running 突出此前持续的活动。'),fill('We had been ____ (wait) for an hour when the doors opened.','waiting','had been 后用现在分词 waiting，构成过去完成进行时。'),mc('had written five emails 与 had been writing emails 的常见侧重点是：',['前者完成数量，后者持续过程','前者必为将来，后者必为现在','二者都不含过去参照点','二者只能描述同一瞬间动作'],0,'过去完成常突出已完成的结果或数量，完成进行常突出截至过去参照点的活动过程。')],['past-perfect','perf-cont','future-perfect-continuous']);

add('tenses','future-perfect-continuous','将来完成进行与十六种时态框架','Perfect continuous in the future','拓展',ref('动词时态·十六种形式'),'will have been + doing；四种时间视角 × 四种体态','框架帮助识别时间关系；常见程度不同，不必把十六种形式机械等量使用。',[
 ['将来参照点之前累计的活动','By next June, I will have been teaching here for ten years 表示到明年六月，任教这一活动已持续十年。will be teaching 强调届时进行，will have been teaching 进一步回顾此前累计的过程。'],
 ['完成、进行两层按顺序衔接','will 后用 have，have 后用 been，进行 be 后用 doing，得到 will have been doing。普通状态含义通常选择 will have known 等完成式；实际表达也可用 Next June will mark my tenth year here 这样更自然的改写。'],
 ['四个视角与四种体态组合','按“一般／进行／完成／完成进行”排列：现在为 work(s)／am、is、are working／have、has worked／have、has been working；过去为 worked／was、were working／had worked／had been working；将来为 will work／will be working／will have worked／will have been working；过去将来为 would work／would be working／would have worked／would have been working。它们是十六种教学组合，频率并不相同。'],
 ['罕见组合首先理解，不强求套用','过去将来进行 would be doing、过去将来完成 would have done、过去将来完成进行 would have been doing 多见于特定转述。She said that by June she would have been working there for ten years 需要过去转述与后续截止点共同支持；同形也可能用于虚拟，须看语境。']
],[['By next month, we will have been studying together for a year.','到下个月，我们一起学习就满一年了。','从将来下个月回看累计持续的学习过程。'],['She said that by August she would have been managing the shop for six years.','她说，到八月她管理这家店就满六年了。','said 是过去视角，by August 是当时后续截止点；这是低频但可解释的转述形式。']],[mc('By next May, I ____ here for ten years.（突出持续教学过程）',['will have been teaching','will have teaching','had teach','have been taught tomorrow'],0,'从将来截止点回看此前持续的活动，用 will have been teaching。'),fill('will have been ____ (work) 中应填哪种词形？','working','been 后的进行层需要现在分词 working；整个组合为 will have been working。'),mc('“十六种时态”框架最合理的学习方式是：',['每种形式在所有语境中同样常用','先理解参照点与体态，再注意使用频率','凡有 would 就一定是虚拟','凡表示持续就禁止完成式'],1,'教学框架概括组合关系，并不意味着十六种形式频率或语境可互换。')],['future-in-past','future-perfect','past-perfect-continuous']);

add('parts','modal-perfect','情态动词与完成形式','Modal perfect forms','进阶',ref('助动词与情态动词·完成形式'),'modal + have + done','have done 把情态判断指向此前情况，具体含义仍由情态词和上下文决定。',[
 ['过去推测：是否可能发生过','must have done 常是较有把握的过去肯定推测；may / might / could have done 可表示过去可能发生；can’t / couldn’t have done 可表示过去不可能。它们表达判断，不自动给出事实证据，也不宜机械量化为固定概率。'],
 ['过去建议与实际结果结合','should / ought to have done 常用于批评或遗憾，表示过去本应做而未做；但 The train should have arrived by now 也可表达按预期应已到达，不能把每一个 should have done 都判为没有做。'],
 ['本可做到和本无必要','could have done 可表示过去的可能，也可表示本来能做却没做，如 You could have asked me。needn’t have done 通常表示已经做了但无必要；didn’t need to do 只说明无必要，是否做了要看上下文。'],
 ['先找情态意义，再还原时间','must have left 不是“过去必须离开”，普通过去义务常用 had to leave。否定位置也重要：can’t have left 否定过去离开的可能，shouldn’t have left 常批评已经离开。判断要结合明示的结果和说话意图。']
],[['The lights are off; the staff must have left.','灯都熄了，员工们一定已经离开了。','must have left 根据当前线索推测过去事件，不表示过去的命令。'],['You needn’t have printed the whole file; I only needed one page.','你原本不必打印整个文件；我只需要一页。','needn’t have printed 表示打印确实发生了，但没有必要。']],[mc('He must have forgotten the appointment. 主要表达：',['推测他已经忘了约会','命令他过去必须忘记','证明他一定没忘','他未来必须忘掉'],0,'must have done 常对过去作较有把握的肯定推测。'),fill('The receipt is here, so she may have ____ (pay) already.','paid','may have 后使用过去分词 paid，表示可能已经付款。'),mc('关于 needn’t have bought，正确的是：',['通常表示买了但原本不必','必然表示没有买','相当于禁止将来买','与 didn’t need to buy 的实际发生含义永远相同'],0,'needn’t have done 通常带已经做了的含义；didn’t need to do 是否实际做了需看语境。')],['can','must','should','perfect']);

add('tenses','passive-special','特殊结构的被动与边界','Special passive structures','进阶',ref('被动语态·特殊结构'),'modal be done / be made to do / be looked after','被动转换要保留动词的搭配和补足要求，不是只在原句前加 be。',[
 ['双宾语与宾补保留原有关系','She gave him a badge 可按语境改为 He was given a badge 或 A badge was given to him。They elected her leader 改为 She was elected leader，leader 仍说明她的身份。具体能否转换取决于动词和自然表达习惯。'],
 ['短语动词中的小词不能丢','They looked after the children 改为 The children were looked after，after 是整体搭配的一部分。情态被动用 must be checked 等；推测过去被动事件可用 must have been checked。'],
 ['有些主动省 to 结构在被动中恢复','They made him wait 可变为 He was made to wait；主动感官结构如 They saw him leave 也可有 He was seen to leave。不要据此为所有动词套同样变换；let 等常用其他自然表达改写。'],
 ['被动形式、状态与主动被动义区分','The door is closed 可能描述状态，也可能涉及被动动作，需看上下文。This book sells well 用主动形式表达销售特性；The room needs cleaning 的 doing 可带被动理解。不及物 happen、arrive 普通用法不能生造 be happened / be arrived。']
],[['The visitor was made to wait outside.','来访者被要求在外面等候。','make 在主动宾补中常省 to，被动中使用 was made to wait。'],['The old bridge must have been repaired recently.','这座旧桥最近一定修缮过。','must 表推测，have been repaired 表示推测过去发生的被动事件。']],[mc('The children were looked ____ by a neighbor.（由邻居照顾）',['after','at to','off to','零介词'],0,'look after 是照顾的整体搭配，被动转换后仍要保留 after。'),fill('He was made ____ (leave) the room.','to leave','主动 make sb. leave 转为被动时通常恢复 to，写成 was made to leave。'),mc('哪一个普通用法不能直接套 be + 过去分词？',['repair the roof','write a letter','arrive at the station','check the tickets'],2,'arrive 在普通到达用法中不直接带可转为主语的宾语，不能生造 was arrived。')],['passive','object-complement','phrasal','modal-perfect']);

add('sentence','clause-basics','从句、分句与连接层级','Clause foundations','基础',ref('从句与连接结构概述'),'看上层作用 → 划边界 → 看内部主谓与引导词','从句类型由整个结构的作用决定，不能只看 when、where、that 等单个词。',[
 ['独立分句和从属分句','I stayed 可独立陈述，because it rained 依附主句说明原因。普通限定分句通常有主谓关系；非限定从句另有不定式或分词形式。基础判断先区分是否能独立成句，以及它依附哪一层结构。'],
 ['同一引导词可以引出不同作用','I know where she lives 中 where 从句整体作宾语；Stay where she lives 中整体说明地点；the town where she lives 中修饰 town。不能因为 where 表地点就把每一种都叫地点状语从句。'],
 ['连接作用与内部角色分别检查','I know that she left 中 that 只引出陈述内容；I know what she bought 中 what 还作 bought 的宾语。内部主谓齐全也未必只能用 that，例如 why 可说明原因，选择还取决于意义。'],
 ['多谓语要按层级解析','I know that she said she was tired 含嵌套的内容从句，know、said、was 不在同一层。一个动词组合也可能有多个动词词形，如 has been reading。先分助动词组合、并列和从属，再检查是否缺连接。']
],[['I remember when the library opened.','我记得图书馆是什么时候开放的。','when 从句整体作 remember 的宾语，不能仅凭 when 的时间意义判为时间状语。'],['The library was quiet when we arrived.','我们到达时，图书馆很安静。','when 从句为整件事提供时间说明，作时间状语。']],[mc('I know where the keys are. 中 where 从句整体作：',['宾语','地点先行词','并列主句','形容词'],0,'整个从句是 know 的内容宾语；where 在从句内部才承担地点信息。'),fill('I wonder where she ____ (be) now.','is','名词性从句通常用陈述语序 where she is，she 后用 is。'),mc('I think she knows him. 中多个动词为何可以共存？',['省略 that 的从属结构合法','因为一个句子可任意连动词','所有动词都属于一个完成时','knows 是形容词'],0,'think 后的宾语从句可省 that；两层限定关系有从属连接，不能只数词判错。')],['objects','relative-adverbs','sentence-elements']);

add('adverbial','place-manner-clauses','地点与方式状语从句','Place & manner clauses','进阶',ref('状语从句·地点与方式'),'where / wherever；as / as if / as though','先看整个从句是在说明位置，还是说明动作如何发生。',[
 ['地点从句整体补充位置','Leave the box where I can see it 中 where 从句说明放箱子的位置，不一定有名词先行词。the place where I left it 中则是从句在名词短语内修饰 place，应与定语从句区分。'],
 ['wherever 常带任意地点或让步色彩','Wherever you go, keep in touch 可理解为无论去哪里都保持联系。它不只是某一个固定地点，分类时应承认地点意义与让步意义可能交叉，而不是硬套唯一中文译法。'],
 ['方式从句表达按照或如同','Do it as I showed you 中 as 表按照演示的方式；Leave it as it is 表保持原样。as 还可能表示时间、原因、比较等，不能看见 as 就一律判作方式。'],
 ['as if 不一定需要虚拟形式','It looks as if it is going to rain 可描述有根据的印象；He talks as if he knew the answer 可表达实际上并不知道的距离感。先确定说话人是否将内容看作现实可能，再选择时间和假设形式。']
],[['Keep the medicine where children cannot reach it.','把药放在孩子够不到的地方。','where 从句整体说明存放地点，没有需要修饰的 place 先行词。'],['Arrange the cards as I showed you.','按我给你演示的方式排列卡片。','as 从句说明排列方式，不是原因或时间关系。']],[mc('Put the chair where the light is strongest. 中 where 从句主要说明：',['放椅子的位置','chair 的复数','过去完成的次数','说话人的身份'],0,'从句整体补充 put 所需的位置；没有名词 place 作为从句的先行词。'),fill('Do exactly ____ I demonstrated.（用本课表示“按照”的方式连词）','as','as 在这里引导方式从句，表示按照示范的方式。'),mc('关于 as if 从句，合理的是：',['所有情况必须用过去时','可按现实可能或非真实假设选择形式','所有情况必须用将来完成时','只可能表示时间'],1,'as if 可以表达有依据的现实印象，也可表达非真实假设；形式不能一概规定。')],['relative-adverbs','unreal','required-adverbials']);

add('adverbial','comparison-clauses','比较从句与比较对象','Comparison clauses','进阶',ref('状语从句·比较；比较结构'),'than / as ... as / the + 比较级','比较的是同类的性质、数量或程度；检查对象和被省略的信息。',[
 ['than 与比较级配合','She writes more clearly than I do 中 than I do 是比较部分，do 替代重复的 write。比较从句可省略共同内容，日常 than me 等表达也可能自然，不能把口语宾格一律判为语法错误。'],
 ['as ... as 的两层作用','as careful as she is 表示同等程度，第一个 as 表程度，第二个引出比较部分；not as / so careful as 通常表示不及。中间用形容词或副词原级，不能写 as more careful as。'],
 ['比较对象应在同一层','The weather here is warmer than that in Harbin 把这里天气与哈尔滨天气比较，that 替代 weather。不要把天气直接与城市作同一层比较；复数名词可用 those 避免重复，如 prices / those。'],
 ['关联比较与倍数要清楚','The more you practice, the more confident you become 表示两种变化对应，不是普通最高级。twice as long as 表示总长度为两倍；写作时明确比较总量还是增加量，避免含混的中文倍数直译。']
],[['This route is shorter than the one we used yesterday.','这条路线比我们昨天走的那条短。','比较两个同类路线；one 替代可数名词 route，后面再带修饰。'],['The more carefully you plan, the fewer mistakes you make.','计划越仔细，犯的错误就越少。','两侧 the + 比较级表达对应变化，fewer 搭配可数复数 mistakes。']],[mc('The weather here is colder than ____ in my hometown.',['that','my hometown','those','it is the city'],0,'that 替代单数不可数 weather，使比较落在两地天气，而非天气与城市之间。'),fill('She is as ____ (patient) as her teacher.','patient','as ... as 中使用原级 patient，不用 more patient 或比较级词尾。'),mc('The more you read, the more you discover. 表达：',['两种变化之间的对应关系','唯一的最高级对象','直接疑问','过去反事实条件'],0,'关联的 the + 比较级表示随前者变化，后者也相应变化。')],['comparison','pronouns','degree-order']);

add('sentence','ellipsis','省略、替代与可恢复信息','Ellipsis & substitution','进阶',ref('特殊句式·省略与替代'),'省掉能还原的成分；保留合法连接与助动词','简洁不等于残缺：先尝试还原，再核对结构是否允许。',[
 ['并列和助动词省略','She opened the door and walked in 由两个谓语共用主语；He can swim, and she can too 中第二个 can 后省去 swim。省略保留了连接层次及所需助动词，不代表可任意删除独立句的主语或谓语。'],
 ['从句压缩需要主体关系成立','While she was reading, she took notes 可按条件压缩为 While reading, she took notes。若读书者与主句主语不同，直接删掉从句主语可能造成悬垂修饰；If necessary 等适合的 it + be 结构另有固定省略。'],
 ['引导词省略各有范围','know 后的宾语从句 that 常可省；限制性定语从句中作宾语的关系代词常可省。作主语的关系词、前置介词后的关系词等不能照搬。保留 that 有时有助于消除复杂结构中的歧义。'],
 ['替代是出现一个代替表达','I think so 用 so 替代前述命题；She promised to help and did so 用 did so 替代动作；one / ones 替代同类可数名词。省略则不再出现对应内容。具体动词是否允许 so、not 或 to 作简略答语，要按搭配判断。']
],[['I can finish the first task, and Jo can too.','我能完成第一项任务，乔也能。','Jo can 后省略可由前文恢复的 finish the first task，can 仍保留。'],['While waiting for the bus, we reviewed the map.','等公交时，我们查看了地图。','等待者是主句主语 we，主体对应支持该分词省略结构。']],[mc('Would you like to join us? — I’d love ____.（保留不定式标记）',['to','that I','joining to','do to'],0,'不定式简略答语可保留 to，后面的 join you 由前文恢复。'),fill('He can speak Spanish, and I ____ too.（保留表示能力的相同情态动词）','can','保留与前文情态能力对应的 can，省略可恢复的 speak Spanish。'),mc('压缩 While reading, the phone rang 的问题通常是：',['reading 的主体与 the phone 不合','while 必须永远删除','phone 不能作主语','所有省略结构都错误'],0,'普通分词状语通常与主句主语建立逻辑关系，电话不是读书者；应补明读书的人或改写。')],['coordination','relative-omit','participles']);

add('sentence','formal-it','形式主语、形式宾语与 it','Formal it','进阶',ref('常用结构·it 的用法'),'It is ... to do / that ...；find it ... to do','先分清 it 是指具体对象，还是暂占一个句法位置。',[
 ['指代和空主语先区分','I bought a clock. It is quiet 中 it 指同一具体时钟；It is raining、It is late 中 it 为天气、时间等结构服务，没有一个前文物品可直接替换。它们都与 one 表示同类另一对象不同。'],
 ['形式主语把长内容放后面','It is helpful to make notes 中 it 占据主语位置，to make notes 给出实际评价的活动；It is clear that she understands 中 that 从句给出内容。通常不能简单把形式 it 删掉，留下 Is helpful to make notes 作为普通完整句。'],
 ['形式宾语与宾补配合','I find it difficult to explain 中 it 先占宾语位置，difficult 作宾补，to explain 给出较长内容。不能写 I find difficult to explain 来机械省掉形式宾语；不同动词允许的结构仍需核对。'],
 ['不要把所有 it 都叫强调句','It was Mia who called 属于强调框架；It is important to listen 属于形式主语。It takes sb. time to do 表花时间；It is the first time that I have flown 常用现在完成，过去立足点相应常用过去完成。']
],[['It is difficult to hear the guide from here.','从这里很难听清导游的话。','it 是形式主语，to hear... 给出被评价的活动。'],['We found it useful to label every folder.','我们发现给每个文件夹贴标签很有用。','it 为形式宾语，useful 为宾补，to label... 为具体内容。']],[mc('I find ____ hard to concentrate in this room.',['it','that it to','what','零成分'],0,'find it + 形容词 + to do 中 it 是形式宾语，不能只保留宾补 hard。'),fill('It takes us twenty minutes ____ (walk) to the station.','to walk','It takes sb. time to do 用不定式说明花费时间的活动。'),mc('It is obvious that she knows the answer. 中 it 通常是：',['形式主语','指前文另一支笔','宾语补足语','强调句中被强调的人'],0,'that 从句给出“她知道答案”这一实际内容，it 在句首先占主语位置。')],['subject-clause','emphasis','infinitive']);

add('nonfinite','absolute-with','独立主格与 with 复合结构','Absolute & with constructions','拓展',ref('特殊句式·独立主格与 with'),'逻辑主语 + 补充部分；with + 宾语 + 宾补','这类附加结构可以有自己的逻辑主体，不要误当作第二个无连接主句。',[
 ['普通分词状语与自身主体不同','Having finished the work, we left 中完成工作的是 we；The work finished, we left 中附加结构有自身主体 the work，finished 描述它的被动完成状态。独立主格不具有普通完整限定分句的全部结构。'],
 ['with 复合结构先看宾语关系','With the baby sleeping, she spoke quietly 中 baby 是 sleeping 的执行者；With the work finished, we could rest 中 work 是 finished 的承受对象。形式选择取决于逻辑关系，不能一律用 doing 或 done。'],
 ['不定式与其他补足形式','With three emails to write, I stayed at my desk 中 to write 表示尚待处理的任务，可由主句主体执行；不必因 emails 承受 write 就机械改为被动。with the door open、with the lights on、with a book in her hand 也可补充状态或位置。'],
 ['和普通介词短语、限定从句区分','with my friends 只有普通介词宾语，不是完整的 with 复合结构。Weather permitting, we will go 可提供条件；若使用 The weather is fine 这样的限定分句，则需合适连接或独立标点，不能只用逗号生硬拼接。']
],[['With the windows closed, the room became quiet.','窗户关上后，房间安静了下来。','windows 是 closed 的逻辑主体并承受关闭，整个 with 结构提供背景。'],['Weather permitting, we will have lunch outside.','天气允许的话，我们将在室外吃午饭。','Weather 是 permitting 的自身逻辑主语，整体提供条件。']],[mc('With the children ____, we spoke softly.（孩子们正在睡觉）',['sleeping','slept by','to sleeping','are sleeping'],0,'children 是睡觉的执行者，with 复合结构中使用现在分词 sleeping，不加入限定谓语 are。'),fill('With all the tickets ____ (sell), the organizer closed the box office.','sold','tickets 承受出售，且语境说明已售完，使用过去分词 sold。'),mc('with my classmates 与 with my classmates waiting 的区别是：',['后者有说明宾语状态的补足部分','前者必定是独立限定主句','二者都必须有谓语 are','with 后不能使用人称对象'],0,'前者是普通介词短语；后者还用 waiting 说明 classmates 的活动，形成 with 复合结构。')],['participles','ellipsis','punctuation-analysis']);

add('sentence','punctuation-analysis','标点、完整句与长句分析','Punctuation & sentence analysis','进阶',ref('语序 标点与句子分析'),'找主干 → 划层级 → 核修饰与指代 → 检查边界','逗号不是万能连词；长句的难度来自层次，不来自单词数量。',[
 ['普通陈述先满足完整结构','The students near the gate 只是名词短语；To improve my reading 只是非谓语目的结构。作为无语境的正式完整陈述，通常还需合法主谓关系及动词所需补足。祈使句、标题和规范省略另按各自条件理解。'],
 ['独立分句需要恰当边界','I was tired, I went home 通常是逗号拼接；可改为 I was tired, so I went home，或用分号、句号。however 常是连接性副词，不能仅凭逗号加 however 就把两个独立分句合法粘连。'],
 ['补充与必要限定使用不同标点','My brother, who lives nearby, visits often 中从句是补充说明，句中通常两侧分隔；the students who passed 中从句限定是哪一群学生，不能任意加逗号改变意义。插入语和同位说明也需结合是否必要限定判断。'],
 ['长句按结构逐层拆解','先圈出限定谓语组合，暂括后置定语、从句和插入语，找外层主语中心与谓语。再判断 and 连接词、短语还是分句，定位非谓语逻辑主体与代词所指。若修饰或指代确有两种合理读法，应承认歧义并通过语境或改写澄清。']
],[['The path was slippery; however, the hikers continued carefully.','小路很滑，不过徒步者们仍小心地继续前进。','两个独立分句用分号建立边界，however 作连接性副词。'],['The books that we borrowed yesterday, as you may recall, belong to the museum.','你或许还记得，我们昨天借的那些书属于博物馆。','外层主干是 The books belong to the museum；定语从句和插入语各有自己的层级。']],[mc('哪一句避免了普通正式写作中的逗号拼接？',['It was dark, we stopped.','It was dark; we stopped.','It was dark, however we stopped.','It was dark we stopped.'],1,'分号可以连接语义相关的独立分句；单独逗号或无边界连接通常不合适。'),fill('The students near the gate ____ waiting.（用 be 构成完整进行谓语）','are','主语中心 students 为复数，are waiting 是完整的进行谓语，不能只写 waiting 作独立限定谓语。'),mc('分析长句时，最可靠的第一步通常是：',['先圈限定谓语组合并找外层主干','把每个逗号都当句号','把每个 and 都切成两个独立句','见到最后一个名词就认定为主语'],0,'找到限定动词组和外层主语中心，才能再分辨并列、从属、插入与非谓语层级。')],['clause-basics','sentence-elements','coordination']);
const correction=(title,wrong,right,text)=>({title,wrong,right,text});
const details={
 'word-formation':{classification:['派生','合成','词类转化','语法词形变化'],pitfalls:[
  correction('修饰动作需要恰当词形','She speaks English fluent.','She speaks English fluently.','fluent 是形容词；这里修饰 speaks，应使用副词 fluently。'),
  correction('名词前复合修饰语中的单位','We took a ten-minutes break.','We took a ten-minute break.','ten-minute 整体在名词前作一个修饰单位，minute 通常用单数。')]},
 determiners:{classification:['冠词','指示与物主限定','数量与数词','限定词顺序'],pitfalls:[
  correction('核心限定词不随意叠加','The my notebook is blue.','My notebook is blue.','my 已说明所属，通常不直接与 the 叠加。'),
  correction('物主限定与独立物主代词','This is mine pen.','This is my pen.','my 后接所限定的名词，mine 独立代替“我的某物”。')]},
 'noun-phrase':{classification:['中心名词','前置限定与修饰','后置修饰','整体成分与内部成分'],pitfalls:[
  correction('不要让谓语跟随修饰语中的名词','The price of these books are high.','The price of these books is high.','主语中心是单数 price，of these books 不决定外层谓语的数。'),
  correction('数量与中心名词的数','I bought two useful book.','I bought two useful books.','two 限定可数名词时，中心 book 应采用复数 books，形容词 useful 不变化。')]},
 'verb-forms':{classification:['五种基本词形','助动词链','限定谓语','非谓语功能'],pitfalls:[
  correction('过去式不等于过去分词','She has wrote the summary.','She has written the summary.','完成助动词 has 后接过去分词 written，不接过去式 wrote。'),
  correction('情态动词后保持原形','He can swims very well.','He can swim very well.','can 后接动词原形，不加第三人称单数 -s。')]},
 'phrase-types':{classification:['名词短语','动词短语','形容词与副词短语','介词与非谓语短语'],pitfalls:[
  correction('表语中心需要形容词','She is very proudly of her team.','She is very proud of her team.','very proud of her team 是形容词短语作表语，不能把中心 proud 改为副词 proudly。'),
  correction('介词短语内部使用合适的宾语','We went with they.','We went with them.','with 后接人称代词宾格；短语整体作用与内部代词形式要分别检查。')]},
 'sentence-elements':{classification:['主语与谓语','宾语与表语','宾语补足语','定语、状语与同位说明'],pitfalls:[
  correction('名词短语不自动构成完整陈述','The students in the classroom.','The students are in the classroom.','在无语境的完整陈述中，原表达只有主语名词短语；补入 are 才说明学生所在位置。'),
  correction('宾补说明宾语状态','We found the room emptily.','We found the room empty.','empty 描述宾语 room 的状态，作形容词宾补，不用副词形式。')]},
 'double-object':{classification:['间接与直接宾语','to / for 转换','动词搭配限制','双宾语与宾补'],pitfalls:[
  correction('explain 不照搬 give 的双宾语结构','Please explain me the rule.','Please explain the rule to me.','通常用 explain 内容 to 人，不能机械写 explain 人 内容。'),
  correction('宾语位置使用宾格代词','They elected she captain.','They elected her captain.','her 是 elected 的宾语，captain 说明 her 的身份，不能把宾格改为主格 she。')]},
 'required-adverbials':{classification:['主谓状','主谓宾状','动词所需补足','语境允许的省略'],pitfalls:[
  correction('放置用法通常需要地点信息','She put the keys.','She put the keys in the drawer.','在普通独立的放置叙述中，仅给出对象通常不够，in the drawer 补足放在哪里。'),
  correction('介词本身也需要完整结构','Please put the folder on.','Please put the folder on the desk.','这里的 on 引出放置地点，不能只留下介词却没有其宾语。')]},
 imperatives:{classification:['肯定祈使','否定祈使','let 结构','祈使与 and / or'],pitfalls:[
  correction('be 也用动词原形','Is careful when crossing the road.','Be careful when crossing the road.','作提醒的祈使句使用原形 be，而不是第三人称单数 is。'),
  correction('否定祈使用 Don’t','Doesn’t touch the switch.','Don’t touch the switch.','否定祈使通常用 Don’t + 原形，不依据省略的听话者改成 Doesn’t。')]},
 exclamations:{classification:['what + 名词短语','how + 形容词 / 副词','语境省略','感叹与疑问'],pitfalls:[
  correction('不可数名词前不机械加 a','What a useful advice!','What useful advice!','advice 通常不可数，这里的 what 感叹结构不加 a。'),
  correction('系表关系用形容词描述主语','How beautifully the garden is!','How beautiful the garden is!','这里表达花园本身很美，is 后对应形容词 beautiful，而不是修饰动作的副词 beautifully。')]},
 negation:{classification:['not 与动词结构','部分与全部否定','否定范围','语境与双重否定'],pitfalls:[
  correction('did 后恢复原形','She did not noticed the warning.','She did not notice the warning.','did 已承担一般过去时关系，后面的实义动词用原形 notice。'),
  correction('标准教学中的否定重复','Nobody didn’t come.','Nobody came.','若想表达“没有人来”，nobody 已带否定意义；这里按标准书面语纠正，方言否定一致另行分析。')]},
 'future-in-past':{classification:['过去视角的一般将来','过去的打算','进行与完成组合','与虚拟和习惯区别'],pitfalls:[
  correction('would 后使用原形','She said she would arrived soon.','She said she would arrive soon.','would 后接动词原形 arrive，不能直接接过去式 arrived。'),
  correction('过去打算的结构保持完整','He was going study medicine.','He was going to study medicine.','表示过去打算使用 was going to do，不能遗漏不定式符号 to。')]},
 'future-continuous':{classification:['将来观察点','will be doing','正常进程与礼貌询问','与一般将来区别'],pitfalls:[
  correction('进行助动词 be 不能漏','At nine tomorrow, I will working.','At nine tomorrow, I will be working.','will 后需 be，再由 be 接 working 构成将来进行。'),
  correction('be 后的进行词形','This time tomorrow, we will be travel.','This time tomorrow, we will be travelling.','表示届时正在旅行，进行层需要 -ing 形式；美式拼写 traveling 也正确。')]},
 'future-perfect':{classification:['将来截止点','will have done','by the time','结果与持续状态'],pitfalls:[
  correction('完成层使用过去分词','By Friday, she will have wrote the report.','By Friday, she will have written the report.','will have 后应接过去分词 written，不用过去式 wrote。'),
  correction('将来时间从句通常用现在形式','By the time she will return, we will have finished.','By the time she returns, we will have finished.','这里 by the time 引导将来时间从句，通常用 returns；不是关于所有从句中 will 的绝对禁令。')]},
 'past-perfect-continuous':{classification:['过去参照点','had been doing','此前持续过程','与完成结果比较'],pitfalls:[
  correction('完成进行要保留 been','We had waiting for an hour when she arrived.','We had been waiting for an hour when she arrived.','had been waiting 把持续过程放在过去到达时之前，不能省掉 been。'),
  correction('been 后使用 -ing','He had been worked all night and was exhausted.','He had been working all night and was exhausted.','突出此前持续工作时用 working；had been worked 若作被动需要另一种动词与语义结构，不合这里的主动意思。')]},
 'future-perfect-continuous':{classification:['将来累计过程','will have been doing','十六种教学组合','低频与虚拟同形'],pitfalls:[
  correction('完成与进行层都要保留','By June, I will have teaching here for ten years.','By June, I will have been teaching here for ten years.','have 之后需 been，been 之后用 teaching，完整表达届时累计的持续过程。'),
  correction('have 后的 be 用过去分词','She said she would have be working there for a year by July.','She said she would have been working there for a year by July.','would 后用 have，完成助动词 have 后必须用 been，再接 working。')]},
 'modal-perfect':{classification:['过去可能与推测','本应与预期','本可与本无必要','否定情态完成'],pitfalls:[
  correction('情态完成不是过去式直接相接','He must has forgotten the date.','He must have forgotten the date.','情态动词 must 后使用原形 have，不能加第三人称单数 -s。'),
  correction('完成层选过去分词','She may have went home already.','She may have gone home already.','may have 后接 gone；went 是一般过去式，不是过去分词。')]},
 'passive-special':{classification:['双宾语与宾补的被动','短语动词被动','省 to 的恢复','被动、状态与主动意义'],pitfalls:[
  correction('make 的被动恢复 to','He was made wait outside.','He was made to wait outside.','对应主动 make him wait 的被动通常用 be made to wait。'),
  correction('短语动词不可漏介词','The child was looked by the nurse.','The child was looked after by the nurse.','表达“被照顾”需保留 look after 的 after，不能只留下 looked。')]},
 'clause-basics':{classification:['独立与从属分句','名词性、定语与状语作用','引导词内部角色','嵌套与并列'],pitfalls:[
  correction('名词性从句保持陈述语序','I wonder where is she.','I wonder where she is.','整句在陈述想知道的内容，where 后通常用 she is，不套独立疑问的倒装。'),
  correction('从属分句不能任意独立陈述','Because the bus was late.','Because the bus was late, we walked.','作为无上下文的完整书面陈述，需要主句；对话答语等省略语境另当别论。')]},
 'place-manner-clauses':{classification:['where 地点','wherever 与让步','as 方式','as if 的现实与假设'],pitfalls:[
  correction('地点从句也需要内部主谓','Leave the box where can I see it.','Leave the box where I can see it.','where 后是从句内部的陈述关系 I can see it，不作直接疑问倒装。'),
  correction('按示范方式做使用 as','Do it as I shown you.','Do it as I showed you.','as 从句需要限定谓语；这里叙述过去的示范用 showed，shown 不能单独代替过去式。')]},
 'comparison-clauses':{classification:['than 比较','as ... as','对象替代','关联比较与倍数'],pitfalls:[
  correction('as ... as 中用原级','She is as more patient as her teacher.','She is as patient as her teacher.','同级比较中间用 patient 原级，不能叠加 more。'),
  correction('比较同类对象','The weather here is warmer than Harbin.','The weather here is warmer than that in Harbin.','应比较两地天气，that 替代 weather，而不是把天气与城市放在同一比较层。')]},
 ellipsis:{classification:['并列省略','助动词与不定式省略','从句压缩条件','替代与指代'],pitfalls:[
  correction('分词省略需要正确的动作主体','While reading the map, the bus arrived.','While we were reading the map, the bus arrived.','普通分词状语会与主句主语建立关系；原句容易变成公交车在读地图，补明 we 消除悬垂。'),
  correction('简略答语保留正确助动词','She can swim, and I am too.','She can swim, and I can too.','省略 swim 时，保留与能力结构对应的 can，不能任意换成 am。')]},
 'formal-it':{classification:['普通指代','时间天气空主语','形式主语','形式宾语与强调框架'],pitfalls:[
  correction('形式宾语不能机械删除','We find difficult to follow the guide.','We find it difficult to follow the guide.','find it + 形容词 + to do 中，it 占宾语位置，difficult 为宾补。'),
  correction('形式主语结构要完整','Is useful to keep notes.','It is useful to keep notes.','普通完整陈述中需要形式主语 it，后面的不定式给出评价内容。')]},
 'absolute-with':{classification:['自身逻辑主体','with + doing','with + done / to do','状态与普通介词短语'],pitfalls:[
  correction('复合结构不用独立限定谓语','With the baby was sleeping, she spoke softly.','With the baby sleeping, she spoke softly.','with 后的复合结构用 baby 加分词补足，不在此直接加入 was 构成限定分句。'),
  correction('承受关系选过去分词','With the windows closing by the guard, the room became quiet.','With the windows closed by the guard, the room became quiet.','windows 承受 guard 的关闭动作，by the guard 进一步确认被动关系，使用 closed。')]},
 'punctuation-analysis':{classification:['完整主干','独立分句边界','限制与补充标点','分层分析与指代'],pitfalls:[
  correction('逗号不是独立分句的万能连接','The path was dark, we stopped.','The path was dark, so we stopped.','两个独立分句需要适当连接或标点；此处用 so 明确因果，也可用分号或拆句。'),
  correction('however 不替代并列连词资格','The path was dark, however, we continued.','The path was dark; however, we continued.','however 通常是连接性副词，前面用分号建立两个独立分句的边界。')]}
};
window.LESSON_DETAILS={...(window.LESSON_DETAILS||{}),...details};
})();
