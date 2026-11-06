/* Curriculum reorganized from the supplied Grammar in Use books. Chinese explanations,
   examples and questions are newly written for this personal learning application. */
const GROUPS = [
 {id:'parts',title:'词性',en:'Parts of speech',color:'#a08a76',icon:'book',desc:'认识词类、用法与搭配',ids:[]},
 {id:'sentence',title:'句式',en:'Sentence patterns',color:'#628278',icon:'frame',desc:'先找到句子的骨架',ids:[]},
 {id:'tenses',title:'时态与语态',en:'Tenses & voice',color:'#438d76',icon:'clock',desc:'把动作放到时间线上，区分主动与被动',ids:[]},
 {id:'agreement',title:'主谓一致',en:'Subject–verb agreement',color:'#ae827d',icon:'sliders',desc:'根据主语选择谓语形式',ids:[]},
 {id:'adverbial',title:'状语从句',en:'Adverbial clauses',color:'#789b9b',icon:'route',desc:'连接时间、条件、原因和结果',ids:[]},
 {id:'relative',title:'定语从句',en:'Relative clauses',color:'#7f8fac',icon:'link',desc:'用一个句子修饰名词',ids:[]},
 {id:'nominal',title:'名词性从句',en:'Noun clauses',color:'#9388ab',icon:'layers',desc:'让句子充当名词成分',ids:[]},
 {id:'nonfinite',title:'非谓语动词',en:'Infinitives & participles',color:'#839458',icon:'branch',desc:'动词换个身份进入句子',ids:[]},
 {id:'subjunctive',title:'虚拟语气',en:'The subjunctive & unreal situations',color:'#bf9560',icon:'spark',desc:'表达假设、愿望与虚拟建议',ids:[]},
 {id:'inversion',title:'倒装',en:'Inversion',color:'#8f9670',icon:'grid',desc:'分清完全倒装与部分倒装',ids:[]},
 {id:'emphasis',title:'强调',en:'Emphasis & focus',color:'#b78b87',icon:'target',desc:'突出句子中想强调的信息',ids:[]}
];
const LESSONS = [];
function add(g,id,title,en,level,source,formula,take,steps,examples,quiz,related=[]){
 const l={id,g,title,en,level,source,formula,take,steps:steps.map(([h,t])=>({h,t})),examples:examples.map(([en,zh,note])=>({en,zh,note})),quiz:quiz.map((q,i)=>({...q,id:q.id||id+'-'+i})),related};
 LESSONS.push(l); GROUPS.find(x=>x.id===g).ids.push(id);
}
function mc(prompt,options,answer,why){return {type:'mc',prompt,options,answer,why};}
function fill(prompt,answer,why){return {type:'fill',prompt,answer:Array.isArray(answer)?answer:[answer],why};}
add('sentence','skeleton','句子成分与基本句型','The sentence skeleton','基础','初级 Units 1, 5；高级 Units 21, 28–29','主语 + 谓语；主语 + 系动词 + 表语','先找谓语，再看谁做、做什么、动作指向谁。',[
 ['先找动作或状态的中心','句子的主语通常告诉你“谁或什么”，谓语说明主语“做什么”或“怎么样”。谓语可能是一个词，也可能是 has been finished 这样的一组词。不要把谓语只理解成离主语最近的一个动词。'],
 ['宾语和表语各有任务','及物动词后面的宾语承受动作，例如 read a story。系动词后的表语说明主语的身份或状态，例如 feel tired。tired 不是动作对象，而是主语的状态。'],
 ['补语和状语怎么区分','宾语补足语进一步说明宾语，例如 We made the room clean 中 clean 说明 room 的状态；状语补充时间、地点、方式或原因，例如 after class。先确定核心，再看补充信息。'],
 ['别用词数代替结构判断','一个谓语里可以有多个动词形式，例如 will be studying；并列谓语也可以共用主语。分析长句时先划出各分句，再分别找主语和谓语，不能机械地数动词和连词。']
],[['The students read a short story after class.','学生们课后读了一篇短篇故事。','The students 是主语，read 是谓语，a short story 是宾语，after class 是时间状语。'],['The classroom feels quiet.','教室里感觉很安静。','feels 是系动词，quiet 是说明主语状态的表语。']],[mc('The soup tastes good. 中 good 作什么成分？',['表语','宾语','主语','谓语'],0,'tastes 在这里是系动词，good 说明汤的味道，是表语。'),fill('The students read a story. 中作宾语的名词短语是 ____。','a story','read 的动作指向 a story，所以 a story 是宾语。'),mc('哪一句包含“宾语 + 宾语补足语”？',['The sky is blue.','We painted the wall white.','Birds sing.','I read slowly.'],1,'the wall 是 painted 的宾语，white 进一步说明墙被刷成的颜色。')],['questions','adjadv']);
add('parts','auxiliaries','be、do、have 的分工','Main & auxiliary verbs','基础','初级 Units 1–2, 23, 40–43；中级 Unit 51','be / do / have + 相应动词形式','先看它是独立表达意思，还是在帮助另一个动词。',[
 ['同一个词，可以做不同的工作','be 可作系动词，连接主语和表语：She is calm。do 可表示“做”，have 可表示“拥有”。它们也可作助动词，用来构成时态、语态、疑问和否定，此时不能只按字面意思翻译。'],
 ['be 帮助进行和被动','be + doing 构成进行形式，如 is reading；be + 过去分词构成被动，如 is repaired。两者都含 be，但后面的形式和主语与动作的关系不同。'],
 ['do 帮助一般时的疑问与否定','一般现在时、一般过去时里，实义动词通常借助 do/does/did 构成疑问和否定。用了 does 或 did 后，后面的实义动词回到原形。be 本身作谓语时通常不额外加 do。'],
 ['have 帮助构成完成式','have/has/had + 过去分词是完成形式。She has a bike 中 has 是实义动词；She has bought a bike 中 has 是助动词。看后面的结构，比单独认单词更有用。']
],[['Does your brother study here?','你哥哥在这里学习吗？','does 帮助提问，study 用原形。'],['Our teacher has checked the answers.','老师已经核对过答案了。','has + checked 构成现在完成时。']],[mc('She ____ not like coffee.',['is','does','has','was'],1,'like 是一般现在时的实义动词，主语是 she，否定用 does not，like 保持原形。'),fill('Did he ____ (finish) the task yesterday?','finish','did 已承担过去时标记，后面的 finish 用原形。'),mc('哪一句的 have 是完成式助动词？',['I have two notebooks.','We have lunch at noon.','They have arrived.','Have a good day.'],2,'have arrived 是 have + 过去分词，构成现在完成时。')],['present','perfect']);
add('sentence','questions','疑问句与陈述语序','Questions & word order','基础','初级 Units 44–49；中级 Units 49–50, 52','疑问词 + 助动词 + 主语 + 动词','先分清：整个句子在提问，还是从句在充当一个成分。',[
 ['一般疑问句，把助动词放到前面','有 be、完成式助动词或情态动词时，通常把它们移到主语前面：Is she ready? 没有这些词的一般时实义动词句，借助 do/does/did。'],
 ['特殊疑问词问的是哪个位置','What did you buy? 问宾语，所以仍要用 did。Who called you? 中 who 本身就是主语，肯定问句通常不再加 do。先看疑问词的成分。'],
 ['放进从句，通常恢复陈述语序','Where does he live? 是独立疑问句；I know where he lives 中 where he lives 是宾语从句，内部用主语在前、谓语在后的语序。外层句子可以提问，里面的从句仍用陈述语序。'],
 ['反意疑问句要对准谓语','She is ready, isn’t she? 前句是肯定，附加问句通常是否定，助动词与主语保持对应。含 never 等否定词时要按否定含义处理。']
],[['Who opened the window?','谁打开了窗户？','who 作主语，opened 直接作谓语。'],['Could you tell me where the library is?','你能告诉我图书馆在哪里吗？','外层 Could you 提问；从句用 the library is 的陈述语序。']],[mc('请选择正确的宾语从句。',['I know where is he.','I know where he is.','I know where does he be.','I know where he be.'],1,'宾语从句用陈述语序，所以是 where he is。'),fill('She is your teacher, ____ she?',['isn’t',"isn't"],'前面是 is 的肯定陈述，附加问句通常用 isn’t she。'),mc('____ broke the cup?（问“谁打碎了杯子”）',['Who','Who did','Whom did','What did he'],0,'who 直接作 broke 的主语，无须再加 did。')],['objects','reported']);
add('tenses','passive','被动语态','The passive voice','进阶','初级 Units 21–22；中级 Units 42–46；高级 Units 22–25','承受者 + be + 过去分词','被动表达“被做”，时态主要体现在 be 上。',[
 ['先判断主语和动作的关系','The worker repaired the door 的主语执行修理；The door was repaired 的主语承受修理。突出承受者，或不知道、不必说明执行者时，常用被动。'],
 ['核心一直是 be + 过去分词','一般现在时是 am/is/are done，一般过去时是 was/were done，一般将来时是 will be done。动词过去分词不随时态乱变，要改变的是前面的助动结构。'],
 ['进行、完成、情态也能套进来','is being repaired 表示正在被修；has been repaired 表示已经被修好；must be repaired 表示必须被修。will 本身是情态助动词，will be done 也常按意义归入将来时被动，两种分析角度可以并存。'],
 ['别给所有动词强行套被动','通常要有可转换成主语的宾语，才能构成对应的被动。不及物用法的 happen、arrive 等一般不能这样转换。have something done 则常表示请别人完成某事。']
],[['The classroom is cleaned every afternoon.','教室每天下午都被打扫。','every afternoon 表示习惯，使用一般现在时被动。'],['The new bridge will be opened next month.','新桥将于下个月开放。','will be + opened 表示将来的被动。']],[mc('The windows ____ yesterday.',['clean','are cleaning','were cleaned','have cleaned'],2,'windows 承受清洁动作，yesterday 指向过去，用 were cleaned。'),fill('This form must ____ (sign) before Friday.','be signed','情态动词 must 后接 be + 过去分词，表示必须被签署。'),mc('“作业已经检查完了”应选哪种谓语？',['has checked','has been checked','is checking','will checking'],1,'作业承受检查，已经完成用 has been checked。')],['perfect','auxiliaries']);
add('agreement','agreement','主谓一致','Subject–verb agreement','进阶','中级 Unit 79；高级 Units 40–42','先找主语中心词，再决定谓语单复数','离谓语最近的名词，不一定是主语。',[
 ['先删去修饰，找中心词','The colour of the walls is warm 中主语中心词是 colour，of the walls 只是修饰它，因此用 is。不要被紧挨着谓语的复数名词带走。'],
 ['and 连接主语，通常用复数','Tom and Lily are classmates。名词并列不要求形式完全一样，a habit and several challenges 这样的搭配可以成立，具体单复数由各自意思决定。表达同一整体时也可能按单数处理。'],
 ['each、every 常按单数看','Each student has a notebook。each of the students 后通常也用单数谓语。The number of ... 常表示一个数量，用单数；a number of + 复数名词常表示许多，用复数。'],
 ['从句作主语，先看整体意义','That she arrived early was helpful 中整个从句表示一件事，通常用单数谓语。what 从句等结构还需结合后面的意义，不能把“从句主语永远单数”当成绝对规则。']
],[['The list of new words is on my desk.','生词清单在我的桌子上。','中心词是单数 list，所以用 is。'],['Each of the students has a dictionary.','每个学生都有一本词典。','each 是单数中心。']],[mc('The price of these books ____ high.',['are','is','be','have'],1,'主语中心词是单数 price，of these books 是修饰语，所以用 is。'),fill('Every student ____ (have) a seat.','has','every student 按单数看，一般现在时 have 变为 has。'),mc('A number of students ____ waiting outside.',['is','was','are','has'],2,'a number of students 表示许多学生，使用复数谓语 are。')],['countable','subject-clause']);
add('tenses','present','一般现在时','Present simple','基础','初级 Units 5–8；中级 Units 2–4','主语 + do / does','描述习惯、一般事实和相对稳定的状态。',[
 ['先问：这是经常如此，还是此刻发生','一般现在时常说习惯、规律和状态，不要求动作正在眼前发生。“我每天读英语”说的是习惯；“我正在读英语”才突出正在进行。often、usually 等只是线索，最终仍看意思。'],
 ['肯定句注意第三人称单数','I/you/we/they 后实义动词通常用原形；he/she/it 等第三人称单数主语后，动词通常加 -s 或 -es。be 则使用 am/is/are，不能照搬实义动词变化。'],
 ['否定和疑问借助 do / does','She reads English 的否定是 She does not read English。Does she read English? 中 does 已标明人称，后面的 read 必须恢复原形。'],
 ['别把现在时理解成只说现在','一般现在时还能表示时刻表里的将来安排，也会出现在表示将来的时间和条件状语从句里。看到 tomorrow 不应立即排除一般现在时，要结合具体结构。']
],[['My sister practises English every evening.','我姐姐每天晚上练习英语。','my sister 是第三人称单数，所以 practise 加 -s。'],['The last bus leaves at ten tonight.','今晚末班车十点发车。','按时刻表发生的将来事件可用一般现在时。']],[mc('Leo ____ to school by bus every day.',['go','goes','is go','going'],1,'every day 表示日常习惯，Leo 是第三人称单数，用 goes。'),fill('She does not ____ (watch) TV on weekdays.','watch','does not 后的实义动词用原形 watch。'),mc('哪一句主要描述习惯？',['I am reading now.','I read for twenty minutes every morning.','I read that story yesterday.','I will read it tomorrow.'],1,'every morning 表示反复发生的习惯，对应一般现在时。')],['continuous','future-time']);
add('tenses','continuous','现在进行时','Present continuous','基础','初级 Units 3–4, 8；中级 Units 1, 3–4','am / is / are + doing','突出此刻或现阶段正在进行的动作。',[
 ['不一定非得在说话这一秒发生','现在进行时既能描述正在眼前发生的事，也能说现阶段进行的活动。I am preparing for an exam 可以指近期在备考，说话时未必正拿着书。'],
 ['be 和 doing 缺一不可','主语后先选 am/is/are，再加动词 -ing 形式。She studying 缺少 be；She is study 的动词形式也不对。疑问把 be 提到主语前，否定在 be 后加 not。'],
 ['与一般现在时比较','She works in a school 常指稳定工作；She is working at home this week 突出暂时安排。先判断稳定状态还是现阶段活动，再选择形式。'],
 ['状态动词需要看具体用法','know、believe、own 等状态含义通常不用进行形式。一些动词换了含义可以用进行式，如 think 表示“正在考虑”。不能把某个单词永远不能进行化当成死规则。']
],[['Please be quiet. I am recording a lesson.','请安静一点。我正在录一节课。','am recording 表示此时进行。'],['We are studying a new unit this week.','我们这周正在学一个新单元。','this week 表示现阶段，不限于说话瞬间。']],[mc('Listen! Someone ____ at the door.',['knocks','is knocking','knocked','has knock'],1,'Listen 提示关注此刻的声音，使用 is knocking。'),fill('The children ____ (play) in the garden now.','are playing','children 是复数主语，现在进行时用 are playing。'),mc('哪一句强调暂时安排？',['She usually works in the office.','She is working at home this week.','She worked here last year.','She has a job.'],1,'is working 与 this week 一起突出当前这段时间的临时安排。')],['present','past-cont']);
add('tenses','past','一般过去时','Past simple','基础','初级 Units 10–12；中级 Units 5, 13–14','主语 + 动词过去式','把事情放在已经结束的过去时间里。',[
 ['先看时间是否已经结束','一般过去时描述过去发生的动作或过去存在的状态。yesterday、last week、in 2020 常指已结束的时间，但没有这些词时，明确的过去语境一样可以用过去时。'],
 ['肯定句要用过去式','规则动词通常加 -ed，不规则动词需要单独记忆，如 go 的过去式是 went。be 的过去式是 was/were，不是 beed。'],
 ['有 did，动词回原形','She visited the museum 的疑问是 Did she visit the museum? 否定是 She did not visit the museum。did 已经承担过去时标记，不再把 visit 写成 visited。'],
 ['与现在完成时的视角不同','I lost my key yesterday 把丢钥匙定位在昨天；I have lost my key 常突出现在找不到钥匙这一结果。不是“对现在有影响就绝对不能用过去时”，而是说话者关注点不同。']
],[['We visited the library last Saturday.','我们上周六参观了图书馆。','last Saturday 是结束了的过去时间。'],['He did not bring his notebook.','他没有带笔记本。','did not 后用 bring 原形。']],[mc('We ____ a new teacher yesterday.',['meet','have met','met','are meeting'],2,'yesterday 把动作定位在过去，用 meet 的过去式 met。'),fill('Did you ____ (see) the notice?','see','did 后用动词原形 see。'),mc('Which sentence is correct?',['She did not went out.','She did not go out.','She does not went out.','She not went out.'],1,'一般过去时否定用 did not + 原形 go。')],['perfect','past-perfect']);
add('tenses','past-cont','过去进行时','Past continuous','基础','初级 Units 13–14；中级 Unit 6','was / were + doing','回到过去的某个时刻，看动作正在进行。',[
 ['给过去的场景拍一张照片','过去进行时常描述过去某一时刻或某段时间正在进行的动作。At eight last night 给出观察点，was studying 展示当时的状态。'],
 ['结构是过去的 be 加 doing','I/he/she/it 常用 was，you/we/they 常用 were，再接 doing。它不是“所有过去持续很久的事情”的统一形式，仍需看是否强调某个过去观察点上的进行。'],
 ['长动作提供背景，短动作进入','I was taking notes when the bell rang。taking notes 是当时进行的背景，rang 是其间发生的事件。when 后并不是固定用过去时，while 后也不是无条件用进行时。'],
 ['两件事同时进行也可以','While I was reading, my sister was drawing。两个过去进行式可以表示过去同时发生的活动。连词表达时间关系，时态呈现动作的观察角度。']
],[['I was reviewing grammar at nine last night.','昨晚九点我正在复习语法。','at nine last night 给出了过去观察点。'],['We were talking when the lights went out.','我们正在交谈时，灯灭了。','were talking 是背景，went out 是发生的事件。']],[mc('At this time yesterday, I ____ for the bus.',['wait','was waiting','have waited','will wait'],1,'at this time yesterday 指过去某一时刻的进行动作，用 was waiting。'),fill('They ____ (read) when I entered.','were reading','they 对应 were，正在进行的背景动作使用 were reading。'),mc('I was cooking when the phone rang. 其中哪个动作提供背景？',['rang','was cooking','the phone','when'],1,'was cooking 描述铃声响起时正在进行的背景活动。')],['past','time-connectors']);
add('tenses','perfect','现在完成时','Present perfect','进阶','初级 Units 15–20；中级 Units 7–8, 11–14','have / has + 过去分词','从过去看向现在：结果、经历或持续。',[
 ['它把过去和现在联系起来','现在完成时常表示已经产生的结果、到现在为止的经历，或过去开始持续到现在的状态。重点不是简单标记“已经”，而是观察时间延伸到了现在。'],
 ['形式是 have / has + 过去分词','I have finished，She has finished。过去分词可能与过去式相同，也可能不同，如 went/gone。has 后不能直接使用过去式 went。'],
 ['for 和 since 的起点不同','for 后接时间段，since 后常接起点。I have lived here for three years 说明住到现在。瞬间动作如 buy 表示一次完成，想表达“拥有多久”时常改用 have had。'],
 ['明确结束的过去时间通常用过去时','说 yesterday、last year 这样的结束时间时，一般用过去时来定位事件；说 so far、ever 等到现在为止的范围时，常用现在完成时。时间词是线索，句子的实际时间范围更关键。']
],[['I have finished my grammar notes.','我已经完成语法笔记了。','突出现在笔记已经完成这一结果。'],['She has lived here since 2022.','她从2022年起就住在这里。','since 引出开始时间，居住状态持续到现在。']],[mc('I ____ three units so far.',['finished','have finished','finish yesterday','am finish'],1,'so far 表示到现在为止，用 have finished。'),fill('She has ____ (write) two letters.','written','现在完成时要求过去分词，write 的过去分词是 written。'),mc('请选择符合“他从2021年起一直拥有这辆自行车”的句子。',['He has bought the bike since 2021.','He bought the bike tomorrow.','He has had the bike since 2021.','He is buying the bike since 2021.'],2,'表示拥有持续到现在，用 has had；一次性的买入动作不能直接表示这段持续状态。')],['past','perf-cont']);
add('tenses','perf-cont','现在完成进行时','Present perfect continuous','进阶','中级 Units 9–12；高级 Unit 6','have / has been + doing','突出一直进行的活动过程。',[
 ['关注过程和持续','现在完成进行时通常描述过去开始、一直持续到现在或刚刚结束的活动。它常解释眼下的状态，比如“我一直在跑，所以现在很累”。'],
 ['把结构看成一组','have/has been doing 中 been 不能漏。has been read 是另一种结构；has been reading 才是现在完成进行时。先辨认 doing，别只看到 been 就判断被动。'],
 ['与完成时比较：过程还是成果','I have written three pages 突出已经写了三页；I have been writing for an hour 突出持续写了一小时。两种形式有时都可以，但观察角度不同。'],
 ['状态含义通常仍用完成时','know、own 等表示状态时通常说 have known、have owned，不说 have been knowing。不是所有“持续到现在”的中文都要翻成完成进行时。']
],[['I have been practising pronunciation for an hour.','我一直在练习发音，已经一小时了。','突出持续练习的过程。'],['She has written five examples today.','她今天已经写了五个例句。','完成时更突出完成的数量。']],[mc('“我一直在等，已经二十分钟了。”最突出持续过程的是：',['I have been waiting for twenty minutes.','I wait yesterday.','I had wait for twenty minutes.','I am waited.'],0,'have been waiting 把过去开始的等待过程连到现在。'),fill('He has been ____ (study) all morning.','studying','完成进行时的最后一部分使用 doing，study 变为 studying。'),mc('哪一句强调已经完成的数量？',['I have been reading.','I have read four chapters.','I am reading.','I was reading.'],1,'have read four chapters 突出四章这一完成成果。')],['perfect','continuous']);
add('tenses','past-perfect','过去完成时','Past perfect','进阶','中级 Units 15–16；高级 Units 5, 7','had + 过去分词','站在过去的观察点，再往更早看。',[
 ['需要一个过去参照点','过去完成时通常表示在某个过去时间或动作之前已经完成的事。到站是过去的观察点，火车开走发生得更早，才适合用 had left。'],
 ['先发生，不等于一律用过去完成','如果只是依次讲过去发生的事，一般过去时常常足够。before、after 已说明顺序时，很多语境也能用一般过去时。不要看见两个过去动作就强行把前一个换成过去完成。'],
 ['所有人称都用 had','I/he/we had finished，不再按主语改变 had。否定在 had 后加 not，疑问把 had 放到主语前，后面始终是过去分词。'],
 ['与过去进行时的关注点不同','过去完成时问“到那时之前是否已完成”；过去进行时问“那时正在做什么”。had been doing 则进一步突出到过去某点为止一直进行的活动。']
],[['The lesson had started when I arrived.','我到时课已经开始了。','started 发生在 arrived 之前。'],['By Friday, we had completed the project.','到周五时，我们已经完成了项目。','Friday 是过去参照点。']],[mc('When we reached the station, the train ____ already ____.',['has / left','had / left','is / leaving','will / leave'],1,'到站是过去参照点，开走在更早，用 had left。'),fill('She had ____ (finish) the work before noon.','finished','过去完成时是 had + 过去分词 finished。'),mc('过去完成时主要表达什么？',['现在正在发生','过去某点之前已经发生','未来一定发生','每天反复发生'],1,'它从过去的参照点看更早发生的事情。')],['past','unreal']);
add('tenses','future','将来表达与完成形式','Talking about the future','进阶','初级 Units 25–28；中级 Units 19–24；高级 Units 9–14','will do / be going to do / will be doing / will have done','先看是临时决定、已有计划，还是将来的观察点。',[
 ['will 与 going to 的常见视角','will 常用于临时决定、承诺或预测；be going to 常突出已有打算，或根据眼前迹象预测。两者有重叠，不能只凭一个 tomorrow 就确定唯一形式。'],
 ['安排和时刻表还有别的表达','现在进行时可表示已安排好的将来活动，如明天见老师；一般现在时常说交通、课程等时刻表。判断时要同时看语境和说话者想突出的意思。'],
 ['将来进行时展示将来某刻的过程','will be doing 表示将来某个观察点上正在进行的动作。This time tomorrow, I will be travelling。be 后是 doing，不能写成 will be travel。'],
 ['将来完成时看截止点前的成果','will have done 表示到将来某时之前已经完成。By next Friday, I will have finished the report。by 引出截止点，重点是到那时成果已经形成。']
],[['I am meeting my tutor tomorrow afternoon.','我明天下午要见导师。','现在进行时表示已安排好的将来活动。'],['By next Monday, we will have finished this unit.','到下周一，我们将已经学完这个单元。','will have finished 从将来截止点看已完成的成果。']],[mc('“到明晚，我将已经完成报告。”应使用：',['will have finished','will finishing','had finish','am finished'],0,'到将来截止点前完成，使用 will have + 过去分词。'),fill('At ten tomorrow, I will be ____ (take) an exam.','taking','将来进行时是 will be doing，所以用 taking。'),mc('哪种形式常用于已有打算？',['be going to do','did yesterday','had done','used to do'],0,'be going to do 常表示事先已有的计划或打算。')],['future-time','perfect']);
add('parts','can','能力、许可与请求','Can, could & be able to','基础','初级 Unit 30；中级 Units 26–27, 37；高级 Unit 15','can / could + 动词原形','could 既能说过去能力，也能使请求更委婉。',[
 ['先掌握后接原形','can 和 could 后面直接接动词原形，不加 to，也不因主语是 he 就给动词加 -s。She can swim，不能写 can swims。'],
 ['能力和许可要结合情境','can 能表示现在的能力，也能表示许可。Can I sit here? 问能否被允许坐在这里，不是询问身体有没有坐下的能力。'],
 ['could 不总是在说过去','could 可表示过去一般能力，也能表达现在的委婉请求。Could you explain this sentence? 说的是现在的请求，不能机械翻译成“过去能”。'],
 ['完成式把推测或可能性放回过去','could have done 可表示过去本来可能做到、实际未做到，或过去可能发生，要看上下文。be able to 能放进更多时态，如 will be able to。']
],[['My brother can repair bicycles.','我哥哥会修自行车。','can 后接 repair 原形。'],['Could you check this answer for me?','你能帮我检查一下这个答案吗？','could 让当前请求更委婉。']],[mc('She can ____ very well.',['swims','swimming','swim','to swim'],2,'情态动词 can 后用原形 swim。'),fill('We will be able ____ join you tomorrow.','to','be able to 是固定结构。'),mc('Could you open the window? 这里 could 主要表示：',['过去习惯','委婉请求','过去完成','被动语态'],1,'它是在委婉地提出当前请求，并不是描述过去能力。')],['must','auxiliaries']);
add('parts','must','必须、禁止与推测','Must, have to & needn’t','基础','初级 Units 29, 31, 33；中级 Units 28–32；高级 Units 17–19','must do / mustn’t do / don’t have to do','“禁止”和“不必”，意思相差很大。',[
 ['must 和 have to 常表示必要','must 常体现说话者认为必须；have to 常强调客观要求，但实际有重叠。说过去必须做某事，通常用 had to，而不是给 must 添加过去词尾。'],
 ['否定后的意思不能直译','mustn’t 表示不许、禁止；don’t have to 或 needn’t 表示没有必要。You mustn’t leave 是不能离开；You don’t have to leave 是可以不离开。'],
 ['must 还能作肯定推测','He must be tired 常表示根据情况推断他一定很累。这里的 must 不是“必须疲倦”。否定推测常用 can’t，如 That can’t be true。'],
 ['推测过去，看完成式','must have done 通常表示对过去事情的强烈肯定推测；can’t have done 表示对过去的否定推测。先识别推测含义，再确定时间。']
],[['You must not use your phone during the exam.','考试期间不得使用手机。','must not 表示禁止。'],['You do not have to print the notes.','你不必打印笔记。','do not have to 表示没有必要。']],[mc('“你不必现在付款”应选：',['You mustn’t pay now.','You don’t have to pay now.','You can’t pay now.','You must pay now.'],1,'don’t have to 表示不必，mustn’t 则表示禁止。'),fill('He ____ be at home. All the lights are off and his car is gone.（填 can 的否定缩写）',["can’t","can't"],'根据给定线索作否定推测，用 can’t be。'),mc('He must have forgotten the meeting. 主要表达：',['对过去的推测','将来的命令','现在的习惯','被动完成'],0,'must have forgotten 把肯定推测指向过去。')],['can','should']);
add('parts','should','建议、责任与预期','Should & expectations','进阶','初级 Unit 32；中级 Units 33–35；高级 Unit 20','should do / should have done','先理解情态动词 should，再区分现在建议、过去遗憾与预期。',[
 ['should 常给建议或说应当','You should rest 表示你应该休息。should 后用动词原形，否定用 should not / shouldn’t。它也能表示预期，如列车应该很快到。'],
 ['谈过去的建议或遗憾','should have done 常表示过去本该做却没做的事；shouldn’t have done 常表示过去本不该做却做了。具体是否发生仍结合语境，但这是常见学习用法。'],
 ['should 也表示合理预期','The train should arrive soon 表示根据时刻表或现有信息，预计列车很快就到。这里不是对列车提出建议，也不保证一定发生，要根据语境判断。'],
 ['建议和禁止的语气不同','shouldn’t 常表示不应该，mustn’t 则常表示禁止。情态动词 should 与建议类从句中的虚拟形式也要分开学习，后者放在“虚拟语气”主题中。']
],[['You should check the verb form first.','你应该先检查动词形式。','should 后接 check 原形。'],['The train should arrive soon.','列车应该很快就到了。','should 表示根据现有信息作出的合理预期。']],[mc('You should ____ a short break.',['takes','take','taking','to take'],1,'should 后用动词原形 take。'),{...mc('The train should arrive soon. 中 should 主要表示：',['对列车提出建议','合理的预期','过去的能力','严格禁止'],1,'这里根据现有信息预计列车很快到达，should 表示合理预期。'),id:'should-expectation'},mc('You should have called me. 在常见的责备语境中表示：',['你现在正在打电话','你过去本该给我打电话','你将来一定打电话','你已被打电话'],1,'should have called 常指过去本该打电话，却没有打。')],['subjunctive-suggestions','must']);
add('adverbial','real-if','真实条件句','Real conditionals','基础','初级 Unit 99；中级 Units 25, 38, 115；高级 Units 83–86','If + 现在时，主句 + will / can / 祈使句','条件是否成立还不确定，先把逻辑关系说清楚。',[
 ['if 提出条件，不承诺一定发生','If it rains, we will stay home 表示如果下雨就待在家。if 强调可能成立的条件；when 在相似语境中常把事情看作将会发生的时间点。'],
 ['将来条件里，常用现在形式','在表示将来的真实条件状语从句中，通常用一般现在时，不用 will 只是标将来。主句可用 will、情态动词或祈使句，不一定只能是一般将来时。'],
 ['也能描述规律','If you heat ice, it melts 描述一般规律，两边都可用一般现在时。主将从现不是所有 if 句子的万能公式，要先判断实际时间和含义。'],
 ['unless 表示除非、如果不','Unless you hurry, you will miss the bus 相当于 If you do not hurry...。转换时注意否定含义，不能机械地让 unless 从句也额外加 not。']
],[['If I finish early, I will call you.','如果我提前完成，就给你打电话。','finish 在条件从句里用现在形式表将来。'],['Unless it rains, we will walk to school.','除非下雨，否则我们步行去学校。','unless 表示如果不下雨这一条件。']],[mc('If she ____ tomorrow, I will tell her.',['comes','will come','came yesterday','has coming'],0,'if 引导将来的真实条件状语从句，通常用现在形式 comes。'),fill('____ you practise, you will not improve.（填“除非”）','Unless','Unless you practise 表示除非练习，也就是如果不练习。'),mc('If you are tired, take a break. 这句说明：',['主句必须用 will','主句也可以是祈使句','从句必须是过去时','if 表示是否'],1,'条件句的主句可以用祈使句，take a break 是一个指令。')],['future-time','unreal']);
add('subjunctive','unreal','虚拟条件与 wish','Unreal conditionals & wish','进阶','初级 Unit 100；中级 Units 38–41；高级 Units 83–85','If + 过去式，would do；If + had done，would have done','这里的过去形式，常表示距离现实更远。',[
 ['先分清想象的时间','与现在事实相反，或把现在、将来的事情看得比较假设时，常用 if + 过去式，主句 would/could/might + 原形。过去式在这里不一定表示过去时间。'],
 ['对过去的反事实，形式再往前移','If I had known, I would have helped 表示过去不知道，因此没有帮忙。条件从句用 had done，主句用 would have done。先确定谈论的是过去，再套结构。'],
 ['wish 后表达没有实现的愿望','I wish I knew the answer 通常表示现在不知道；I wish I had studied harder 常表示后悔过去没更努力。wish 后的过去式与过去完成式分别对应不同时间。'],
 ['be 的 were 形式和建议表达','If I were you 是常用的建议结构。正式的反事实语境常对各人称用 were；日常表达中也会见到 was。练习若要求标准书面反事实形式，可明确使用 were。']
],[['If I had more time, I would read another chapter.','如果我有更多时间，我就会再读一章。','这里用过去式表达与当前情况有距离的假设。'],['I wish I had saved the file.','真希望我当时保存了文件。','had saved 表示对过去未完成事情的遗憾。']],[mc('If I ____ you, I would ask the teacher.（标准书面形式）',['am','were','will be','have been'],1,'If I were you 是标准书面反事实建议结构。'),fill('If she had left earlier, she would have ____ (catch) the train.','caught','would have 后接过去分词，catch 的过去分词是 caught。'),mc('I wish I knew his number. 通常说明：',['现在不知道他的号码','过去曾知道且现在仍知道','他马上会告诉我','我已经拨了号码'],0,'wish + 过去式在这里表达与现在事实相反的愿望。')],['past-perfect','real-if']);
add('nonfinite','infinitive','to do：不定式','The to-infinitive','基础','初级 Units 51–54；中级 Units 54–55, 64–66','to + 动词原形','to do 可以充当成分，也可以交代目的。',[
 ['先认识形式，再看句子任务','不定式基本形式是 to + 动词原形，如 to read。它不能独立承担有时态的谓语任务，但可以在句中作主语、宾语、表语、定语或状语。身份要根据位置和作用判断。'],
 ['接在某些动词后作宾语','want、decide、hope 等动词后常接 to do：We decided to stay。不是所有动词后都能任意换成 to do，具体搭配需要记忆。'],
 ['放在名词后或表示目的','a chance to speak 中 to speak 修饰 chance；I came to ask a question 中 to ask 表示来的目的。外形一样，句中任务可以不同。'],
 ['用 it 把较长主语后移','It is useful to review examples 中 it 是形式主语，真正要评价的是 to review examples。若有逻辑主语，常见 for somebody to do；涉及人的品质评价时，也会用 of somebody。']
],[['We decided to review the lesson together.','我们决定一起复习这节课。','decide 后接 to do 作宾语。'],['I opened the app to check a word.','我打开应用来查一个单词。','to check 表示打开应用的目的。']],[mc('They hope ____ the exam.',['pass','passing','to pass','passed'],2,'hope 后常接 to do，选择 to pass。'),fill('It is important ____ (read) the instructions.','to read','it 是形式主语，不定式 to read... 是真正主语。'),mc('I went upstairs to get my book. 中 to get 表示：',['目的','被动','过去习惯','比较'],0,'它说明上楼是为了拿书，作目的状语。')],['gerund','prep-to']);
add('nonfinite','gerund','doing：动名词','The -ing form as a noun','基础','初级 Units 51–52；中级 Units 53, 60, 62–63','doing 可作主语、宾语等','动词变成 doing 后，可以像名词一样占位置。',[
 ['先看 doing 在句中做什么','Reading helps me relax 中 Reading 是主语；I enjoy reading 中 reading 是宾语。它们表示阅读这项活动，传统语法常叫动名词，不是现在进行时。'],
 ['有些动词后固定接 doing','enjoy、avoid、finish、mind 等后面通常接 doing。She enjoys drawing 中 drawing 是 enjoy 的宾语。不能仅凭中文都有“去做”，就改成 to do。'],
 ['介词后若接动词，通常用 doing','by reading 表示通过阅读；without stopping 表示没有停下。这里 -ing 形式充当介词宾语。先认清前面是不是介词。'],
 ['doing 不一定都是动名词','The girl reading by the window 中 reading... 修饰 girl；She is reading 中 is reading 是进行时谓语。形式相同，不能脱离完整句子定名称。']
],[['Reading aloud helps me remember words.','大声朗读帮助我记住单词。','Reading aloud 整体作主语。'],['She avoided making the same mistake.','她避免了犯同样的错误。','avoid 后接 making。']],[mc('We enjoy ____ English songs.',['listen','listening to','to listen','listened'],1,'enjoy 后接 doing；listen 连接对象还需要 to，所以用 listening to。'),fill('He finished ____ (write) the report.','writing','finish 后通常接动名词 writing。'),mc('Learning a language takes time. 中 Learning a language 作：',['主语','谓语','状语','同位语'],0,'它表示学语言这项活动，整体充当句子主语。')],['infinitive','verb-choice']);
add('nonfinite','verb-choice','to do 与 doing 的区别','Verb patterns & meaning','进阶','中级 Units 56–59, 61','remember to do / remember doing','同一个动词换了后接形式，意思可能跟着改变。',[
 ['remember：记得去做，还是记得做过','remember to do 表示记得履行尚待完成的事情；remember doing 表示记得过去做过的经历。先确定被记住的是任务还是经历。forget 的相应用法也可这样比较。'],
 ['stop：停下原来的事，还是停下来做别的事','stop doing 表示停止该活动；stop to do 表示停下手头的事，转而去做另一件事。to do 在后者中常带有目的含义。'],
 ['try 和 need 也要结合意思','try to do 是努力尝试做到；try doing 是试试某个办法。need to do 表示主语需要去做；物作主语时 need doing 可表达需要被做，如 The floor needs cleaning。'],
 ['used to 与 be used to 别混在一起','used to do 表示过去常做、现在常已不同；be used to doing 表示习惯于某事，这里的 to 是介词。两者外形相近，结构和含义不同。']
],[['Remember to save your notes.','记得保存笔记。','提醒接下来要做的任务。'],['I remember meeting her at the library.','我记得曾在图书馆见过她。','回忆已经发生的相遇。']],[mc('Please remember ____ the door when you leave.',['locking','to lock','locked','lock to'],1,'离开时锁门是待完成的任务，用 remember to lock。'),fill('The printer is not working. Try ____ (restart) it.（表示试试这个办法）','restarting','try doing 表示试一试某个解决办法。'),mc('He stopped to drink some water. 表示：',['他不再喝水了','他停下来去喝水','他讨厌喝水','他喝水已完成'],1,'stop to do 表示停下原来的活动，去做另一件事。')],['prep-to','gerund']);
add('nonfinite','object-complement','宾语后的动词形式','Verb + object + verb','进阶','初级 Unit 53；中级 Units 55, 57, 67；高级 Unit 28','ask sb to do / make sb do / see sb doing','先认前面的动词，再决定宾语后接什么形式。',[
 ['ask、tell、want 常接宾语加 to do','The teacher asked us to read 中 us 是宾语，to read 补充说明要我们做的事。否定不定式把 not 放在 to 前面：asked us not to leave。'],
 ['使役结构常用省略 to 的原形','make、let、have 在常见主动使役结构里接 somebody do，如 have someone check the answer。have something done 则常表示安排某事被做，结构和意思不同。'],
 ['help 后的 to 可以保留或省略','help somebody do 与 help somebody to do 都可以；help do 与 help to do 也可以。它不能简单归入“后面只能接不带 to 原形”的绝对规则。'],
 ['感官动词看动作整体还是过程','see somebody do 常关注动作全过程或整体事件；see somebody doing 常关注看到时正在进行的过程。被动句中的原形补语还可能恢复 to，如 was seen to leave。']
],[['The teacher had us check our answers.','老师让我们核对答案。','主动使役 have + 宾语 + 原形 check。'],['I saw a student reading by the window.','我看到一位学生正在窗边读书。','reading 突出看到时正在进行的过程。']],[mc('The coach made us ____ faster.',['run','to run','running','ran'],0,'主动使役 make somebody do，run 用原形。'),fill('She asked me ____ (wait) outside.','to wait','ask somebody to do 中用 to wait 作宾补。'),mc('关于 help me carry 与 help me to carry，哪项正确？',['只有前者正确','只有后者正确','两者都可以','两者都只能用于过去'],2,'help 后不定式中的 to 可以保留，也可以省略。')],['passive','infinitive']);
add('nonfinite','prep-to','介词 to 与不定式 to','Two different uses of to','进阶','中级 Units 60–62, 65；高级 Unit 93','介词 to + doing；不定式 to + do','不能只看见 to 就默认后面一定是原形。',[
 ['to 有两种常见身份','不定式符号 to 后接动词原形，如 want to learn；介词 to 后接名词、代词，或动词的 -ing 形式。先判断整个搭配的结构，再看后面怎么变。'],
 ['常见的介词 to 搭配','look forward to、be used to、object to 等里的 to 是介词。可以说 look forward to the holiday；换成活动时就说 look forward to travelling。'],
 ['key to 和 ability to 不同','the key to solving the problem 中 to 是介词；the ability to solve the problem 中 to solve 是不定式，修饰 ability。access to 也常是介词搭配，后面接活动时通常用 doing。'],
 ['替换法有帮助，但记搭配更可靠','能不能接一个合适的名词，可帮助理解介词身份，但不能把临时替换当作万能测试。学习时把搭配连同一个短例句记下，遇到新搭配再核实其结构。']
],[['I look forward to hearing from you.','我期待收到你的来信。','look forward to 里的 to 是介词，所以用 hearing。'],['She has the ability to solve the problem.','她有解决这个问题的能力。','ability 后用不定式 to solve。']],[mc('The key to ____ well is regular practice.',['write','writing','wrote','written'],1,'the key to 中 to 是介词，后接 writing。'),fill('We look forward to ____ (meet) you.','meeting','look forward to 后接动词时用 -ing 形式 meeting。'),mc('哪一处的 to 是不定式符号？',['be used to reading','look forward to seeing','the ability to learn','the key to learning'],2,'ability 后的 to learn 是不定式，其余列出的 to 是介词。')],['verb-choice','infinitive']);
add('nonfinite','participles','分词作定语和状语','Participle clauses','进阶','中级 Units 68, 97；高级 Units 56–59','doing / done / having done + 补充信息','先有清楚的句子主干，再判断分词与谁有关系。',[
 ['作定语：看修饰的名词','the student reading outside 中 student 主动读；the letter written yesterday 中 letter 被写。现在分词常表达主动或进行，过去分词常表达被动或完成，但要结合具体动词含义。'],
 ['作状语：常与主句共用逻辑主语','Feeling tired, I went home 中 feeling 的主体与 I 一致。若写成 Walking to school, the rain started，就误让 rain 成为走路者，产生悬垂问题。'],
 ['结果状语可以指向前面整件事','The storm damaged the roof, leaving the room wet 中 leaving... 说明前面事件产生的结果。这里的逻辑关系可以是整个前句造成后果，不能机械要求每个结果分词都只修饰主语。'],
 ['先完成的动作可用 having done','Having checked the answer, I closed the book 强调核对先于合书。写分词结构时要保留完整主句，明确动作关系，不能为了使用 doing 而省掉主句谓语。']
],[['The girl sitting near the door is my classmate.','坐在门边的女孩是我的同学。','sitting... 修饰 girl，关系为主动。'],['The heavy rain flooded the road, delaying the bus.','大雨淹没了道路，导致公交车延误。','delaying... 表示前面整件事造成的结果。']],[mc('The books ____ by our teacher are useful.',['write','writing','written','wrote'],2,'books 承受“写”这一动作，过去分词 written 作后置定语。'),fill('____ (feel) tired, I went to bed early.','Feeling','I 与 feel 是主动关系，Feeling tired 作原因状语。'),mc('哪句没有分词逻辑主语悬垂的问题？',['Walking home, the rain started.','Walking home, I saw a rainbow.','Reading a book, the door opened.','Feeling hungry, the soup was eaten.'],1,'Walking 的执行者是主句主语 I，关系清楚。')],['skeleton','relative-omit']);
add('parts','countable','可数、不可数与单复数','Countability & number','基础','初级 Units 66–68；中级 Units 69–71, 79–80','a book / two books / some advice','先看这个含义下能不能直接按“一个、两个”来数。',[
 ['单数可数名词通常需要限定','a student、the student、my student 都有合适的限定。普通单数可数名词在句中通常不能光秃秃地出现；复数或不可数名词可以有泛指用法。'],
 ['不可数名词不直接加复数词尾','advice、information、furniture 等在常见用法中不可数，不能直接写 advices、informations。需要计数时常用 a piece of 等单位表达。'],
 ['同一个词可能有不同含义','a chicken 可指一只鸡，chicken 也能表示鸡肉。coffee 可指饮料这种物质，two coffees 在点餐中可表示两杯咖啡。可数性与当前含义有关。'],
 ['并列名词不要求都单数或都复数','and 连接的名词可分别根据意思决定数。a problem and two possible solutions 语法成立。不能为了看起来“并列整齐”就强行把两边都改成相同数。']
],[['I need some advice about my study plan.','关于学习计划，我需要一些建议。','advice 在这里不可数。'],['The task brings a challenge and new opportunities.','这项任务带来一个挑战和新的机会。','单数 challenge 与复数 opportunities 可以并列。']],[mc('advice 的数量表达，哪项正确？',['an advice','two advices','some advice','many advice'],2,'advice 通常不可数，some advice 正确。'),fill('There are three ____ (child) in the room.','children','child 的不规则复数是 children。'),mc('关于 a question and several answers，哪项正确？',['单复数不能并列','语法可以成立','必须都用单数','必须删掉 and'],1,'and 两边可以是不同数的名词短语，由各自含义决定。')],['articles','agreement']);
add('parts','articles','冠词与零冠词','A, an, the & zero article','基础','初级 Units 65, 69–73；中级 Units 72–78；高级 Units 44–47','a / an：一类中的一个；the：可识别的特指','先判断泛指还是特指，再看可数性和发音。',[
 ['a / an 用在单数可数名词前','表示某一类里的一个，或首次引入某个对象时，常用 a/an。选择看后面词开头的发音，不是字母：an hour，a university。'],
 ['the 表示双方能够识别的对象','再次提到、上下文明确或独一对象常用 the。I bought a book. The book is helpful。不是只要中文里有“这个”才用 the，也不是第二次出现就无条件套用。'],
 ['泛指的复数和不可数名词常不加冠词','Books can change lives 泛指书；Water is essential 泛指水。society 表示泛指社会时通常不加 the，特指某一社会或组织时则需另看语境。'],
 ['固定地点表达还要看活动含义','go to school 常指上学；go to the school 可指去那所学校的建筑。相同名词前是否加 the，可能改变说话者关注的是活动还是具体地点。']
],[['I saw a cat. The cat was sleeping.','我看见一只猫。那只猫正在睡觉。','先引入一个对象，再用 the 指回它。'],['Education can improve society.','教育可以改善社会。','Education 和 society 在这里都是泛指。']],[mc('She is ____ honest student.',['a','an','the a','/ a'],1,'honest 开头的 h 不发音，元音音素前用 an。'),fill('I bought a pen. ____ pen is blue.','The','第二句指双方已能识别的那支笔，用 The。'),mc('“音乐能帮助人们放松”中的泛指音乐通常写作：',['The musics','A music','Music','An music'],2,'music 在此不可数且泛指，通常使用零冠词。')],['countable','pronouns']);
add('parts','possession','所有格与名词修饰','Possession & noun phrases','基础','初级 Unit 64；中级 Units 80–81；高级 Unit 43','Tom’s book / the title of the book / a school bus','先看谁属于谁，再看名词之间是什么关系。',[
 ['’s 常表达人与物的所属关系','my teacher’s notebook 表示老师的笔记本。复数以 -s 结尾时，所有格常只加撇号，如 the students’ books。children 等不规则复数通常仍加 ’s。'],
 ['of 可连接两个名词短语','the cover of the book 表示书的封面。of 不仅表示所有，还可以表达内容、部分等关系，不能把所有 of 都机械翻成“的”来分析。'],
 ['名词可以直接修饰另一个名词','a school bus 中 school 说明 bus 的用途或类别；a bookshop 中 book 也是分类。名词作修饰语常用单数形式，但存在固定例外，不可绝对化。'],
 ['先看空格所在位置，再判断词性','the importance of practice 中 importance 是名词，后面用 of 引出相关内容；be proud of 中 proud 是形容词。of 前既能接名词，也能出现在形容词搭配里，需要看完整结构。']
],[['This is my sister’s notebook.','这是我姐姐的笔记本。','sister’s 表示所属。'],['The title of the article is clear.','这篇文章的标题很清楚。','title 是中心词，of the article 修饰它。']],[mc('“学生们的教室”（students 为复数）应写成：',["the student’s classroom","the students’ classroom","the students classroom’s","the student classroom"],1,'以 -s 结尾的复数名词，所有格在末尾加撇号。'),fill('the cover ____ the book','of','of 连接封面与书的所属关系。'),mc('a bus driver 中中心词是：',['bus','a','driver','a bus'],2,'整体指一种司机，driver 是中心词，bus 说明类别。')],['skeleton','agreement']);
add('parts','pronouns','代词与指代关系','Pronouns & reference','基础','初级 Units 59–63, 74–75；中级 Units 82–84；高级 Units 60–61','I / me / my / mine / myself','代词形式要和它在句子中的任务对上。',[
 ['主格与宾格看位置和作用','I、he、they 常作主语；me、him、them 常作宾语。介词后通常用宾格，如 with me。并列时也要分别判断，不是只看另一边用了哪个形式。'],
 ['物主代词分两类','my、your、their 后通常接名词，如 my book；mine、yours、theirs 本身可独立代替名词短语，如 This book is mine。不能写 mine book。'],
 ['反身代词强调同一人','I taught myself 表示我教自己；I did it myself 强调亲自做。主语和宾语指同一人时，常需要反身形式，而不是普通宾格。'],
 ['it、one、ones 的指代不同','it 常指前面同一个具体对象；one/ones 常代替同类可数名词，表示另一个或某些。I lost my pen and need a new one 指一支新笔，不是原来丢的那支。']
],[['This is my notebook. That one is yours.','这是我的笔记本。那本是你的。','my 后接名词，yours 独立使用。'],['She taught herself to draw.','她自学了画画。','herself 与主语 She 指同一人。']],[mc('This bag belongs to me. It is ____.',['my','mine','myself','I'],1,'mine 是名词性物主代词，能独立表示我的包。'),fill('He looked at ____ (he) in the mirror.','himself','动作指向他自己，用反身代词 himself。'),mc('I need a pen. Do you have ____?（指同类中的一支）',['one','itself','mine book','them is'],0,'one 可代替同类的单数可数名词 a pen。')],['articles','quantifiers']);
add('parts','quantifiers','数量词与限定词','Quantifiers & determiners','基础','初级 Units 76–84；中级 Units 85–91；高级 Units 48–52','many / much；a few / a little；each / every','先分可数和不可数，再读出数量的语气。',[
 ['many 和 much 先看名词','many 常修饰可数名词复数，much 常修饰不可数名词。a lot of 可修饰两类，但后面的谓语仍需与真正的主语数相一致。'],
 ['有无 a，会改变语气','a few + 可数复数，a little + 不可数，都表示有一些；few、little 常强调很少、几乎没有，带否定色彩。先看语境是在肯定尚有，还是强调不足。'],
 ['some、any 不是机械按句型分','some 常见于肯定句，any 常见于否定和疑问，但请求、提供物品的疑问句常用 some；any 也能表示“任何”。必须结合说话意图。'],
 ['each、every、both 的范围不同','each 强调逐个，every 强调整体里的每个，后接单数可数名词；both 表示两者都，neither 表示两者都不。of 后的代词、限定词结构也要一并注意。']
],[['I have a few questions about this unit.','关于这个单元，我有几个问题。','a few 修饰可数复数 questions。'],['There is little time left.','剩下的时间很少了。','little 修饰不可数 time，强调不足。']],[mc('There is ____ milk in the bottle. We can make tea.',['a few','many','a little','few'],2,'milk 不可数，后句说明还有一些可用，所以用 a little。'),fill('How ____ students are there?','many','students 是可数复数，用 how many。'),mc('“两者都不”用哪个词？',['both','neither','every','much'],1,'neither 表示两者都不。')],['countable','agreement']);
add('parts','adjadv','形容词与副词','Adjectives & adverbs','基础','初级 Units 85–86；中级 Units 99–101；高级 Units 66, 71','形容词描述名词；副词常修饰动词、形容词或副词','判断被修饰的对象，比只看 -ly 可靠。',[
 ['形容词描述人或物的特点','a quiet room 中 quiet 修饰名词；The room is quiet 中 quiet 作表语。look、feel、sound 等作系动词时，后面通常也用形容词说明主语。'],
 ['副词可以说明方式和程度','She speaks clearly 中 clearly 修饰说话方式；extremely warm 中 extremely 修饰 warm 的程度。修饰整个句子的副词，又有不同位置和作用。'],
 ['不能只凭词尾判断','friendly 通常是形容词；fast、hard 可作副词且不加 -ly。hardly 的意思通常是“几乎不”，不是“努力地”。well 在多数方式用法中是副词，也能表示身体好。'],
 ['程度副词还要看搭配','extremely warm 是常见表达；greatly 常与某些动词或分词形容词搭配，如 greatly improved，不能随意替换所有 very。位置正确，也不保证搭配合适。']
],[['The teacher explained the rule clearly.','老师清楚地解释了规则。','clearly 修饰 explained。'],['The room feels extremely warm.','房间里感觉非常暖和。','warm 作表语；extremely 在 warm 前修饰程度。']],[mc('She speaks English ____.',['fluent','fluently','fluency','more fluent than'],1,'修饰 speaks 的方式用副词 fluently。'),fill('This soup tastes ____ (good).','good','taste 作系动词，后接形容词 good 作表语。'),mc('He hardly works. 主要意思是：',['他工作很努力','他几乎不工作','他在硬地上工作','他总是加班'],1,'hardly 通常表示几乎不，与表示努力地的 hard 不同。')],['degree-order','ing-ed']);
add('parts','ing-ed','-ing 与 -ed 形容词','Interesting or interested?','基础','中级 Unit 98；高级 Unit 69','interesting：使人感兴趣的；interested：感兴趣的','看描述的是引发感受的特点，还是感受本身。',[
 ['-ing 常描述引发感受的特点','an interesting book 表示这本书有让人感兴趣的特点。人也可以 interesting，表示这个人有趣；不能把 -ing 形容词简单规定为“只修饰物”。'],
 ['-ed 常描述感受到的状态','I am interested in history 表示我对历史感兴趣。an excited child 表示孩子处于兴奋状态。这里的 interested、excited 是形容词用法，并非一出现 -ed 就是过去时。'],
 ['用一个对照读懂关系','The lesson is boring 说课程令人无聊；The students are bored 说学生觉得无聊。先看句子想表达“令人怎样”，还是“感到怎样”。'],
 ['固定介词也要一起记','be interested in、be excited about、be satisfied with 等各有常见搭配。选对形容词后，还要确认后面的介词和宾语形式。']
],[['The story is interesting.','这个故事很有趣。','故事具有使人感兴趣的特点。'],['I am interested in the story.','我对这个故事感兴趣。','说明我的感受状态，搭配 in。']],[mc('I feel ____ after the long journey.',['tiring','tired','tire','to tired'],1,'描述人的疲倦感受，使用 tired。'),fill('She is interested ____ learning languages.','in','be interested in 是固定搭配，in 后接 learning。'),mc('He is an interesting teacher. 这句：',['正确，表示老师有趣','错误，-ing 只能修饰物','只能表示老师感到有趣','必须改成 interested'],0,'人也可以具有令人感兴趣的特点，所以 interesting 可以修饰 teacher。')],['adjadv','participles']);
add('parts','comparison','比较级与最高级','Comparatives & superlatives','基础','初级 Units 87–90；中级 Units 105–108；高级 Units 72–73','-er / more ... than；the -est / the most ...','先确定比较范围，再选择形式。',[
 ['比较级常比较两方','shorter、more useful 等表示更……，than 引出比较对象。一般短词常加 -er，较长形容词常用 more；具体拼写和固定形式要单独留意。'],
 ['最高级在一个范围内选最突出者','the tallest student in our class 表示班里最高的学生。最高级前通常用 the，但已有 my 等限定词时不再叠加 the，如 my best friend。'],
 ['不要重复加比较标记','more easier 同时用了 more 和 -er，一般不这样写。good、bad 的比较级和最高级是不规则的 better/best、worse/worst。'],
 ['as ... as 与程度修饰','as tall as 表示同样高，中间用原级。much、far、a little 等可修饰比较级，如 much easier；very 通常不能直接修饰这种比较级。likely 常见比较形式为 more likely。']
],[['This exercise is easier than the last one.','这道练习比上一道简单。','easier 是 easy 的比较级，than 引出比较对象。'],['She is the most careful student in the group.','她是组里最细心的学生。','最高级在指定范围内比较。']],[mc('This question is ____ than that one.',['more easy','easier','easiest','the easierest'],1,'easy 的常见比较级是 easier。'),fill('He is as ____ (tall) as his brother.','tall','as ... as 中间使用形容词原级。'),mc('比较级的程度修饰，哪项正确？',['very better','more easier','much better','most better'],2,'much 可以修饰比较级 better。')],['degree-order','adjadv']);
add('parts','degree-order','程度与副词位置','Degree & adverb position','进阶','初级 Units 91–95；中级 Units 102–104, 109–112；高级 Units 74–78','very warm / warm enough / often reads','词的位置和搭配，要一起看。',[
 ['程度副词通常靠近被修饰词','very、extremely 通常放在形容词或副词前，如 extremely useful。enough 修饰形容词或副词时通常放后面，如 clear enough；修饰名词时常放前面，如 enough time。'],
 ['频度副词常在实义动词前','She often reads aloud。be 后、实义动词前是常见位置：She is often busy。含多个助动词时，通常放在第一个助动词后，但强调和语体可改变位置。'],
 ['方式副词通常不要隔开动词和短宾语','He explained the rule clearly 是常见语序。He explained clearly the rule 在这种简单宾语结构中通常不自然；长宾语等情形还需要单独判断。'],
 ['so、such、too、enough 结构不同','so + 形容词/副词，such + 名词短语，too + 形容词/副词 + to do，形容词/副词 + enough + to do。先认中心词，再选修饰结构。']
],[['The instructions are clear enough to follow.','这些说明足够清楚，可以照着做。','enough 位于形容词 clear 之后。'],['She usually reviews her notes after class.','她通常在课后复习笔记。','usually 位于实义动词 reviews 前。']],[mc('请选择常见的标准表达。',['They feel warm extremely.','They feel extremely warm.','They feel warmly extreme.','They extremely are warm feel.'],1,'extremely 通常放在所修饰的形容词 warm 前。'),fill('He is old ____ to travel alone.','enough','形容词 + enough + to do，表示足够……可以做某事。'),mc('修饰 useful advice，哪项正确？',['such useful advice','so useful advice','such an advice','too advice'],0,'advice 是不可数名词，such 修饰整个 useful advice 名词短语，无须 a。')],['adjadv','purpose-result']);
add('relative','relative-pronouns','who、which、that','Relative pronouns','基础','初级 Unit 101；中级 Units 92–93；高级 Unit 53','先行词 + 关系代词 + 不完整的从句','关系代词既连接，也在从句里充当成分。',[
 ['先找到被修饰的名词','The boy who sits beside me is kind 中 who sits beside me 修饰 boy，boy 就是先行词。把定语从句暂时拿开，主句仍是 The boy is kind。'],
 ['看先行词是人还是物','限制性定语从句中，修饰人常用 who/that，修饰物常用 which/that。不能把 who 与 that 的可替换性扩展到所有结构，非限制性从句、介词提前等有不同限制。'],
 ['还要看关系词在从句中的任务','the book which I bought 中 bought 缺宾语，which 补上这个位置；the boy who called 中 called 缺主语，who 充当主语。这里的“缺”是还原关系词后分析的成分。'],
 ['不要重复加入代词','the book that I bought 里面 that 已经代表书作 bought 的宾语，不能再在从句尾部加 it。关系词不是只负责连接，它还承担成分。']
],[['The student who answered first is my friend.','最先回答的学生是我的朋友。','who 作 answered 的主语。'],['The book that I borrowed is useful.','我借的那本书很有用。','that 作 borrowed 的宾语。']],[mc('The woman ____ teaches us English is kind.',['which','who','where','when'],1,'先行词 woman 指人，关系词在从句作主语，用 who。'),fill('The book ____ I bought is useful.（填 which 或 who）','which','book 指物，which 作 bought 的宾语。'),mc('请选择没有重复宾语的句子。',['The pen that I bought it is blue.','The pen that I bought is blue.','The pen I bought it is blue.','The pen which I bought it blue.'],1,'关系词 that 已作 bought 的宾语，不再另加 it。')],['relative-adverbs','relative-omit']);
add('relative','relative-adverbs','where、when、why 与 whose','Relative adverbs & whose','进阶','中级 Unit 94；高级 Units 54–55','where / when / why 作状语；whose + 名词','有地点词，不等于一定用 where。',[
 ['地点词也要看从句缺什么','the school where I study 中 I study 的核心成分完整，需要地点状语，where 合适；the school which I visited 中 visited 缺宾语，which 才能补这个位置。'],
 ['when 和 why 也看成分','the day when we met 中 when 作时间状语；the reason why she left 中 why 作原因状语。关系副词并不是“从句不完整”的万能补丁，而是补上特定状语关系。'],
 ['whose 表示所属，后面通常跟名词','a student whose father is a doctor 中 whose father 整体作主语，whose 表示这个学生的。whose 既能指人的所属，也能在合适语境指物。'],
 ['介词加关系词能表达同样关系','the city in which I live 可以对应 the city where I live。介词具体用哪个，取决于从句里的搭配。介词提前时通常用 whom/which，不能随意换成 that。']
],[['This is the room where we practise English.','这是我们练习英语的房间。','where 作地点状语；practise 已有宾语 English。'],['This is the room which we cleaned yesterday.','这是我们昨天打扫的房间。','cleaned 缺宾语，所以关系词用 which。']],[mc('This is the village ____ I grew up.',['which','where','who','whose'],1,'grew up 不缺宾语，需要地点状语，用 where。'),fill('I know a girl ____ brother is a pilot.','whose','whose brother 表示那个女孩的哥哥，整体作从句主语。'),mc('This is the museum ____ we visited.',['where','when','which','why'],2,'visited 是及物用法，缺宾语，which 代表 museum 作宾语。')],['relative-pronouns','objects']);
add('relative','relative-omit','关系词省略与从句简化','Omitting & reducing clauses','进阶','初级 Unit 102；中级 Units 93, 97；高级 Units 56–57','作宾语时常可省略；作主语时通常不能直接省','先还原完整结构，再判断可以省掉哪部分。',[
 ['限制性从句中，宾语关系词常可省','The book that I bought 可写 The book I bought。省略后从句表面上没有关系词，但仍在修饰 book。并不是所有从句都必须能看见连接词。'],
 ['主语关系词不能这样直接删掉','The boy who called me 不能直接写 The boy called me 后仍期待它表示“给我打电话的男孩”。删除 who 会让 called 被理解成新的主句谓语，改变结构。'],
 ['分词结构是另一种简化','the students who are waiting outside 可在合适语境简化为 the students waiting outside；the letter which was written yesterday 可变成 the letter written yesterday。注意这不只是随意删一个关系词。'],
 ['省略后要保持关系清楚','介词在末尾时，宾语关系词常可省：the person I spoke to。介词提前如 to whom 则不能按同样方式省略。非限制性从句的关系词通常也不能省。']
],[['The exercise I finished was difficult.','我做完的那道练习很难。','I finished 前省略了作宾语的 that/which。'],['The students waiting outside are from Class Two.','在外面等候的学生来自二班。','waiting outside 是分词结构，修饰 students。']],[mc('哪句的关系词可以直接省略而保持原意？',['The boy who lives here is Tom.','The book that I read is useful.','My teacher, who is kind, helped me.','The house which stands there is old.'],1,'that 作 read 的宾语，且是限制性从句，可以省略。'),fill('The letter ____ (write) yesterday is on the desk.','written','letter 与 write 是被动关系，用过去分词 written 作定语。'),mc('关系词作从句主语时，通常：',['可以直接删掉而什么都不改','不能按宾语关系词的方式直接省略','必须改成 where','只能用 whom'],1,'主语关系词通常不能直接省掉；若要改成分词结构，需做相应整体调整。')],['participles','relative-extra']);
add('relative','relative-extra','限制性与非限制性','Defining & non-defining clauses','进阶','中级 Units 95–96；高级 Units 53–55','限制范围：无逗号；补充信息：常用逗号隔开','逗号会改变信息和所指的范围。',[
 ['限制性从句帮助确定“哪一个”','The students who finished early left 只说明提前完成的那部分学生离开。who finished early 在这里缩小 students 的范围，通常不加逗号。'],
 ['非限制性从句补充已识别对象的信息','My brother, who lives in Jinan, is a doctor 中主句已指向我的哥哥，从句只是补充居住信息。口头朗读也常有停顿。'],
 ['关系词选择有额外限制','非限制性从句通常不用 that，指人用 who/whom，指物用 which；关系词也通常不能省略。所以不能说 who 和 that 在任何定语从句里都能互换。'],
 ['which 还可以指前面整句话','He missed the bus, which made him late 中 which 指错过公交这件事。翻译时可以按“这件事……”理解，不一定只去找紧挨着的名词。']
],[['My sister, who studies medicine, is very busy.','我姐姐学医，她很忙。','who 从句只是补充姐姐的信息。'],['He forgot his notebook, which caused a problem.','他忘带笔记本了，这造成了麻烦。','which 指向前面忘带笔记本这件事。']],[mc('My father, ____ is a teacher, likes reading.',['that','who','what','where'],1,'逗号隔开的非限制性从句指人用 who，通常不能用 that。'),fill('He passed the exam, ____ made us happy.','which','which 指前面通过考试这件事，作 made 的主语。'),mc('非限制性定语从句中的关系词通常：',['可以随意省略','不能省略','必须是 that','必须表示地点'],1,'非限制性从句的关系词通常不能省略。')],['relative-pronouns','coordination']);
add('nominal','objects','宾语从句与引导词','Object clauses','进阶','初级 Units 49–50；中级 Units 47–50；高级 Units 32–38','动词 / 介词 + 从句；从句通常用陈述语序','先看从句缺什么，再看要表达哪一种信息。',[
 ['整个从句作宾语','I know that she is honest 中 that she is honest 整体是 know 的宾语。宾语从句内部仍要有自己的主语和谓语，不能把主句的主语借过去后随意省掉。'],
 ['that、whether/if 的作用','that 通常只连接，不充当从句成分，本身没有具体疑问含义；whether/if 表示“是否”，也不充当主语或宾语。句子结构完整时，仍要根据想表达陈述还是疑问来选择。'],
 ['what 与 when、where、why、how 不同','what 常在从句作主语、宾语等；when、where、why、how 常作时间、地点、原因、方式状语。从句主谓宾完整，并不表示不能再用连接副词；要看是否还在询问这些信息。'],
 ['从句内部用陈述语序','I wonder where she lives，而不是 where does she live。if 作宾语从句引导词表示“是否”时，不能套条件状语从句的主将从现，如 I don’t know if she will come。']
],[['I know that she studies here.','我知道她在这里学习。','that 只连接，后面的陈述结构完整。'],['I wonder why she left early.','我想知道她为什么提前离开。','why 作原因状语，表达想知道的原因。']],[mc('I do not know ____ she will come or not.',['that','whether','what','which'],1,'whether...or not 表示是否，不缺主宾也可使用 whether。'),fill('Do you know where he ____ (live)?','lives','从句用陈述语序，一般现在时第三人称单数用 lives。'),mc('I wonder why she left. 其中 why 表示：',['从句缺少宾语','对离开原因的询问','地点','主语'],1,'she left 的主谓结构完整，why 仍可作原因状语表达询问。')],['subject-clause','future-time']);
add('nominal','subject-clause','主语从句与形式主语','Subject clauses','进阶','中级 Unit 84；高级 Units 96–98（按名词性功能重组）','从句 + 谓语；It + 谓语 + 从句','把整个从句当成“这件事”放到主语位置。',[
 ['主语不一定只是一个词','That she passed the exam made us happy 中整个 That she passed the exam 是主句的主语。主句的谓语是 made，不能把从句内部的 passed 当成主句谓语。'],
 ['what 通常还在从句里占位置','What he said surprised me 中 he said 缺宾语，what 补上宾语位置；整个 What he said 又作主句主语。要同时看从句内部与主句外部两个层面。'],
 ['结构完整仍可能要用连接副词','When the meeting starts is unclear 中 the meeting starts 的主谓完整，但我们谈的是“开始的时间”。when 作时间状语，整个从句表示一个待确定的时间信息。'],
 ['it 可让句子前面更轻','It is clear that she is right 中 it 是形式主语，that 从句是真正主语。句首 that 主语从句中的 that 通常不能省；不要照搬部分宾语从句可省 that 的规则。']
],[['What you said was helpful.','你说的话很有帮助。','what 作 said 的宾语，整个从句作 was 的主语。'],['It is clear that we need more practice.','很明显，我们需要更多练习。','it 占主语位置，that 从句表达真正内容。']],[mc('____ he said surprised me.',['That','What','Whether','When did'],1,'said 缺宾语，用 what；整个从句再作 surprised 的主语。'),fill('It is clear ____ she is right.（填只起连接作用的词）','that','that 引导真正主语从句，不在从句里充当成分。'),mc('When the train arrives is unknown. 中 When the train arrives 整体作：',['定语','主语','宾语补足语','并列谓语'],1,'整个从句谈论到达时间，位于主句主语位置。')],['objects','agreement']);
add('nominal','predicative','表语从句','Predicative clauses','进阶','高级 Units 33–34, 70, 98（按名词性功能重组）','主语 + 系动词 + 从句','从句放在系动词后，说明主语的内容。',[
 ['从句解释主语是什么','The problem is that we have little time 中 that 从句位于系动词 is 后，具体说明 problem 的内容。主句骨架是 The problem is ...。'],
 ['从句成分和意思共同决定引导词','The question is whether he agrees 强调是否；This is what I need 中 what 作 need 的宾语；That is why I left 中 why 表示原因。不能一看 is 后面就固定选 that。'],
 ['主语从句与表语从句看外部位置','What I need is more time 中 What I need 位于主语位置；This is what I need 中 what I need 位于表语位置。内部形式相似，外部任务不同。'],
 ['that 与 because、why 的意思不同','The reason is that... 常用来交代原因内容；That is because... 表示那是因为……；That is why... 表示那就是为什么……。练习中要同时读清前后逻辑。']
],[['The problem is that we have no map.','问题是我们没有地图。','that 从句作表语，说明问题内容。'],['That is why I asked for help.','那就是我求助的原因。','why 在表语从句内表示原因。']],[mc('The question is ____ we can finish on time.（是否）',['what','whether','which','who'],1,'表示是否，用 whether 引导表语从句。'),fill('This is ____ I need.（填“我所需要的东西”中的连接代词）','what','need 缺宾语，what 既连接又补上宾语。'),mc('The truth is that he forgot. 中 that he forgot 作：',['主语','定语','表语','时间状语'],2,'从句位于系动词 is 后，解释 truth 的内容。')],['subject-clause','appositive']);
add('nominal','appositive','同位语与同位语从句','Apposition & content clauses','进阶','高级 Units 38, 56（按名词性功能重组）','名词 + that + 对该名词内容的说明','先问：是在说明“什么内容”，还是“哪一个”。',[
 ['普通同位语是同一对象的另一种说明','My friend Lily 中 Lily 说明 friend 是谁；Beijing, the capital of China 中名词短语补充说明 Beijing。不是所有逗号之间的词都叫同位语，还需看是否同指一个对象。'],
 ['同位语从句展开抽象名词的内容','the fact that he was late 中从句说明事实是什么。常见中心名词有 fact、idea、news、belief 等，但不能仅看到某个名词就认定后面一定是同位语从句。'],
 ['与定语从句比较关系词任务','the news that he won 说消息的内容，that 不在从句作成分；the news that he shared 中 shared 缺宾语，that 作宾语，属于定语从句。成分和意思要一起判断。'],
 ['插入的信息不等于同位语','like Lei Feng 这样的介词短语可插入句中作举例补充，但不是因此就变成名词性同位语。标点告诉你停顿，具体语法仍看短语本身和它说明的对象。']
],[['We heard the news that our team had won.','我们听到了我们队获胜的消息。','从句交代 news 的内容，that 不充当内部成分。'],['The news that she shared was exciting.','她分享的消息令人兴奋。','that 作 shared 的宾语，从句修饰 news，属于定语从句。']],[mc('The fact that he lied upset me. 中 that 从句是：',['同位语从句','地点状语从句','非限制性定语从句','条件从句'],0,'从句说明 fact 的具体内容，that 不承担从句成分。'),fill('The news ____ he won surprised us.（填只连接、不作成分的词）','that','he won 的主谓结构完整，that 引出消息内容。'),mc('The idea that she proposed was useful. 中 that 在从句中作：',['时间状语','宾语','主语','只连接不作成分'],1,'she proposed 缺宾语，that 代表 idea，属于定语从句。')],['relative-pronouns','objects']);
add('adverbial','future-time','主将从现的使用边界','Future time in clauses','进阶','初级 Units 98–99；中级 Unit 25；高级 Units 79, 83–84','将来时间 / 条件状语从句，通常用现在形式','先确认从句的任务和意思，再应用时态规则。',[
 ['这条规律说的是将来情境','I will call you when I arrive 中 arrive 虽是现在形式，却指将来的到达。在表示将来时间、真实条件的状语从句中，通常不单纯用 will 来标将来。'],
 ['主句并不一定非要用 will','When you arrive, call me 是祈使句主句；You can leave when you finish 的主句有情态动词。主将从现是一种方便记忆的说法，不能把它理解成两个位置只有一种形式。'],
 ['不是所有 when、if 都适用','I don’t know when she will arrive 中 when 引导宾语从句，表示不知道到达时间；I don’t know if she will come 中 if 表示是否。这些从句不按时间、条件状语从句的规律处理。'],
 ['过去情境与连词选择仍看意思','When I arrived, he was reading 描述过去，不需强套现在时。选 until、since、before 等词时，先确定“直到、从……以来、在……之前”的逻辑关系，时态正确不能代替句意正确。']
],[['I will send you a message when I get home.','我到家后会给你发消息。','when 是将来时间状语从句，用 get。'],['I do not know when he will get home.','我不知道他何时会到家。','when 从句作 know 的宾语，可用 will get。']],[mc('I will wait here until she ____.',['returns','will return','returning','to return'],0,'until 引导将来时间状语从句，通常用现在形式 returns。'),fill('If it ____ (rain) tomorrow, we will stay inside.','rains','真实将来条件从句通常用一般现在时；it 对应 rains。'),mc('哪一句可以按正常将来意义在从句里用 will？',['I will go when she will arrive.','I will wait until he will come.','I do not know when she will arrive.','If he will come tomorrow, I will call you.（will 只标将来）'],2,'know 后是表示询问到达时间的宾语从句，不是时间状语从句。')],['objects','real-if']);
add('adverbial','time-connectors','when、while、until 与 since','Time connectors','基础','初级 Units 98, 104–105；中级 Units 119–120；高级 Unit 79','when / while / before / after / until / since','每个连词先表达一种时间关系。',[
 ['when 与 while 的时间视角','when 可以引出时间点、事件或时段；while 常突出同时进行的一段活动。while 后不必无条件使用过去进行时，实际时态要看语境。'],
 ['until 画出持续或等待的终点','I waited until he arrived 表示等待持续到他到达。not ... until 常表示直到某时才做，如 I didn’t leave until he arrived。until 本身不规定从句永远用哪一种时态。'],
 ['since 给出开始点','since 可以表示自从，从过去起点延伸到后来观察点，常与完成时配合。它也可表示因为，选择时必须看前后逻辑，不能看到现在时从句就断定是时间意义。'],
 ['before、after、by 的关系不同','before 是在……之前，after 是之后，by 常表示不迟于截止点。by the time 引导的结构常涉及某个截止点前已完成的动作；until 更强调持续到何时。']
],[['I waited until the teacher arrived.','我一直等到老师到来。','过去语境中，waited 与 arrived 都可用一般过去时。'],['She was taking notes while I was speaking.','我讲话时她在记笔记。','while 连接同时进行的两项活动。']],[mc('I did not leave ____ the rain stopped.（直到雨停才离开）',['until','since','because of','during'],0,'not ... until 表示直到雨停才离开。'),fill('I have lived here ____ 2020.','since','since 后接开始时间点 2020。'),mc('while I was reading 中 while 后接的是：',['名词短语','完整从句','不定式','形容词'],1,'I 是主语，was reading 是谓语，整体是从句。')],['past-cont','future-time']);
add('adverbial','contrast','原因、让步与转折','Because, although & despite','基础','初级 Unit 97；中级 Units 113, 116；高级 Units 80, 82, 87','although + 从句；despite + 名词 / doing','先读出逻辑，再看连词后能接什么结构。',[
 ['because 说原因，although 说让步','We stayed home because it rained 说明待在家的原因；We went out although it rained 表示虽然下雨却仍外出。相似的两个分句，逻辑关系可能完全不同。'],
 ['连词和介词后面的结构不同','although 后可接主语加谓语的从句；despite/in spite of 后常接名词、代词或 doing。because + 从句，because of + 名词短语，也可以这样对照。'],
 ['不要把中英文成对连接机械对应','标准书面英语里，同一层级通常不写 Although..., but...，也通常不写 Because..., so...。不过一个长句里可以有多个连词，只要各自连接不同层级的结构。'],
 ['however 不是 but 的完全同义替换','but 是并列连词，可连接分句；however 表示转折时通常是连接副词，标点安排不同。两个独立分句不能只靠一个逗号加 however 草率连接。']
],[['Although the task was difficult, we finished it.','虽然任务很难，我们还是完成了。','although 引导让步从句，主句不再加 but。'],['Despite the noise, she continued reading.','尽管有噪声，她仍继续阅读。','despite 后接名词短语 the noise。']],[mc('____ it was raining, we continued walking.（虽然）',['Although','Despite','Because of','In spite of'],0,'空格后有主语 it 和谓语 was raining，表示让步用 Although。'),fill('We stayed inside because ____ the storm.','of','the storm 是名词短语，使用 because of。'),mc('标准书面语中哪句成立？',['Although he was tired, but he worked.','Because he was tired, so he slept.','Although he was tired, he worked.','Despite he was tired, he worked.'],2,'although 引导从句后直接接主句，不在同一层级重复使用 but。')],['coordination','gerund']);
add('adverbial','purpose-result','目的与结果','Purpose & result','进阶','初级 Units 54, 91–92；中级 Units 64, 102–103；高级 Unit 81','to do / so that ...；so ... that / such ... that','“为了怎样”和“以至于怎样”，方向不同。',[
 ['目的说明行动想达到什么','I spoke slowly so that everyone could understand 说明说慢的目的。to do、in order to do、so as to do 常接原形；so that 后通常接有主语和谓语的从句。'],
 ['结果说明实际达到什么程度','He ran so fast that nobody could catch him 中 so fast 描述速度程度，that 从句说明结果。so + 形容词/副词，such + 名词短语，结构不同。'],
 ['时态由叙述时间和实际意思决定','过去的一次赛跑常说 ran ... could ...，因为追不上的能力或可能性也属于那次过去情景。不能只把 could 改成 can，还声称整句时间含义完全一样。'],
 ['不定式与分词也能表示结果','too ... to do 表示太……而不能；enough to do 表示足够……可以。逗号后 doing 也可补充事件的自然结果，但要确保前面主句完整、后果关系清楚。']
],[['I wrote the word down so that I could remember it.','我把单词写下来，以便记住。','so that 从句说明目的。'],['The room was so dark that I could not read.','房间太暗了，以至于我无法阅读。','so dark that 连接程度与结果。']],[mc('It was ____ an interesting story that I read it twice.',['so','such','too','enough'],1,'后面是 an interesting story 名词短语，用 such。'),fill('He spoke slowly so ____ we could understand him.','that','so that 引导目的从句。'),mc('He ran so fast that nobody could catch him. 其中 that 从句表示：',['定语','结果','主语','同位语'],1,'从句说明跑得快达到的结果，即别人追不上。')],['participles','degree-order']);
add('sentence','coordination','and、but、or 与句子层级','Coordination & clause layers','基础','初级 Unit 97；中级 Units 113, 115；高级 Unit 87','词 + and + 词；短语 + but + 短语；分句 + or + 分句','并列看结构功能，不要求每个词的外形一样。',[
 ['并列连词可以连接不同大小的单位','and、but、or 可以连接词、短语或分句。tea and coffee，tired but happy，Study now or you may forget。先确认两边在句中的功能能否并列。'],
 ['平行不等于所有形式完全一致','a question and several answers 都是名词短语，虽然一个单数一个复数，也能并列。结构功能对应比简单要求两边单复数相同更准确。'],
 ['长句可以同时出现多个连词','I stayed home because it rained and I was tired 可以把两个原因分句连接在 because 的作用范围内。不能说“一个句子只能有一个连词”。需要看每个连词连接哪一层。'],
 ['数谓语和连词只是辅助','共用主语的并列谓语、省略成分、非谓语和嵌套从句都会让简单计数失效。分析时先找完整分句与共享成分，遇到省略可先还原。']
],[['She is tired but happy.','她很累，但很开心。','but 连接两个形容词，共同作表语。'],['I know that he came and that he helped us.','我知道他来了，也知道他帮助了我们。','and 连接两个宾语从句。']],[mc('and 可以连接哪些单位？',['只能单词','只能句子','词、短语或分句','只能复数名词'],2,'并列连词可以连接词、短语、分句等相应结构。'),fill('She is tired ____ happy.（填表示转折的并列连词）','but','but 连接表语 tired 和 happy，表示转折。'),mc('“一个句子里只能有一个连词”这一说法：',['正确','不正确，应看结构层级','只要有 and 就正确','只要是过去时就正确'],1,'一个句子可有多个连接不同层级的连词，不能只按数量判断。')],['skeleton','contrast']);
add('parts','prepositions','时间、地点与介词搭配','Prepositions in context','基础','初级 Units 103–113；中级 Units 121–136；高级 Units 88–93','at / on / in；动词 / 名词 / 形容词 + 介词','一部分靠空间和时间关系，一部分靠固定搭配。',[
 ['时间介词先看范围','at 常用于具体时刻，on 常用于日期或具体某天，in 常用于月份、年份、较长时期。具体表达仍有固定用法，如 at night，in the morning，on Monday morning。'],
 ['地点介词看观察方式','in 常把地点看作内部空间，on 常看作表面，at 常看作点或活动地点。并非同一个地点永远只能配一个介词，表达重点不同可以改变。'],
 ['移动方向与静态位置要分开','into 常突出进入内部的移动；in 常表示在内部。arrive at/in 是常见搭配，不能因为中文说“到”就统一写成 arrive to。'],
 ['搭配要连起来记','listen to、talk to、be interested in、have an influence on、the reason for 等需要整体记忆。遇到介词后接动作，通常使用 doing，这也包括某些搭配里的 to。']
],[['The class starts at nine on Monday.','周一的课九点开始。','at 接具体时刻，on 接星期几。'],['She is interested in learning French.','她对学习法语感兴趣。','interested in 后接 doing。']],[mc('We will meet ____ Monday morning.',['in','at','on','to'],2,'具体某天的早晨通常用 on。'),fill('Please listen ____ the recording.','to','listen 连接对象时通常使用 listen to。'),mc('He walked into the room. 其中 into 突出：',['房间外的静止位置','进入内部的移动','抽象原因','比较程度'],1,'into 表示从外到内的移动方向。')],['prep-to','time-connectors']);
add('parts','phrasal','短语动词与宾语位置','Phrasal verbs','进阶','初级 Units 114–115；中级 Units 137–145；高级 Unit 94','turn off the light / turn the light off / turn it off','有些可以拆开，代词的位置尤其要注意。',[
 ['短语动词不总能逐词翻译','give up 可表示放弃，look after 可表示照顾。动词加小品词或介词构成的组合，可能产生整体含义，需要在句子里记。'],
 ['可分短语动词有两种名词位置','turn off the light 和 turn the light off 都可以。off 在这种结构里可放在名词宾语前或后，但这并不意味着所有动词短语都能这样拆。'],
 ['代词宾语通常放在中间','在 turn off 这样的可分结构中，代词要说 turn it off，通常不说 turn off it。put it on、pick it up 也有同样常见位置规律。'],
 ['不可分的组合需保留顺序','look after the child 或 look after him，不能把宾语插成 look him after。词典里会给出可分性，不能只凭由两个词组成就自行拆开。']
],[['Please turn the music down.','请把音乐声调小。','名词宾语可以放在 turn 和 down 中间。'],['I wrote the address down and saved it.','我记下了地址并保存了它。','write down 表示记下。']],[mc('代词作宾语时，哪一表达正确？',['Turn off it.','Turn it off.','Turn it is off.','Turn off its.'],1,'turn off 是可分结构，代词宾语 it 放在中间。'),fill('Please pick it ____.（把它捡起来）','up','pick up 表示捡起，代词位于 pick 和 up 之间。'),mc('look after him 的正确拆分是：',['look him after','look after him','after look him','look he after'],1,'look after 通常不可按可分短语动词的方式拆开。')],['prepositions','pronouns']);
add('sentence','reported','直接引语与间接引语','Reported speech','进阶','初级 Unit 50；中级 Units 47–50；高级 Units 32–37','said (that) ... / told sb (that) ... / asked if ...','从说话者的视角，转到转述者的视角。',[
 ['陈述的转述可以用 that 从句','She said, “I am busy.” 可转述为 She said that she was busy。代词、时间和地点表达要按转述情景调整，不能只改时态而让人称错位。'],
 ['时态后移很常见，但不是无条件','主句是过去报告动词时，am 常变 was，have done 常变 had done。若事实仍成立或说话者保留当前视角，时态不一定机械后移。'],
 ['疑问的转述恢复陈述语序','He asked where I lived，而不是 where did I live。一般疑问句的转述常用 if/whether，如 asked if I was ready。'],
 ['say 和 tell 的宾语结构不同','say something、say to somebody；tell somebody something。He told me that... 合适，He said me that... 通常不合适。命令或请求还常转成 tell/ask somebody to do。']
],[['She said that she was preparing for an exam.','她说她正在备考。','转述里人称和时态随视角调整。'],['He asked me whether I needed help.','他问我是否需要帮助。','一般疑问的转述使用 whether 和陈述语序。']],[mc('使用 tell 转述时，哪一表达正确？',['He said me that he was busy.','He told me that he was busy.','He told that me was busy.','He said to that me.'],1,'tell 后可直接接人作宾语，再接 that 从句。'),fill('She asked where I ____ (live).（按过去时转述）','lived','asked 后用陈述语序，并按给定过去视角使用 lived。'),mc('“Do you need help?” 的转述可写为：',['He asked if I needed help.','He asked did I need help.','He asked if did I need help.','He asked what I need help.'],0,'一般疑问的转述可由 if 引导，内部用陈述语序。')],['objects','questions']);
add('inversion','inversion','完全倒装与部分倒装','Full & partial inversion','进阶','高级 Units 99–100','Only then did ... / Here comes ... / Had I known ...','先辨认倒装类型，再还原普通语序。',[
 ['部分倒装移动的是助动词','Only then did I understand 中 did 移到主语前，understand 用原形。否定或限制性表达位于句首时，常引出这种语序，如 Never have I seen...。'],
 ['only 和 not only 要看作用范围','Only when I arrived did I understand 中倒装发生在主句，不发生在 when 从句。Not only did he help me, but he also encouraged me 中通常前一分句倒装；only 修饰主语时通常不这样倒装。'],
 ['完全倒装移动整个谓语','Here comes the bus 中 comes 整体放在名词主语 the bus 前；地点短语前置时也常见完全倒装，如 On the hill stood a house。若主语是人称代词，通常说 Here he comes，而不是 Here comes he。'],
 ['非真实条件句可省略 if 后倒装','条件从句含 had、were 或 should 时，可以省略 if 并把它们放在主语前。Had I known 相当于 If I had known。还原后再判断时间和假设含义，不要和一般疑问句混淆。']
],[['Only then did I understand the rule.','直到那时我才理解这条规则。','did 移到主语前，understand 用原形。'],['Here comes the bus.','公共汽车来了。','谓语 comes 整体位于名词主语 the bus 前，属于完全倒装。']],[mc('Only then ____ I realise my mistake.',['did','was','had to be','am'],0,'only then 位于句首引出部分倒装，用 did I realise。'),fill('Not only did she ____ (help) me, but she also encouraged me.','help','did 已承担时态，后面使用动词原形 help。'),{...mc('主语是人称代词时，哪一句正确？',['Here comes he.','Here he comes.','Here does comes he.','Here coming he.'],1,'here 位于句首、主语为人称代词时通常不完全倒装，应说 Here he comes。'),id:'inversion-pronoun'}],['questions','unreal','emphasis']);

add('sentence','there-be','there be 存在句','There is & there are','基础','初级 Units 37–39；中级 Unit 84','There + be + 名词 + 地点或时间','先引入某物的存在，再描述它在哪里。',[
 ['there be 引入存在','There is a book on the desk 表示桌上有一本书。这里 there 用于引出存在，不把它当作表示“那里”的主语。名词 book 才是决定单复数的重要依据。'],
 ['根据名词和时间选择 be','There is a book 与 There are two books 区分单复数。过去可以用 There was / were，将来可以用 There will be。不要写成 There will have。'],
 ['否定和疑问围绕助动结构变化','There isn’t any milk 表示没有牛奶；Are there any questions? 把 are 放到 there 前。完成式也可说 There has been a mistake。'],
 ['与 have 和 it 区分','have 常表示所属或具备，there be 强调存在。it 常指已提到的对象，也可作形式主语；不能把 It is a book on the desk 当作 there be 存在句的直接替换。']
],[['There are two books on the table.','桌上有两本书。','two books 是复数，使用 are。'],['There will be a meeting tomorrow.','明天将有一个会议。','将来存在用 will be，不能用 will have。']],[mc('There ____ two chairs in the room.',['is','are','has','have'],1,'two chairs 是复数，there be 结构应使用 are。'),fill('There will ____ a test tomorrow.','be','there be 的将来形式是 there will be。'),mc('“冰箱里没有牛奶”应选：',['There isn’t any milk in the fridge.','There aren’t any milk in the fridge.','There doesn’t milk in the fridge.','It aren’t milk in the fridge.'],0,'milk 不可数，there be 的否定形式使用 isn’t any milk。')],['agreement','skeleton']);

add('subjunctive','subjunctive-suggestions','建议、要求与命令的虚拟形式','Mandative subjunctive','进阶','中级 Unit 34；高级 Unit 39','suggest / recommend / demand that ... (should) do','先判断动词表达的是要求，还是对事实的陈述。',[
 ['建议类从句常用原形','suggest、recommend 等表示建议时，that 从句可用 should 加动词原形，也可省略 should。I recommend that she be on time 中，即便主语是 she，仍用 be。'],
 ['要求和命令也有类似用法','demand、request、order、insist 等表达要求或命令时，从句可以用同样的结构。The teacher insisted that everyone arrive early 中 arrive 不变为 arrives。'],
 ['否定和被动也保留原形结构','否定可用 that he not leave 或 that he should not leave。被动可用 that the work be finished；这里 be 保留原形，而不是根据主语改为 is。'],
 ['同一个动词的含义会改变结构','suggest 表示暗示、insist 表示坚持认为某事实时，通常按实际情况选择陈述语气。The evidence suggests that he is right 描述证据所暗示的事实，并不是建议。']
],[['The teacher suggested that he practise daily.','老师建议他每天练习。','建议类从句中 practise 用原形，也可写 should practise。'],['They requested that the door be kept closed.','他们要求门保持关闭。','从句使用被动的原形结构 be kept。']],[{...fill('I recommend that she ____ (be) on time.（使用省略 should 的形式）','be','recommend 表示建议，从句省略 should 后仍用原形 be。'),id:'should-1'},mc('They demanded that the work ____ before Friday.（使用省略 should 的形式）',['be finished','is finished','was finishing','finishes'],0,'demand 表示要求，从句使用原形被动结构 be finished。'),mc('The evidence suggests that he is right. 中 suggests 表示：',['要求他正确','建议他正确','暗示某事实','命令立即行动'],2,'这里 suggests 表示证据暗示某事实，不采用建议类虚拟结构。')],['should','unreal','objects']);

add('emphasis','emphasis','it 强调句与谓语强调','Cleft sentences & emphatic do','进阶','中级 Unit 84；高级 Units 95–98','It is / was ... that / who ...；do / does / did + 原形','突出想强调的成分，同时保留原句的基本意思。',[
 ['强调句突出主语宾语或状语等','It was Lily who helped me yesterday 突出帮助我的人是 Lily。强调句常用 It is / was 加被强调部分加 that；强调人时也可用 who。谓语动词的强调另用 do 等结构。'],
 ['还原句子帮助辨认结构','It was yesterday that I met her 去掉强调框架后，可以还原为 I met her yesterday。强调时间或地点时仍用 that，不能只因为有 yesterday 就选 when。'],
 ['疑问和 not until 也可使用强调句','Was it Tom who called? 是一般疑问形式；When was it that you arrived? 强调询问到达时间。It was not until Monday that he replied 表示直到周一他才回复。'],
 ['强调谓语使用 do does 或 did','I do agree with you 强调确实赞同；She does work hard 强调确实努力；He did call yesterday 强调确实打过电话。助动词承担人称和时态，后面的实义动词用原形。']
],[['It was Lily who helped me yesterday.','昨天帮助我的是莉莉。','强调主语 Lily，指人时可以用 who。'],['She does work hard.','她确实工作很努力。','does 表示强调，后面的 work 用原形。']],[{...mc('哪一句是强调句？',['It is raining.','It was Tom who called me.','It is cold today.','It has a red cover.'],1,'It was...who... 突出打电话的人 Tom，属于强调结构。'),id:'inversion-2'},fill('He did ____ (call) me yesterday.','call','did 已承担过去时态，用动词原形 call 来强调谓语。'),mc('It was in the library ____ I met her.',['where','when','that','what'],2,'这里是强调地点状语的 it 强调句，连接部分用 that。')],['inversion','relative-pronouns','skeleton']);
window.GRAMMAR = {groups:GROUPS,lessons:LESSONS,version:2,books:[
 {name:'Essential Grammar in Use',edition:'Fourth Edition · 初级',note:'按 115 个单元的基础主题归类；整本与分册合并处理。'},
 {name:'English Grammar in Use',edition:'Fifth Edition · 中级',note:'以 145 个单元的主题脉络为主要索引。'},
 {name:'Advanced Grammar in Use',edition:'Third Edition · 高级',note:'补充主谓一致、从句、分词、倒装与信息组织。'}
]};
