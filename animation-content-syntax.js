/* Short, original visual stories for sentence structure and writing checks. */
(() => {
  const t=(id,text,role='',tone='neutral',status)=>({id,text,role,tone,...(status?{status}:{})});
  const lane=(id,label,tokens)=>({id,label,tokens});
  const s=(caption,lanes,translation,extra={})=>({caption,lanes,...(translation?{translation}:{}),...extra});
  const one=(caption,label,tokens,translation,extra)=>s(caption,[lane('sentence',label,tokens)],translation,extra);
  const lessons=[];
  const add=(key,title,steps)=>lessons.push({key,title,steps});

  add('topic:sentence-structure','把两个完整意思连起来',[
    one('先看一句完整的话：它已经说清楚“谁怎么样”。','一个完整意思',[t('i','I','谁','subject'),t('am','am','连接状态','verb'),t('tired','tired.','怎么样','modifier')],'我累了。'),
    s('再准备另一句完整的话；两句现在各说各的。',[lane('sentence','第一句',[t('i','I','谁','subject'),t('am','am','连接状态','verb'),t('tired','tired.','怎么样','modifier')]),lane('second','第二句',[t('i2','I','谁','subject'),t('want','want to rest.','想做什么','verb')])],'我累了。我想休息。'),
    one('用 and 把两件事并排接起来，两边都保留完整意思。','并排连接',[t('i','I','谁','subject'),t('am','am','连接状态','verb'),t('tired','tired,','怎么样','modifier'),t('join','and','连接两件事','linker','focus'),t('i2','I','谁','subject'),t('want','want to rest.','想做什么','verb')],'我累了，而且想休息。'),
    one('若要说明原因，用 because；后面解释为什么想休息。','主句加原因',[t('i2','I','谁','subject'),t('want','want to rest','主要事情','verb'),t('join','because','引出原因','linker','focus'),t('i','I','谁','subject'),t('am','am','连接状态','verb'),t('tired','tired.','原因','modifier')],'我想休息，因为我累了。')
  ]);

  add('topic:fragments','给“因为……”接上主要事情',[
    one('只写“因为我累了”，普通完整陈述还缺少主要事情。','错句：普通陈述残缺',[t('because','Because','因为','linker','error'),t('i','I','谁','subject'),t('was','was tired.','原因','verb')],'因为我累了。'),
    s('先把原因放在一边，再准备能独立说清的主要事情。',[lane('reason','原因词块（待组合）',[t('because','because','因为','linker'),t('i','I','谁','subject'),t('was','was tired','原因','verb')]),lane('sentence','主要事情',[t('i2','I','谁','subject'),t('stayed','stayed home.','做了什么','verb')])],'我待在家里。'),
    one('把原因接到主要事情后面，整句话就说完整了。','完整陈述',[t('i2','I','谁','subject'),t('stayed','stayed home','主要事情','verb'),t('because','because','连接原因','linker','focus'),t('i','I','谁','subject'),t('was','was tired.','原因','verb')],'我因为累了而待在家里。'),
    one('原因也能放前面，用逗号隔开；后面仍要有主要事情。','原因放前面',[t('because','Because','引出原因','linker'),t('i','I','谁','subject'),t('was','was tired,','原因','verb'),t('i2','I','谁','subject'),t('stayed','stayed home.','主要事情','verb')],'因为累了，我待在家里。')
  ]);

  add('topic:runons','两个完整句子需要连接办法',[
    one('这里只用逗号粘住两个完整句子，普通正式写作要改。','错句：逗号拼接',[t('rain','It rained,','第一件事','verb','error'),t('we','we stayed home.','第二件事','verb')],'下雨了，我们待在家里。'),
    s('把两个意思分开看：每一边都能独立说清楚。',[lane('sentence','第一句',[t('rain','It rained.','完整意思','verb')]),lane('second','第二句',[t('we','We stayed home.','完整意思','verb')])],'下雨了。我们待在家里。'),
    one('用句号隔开，是最直接、清楚的写法。','分成两句',[t('rain','It rained.','第一句','verb'),t('we','We stayed home.','第二句','verb','focus')],'下雨了。我们待在家里。'),
    one('若要说前因后果，用 so 说明“所以”，而不是只留逗号。','说明因果',[t('rain','It rained,','原因','verb'),t('so','so','所以','linker','focus'),t('we','we stayed home.','结果','verb')],'下雨了，所以我们待在家里。')
  ]);

  add('topic:article-errors','一个老师前面为什么要有 a',[
    one('teacher 在这里说“一名老师”；单数普通可数名词少了限定。','错句：漏了 a',[t('she','She','谁','subject'),t('is','is','连接身份','verb'),t('teacher','teacher.','缺少前面的小词','object','error')],'想表达：她是一名老师。'),
    s('先把职业名词单独拿出来，确认说的是一个人。',[lane('sentence','句子词块（待补）',[t('she','She','谁','subject'),t('is','is','连接身份','verb')]),lane('noun','一名老师',[t('a','a','一个','modifier','focus'),t('teacher','teacher','职业','object')])]),
    one('把 a teacher 整组接回去，就清楚地说出她的身份。','改正确',[t('she','She','谁','subject'),t('is','is','连接身份','verb'),t('a','a','一名','modifier'),t('teacher','teacher.','职业','object')],'她是一名老师。'),
    one('换成 apple，开头是元音音素，所以“一个”要用 an。','再看发音',[t('i','I','谁','subject'),t('have','have','有','verb'),t('an','an','一个','modifier','focus'),t('apple','apple.','苹果','object')],'我有一个苹果。')
  ]);

  add('topic:pronoun-errors','让读者看清 he 指谁',[
    one('Tom 和 Ben 都是男性，只写 He 时，读者可能不知道谁难过。','指代不清',[t('tom','Tom','第一个人','subject'),t('saw','saw','见到','verb'),t('ben','Ben.','第二个人','object'),t('he','He','可能指谁？','subject','error'),t('sad','was sad.','难过','verb')],'汤姆见到了本。他很难过。'),
    s('把 He 拿出来问一句：想说的是 Tom，还是 Ben？',[lane('people','两个候选人',[t('tom','Tom','可能的人','subject'),t('ben','Ben','可能的人','object')]),lane('sentence','等待说清的词块',[t('he','He','要确定指谁','subject','focus'),t('sad','was sad.','难过','verb')])]),
    one('如果想说 Tom 难过，直接写名字，就不用读者猜。','把名字说清',[t('tom','Tom','明确是谁','subject','focus'),t('sad','was sad','难过','verb'),t('when','when','在……时','linker'),t('he','he','这里指 Tom','subject'),t('saw','saw','见到','verb'),t('ben','Ben.','见到的人','object')],'汤姆看到本时很难过。')
  ]);

  add('topic:tense-errors','让动作形式跟上 yesterday',[
    one('yesterday 已经说明是昨天，动作却还写成现在的 go。','错句：时间不配合',[t('y','Yesterday','昨天','time'),t('i','I','谁','subject'),t('go','go','需要过去式','verb','error'),t('home','home.','去哪里','modifier')],'想表达：昨天我回家了。'),
    s('先定时间，再改动作；不要只看中文有没有“了”。',[lane('time','过去的时间',[t('y','Yesterday','过去','time','focus')]),lane('sentence','动作词块（待改）',[t('i','I','谁','subject'),t('go','go','改成过去式','verb','error'),t('home','home.','去哪里','modifier')])]),
    one('go 的过去式是 went；放回昨天的叙述，时间就配合了。','改正确',[t('y','Yesterday','过去','time'),t('i','I','谁','subject'),t('go','went','过去的动作','verb','focus'),t('home','home.','去哪里','modifier')],'昨天我回家了。'),
    one('接着说昨天见到 Tom，see 也用过去式 saw；整段时间保持清楚。','继续说昨天',[t('i','I','谁','subject'),t('see','saw','过去的动作','verb','focus'),t('tom','Tom','见到谁','object'),t('y','yesterday.','过去','time')],'昨天我见到了汤姆。')
  ]);

  add('topic:wordform-errors','enjoy 后面的动作换成 -ing',[
    one('enjoy 后面接动作时通常用 -ing，这里不能直接接 read。','错句：动作形式不对',[t('i','I','谁','subject'),t('enjoy','enjoy','喜欢','verb'),t('read','read.','形式要改','object','error')],'想表达：我喜欢读书。'),
    s('把后一个动作拿出来，按 enjoy 的搭配改成 reading。',[lane('sentence','句子词块（待补）',[t('i','I','谁','subject'),t('enjoy','enjoy','喜欢','verb')]),lane('form','要接上的动作',[t('read','reading','读书这件事','object','focus')])]),
    one('reading 整组表示喜欢做的事，接回 enjoy 后面。','改正确',[t('i','I','谁','subject'),t('enjoy','enjoy','喜欢','verb'),t('read','reading.','喜欢做的事','object')],'我喜欢读书。'),
    one('换成 want，搭配是 to read；后一个动作的形式要跟前词一起记。','比较另一种搭配',[t('i','I','谁','subject'),t('want','want','想要','verb'),t('to','to','搭配的小词','linker','focus'),t('read','read.','想做的事','object')],'我想读书。')
  ]);

  add('topic:agreement-errors','先找句子主要说哪一个东西',[
    one('主要说一个 box，却用了 are；不能被旁边的 apples 带跑。','错句：主谓不配合',[t('box','The box','主要说的东西','subject'),t('apples','of apples','说明箱子','modifier'),t('be','are','与一个箱子不配','verb','error'),t('big','big.','怎么样','modifier')],'想表达：那箱苹果很大。'),
    s('把附加说明暂放旁边，只看“一个箱子怎么样”。',[lane('sentence','先看主干词块',[t('box','The box','一个箱子','subject','focus'),t('be','are','需要改','verb','error'),t('big','big.','怎么样','modifier')]),lane('extra','附加说明',[t('apples','of apples','箱子里是什么','modifier')])]),
    one('说一个箱子，用 is；再把 of apples 接回原来的位置。','改正确',[t('box','The box','一个箱子','subject'),t('apples','of apples','补充说明','modifier'),t('be','is','配合单数','verb','focus'),t('big','big.','怎么样','modifier')],'那箱苹果很大。'),
    one('真正换成多个箱子时，主语变 boxes，动词才跟着换成 are。','换成多个箱子',[t('box','The boxes','多个箱子','subject','focus'),t('apples','of apples','补充说明','modifier'),t('be','are','配合复数','verb','focus'),t('big','big.','怎么样','modifier')],'那些装苹果的箱子很大。')
  ]);

  add('topic:constituents','一组词可以一起做一个任务',[
    s('这三个词合起来只说一个包，先把它们看成一组。',[lane('phrase','一个名词短语',[t('the','The','哪一个','modifier'),t('red','red','什么颜色','modifier'),t('bag','bag','中心词','object')])]),
    one('把整组放在句首：句子主要说的东西，就是这整个红色的包。','整组说“谁／什么”',[t('phrase','The red bag','句子主要说的东西','subject','focus'),t('is','is','连接说明','verb'),t('mine','mine.','属于我','object')],'那个红色的包是我的。'),
    one('同一组词移到 want 后面，就表示想要的东西，不再作主语。','整组说“想要什么”',[t('i','I','谁','subject'),t('want','want','想要','verb'),t('phrase','the red bag.','想要的东西','object','focus')],'我想要那个红色的包。')
  ]);

  add('topic:basic-patterns','动词需要什么，就把什么接上',[
    one('fly 的动作本身就能说清，先看最短的“谁做什么”。','主语加动作',[t('birds','Birds','谁','subject'),t('fly','fly.','做什么','verb')],'鸟飞。'),
    one('like 还要说喜欢什么；把 apples 放到动作后面。','动作加对象',[t('i','I','谁','subject'),t('like','like','做什么','verb'),t('apples','apples.','喜欢什么','object','focus')],'我喜欢苹果。'),
    one('说“她很开心”时，用 is 把她和状态连起来。','说一个状态',[t('she','She','谁','subject'),t('is','is','连接状态','verb'),t('happy','happy.','怎么样','modifier','focus')],'她很开心。'),
    one('give 还可以接两份信息：给谁、给什么，要分别看清楚。','给谁和给什么',[t('she','She','谁','subject'),t('gave','gave','给了','verb'),t('me','me','给谁','object','focus'),t('book','a book.','给什么','object','focus')],'她给了我一本书。'),
    one('make 后的 happy 说明 me 的状态，和“给谁、给什么”的两份名词不同。','对象加状态说明',[t('she','She','谁','subject'),t('made','made','使得','verb'),t('me','me','动作对象','object'),t('happy','happy.','说明我的状态','modifier','focus')],'她让我很开心。')
  ]);

  add('topic:sentence-kinds','从说事情变成问问题',[
    one('先说一个情况：她在家；这是在告诉别人一件事。','说事情',[t('she','She','谁','subject'),t('is','is','连接情况','verb'),t('home','at home.','在哪里','modifier')],'她在家。'),
    s('想问她在不在家，先把 is 从原来的位置拿出来。',[lane('front','移到前面的词',[t('is','Is','帮忙提问','verb','focus')]),lane('sentence','其余词块（待组合）',[t('she','she','谁','subject'),t('home','at home','在哪里','modifier')])]),
    one('让 Is 排在 she 前面，并用问号结束，句子就变成问题。','问一个问题',[t('is','Is','提问','verb','focus'),t('she','she','谁','subject'),t('home','at home?','在哪里','modifier')],'她在家吗？'),
    one('想让对方做事时，可直接从动作开始，please 表示礼貌。','请人做事',[t('please','Please','礼貌请求','linker'),t('sit','sit down.','请对方做的事','verb','focus')],'请坐。')
  ]);

  add('topic:special-syntax','用 there be 介绍“有什么”',[
    one('这句话主要在说那只猫在哪里，先注意已经提到的猫。','先说猫在哪里',[t('cat','The cat','已谈到的猫','subject'),t('be','is','连接位置','verb'),t('bed','on the bed.','在哪里','modifier')],'那只猫在床上。'),
    s('如果第一次介绍床上有什么，先准备 there is，再引出一只猫。',[lane('intro','介绍新东西',[t('there','There','引出有什么','linker'),t('be','is','配合一只','verb')]),lane('sentence','待组合词块',[t('cat','a cat','第一次介绍','subject'),t('bed','on the bed.','在哪里','modifier')])]),
    one('把新介绍的东西放在 there is 后面，意思是“那里有”。','介绍有什么',[t('there','There','引出存在','linker'),t('be','is','配合一只','verb'),t('cat','a cat','新介绍的东西','subject','focus'),t('bed','on the bed.','在哪里','modifier')],'床上有一只猫。'),
    one('换成多只猫，cat 变成 cats，is 也跟着变成 are。','介绍多个东西',[t('there','There','引出存在','linker'),t('be','are','配合多只','verb','focus'),t('cat','cats','多只猫','subject','focus'),t('bed','on the bed.','在哪里','modifier')],'床上有猫。')
  ]);

  add('lesson:skeleton','给句子搭起“谁做什么”的骨架',[
    s('先找到要说的人和他的动作，不急着给每个词背名称。',[lane('who','说的是谁',[t('tom','Tom','谁','subject')]),lane('action','他做什么',[t('read','reads','动作','verb')])]),
    one('把谁放在前面，动作放在后面：这就是最基本的骨架。','句子的骨架',[t('tom','Tom','主语：谁','subject'),t('read','reads.','谓语中的动作','verb')],'汤姆读书。'),
    one('想说清读什么，在动作后接上 a book，说明动作的对象。','加上动作对象',[t('tom','Tom','谁','subject'),t('read','reads','动作','verb'),t('book','a book.','宾语：读什么','object','focus')],'汤姆读一本书。'),
    one('再加地点是补充在哪里读；原来的主干仍然是 Tom reads a book。','主干加补充',[t('tom','Tom','谁','subject'),t('read','reads','动作','verb'),t('book','a book','读什么','object'),t('home','at home.','补充地点','modifier','focus')],'汤姆在家读一本书。')
  ]);

  add('lesson:questions','把帮助提问的词移到前面',[
    one('先看普通陈述，is 原本放在 She 后面，说明她的状态。','普通陈述',[t('she','She','谁','subject'),t('is','is','连接状态','verb'),t('happy','happy.','怎么样','modifier')],'她很开心。'),
    s('想问“开心吗”，把 is 拿出来，准备排在 she 前面。',[lane('front','移到前面',[t('is','Is','提问用的词','verb','focus')]),lane('sentence','剩下的词块（待组合）',[t('she','she','谁','subject'),t('happy','happy','怎么样','modifier')])]),
    one('Is 放到 she 前面，最后加问号，就是最常见的一种问句。','提问',[t('is','Is','提问','verb'),t('she','she','谁','subject'),t('happy','happy?','怎么样','modifier')],'她开心吗？'),
    one('普通动作句常借 does 帮忙；用了 does，后面的 like 要用原形。','普通动作的问句',[t('does','Does','帮助提问','verb','focus'),t('she','she','谁','subject'),t('like','like','动作原形','verb','focus'),t('cats','cats?','喜欢什么','object')],'她喜欢猫吗？')
  ]);

  add('lesson:reported','换成自己的视角转告原话',[
    one('Tom 自己说话时，用 I 指自己，用 am 说当时的感受。','Tom 的原话',[t('person','I','Tom 自称','subject'),t('be','am','说话时的状态','verb'),t('tired','tired.','累了','modifier')],'我累了。'),
    s('现在由我们转告，先说明谁说过；原话放在旁边准备改写。',[lane('report','谁说过',[t('tom','Tom','说话的人','subject'),t('said','said','说过','verb')]),lane('sentence','原话词块（待改写）',[t('person','I','要换视角','subject','focus'),t('be','am','当时的状态','verb'),t('tired','tired','感受','modifier')])]),
    s('从我们的角度说 Tom，用 he；这里回到过去场景，am 改为 was。',[lane('report','转告开头',[t('tom','Tom','谁','subject'),t('said','said','说过','verb')]),lane('sentence','改好的内容',[t('person','he','指 Tom','subject','focus'),t('be','was','过去的状态','verb','focus'),t('tired','tired.','感受','modifier')])]),
    one('把内容接在 said 后面；若事实现在仍成立，时态也可以不后移。','自己的话转告',[t('tom','Tom','谁','subject'),t('said','said','说过','verb'),t('person','he','指 Tom','subject'),t('be','was','说话时的状态','verb'),t('tired','tired.','感受','modifier')],'汤姆说他累了。')
  ]);

  add('lesson:inversion','看清两种“移到前面”',[
    one('普通语序先说主语 the bus，再说动作 comes。','普通语序',[t('bus','The bus','主语','subject'),t('comes','comes','动作','verb'),t('here','here.','这里','modifier')],'公交车来到这里。'),
    one('用 here 引出公交车，整个动作 comes 放到名词主语前。','完全倒装',[t('here','Here','引出出现','modifier','focus'),t('comes','comes','整个动作前移','verb','focus'),t('bus','the bus.','名词主语','subject')],'公交车来了。'),
    one('再看另一句：have 是帮助表达的词，seen 是主要动作的一部分。','另一句普通语序',[t('i','I','主语','subject'),t('have','have','帮助动词','verb'),t('never','never','从不','modifier'),t('seen','seen it.','主要动作及对象','verb')],'我从没见过它。'),
    one('never 放句首时，只把 have 移到 I 前，seen 仍在后面。','部分倒装',[t('never','Never','句首否定','modifier','focus'),t('have','have','只移动帮助动词','verb','focus'),t('i','I','主语','subject'),t('seen','seen it.','主要动作仍在后面','verb')],'我从没见过它。')
  ]);

  add('lesson:there-be','先介绍有，再说有什么',[
    s('要介绍房间里有一只猫，先准备“有”和“什么东西”两部分。',[lane('intro','介绍存在',[t('there','There','引出有什么','linker'),t('be','is','配合一个','verb')]),lane('thing','新东西',[t('cat','a cat','一只猫','subject')])]),
    one('把 a cat 接在 there is 后面，这组写法一起表示“有”。','介绍一只猫',[t('there','There','引出存在','linker'),t('be','is','单数配合','verb'),t('cat','a cat.','有什么','subject','focus')],'有一只猫。'),
    one('如果还要说在哪里，继续把地点放到后面，意思更具体。','补上位置',[t('there','There','引出存在','linker'),t('be','is','单数配合','verb'),t('cat','a cat','有什么','subject'),t('room','in the room.','在哪里','modifier','focus')],'房间里有一只猫。'),
    one('换成两只猫时，要一起检查 cats 和 are，不能只改数字。','多个东西',[t('there','There','引出存在','linker'),t('be','are','复数配合','verb','focus'),t('cat','two cats','有什么','subject','focus'),t('room','in the room.','在哪里','modifier')],'房间里有两只猫。')
  ]);

  add('lesson:emphasis','用一层句型把要突出的人托出来',[
    one('普通说法只告诉我们 Tom 打过电话，还没有特别突出哪一部分。','普通说法',[t('tom','Tom','打电话的人','subject'),t('call','called.','动作','verb')],'汤姆打了电话。'),
    s('如果重点是“打电话的人就是 Tom”，先把这个名字单独找出来。',[lane('focus','要突出的人',[t('tom','Tom','重点','subject','focus')]),lane('sentence','其余词块（待组合）',[t('call','called','动作','verb')])]),
    one('用 It was…who… 把 Tom 突出出来，called 仍说明原来的动作。','强调是谁',[t('it','It was','强调句开头','linker'),t('tom','Tom','重点','subject','focus'),t('who','who','接上其余内容','linker'),t('call','called.','原来的动作','verb')],'打电话的人是汤姆。'),
    one('若要强调“确实打了”，可以用 did；后面的 call 用原形。','强调确实做过',[t('tom','Tom','谁','subject'),t('did','did','确实','verb','focus'),t('call','call.','动作原形','verb','focus')],'汤姆确实打了电话。')
  ]);

  add('lesson:inversion-full','让整个动作排到名词主语前面',[
    one('普通说法先写 the bus，再写 comes，最后补 here。','普通语序',[t('bus','The bus','名词主语','subject'),t('comes','comes','动作','verb'),t('here','here.','这里','modifier')],'公交车来到这里。'),
    s('先把 here 提到开头，再把动作和名词主语准备换位。',[lane('front','句首词块',[t('here','Here','引出出现','modifier','focus')]),lane('sentence','待换位词块',[t('bus','the bus','名词主语','subject'),t('comes','comes','整个动作','verb')])]),
    one('comes 整个排在 the bus 前，形成常见的“车来了”的写法。','完全倒装',[t('here','Here','这里','modifier'),t('comes','comes','整个动作前移','verb','focus'),t('bus','the bus.','名词主语','subject')],'公交车来了。'),
    one('若用 it 指代这辆车，常说 Here it comes，不把 comes 搬到 it 前。','代词主语的边界',[t('here','Here','引出出现','modifier'),t('bus','it','指代公交车','subject','focus'),t('comes','comes.','仍在主语后','verb')],'它来了。')
  ]);

  add('lesson:inversion-partial','只把帮助动词移到主语前',[
    one('先把这句拆清：have 帮忙表达完成，seen 才是主要动作的形式。','普通语序',[t('i','I','主语','subject'),t('have','have','帮助动词','verb'),t('never','never','从不','modifier'),t('seen','seen it.','见过它','verb')],'我从没见过它。'),
    s('要把 never 放句首强调“从不”，再让 have 准备跟主语换位。',[lane('front','句首词块',[t('never','Never','从不','modifier','focus')]),lane('sentence','待组合词块',[t('i','I','主语','subject'),t('have','have','要前移的词','verb','focus'),t('seen','seen it','主要动作','verb')])]),
    one('have 移到 I 前，而 seen 留在后面；并不是整个动词组都前移。','部分倒装',[t('never','Never','从不','modifier'),t('have','have','帮助动词前移','verb','focus'),t('i','I','主语','subject'),t('seen','seen it.','主要动作在后','verb')],'我从没见过它。'),
    one('原句没有帮助动词时可以借 did；用了 did，understand 要写原形。','借助 did',[t('only','Only then','直到那时','time'),t('did','did','帮助前移','verb','focus'),t('i','I','主语','subject'),t('understand','understand.','动作原形','verb','focus')],'直到那时，我才明白。')
  ]);

  add('lesson:inversion-conditional','省去 if 时，把合适的词移到前面',[
    one('先用容易读懂的 if 条件句，表达“如果需要，就打电话”。','普通条件句',[t('if','If','如果','linker'),t('you','you','谁','subject'),t('need','need help,','条件','verb'),t('call','call me.','要做什么','verb')],'如果你需要帮助，就给我打电话。'),
    s('正式写法可以用 should；if 不再写，把 should 放在 you 前。',[lane('removed','不再写出',[t('if','if','省去','linker','muted')]),lane('sentence','改写词块',[t('should','Should','放到主语前','verb','focus'),t('you','you','谁','subject'),t('need','need help,','条件','verb'),t('call','call me.','要做什么','verb')])]),
    one('合起来仍然表示“如果”；这种 should 不一定说事情不可能发生。','正式条件句',[t('should','Should','如果需要','verb'),t('you','you','谁','subject'),t('need','need help,','条件','verb'),t('call','call me.','要做什么','verb')],'如果你需要帮助，就给我打电话。'),
    one('were 也能这样前移；只适用于合适的结构，不能随便搬普通动作。','再看 were',[t('were','Were','放到主语前','verb','focus'),t('i','I','假设中的人','subject'),t('you2','you,','假如是你','object'),t('i2','I','谁','subject'),t('wait','would wait.','假设结果','verb')],'如果我是你，我会等一等。')
  ]);

  add('lesson:parallelism','同一位置的动作形式要能配合',[
    one('enjoys 后面的活动用 -ing；第二项却写成 swim，需要配合前词。','错句：搭配不一致',[t('she','She','谁','subject'),t('enjoy','enjoys','喜欢','verb'),t('read','reading','第一项活动','object'),t('and','and','连接两项','linker'),t('swim','swim.','第二项形式不对','object','error')],'想表达：她喜欢读书和游泳。'),
    s('两项活动都接在 enjoys 后面，放在同一个位置一起检查。',[lane('sentence','前面的词块',[t('she','She','谁','subject'),t('enjoy','enjoys','需要 -ing 活动','verb')]),lane('items','并列的两项',[t('read','reading','读书这件事','object'),t('and','and','连接','linker'),t('swim','swimming','游泳这件事','object','focus')])]),
    one('把两项接回去：reading 和 swimming 都能放在 enjoys 后面。','改正确',[t('she','She','谁','subject'),t('enjoy','enjoys','喜欢','verb'),t('read','reading','活动一','object'),t('and','and','连接','linker'),t('swim','swimming.','活动二','object')],'她喜欢读书和游泳。'),
    one('若前词换成 wants，两项可以共用 to；不用机械重复每个词。','共用前面的小词',[t('she','She','谁','subject'),t('want','wants','想要','verb'),t('to','to','两项共用','linker','focus'),t('read','read','动作原形一','object'),t('and','and','连接','linker'),t('swim','swim.','动作原形二','object')],'她想读书和游泳。')
  ]);

  add('lesson:phrase-types','同一介词短语可以做不同说明',[
    one('in the room 放在 bag 后，整组说明“是哪一个包”。','说明哪个东西',[t('bag','The bag','被说明的东西','subject'),t('place','in the room','说明哪个包','modifier','focus'),t('is','is','连接说明','verb'),t('mine','mine.','属于我','object')],'房间里的包是我的。'),
    s('把 in the room 当成一个整体拿出来；不要逐词猜它的任务。',[lane('sentence','主要意思',[t('bag','The bag','什么东西','subject'),t('is','is','连接说明','verb'),t('mine','mine.','属于我','object')]),lane('phrase','同一个介词短语',[t('place','in the room','在房间里','modifier','focus')])],'那个包是我的。'),
    one('这组词放在 play 后面时，就说明“在哪里玩”，作用跟着句子变。','说明动作的位置',[t('we','We','谁','subject'),t('play','play','动作','verb'),t('place','in the room.','在哪里玩','modifier','focus')],'我们在房间里玩。')
  ]);

  add('lesson:sentence-elements','外面是一组，里面还可以再分',[
    one('先找整句主要说的人：The boy in red 合起来说一个男孩。','先看整组',[t('who','The boy in red','主语：说的是谁','subject','focus'),t('reads','reads','动作','verb'),t('book','a book.','读什么','object')],'穿红衣服的男孩读一本书。'),
    s('再放大看主语里面：in red 只是说明是哪一个男孩。',[lane('subject','把主语放大',[t('boy','The boy','主要的人','subject'),t('red','in red','说明哪个男孩','modifier','focus')]),lane('sentence','其余词块',[t('reads','reads','动作','verb'),t('book','a book.','动作对象','object')])]),
    one('收回整组后，仍按“谁—做什么—对着什么”理解句子的主干。','回到整句',[t('who','The boy in red','整组作主语','subject'),t('reads','reads','谓语中的动作','verb','focus'),t('book','a book.','宾语：读什么','object','focus')],'穿红衣服的男孩读一本书。')
  ]);

  add('lesson:double-object','分清“给谁”和“给什么”',[
    one('give 后面有两份信息：me 是接收的人，a book 是给出的东西。','双宾语',[t('she','She','谁','subject'),t('gave','gave','给了','verb'),t('me','me','给谁','object','focus'),t('book','a book.','给什么','object','focus')],'她给了我一本书。'),
    s('把两份信息暂时拆开，准备把“给什么”放到前面。',[lane('sentence','动作开头',[t('she','She','谁','subject'),t('gave','gave','给了','verb')]),lane('objects','待换位的词块',[t('me','me','接收的人','object'),t('book','a book','给出的东西','object')])]),
    one('书先说，人后说；在人前补上 to，说明把书给谁。','换一种顺序',[t('she','She','谁','subject'),t('gave','gave','给了','verb'),t('book','a book','给什么','object'),t('to','to','指向接收者','linker','focus'),t('me','me.','给谁','object')],'她给了我一本书。'),
    one('但 happy 是在说明 Tom 怎么样，不是给他的第二件东西。','比较宾语补足语',[t('we','We','谁','subject'),t('made','made','使得','verb'),t('tom','Tom','被影响的人','object'),t('happy','happy.','说明 Tom 的状态','modifier','focus')],'我们让汤姆开心了。')
  ]);

  add('lesson:required-adverbials','put 不只要说放什么，还要说放哪',[
    one('put 表示放置时，这里还没说放在哪里，普通完整表达缺了信息。','错句：缺少放置位置',[t('she','She','谁','subject'),t('put','put','放置','verb'),t('book','the book.','放什么','object','error')],'想表达：她把书放在某处。'),
    s('先补出位置词块，它不是这次用法里能随便删掉的装饰。',[lane('sentence','待补全的词块',[t('she','She','谁','subject'),t('put','put','放置','verb'),t('book','the book','放什么','object')]),lane('place','还要说放在哪里',[t('desk','on the desk','必需的位置信息','modifier','focus')])]),
    one('把 on the desk 接上，读者才知道这本书被放到哪里。','意思完整',[t('she','She','谁','subject'),t('put','put','放置','verb'),t('book','the book','放什么','object'),t('desk','on the desk.','放在哪里','modifier','focus')],'她把书放在桌上。'),
    one('再看 reads：这里的 at home 只是额外说明在哪里读。','比较另一种动作',[t('she','She','谁','subject'),t('reads','reads','读书','verb'),t('home','at home.','额外的地点说明','modifier','focus')],'她在家读书。'),
    s('去掉 at home，She reads 仍完整；地点能否省略，要看动词的这个用法。',[lane('sentence','仍然完整',[t('she','She','谁','subject'),t('reads','reads.','本身就能说完整','verb','focus')]),lane('extra','可省的额外说明',[t('home','at home','本句可省','modifier','muted')])],'她读书。')
  ]);

  add('lesson:imperatives','对着对方说动作，常不写 you',[
    s('对方已经知道你在对谁说，先准备要做的动作和对象。',[lane('person','听话的人',[t('you','you','通常不用写','subject','muted')]),lane('sentence','动作词块（待组合）',[t('open','Open','动作原形','verb'),t('door','the door.','打开什么','object')])]),
    one('直接从动作原形 Open 开始，就能请对方开门。','请对方做事',[t('open','Open','动作原形','verb','focus'),t('door','the door.','打开什么','object')],'开门。'),
    one('前面加 please，让这个请求听起来更礼貌一些。','礼貌请求',[t('please','Please','表示礼貌','linker','focus'),t('open','open','动作原形','verb'),t('door','the door.','打开什么','object')],'请开门。'),
    one('要说“别做”，在动作前加 Don’t，后面的动作仍用原形。','请对方别做',[t('dont','Don’t','别','verb','focus'),t('run','run.','动作原形','verb')],'别跑。')
  ]);

  add('lesson:exclamations','看感叹的中心是东西还是怎么样',[
    s('先准备“一只很大的狗”这组词；它的中心仍然是一只狗。',[lane('phrase','准备感叹的词组',[t('a','a','一只','modifier'),t('big','big','怎么样','modifier'),t('dog','dog','中心是东西','object')])]),
    one('中心是这组名词，用 What 放到前面，感叹这只狗多大。','感叹一个东西',[t('what','What','引出名词组','linker','focus'),t('a','a','一只','modifier'),t('big','big','多大','modifier'),t('dog','dog!','感叹的东西','object')],'好大的一只狗啊！'),
    s('如果只想突出“大”，拿出 big，把前面换成 How。',[lane('sentence','感叹怎么样',[t('how','How','引出怎么样','linker','focus'),t('big','big!','突出的性质','modifier','focus')]),lane('aside','这次不再说出',[t('a','a','从名词组中省去','neutral','muted'),t('dog','dog','从语境理解','object','muted')])],'好大啊！'),
    one('补上说明的是谁，后半仍用普通陈述顺序 the dog is。','把意思说完整',[t('how','How','感叹','linker'),t('big','big','怎么样','modifier'),t('dog','the dog','说明谁','subject'),t('is','is!','连接性质','verb')],'这只狗真大啊！')
  ]);

  add('lesson:negation','does not 后面的动作回到原形',[
    one('普通肯定句里，she 表示一个人，likes 的词尾带 s。','普通肯定句',[t('she','She','谁','subject'),t('like','likes','喜欢','verb'),t('milk','milk.','喜欢什么','object')],'她喜欢牛奶。'),
    s('想说“不喜欢”，请 does not 帮忙；原来的动作先拿出来准备改。',[lane('sentence','否定词块（待组合）',[t('she','She','谁','subject'),t('not','does not','不','verb','focus'),t('milk','milk','对象','object')]),lane('form','动作回到原形',[t('like','like','去掉 s','verb','focus')])]),
    one('把 like 接在 does not 后面，不要再给 like 加 s。','普通否定句',[t('she','She','谁','subject'),t('not','does not','不','verb'),t('like','like','动作原形','verb'),t('milk','milk.','喜欢什么','object')],'她不喜欢牛奶。'),
    one('注意 not every 是“不是每个”；位置一变，否定的范围也会变。','不是全部',[t('not2','Not','否定“每个”','linker','focus'),t('every','every child','不是每个孩子','subject'),t('likes','likes','喜欢','verb'),t('milk','milk.','喜欢什么','object')],'不是每个孩子都喜欢牛奶。')
  ]);

  add('lesson:ellipsis','意思能从前面补回，就不再重复动作',[
    s('两个人说的是同一种本领；先把两句都完整写出来。',[lane('first','第一句',[t('i','I','谁','subject'),t('can','can','会','verb'),t('swim','swim.','游泳','verb')]),lane('sentence','第二句',[t('she','She','谁','subject'),t('can2','can','也会','verb'),t('swim2','swim too.','同一个动作','verb','focus')])],'我会游泳。她也会游泳。'),
    s('后一句的 swim 与前面重复，可以省去，但帮助表达的 can 留着。',[lane('first','前面已经说明',[t('i','I','谁','subject'),t('can','can','会','verb'),t('swim','swim.','已说出的动作','verb')]),lane('sentence','省略后的句子',[t('she','She','谁','subject'),t('can2','can','保留的帮助动词','verb','focus'),t('too','too.','也一样','modifier')]),lane('removed','省去的重复动作',[t('swim2','swim','可从前面补回','verb','muted')])],'我会游泳。她也会。'),
    one('放在同一段里，读者能从第一句补回 swim；离开前文就可能不清楚。','仍能读懂的省略',[t('i','I','谁','subject'),t('can','can','会','verb'),t('swim','swim.','前面给出的动作','verb'),t('she','She','谁','subject'),t('can2','can','保留','verb'),t('too','too.','同样会游泳','modifier','focus')],'我会游泳。她也会。')
  ]);

  add('lesson:formal-it','让 it 先占位置，把真正内容放后面',[
    one('先用整个 to play 说“玩耍这件事”，它是句子主要谈的内容。','真正内容放前面',[t('play','To play','玩耍这件事','subject','focus'),t('is','is','连接说明','verb'),t('fun','fun.','怎么样','modifier')],'玩耍很有趣。'),
    s('英语常让 it 先占句首，把较长的真正内容先放到旁边。',[lane('sentence','先占一个位置',[t('it','It','占位，不指具体东西','subject','focus'),t('is','is','连接说明','verb'),t('fun','fun','怎么样','modifier')]),lane('content','真正谈的内容',[t('play','to play','玩耍这件事','object')])]),
    one('把 to play 放到后面，it 只是先占位，真正谈的事情没有变。','真正内容放后面',[t('it','It','占位的主语','subject'),t('is','is','连接说明','verb'),t('fun','fun','怎么样','modifier'),t('play','to play.','真正谈的内容','object','focus')],'玩耍很有趣。'),
    one('find 后也可用 it 先占位；to run 才说明觉得做什么难。','另一个占位位置',[t('i','I','谁','subject'),t('find','find','觉得','verb'),t('it','it','先占宾语位置','object','focus'),t('hard','hard','怎么样','modifier'),t('run','to run.','真正谈的事','object')],'我觉得跑步很难。')
  ]);

  add('lesson:punctuation-analysis','先把附加说明移开，看清句子主干',[
    one('一句话稍长时，先找说的是谁、做什么、对着什么。','先看整句',[t('boy','The boy','说的是谁','subject'),t('red','in red','说明哪个男孩','modifier'),t('likes','likes','动作','verb'),t('dogs','dogs.','喜欢什么','object')],'穿红衣服的男孩喜欢狗。'),
    s('把 in red 暂时拿到旁边，主要意思就更容易看清。',[lane('sentence','留下主干',[t('boy','The boy','主语','subject','focus'),t('likes','likes','主要动作','verb','focus'),t('dogs','dogs.','动作对象','object','focus')]),lane('extra','暂放旁边的说明',[t('red','in red','说明哪一个','modifier')])],'那个男孩喜欢狗。'),
    one('再把说明接回去，知道它修饰 boy，就不会把它当成另一件事。','加回附加说明',[t('boy','The boy','被说明的人','subject'),t('red','in red','修饰 boy','modifier','focus'),t('likes','likes','动作','verb'),t('dogs','dogs.','喜欢什么','object')],'穿红衣服的男孩喜欢狗。'),
    one('若有两件完整的事，检查连接词；这里用 and 配合逗号来连接。','检查句间连接',[t('i','I like cats,','完整意思一','neutral'),t('and','and','连接两件事','linker','focus'),t('sister','my sister likes dogs.','完整意思二','neutral')],'我喜欢猫，我姐姐喜欢狗。')
  ]);

  (window.GRAMMAR_ANIMATION_DATA ||= []).push(...lessons);
})();
