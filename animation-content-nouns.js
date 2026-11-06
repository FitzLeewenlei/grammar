/* Original beginner storyboards: nouns, pronouns and articles. */
(() => {
  const lessons=[];
  const t=(id,text,role='',tone='neutral',status)=>({id,text,role,tone,...(status?{status}:{})});
  const lane=(id,label,...tokens)=>({id,label,tokens});
  const step=(caption,lanes,translation,connectors)=>({caption,lanes,...(translation?{translation}:{}),...(connectors?{connectors}:{})});
  const add=(key,title,...steps)=>lessons.push({key,title,steps});

  add('topic:nouns','给人、东西和地方找名字',
    step('先看三个名字：boy 是男孩，book 是书，school 是学校。',[lane('pool','待分类的词',t('boy','boy','男孩'),t('book','book','书'),t('school','school','学校'))]),
    step('把 boy 放进“人”这一格：它用来给一类人命名。',[lane('people','人',t('boy','boy','男孩','subject')),lane('pool','待分类的词',t('book','book','书'),t('school','school','学校'))]),
    step('book 是一种东西的名字，把它移进“东西”这一格。',[lane('people','人',t('boy','boy','男孩','subject')),lane('things','东西',t('book','book','书','object')),lane('pool','待分类的词',t('school','school','学校'))]),
    step('school 是地方的名字。这三个词都属于名词，名词还可以表示想法和感受。',[lane('people','人',t('boy','boy','男孩','subject')),lane('things','东西',t('book','book','书','object')),lane('places','地方',t('school','school','学校','modifier'))]));

  add('topic:pronouns','重复的名字可以换成代词',
    step('先说 Ann 有一本书，Ann 是一个人的名字。',[lane('first','第一句话',t('ann1','Ann','安','subject'),t('has','has','有','verb'),t('book1','a book.','一本书','object'))],'安有一本书。'),
    step('第二句话又说 Ann，读起来有些重复，但指的是同一个人。',[lane('first','第一句话',t('ann1','Ann','安','subject'),t('has','has','有','verb'),t('book1','a book.','一本书','object')),lane('second','重复的说法',t('ann2','Ann','仍然是安','subject'),t('likes','likes','喜欢','verb'),t('book2','the book.','刚才的书','object'))],'安有一本书。安喜欢这本书。'),
    step('把第二个 Ann 换成 She，She 在这里仍然指安。',[lane('first','前面已提到',t('ann1','Ann','安','subject'),t('has','has','有','verb'),t('book1','a book.','一本书','object')),lane('second','代替人名',t('ann2','She','她＝安','subject','focus'),t('likes','likes','喜欢','verb'),t('book2','the book.','刚才的书','object'))],'安有一本书。她喜欢这本书。'),
    step('再把 the book 换成 it；it 指前面提到的那本书。',[lane('first','前面已提到',t('ann1','Ann','安','subject'),t('has','has','有','verb'),t('book1','a book.','一本书','object')),lane('second','代替人和东西',t('ann2','She','她＝安','subject'),t('likes','likes','喜欢','verb'),t('book2','it.','它＝这本书','object','focus'))],'安有一本书。她喜欢它。'));

  add('topic:articles','第一次说、再次说和泛泛地说',
    step('第一次看到一只狗，还没有说是哪只，先用 a dog。',[lane('sentence','第一次提到',t('i','I','我','subject'),t('see','see','看到','verb'),t('det','a','一只','modifier','focus'),t('dog','dog.','狗','object'))],'我看到一只狗。'),
    step('接着说刚才那只狗，双方知道是哪只，就把 a 换成 the。',[lane('sentence','刚才那只狗',t('det','The','双方知道是哪只','modifier','focus'),t('dog','dog','狗','subject'),t('is','is','是','verb'),t('small','small.','小的','modifier'))],'这只狗很小。'),
    step('换成泛泛地说喜欢狗，用复数 dogs，不必在前面加冠词。',[lane('sentence','泛泛谈这一类',t('i','I','我','subject'),t('like','like','喜欢','verb'),t('dog','dogs.','狗这一类','object','focus'))],'我喜欢狗。'),
    step('milk 在这里泛指牛奶，也不加冠词；要结合所说的具体意思选择。',[lane('sentence','泛指一种东西',t('i','I','我','subject'),t('like','like','喜欢','verb'),t('milk','milk.','牛奶','object','focus'))],'我喜欢牛奶。'));

  add('topic:noun-semantic','东西的名字和想法的名字',
    step('book 是书，love 是爱；先把两个名字摆在一起。',[lane('pool','待分类的词',t('book','book','书'),t('love','love','爱'))]),
    step('书可以看见、摸到，把 book 移到“具体”这一边。',[lane('concrete','具体的事物',t('book','book','书','object','focus')),lane('pool','待分类的词',t('love','love','爱'))]),
    step('爱是一种感情，把 love 移到“抽象”这一边；两者都可以用名词来表示。',[lane('concrete','具体的事物',t('book','book','书','object')),lane('abstract','感情和想法',t('love','love','爱','modifier','focus'))]));

  add('lesson:countable','数书本，数水的份量',
    step('book 可以一个个数。先在它前面放 a，表示一本书。',[lane('books','可数名词词块',t('number','a','一本','modifier'),t('book','book','书','object'))]),
    step('换成两本，a 变成 two，book 也要变成复数 books。',[lane('books','可数名词词块',t('number','two','两本','modifier','focus'),t('book','books','书的复数','object','focus'))]),
    step('water 表示水，通常不能直接照着 two books 的办法来数。',[lane('books','两本书',t('number','two','两本','modifier'),t('book','books','书','object')),lane('water','先看水这个词',t('water','water','水','object','focus'))]),
    step('给水加上杯子这个单位，就能数 two cups of water，复数加在 cups 上。',[lane('books','两本书',t('number','two','两本','modifier'),t('book','books','书','object')),lane('water','两杯水',t('cups','two cups of','两杯的份量','modifier','focus'),t('water','water','水本身不变','object'))]));

  add('lesson:articles','用小情景选择 a、the 或不加',
    step('还没指定哪支笔，只是需要一支笔，用 a pen。',[lane('sentence','还没有指定哪支',t('i','I','我','subject'),t('need','need','需要','verb'),t('det','a','一支','modifier','focus'),t('pen','pen.','笔','object'))],'我需要一支笔。'),
    step('说的已经是手上这支笔时，用 the pen 来指出它。',[lane('sentence','现在知道是哪支',t('det','The','这支已知的','modifier','focus'),t('pen','pen','笔','subject'),t('is','is','是','verb'),t('blue','blue.','蓝色的','modifier'))],'这支笔是蓝色的。'),
    step('泛泛谈笔的用途，改用复数 pens，前面不加 a 或 the。',[lane('sentence','泛泛谈笔这一类',t('pen','Pens','笔这一类','subject','focus'),t('is','are','与复数搭配','verb'),t('useful','useful.','有用的','modifier'))],'笔很有用。'),
    step('再看泛指的 water：这里直接说喝水，不需要加冠词。',[lane('sentence','泛指水',t('i','I','我','subject'),t('drink','drink','喝','verb'),t('water','water.','水','object','focus'))],'我喝水。'));

  add('lesson:possession','先认主人，再看名词修饰',
    step('Tom 是人名，bag 是包；先把主人和东西分开放。',[lane('owner','谁的',t('tom','Tom','汤姆','subject')),lane('thing','什么东西',t('bag','bag','包','object'))]),
    step('给 Tom 加上所有格符号，再和 bag 放在一起，就表示汤姆的包。',[lane('phrase','所有关系词块',t('tom',"Tom's",'汤姆的','modifier','focus'),t('bag','bag','包','object'))]),
    step('把整个 Tom’s bag 当作“谁”，后面接 is new，就能组成一句话。',[lane('sentence','完整句子',t('tom',"Tom's",'汤姆的','modifier'),t('bag','bag','包','subject'),t('is','is','是','verb'),t('new','new.','新的','modifier'))],'汤姆的包是新的。'),
    step('school bag 中 school 说明包的种类，并不表示学校拥有这个包。',[lane('sentence','所有关系',t('tom',"Tom's",'汤姆的','modifier'),t('bag','bag','包','subject'),t('is','is','是','verb'),t('new','new.','新的','modifier')),lane('type','表示种类的词块',t('a','a','一个','modifier'),t('school','school','说明包的种类','modifier','focus'),t('bag2','bag','书包','object'))]));

  add('lesson:pronouns','代词要能找到它代替的人',
    step('Ann 帮助 Ben，先把两个人的名字都说清楚。',[lane('first','先说明是谁',t('ann1','Ann','安','subject'),t('helps','helps','帮助','verb'),t('ben1','Ben.','本','object'))],'安帮助本。'),
    step('下一句仍然说这两个人，名字会再次出现，可以考虑用代词替换。',[lane('first','前面已说清楚',t('ann1','Ann','安','subject'),t('helps','helps','帮助','verb'),t('ben1','Ben.','本','object')),lane('second','重复的名字',t('ann2','Ann','安','subject'),t('likes','likes','喜欢','verb'),t('ben2','Ben.','本','object'))],'安帮助本。安喜欢本。'),
    step('这里 She 代替 Ann，位置仍然是说“谁喜欢”。',[lane('first','前面已说清楚',t('ann1','Ann','安','subject'),t('helps','helps','帮助','verb'),t('ben1','Ben.','本','object')),lane('second','代替安',t('ann2','She','她＝安','subject','focus'),t('likes','likes','喜欢','verb'),t('ben2','Ben.','本','object'))],'安帮助本。她喜欢本。'),
    step('Ben 放在 likes 后面，被代替时用 him；仍要让读者知道 him 是谁。',[lane('first','前面已说清楚',t('ann1','Ann','安','subject'),t('helps','helps','帮助','verb'),t('ben1','Ben.','本','object')),lane('second','代替本',t('ann2','She','她＝安','subject'),t('likes','likes','喜欢','verb'),t('ben2','him.','他＝本','object','focus'))],'安帮助本。她喜欢他。'));

  add('lesson:noun-types','同一名词可以从不同角度分类',
    step('boy、Tom、water 都是名词，但它们表示名字的方式不同。',[lane('pool','待分类的词',t('boy','boy','男孩'),t('tom','Tom','汤姆'),t('water','water','水'))]),
    step('Tom 是专门取的名字；boy 和 water 是类别名称，放到普通名词一边。',[lane('common','普通名词',t('boy','boy','类别名称','object'),t('water','water','类别名称','object')),lane('proper','专有名词',t('tom','Tom','专门的名字','subject','focus'))]),
    step('普通名词还能继续按意思分：boy 表示一个人，water 表示一种物质。',[lane('individual','普通：个体',t('boy','boy','一个男孩','object','focus')),lane('material','普通：物质',t('water','water','水','object','focus')),lane('proper','专有名词',t('tom','Tom','人名','subject'))]),
    step('再换一个角度看数量：这里可以说 a boy，而 water 通常不直接按个数数。',[lane('individual','这里可以数个数',t('a','a','一个','modifier','focus'),t('boy','boy','男孩','object')),lane('material','这里通常不数个数',t('water','water','水','object')),lane('proper','专门的名字',t('tom','Tom','人名','subject'))]));

  add('lesson:noun-plurals','数量改变，名词形式也跟着改变',
    step('先看一只猫：one 表示一，cat 先保持单数形式。',[lane('cats','一只猫的词块',t('count1','one','一只','modifier'),t('cat','cat','猫','object'))]),
    step('把 one 换成 two，同时给 cat 加 s，表示两只猫。',[lane('cats','两只猫的词块',t('count1','two','两只','modifier','focus'),t('cat','cats','猫的复数','object','focus'))]),
    step('再放进一只盒子。box 的结尾不同，变复数时不能只照抄 cat。',[lane('cats','已经变成复数',t('count1','two','两只','modifier'),t('cat','cats','猫','object')),lane('boxes','一个盒子的词块',t('count2','one','一个','modifier'),t('box','box','盒子','object'))]),
    step('两只盒子说 two boxes；常见变化有加 s，也有加 es，另有不规则形式。',[lane('cats','加 s',t('count1','two','两只','modifier'),t('cat','cats','猫','object')),lane('boxes','加 es',t('count2','two','两个','modifier','focus'),t('box','boxes','盒子的复数','object','focus'))]));

  add('lesson:noun-phrase','把围绕 book 的词块慢慢搭起来',
    step('先放中心词 book，接下来增加的词都围绕这本书来说明。',[lane('phrase','待扩展的名词词块',t('book','book','中心：书','object'))]),
    step('前面加 a，说明说的是一本书，中心仍然是 book。',[lane('phrase','名词词块',t('a','a','一本','modifier','focus'),t('book','book','中心：书','object'))]),
    step('再加 red，说明书是红色的；red 并没有改变中心词是谁。',[lane('phrase','名词词块',t('a','a','一本','modifier'),t('red','red','说明颜色','modifier','focus'),t('book','book','中心：书','object'))],null,[{from:'red',to:'book',label:'说明书'}]),
    step('后面加 on the desk，说明是哪一本书；整个词块仍以 book 为中心。',[lane('phrase','完整的名词词块',t('a','a','一本','modifier'),t('red','red','红色的','modifier'),t('book','book','中心：书','object'),t('place','on the desk','桌子上的','modifier','focus'))],'桌子上的一本红书。', [{from:'place',to:'book',label:'说明位置'}]));

  add('lesson:noun-common','类别名称不是专门取的名字',
    step('先把 boy、book 和 Ann 放在一起，分别想想它们表示什么。',[lane('pool','待分类的词',t('boy','boy','男孩'),t('book','book','书'),t('ann','Ann','安'))]),
    step('boy 和 book 是一类人或东西的名字，把它们放进普通名词一格。',[lane('common','普通名词',t('boy','boy','一类人','object','focus'),t('book','book','一类物品','object','focus')),lane('pool','再看这个名字',t('ann','Ann','安'))]),
    step('Ann 是专门取的人名，放进专有名词；不能只凭是否大写来分类。',[lane('common','普通名词',t('boy','boy','男孩这一类','object'),t('book','book','书这一类','object')),lane('proper','专有名词',t('ann','Ann','专门的人名','subject','focus'))]),
    step('这里要说一个男孩、一本书，可以在这两个单数名词前分别放 a。',[lane('common','普通名词词块',t('a1','a','一个','modifier'),t('boy','boy','男孩','object'),t('a2','a','一本','modifier'),t('book','book','书','object')),lane('proper','专门的人名',t('ann','Ann','安','subject'))]));

  add('lesson:noun-proper','名字要认清，还要写对大小写',
    step('a boy 只说一个男孩，Tom 则给出了这个人的专门名字。',[lane('general','类别词块',t('a','a','一个','modifier'),t('boy','boy','男孩','object')),lane('pool','再认人名',t('tom','Tom','汤姆'))]),
    step('把 Tom 放进专有名词一格，它通常要用大写字母开头。',[lane('general','类别词块',t('a','a','一个','modifier'),t('boy','boy','男孩','object')),lane('names','专门的名字',t('tom','Tom','人名：T 大写','subject','focus'))]),
    step('China 是国家的名字，也放在专有名词一边，开头的 C 要大写。',[lane('general','类别词块',t('a','a','一个','modifier'),t('boy','boy','男孩','object')),lane('names','专门的名字',t('tom','Tom','汤姆','subject'),t('china','China','国家名：C 大写','object','focus'))]),
    step('把名字放进句子：这里说 Tom 和 China，不需要在名字前随意加 the。',[lane('sentence','完整句子',t('tom','Tom','汤姆','subject'),t('lives','lives','居住','verb'),t('in','in','在','linker'),t('china','China.','中国','object'))],'汤姆住在中国。'));

  add('lesson:noun-individual','一个个数得出的个体',
    step('cat 和 book 分别表示猫和书，先看看这两个名字。',[lane('pool','待认识的词',t('cat','cat','猫'),t('book','book','书'))]),
    step('把它们分到动物和物品中：这里都表示一个个独立的个体。',[lane('animals','动物个体',t('cat','cat','一只猫','object','focus')),lane('things','物品个体',t('book','book','一本书','object','focus'))]),
    step('前面放 one，就明确说一只猫、一本书，名词用单数。',[lane('animals','一只猫',t('one1','one','一只','modifier'),t('cat','cat','猫','object')),lane('things','一本书',t('one2','one','一本','modifier'),t('book','book','书','object'))]),
    step('数量换成 two，词尾也跟着变化：two cats、two books 都表示多个个体。',[lane('animals','两只猫',t('one1','two','两只','modifier','focus'),t('cat','cats','猫的复数','object','focus')),lane('things','两本书',t('one2','two','两本','modifier','focus'),t('book','books','书的复数','object','focus'))]));

  add('lesson:noun-collective','把许多成员看成一个整体',
    step('Tom、Ben、Ann 是三个不同的人，先把成员分别摆出来。',[lane('members','三个成员',t('tom','Tom','汤姆','subject'),t('ben','Ben','本','subject'),t('ann','Ann','安','subject'))]),
    step('三个人可以组成一队；team 是整个队的名字，不是某一个成员的名字。',[lane('group','同一队里的成员',t('tom','Tom','成员','subject'),t('ben','Ben','成员','subject'),t('ann','Ann','成员','subject')),lane('name','整体的名字',t('team','team','队伍','object','focus'))]),
    step('这里把队伍看成一个整体，所以说 The team is ready；看成员时还要结合语境。',[lane('sentence','把整队看成整体',t('the','The','这支','modifier'),t('team','team','队伍这个整体','subject','focus'),t('is','is','这里配 is','verb'),t('ready','ready.','准备好了','modifier'))],'这支队伍准备好了。'));

  add('lesson:noun-material','物质本身和一份物质',
    step('water 表示水这种物质，先不要给它直接加上表示几个的数字。',[lane('water','物质名称',t('water','water','水','object'))]),
    step('加上 a cup of，就能说一杯水；我们数的是杯子的份量。',[lane('water','一杯水的词块',t('number','a','一','modifier'),t('cup','cup of','杯的份量','modifier','focus'),t('water','water','水','object'))]),
    step('换成两杯时，a 变成 two，cup 变成 cups，而 water 不变。',[lane('water','两杯水的词块',t('number','two','两','modifier','focus'),t('cup','cups of','杯的复数','modifier','focus'),t('water','water','水本身不变','object'))]),
    step('wood 是木材，也常用单位表达份量，例如 a piece of wood 表示一块木头。',[lane('water','两杯水',t('number','two','两','modifier'),t('cup','cups of','杯','modifier'),t('water','water','水','object')),lane('wood','一块木头',t('piece','a piece of','一块的份量','modifier','focus'),t('wood','wood','木材','object'))]));

  add('lesson:noun-abstract','想法和感情也有名字',
    step('dog 是狗，love 是爱，idea 是主意；并非所有名字都表示看得见的物品。',[lane('pool','待分类的词',t('dog','dog','狗'),t('love','love','爱'),t('idea','idea','主意'))]),
    step('把 dog 留给具体事物，把 love 和 idea 移到感情、想法这一边。',[lane('concrete','具体事物',t('dog','dog','狗','object')),lane('abstract','感情和想法',t('love','love','爱','modifier','focus'),t('idea','idea','主意','modifier','focus'))]),
    step('idea 虽然表示想法，仍然可以数：加 an，就表示一个主意。',[lane('emotion','抽象感情',t('love','love','爱','modifier')),lane('idea-count','抽象想法，可以数',t('number','an','一个','linker','focus'),t('idea','idea','主意','modifier'))]),
    step('两个主意说 two ideas；抽象名词并不是一律不可数，要看具体用法。',[lane('emotion','抽象感情',t('love','love','爱','modifier')),lane('idea-count','抽象想法，可以数',t('number','two','两个','linker','focus'),t('idea','ideas','主意的复数','modifier','focus'))]));

  add('lesson:noun-concrete','具体或抽象，与能不能数分开看',
    step('book、water 和 idea 都是名词，先从表示的意思来分。',[lane('pool','先看词的意思',t('book','book','书'),t('water','water','水'),t('idea','idea','主意'))]),
    step('书和水可以感知，放在具体一边；主意表示想法，放在抽象一边。',[lane('concrete','具体事物',t('book','book','书','object'),t('water','water','水','object')),lane('abstract','抽象想法',t('idea','idea','主意','modifier'))]),
    step('再换成数量这个角度：书可以按本数，水通常要借助份量单位。',[lane('countable','具体且可数',t('two','two','两本','linker'),t('book','books','书','object','focus')),lane('uncountable','具体且通常不可数',t('water','water','水','object')),lane('abstract','抽象想法',t('idea','idea','主意','modifier'))]),
    step('idea 表示抽象想法，却也能说 two ideas；具体、抽象与可数性是两组分类。',[lane('countable','具体且可数',t('two','two','两本','linker'),t('book','books','书','object')),lane('uncountable','具体且通常不可数',t('water','water','水','object')),lane('abstract','抽象且可数',t('two2','two','两个','linker','focus'),t('idea','ideas','主意','modifier','focus'))]));

  add('lesson:noun-countable-specific','一个名词，搭配三种数量说法',
    step('book 是可数名词。这里先只放一个词块，还没有组成完整表达。',[lane('phrase','待组合的词',t('book','book','书','object'))]),
    step('说一本书时，在单数 book 前面放 a，得到 a book。',[lane('phrase','单数搭配',t('front','a','一本','modifier','focus'),t('book','book','单数','object'))]),
    step('说两本书时，把 a 换成 two，同时把 book 换成 books。',[lane('phrase','复数搭配',t('front','two','两本','modifier','focus'),t('book','books','复数','object','focus'))]),
    step('也可以说 my book；my 已经说明是谁的，前面不用再堆一个 a。',[lane('phrase','说明是谁的',t('front','my','我的','modifier','focus'),t('book','book','这里是一本书','object','focus'))]));

  add('lesson:noun-uncountable-specific','数碗和杯，不直接数 rice 或 water',
    step('rice 表示米饭，这里通常不直接拿数字放在它前面数几个。',[lane('rice','先看物质名称',t('rice','rice','米饭','object'))]),
    step('先加 a bowl of，表示一碗米饭，bowl 提供可以数的单位。',[lane('rice','一碗米饭',t('number','a','一','modifier'),t('bowl','bowl of','碗的份量','modifier','focus'),t('rice','rice','米饭','object'))]),
    step('要两碗，就把单位变成 two bowls of；rice 本身不加复数词尾。',[lane('rice','两碗米饭',t('number','two','两','modifier','focus'),t('bowl','bowls of','碗的复数','modifier','focus'),t('rice','rice','米饭不变','object'))]),
    step('同样的方法也能用于水：two cups of water 中，数的是 cups。',[lane('rice','两碗米饭',t('number','two','两','modifier'),t('bowl','bowls of','碗','modifier'),t('rice','rice','米饭','object')),lane('water','两杯水',t('cups','two cups of','两杯的份量','modifier','focus'),t('water','water','水','object'))]));

  add('lesson:noun-countability-shifts','点单时，coffee 可以表示一杯咖啡',
    step('coffee 泛指咖啡这种饮料时，通常不直接说一个、两个。',[lane('coffee','饮料本身',t('coffee','coffee','咖啡这种饮料','object'))]),
    step('想数份量，可以先完整说 a cup of coffee，表示一杯咖啡。',[lane('coffee','说完整的份量',t('number','a','一','modifier'),t('cup','cup of','杯的份量','modifier','focus'),t('coffee','coffee','咖啡','object'))]),
    step('在咖啡店点单时，常把一杯简称为 a coffee，这时数的是一份饮料。',[lane('coffee','咖啡店点单词块',t('number','a','一份','modifier'),t('coffee','coffee','这里指一杯','object','focus'))]),
    step('点两份可以说 two coffees；意思变化了，可数用法也跟着变化。',[lane('coffee','咖啡店点单词块',t('number','two','两份','modifier','focus'),t('coffee','coffees','这里指两杯','object','focus'))]));

  add('lesson:noun-plural-regular','三种常见词尾，分别怎么变',
    step('先看单数 cat、box 和 city，分别表示一只猫、一个盒子和一座城市。',[lane('catlane','猫',t('n1','one','一只','modifier'),t('cat','cat','单数','object')),lane('boxlane','盒子',t('n2','one','一个','modifier'),t('box','box','单数','object')),lane('citylane','城市',t('n3','one','一座','modifier'),t('city','city','单数','object'))]),
    step('cat 变成两只时，通常直接加 s，得到 two cats。',[lane('catlane','直接加 s',t('n1','two','两只','modifier','focus'),t('cat','cats','加 s','object','focus')),lane('boxlane','先保持单数',t('n2','one','一个','modifier'),t('box','box','单数','object')),lane('citylane','先保持单数',t('n3','one','一座','modifier'),t('city','city','单数','object'))]),
    step('box 以 x 结尾，变复数常加 es，得到 two boxes。',[lane('catlane','直接加 s',t('n1','two','两只','modifier'),t('cat','cats','猫','object')),lane('boxlane','这里加 es',t('n2','two','两个','modifier','focus'),t('box','boxes','加 es','object','focus')),lane('citylane','先保持单数',t('n3','one','一座','modifier'),t('city','city','单数','object'))]),
    step('city 以辅音字母加 y 结尾，先把 y 变成 i，再加 es，得到 cities。',[lane('catlane','加 s：两只猫',t('n1','two','两只','modifier'),t('cat','cats','猫','object')),lane('boxlane','加 es：两个盒子',t('n2','two','两个','modifier'),t('box','boxes','盒子','object')),lane('citylane','改 y 为 ies',t('n3','two','两座','modifier','focus'),t('city','cities','城市的复数','object','focus'))]));

  add('lesson:noun-plural-irregular','有的换词形，有的保持原样',
    step('先放一个孩子、一只羊和一只脚；这三个词不能都只靠加 s 变复数。',[lane('children','孩子',t('n1','one','一个','modifier'),t('child','child','孩子','object')),lane('sheep','羊',t('n2','one','一只','modifier'),t('sheep','sheep','羊','object')),lane('feet','脚',t('n3','one','一只','modifier'),t('foot','foot','脚','object'))]),
    step('两个孩子说 two children，child 要换成 children 这个形式。',[lane('children','换成 children',t('n1','two','两个','modifier','focus'),t('child','children','孩子的复数','object','focus')),lane('sheep','先保持一个',t('n2','one','一只','modifier'),t('sheep','sheep','羊','object')),lane('feet','先保持一个',t('n3','one','一只','modifier'),t('foot','foot','脚','object'))]),
    step('两只羊说 two sheep；数量变了，但 sheep 的单数和复数写法一样。',[lane('children','两个孩子',t('n1','two','两个','modifier'),t('child','children','孩子','object')),lane('sheep','词形保持原样',t('n2','two','两只','modifier','focus'),t('sheep','sheep','复数仍是 sheep','object','focus')),lane('feet','先保持一个',t('n3','one','一只','modifier'),t('foot','foot','脚','object'))]),
    step('两只脚说 two feet；这些常见不规则形式要把单数和复数一起记。',[lane('children','两个孩子',t('n1','two','两个','modifier'),t('child','children','孩子','object')),lane('sheep','两只羊',t('n2','two','两只','modifier'),t('sheep','sheep','羊','object')),lane('feet','换成 feet',t('n3','two','两只','modifier','focus'),t('foot','feet','脚的复数','object','focus'))]));

  add('lesson:noun-possessive-forms','一位主人和多位主人，符号放哪里',
    step('Tom 是主人，cat 是东西；先把这两个词块分开认清。',[lane('owner','谁拥有',t('tom','Tom','汤姆','subject')),lane('thing','拥有什么',t('cat','cat','猫','object'))]),
    step('给 Tom 加上撇号和 s，再把 cat 接在后面，组成 Tom’s cat。',[lane('tomcat','汤姆的猫',t('tom',"Tom's",'汤姆的','modifier','focus'),t('cat','cat','猫','object'))]),
    step('再看 boys 和 ball：boys 已经是以 s 结尾的规则复数，表示多个男孩。',[lane('tomcat','汤姆的猫',t('tom',"Tom's",'汤姆的','modifier'),t('cat','cat','猫','object')),lane('boysball','待组合的词块',t('boys','boys','多个男孩','subject'),t('ball','ball','球','object'))]),
    step('boys 后只加撇号，得到 boys’ ball，表示这些男孩的球。',[lane('tomcat','单数名字加 ’s',t('tom',"Tom's",'汤姆的','modifier'),t('cat','cat','猫','object')),lane('boysball','规则复数加 ’',t('boys',"boys'",'男孩们的','modifier','focus'),t('ball','ball','球','object'))]));

  add('lesson:noun-joint-possessive','一个共用的包，还是各自的包',
    step('先认 Tom、Ann 和 bag，接着比较两个人是否共用同一个包。',[lane('owners','两个人',t('tom','Tom','汤姆','subject'),t('ann','Ann','安','subject')),lane('thing','东西',t('bag','bag','包','object'))]),
    step('共用一个包时，只在最后一个名字后加 ’s：Tom and Ann’s bag。',[lane('shared','共同用一个包',t('tom','Tom','汤姆','modifier'),t('and','and','和','linker'),t('ann',"Ann's",'最后的名字加 ’s','modifier','focus'),t('bag','bag','一个共用的包','object'))]),
    step('各自拥有包时，两个名字分别加 ’s，通常也把 bag 换成复数 bags。',[lane('shared','共同用一个包',t('tom','Tom','汤姆','modifier'),t('and','and','和','linker'),t('ann',"Ann's",'最后加 ’s','modifier'),t('bag','bag','共用的包','object')),lane('separate','各自拥有的包',t('tom2',"Tom's",'汤姆的','modifier','focus'),t('and2','and','和','linker'),t('ann2',"Ann's",'安的','modifier','focus'),t('bag2','bags','各自的包','object','focus'))]));

  add('lesson:pronoun-personal','换了做事的人，代词形式也会变',
    step('先说 Ann 帮助 Tom；前面说谁帮忙，后面说帮助谁。',[lane('sentence','先把名字说清楚',t('ann','Ann','帮忙的人','subject'),t('helps','helps','帮助','verb'),t('tom','Tom.','得到帮助的人','object'))],'安帮助汤姆。'),
    step('Ann 在前面用 She 代替，Tom 在动词后用 him 代替。',[lane('sentence','她帮助他',t('ann','She','她：谁做事','subject','focus'),t('helps','helps','帮助','verb'),t('tom','him.','他：动作对着谁','object','focus'))],'她帮助他。'),
    step('现在换成汤姆帮助安，词块交换位置，也分别换成 He 和 her。',[lane('sentence','他帮助她',t('tom','He','他：谁做事','subject','focus'),t('helps','helps','帮助','verb'),t('ann','her.','她：动作对着谁','object','focus'))],'他帮助她。'));

  add('lesson:pronoun-possessive','后面有没有名词，决定 my 还是 mine',
    step('my 放在 book 前面，一起表示“我的书”，先看完整句子。',[lane('sentence','后面有名词',t('this','This','这','subject'),t('is','is','是','verb'),t('my','my','我的','modifier'),t('book','book.','书','object'))],'这是我的书。'),
    step('前面已知道说的是书时，my book 可以缩成 mine，后面不再重复 book。',[lane('sentence','后面不重复名词',t('this','This','这','subject'),t('is','is','是','verb'),t('my','mine.','我的那本','object','focus'))],'这是我的。'),
    step('重新说出 book 时，要用 my book；my 后接名词，mine 则可以独立使用。',[lane('sentence','又把名词说出来',t('my','My','我的','modifier','focus'),t('book','book','书','subject'),t('is','is','是','verb'),t('red','red.','红色的','modifier'))],'我的书是红色的。'));

  add('lesson:pronoun-reflexive','她自己和彼此，意思不同',
    step('Ann sees Ben 中，看到的人和被看到的人是两个不同的人。',[lane('sentence','她看见另一个人',t('ann','Ann','看到的人','subject'),t('sees','sees','看见','verb'),t('ben','Ben.','另一个人','object'))],'安看见本。'),
    step('如果安在镜子里看到自己，改用 herself，动作又指回安自己。',[lane('sentence','她看到她自己',t('ann','Ann','安','subject'),t('sees','sees','看见','verb'),t('self','herself.','她自己＝安','object','focus'))],'安看见她自己。', [{from:'self',to:'ann',label:'指回自己'}]),
    step('两个人互相帮助则用 each other，表示你帮我、我帮你，不是各帮各的自己。',[lane('sentence','两个人彼此帮助',t('ann','Ann','安','subject'),t('and','and','和','linker'),t('ben','Ben','本','subject'),t('help','help','帮助','verb'),t('each','each other.','彼此','object','focus'))],'安和本互相帮助。'));

  add('lesson:pronoun-indefinite','一些、全部和一个也没有',
    step('桌上有三个苹果，接着看选出多少个时，可以用哪些词。',[lane('table','桌上的三个苹果',t('apple1','an apple','苹果一','object'),t('apple2','an apple','苹果二','object'),t('apple3','an apple','苹果三','object'))]),
    step('先选出其中两个，用 some 表示一些；这里没有把三个全选出来。',[lane('chosen','some：选出一些',t('apple1','an apple','选出的苹果','object','focus'),t('apple2','an apple','选出的苹果','object','focus')),lane('table','还没选出的',t('apple3','an apple','剩下的苹果','neutral'))]),
    step('再把最后一个也选进来，all 表示这一组中的全部。',[lane('chosen','all：选出全部',t('apple1','an apple','选出的苹果','object'),t('apple2','an apple','选出的苹果','object'),t('apple3','an apple','最后一个也选入','object','focus'))]),
    step('把三个都放回桌上，选出的一边变空，none 就表示一个也没有。',[lane('chosen','none：一个也没选'),lane('table','全部留在桌上',t('apple1','an apple','没有选出','neutral'),t('apple2','an apple','没有选出','neutral'),t('apple3','an apple','没有选出','neutral'))]));

  add('lesson:pronoun-demonstrative','远近变了，单复数也变了',
    step('一只猫在近处，可以用 this cat 表示“这只猫”。',[lane('near','近处：一只',t('front','this','这只','modifier','focus'),t('cat','cat','猫','object'))],'这只猫。'),
    step('把它放到远处，就把 this 换成 that，表示“那只猫”。',[lane('far','远处：一只',t('front','that','那只','modifier','focus'),t('cat','cat','猫','object'))],'那只猫。'),
    step('远处不止一只猫时，用 those，cat 也要改成复数 cats。',[lane('far','远处：多只',t('front','those','那些','modifier','focus'),t('cat','cats','猫的复数','object','focus'))],'那些猫。'),
    step('多只猫换到近处，用 these cats；远近和数量要一起对应。',[lane('near','近处：多只',t('front','these','这些','modifier','focus'),t('cat','cats','多只猫','object'))],'这些猫。'));

  add('lesson:article-indefinite','先听发音，再选 a 或 an',
    step('cat 开头发辅音，前面用 a，a cat 表示一只猫。',[lane('phrase','正确词块',t('article','a','放在辅音发音前','modifier','focus'),t('cat','cat','猫','object'))],'一只猫。'),
    step('换成 apple 时，开头发元音；先把要改的 a 标出来，这个词块还没有写对。',[lane('phrase','错句中的词块',t('article','a','这里需要改','modifier','error'),t('apple','apple','苹果','object'))]),
    step('把 a 改成 an，得到 an apple；选择依据是后面实际的发音。',[lane('phrase','改正后的词块',t('article','an','放在元音发音前','modifier','focus'),t('apple','apple','苹果','object'))],'一个苹果。'),
    step('hour 开头的 h 不发音，所以也说 an hour，不能只盯着第一个字母。',[lane('phrase','实际发音决定选择',t('article','an','听后面发音','modifier'),t('hour','hour','一小时，h 不发音','object','focus'))],'一个小时。'));

  add('lesson:article-definite','用 the 指出双方知道的那个',
    step('第一次提到一只狗，用 a dog，还没有指定是哪一只。',[lane('sentence','第一次提到',t('i','I','我','subject'),t('see','see','看到','verb'),t('dogdet','a','一只','modifier'),t('dog','dog.','狗','object'))],'我看到一只狗。'),
    step('接着说刚才那只狗，用 the dog；这里的 the 帮我们认出说的是哪只。',[lane('sentence','刚才那只狗',t('dogdet','The','双方知道是哪只','modifier','focus'),t('dog','dog','狗','subject'),t('is','is','是','verb'),t('small','small.','小的','modifier'))],'这只狗很小。'),
    step('这只狗有一个球，球是新提到的，所以先用 a ball。',[lane('sentence','第一次提到球',t('dogdet','The','刚才那只','modifier'),t('dog','dog','狗','subject'),t('has','has','有','verb'),t('balldet','a','一个新提到的','modifier','focus'),t('ball','ball.','球','object'))],'这只狗有一个球。'),
    step('再说球的颜色时，双方已经知道是哪个球，a 就换成 the。',[lane('sentence','刚才那个球',t('balldet','The','双方知道是哪个','modifier','focus'),t('ball','ball','球','subject'),t('is','is','是','verb'),t('red','red.','红色的','modifier'))],'这个球是红色的。'));

  add('lesson:article-zero','不加冠词，常常是在泛泛地说',
    step('cats 表示猫这一类动物，泛泛地说喜欢猫时，前面不加冠词。',[lane('sentence','泛泛谈猫这一类',t('i','I','我','subject'),t('like','like','喜欢','verb'),t('cats','cats.','猫这一类','object'))],'我喜欢猫。'),
    step('加上 the 也能组成正确句子，但通常改成双方知道的那些猫，意思不同。',[lane('sentence','改指特定的那些猫',t('i','I','我','subject'),t('like','like','喜欢','verb'),t('thecats','the','双方知道的','modifier','focus'),t('cats','cats.','特定的那些猫','object'))],'我喜欢那些猫。'),
    step('换成泛指的牛奶时，也直接说 milk；这里没有指定哪一份。',[lane('sentence','泛指牛奶',t('i','I','我','subject'),t('drink','drink','喝','verb'),t('milk','milk.','牛奶','object','focus'))],'我喝牛奶。'),
    step('如果现在指桌上这份牛奶，双方知道是哪份，就可以加 the 来指出它。',[lane('sentence','桌上这份牛奶',t('themilk','The','已知的这一份','modifier','focus'),t('milk','milk','牛奶','subject'),t('is','is','是','verb'),t('cold','cold.','凉的','modifier'))],'这份牛奶是凉的。'));

  (window.GRAMMAR_ANIMATION_DATA ||= []).push(...lessons);
})();
