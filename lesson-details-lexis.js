/* Refined explanations informed by 英语语法知识体系详解; examples are newly written. */
(() => {
  const detail=(definition,classification,usage,pitfalls,examples)=>({
    definition,classification,
    usage:usage.map(([h,t])=>({h,t})),
    pitfalls:pitfalls.map(([title,wrong,right,text])=>({title,wrong,right,text})),
    examples:examples.map(([en,zh,note])=>({en,zh,note}))
  });
  const details={
    skeleton:detail(
      '句子成分是词、短语或从句在句中的任务；词性是词的类别。分析句型时，先确定谓语的完整结构，再找主语，以及该动词用法所需要的宾语、表语或补足语。',
      ['主语与谓语','主谓宾','主系表','双宾语与宾语补足语','必需与附加成分'],[
        ['先找完整谓语','has been repaired、may have left 都是由多个词组成的谓语动词结构，不能按动词词数数出多个独立谓语。He enjoys reading 中 enjoys 是限定谓语，reading 是它支配的非谓语成分。'],
        ['用动词用法识别骨架','Birds fly 是主谓；She likes music 是主谓宾；She seems tired 是主系表。感官动词的性质取决于用法：look tired 是系表，look at the picture 则表示看的动作。'],
        ['区分两个宾语与宾补','She gave me a map 中 me 与 a map 是接收者和物品；They called her captain 中 captain 说明 her 的身份，是宾补。后一个成分是否在描述前一个宾语，是重要线索。'],
        ['不要任意删除必需补足成分','She put the key on the shelf 中地点是 put 这个用法通常要求的信息；She read on the train 中地点只是附加信息。五种基本句型是学习框架，不能据此把所有地点短语都视为可删状语。']
      ],[
        ['系表结构缺少系动词','The children very excited.','The children are very excited.','excited 是形容词，不能独自承担这句完整陈述的谓语；需要 are 连接主语与状态。'],
        ['把 explain 套成双宾语结构','Please explain me the rule.','Please explain the rule to me.','标准用法是 explain something to someone；不能因为 give me a book 可用，就把所有传递信息的动词都套成双宾语。']
      ],[
        ['The old bridge has been repaired.','那座旧桥已经修好了。','The old bridge 整体作主语；has been repaired 是完成式被动谓语，没有另一个独立分句。'],
        ['We found the classroom surprisingly quiet.','我们发现教室安静得出奇。','the classroom 是宾语，surprisingly quiet 整体说明宾语状态，是宾补；quiet 的词性仍是形容词。']
      ]),
    questions:detail(
      '疑问句通过句型或疑问词询问信息。判断语序时，要先分清它是独立问句还是嵌入其他句子中的疑问从句，再看疑问词本身是否已经作主语。',
      ['一般疑问句','特殊疑问句','主语与宾语提问','选择疑问句','反意疑问句'],[
        ['先找助动词','有 be、情态动词或完成式助动词时，通常把相应成分置于主语前。一般现在、过去时的普通实义动词用 do、does、did 帮助提问，后面的实义动词恢复原形。'],
        ['主语提问不重复添加主语','Who opened the box? 中 who 就是 opened 的主语，普通肯定问句不再加 did。Who did you invite? 中 who 是宾语，you 才是主语，因此需要 did。'],
        ['间接疑问使用陈述语序','I wonder where she works 中 where she works 是嵌入从句，采用主语在谓语前的语序。外层即使是 Could you tell me…? 这样的问句，内部也不照搬直接问句倒装。'],
        ['按交际目的和事实回答','Tea or coffee? 通常直接选择一项。Didn’t she come? 若她确实来了，答 Yes, she did；若没来，答 No, she didn’t。反意问句还需检查 never、seldom 等否定含义。']
      ],[
        ['把直接问句语序搬进从句','Could you tell me where is the station?','Could you tell me where the station is?','where 从句是 tell 的内容，内部用 the station is；疑问发生在外层 Could you…?。'],
        ['did 后仍用过去式','Who did you invited?','Who did you invite?','过去时已由 did 表达，后面的 invite 用原形。这里 who 是 invite 的宾语，you 才是主语。']
      ],[
        ['Who sent you these photos?','谁给你发了这些照片？','who 本身作 sent 的主语，不需要额外的 did。'],
        ['Do you know which train we should take?','你知道我们该坐哪班火车吗？','外层 Do you know 提问；which train 是嵌入从句的宾语，内部保持 we should take 的陈述语序。']
      ]),
    coordination:detail(
      '并列把句法地位能够对应的词、短语或分句连接起来。并列可以共用主语、助动词等成分；有几个动词或连词，并不能直接决定句子包含几个独立分句。',
      ['词与短语并列','并列谓语','独立分句并列','共同成分与省略'],[
        ['先确认并列发生的层级','apples and oranges 是名词并列；in the library and at home 是介词短语并列；She opened the window and sat down 是同一主语下的并列谓语。不要把后两种自动算成两个独立句。'],
        ['分句之间需要合法连接','两个独立分句可用句号、分号，或 and、but、so 等并列连词连接。however 是连接性副词，通常不能仅靠一个逗号把两个独立句连在一起。'],
        ['逻辑关系与结构一起检查','and 表添加，but 表转折，or 可表选择或否则，so 表结果。复杂句可以包含多个连词，只要它们分别连接不同层级；不能机械规定“一个句子只能有一个连词”。'],
        ['省略必须能够还原','She has checked the figures and written the report 中第二部分共用 has。还原后各部分都应结构成立；不要删掉只有某一动词需要的介词、宾语或其他必要成分。']
      ],[
        ['只用逗号粘连独立句','The room was cold, we closed the window.','The room was cold, so we closed the window.','两边各有独立主谓结构，普通正式书面语需要连词或更强的句界标点。'],
        ['把 however 当作并列连词','I checked twice, however, I missed the error.','I checked twice; however, I missed the error.','however 表句间转折，但不是 but 那样的并列连词；分号先建立两个独立分句的边界。']
      ],[
        ['Maya unlocked the door and switched on the lights.','玛雅打开门锁，并打开了灯。','两个动作共用主语 Maya，是并列谓语。'],
        ['I stayed because it was raining, but Leo went out.','因为下雨，我留了下来，但利奥出去了。','but 连接两个主干；because 从句只依附 I stayed，两个连词各有自己的连接层级。']
      ]),
    reported:detail(
      '间接引语从转述者的视角重述他人的话。转换时既要处理陈述、提问或要求的句型，也要检查人物指向、时间地点和语序，不能只删去引号。',
      ['陈述内容转述','一般与特殊疑问转述','请求与命令转述','人称、时间与视角'],[
        ['按言语行为选择结构','陈述常用 say that… 或 tell someone that…；疑问用 ask if/whether… 或保留疑问词；要求可用 tell/ask someone to do，否定要求用 not to do。suggest 通常不套 suggest someone to do。'],
        ['间接疑问恢复陈述语序','“Where are you staying?” 可转为 He asked where I was staying。一般疑问需要 if 或 whether，不能把原问句的助动词倒装和问号机械保留在从句里。'],
        ['时态后移要看参照时间','过去的转述常把 is 变 was、will 变 would、has done 变 had done；但普遍真理、仍然成立的事实或保持当前视角时，可不机械后移。重点是转述时间与原话所指时间的关系。'],
        ['人称和时空表达按真实关系调整','I、you 对应谁取决于原说话人、听话人和转述者。today、here、this 等只有在指称视角改变时才相应改写，不能无条件替换成 that day、there、that。']
      ],[
        ['tell 后遗漏人物对象','She told that the meeting was over.','She told us that the meeting was over.','tell 在这类转述中通常需要人物对象；也可改为 She said that the meeting was over。'],
        ['间接疑问保留倒装','He asked where did I live.','He asked where I lived.','where I lived 是 ask 的内容从句，内部用陈述语序，不再使用 did I live。']
      ],[
        ['Nora said that she would call me the next morning.','诺拉说她第二天早上会给我打电话。','would 表示从过去转述立足点看将来；she、me 和 the next morning 按转述者视角组织。'],
        ['The guide asked us not to touch the paintings.','导游请我们不要触碰画作。','转述否定请求用 ask someone not to do，不照搬原祈使句的 Don’t。']
      ]),
    'there-be':detail(
      'there be 用来引入某处或某时存在的人、物或情况。there 在这里承担存在句的结构作用，不等于地点副词“在那里”；存在对象通常放在 be 后面。',
      ['肯定、否定与疑问','存在对象与数的一致','时态与情态变化','存在与拥有'],[
        ['先表达存在，再补充位置','There is a note on the desk 的存在对象是 a note，on the desk 说明地点。have 通常表达某个主语拥有或具有某物，不能在同一个简单结构中把 there 和 have 混拼。'],
        ['根据对象及表达场合选择 be','There is a chair 与 There are three chairs 分别对应单复数。并列存在对象常受就近因素影响；正式表达可把同类对象归组或改写，避免仅依赖口语 there’s 加复数的形式。'],
        ['时间变化主要体现在 be 结构','过去可用 there was/were，将来用 there will be，完成形式用 there has/have been。情态动词后保持 be 原形，如 there may be a delay。'],
        ['后置修饰不是第二个独立谓语','There is a student waiting outside 中 waiting outside 修饰 student；There is a student who is waiting outside 用定语从句表达。两种结构不要随意混接。']
      ],[
        ['把存在句与 have 混拼','There have two windows in the room.','There are two windows in the room.','此处要表达房间里存在两扇窗，用 there are；也可说 The room has two windows。'],
        ['将来结构遗漏 be','There will a new library here.','There will be a new library here.','will 是情态助动词，后面需要 be 原形，不能直接跟存在对象。']
      ],[
        ['There has been a change to the timetable.','时刻表发生了变化。','has been 是存在句的现在完成形式，a change 为单数存在对象。'],
        ['Are there any seats near the window?','窗边有座位吗？','一般疑问把 are 放在 there 前；seats 为复数，使用 are。']
      ]),
    parallelism:detail(
      '平行结构要求并列成分能够在同一层级履行相称的句法功能。判断依据是动词搭配、成分功能和表达逻辑，而不是机械要求所有单词具有相同词尾。',
      ['名词性成分并列','非谓语并列','谓语与短语并列','关联结构的对应位置'],[
        ['先看共同支配成分','enjoy reading and swimming 中两个动名词都作 enjoy 的宾语；be interested in reading and writing 中两个动名词共同受介词 in 支配。不能把 to do 随意接到这类位置。'],
        ['把成对连接词放在对应成分前','not only A but also B、either A or B 的两个标记应引出同一层级、功能相称的部分。先确认到底在比较人物、动作还是完整分句，再安排连接词的位置。'],
        ['共同部分可以省略','She wants to learn and improve 中两个动词共用 to。She has planned the trip and booked the tickets 中两个分词共用 has。省略后的结构必须能按原义还原。'],
        ['不要把表面一致当作唯一标准','a doctor and a skilled teacher 可以并列，名词短语长度不同不构成错误。真正要排查的是某一项是否违反共同动词、介词或句型对其形式的要求。']
      ],[
        ['enjoy 后混入不定式','She enjoys reading and to swim.','She enjoys reading and swimming.','enjoy 在此支配动名词宾语；and 后的第二项也须满足这一搭配要求。'],
        ['介词后的并列项目形式不成立','He is interested in drawing and to paint.','He is interested in drawing and painting.','drawing 与 painting 共同作 in 的宾语，不能把不定式直接放在同一个介词宾语位置。']
      ],[
        ['The course teaches planning, editing and presenting.','这门课教授策划、编辑和展示。','三个动名词在同一层级作 teaches 的宾语。'],
        ['The new library is not only quiet but also easy to reach.','新图书馆不但安静，而且交通方便。','quiet 与 easy to reach 都是描述主语的形容词性表语，长度不同但功能相称。']
      ]),
    auxiliaries:detail(
      '助动词帮助中心动词表达时态、语态、疑问、否定或强调。be、do、have 也能独立作系动词或实义动词，必须结合后面的结构判断，不能见到一个词就给整句定时态。',
      ['be 与进行、被动','have 与完成','do 与疑问、否定、强调','实义用法与组合顺序'],[
        ['用后续词形识别功能','be + doing 常构成进行；be + done 可构成被动；have + done 构成完成。She is calm 是 be 作系动词，She has a bike 是 have 作实义动词，都不能按外形误判。'],
        ['一般时实义动词借助 do','Do they agree?、She doesn’t agree、He did agree 中，do 的形式承载相应人称或过去信息，中心动词 agree 用原形。有 be 或情态助动词的相关结构不再额外叠加普通 do。'],
        ['组合次序与词形相互约束','may have been repaired 中，may 后接原形 have，have 后接过去分词 been，be 的过去分词 been 后再接 repaired 构成被动。不是把几个助动词随意相加。'],
        ['助动词可以保留以避免重复','“Can she swim?”“Yes, she can.” 中省去已知的 swim，但 can 仍保留情态信息。疑问和否定通常作用于第一个相应助动词，如 Has she been waiting?。']
      ],[
        ['does 后重复第三人称单数','Does she knows the answer?','Does she know the answer?','does 已标示第三人称单数，后面的 know 采用原形。'],
        ['have 后误用过去式','They have wrote the report.','They have written the report.','完成结构要求过去分词 written，不能因为 wrote 也表示过去就替代它。']
      ],[
        ['The files may have been deleted.','这些文件可能已经被删除了。','may 表可能，have been deleted 组合完成与被动；多个词共同构成一个谓语动词结构。'],
        ['I do understand your concern.','我确实理解你的担心。','do 在肯定句中加强语气，understand 仍用原形。']
      ]),
    can:detail(
      'can 可表达能力、许可和一般可能性；could 可用于过去能力、较委婉的请求或假设等。情态过去形式不一定表示过去时间，选择时应先判断说话目的。',
      ['能力与 be able to','许可与请求','一般可能性','could 的过去与委婉用法'],[
        ['能力与具体成功分开判断','can 描述目前有能力做某事。could 可描述过去一般能力；肯定句中某一次实际克服困难做到的事，常用 was able to 或 managed to 更清楚，但否定、感官等用法有各自情况。'],
        ['请求的委婉度不是时间变化','Could you open the window? 是现在的委婉请求，不是询问过去。Can I…? 可询问许可；can 还可表示事物有时会出现的情况，如 Roads can be slippery。'],
        ['组合能力结构适配其他时态','will be able to、has been able to 可表达 can 本身不具备的某些时态组合。普通情态助动词之间不能写成 will can，也不能用 to can 表达对应不定式。'],
        ['否定和推测依语境判断','can’t 可表示不能、不允许，或根据证据判断不可能。It can’t be his bag 是推测，不是在说某人的能力；不能只按一个中文译词理解。']
      ],[
        ['can 后添加 to','My brother can to drive.','My brother can drive.','can 后接动词原形，不带不定式符号 to。'],
        ['把两个情态助动词直接叠加','We will can finish tomorrow.','We will be able to finish tomorrow.','需要将来能力时用 will be able to；不能在标准英语中组合 will can。']
      ],[
        ['Could you check this number for me?','你能帮我核对一下这个数字吗？','could 表现在的委婉请求，不表示核对发生在过去。'],
        ['After several attempts, we managed to open the lock.','试了几次后，我们终于打开了锁。','managed to 明确表示这一次实际成功，区别于泛指过去具备的能力。']
      ]),
    must:detail(
      'must 常表示必须做的要求，或根据证据作较有把握的推断。mustn’t 表禁止，而“不必”通常用 needn’t 或 don’t have to；否定改变的不只是语气强弱。',
      ['义务与必要','禁止与不必','现在推测','过去推测与过去义务'],[
        ['要求的来源只是常见倾向','must 常突出说话人的要求，have to 常突出实际条件，但两者并非绝对划界。普通过去的必要性通常用 had to，不能给 must 简单加 -ed。'],
        ['禁止不同于没有必要','You mustn’t enter 表不许进入；You don’t have to enter 表没有必要进入，并不禁止。选词前先明确想表达禁令还是免除要求。'],
        ['推测看证据及所指时间','He must be tired 是对当前状态的推测；He must have forgotten 是对过去的推测，不是“过去必须忘记”。否定推测通常可用 can’t/couldn’t，而非一律套 mustn’t。'],
        ['结构内部仍需原形','must 后接原形；推测过去时用 must have + done，推测进行中的情况可用 must be doing。不要把主语单复数重复加到后面的动词上。']
      ],[
        ['must 后加 to','You must to wear a helmet.','You must wear a helmet.','must 是情态助动词，后面直接接动词原形 wear。'],
        ['给 must 机械添加过去式词尾','We musted leave before six.','We had to leave before six.','过去的普通必要性用 had to；must 没有 musted 这种过去式。']
      ],[
        ['You must not share this password.','你不得分享这个密码。','must not 表禁止，不是“可以不分享”。'],
        ['The lights are off. They must have gone home.','灯都关了。他们一定已经回家了。','must have gone 根据当前线索推测过去已发生的动作。']
      ]),
    should:detail(
      'should 常表达建议、责任或对事情的合理预期。should have done 可表达过去本应做而未做，也可表达按时间推断应该已经完成，具体含义由语境决定。',
      ['建议与责任','合理预期','should have done','否定与相关结构'],[
        ['建议并不等于强制命令','You should rest 建议休息，通常比 must 的要求弱。ought to、had better 等也能提出建议，但结构和语气不同：had better 后接原形，常暗示不这样做会有后果。'],
        ['根据语境区分预期与义务','The train should arrive soon 表按安排预计快到了；Everyone should check the figures 可表示应尽的责任。不要见到 should 就统一翻成“本应该却没有”。'],
        ['完成形式不总表示遗憾','You should have called 常可批评过去没打电话；The parcel should have arrived by now 常表达应该已到的预期，是否实际到达尚待核实。先看上下文是否说明事实。'],
        ['与虚拟建议从句建立联系','I suggest that she (should) check it again 中的 should 属于建议类内容从句的结构选择；这里的 check 不随 she 加 -s。它与独立句中的日常建议可分开学习。']
      ],[
        ['should 后添加 to','You should to check the label.','You should check the label.','should 后直接接动词原形，不能照搬 ought to 的形式。'],
        ['完成结构误用 has','He should has finished by now.','He should have finished by now.','should 后用原形 have；完成结构再由 have 与过去分词 finished 组成。']
      ],[
        ['You should back up your notes regularly.','你应该定期备份笔记。','should 提出日常建议，back up 用原形。'],
        ['The bus should have reached the airport by now.','公交车现在应该已经到机场了。','这句可表达对已完成情况的预期，并不自行断定公交车没有到达。']
      ]),
    countable:detail(
      '可数性说明名词在某个具体词义和用法中能否按个体计数。它不是只靠中文意思或词尾就能确定的永久标签；同一个词可因表示物质、个体、份数或种类而改变用法。',
      ['可数单数与复数','不可数用法','单位数量表达','词义变化与用法转换'],[
        ['单数可数名词通常需要限定','普通单数可数名词常用 a、the、my、this 等限定。复数名词可泛指一类事物；不可数名词通常不直接与 a/an 或普通数词搭配。the 则可用于多种数和可数性。'],
        ['把单位变复数','advice、information、equipment 在常见义中不可数，计数可说 two pieces of advice。发生复数变化的是 piece 等单位，不是把 advice 直接改成 advices。'],
        ['同一名词可在不同义项间转换','chicken 可指鸡肉或一只鸡；coffee 常指饮品，two coffees 在点单语境中可指两份咖啡。转换有真实语义和语境依据，不能据此给任何不可数名词任意添加 a。'],
        ['检查数量词与主谓一致','many/few 常接复数可数名词，much/little 常接不可数名词；不可数名词作主语通常配单数谓语。数量单位短语作主语时还要看单位中心词，如 two bottles of water are…。']
      ],[
        ['把 advice 直接计数','She gave me two advices.','She gave me two pieces of advice.','advice 在表示建议的常见用法中不可数，使用 pieces 等单位来表达条数。'],
        ['把 furniture 当普通复数','The furniture are new.','The furniture is new.','furniture 是不可数集合称谓，并非由形式隐含复数就配 are；这句使用单数谓语 is。']
      ],[
        ['There is little information about the route.','关于这条路线的信息很少。','information 为不可数用法，与 little 和 is 搭配。'],
        ['We ordered two coffees and a sandwich.','我们点了两份咖啡和一个三明治。','coffees 在点单语境中表示两份饮品，是有语境支持的可数用法。']
      ]),
    articles:detail(
      '冠词位于名词短语中，帮助建立泛指、特指等指称关系。选择 a/an、the 或零冠词时，要结合名词的可数性、单复数以及听话人能否识别所指对象。',
      ['a 与 an','the 与可识别对象','零冠词与泛指','专有名词与固定搭配'],[
        ['a/an 根据紧接词的发音','a university 的 university 以辅音音素开头，an hour 的 hour 以元音音素开头。名词前有形容词时，也看紧接冠词的词，如 an unusual idea。'],
        ['特指不只来自前面提到过','前文提到、共同知识、现场语境或后置限定，都可能让对象可识别，从而使用 the。the 可与单数、复数、不可数名词搭配，不只用于单数。'],
        ['泛指要与名词数配合','A tiger is a wild animal、Tigers are wild animals 都可在合适语境中泛指。复数可数名词及不可数名词泛指常用零冠词，如 Music helps me relax。普通单数可数名词通常不能直接裸用。'],
        ['固定表达与限定词不能机械叠加','go to school 与 go to the school 的指向可能不同；at night、in the morning 按搭配学习。the、my、this 通常不能直接叠加到同一名词前，不能写 the my book。']
      ],[
        ['仅按首字母选择 a/an','She studies at an university.','She studies at a university.','university 的开头发音为辅音音素 /j/，因此用 a，不按字母 u 单独判断。'],
        ['单数可数名词缺少限定','He is engineer.','He is an engineer.','engineer 在此是单数可数普通名词，介绍职业身份需要相应限定；按起始元音音素使用 an。']
      ],[
        ['I found a key. The key was under the sofa.','我找到了一把钥匙。那把钥匙在沙发下面。','先用 a 引入某把钥匙，再用 the 指向已经建立的对象。'],
        ['The water in this bottle is warm.','这只瓶子里的水是温的。','water 虽然不可数，但由 in this bottle 限定为可识别对象，可以使用 the。']
      ]),
    possession:detail(
      '名词所有格及相关结构表达所属、人物关系、来源等关联，不只限于实际拥有。选择 ’s、of 或名词前置修饰，要看中心词、语义关系和自然搭配。',
      ['单数与复数所有格','共同与分别所有','of 结构','双重所有格与名词修饰'],[
        ['根据原名词的形式添加所有格','单数名词一般加 ’s；规则 -s 复数一般只加 ’，如 the students’ room；不规则复数仍加 ’s，如 the children’s room。不要把所有格标记误当复数词尾。'],
        ['共有与各有要说清楚','Tom and Maya’s office 常表达两人共用的办公室；Tom’s and Maya’s offices 表达各自的办公室。标记位置还要和中心名词的数以及真实关系协调，不能脱离语境判错。'],
        ['of 与 ’s 都不只表示财产','the roof of the house 表部件关系；today’s meeting 表时间关联；a friend of my brother’s 常表示我兄弟的某一位朋友。of 后出现所有格在这种双重所有格中有自己的意义。'],
        ['名词修饰与所有格不是一回事','a school bus 用 school 说明类别或用途；a student’s bag 说明某位学生相关的包。前置名词常用单数但存在 sports 等固定形式，不能一律加所有格或一律改单数。']
      ],[
        ['单数人物所属缺少标记','My sister bicycle is outside.','My sister’s bicycle is outside.','表达“我姐姐的自行车”需要在 sister 后标出所有格关系，不能把人物词组直接无标记拼在名词前。'],
        ['不规则复数误套仅加撇号','The childrens’ books are here.','The children’s books are here.','children 本身已是不规则复数，并不以复数 -s 结尾；所有格用 children’s。']
      ],[
        ['The students’ projects are on display.','学生们的项目正在展出。','students 是以 -s 结尾的规则复数，所有格在词尾加撇号。'],
        ['A friend of my aunt’s designed this garden.','我姨妈的一位朋友设计了这座花园。','a friend of my aunt’s 是双重所有格，常表示朋友中的一位。']
      ]),
    pronouns:detail(
      '代词可以指代人物、事物或内容，也可用于疑问、不定指和从句连接。既要判断形式在句中的作用，也要确保读者能清楚识别它指向谁或什么。',
      ['人称与物主形式','反身与相互代词','指示与不定代词','连接与关系代词','指代衔接'],[
        ['先看句法位置，再选形式','I/he/we 等通常作主语，me/him/us 等作动词或介词宾语。my 后需有被限定的名词，mine 可独立替代相应物主名词短语。反身代词用于主语自身或强调，不是普通主格的正式替代。'],
        ['不定指要核对范围和数','both/either/neither 常关联两者；all/none 等指向的范围由语境确定。someone、nothing 等复合不定代词通常配单数谓语，形容词后置，如 something useful。单个人性别未知时可用单数 they。'],
        ['限定与代替分开分析','This book 中 this 限定 book；This is useful 中 This 独立指物。传统教学把某些形式归为代词，按名词前功能又可称限定词，两种分类角度有交叉。'],
        ['避免替代对象不清','it 常指同一具体对象，one/ones 可代替同类可数对象，that/those 可在比较中替代相关名词。Tom told Jack that he was late 可能指代不明，需要语境或改写明确，而不是只检查人称形式。']
      ],[
        ['介词后误用主格','The message is for she.','The message is for her.','介词 for 后使用宾格 her，不使用主格 she。'],
        ['把独立物主形式放到名词前','This is mine notebook.','This is my notebook.','名词 notebook 前用物主限定形式 my；mine 可独立使用，如 This notebook is mine。']
      ],[
        ['Someone has left their umbrella by the door.','有人把伞落在门边了。','someone 配 has；their 可作为性别未知的单个人的指代形式，不必强制改为 his。'],
        ['I lost my pen, so I bought a new one.','我把笔弄丢了，所以又买了一支。','one 代替同类可数名词 pen，并不指丢失的同一支笔。']
      ]),
    quantifiers:detail(
      '数量词限定事物的数量、程度或范围。选择时既要核对名词的可数性，也要区分“有一些”与“几乎没有”等语气，不能只把不同形式视为同义替换。',
      ['many 与 much','few/a few 与 little/a little','some 与 any','all、both、each 等范围'],[
        ['数量形式与名词类型对应','many、(a) few 常接复数可数名词；much、(a) little 常接不可数名词；a lot of、plenty of 可接两类。单位表达中的数要看中心单位，如 several bottles of water。'],
        ['a 的有无改变信息重点','a few/a little 表有一些，常偏肯定；few/little 表很少、几乎不够，常偏否定。两种形式不只是正式程度不同，选词应与真实数量和说话人的评价一致。'],
        ['some/any 不只由问号决定','some 常见于肯定陈述，也用于期待肯定回答的邀请或请求，如 Would you like some tea?。any 可见于疑问、否定，也可在肯定句中表示任一，如 Choose any seat。'],
        ['名词短语的限定方式影响结构','many books 与 many of the books 结构不同，of 后常指向一个已经限定的范围。each、every 等与谓语数的关系还需结合整个主语中心；不要只看最近的名词。']
      ],[
        ['much 与可数复数直接搭配','There are much chairs here.','There are many chairs here.','chairs 为可数复数，表达许多用 many；much 通常限定不可数名词。'],
        ['用 few 限定不可数名词','We have a few information.','We have a little information.','information 为不可数用法，少量使用 a little；也可用 a few pieces of information 表示几条。']
      ],[
        ['We still have a few minutes before the train leaves.','火车开动前，我们还有几分钟。','a few 表示仍有一些时间；minutes 是可数复数。'],
        ['Would you like some more water?','你想再喝点水吗？','邀请通常期待对方接受，可以在疑问句中使用 some；water 是不可数名词。']
      ]),
    adjadv:detail(
      '形容词常描述名词或通过系动词说明状态；副词常修饰动作、形容词、副词或整句。选择词形要看实际修饰关系和句型，不能仅凭中文含义或 -ly 词尾。',
      ['定语、表语与宾补','方式与程度副词','同形词','-ly 词的例外'],[
        ['描述人或物时看形容词位置','a careful driver 中 careful 作定语；The driver seems careful 中作表语；We found him careful 中作宾补。表语和宾补是句子成分名称，careful 的词性仍是形容词。'],
        ['描述动作方式时通常用副词','She drives carefully 中 carefully 说明开车的方式；very carefully 中 very 再修饰副词。方式副词通常放在动词或宾语之后，不随意隔开动词和较短宾语。'],
        ['系动词后不因出现动词就用副词','The soup smells good 中 smells 是系动词，good 描述汤。He smelled the soup carefully 中 smelled 表闻的动作，carefully 描述动作方式。'],
        ['同形和词尾例外需要结合用法','fast、hard、early 可既作形容词也作副词；friendly、lovely 通常是形容词。hardly 常指几乎不，不能把它当作 hard 的普通方式副词形式。']
      ],[
        ['把副词误作系动词后的状态表语','The plan sounds reasonably.','The plan sounds reasonable.','sounds 在此为系动词，后面用形容词 reasonable 说明 plan 的性质；reasonably 不能单独作这个表语。'],
        ['动作方式误用形容词','She answered the question careful.','She answered the question carefully.','要说明 answered 这个动作的方式，通常使用副词 carefully，而不是形容词 careful。']
      ],[
        ['The instructions are clear, and the guide speaks clearly.','说明很清楚，导游也讲得很清楚。','clear 通过 are 描述说明的性质；clearly 修饰 speaks 的方式。'],
        ['The early train arrived early.','早班火车早早地到了。','第一个 early 修饰 train，是形容词；第二个 early 修饰 arrived，是副词，词形相同。']
      ]),
    'ing-ed':detail(
      '许多由分词发展来的形容词用 -ing 描述引起某种感受的特征，用 -ed 描述感受或受影响的状态。区别依据是语义关系，不是“人一律用 -ed，物一律用 -ing”。',
      ['引发感受的特征','感受与受影响状态','形容词与动词结构','常见介词搭配'],[
        ['先问它在描述什么关系','an exciting story 指故事令人兴奋；an excited reader 指读者感到兴奋。人也可以是 boring 的，因为人的行为可能让别人无聊；动物也可能感到 frightened。'],
        ['同一对象可以有不同描述','She is interesting 说她有趣、能引起兴趣；She is interested 说她对某事感兴趣。两句都可能正确，不能不看原意就把其中一个判错。'],
        ['留意形容词的补充成分','interested in、bored with、pleased with 等常见搭配一起学习。补充对象帮助明确是谁对什么产生感受，不能随意按中文“对”统一换成同一介词。'],
        ['相同词形不等于相同句法作用','The lecture is interesting 中 interesting 作表语形容词；The speaker is explaining 中 explaining 参与进行时谓语。be + -ing 的外形不能自动决定分析。']
      ],[
        ['interested 的介词搭配错误','She is interested on astronomy.','She is interested in astronomy.','表达对某领域感兴趣，常用 interested in，而不是按中文“在某方面”随意选 on。'],
        ['感受形容词缺少相应词形','They were very interest in the exhibition.','They were very interested in the exhibition.','这里要用描述感受的形容词 interested 作表语；interest 的名词或动词原形不能直接放在 very 后承担这个任务。']
      ],[
        ['The documentary was fascinating, and we were fascinated by it.','这部纪录片很吸引人，我们都被它吸引了。','fascinating 描述影片的吸引力；fascinated 描述观众受影响的状态。'],
        ['He is an interesting teacher who is interested in history.','他是一位有趣而且对历史感兴趣的老师。','同一个人既可用 interesting 描述其特征，也可用 interested 描述其感受。']
      ]),
    comparison:detail(
      '比较结构表达对象在性质、数量或程度上的关系。除了比较级词形，还要核对比较的是同类对象、比较范围是否包括本人，以及省略后是否保留原意。',
      ['原级同级比较','比较级与 than','最高级与范围','关联比较与对象替代'],[
        ['构成形式避免重复标记','短词常用 -er/-est，较长词常用 more/most；good/well → better → best 等要单记。通常不把 more 与 taller 叠加，也不用 very 直接修饰普通比较级；可用 much、far、a little 等。'],
        ['同级比较用原级','as…as… 中间通常放原级，如 as carefully as。名词数量的 many/much 要与可数性一致；as good a teacher as 这种结构里，a 的位置也要一起掌握。'],
        ['最高级必须有清楚范围','one of the best books 中 books 用复数，整体中心是 one。已有 my 等限定词时不再添加 the，如 my best friend。副词最高级前 the 有时可以省略，不按形容词名词短语一刀切。'],
        ['比较对象保持同类','The weather here is warmer than that in my hometown 用 that 替代 weather。和同一组其他成员比较时常需 other 排除本人，如 taller than any other student in the class；倍数比较优先用 twice as long as 等避免总量与增量歧义。']
      ],[
        ['重复使用比较级标记','This route is more shorter.','This route is shorter.','shorter 已有 -er 比较标记，不再叠加 more。若强调程度可说 much shorter。'],
        ['one of 后误用单数名词','This is one of the most useful tool.','This is one of the most useful tools.','one of 表示在一组对象中取其一，of 后的可数名词使用复数 tools。']
      ],[
        ['The more carefully you plan, the fewer mistakes you make.','计划得越仔细，犯的错误就越少。','carefully 修饰 plan；fewer 限定可数复数 mistakes，两个 the 标示关联比较。'],
        ['This bridge is twice as long as the old one.','这座桥的长度是旧桥的两倍。','twice as long as 明确比较总长度，one 替代同类名词 bridge。']
      ]),
    'degree-order':detail(
      '副词的位置由修饰对象、句型和信息重点决定。频率、方式、时间、地点和程度副词各有常见位置；这些是使用倾向，不能把所有副词固定放到同一个地方。',
      ['频率副词','方式、地点、时间','程度副词','enough、too 与比较级修饰'],[
        ['频率副词先找 be 与助动词','often、usually 等常在普通实义动词前、be 后或第一个助动词后，如 often reads、is usually ready、has often helped。强调和不同副词可能改变位置，不把口诀当作绝对禁令。'],
        ['方式副词不要随意拆开短宾语','She checked the answer carefully 中 carefully 说明检查的方式。多个句末状语常按方式—地点—时间组织，但为了衔接和强调可调整，并非只有一个合法顺序。'],
        ['程度副词看修饰对象与习惯搭配','very useful、extremely slowly 中程度词在被修饰词前；enough 修饰形容词、副词时通常后置，如 warm enough。enough 限定名词时则前置，如 enough time。'],
        ['比较级和原级使用不同修饰语','much better、a little faster 是自然组合；very 通常修饰原级，不直接套在普通比较级前。too…to… 表示超过合适程度，要结合整体结构理解其结果。']
      ],[
        ['enough 修饰形容词时位置错误','The room is enough warm.','The room is warm enough.','enough 说明形容词 warm 的程度时通常放在后面；与 enough water 等名词结构的位置不同。'],
        ['very 直接修饰普通比较级','This version is very better.','This version is much better.','better 是比较级，表示程度差可用 much；通常不能用 very 直接修饰。']
      ],[
        ['She has always checked the address carefully.','她一向都仔细核对地址。','always 位于第一个助动词 has 后；carefully 在宾语后说明动作方式。'],
        ['We have enough time to make the explanation clear enough.','我们有足够的时间，把解释说得足够清楚。','第一个 enough 在名词 time 前；第二个 enough 修饰形容词 clear，放在其后。']
      ]),
    prepositions:detail(
      '介词与其名词性宾语组成介词短语，表示时间、地点、方向、方式或逻辑关系。短语整体可作定语、状语或表语，具体作用取决于它在上层句子中的关系。',
      ['时间、地点与方向','方式、工具与对象','介词宾语与短语功能','介词、连词、副词的区别'],[
        ['按实际关系选择介词','at six、on Monday、in June 是常见时间搭配；into 表进入内部，through 常表从内部穿过。by bus 表方式，with a knife 表工具；不要按中文“在”“用”统一选择一个介词。'],
        ['宾语使用名词性成分','介词后可接名词、宾格代词、动名词等，如 after class、with her、by practising。look forward to 中的 to 是介词，后接 doing；want to 中的 to 则引出不定式原形。'],
        ['根据后续结构区别相同词形','after the lesson 中 after 是介词；after the lesson ended 中它引入分句，按传统教学分析为连词。Come in 中 in 可单独作副词，in the room 中则带宾语构成介词短语。'],
        ['找出短语真正修饰的对象','the girl in blue 中介词短语修饰名词；She waited in the hall 中说明动作地点。带望远镜看男孩之类表达可能存在修饰歧义，应通过改写说明是工具还是人物特征。']
      ],[
        ['介词后直接接普通动词原形','We look forward to meet you.','We look forward to meeting you.','look forward to 的 to 是介词，后面的动词使用具有名词性作用的 -ing 形式。'],
        ['because of 后误接完整分句','We stayed because of it was raining.','We stayed because it was raining.','because 引导原因分句；because of 通常接名词性成分，可说 because of the rain。']
      ],[
        ['The folder on the desk contains the answers.','桌上的文件夹里装着答案。','on the desk 在名词短语内部修饰 folder，不能把 desk 当作主语中心。'],
        ['She solved the problem by drawing a diagram.','她通过画示意图解决了问题。','by 后接动名词短语 drawing a diagram，整体说明解决问题的方式。']
      ]),
    phrasal:detail(
      '短语动词由动词与小品词或介词等组合而成，整体表达一个用法。它不等于所有多词谓语；宾语能否插入、代词放哪里，都要按具体组合判断。',
      ['可分的动词—小品词结构','不可分的介词型搭配','无直接宾语用法','三词组合'],[
        ['整体意义与字面义一起辨认','give up 可表示放弃，put off 可表示推迟，look after 表照料；含义不能总逐词拼接。同一组合也可能有字面义和引申义，需要例句提供具体场景。'],
        ['可分结构中的代词通常放中间','turn off the light 与 turn the light off 都可使用普通名词宾语；宾语是 it 时通常说 turn it off。选择位置不能仅凭中文语序。'],
        ['不可分组合不拆开','look after the child、look after him 中，介词 after 与宾语保持关系，不能把 him 插到 look 与 after 之间。put up with 这类更长组合也按整体搭配掌握。'],
        ['区分多词谓语与短语动词','has been working 是由助动词组织的谓语动词组，不是本卡片意义上的短语动词。work out 则可能组成“算出、解决”等词汇性组合，分析角度不同。']
      ],[
        ['可分组合的代词位置不当','Please turn off it.','Please turn it off.','turn off 为可分结构，这里的代词宾语 it 通常放在动词与小品词之间。'],
        ['把不可分结构拆开','Could you look the baby after?','Could you look after the baby?','look after 的介词型搭配不能照搬 turn the light off 的分离方式。']
      ],[
        ['Please write the number down before you forget it.','趁你还没忘，请把这个号码记下来。','write down 在这里可分，普通名词宾语 the number 放在中间。'],
        ['We had to put up with the noise all night.','我们不得不整夜忍受噪声。','put up with 作为整体表示忍受，后接宾语 the noise。']
      ]),
    'noun-types':detail(
      '名词表示人、事物、地点、物质或抽象概念。专有与普通、个体与集合、具体与抽象、可数与不可数是不同分类角度，同一个名词可以同时具有其中多种特征。',
      ['专有与普通名词','个体与集合名词','物质与抽象名词','分类角度与可数性'],[
        ['专有名词给特定对象命名','Nora、London 是特定人物或地点的名称，通常按书写习惯大写；teacher、city 表示对象所属类别，是普通名词。专有名称前是否用 the 还要看名称惯例。'],
        ['集合名称与语法数分开看','team、family 等用一个名词表示一组成员。作主语时可按整体或成员理解，英美用法也有差异；不能因为“里面有很多人”就一律配复数谓语。'],
        ['抽象、物质并不自动等于永远不可数','freedom、gold 常为不可数用法，但名词可数性仍受具体词义和搭配影响。experience 表经历时可数，表经验时常不可数；分类名称不能取代实际用法判断。'],
        ['名词类别不同于句子成分','A student asked a question 中 student 与 question 都是名词，却分别在短语中构成主语和宾语。判断“是什么词类”与“在句中做什么”要分两步。']
      ],[
        ['专有城市名称未按惯例大写','We visited london last spring.','We visited London last spring.','London 是城市专有名称，英语书写中首字母大写。'],
        ['物质名词的常见用法误配复数谓语','Gold are expensive.','Gold is expensive.','gold 在这里泛指黄金，是不可数物质名词，用单数谓语 is；不能按“有很多黄金”改用 are。']
      ],[
        ['Experience is valuable, and this journey was a valuable experience.','经验很宝贵，这次旅行也是一次宝贵的经历。','第一个 experience 表经验，为不可数用法；第二个表示一次经历，可以与 a 搭配。'],
        ['The library in Oxford has a large collection of maps.','牛津的那座图书馆收藏了大量地图。','Oxford 是专有名词；library、collection、maps 为普通名词，各自承担不同句子任务。']
      ]),
    'noun-plurals':detail(
      '可数名词通常用单数和复数区别一个与多个个体。复数变化包括规则词尾、不规则变化和单复数同形；不可数用法不能只为了表达“很多”就直接加 -s。',
      ['-s 与 -es','辅音字母 + y','不规则与同形复数','复合名词与单位表达'],[
        ['规则变化结合词尾条件','大多数名词加 -s；以 s、x、ch、sh 等结尾的常加 -es，如 boxes、watches。辅音字母加 y 通常把 y 改为 ies，如 cities；元音字母加 y 则常直接加 s，如 boys。'],
        ['不规则形式需要整体记忆','child → children、man → men、tooth → teeth 等不靠普通 -s 形成。sheep 等单复数同形，数量常由限定词和谓语体现，不能凭词尾无 s 就断定单数。'],
        ['复合名词通常变化中心词','mother-in-law → mothers-in-law，passer-by → passers-by；部分组合变化词尾，如 grown-ups。不是所有组成词都加复数，也不是所有复合词都只改最后一个词。'],
        ['单位词承担计数任务','two pieces of equipment 中 pieces 为复数，equipment 保持不可数形式。a five-year-old child 这样的前置复合修饰语中 year 通常用单数，与 five years old 的表语结构不同。']
      ],[
        ['不规则复数仍套用 -s','The childs are waiting outside.','The children are waiting outside.','child 的复数是 children，不是 childs；谓语 are 与复数主语配合。'],
        ['辅音字母加 y 未改变词尾','These citys are connected by rail.','These cities are connected by rail.','city 以辅音字母 t 加 y 结尾，复数通常改 y 为 ies。']
      ],[
        ['Two sheep are standing beside the fence.','两只羊正站在围栏旁。','sheep 单复数同形；two 和 are 明确这里为复数。'],
        ['The mothers-in-law arrived together.','几位婆婆或岳母一起到了。','复合名词 mother-in-law 的中心名词为 mother，复数变化为 mothers-in-law。']
      ]),
    numerals:detail(
      '数词表示数量或顺序，包括基数词、序数词及相关分数、百分数等表达。数词可以限定名词，也可以在对象清楚时独立使用；数字形式不能单独决定整个主语的谓语数。',
      ['基数词与序数词','具体数量与约数','分数、百分数与倍数','年龄、编号与复合修饰语'],[
        ['基数与序数对应不同问题','three 回答多少，third 回答第几。序数词修饰普通名词常有 the 或其他限定词，如 the third chapter、my first visit；有 my 时不再叠加 the。复合数通常只把末位改为序数形式。'],
        ['hundred 等区分明确数量与泛指','two hundred students 表明确数量，hundred 不加复数 -s，也不加 of；hundreds of students 表数百名，使用 -s 和 of。thousand、million 的相关用法也要按结构区分。'],
        ['分数和百分数看所指名词','two thirds of the cake 与 two thirds of the students 指向不同对象，谓语须结合所指内容判断。倍数表达最好明确总量，如 twice as long as，避免“增加几倍”的中文歧义。'],
        ['单位名词在不同结构中形式不同','a ten-minute walk 是前置复合修饰，minute 通常为单数；The walk takes ten minutes 则是数量名词短语，使用复数。Room 203 等编号常用基数词，不等同于序数排名。']
      ],[
        ['具体数量后的 hundred 错加 s','There are two hundreds students.','There are two hundred students.','two 表明具体数量，hundred 在这种结构中不用复数 -s，也不直接添加 of。'],
        ['前置复合修饰语单位名词误用复数','We took a ten-minutes break.','We took a ten-minute break.','ten-minute 作为整体前置修饰 break，单位 minute 通常用单数并以连字符连接。']
      ],[
        ['The twenty-first lesson takes about thirty minutes.','第二十一课大约需要三十分钟。','twenty-first 是复合序数词，只变末位；thirty 为基数词，minutes 用复数。'],
        ['Hundreds of visitors attended the two-day exhibition.','数百名参观者参加了为期两天的展览。','hundreds of 为概数；two-day 是名词前的复合修饰语，day 用单数。']
      ]),
    interjections:detail(
      '感叹词直接表达惊讶、喜悦、疼痛或领悟等情绪，通常不承担后面句子的主语、谓语或宾语。它是一种词类，不能与 what/how 引导的感叹句这种句子类型画等号。',
      ['惊讶与赞叹','疼痛与遗憾','独立表达与句首表达','感叹词和感叹句'],[
        ['情绪由语境与语调共同确定','oh 可表示惊讶、理解或失望；wow 常表示赞叹；ouch 常表示疼痛。不要把一个感叹词固定等同于一种中文情绪，也不把所有情绪表达都归为感叹词。'],
        ['独立成句或用标点分隔','Wow! 可以单独作为情绪反应，也可说 Wow, the view is wonderful!。后面若继续完整陈述，该陈述仍须有自己的主谓结构，感叹词不能代替系动词。'],
        ['what/how 感叹句按其结构分析','What a useful map! 中 what 引出名词性部分；How useful this map is! 中 how 引出形容词。它们表达感叹，但不能因此把整句或所有开头词都按 oh 的独立词类处理。'],
        ['语体需要与场景协调','感叹词常见于对话、故事和直接反应。正式说明文字中应按表达目的使用，少用无信息的重复感叹号；这属于语体选择，不是把所有感叹词判为不正式或错误。']
      ],[
        ['用感叹词替代谓语','I wow very happy.','Wow, I am very happy.','Wow 表情绪并独立于后面主干；I 与 happy 之间仍需要系动词 am。'],
        ['what 感叹结构的单数名词遗漏','What a beautiful!','What a beautiful view!','what a beautiful 后需要单数可数名词中心，如 view；若直接感叹程度，可用 How beautiful!。']
      ],[
        ['Oh, now I understand the difference.','哦，我现在明白这个区别了。','Oh 表示领悟，是独立情绪成分；后面的 I understand 仍有完整主谓。'],
        ['Wow! What a detailed map you have made!','哇！你做了一张多么详细的地图呀！','Wow 是感叹词；What a detailed map… 是感叹句，两种分类角度不同。']
      ]),
    'conjunction-types':detail(
      '连词连接词、短语或分句，建立并列或从属关系。判断分类时要看它实际连接的层级及后面结构，而不是只看相同中文译义。',
      ['并列连词','从属连词','关联连词','连接性副词的区别'],[
        ['并列可以发生在多个层级','and、but、or 等可连接地位相当的成分：books and pens 连接词，worked and rested 连接谓语，I stayed, but she left 连接分句。功能相称比表面词尾相同更重要。'],
        ['从属连词引入有依附关系的分句','because、although、if 等通常引入原因、让步或条件从句；that、whether 等也可引出内容从句。一个复杂句可包含多层连接，不是只允许出现一个连词。'],
        ['成对结构要核对连接位置','both…and…、either…or…、not only…but also… 的对应部分应处于同一层级。连接主语时还需学习主谓一致；引出倒装分句时又有特殊语序，不能混成同一条规则。'],
        ['连接性副词不能照搬 but 的标点','however、therefore 可表达句间逻辑，但通常不能仅凭逗号连接两个独立分句。because of 后接名词性成分，because 后接从句，也体现不同词类的结构要求。']
      ],[
        ['because 后误接无谓语的名词短语','We left because the heavy rain.','We left because of the heavy rain.','要保留名词短语 the heavy rain，使用 because of；若用 because，需补成分句，如 because it was raining heavily。'],
        ['把 therefore 当普通并列连词','The path was blocked, therefore we turned back.','The path was blocked; therefore, we turned back.','therefore 是连接性副词；在这种正式书面结构中用分号建立句界，而不是只用逗号粘连。']
      ],[
        ['Either ask the guide or check the map.','要么问导游，要么查看地图。','either…or… 连接两个功能对应的动词短语，共同构成选择建议。'],
        ['Although the instructions were short, they were clear.','虽然说明很短，但很清楚。','although 引导让步从句；主句不再为同一直接对应关系重复添加 but。']
      ]),
    emphasis:detail(
      '强调通过特定结构突出主语、宾语或状语等信息，也可用 do/does/did 加强谓语。识别时应把突出成分还原到普通句中，而不是只凭句首出现 it 就判断为强调句。',
      ['It is/was…that/who…','疑问与嵌入形式','not until 强调','do/does/did 强调谓语'],[
        ['强调框架应能还原原陈述','It was Nora who sent the message 对应 Nora sent the message；It was yesterday that she called 对应 She called yesterday。强调人可用 who 或 that，其他常用 that。谓语强调通常另用 do 等方式。'],
        ['强调疑问也受从句语序约束','When was it that she called? 是独立疑问；Do you remember when it was that she called? 把它嵌入从句后恢复 when it was 的陈述关系，不保留 was it 的倒装。'],
        ['not until 框架后不重复倒装','It was not until noon that we left 的 that 后使用肯定陈述语序。若改成 Not until noon did we leave，才是另一种否定状语前置的部分倒装结构。'],
        ['do 强调后中心动词用原形','She does understand、They did help 中 does/did 负责相应形式，后面的动词保持原形。It is clear that he left 中 clear 为表语、that 从句是真正主语，不能按强调框架简单删去。']
      ],[
        ['强调框架后重复使用疑问倒装','It was yesterday that did she arrive.','It was yesterday that she arrived.','陈述型强调句的 that 后使用正常陈述语序。若要提出疑问，应按整个强调问句的结构组织，不能在此处添加 did she。'],
        ['does 后重复 -s','She does understands the rule.','She does understand the rule.','does 已标示第三人称单数并承担强调，中心动词 understand 需要原形。']
      ],[
        ['It was the final example that helped me understand.','正是最后那个例子帮助我理解了。','突出主语 the final example；还原后为 The final example helped me understand。'],
        ['It was not until the lesson ended that he asked the question.','直到课结束，他才提出那个问题。','强调 not until 时间状语；that 后是 he asked 的肯定陈述语序。']
      ])
  };
  window.LESSON_DETAILS={...(window.LESSON_DETAILS||{}),...details};
})();
