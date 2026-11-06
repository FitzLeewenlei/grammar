/* Word-class game adapted from the user-supplied grammar-drag-game prototype. */
(() => {
  const types={
    noun:{label:'名词',en:'Noun',shape:'square',color:'#7897ad',description:'表示人、事物、地点或抽象概念。'},
    verb:{label:'动词',en:'Verb',shape:'triangle',color:'#7c8fa6',description:'表示动作或状态；助动词、情态动词也归入动词。'},
    pronoun:{label:'代词',en:'Pronoun',shape:'oval',color:'#899eac',description:'代替名词或名词短语，也包括本游戏中的关系代词。'},
    article:{label:'冠词',en:'Article',shape:'diamond',color:'#a59aae',description:'a、an、the，放在名词短语前表示泛指或特指。'},
    adjective:{label:'形容词',en:'Adjective',shape:'circle',color:'#8fa59a',description:'描述名词的性质，或在系动词后说明主语的状态。'},
    adverb:{label:'副词',en:'Adverb',shape:'star',color:'#b1a17e',description:'修饰动词、形容词、副词或整句；也包括连接副词 why。'},
    preposition:{label:'介词',en:'Preposition',shape:'hexagon',color:'#92a8a4',description:'与名词性成分组成短语，表示地点、时间、方式等关系。'},
    conjunction:{label:'连词',en:'Conjunction',shape:'link',color:'#ad98a2',description:'连接词、短语或分句，如 and、because、although。'},
    numeral:{label:'数词',en:'Numeral',shape:'bars',color:'#9fa691',description:'表示数量或顺序，包括基数词与序数词。'},
    interjection:{label:'感叹词',en:'Interjection',shape:'burst',color:'#b29b87',description:'独立表达惊讶、疼痛等情绪，如 wow、oh、ouch。'}
  };
  const codes={n:'noun',v:'verb',pro:'pronoun',art:'article',adj:'adjective',adv:'adverb',prep:'preposition',conj:'conjunction',num:'numeral',int:'interjection'};
  const stages=[
    {id:1,title:'句子起步',range:[1,10],description:'名词、动词 → 代词、冠词'},
    {id:2,title:'修饰与关系',range:[11,20],description:'加入形容词、副词、介词'},
    {id:3,title:'连接与数量',range:[21,30],description:'加入连词、数词'},
    {id:4,title:'情绪与复合句',range:[31,40],description:'加入感叹词，辨认从句中的词性'},
    {id:5,title:'长句挑战',range:[41,50],description:'十大词类综合，结合上下文判断'}
  ];
  const rows=[
    ['Birds/n fly./v','鸟儿飞翔。','Birds 表示事物，fly 表示动作。'],
    ['Cats/n sleep./v','猫咪睡觉。','先找动作 sleep，再看谁在睡觉。'],
    ['She/pro sings./v','她唱歌。','She 代替人物名词，是人称代词。'],
    ['They/pro laugh./v','他们笑了。','They 是代词；laugh 是谓语动词。'],
    ['Children/n play./v','孩子们玩耍。','名词的复数形式仍然是名词。'],
    ['We/pro read./v','我们阅读。','We 作主语，词性为代词；read 为动词。'],
    ['A/art dog/n barks./v','一只狗在叫。','A 放在单数可数名词 dog 前，是不定冠词。'],
    ['The/art sun/n shines./v','太阳照耀着。','The 是定冠词；sun 是名词。'],
    ['He/pro reads/v a/art book./n','他读一本书。','不要把作宾语的名词 book 和动词 reads 混淆。'],
    ['The/art teacher/n helps/v us./pro','老师帮助我们。','us 是代词的宾格形式，词性仍是代词。'],
    ['The/art clever/adj boy/n runs./v','聪明的男孩跑步。','clever 描述 boy 的特征，是形容词。'],
    ['A/art small/adj bird/n sings./v','一只小鸟在歌唱。','small 修饰名词 bird。'],
    ['She/pro is/v happy./adj','她很开心。','is 是系动词；happy 作表语，词性是形容词。'],
    ['The/art children/n laugh/v loudly./adv','孩子们大声地笑。','loudly 修饰动作 laugh，是副词。'],
    ['He/pro reads/v very/adv carefully./adv','他读得非常仔细。','carefully 修饰 reads，very 再修饰副词 carefully。'],
    ['The/art clever/adj boy/n runs/v quickly./adv','聪明的男孩跑得很快。','clever 描述男孩，quickly 描述跑的方式。'],
    ['The/art cat/n sleeps/v under/prep the/art table./n','猫睡在桌子下面。','under 与 the table 组成介词短语。'],
    ['We/pro walk/v slowly/adv through/prep the/art park./n','我们慢慢地穿过公园。','slowly 修饰 walk；through 后接名词短语。'],
    ['A/art bright/adj star/n shines/v above/prep us./pro','一颗明亮的星星在我们上方闪耀。','above 后接代词 us，在这里是介词。'],
    ['The/art young/adj teacher/n explains/v the/art lesson/n patiently./adv','年轻的老师耐心地讲解课文。','young 修饰 teacher；patiently 修饰 explains。'],
    ['Birds/n sing/v and/conj children/n laugh./v','鸟儿唱歌，孩子们欢笑。','and 连接两个分句，是并列连词。'],
    ['She/pro reads/v while/conj he/pro cooks./v','她看书，而他做饭。','while 后面是 he cooks 这个分句，因此是连词。'],
    ['We/pro stayed/v inside/adv because/conj it/pro rained./v','因为下雨，我们待在室内。','inside 后没有名词性宾语，在这里是地点副词。'],
    ['The/art road/n was/v narrow/adj but/conj safe./adj','这条路狭窄但安全。','but 连接两个表语形容词 narrow 和 safe。'],
    ['If/conj you/pro practice/v regularly,/adv you/pro improve./v','如果你经常练习，就会进步。','If 引导条件从句；regularly 表示练习的频率。'],
    ['Three/num children/n play/v outside./adv','三个孩子在外面玩。','Three 表示数量，是数词；outside 在这里单独作副词。'],
    ['The/art first/num bus/n arrives/v early./adv','第一班公交车到得早。','first 表示顺序，是序数词；early 修饰 arrives。'],
    ['Two/num small/adj dogs/n sleep/v beside/prep the/art door./n','两只小狗睡在门旁。','Two 表示数量，small 表示特征，beside 表示位置关系。'],
    ['She/pro bought/v three/num books/n and/conj two/num pencils./n','她买了三本书和两支铅笔。','three 与 two 都是基数词；and 连接两个名词短语。'],
    ['The/art second/num team/n worked/v carefully/adv and/conj finished/v early./adv','第二组认真工作，并且很早就完成了。','second 是序数词；worked 和 finished 都是动词。'],
    ['Wow,/int the/art flowers/n are/v beautiful!/adj','哇，这些花真美！','Wow 独立表达赞叹，是感叹词。'],
    ['Oh,/int I/pro left/v the/art keys/n at/prep home./n','哦，我把钥匙落在家里了。','Oh 是感叹词；home 在 at home 中是介词的名词性宾语。'],
    ['Ouch!/int That/pro hurts./v','哎哟！真疼。','That 在这里独立指代使人疼痛的事情，是代词。'],
    ['Hey,/int two/num young/adj musicians/n are/v playing/v outside./adv','嘿，两位年轻的音乐家正在外面演奏。','are 是助动词，playing 是主要动词；两者都归入动词。'],
    ['Ah,/int the/art first/num answer/n was/v almost/adv correct./adj','啊，第一个答案几乎正确。','almost 修饰形容词 correct；first 是序数词。'],
    ['The/art student/n who/pro answered/v correctly/adv received/v a/art prize./n','回答正确的学生获得了奖品。','who 是关系代词，在定语从句中作主语。'],
    ['I/pro know/v that/conj she/pro works/v very/adv hard./adv','我知道她工作非常努力。','that 在这里引导宾语从句，是连词；hard 修饰 works，是副词。'],
    ['Although/conj the/art task/n was/v difficult,/adj the/art three/num students/n finished/v it/pro successfully./adv','尽管任务很难，三位学生还是成功完成了。','Although 引导让步从句；it 是代词，successfully 是副词。'],
    ['The/art book/n that/pro you/pro borrowed/v yesterday/adv belongs/v to/prep the/art library./n','你昨天借的那本书属于图书馆。','that 是关系代词，在定语从句中作 borrowed 的宾语；to 是介词。'],
    ['Wow,/int the/art first/num small/adj robot/n moves/v quickly/adv and/conj follows/v us/pro around/prep the/art room./n','哇，第一个小机器人移动很快，还跟着我们在房间里转。','本关包含十大词类。around 后接 the room，因此是介词。'],
    ['The/art careful/adj scientist/n recorded/v three/num unusual/adj results/n after/conj the/art machine/n suddenly/adv stopped./v','那位细心的科学家在机器突然停转后记录了三个异常结果。','after 后是完整分句 the machine suddenly stopped，在这里是连词。'],
    ['When/conj the/art rain/n finally/adv stopped,/v we/pro carried/v two/num heavy/adj boxes/n into/prep the/art house./n','雨终于停了以后，我们把两个沉重的箱子搬进屋里。','When 引导时间从句；into 与 the house 组成介词短语。'],
    ['The/art teacher/n explained/v why/adv the/art second/num sentence/n sounded/v strange,/adj and/conj everyone/pro listened/v carefully./adv','老师解释了第二句话为什么听起来奇怪，大家都认真听着。','why 是连接副词，表示原因；sounded 是系动词，strange 是形容词。'],
    ['The/art girl/n whose/pro brother/n won/v the/art first/num prize/n smiled/v proudly/adv beside/prep the/art stage./n','哥哥获得一等奖的女孩在舞台旁自豪地笑了。','whose 是表示所属关系的关系代词；proudly 修饰 smiled。'],
    ['Although/conj three/num tired/adj travelers/n had/v lost/v the/art map,/n they/pro eventually/adv found/v a/art safe/adj path./n','尽管三个疲惫的旅行者丢了地图，他们最终还是找到了安全的小路。','had 是助动词；tired 在这里描述 travelers 的状态，是形容词。'],
    ['Oh,/int I/pro thought/v that/conj the/art two/num new/adj students/n were/v already/adv waiting/v outside/prep the/art classroom./n','哦，我以为那两个新同学已经在教室外等着了。','that 引导宾语从句；outside 后接 the classroom，在这里是介词。'],
    ['The/art curious/adj child/n asked/v whether/conj the/art tiny/adj machine/n could/v really/adv solve/v three/num difficult/adj problems./n','好奇的孩子问，那台小机器是否真的能解决三个难题。','whether 是连词；could 是情态动词，也归入动词。'],
    ['Wow,/int the/art first/num team/n worked/v remarkably/adv well/adv because/conj the/art young/adj coach/n had/v given/v them/pro clear/adj instructions./n','哇，第一组表现得特别好，因为年轻的教练给了他们清晰的指令。','remarkably 修饰副词 well；them 是宾格代词；had given 中两词都是动词。'],
    ['If/conj the/art three/num new/adj players/n practice/v patiently,/adv they/pro will/v soon/adv perform/v confidently/adv in/prep the/art final/adj match./n','如果三位新队员耐心练习，他们很快就会在决赛中自信地表现。','will 是情态助动词；final 表示最终的，是形容词，不是数词。'],
    ['Wow,/int although/conj the/art first/num two/num attempts/n were/v unsuccessful,/adj she/pro carefully/adv solved/v the/art difficult/adj puzzle/n with/prep a/art pencil/n and/conj explained/v why/adv the/art answer/n was/v correct./adj','哇，尽管前两次尝试都失败了，她还是用铅笔细心地解出了难题，并解释了答案为什么正确。','综合判断十大词类：first 与 two 是数词，why 是连接副词，with 是介词。']
  ];
  const introduced=new Set();
  const levels=rows.map(([tagged,translation,note],i)=>{
    const words=tagged.split(' ').map(token=>{const cut=token.lastIndexOf('/'),text=token.slice(0,cut),type=codes[token.slice(cut+1)];if(!text||!type)throw Error(`Invalid game token ${token}`);introduced.add(type);return {text,type};});
    return {id:i+1,stage:Math.floor(i/10)+1,words,sentence:words.map(w=>w.text).join(' '),translation,note,availableTypes:[...introduced]};
  });
  const grade=(level,placements)=>{
    const missing=[],wrong=[],correct=[];
    level.words.forEach((word,i)=>{if(!types[placements[i]])missing.push(i);else(placements[i]===word.type?correct:wrong).push(i);});
    return {missing,wrong,correct,passed:missing.length===0&&wrong.length===0};
  };
  const games=[{id:'drag',title:'词性积木',description:'把词性积木放到对应单词下方',levels:50}];
  window.GRAMMAR_GAMES_DATA={types,stages,levels,games,grade};
})();
