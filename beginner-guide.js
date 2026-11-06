/* Plain-language help shared by lesson cards and exercises. */
(() => {
  const terms={
    '名词':{text:'用来说人、东西、地方等的词。比如 cat 是猫，book 是书。',en:'I have a cat.',zh:'我有一只猫。',note:'cat 是一种动物的名称，在这里是名词。'},
    '代词':{text:'用来代替人或东西的词，比如 I、you、he、it。这样就不用一直重复名字。',en:'Tom is here. He is happy.',zh:'汤姆在这里。他很开心。',note:'He 指前面的 Tom，是代词。'},
    '动词':{text:'表示做什么、发生什么或处于什么状态的词，比如 eat、run、be。',en:'I eat rice.',zh:'我吃米饭。',note:'eat 表示“吃”，是动词。'},
    '形容词':{text:'说明人或东西是什么样的词，比如 big 是大的，red 是红色的。',en:'It is a red bag.',zh:'这是一个红色的书包。',note:'red 说明 bag 的颜色，是形容词。'},
    '副词':{text:'补充动作怎么做、什么时候做、做得怎样等信息的词。',en:'He runs slowly.',zh:'他跑得很慢。',note:'slowly 说明他怎么跑，是副词。'},
    '冠词':{text:'a、an、the 这类放在名词前的小词，帮助说明是某一个，还是大家知道的那个。',en:'I see a cat.',zh:'我看见一只猫。',note:'a 放在 cat 前，表示一只猫。'},
    '介词':{text:'常放在名词或代词前，说明位置、时间等关系的词，比如 in、on、with。',en:'The cat is on the bed.',zh:'猫在床上。',note:'on 和 the bed 一起说明猫在哪里。'},
    '连词':{text:'把词、词组或小句连起来的词，比如 and、but、because。',en:'I like cats and dogs.',zh:'我喜欢猫和狗。',note:'and 把 cats 和 dogs 连起来。'},
    '数词':{text:'表示多少或第几的词，比如 two 是二，first 是第一。',en:'I have two books.',zh:'我有两本书。',note:'two 表示数量，是数词。'},
    '感叹词':{text:'直接表达惊讶、开心、疼痛等感受的词，比如 wow、oh、ouch。',en:'Wow, a big dog!',zh:'哇，一只大狗！',note:'Wow 表示惊讶或赞叹。'},
    '单数':{text:'常用来表示一个人或一个东西。water 这类不能直接数的名词，作主语时也通常配单数动词。',en:'I have a book.',zh:'我有一本书。',note:'一个 book 是单数。'},
    '复数':{text:'通常表示两个或更多的人或东西。很多名词变复数时要加 -s，但也有特别的变化。',en:'I have two books.',zh:'我有两本书。',note:'两个以上用 books，不是 book。'},
    '主格':{text:'代词用在主语位置时常用的形式，比如 I、he、she、we、they。',en:'He likes cats.',zh:'他喜欢猫。',note:'He 放在句首，表示谁喜欢猫。'},
    '宾格':{text:'代词放在动词或介词后面时常用的形式，比如 me、him、her、us、them。',en:'I like him.',zh:'我喜欢他。',note:'这里说喜欢谁，用 him，不用 he。'},
    '分句':{text:'句子里有自己的“谁”和“做什么”的一部分。有的小句能独立说，有的小句需要放在别的句子里。',en:'I read and she sings.',zh:'我看书，她唱歌。',note:'I read 和 she sings 是两个分句。'},
    '关系词':{text:'把补充说明的小句和前面的人或东西连起来的词，如 who、which、that。',en:'The cat that I like is small.',zh:'我喜欢的那只猫很小。',note:'that 帮助把 I like 和前面的 cat 连起来。'},
    '主语':{text:'一句话主要在说谁或什么。先问“这句话在说谁，或在说什么？”。',en:'Tom runs.',zh:'汤姆跑步。',note:'这句话说的是 Tom，所以 Tom 是主语。'},
    '谓语':{text:'用来说明一个人或东西做什么，或处于什么状态。学习时先找句子里的动词。',en:'I eat an egg.',zh:'我吃一个鸡蛋。',note:'eat 表示“吃”，是这句话的谓语动词。'},
    '宾语':{text:'动作涉及的人或东西。可以接着动词问“谁？”或“什么？”。',en:'I like cats.',zh:'我喜欢猫。',note:'喜欢什么？cats。所以 cats 是宾语。'},
    '表语':{text:'跟在 be、look 等词后，说明人或东西是什么、怎么样。',en:'She is happy.',zh:'她很开心。',note:'happy 说明她的状态，叫作表语。'},
    '定语':{text:'用来补充说明名词，帮助我们知道是哪一个、什么样的。',en:'I have a red bag.',zh:'我有一个红色书包。',note:'red 说明 bag 是什么颜色，在这里作定语。'},
    '状语':{text:'补充动作的时间、地点、方式等信息。先问“什么时候？在哪里？怎么做？”。',en:'We play at home.',zh:'我们在家玩。',note:'at home 回答“在哪里玩”，在这里作状语。'},
    '宾语补足语':{text:'放在宾语后，继续说明这个人或东西怎么样，或做什么。',en:'We make him happy.',zh:'我们让他开心。',note:'happy 说明 him 的状态，是宾语补足语。'},
    '补足语':{text:'把前面的意思补充完整的部分。少了它，有时就不知道人或东西怎么样。',en:'The news makes me sad.',zh:'这个消息让我难过。',note:'sad 补充说明 me 的状态。'},
    '从句':{text:'放在较长句子里的一小句。它通常有自己的“谁”和“做什么”，还要看它在整句话里做什么。',en:'I know he is kind.',zh:'我知道他很友善。',note:'he is kind 是放在 I know 后的一小句。'},
    '主句':{text:'带从句的句子中，表达主要意思的那一部分。',en:'I stay home if it rains.',zh:'如果下雨，我就待在家。',note:'I stay home 是主句；if it rains 说明条件。'},
    '先行词':{text:'被后面的定语从句补充说明的人或东西。',en:'The boy who runs is Tom.',zh:'跑步的那个男孩是汤姆。',note:'who runs 补充说明 boy。这里的 boy 叫先行词。'},
    '词性':{text:'一个词所属的类别，比如名词、动词、形容词。要结合句子看，不能只看中文意思。',en:'I drink water.',zh:'我喝水。',note:'drink 在这里是动词，water 在这里是名词。'},
    '限定词':{text:'放在名词前，告诉我们是哪一个、谁的、多少等。',en:'This is my book.',zh:'这是我的书。',note:'my 放在 book 前面，告诉我们书是谁的。'},
    '原形':{text:'动词最基本的写法，比如 go、eat、read；没有加 -s、-ed 或 -ing。',en:'I can swim.',zh:'我会游泳。',note:'can 后面的 swim 用原形。'},
    '第三人称单数':{text:'不是“我”或“你”，而是一个人或一个东西，比如 he、she、Tom、the cat。',en:'He likes milk.',zh:'他喜欢牛奶。',note:'he 是第三人称单数；一般现在时里 like 通常要加 -s。'},
    '助动词':{text:'帮助另一个动词组成疑问、否定、时态等的词。它像小助手。',en:'Do you like milk?',zh:'你喜欢牛奶吗？',note:'Do 帮助 like 提问，是助动词。'},
    '情态动词':{text:'表示会不会、能不能、必须不必须等意思的词，比如 can、must。',en:'I can read.',zh:'我会阅读。',note:'can 表示能力，后面的 read 用原形。'},
    '不定式':{text:'一种常见的动词结构，通常是 to 加动词原形。可以说明想做的事或做事的目的。',en:'I want to sleep.',zh:'我想睡觉。',note:'to sleep 是不定式。'},
    '动名词':{text:'动词的 -ing 形式用来表示一件事或一种活动。名字里有“名词”，因为它能像名词一样使用。',en:'I like swimming.',zh:'我喜欢游泳。',note:'swimming 表示“游泳这项活动”。'},
    '现在分词':{text:'动词的 -ing 形式。它可以跟在 be 后面，也可以补充说明人、东西或动作。',en:'The cat is sleeping.',zh:'猫正在睡觉。',note:'sleeping 是现在分词；is sleeping 表示正在睡。'},
    '过去分词':{text:'动词的一种形式，常和 have 或 be 一起用。名字里有“过去”，但不一定在说过去的事。规则形式常以 -ed 结尾，不规则形式要逐个认识。',en:'The door is closed.',zh:'门关着。',note:'closed 是 close 的过去分词；这里说门现在关着的状态。'},
    '非谓语':{text:'动词的某种形式在句中做其他工作，没有单独承担整句话的完整谓语。常见形式是 to do、doing 和 done。',en:'I want to go.',zh:'我想去。',note:'want 是这里的谓语动词；to go 说明想做什么。'},
    '所有格':{text:'表示“谁的”或相关关系的形式，常见写法是在名字后加 ’s。',en:"This is Tom's bag.",zh:'这是汤姆的书包。',note:"Tom's 表示“汤姆的”。"},
    '时态':{text:'动词形式帮助我们说明事情在什么时候发生，也说明是在进行、已经发生等情况。',en:'I played yesterday.',zh:'我昨天玩了。',note:'played 配合 yesterday 说明过去发生的事。'},
    '语态':{text:'看一句话说的是“谁做了某事”，还是“谁或什么被做了某事”。',en:'Tom opens the door.',zh:'汤姆打开门。',note:'这里说 Tom 做了什么，是主动表达。'},
    '虚拟语气':{text:'用特别的动词形式说假设、愿望或建议。先看意思，不要一看到过去形式就当成过去的事。',en:'If I were a bird, I could fly.',zh:'如果我是一只鸟，我就能飞。',note:'这是假设，不是在说我过去是一只鸟。'},
    '倒装':{text:'在一些规定的结构里，把动词的全部或一部分放到主语前面。',en:'Here comes the bus.',zh:'公交车来了。',note:'comes 放在 the bus 前面。这种写法叫倒装。'}
  };
  const topic=(definition,usage,examples,pitfall)=>({definition,usage:usage.map(([h,t,advanced])=>({h,t,...(advanced?{advanced:true}:{})})),examples:examples.map(([en,zh,note])=>({en,zh,note})),pitfalls:[{title:'对比着看',wrong:pitfall[0],right:pitfall[1],text:pitfall[2]}]});
  const topics={
    'simple-tenses':topic('一般时常用来说明习惯、事实或一次发生的事。先看是在说现在、过去，还是以后。',[
      ['先分清时间','I play every day. 是平时常做。I played yesterday. 是昨天做过。I will play tomorrow. 是明天要做。'],
      ['再看是谁','说现在的习惯时，he、she、Tom 这样一个人作主语，普通动词常加 -s：He likes cats.'],
      ['别只看一个中文词','中文里有“了”，不一定都选同一种时态。先找 today、yesterday 等时间信息，再看整句话。'],
      ['过去看以后的事','He said he would come. 表示他当时说以后会来。下面的16种结构表可以学完常见时态后再看。',true]
    ],[['I walk to school every day.','我每天走路去上学。','every day 表示每天做，walk 用一般现在时。'],['I watched TV yesterday.','我昨天看了电视。','yesterday 表示昨天，watch 改成 watched。']],['He like cats.','He likes cats.','说他平时喜欢猫时，he 后面的 like 要加 -s。']),
    'progressive-tenses':topic('进行时常用来表示某个时候正在做的事。先找“正在做什么”，再选合适的 be。',[
      ['说现在正在做','I am eating. 表示我现在正在吃东西。am 和 eating 一起用。'],
      ['说过去正在做','I was eating at six. 表示过去六点时，我正在吃东西。'],
      ['两个部分都要有','不能只写 I eating.。完整的写法通常需要 be 和 -ing 形式。'],
      ['进行时还有别的用法','它也可以说暂时的情况或已经安排好的事。遇到这些句子时，再结合上下文判断。',true]
    ],[['She is reading a book.','她正在看书。','is reading 表示正在看。'],['We were playing at five.','五点时我们正在玩。','were playing 表示过去那个时候正在玩。']],['She reading a book.','She is reading a book.','reading 前面还需要 is，才能说清她正在做什么。']),
    'perfect-tenses':topic('完成时把较早的事和某个时间联系起来。比如“我已经吃过了”，可以说明现在不用再吃。',[
      ['先看现在的联系','I have eaten. 常表示我已经吃过了。说这句话，通常和现在的情况有关。'],
      ['认识基本写法','常见写法是 have 或 has 加过去分词。I have finished.；She has finished.。'],
      ['不一定表示停止','I have lived here for two years. 表示我在这里住了两年，可能现在还住在这里。'],
      ['换一个时间来看','had done 常从过去某时往前看；will have done 常从将来某时往前看。可以到下一级分别学。',true]
    ],[['I have lost my key.','我把钥匙弄丢了。','这件较早发生的事和现在有关：现在没有钥匙可用。'],['She has lived here for a year.','她在这里住了一年。','说的是住到现在的情况，不表示她已经搬走。']],['She has finish her work.','She has finished her work.','has 后不能直接放 finish。这里要用过去分词 finished。']),
    'perfect-progressive':topic('完成进行时常用来说明一件事已经持续了一段时间，重点放在“做了多久”。',[
      ['先懂它在强调什么','I have been reading for an hour. 表示我读书读了一个小时，重点是持续的过程。'],
      ['认识写法','常见写法是 have 或 has + been + 动词的 -ing 形式。不要漏掉 been。'],
      ['不保证还在做','一个人说“我刚才一直在跑步”，说话时也可能已经停下。要看前后意思。'],
      ['以后再比较时间','过去完成进行、将来完成进行只是换了观察的时间。先学会最常见的 have been doing。',true]
    ],[['I have been waiting for an hour.','我已经等了一个小时。','for an hour 说明等了多久。'],['It has been raining all day.','雨已经下了一整天。','强调这一天持续下雨的过程。']],['I have waiting for an hour.','I have been waiting for an hour.','这里要用 have been waiting，不能漏掉 been。']),
    adverbial:topic('有时我们要补充“什么时候、为什么、在什么条件下”。可以用一个小句来说明，这种用法叫状语从句。',[
      ['先找两部分','I am sad because my dog is ill. 一部分说我难过，另一部分说明为什么。'],
      ['用连接词看关系','because 常说明原因，when 常说明时间，if 常说明条件。先懂意思，再记名字。'],
      ['每次只学一种','时间、原因、条件等可以分开学。点下一级，用短句分别练习。'],
      ['同一个词可能有不同作用','不能看到 if 就一定说它是条件从句，还要看它在整句话里说明什么。',true]
    ],[['I am sad because my dog is ill.','因为我的狗病了，我很难过。','because 后面的小句说明原因。'],['If you are tired, sit down.','如果你累了，就坐下。','if 后面的小句说明条件。']],['Because it is cold, so I stay home.','Because it is cold, I stay home.','这里已经用 because 说明原因，不再用 so 重复连接同一对小句。']),
    relative:topic('想说明“是哪一个人、哪一个东西”，可以在名词后加一个小句。这个补充说明的小句叫定语从句。',[
      ['先找被说明的人或东西','The boy who runs is Tom. 先找到 boy，再看 who runs 是在说哪个男孩。'],
      ['再看小句里少什么','who runs 中 who 代替那个男孩，表示谁在跑。不同的小句会需要不同的连接词。'],
      ['地点名词后面也要看意思','the school where I study 说“我在这所学校学习”；the school that I like 说“我喜欢这所学校”。where 补充地点，that 在这里代替喜欢的学校。'],
      ['逗号也会影响意思','有些从句只是补充信息，要用逗号隔开。先学普通的说明句，再看这种区别。',true]
    ],[['The boy who runs is Tom.','跑步的那个男孩是汤姆。','who runs 帮我们认出是哪个男孩。'],['This is the book that I like.','这是我喜欢的那本书。','that I like 说明是哪本书。']],['The boy who he runs is Tom.','The boy who runs is Tom.','who 已经指那个男孩，这里不要再加 he。']),
    nominal:topic('一句话里，“我知道什么、我想什么”等内容，有时也是一个小句。这个小句像名词一样使用，叫名词性从句。',[
      ['先从“知道什么”看起','I know he is at home. 我知道的内容是 he is at home。这一小句放在 know 后面。'],
      ['里面通常用普通语序','I know where he is. 里面写 he is，不直接照搬问句 Where is he? 的顺序。'],
      ['连接词的意思不同','that 常引出一件事；what 常指“什么、……的东西”；whether 常表示“是否”。可以逐个点开学。'],
      ['小句还可以放在别的位置','它也能放在句首，或放在 be 后。先掌握常见的宾语从句，再看其他位置。',true]
    ],[['I know he is at home.','我知道他在家。','he is at home 是我知道的内容。'],['I do not know what she wants.','我不知道她想要什么。','what she wants 说明不知道的内容。']],['I know where is he.','I know where he is.','在 I know 后面，通常要用 he is 这样的普通语序。']),
    conditionals:topic('想象“如果事情和实际不一样，会怎么样”，可以用虚拟条件句。先分清是在想象现在、过去，还是两者有关。',[
      ['想象现在不一样','If I had a bike, I could ride home. 表示我现在没有自行车，正在想象有车会怎样。'],
      ['想象过去不一样','If I had left early, I would have been on time. 是回想过去：如果早走，当时就能准时。'],
      ['先懂意思，再学形式','不要只背动词表。先问：这是真实可能，还是和实际不同的想象？'],
      ['过去也可能影响现在','有时想象过去的事不同，现在也会不同。这是混合时间条件句，可到下一级再学。',true]
    ],[['If I had a bike, I could ride home.','如果我有自行车，就能骑车回家。','这是对现在情况的想象。'],['If I were you, I would wait.','如果我是你，我就会等一等。','我不是你；这里只是在设想。']],['If I had a bike, I could rode home.','If I had a bike, I could ride home.','could 后面用动词原形 ride，不用 rode。'])
  };
  window.GRAMMAR_TERMS=terms;
  window.TOPIC_BEGINNER={...(window.TOPIC_BEGINNER||{}),...topics};
})();
