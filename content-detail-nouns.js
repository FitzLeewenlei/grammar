/* Granular noun lessons. Naming, meaning and countability are separate axes. */
(() => {
  const source='参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充';
  const entries=[
    {id:'noun-common',title:'普通名词',en:'Common nouns',formula:'类别名称：student / city / water / freedom',take:'普通名词给一类对象命名，不一定可数，也不一定指有形的物体。',classification:['个体名词','集体名词','物质名词','抽象名词'],steps:[
      ['表示类别，而非唯一名称','teacher、city、river 等告诉我们对象属于哪一类；它们可以指具体的某一个对象，但词本身不是该对象的专有名称。the city 仍是普通名词短语，London 才是特定城市的名称。'],
      ['传统四分法继续细分','普通名词常按意义分为个体名词 student、集体名词 team、物质名词 water、抽象名词 freedom。这些是学习用的观察角度；同一个词随词义变化，可能进入不同类别。'],
      ['普通与可数不是同一个问题','book 是普通可数名词，furniture 是普通不可数名词。先判断当前词义和用法能否按个体计数，再选择 a、数词、复数或单位表达，不能把“普通名词”当作“可数名词”的同义词。'],
      ['大小写和限定要分开检查','普通名词在普通句中通常小写，但在句首、标题或名称组成部分中可以大写。单数可数普通名词通常需要限定词，如 a teacher、this teacher；复数或不可数名词泛指时常不用冠词。']
    ],examples:[['The city has a new museum.','这座城市有一家新博物馆。','city 与 museum 都是类别名称；the 指语境确定的城市，a 引入一家博物馆。'],['Furniture takes up space.','家具会占用空间。','furniture 是普通名词，常作不可数用法；普通名词并不都能直接加数词。']],quiz:[
      mc('普通名词判断：哪一项是类别名称，而非专有名称？',['London','Monday','teacher','China'],2,'teacher 表示教师这一类人，是普通名词；其余各项在这里是特定地点或日期的名称。'),
      fill('Several ____ (student) are waiting outside.','students','several 后接可数名词复数；student 在这里表示多个学生个体。'),
      mc('关于普通名词，正确的是：',['所有普通名词都必须用复数','普通名词既可能可数，也可能不可数','普通名词只能表示能看见的物体','the city 因有 the 就变成专有名词'],1,'普通/专有讨论命名方式，可数/不可数讨论当前用法能否计数，两种分类不能混同。')
    ],related:['noun-proper','noun-individual','noun-collective','noun-material','noun-abstract'],pitfalls:[
      {title:'普通名词不意味着能直接按个体计数',wrong:'We bought three furnitures.',right:'We bought three pieces of furniture.',text:'furniture 在这里是不可数名词。数量落在单位 pieces 上，不能因为它是普通名词就写成 furnitures。'},
      {title:'普通单数可数名词通常要有限定',wrong:'She is teacher at this school.',right:'She is a teacher at this school.',text:'teacher 作职业名称时仍是普通单数可数名词，本句用 a teacher；不能把表语位置当作省略冠词的通用理由。'}
    ]},
    {id:'noun-proper',title:'专有名词',en:'Proper nouns',formula:'特定名称：Anna / London / the Thames',take:'识别名称的固定写法，再判断它的冠词和具体语境。',classification:['人名与机构名','地点名称','日期与节日名称','带冠词的固定名称'],steps:[
      ['给特定对象命名','Anna、London、Asia 是特定人或地点的名称；girl、city、continent 则说明类别。专有名称可以由多个词构成，如 the United Nations；其中的整体名称应按惯例书写。'],
      ['名称通常要求大写','英语人名、地名、月份、星期等名称通常按固定规则大写，如 Anna、Paris、April、Tuesday。大写是重要线索，但句首大写的普通名词并不会因此自动成为专有名词。'],
      ['冠词不是一律省略','多数人名、城市名和单个国家名通常不带 the，如 Anna、London、China；部分河流、海洋、山脉、机构和国名带 the，如 the Thames、the Pacific、the United States。应连同名称记忆。'],
      ['特殊语境可以改变结构','the China of the nineteenth century 限定一个时期的中国；a Mr Brown 可表示一位叫布朗的人，the Smiths 可表示史密斯一家。这些特殊用法说明专有名词不是永远不能与冠词或复数结合。']
    ],examples:[['Maya moved from Beijing to London.','玛雅从北京搬到了伦敦。','人名与城市名按固定形式大写；本句这些名称前通常不用冠词。'],['The Thames flows through London.','泰晤士河流经伦敦。','河名 the Thames 通常带 the；城市名 London 在这里不带 the。']],quiz:[
      mc('专有名词与冠词：哪一组普通用法自然？',['the London / China','London / the United States','a China / the Anna','the Tuesday / a Asia'],1,'London 通常不用冠词，the United States 的名称通常带 the；应按名称惯例区分。'),
      fill('英国城市 london 的标准拼写应为 ____。（注意大小写）','London','城市专有名称 London 的首字母要大写。',true),
      mc('专有名词的合理理解是：',['永远不能带冠词','所有大写词都是专有名词','通常按名称惯例书写，特殊语境也可能带限定或复数','所有国家名都必须加 the'],2,'专有名词通常按固定名称使用，但 a Mr Brown、the Smiths 等具体结构有其意义和条件。')
    ],related:['noun-common','articles','noun-countability-shifts'],pitfalls:[
      {title:'地名按固定拼写大写',wrong:'We visited london last summer.',right:'We visited London last summer.',text:'London 是城市专有名称，在普通正文中也需要首字母大写；不是只有句首才大写。'},
      {title:'普通国家名称前不要机械加 the',wrong:'She moved to the China last year.',right:'She moved to China last year.',text:'本句泛指作为国家的 China，通常不加 the；the China of an earlier period 等带特定限制的结构另论。'}
    ]},
    {id:'noun-individual',title:'个体名词',en:'Individual nouns',formula:'一个个体 → 多个个体：a chair → three chairs',take:'把对象视为可分辨的个体，常用单复数表达一个或多个。',classification:['人','动物','物体','独立事件或单位'],steps:[
      ['以个体为观察单位','student、bird、chair 等表示可分辨的人、动物或物体，传统教学中常称个体名词。这里的重点是一个个体单位，不是某个群体整体或未分割的物质。'],
      ['通常有可数的单复数形式','a chair、two chairs 分别表示一个和两个单位。普通单数可数名词通常要带限定词，多个单位则采用复数；复数可能规则变化，也可能像 child → children 一样不规则。'],
      ['与集体名词分清观察层级','player 指一个球员，team 把球员作为一队来命名；team 本身也可计数，如 two teams。个体与集体讨论意义层级，不等于可数与不可数的两分。'],
      ['仍须依据当前词义判断','glass 表示一个玻璃杯时可作个体名词，表示玻璃材料时是物质用法。同一个拼写不能脱离句意永久贴上某一种意义分类。']
    ],examples:[['Three students carried a table into the classroom.','三个学生把一张桌子搬进了教室。','students 与 table 都按个体计数：three 配复数，a 配单数。'],['Each player belongs to a team.','每位球员都属于一支队伍。','player 观察成员个体，team 给成员组成的群体命名；二者在本句中都是可数用法。']],quiz:[
      mc('传统名词分类中，哪一个最直接表示个体而非群体或物质？',['team','water','chair','courage'],2,'chair 表示一件可辨识的物体；team 表群体，water 表物质，courage 表抽象品质。'),
      fill('There are two ____ (box) beside the door.','boxes','box 的规则复数为 boxes，two 表示两个可数单位。'),
      mc('player 和 team 的区别，最准确的是：',['player 是个体名称，team 是群体名称；team 也能计数','只有 player 能带 a','team 一定是不可数名词','team 永远只能配复数谓语'],0,'个体/集体是意义分类；a team、two teams 都是正常的可数用法，谓语还要结合结构和意义。')
    ],related:['noun-collective','noun-countable-specific','noun-plural-irregular'],pitfalls:[
      {title:'一个普通可数个体需要合适的限定',wrong:'I bought chair yesterday.',right:'I bought a chair yesterday.',text:'这里表示买了一把椅子，chair 是普通单数可数名词，需要 a 等限定词。'},
      {title:'数词后采用所需的复数形式',wrong:'Three child are playing outside.',right:'Three children are playing outside.',text:'三个儿童是三个个体，child 的复数是 children，不能把单数形式直接放在 three 后。'}
    ]},
    {id:'noun-collective',title:'集体名词',en:'Collective nouns',formula:'a team / two teams；整体与成员视角',take:'分清词本身的单复数，以及句中强调群体整体还是成员。',classification:['可数群体：team / family','整体或成员视角','常用集合短语','police / cattle 等特殊复数词'],steps:[
      ['一个名称概括一个群体','family、team、class、committee 等把若干成员作为一个群体来称呼。它们常有普通可数形式，如 a family、two families；不能因为成员有多个，就把每个单数群体名词一律当成复数形式。'],
      ['谓语取决于视角与语言习惯','把群体看作单一整体时常用单数谓语；强调成员分别行动时，英式英语较常用复数谓语，美式英语通常更偏向单数或改用 members。应保持动词、代词和上下文视角协调，不把一种地区习惯定成唯一正确形式。'],
      ['集合短语还要找中心词','a flock of sheep 的中心是单数 flock，two flocks of sheep 的中心为 flocks。与之相比，police 和 cattle 通常按复数使用；不能照搬普通 a team 的全部变化方式。'],
      ['必要时明确写出成员','如果想强调每个人不同的动作，用 the team members、the people in the family 等改写，往往比纠结单复数形式更清楚。分析时同时看中心词、意义、后续代词和文体。']
    ],examples:[['The committee has reached a decision.','委员会已经作出决定。','把委员会视为作出决定的整体，使用单数 has。'],['The team members are checking their own equipment.','队员们正在检查各自的装备。','明确写 members，把分别行动的成员作为复数主语，避免群体视角的地区差异。']],quiz:[
      mc('team 的集体名词用法，哪项说明合理？',['team 永远没有复数形式','a team 与 two teams 都可用，谓语还受整体/成员视角影响','team 只能指两个人','team 的所有用法都与 cattle 相同'],1,'team 可以作为群体单位计数；谓语选择还需结合意义、语域与英美习惯。'),
      fill('We saw a flock of ____ (sheep) near the river.','sheep','sheep 的单复数形式相同；flock 表一群，of 后表示组成群体的羊。'),
      mc('若想明确表达“每位队员分别检查自己的装备”，最清楚的主语是：',['The team members','A furniture','The informations','An advice'],0,'the team members 直接把各个成员作为复数主语，比单独 team 更明确地突出成员视角。')
    ],related:['agreement-meaning','agreement','noun-plural-irregular'],pitfalls:[
      {title:'police 的通常主谓配合',wrong:'The police is investigating the theft.',right:'The police are investigating the theft.',text:'police 通常作为复数集合表达，与 are 等复数谓语配合；这与普通可数群体名词 a team 不同。'},
      {title:'cattle 通常不加复数词尾',wrong:'Many cattles were grazing nearby.',right:'Many cattle were grazing nearby.',text:'cattle 通常已有复数意义，不写 cattles；需要明确个体可说 head of cattle 等数量结构。'}
    ]},
    {id:'noun-material',title:'物质名词',en:'Material nouns',formula:'材料或物质：water / rice / gold；单位 + of',take:'物质用法通常不直接按个体计数，数量常通过单位表达。',classification:['液体与气体','材料与食物','单位计量','份量或种类的可数转换'],steps:[
      ['把对象视为未分割的物质','water、gold、rice、bread 等在常见物质意义下不直接表示一个个完整单位。物理上可以有水滴、米粒，并不意味着英语名词 water、rice 就直接采用普通复数计数。'],
      ['数量落在单位或容器上','a bottle of water、two slices of bread、three grains of rice 用 bottle、slice、grain 把物质划成可计量单位。表示多个单位时变化单位词，不机械给物质名词加 -s。'],
      ['材料与制品可以同形不同义','glass 表玻璃材料通常不可数，a glass 表一个玻璃杯可数；paper 表纸张材料通常不可数，a research paper 表一篇论文可数。要结合名词在当前句中所指的内容。'],
      ['种类或份量用法有具体条件','two coffees 可指两份咖啡，different wines 可指不同种类的酒。并不是物质名词永远不能出现复数，而是复数往往伴随种类、份量或其他词义变化。']
    ],examples:[['We bought two bottles of water.','我们买了两瓶水。','two 计数 bottles，water 保持物质用法，不改成 waters。'],['The window is made of glass, and there is a glass on the table.','窗户由玻璃制成，桌上有一个玻璃杯。','第一个 glass 表材料；第二个 glass 表容器，是可数个体用法。']],quiz:[
      mc('物质名词的数量表达中，哪项自然？',['three rices','two bottles of water','an gold','many breads（普通面包材料意义）'],1,'bottles 提供可数容器单位，water 保持不可数的物质意义。'),
      fill('There are three ____ (bottle) of water in the bag.','bottles','three 对单位 bottle 计数，因此 bottle 用复数 bottles。'),
      mc('two coffees 在点单语境中通常表示：',['coffee 永远不可数，因此一定错','两份咖啡','两个咖啡分子','只能表示两个咖啡国家'],1,'咖啡在点单语境中可按份量计数，这不等于其所有用法都变为可数。')
    ],related:['noun-uncountable-specific','noun-countability-shifts','quantifiers'],pitfalls:[
      {title:'米粒要通过单位计数',wrong:'I found three rices on the floor.',right:'I found three grains of rice on the floor.',text:'这里要表达三粒米，应以 grains 提供计量单位，rice 保持普通物质用法。'},
      {title:'多个容器要变化单位词',wrong:'We need two bottle of water.',right:'We need two bottles of water.',text:'two 直接限定可数单位 bottle，故用 bottles；不是把 water 改成复数。'}
    ]},
    {id:'noun-abstract',title:'抽象名词',en:'Abstract nouns',formula:'概念、品质、状态、活动：freedom / courage / experience',take:'抽象描述意义，可数描述具体用法；抽象名词并非永远不可数。',classification:['品质与情感','状态与关系','活动与概念','一次实例或成果的可数用法'],steps:[
      ['表示概念而非独立实体','freedom、courage、happiness、knowledge 等表示自由、勇气、幸福或知识这样的概念、品质、状态。抽象分类不取决于中文是否有“一个”，而取决于词在这里表达的意义。'],
      ['常见不可数形式的配合','advice、information、knowledge 等常按不可数处理，通常不直接带 a/an 或普通复数 -s。作主语时常配单数谓语，需要计量时可用 a piece of advice 等适当单位。'],
      ['抽象概念也可能按实例计数','experience 表经验时通常不可数，an experience 可指一次经历；success 表成功这一概念时常不可数，a success 可指一次成功或一个成功的人/事。countability 要随词义和语境判断。'],
      ['修饰和特指不自动改变可数性','useful information 仍是不可数，the information in this report 只是被限定的信息。形容词、the 或后置修饰可以限定范围，但不会自动让所有抽象名词变成普通可数名词。']
    ],examples:[['Knowledge grows through careful observation.','知识通过细致观察而增长。','knowledge 在这里表示抽象知识概念，作不可数主语，谓语用 grows。'],['She has years of experience, and the trip was an unforgettable experience.','她有多年的经验，而那次旅行是一次难忘的经历。','前一个 experience 是经验，后一个是一次具体经历；抽象与可数并不矛盾。']],quiz:[
      mc('哪一项在本义上表示抽象品质？',['courage','wood','chair','Paris'],0,'courage 表示勇气这种品质；wood 为物质，chair 为物体，Paris 为专有地点名称。'),
      fill('She has two years of ____ (experience).（指工作经验）','experience','这里表示积累的经验，experience 采用不可数用法，不加复数 -s。'),
      mc('an unforgettable experience 中 experience 的意思是：',['一次难忘的经历','无限量的工作经验','一件玻璃制品','只有拼写错误才能如此使用'],0,'experience 在“一次经历”的意义下可以作可数名词；不能把抽象名词一律规定为不可数。')
    ],related:['noun-concrete','noun-countability-shifts','noun-uncountable-specific'],pitfalls:[
      {title:'advice 的通常用法',wrong:'She gave me many advices.',right:'She gave me a lot of advice.',text:'这里 advice 表建议，通常不可数；普通肯定句可自然地用 a lot of advice，也可用 many pieces of advice 明确表示多条建议。'},
      {title:'特指的信息仍通常不可数',wrong:'The informations in this report are useful.',right:'The information in this report is useful.',text:'in this report 限定信息范围，但不使 information 变为普通复数；中心词仍按不可数配单数谓语。'}
    ]},
    {id:'noun-concrete',title:'具体名词与抽象名词的交叉',en:'Concrete and abstract meanings',formula:'可感知的实体意义 ≠ 可数单位',take:'具体/抽象是意义视角，可数/不可数和普通/专有还要分别判断。',classification:['具体实体','物质也是具体意义','抽象概念','多个分类角度交叉'],steps:[
      ['具体意义涉及可感知的实体','book、table、water 等表示可以感知的物体或物质，常归入具体名词。能感知不只指能直接看见，也可涉及触摸、听见等；分类重点是所指意义。'],
      ['具体并不保证可数','book 可以按本数计数，water 通常按物质表达，需要 liters、glasses 等单位。因此“具体名词＝可数名词”“抽象名词＝不可数名词”的两条等式都不成立。'],
      ['同一词可同时贴上多个合理标签','a book 中 book 可同时是普通、个体、具体、可数名词；water 的普通物质用法可同时是普通、物质、具体、不可数。多个标签描述不同问题，不应强制只选其中一个。'],
      ['语境决定当前分析','school 表建筑、机构或教育活动时观察角度会不同；paper 表材料、报纸或论文时也会改变可数性。遇到边界例子，应先解释本句词义，再按需要采用教学分类，避免只背永久名单。']
    ],examples:[['A book is lying beside a glass of water.','一本书放在一杯水旁边。','book 与 water 都表示具体意义，但前者直接可数，后者通过 glass 计量。'],['The idea gave her hope.','这个想法给了她希望。','idea 与 hope 都涉及抽象意义；idea 在这里可数，hope 在这里是不可数用法。']],quiz:[
      mc('具体与可数的关系，哪项正确？',['具体名词全部可数','water 可表示具体物质，但常用不可数形式','抽象名词永远不能带 a','一个词只能属于一种分类'],1,'具体/抽象观察意义，可数/不可数观察当前用法能否按单位计数，应分开判断。'),
      fill('a book 中 book 表示一种类别名称，因此按命名方式属于____名词。','普通','book 不是某本书的专有名称；按命名方式属于普通名词，同时还可属于个体、具体、可数等类别。'),
      mc('book 在 a book 中可同时被描述为：',['普通、个体、具体、可数','专有、物质、不可数','只能是具体，不能再分类','只能是可数，不再属于词性'],0,'这些标签从命名、意义类型、感知意义和计数方式四个角度描述同一用法，并不互相排斥。')
    ],related:['noun-common','noun-abstract','countable'],pitfalls:[
      {title:'具体的水仍需合适的数量单位',wrong:'Please bring three liter of water.',right:'Please bring three liters of water.',text:'这里通过升来计量水，数词 three 限定单位 liter，所以单位用复数 liters；water 仍是物质用法。'},
      {title:'可数的抽象想法要按数变化',wrong:'She suggested two useful idea.',right:'She suggested two useful ideas.',text:'idea 虽是抽象意义，本句仍按两个想法计数，所以 two 后用复数 ideas。'}
    ]},
    {id:'noun-countable-specific',title:'可数名词的单数与复数搭配',en:'Countable noun patterns',formula:'a/an + 单数；数词 / many + 复数',take:'先确定当前可数单位，再核对限定词、单复数和谓语。',classification:['单数单位','多个单位','泛指与特指','中心词的数'],steps:[
      ['可数用法以单位计数','a bicycle、two bicycles 把自行车视为一个个独立单位。可数说的是具体用法，并不是某个名词在所有语境中都固定如此；chicken 表动物和肉时就不同。'],
      ['普通单数通常不能裸用','I need a pen、my pen、this pen 都用限定成分说明所指。普通完整陈述中的单数可数名词通常需要此类限定；标题、角色称谓和固定搭配等特殊结构须另看。'],
      ['复数形式与限定词相互配合','two pens、many pens、these pens 都需要复数；a pen 不接复数 pens。复数既可能规则加 -s/-es，也可能不规则变化或单复数同形，不能只看有没有字母 s。'],
      ['泛指、特指和主谓一致一起核对','Books are useful 泛指书，The books on this shelf are useful 特指一组书。主语是单个可数单位通常配单数谓语，多个单位通常配复数谓语；长修饰语不改变中心词的数。']
    ],examples:[['A visitor is waiting outside.','一位访客正在外面等候。','visitor 采用单数，前有 a，谓语用 is。'],['These boxes contain many old photographs.','这些箱子里装着许多旧照片。','these 与复数 boxes 配合；many 后的 photographs 也是复数。']],quiz:[
      mc('可数名词的限定搭配，哪项正确？',['a books','these book','many books','three book'],2,'many 与可数复数 books 配合；a 要接单数，these 和 three 在此也要接复数。'),
      fill('Two ____ (box) are on the desk.','boxes','two 表多个可数单位；box 的复数为 boxes。'),
      mc('The label on the bottles is clear. 的单数谓语主要由谁决定？',['label','bottles','on','clear'],0,'主语中心是单数 label，on the bottles 是修饰部分，不使外层主语变为复数。')
    ],related:['noun-plural-regular','noun-plural-irregular','articles','agreement'],pitfalls:[
      {title:'a 只限定本句的单数单位',wrong:'She bought a books.',right:'She bought a book.',text:'a 与普通单数可数名词搭配，因此把 books 改成 book；若想表达多本，则需相应数量或复数结构。'},
      {title:'复数指示词要与名词的数配合',wrong:'These student are ready.',right:'These students are ready.',text:'these 指多个对象，student 应采用复数 students；谓语 are 与复数主语协调。'}
    ]},
    {id:'noun-uncountable-specific',title:'不可数名词与单位表达',en:'Uncountable nouns and measures',formula:'some / much + 不可数；a piece of / two pieces of',take:'不直接分成普通个体时，用合适的单位、容量或数量词表达数量。',classification:['常见不可数意义','计量单位','单数谓语','限制范围不等于改为可数'],steps:[
      ['常见不可数项目按用法学习','information、advice、furniture、luggage、homework、news 等在常见基础用法中不直接与 a 或普通复数 -s 配合。不是中文可以说“一条”“一件”，英语名词就能直接计数。'],
      ['用单位表达一个或多个','a piece of advice、two items of luggage、three liters of water 都把可数性放在单位上。单位必须符合对象和语境，不能只把任何名词都套到同一个量词后。'],
      ['数与谓语看外层中心','The information is useful 中不可数 information 通常配单数谓语；Two pieces of information are missing 中外层中心是 pieces，所以用 are。不能只看 of 后的名词决定主谓配合。'],
      ['限定与形容词不自动改变可数性','the useful advice you gave me 仍是 advice 的不可数用法。某些词确有种类或实例的可数转换，但要由实际词义支持，不能看到 the、形容词或后置从句就任意加 -s。']
    ],examples:[['This information is important.','这条信息很重要。','中文可译为“一条”，但本句 information 仍采用不可数形式及单数谓语。'],['Two pieces of advice helped me.','两条建议帮助了我。','数量落在 pieces 上，advice 不加 -s。']],quiz:[
      mc('不可数名词普通用法中，哪项自然？',['an information','many advices','some useful advice','three furnitures'],2,'advice 在这里不可数，some useful advice 自然；需要计数时可说 pieces of advice。'),
      fill('She offered two ____ (piece) of advice.','pieces','two 对单位 piece 计数，因此单位用复数 pieces，advice 保持不可数形式。'),
      mc('The news ____ surprising.（普通“消息”用法）',['are','is','have','be'],1,'news 虽以 s 结尾，在这里通常按不可数单数处理，所以用 is。')
    ],related:['noun-material','noun-abstract','quantifiers','agreement'],pitfalls:[
      {title:'news 词尾有 s 也不自动用复数谓语',wrong:'This news are surprising.',right:'This news is surprising.',text:'news 在普通消息意义下通常为不可数名词，本句应配单数 is。'},
      {title:'信息的数量通过单位表达',wrong:'I received an information about the trip.',right:'I received a piece of information about the trip.',text:'information 在本句不可数，不能直接用 an；a piece of 提供可数单位。'}
    ]},
    {id:'noun-countability-shifts',title:'同一名词的可数性转换',en:'Countability and changes of meaning',formula:'chicken：动物 / 肉；coffee：饮品 / 一份；experience：经验 / 经历',take:'先说清这个词此刻指什么，再决定能否加 a、数词或复数。',classification:['物质与个体','饮品与份量','概念与实例','材料与制品或作品'],steps:[
      ['动物与肉不是同一个计数意义','a chicken、three chickens 表示一只或三只鸡；some chicken 表示鸡肉时采用物质用法。词义变化解释了形式变化，不能把一个拼写永久登记为只能可数或只能不可数。'],
      ['份量与种类可形成可数用法','coffee 通常表示咖啡这种饮品，但点单时 two coffees 可表示两份；不同种类的 wines、cheeses 等也可计数。这要求明确的份量或种类语境，不是随意把所有物质复数化。'],
      ['抽象概念与一次实例要区分','experience 表经验通常不可数，an experience 表一次经历；a success 可表示成功的人或事情。限定词和数词反映当前词义，不能只靠是否“抽象”选择形式。'],
      ['同形词的单位也可能完全不同','paper 可指纸张材料，也可指一篇论文或一份报纸；glass 可指玻璃材料，也可指杯子。核对例句中的实际所指，比背“某词一定不可数”更可靠。']
    ],examples:[['There are three chickens in the yard, but we had chicken for lunch.','院子里有三只鸡，不过我们午饭吃的是鸡肉。','chickens 按动物个体计数；后一个 chicken 表食物材料。'],['We ordered two coffees while discussing her teaching experience.','我们一边讨论她的教学经验，一边点了两份咖啡。','coffees 在点单中按份量计数；experience 指经验，仍为不可数。']],quiz:[
      mc('比较 a chicken 与 some chicken（鸡肉），正确的是：',['前者通常指一只鸡，后者可指鸡肉','两者都只能指一只鸡','chicken 永远不能出现复数','加 some 就一定错误'],0,'同一拼写在动物和肉的意义下有不同计数方式。'),
      fill('For lunch, we ate some ____ (chicken).（指鸡肉）','chicken','题目明确指鸡肉，用不可数的物质形式 chicken，不加复数 -s。'),
      mc('哪项最能解释 an unforgettable experience？',['一次具体经历的可数用法','experience 所有意义都必须可数','冠词 a 可直接限定所有抽象概念','这只能是错误的英语'],0,'一次经历是 experience 的可数意义；经验这一常见意义通常不可数。')
    ],related:['noun-material','noun-abstract','noun-countable-specific','noun-uncountable-specific'],pitfalls:[
      {title:'明确指多只鸡时采用复数',wrong:'There are three chicken in the yard.',right:'There are three chickens in the yard.',text:'本句指院子里的三只鸡，不是鸡肉；按动物个体计数，应使用 chickens。'},
      {title:'玻璃杯与玻璃材料采用不同计数方式',wrong:'She filled two glass with water.',right:'She filled two glasses with water.',text:'这里 glass 指杯子，不是玻璃材料；两个容器要使用可数复数 glasses。'}
    ]},
    {id:'noun-plural-regular',title:'名词复数的规则变化',en:'Regular plural endings',formula:'-s / -es；辅音 + y → -ies；例外按词学习',take:'一般拼写规则提供起点，不能把 y、f、o 的变化一律化。',classification:['通常加 -s','s / x / ch / sh 等后加 -es','辅音 + y','f / fe / o 的常见例外'],steps:[
      ['多数可数名词直接加 -s','book → books、desk → desks、girl → girls 是常见规则。词尾发音会随前一个音变化，但基本书写规则不因此变成统一加 -es。'],
      ['特定词尾通常加 -es','box → boxes、bus → buses、watch → watches、dish → dishes 中，词尾通常需要 -es。-ch 还要看发音，不能把词尾字母规律当成无例外的全部词典规则。'],
      ['y 前是辅音还是元音','city → cities、baby → babies 把辅音字母后的 y 改为 ies；boy → boys、key → keys 中 y 前为元音字母，通常直接加 s。不要把所有 y 结尾的词都改为 ies。'],
      ['f、fe 与 o 不宜只背一条口令','wife → wives、leaf → leaves 常见，但 roof → roofs、chief → chiefs；tomato → tomatoes，而 photo → photos、piano → pianos。词形有词汇性和变体差别，遇到不熟悉的词应查证标准形式。']
    ],examples:[['The two babies are playing with toy cars.','两个婴儿正在玩玩具汽车。','baby 的 y 前是辅音，变 babies；toy 的 y 前是元音，作名词复数时为 toys。'],['She put the photos in three boxes.','她把照片放进了三个盒子。','photo 的复数通常为 photos；box 的复数为 boxes。']],quiz:[
      mc('规则复数判断：city 应变为：',['citys','cities','cityes','cityies'],1,'city 的 y 前是辅音字母 t，通常把 y 改为 ies。'),
      fill('There are four ____ (key) on the desk.','keys','key 的 y 前是元音字母 e，通常直接加 -s，成为 keys。'),
      mc('哪一组都是常见标准复数？',['photoes / pianos','photos / boxes','rooves / citys','babys / watches'],1,'photos 与 boxes 都是常见标准形式；f、o、y 结尾的变化不能各自一律化。')
    ],related:['noun-plural-irregular','noun-countable-specific','word-formation'],pitfalls:[
      {title:'辅音加 y 的常见变化',wrong:'The two citys are connected by rail.',right:'The two cities are connected by rail.',text:'city 的 y 前为辅音字母，复数通常改 y 为 ies，而非直接加 s。'},
      {title:'photo 不是统一加 -es 的 o 结尾名词',wrong:'I printed several photoes.',right:'I printed several photos.',text:'photo 的普通复数为 photos；不能把 tomato → tomatoes 的变化机械推广到所有 o 结尾名词。'}
    ]},
    {id:'noun-plural-irregular',title:'不规则复数与单复数同形',en:'Irregular and unchanged plurals',formula:'child → children；foot → feet；sheep → sheep',take:'按当前含义核对词形，再结合限定词和谓语判断数。',classification:['词干变化','特殊词尾','单复数同形','词形随意义与语域变化'],steps:[
      ['常用词干或整体变化','man → men、woman → women、foot → feet、tooth → teeth、mouse → mice、child → children 都不按普通加 s 的方式变化。这些形式要与实际词义、发音和语境一起记忆。'],
      ['单复数同形仍然可以计数','one sheep、three sheep，one deer、several deer 的名词形式相同，但并不因此成为不可数名词。单复数可通过数词、限定词和谓语看出，如 The sheep is… / The sheep are…。'],
      ['不能把特殊形式反向套成普通规则','children 已是复数，通常不再加 s；feet 也不再写成 feets。带有修饰语或所有格时仍保留正确的词形，如 the children’s books。'],
      ['有些复数变化与词义或语域有关','fish 常可作单复数同形，fishes 也可在强调种类等语境中使用；persons 可见于正式或特定用法，不能因 people 常见就把 persons 一律判错。基础表达先掌握常用形式，再查特定意义的变体。']
    ],examples:[['The children washed their feet before entering.','孩子们进屋前洗了脚。','children 和 feet 都是常见不规则复数，不再另加 s。'],['One sheep is near the gate, and three sheep are on the hill.','一只羊在门边，三只羊在山坡上。','sheep 单复数同形；is 与 are 分别由一个或多个所指决定。']],quiz:[
      mc('在普通数量“三只羊”的表达中，应选：',['three sheeps','three sheep','three sheepes','three sheeping'],1,'sheep 的普通单数和复数形式相同，three sheep 表三只羊。'),
      fill('Both ____ (child) are reading quietly.','children','child 的复数为 children；both 在这里指两个儿童。'),
      mc('关于单复数同形，正确的是：',['sheep 没有 -s，所以永远不可数','one sheep 与 three sheep 都可用，数由上下文判断','所有动物名称都单复数同形','feet 是 foot 的单数'],1,'同形不等于不可数；sheep 可以按个体计数，而形式由限定词和谓语等线索辨认。')
    ],related:['noun-plural-regular','noun-collective','noun-possessive-forms'],pitfalls:[
      {title:'sheep 的通常复数不加 s',wrong:'Three sheeps were standing by the gate.',right:'Three sheep were standing by the gate.',text:'这里按三个动物个体计数，sheep 的复数与单数同形，不能写成 sheeps。'},
      {title:'foot 的常见不规则复数',wrong:'Her foots were cold.',right:'Her feet were cold.',text:'表达两只脚时 foot 的通常复数是 feet，不是 foots；谓语 were 与复数主语配合。'}
    ]},
    {id:'noun-possessive-forms',title:'名词所有格的基本形式',en:'Forms of the possessive',formula:'单数 ’s；规则复数 s’；不以 s 结尾的复数 ’s',take:'先确定名词本身的单复数，再放置所有格撇号。',classification:['单数所有格','规则复数所有格','不规则复数所有格','of 与双重所有格'],steps:[
      ['单数名词通常加 ’s','the teacher’s desk、a child’s coat 在单数名词后加 ’s。所有格不只表达法律上的拥有，也可表达时间、关系等，如 a day’s work、the school’s reputation。'],
      ['规则复数以 s 结尾时通常只加撇号','the teachers’ room 中 teachers 已是复数，通常在末尾 s 后加撇号。不要再写 teachers’s，也不要把撇号误放在复数 s 前而无意改成单数所属。'],
      ['不规则复数仍要按实际词尾处理','children、men、women 等复数不以 s 结尾，通常加 ’s，如 children’s books、women’s shoes。先写对复数，再决定所有格形式，不能一看到复数就只在词尾加撇号。'],
      ['of 与 ’s 要按习惯和结构选择','the roof of the building 与 the building’s roof 都可能自然，不能规定无生命物一律不能用 ’s。a friend of my father’s 属于双重所有格；人名以 s 结尾时还存在 James’s / James’ 等书写习惯差异。']
    ],examples:[['The children’s shoes are by the door.','孩子们的鞋在门边。','children 为不规则复数，不以 s 结尾，所有格加 ’s。'],['The two teachers’ office is upstairs.','两位老师的办公室在楼上。','teachers 已是以 s 结尾的规则复数，所有格通常在 s 后加撇号。']],quiz:[
      mc('children 的所有格应写为：',["childrens'","children's","childrens's","children"],1,'children 本身已是复数且不以 s 结尾，所有格通常加 ’s。'),
      fill('把 the toys of the children 改为所有格：the ____ toys。',["children's",'children’s'],'children 为不规则复数，所有格为 children’s。'),
      mc('两位老师共有的办公室，可写为：',["the two teacher's office","the two teachers' office","the two teachers's office","the two teachers office's"],1,'先把 teacher 变为 two teachers，再在复数 s 后加所有格撇号，中心名词 office 保持本句单数。')
    ],related:['noun-joint-possessive','noun-plural-irregular','possession'],pitfalls:[
      {title:'children 不是以 s 结尾的规则复数',wrong:"The childrens' coats are wet.",right:"The children's coats are wet.",text:'children 是 child 的不规则复数，不以 s 结尾，所有格应加 ’s。'},
      {title:'规则复数 s 后通常只加撇号',wrong:"The two girls's bags are on the shelf.",right:"The two girls' bags are on the shelf.",text:'girls 已是以 s 结尾的复数，通常直接在 s 后加撇号，不再重复添加 s。'}
    ]},
    {id:'noun-joint-possessive',title:'共同所有与分别所有',en:'Joint and separate possession',formula:'Tom and Mary’s room；Tom’s and Mary’s rooms',take:'先说清是共用一个对象还是各自拥有，再核对所有格和中心名词的数。',classification:['共同拥有','分别拥有','中心名词单复数','用改写消除歧义'],steps:[
      ['共同拥有时通常只在最后一个名字后加 ’s','Tom and Mary’s room 常表示汤姆与玛丽共用的房间。Tom and Mary 整体共同限定 room，因此通常在最后一个名字后加 ’s；这是常用表达方式，不是脱离语境判断所有权的法律公式。'],
      ['分别拥有时通常分别标所有格','Tom’s and Mary’s rooms 常表示汤姆的房间和玛丽的房间；中心名词使用复数 rooms，帮助呈现不止一个对象。是否共用还需结合上下文，不能只见一个撇号就推断全部现实关系。'],
      ['谓语由所属对象的中心名词决定','Tom and Mary’s car is outside 的主语中心是单数 car，不能因名字有两个人就用 are；Tom’s and Mary’s cars are outside 中中心是复数 cars，因此用 are。'],
      ['复杂对象或混合代词时优先改写','如果多个名字、多个对象让关系不清，可写 the room that Tom and Mary share，或 Tom has a room and Mary has another。人名与 my 等物主限定词混用有不同习惯，初学写作可选择更清楚的完整改写。']
    ],examples:[["Tom and Mary's car is in the garage.",'汤姆和玛丽共用的汽车在车库里。','通常只在最后一个名字后标所有格；本句指一辆共同使用的车，car 配 is。'],["Tom's and Mary's cars are parked outside.",'汤姆的车和玛丽的车分别停在外面。','分别标所有格，并用复数 cars 交代各自的车辆；谓语用 are。']],quiz:[
      mc("Tom and Mary's room 在通常的共同所有读法中表示：",['汤姆与玛丽共用的房间','汤姆和玛丽一定各有十个房间','Mary 是 room 的复数','任何语境都只能指玛丽的房间'],0,'此种结构通常把两个名字作为共同拥有者；实际关系仍应结合上下文。'),
      fill("Anna and ____ (Ben) laboratory 表示两人共有的一个实验室。",["Ben's",'Ben’s'],'共同所有的常用结构只在最后一个名字后加 ’s，构成 Anna and Ben’s laboratory。'),
      mc("Tom's and Mary's cars ____ outside.（两人各自的车辆）",['is','are','has','be'],1,'主语中心 cars 是复数，谓语用 are；名字数量不是直接判断谓语形式的唯一依据。')
    ],related:['noun-possessive-forms','agreement','noun-phrase'],pitfalls:[
      {title:'共用一辆车时谓语看单数 car',wrong:"Tom and Mary's car are in the garage.",right:"Tom and Mary's car is in the garage.",text:'本句明确指两人共用的一辆车，主语中心 car 是单数，谓语用 is；不能按两个拥有者的数量选 are。'},
      {title:'分别拥有多辆车时谓语看复数 cars',wrong:"Tom's and Mary's cars is outside.",right:"Tom's and Mary's cars are outside.",text:'本句中心是复数 cars，分别标所有格说明各自所属，谓语应与 cars 配合为 are。'}
    ]}
  ];
  const details={};
  for(const e of entries){
    add('parts',e.id,e.title,e.en,'基础',source,e.formula,e.take,e.steps,e.examples,e.quiz,e.related);
    details[e.id]={classification:e.classification,pitfalls:e.pitfalls};
  }
  window.LESSON_DETAILS={...(window.LESSON_DETAILS||{}),...details};
})();
