/* Original motion storyboards: tense, voice, agreement and non-finite verbs. */
(() => {
  const lessons=[];
  const t=(id,text,role='',tone='neutral',status)=>({id,text,...(role?{role}:{}),tone,...(status?{status}:{})});
  const r=(id,label,tokens)=>({id,label,tokens});
  const s=(label,tokens,id='sentence')=>r(id,label,[...tokens,t('dot-'+id,'.')]);
  const f=(caption,translation,lanes,timeline,connectors)=>({caption,...(translation?{translation}:{}),lanes,...(timeline?{timeline}:{}),...(connectors?{connectors}:{})});
  const e=(id,label,start,end,kind=end===undefined?'point':'span')=>({id,label,start,...(end===undefined?{}:{end}),kind});
  const time=(events,now=60,label='动作与时间')=>({label,now,events});
  const add=(key,title,steps)=>lessons.push({key,title,steps});
  const who=(text='I',status)=>t('who',text,'谁','subject',status);
  const act=(text,status)=>t('act',text,'动作','verb',status);
  const obj=(text='a book',status)=>t('obj',text,'动作的对象','object',status);
  const aux=(text,status)=>t('aux',text,'帮助表示时间','verb',status);
  const when=(text,status)=>t('when',text,'什么时候','time',status);

  add('topic:simple-tenses','同一个动作，换一个时间看',[
    f('先说平时的习惯：每天走路，并不是只说此刻正在走。','我每天走路。',[s('平时的习惯',[who(),act('walk'),when('every day')])],time([e('habit1','走路',20),e('habit2','走路',40),e('habit3','走路',58)])),
    f('把观察时间移到昨天，动词也换成过去式；这里用同样简单的动作。','我昨天走路了。',[s('过去发生的事',[who(),act('walked','focus'),when('yesterday','focus')])],time([e('walk','走路',30)])),
    f('把观察时间移到明天，用 will 加动词原形说将来的打算。','我明天会走路。',[s('将来的事',[who(),aux('will','focus'),act('walk'),when('tomorrow','focus')])],time([e('walk','打算走路',85)]))
  ]);

  add('topic:progressive-tenses','把镜头停在动作正在发生时',[
    f('镜头停在昨天那个时刻：动作当时正在进行，所以用 was reading。','他当时正在读书。',[s('过去正在做',[who('He'),aux('was'),act('reading')])],time([e('read','正在读书',18,35,'ongoing'),e('look','当时',35)],70)),
    f('把镜头移到现在，同一个动作仍看作进行中，was 就换成 is。','他现在正在读书。',[s('现在正在做',[who('He'),aux('is','focus'),act('reading')])],time([e('read','正在读书',45,60,'ongoing')])),
    f('再把镜头移到将来的某一刻，用 will be reading 表示那时正在读。','他那时会正在读书。',[s('将来某时正在做',[who('He'),aux('will be','focus'),act('reading')])],time([e('read','那时正在读',78,88,'ongoing'),e('look','那时',88)]))
  ]);

  add('topic:perfect-tenses','先做完一件事，再看后来的时间点',[
    f('先看过去的一件事：我已经吃过饭；吃饭发生在现在之前。','我已经吃过饭了。',[s('从现在往前看',[who(),aux('have'),act('eaten')])],time([e('eat','吃过饭',25),e('look','现在看',60)])),
    f('如果改成从过去的某一刻往前看，就用 had eaten；吃饭更早发生。','他来之前，我已经吃过饭了。',[s('从过去往前看',[who(),aux('had','focus'),act('eaten'),t('before','before he came','后来的事','time')])],time([e('eat','吃过饭',18),e('look','他来',38)],78)),
    f('如果从将来的六点往前看，用 will have eaten，表示那之前会吃过饭。','到六点，我就已经吃过饭了。',[s('从将来往前看',[who(),aux('will have','focus'),act('eaten'),when('by six')])],time([e('eat','预计吃完',77),e('look','六点',90)],40))
  ]);

  add('topic:perfect-progressive','不只看结果，也看动作持续了多久',[
    f('先把读书的起点放在过去：这个故事里，我从那时开始读书。','我开始读书。',[s('动作开始',[who(),act('started reading')])],time([e('read','开始读书',25)])),
    f('把读书的时间条拉到现在，强调从过去持续过来的过程。','我一直在读书。',[s('持续到现在',[who(),aux('have been','focus'),act('reading')])],time([e('read','一直在读',25,60,'ongoing')])),
    f('再加 for an hour 说明时长；这里还在读，但句型不指定未来何时停止。','我已经连续读了一个小时了。',[s('补上持续多久',[who(),aux('have been'),act('reading'),when('for an hour','focus')])],time([e('read','已读一小时',20,60,'ongoing')]))
  ]);

  add('lesson:passive','把承受动作的东西放到句首',[
    f('先看主动句：Tom 做动作，门承受“打开”这个动作。','汤姆打开这扇门。',[s('主动句',[t('tom','Tom','做动作的人','subject'),t('open','opens','动作','verb'),t('door','the door','承受动作的东西','object')])]),
    f('现在想先说门，把 the door 移到前面；原来的动作和人先留在词块区。','',[r('sentence','新的主语',[t('door','The door','承受动作的新主语','subject','focus')]),r('parts','待组合词块',[t('open','opens','待改变的动作','verb'),t('tom','Tom','做动作的人','object')])]),
    f('补上 is，把 opens 改为 opened，再用 by 说明是谁打开的。','这扇门由汤姆打开。',[s('被动句',[t('door','The door','承受动作的新主语','subject'),t('be','is','被动结构的一部分','verb','focus'),t('open','opened','过去分词','verb','focus'),t('by','by','引出做动作的人','linker'),t('tom','Tom','做动作的人','object')])])
  ]);

  add('lesson:agreement','一个还是多个，动词跟着谁变化',[
    f('先说一只猫，主语是单数，平时睡觉要用 sleeps。','这只猫睡觉。',[s('一只猫',[who('The cat','focus'),act('sleeps')])]),
    f('把猫改成多只，先把主语换为 The cats；动词也需要一起调整。','这些猫睡觉。',[s('多只猫',[who('The cats','focus'),act('sleep','focus')])]),
    f('把两种搭配并排看：变化的是主语的数量，动词与它配合。','一只猫用 sleeps，多只猫用 sleep。',[s('一个',[t('one','The cat','一个','subject'),t('one-v','sleeps','单数搭配','verb')],'single'),s('多个',[t('many','The cats','多个','subject'),t('many-v','sleep','复数搭配','verb')],'plural')])
  ]);

  add('lesson:present','平时的习惯，和此刻的动作不同',[
    f('先说我平时做什么：I read 表示读书这个习惯，不限定正在读。','我读书。',[s('平时做什么',[who(),act('read')])],time([e('read1','读书',25)])),
    f('加入 every day，把一次动作扩展为每天反复发生的习惯。','我每天读书。',[s('反复发生的习惯',[who(),act('read'),when('every day','focus')])],time([e('read1','读书',20),e('read2','读书',38),e('read3','读书',56)])),
    f('如果主语换成 She，read 要加上 s；每天这个意思保持不变。','她每天读书。',[s('换成她来做',[who('She','focus'),act('reads','focus'),when('every day')])],time([e('read1','读书',20),e('read2','读书',38),e('read3','读书',56)]))
  ]);

  add('lesson:continuous','用两部分表示现在正在做',[
    f('先准备“谁”和“读书”两个词块；它们还不是“正在读”的完整说法。','',[r('sentence','待组合词块',[who(),act('read')])]),
    f('表示正在读时，把 read 改成 reading；但还要补上配合 I 的 am。','',[r('sentence','还差 am 的词块',[who(),act('reading','focus')])],time([e('read','正在读',42,60,'ongoing')])),
    f('把 am 放到 reading 前面，两部分一起表达现在正在进行的动作。','我现在正在读书。',[s('现在进行时',[who(),aux('am','focus'),act('reading'),when('now')])],time([e('read','正在读',42,60,'ongoing')]))
  ]);

  add('lesson:past','把动作放进已经过去的时间里',[
    f('先看常见动作 walk；现在还没指定它发生在哪个时间。','',[r('sentence','动作词块',[who(),act('walk')])]),
    f('把时间放到昨天，walk 变成 walked，说明动作发生在过去。','我昨天走路了。',[s('昨天发生的事',[who(),act('walked','focus'),when('yesterday','focus')])],time([e('walk','昨天走路',28)])),
    f('如果要说昨天没有走路，加入 did not，后面的 walked 还原为 walk。','我昨天没有走路。',[s('过去没有做',[who(),aux('did not','focus'),act('walk','focus'),when('yesterday')])],time([e('walk','昨天这个时间',28)]))
  ]);

  add('lesson:past-cont','看过去那个时刻正在发生什么',[
    f('先把镜头停在昨天六点；我们要看那一刻我在做什么。','昨天六点。',[r('sentence','时间词块',[when('at six yesterday','focus')])],time([e('six','昨天六点',35)],78)),
    f('在那个过去时刻，我的读书动作正在进行，所以先准备 reading。','',[r('sentence','待组合词块',[who(),act('reading','focus'),when('at six yesterday')])],time([e('read','当时正在读',20,35,'ongoing'),e('six','昨天六点',35)],78)),
    f('把 I 对应的 was 放在 reading 前，完整说出过去正在读书。','昨天六点，我正在读书。',[s('过去进行时',[who(),aux('was','focus'),act('reading'),when('at six yesterday')])],time([e('read','当时正在读',20,35,'ongoing'),e('six','昨天六点',35)],78))
  ]);

  add('lesson:perfect','过去丢了钥匙，现在还受影响',[
    f('先看过去的动作：钥匙丢了，动作发生在现在之前。','我丢了钥匙。',[s('过去发生的动作',[who(),act('lost','focus'),obj('my key')])],time([e('lose','丢钥匙',28)])),
    f('现在想强调它与眼下有关，就在 lost 前加 have，说 have lost。','我把钥匙弄丢了。',[s('过去与现在相连',[who(),aux('have','focus'),act('lost'),obj('my key')])],time([e('lose','丢钥匙',28),e('result','现在没钥匙',60)])),
    f('在这个故事里，眼下的影响是开不了门；完成时不只是一个过去日期。','我弄丢了钥匙，现在打不开门。',[s('过去的动作',[who(),aux('have'),act('lost'),obj('my key')]),s('现在的影响',[t('i2','I','我','subject'),t('cannot','cannot open','现在不能做','verb','focus'),t('door','the door','门','object')],'result')],time([e('lose','丢钥匙',28),e('result','现在打不开',60)]))
  ]);

  add('lesson:perf-cont','从过去开始，强调一直在做多久',[
    f('把读书的起点放在过去：这个故事里，我一小时前开始读书。','我开始读书。',[s('读书开始',[who(),act('started reading')])],time([e('read','开始读书',22)])),
    f('把时间条拉到现在，用 have been reading 强调持续的读书过程。','我一直在读书。',[s('过程持续过来',[who(),aux('have been','focus'),act('reading','focus')])],time([e('read','一直在读',22,60,'ongoing')])),
    f('用 for an hour 说明持续一小时；这里还在读，不表示将来何时结束。','我已经连续读了一个小时。',[s('补上持续时长',[who(),aux('have been'),act('reading'),when('for an hour','focus')])],time([e('read','已经读一小时',22,60,'ongoing')]))
  ]);

  add('lesson:past-perfect','在过去的参照点之前已经做完',[
    f('先放好过去的参照点：Tom 来了；现在已经比他来的时间更晚。','汤姆来了。',[s('过去的参照点',[t('tom','Tom','谁','subject'),t('come','came','来到','verb')])],time([e('come','Tom 来',42)],80)),
    f('我的吃饭发生得更早，把吃饭的点放到 Tom 来之前。','我已经吃过饭。',[s('更早发生的事',[who(),aux('had','focus'),act('eaten')])],time([e('eat','吃过饭',20),e('come','Tom 来',42)],80)),
    f('把两件事接起来：had eaten 表示在他来那个过去时刻之前已吃过。','汤姆来之前，我已经吃过饭了。',[s('过去的过去',[who(),aux('had'),act('eaten'),t('before','before','先后关系','linker'),t('tom','Tom','谁','subject'),t('come','came','过去参照点','verb')])],time([e('eat','吃过饭',20),e('come','Tom 来',42)],80))
  ]);

  add('lesson:future','先表达将来，再加未来完成的参照点',[
    f('先准备一个简单动作：读完这本书，现在还没有加将来表达。','',[r('sentence','待组合词块',[who(),act('finish'),obj('the book')])]),
    f('在动作前加入 will，表达从现在看向将来会读完这本书。','我会读完这本书。',[s('将来会做',[who(),aux('will','focus'),act('finish'),obj('the book')])],time([e('finish','预计读完',82)])),
    f('如果强调到六点之前已完成，就改为 will have finished，并加截止时间。','到六点，我就会读完这本书。',[s('到将来某时已完成',[who(),aux('will have','focus'),act('finished','focus'),obj('the book'),when('by six')])],time([e('finish','预计读完',78),e('six','六点',90)],40))
  ]);

  add('lesson:infinitive','把另一个动作接在 want 后面',[
    f('先看一句完整的话：我读书；read 在这里直接说明我做什么。','我读书。',[s('read 是句子的动作',[who(),act('read')])]),
    f('如果想说“想要读书”，先把 want 放进句子；read 暂时放到待组合区。','',[r('sentence','还差想做什么',[who(),t('want','want','想要','verb','focus')]),r('parts','待组合动作',[act('read')])]),
    f('在 read 前加 to，再把 to read 放到 want 后面，说明想做的事情。','我想读书。',[s('to read 说明想做什么',[who(),t('want','want','句子的主要动作','verb'),t('to','to','连接动作形式','linker','focus'),act('read','focus')])])
  ]);

  add('lesson:gerund','把“游泳”这件事放到主语位置',[
    f('先看 I swim：swim 表示“我做什么”，是句子里的主要动作。','我游泳。',[s('动作先跟着我',[who(),act('swim')])]),
    f('如果要谈论“游泳这件事”，把 swim 改成 Swimming，先准备一个名词式词块。','',[r('subject','准备放在主语位置',[t('act','Swimming','游泳这件事','subject','focus')])]),
    f('让 Swimming 来回答“什么很有趣”，再补上 is fun，成为完整句子。','游泳很有趣。',[s('动作变成谈论的事情',[t('act','Swimming','什么事情','subject'),t('is','is','连接说明','verb'),t('fun','fun','这件事怎么样','modifier','focus')])])
  ]);

  add('lesson:verb-choice','stop doing 和 stop to do 停下的事不同',[
    f('先看汤姆正在读书，为后面“停止读书”的含义准备背景。','汤姆正在读书。',[s('正在做的事',[who('Tom'),aux('is'),act('reading')])]),
    f('现在让读书这个动作停止：stop 后接 reading，停下的就是读书。','汤姆停止读书。',[s('停止正在做的事',[who('Tom'),t('stop','stops','停止','verb','focus'),act('reading','focus')])]),
    f('换一个场景：汤姆停下手头别的事，目的是去读书，所以加入 to。','汤姆停下别的事去读书。',[s('停下来为了读书',[who('Tom'),t('stop','stops','停下别的事','verb'),t('to','to','目的','linker','focus'),act('read','focus')])]),
    f('把两种表达并排看：有没有 to，会改变“读书”与“停下”的关系。','前句不再读书，后句停下来读书。',[s('不再读书',[who('Tom'),t('stop','stops','停止读书','verb'),act('reading')]),s('为了读书而停下',[t('tom2','Tom','谁','subject'),t('stop2','stops','停下别的事','verb'),t('to2','to','为了','linker'),t('read2','read','接着要做','verb')],'purpose')])
  ]);

  add('lesson:object-complement','宾语后面补上“让他做什么”',[
    f('先看 Tom laughs：Tom 是笑的人，laughs 直接作主要动作。','汤姆笑了。',[s('Tom 自己做动作',[t('tom','Tom','笑的人','subject'),t('laugh','laughs','主要动作','verb')])]),
    f('如果想说“我让汤姆笑”，把 Tom 移到 make 后面，但句意还没说完。','',[r('sentence','还差让他做什么',[who(),t('make','make','让某人做','verb','focus'),t('tom','Tom','被我影响的人','object','focus')]),r('parts','待组合的动作',[t('laugh','laugh','他要做的事','verb')])]),
    f('把 laugh 接在 Tom 后面说明让他做什么；make 这种用法后不加 to。','我让汤姆笑。',[s('宾语后补上动作',[who(),t('make','make','主要动作','verb'),t('tom','Tom','被影响的人','object'),t('laugh','laugh','说明让他做什么','verb','focus')])],undefined,[{from:'tom',to:'laugh',label:'他来做'}])
  ]);

  add('lesson:prep-to','两个 to，后面的动词形式不同',[
    f('先看 want to swim：这里的 to 与动词原形 swim 一起表示想做的事情。','我想游泳。',[s('to 加动词原形',[who(),t('want','want','想要','verb'),t('to','to','不定式的 to','linker','focus'),act('swim')])]),
    f('换成 look forward to 这个固定搭配时，to 是介词，后面先准备游泳这件事。','',[r('sentence','待组合词块',[who(),t('want','look forward to','期待这个固定搭配','verb','focus')]),r('parts','准备接在介词后',[act('swimming','focus')])]),
    f('把 swimming 接上：介词 to 后用动词的 -ing 形式，不能照搬前面的原形。','我期待去游泳。',[s('介词后接 -ing',[who(),t('want','look forward to','期待','verb'),act('swimming','focus')])]),
    f('把两个搭配并排看，先认出 to 属于哪个结构，再决定后面的词形。','want to swim：想游泳；look forward to swimming：期待游泳。',[s('想做一件事',[who(),t('want','want','想要','verb'),t('to','to','不定式标志','linker'),act('swim')]),s('固定搭配的介词 to',[t('i2','I','谁','subject'),t('look2','look forward to','期待','verb'),t('swim2','swimming','游泳这件事','object')],'prep')])
  ]);

  add('lesson:participles','把动作变成名词旁边的说明',[
    f('先看猫此刻在做什么：The cat is sleeping，说它现在正在睡觉。','这只猫正在睡觉。',[s('先看完整句子',[t('cat','The cat','谁','subject'),t('be','is','帮助表示正在','verb'),t('sleep','sleeping','正在做的动作','verb')])]),
    f('保留 sleeping，移到 cat 前面，组成“正在睡觉的猫”词块，不再保留 is。','正在睡觉的一只猫。',[r('sentence','名词词块',[t('a','a','一只','neutral'),t('sleep','sleeping','猫自己正在做','modifier','focus'),t('cat','cat','被说明的名词','object')])]),
    f('把整个词块放到句首，再补上位置，就能说这只猫在哪里。','正在睡觉的猫在床上。',[s('词块整体作主语',[t('cat-the','The','这只','neutral'),t('sleep','sleeping','说明哪只猫','modifier'),t('cat','cat','主语的中心','subject'),t('is','is','连接位置','verb'),t('bed','on the bed','在哪里','modifier','focus')])]),
    f('再比较 broken cup：猫自己睡觉，杯子则是被打破的，说明关系不同。','a sleeping cat：睡觉的猫；a broken cup：被打破的杯子。',[r('sentence','自己做动作',[t('a','a'),t('sleep','sleeping','猫自己在睡','modifier'),t('cat','cat','被说明的名词','object')]),r('passive','承受动作',[t('a2','a'),t('break','broken','杯子被打破','modifier','focus'),t('cup','cup','被说明的名词','object')])])
  ]);

  add('lesson:active-voice','让做动作的人站到主语位置',[
    f('先准备三个词块，找出谁做动作、做什么，以及动作作用在什么上。','',[r('parts','待组合词块',[t('door','the door','承受动作','neutral'),t('tom','Tom','做动作','neutral'),t('open','opens','动作词','neutral')])]),
    f('先把做动作的 Tom 移到主语位置，再把动作 opens 放到它后面。','',[r('sentence','主语加动作词块',[t('tom','Tom','做动作的人','subject','focus'),t('open','opens','动作','verb')]),r('parts','等待补上对象',[t('door','the door','承受动作','object')])]),
    f('最后补上 the door，主动句先告诉我们谁来做这件事。','汤姆打开这扇门。',[s('主动句',[t('tom','Tom','谁做动作','subject'),t('open','opens','做什么','verb'),t('door','the door','动作的对象','object','focus')])])
  ]);

  add('lesson:agreement-meaning','一段时间当整体看，搭配也按整体选',[
    f('先看 ten minutes：虽然 minutes 是复数，这里谈的是一整段时间。','十分钟。',[r('sentence','主语词块',[t('amount','Ten minutes','一整段时间','subject','focus')])]),
    f('把这段时间作为一个整体，给它选择 is，再准备说明“足够”。','',[r('sentence','待组合词块',[t('amount','Ten minutes','一个时间整体','subject'),t('be','is','按整体搭配','verb','focus')]),r('parts','准备补上的说明',[t('enough','enough','足够','modifier')])]),
    f('把 enough 接上；这里不是数十个分开的分钟，而是在评价整段时间。','十分钟就够了。',[s('意义上看作整体',[t('amount','Ten minutes','一段时间整体','subject'),t('be','is','整体用单数搭配','verb'),t('enough','enough','怎么样','modifier','focus')])])
  ]);

  add('lesson:agreement-nearest','either…or… 中看靠近动词的主语',[
    f('先组成两个可能的主语：Tom 或 I；现在还没有选择动词形式。','',[r('sentence','待组合主语词块',[t('either','Either','二者之一','linker'),t('tom','Tom','较远的主语','subject'),t('or','or','或者','linker'),t('i','I','靠近动词的主语','subject','focus')])]),
    f('在这个 either…or… 结构里，离动词近的是 I，所以接 am。','汤姆或我，有一个人错了。',[s('靠近的是 I',[t('either','Either','二者之一','linker'),t('tom','Tom','较远的主语','subject'),t('or','or','或者','linker'),t('i','I','靠近动词','subject','focus'),t('be','am','与 I 配合','verb','focus'),t('wrong','wrong','错了','modifier')])]),
    f('把两个主语对调，靠近动词的变成 Tom，am 也就换成 is。','我或汤姆，有一个人错了。',[s('靠近的变成 Tom',[t('either','Either','二者之一','linker'),t('i','I','较远的主语','subject'),t('or','or','或者','linker'),t('tom','Tom','靠近动词','subject','focus'),t('be','is','与 Tom 配合','verb','focus'),t('wrong','wrong','错了','modifier')])])
  ]);

  add('lesson:future-in-past','站在过去，说当时眼里的将来',[
    f('先回到 Tom 说话的那一刻；他当时说“我会帮忙”。','汤姆说：“我会帮忙。”',[r('sentence','当时的原话',[t('tom','Tom','说话的人','subject'),t('said','said,','过去说过','verb'),t('quote-open','“'),t('i','I','原话中的我','subject'),t('will','will','当时看将来','verb','focus'),t('help','help.','打算做什么','verb'),t('quote-close','”')])],time([e('say','说这句话',25),e('plan','打算稍后帮忙',45)],80)),
    f('现在转述那句话，把原话中的 I 换成 he，仍然指 Tom。','',[r('sentence','转述中的词块',[t('tom','Tom','说话的人','subject'),t('said','said','过去说过','verb'),t('i','he','转述里仍指 Tom','subject','focus')]),r('parts','待组合的将来表达',[t('will','would','从过去看以后','verb','focus'),t('help','help','打算做什么','verb')])],time([e('say','说这句话',25),e('plan','当时的打算',45)],80)),
    f('把 would help 接上：这个“将来”相对于过去的说话时间，不保证计划实现。','汤姆说他会帮忙。',[s('过去眼里的将来',[t('tom','Tom','说话的人','subject'),t('said','said','过去说过','verb'),t('i','he','指 Tom','subject'),t('will','would','从过去看以后','verb','focus'),t('help','help','打算做什么','verb')])],time([e('say','说话时',25),e('plan','后来帮忙的打算',45)],80))
  ]);

  add('lesson:future-continuous','看将来某一刻动作正在进行',[
    f('先把观察点放到今晚六点；我们要说那一刻正在发生什么。','今晚六点。',[r('sentence','未来时间词块',[when('at six tonight','focus')])],time([e('six','今晚六点',86)],40)),
    f('把读书动作放到那个观察点，准备表示“那时正在读”的 reading。','',[r('sentence','待组合词块',[who(),act('reading','focus'),when('at six tonight')])],time([e('read','那时正在读',72,86,'ongoing'),e('six','今晚六点',86)],40)),
    f('在 reading 前加入 will be，完整表达将来某时正在进行的动作。','今晚六点，我会正在读书。',[s('将来进行时',[who(),aux('will be','focus'),act('reading'),when('at six tonight')])],time([e('read','那时正在读',72,86,'ongoing'),e('six','今晚六点',86)],40))
  ]);

  add('lesson:future-perfect','在将来的截止点之前完成',[
    f('先放好未来的截止点六点；事情需要在这个点之前完成。','到六点。',[r('sentence','截止时间词块',[when('by six','focus')])],time([e('six','六点',90)],40)),
    f('把读完书的时间放到六点之前，先用将来表达说会读完。','我会读完这本书。',[s('将来会完成',[who(),aux('will'),act('finish'),obj('the book')])],time([e('finish','预计读完',76),e('six','六点',90)],40)),
    f('为了强调“到六点时已经完成”，把 will finish 改成 will have finished。','到六点，我就已经读完这本书了。',[s('未来完成时',[who(),aux('will have','focus'),act('finished','focus'),obj('the book'),when('by six')])],time([e('finish','预计已读完',76),e('six','六点',90)],40))
  ]);

  add('lesson:past-perfect-continuous','在过去某一刻之前已经持续多久',[
    f('先把 Tom 来的那一刻放在过去，接下来都从这个点往前看。','汤姆来了。',[s('过去的参照点',[t('tom','Tom','谁','subject'),t('come','came','来到','verb')])],time([e('come','Tom 来',42)],82)),
    f('把读书的时间条拉到他来之前，表示读书早已开始并持续过来。','汤姆来之前，我已经一直在读书。',[s('持续到过去参照点',[who(),aux('had been','focus'),act('reading','focus')])],time([e('read','一直在读',16,42,'ongoing'),e('come','Tom 来',42)],82)),
    f('加上 for an hour 和 when Tom came，说清那时已经持续一小时。','汤姆来时，我已经连续读了一小时。',[s('过去完成进行时',[who(),aux('had been'),act('reading'),when('for an hour','focus'),t('when-tom','when Tom came','过去的参照点','time')])],time([e('read','已读一小时',16,42,'ongoing'),e('come','Tom 来',42)],82))
  ]);

  add('lesson:future-perfect-continuous','到未来某一刻，过程已持续多久',[
    f('先在将来放好六点这个参照点，读书会在更早一点开始。','到六点。',[r('sentence','未来参照点词块',[when('by six','focus')])],time([e('read','预计开始读',50),e('six','六点',88)],28)),
    f('把读书过程拉到六点，先用 will have been reading 说明持续到那时。','到那时，我就已经一直在读书。',[s('持续到未来参照点',[who(),aux('will have been','focus'),act('reading')])],time([e('read','一直读到参照点',50,88,'ongoing'),e('six','六点',88)],28)),
    f('加入 two hours：到六点已持续两小时；这不表示六点一定停下。','到六点，我就已经连续读了两小时。',[s('将来完成进行时',[when('By six'),who(),aux('will have been'),act('reading'),t('duration','for two hours','持续多久','time','focus')])],time([e('read','那时已读两小时',50,88,'ongoing'),e('six','六点',88)],28))
  ]);

  add('lesson:passive-special','make 的被动要还原 to',[
    f('先看主动句：Tom 让男孩洗车，make 后面的 wash 不带 to。','汤姆让这个男孩洗车。',[s('主动句',[t('tom','Tom','做动作的人','subject'),t('make','makes','让某人做','verb'),t('boy','the boy','被影响的人','object'),t('job','wash the car','被要求的动作','verb')])]),
    f('把男孩移到主语位置，make 改成 is made；后面的动作还要接上。','',[r('sentence','被动句待组合',[t('boy','The boy','新的主语','subject','focus'),t('make','is made','被要求','verb','focus')]),r('parts','待接上的动作',[t('job','wash the car','洗车这个动作','verb')])]),
    f('在被动结构中把 to 还原；做动作的人在这里省略，不影响句子完整。','这个男孩被要求洗车。',[s('make 的特殊被动',[t('boy','The boy','被影响的人','subject'),t('make','is made','被要求','verb'),t('to','to','被动里要保留','linker','focus'),t('job','wash the car','被要求做什么','verb')])]),
    f('但不是每个动词都有被动：sleep 后没有动作的对象，不能照这种方法改写。','这个婴儿睡觉。',[s('sleep 这种用法没有被动',[t('baby','The baby','谁','subject'),t('sleep','sleeps','不接动作对象','verb','focus')])])
  ]);

  add('lesson:absolute-with','用 with 加上自己的小主语',[
    f('先看两件同时成立的事：Tom 坐着，门开着，它们各有自己的主语。','汤姆坐着，门开着。',[s('主要事情',[t('tom','Tom','主要句子的主语','subject'),t('sit','sits','主要动作','verb')]),s('补充情况',[t('door','The door','补充情况的主语','object'),t('be','is','连接状态','verb'),t('open','open','门的状态','modifier')],'extra')]),
    f('把门开着改成 with 词块：去掉 is，但保留 door 自己的身份和状态。','门开着的情况下。',[r('sentence','主要句子',[t('tom','Tom','主要句子的主语','subject'),t('sit','sits','主要动作','verb')]),r('extra','待接上的 with 词块',[t('with','with','引出补充情况','linker','focus'),t('door','the door','补充情况的小主语','object'),t('open','open','它的状态','modifier','focus')])]),
    f('把 with 词块放到主句后面，补充他坐着时周围是什么情况。','汤姆坐着，门开着。',[s('主句加补充情况',[t('tom','Tom','主要句子的主语','subject'),t('sit','sits','主要动作','verb'),t('with','with','引出补充情况','linker'),t('door','the door','with 后的小主语','object'),t('open','open','它的状态','modifier')])])
  ]);

  (window.GRAMMAR_ANIMATION_DATA ||= []).push(...lessons);
})();
