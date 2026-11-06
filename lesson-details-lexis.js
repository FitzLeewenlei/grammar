/* Beginner-first explanations. Existing lesson IDs and exercises stay unchanged. */
(() => {
  const details = {
  "skeleton": {
    "definition": "学句子，先找两件事：说的是谁或什么，以及它做什么、是什么样。前一部分叫“主语”；说明动作或状态的部分叫“谓语”。",
    "classification": [
      "主语：说的是谁或什么",
      "谓语：做什么或怎么样",
      "宾语：动作指向谁或什么",
      "表语：说明主语的样子"
    ],
    "usage": [
      {
        "h": "先找说的是谁",
        "t": "Tom runs. 的意思是“汤姆跑步”。Tom 是我们在说的人，所以 Tom 是主语。"
      },
      {
        "h": "再找动作或状态",
        "t": "Tom runs. 中 runs 是“跑步”，说明 Tom 做什么。Tom is happy. 中 is 把 Tom 和 happy（开心的）连起来，说明他的状态。"
      },
      {
        "h": "动作后面可以有人或东西",
        "t": "I like cats. 是“我喜欢猫”。cats 是喜欢的对象，叫宾语；先记住“谁做什么，对着谁或什么”就能开始读句子。"
      },
      {
        "h": "再了解一点：有的动词还要补信息",
        "t": "Mom gives me a book. 说给谁、给什么。I put it on the desk. 还要说放在哪里；不能以为句子里的地点总能删掉。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "说状态时少了 is",
        "wrong": "Tom happy.",
        "right": "Tom is happy.",
        "text": "happy 是“开心的”，不是一个完整的动作说法。介绍 Tom 的状态，要用 is 把两部分连起来。"
      },
      {
        "title": "提问后没有改回基本形式",
        "wrong": "Does Tom likes cats?",
        "right": "Does Tom like cats?",
        "text": "Does 已经帮助我们提问，后面的 like 用最基本的形式，不再加 s。"
      }
    ],
    "examples": [
      {
        "en": "Tom reads a book.",
        "zh": "汤姆读一本书。",
        "note": "Tom 是“谁”，reads 是“做什么”，a book 是读的东西。"
      },
      {
        "en": "The cat is small.",
        "zh": "这只猫很小。",
        "note": "The cat 是句子说的对象，is small 说明它是什么样。small 表示“小的”。"
      }
    ]
  },
  "questions": {
    "definition": "疑问句就是用来问问题的句子。例如“你喜欢猫吗？”、“谁来了？”。不同问题会用到不同的词序；先学最常见的几种。",
    "classification": [
      "问“是不是”",
      "问“谁、什么、哪里”",
      "问谁做了这件事",
      "把问题放进另一句话"
    ],
    "usage": [
      {
        "h": "有 is 或 are，先把它放前面",
        "t": "She is happy. 是“她很开心”。想问“她开心吗”，就说 Is she happy?，把 is 放到 she 前面。"
      },
      {
        "h": "普通动作常请 do 帮忙",
        "t": "You like cats. 变成问题是 Do you like cats?。主语是 he、she、it 时常用 does：Does she like cats?，后面的 like 不加 s。"
      },
      {
        "h": "用疑问词问具体信息",
        "t": "what 问什么，where 问哪里，who 问谁。Who came? 中 who 本来就是“谁来了”的那个“谁”，不需要再加 did。"
      },
      {
        "h": "再了解一点：转述问题时换回平常词序",
        "t": "Where is Tom? 是直接问“汤姆在哪”。I know where Tom is. 是“我知道汤姆在哪”，里面要说 Tom is，不说 is Tom。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "did 后面还用过去形式",
        "wrong": "Did he went home?",
        "right": "Did he go home?",
        "text": "did 已表示在问过去的事。后面的 go 用最基本的形式，不再用 went。"
      },
      {
        "title": "把直接问句顺序放进另一句话",
        "wrong": "I know where is Tom.",
        "right": "I know where Tom is.",
        "text": "这里是在说“我知道”，不是直接问“汤姆在哪”。后面用平常的 Tom is 顺序。"
      }
    ],
    "examples": [
      {
        "en": "Do you like cats?",
        "zh": "你喜欢猫吗？",
        "note": "Do 帮助提出问题；you 是“你”，like 是“喜欢”。"
      },
      {
        "en": "Where is my bag?",
        "zh": "我的包在哪里？",
        "note": "where 问位置。is 放在 my bag 前面，组成问题。"
      }
    ]
  },
  "coordination": {
    "definition": "并列就是把地位相近的两部分放在一起说。最常见的连接词是 and（和、并且）、but（但是）、or（或者）。",
    "classification": [
      "连接两个词",
      "连接两个动作",
      "连接两句话",
      "选择合适的关系"
    ],
    "usage": [
      {
        "h": "用 and 把东西连起来",
        "t": "cats and dogs 是“猫和狗”。I like cats and dogs. 把两种喜欢的动物放在一起说。"
      },
      {
        "h": "一个人可以做两个动作",
        "t": "Tom reads and writes. 是“汤姆读书，也写字”。两个动作都由 Tom 做，后面不必再说一次 Tom。"
      },
      {
        "h": "意思不同，选的连接词也不同",
        "t": "and 加一条信息，but 表示前后有转折，or 给出选择。Tea or milk? 是在问“茶还是牛奶？”。"
      },
      {
        "h": "再了解一点：两句完整的话要连清楚",
        "t": "I am tired. I will rest. 可以分成两句，也可以用 so（所以）连起来。普通正式写作中，不要只放一个逗号把两句拼在一起。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "两句完整的话只用逗号连接",
        "wrong": "I am tired, I will rest.",
        "right": "I am tired, so I will rest.",
        "text": "前后都能单独说成一句话。加上 so，就说清“累了，所以休息”的关系。"
      },
      {
        "title": "两个选择之间重复加连接词",
        "wrong": "You can have tea or and milk.",
        "right": "You can have tea or milk.",
        "text": "想说“茶或者牛奶”，在两者之间用一个 or 就够了。"
      }
    ],
    "examples": [
      {
        "en": "I like cats and dogs.",
        "zh": "我喜欢猫和狗。",
        "note": "and 把 cats 和 dogs 连在一起，表示两种都喜欢。"
      },
      {
        "en": "It is small, but I like it.",
        "zh": "它很小，但是我喜欢它。",
        "note": "but 表示前后有转折：小并没有妨碍我喜欢它。"
      }
    ]
  },
  "reported": {
    "definition": "间接引语就是用自己的话，告诉别人某个人说过什么。例如，汤姆说“我累了”，你转告别人时可以说“汤姆说他累了”。",
    "classification": [
      "转告一句话",
      "转告一个问题",
      "转告要求",
      "换清人物和时间"
    ],
    "usage": [
      {
        "h": "先说明是谁说的",
        "t": "Tom said he was tired. 是“汤姆说他累了”。he 指 Tom；我们从自己的角度转告，不再照抄他说的 I。"
      },
      {
        "h": "转告要求常用 to 加动作",
        "t": "Mom told me to sit down. 是“妈妈叫我坐下”。me 说明叫的是谁，to sit down 说明要做什么。"
      },
      {
        "h": "转告问题时用平常词序",
        "t": "Where do you live? 是直接问“你住哪里”。He asked where I lived. 是“他问我住哪里”，里面不再用 do I live 的提问顺序。"
      },
      {
        "h": "再了解一点：时间说法看真实情况",
        "t": "转告过去的话时，is 常变成 was，will 常变成 would。但如果说的事现在仍成立，就不一定要变；today、here 也只在时间地点变了时才调整。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "told 后少了告诉的人",
        "wrong": "Tom told that he was tired.",
        "right": "Tom told me that he was tired.",
        "text": "这里用 tell，要说明告诉谁，所以加 me。也可以说 Tom said that he was tired。"
      },
      {
        "title": "转告问题时还保留问句顺序",
        "wrong": "He asked where did I live.",
        "right": "He asked where I lived.",
        "text": "这里是在转告他问的内容。用 I lived 的平常顺序，不再加 did I。"
      }
    ],
    "examples": [
      {
        "en": "Tom said he was tired.",
        "zh": "汤姆说他累了。",
        "note": "he 指汤姆。was 把我们带回他说话时的情况。"
      },
      {
        "en": "Mom asked me to sit down.",
        "zh": "妈妈叫我坐下。",
        "note": "me 是被叫的人；to sit down 是妈妈让我做的事。"
      }
    ]
  },
  "there-be": {
    "definition": "there be 用来告诉别人“某个地方有某人或某物”。例如 There is a cat. 就是“有一只猫”，不是说某个人拥有一只猫。",
    "classification": [
      "一个用 there is",
      "多个用 there are",
      "没有与有没有",
      "与 have 的区别"
    ],
    "usage": [
      {
        "h": "一个人或东西，先用 there is",
        "t": "There is a cat on the bed. 是“床上有一只猫”。a cat 是一只猫，所以用 is。"
      },
      {
        "h": "多个人或东西，常用 there are",
        "t": "There are two cats. 是“有两只猫”。two cats 不止一个，所以用 are。"
      },
      {
        "h": "否定和提问也从 is、are 开始",
        "t": "There is not a cat. 是“没有猫”。想问“有猫吗”，把 is 放前面：Is there a cat?。"
      },
      {
        "h": "再了解一点：有变化的是 be",
        "t": "过去可以说 There was a cat.；将来可以说 There will be a cat.。have 常表示谁拥有东西，例如 I have a cat.（我有一只猫）。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "把 there 和 have 拼在一起",
        "wrong": "There have two cats.",
        "right": "There are two cats.",
        "text": "想说“有两只猫”，用 There are。若想说“我有两只猫”，则用 I have two cats。"
      },
      {
        "title": "will 后少了 be",
        "wrong": "There will a bus.",
        "right": "There will be a bus.",
        "text": "will 后还需要 be，才能组成“将会有”。"
      }
    ],
    "examples": [
      {
        "en": "There is a cat on the bed.",
        "zh": "床上有一只猫。",
        "note": "先说 There is a cat，再用 on the bed 说明猫在哪里。"
      },
      {
        "en": "Are there two books?",
        "zh": "有两本书吗？",
        "note": "books 是复数。把 are 放到 there 前面，就是问题。"
      }
    ]
  },
  "parallelism": {
    "definition": "平行结构就是把同一组里的几部分排得清楚、相互配合。例如“喜欢读书和游泳”，读书与游泳都跟在“喜欢”后面。",
    "classification": [
      "同一组里的项目",
      "动作形式要配合",
      "成对的连接词",
      "能省去重复的部分"
    ],
    "usage": [
      {
        "h": "先看两部分都接在哪个词后面",
        "t": "I like apples and bananas. 中，apples 与 bananas 都是喜欢的东西。长度可以不同，但要能放进同一个位置。"
      },
      {
        "h": "动词形式要符合前面的词",
        "t": "She enjoys reading and swimming. 是“她喜欢读书和游泳”。enjoy 后用 reading 这样的 -ing 形式，所以 swimming 也要这样写。"
      },
      {
        "h": "成对的词要接相配的内容",
        "t": "both cats and dogs 表示“猫和狗都……”。both 和 and 之间、and 后面，要分别放清楚要连的两部分。"
      },
      {
        "h": "再了解一点：重复的词可以共用",
        "t": "She wants to read and write. 中，read 与 write 共用前面的 to。不必为了看起来一样，机械地把每个词都重复一遍。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "enjoy 后的第二个动作形式不对",
        "wrong": "I enjoy reading and to swim.",
        "right": "I enjoy reading and swimming.",
        "text": "这里两个动作都跟在 enjoy 后面。把 to swim 改为 swimming，就都符合 enjoy 的用法。"
      },
      {
        "title": "介词后混用动词形式",
        "wrong": "She is good at reading and to write.",
        "right": "She is good at reading and writing.",
        "text": "at 后面说动作时用 -ing，所以第二项用 writing。"
      }
    ],
    "examples": [
      {
        "en": "I like apples and bananas.",
        "zh": "我喜欢苹果和香蕉。",
        "note": "两个名词都放在 like 后面，说明喜欢的东西。"
      },
      {
        "en": "She enjoys reading and swimming.",
        "zh": "她喜欢读书和游泳。",
        "note": "reading 与 swimming 都是她喜欢做的活动。"
      }
    ]
  },
  "auxiliaries": {
    "definition": "助动词像动词的小帮手，帮助我们提问、否定，或说明动作的时间。常见的帮手有 be、do、have；它们有时也会自己表达意思。",
    "classification": [
      "be：am、is、are 等",
      "do：do、does、did",
      "have：have、has、had",
      "看后面的词来判断"
    ],
    "usage": [
      {
        "h": "do 常帮忙提问和否定",
        "t": "Do you like milk? 是“你喜欢牛奶吗？”。I do not like milk. 是“我不喜欢牛奶”；do 本身不是在说“做牛奶”。"
      },
      {
        "h": "be 可以帮忙说明正在做什么",
        "t": "She is reading. 是“她正在读书”。is 与 reading 一起说明正在发生的动作；不能只写 She reading。"
      },
      {
        "h": "have 有时表示有，有时是帮手",
        "t": "She has a cat. 中 has 就是“有”。She has left. 是“她已经走了”，这里 has 帮 left 表达与现在有关的过去动作。"
      },
      {
        "h": "再了解一点：多个帮手有固定顺序",
        "t": "The door has been painted. 是“门已经刷过漆了”。has、been、painted 要按这个顺序配合，不是随便把几个动词放在一起。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "does 后又给动词加 s",
        "wrong": "Does she likes cats?",
        "right": "Does she like cats?",
        "text": "does 已经负责提问和与 she 配合。后面的 like 用原形。"
      },
      {
        "title": "have 后面用了错误形式",
        "wrong": "I have ate.",
        "right": "I have eaten.",
        "text": "have 后需要动词的“过去分词”形式。eat 的这个形式是 eaten，要把它们当一组记。"
      }
    ],
    "examples": [
      {
        "en": "Do you like milk?",
        "zh": "你喜欢牛奶吗？",
        "note": "Do 是提问的小帮手；主要意思仍由 like（喜欢）表达。"
      },
      {
        "en": "She is reading.",
        "zh": "她正在读书。",
        "note": "is 和 reading 合在一起，表示动作正在进行。"
      }
    ]
  },
  "can": {
    "definition": "can 常用来表示“能、会、可以”。它后面的动作词用最基本的形式，例如 can swim（会游泳），不加 to，也不因为说的是 he 或 she 就加 s。",
    "classification": [
      "会不会做",
      "可不可以做",
      "请别人帮忙",
      "could 的常见用法"
    ],
    "usage": [
      {
        "h": "说自己会做什么",
        "t": "I can swim. 是“我会游泳”。She can swim. 中也用 swim，不写 swims。"
      },
      {
        "h": "问别人可不可以",
        "t": "Can I sit here? 是“我可以坐这里吗？”。Can you help me? 是请对方帮忙。"
      },
      {
        "h": "could 可以让请求更客气",
        "t": "Could you help me? 也是请人帮忙，常比 Can you help me? 更客气。这里 could 并不是在问过去的事。"
      },
      {
        "h": "再了解一点：过去和将来的能力",
        "t": "could 可以说过去一般会做的事。强调某一次终于做到了，可用 was able to 或 managed to；说将来能做某事，常用 will be able to。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "can 后多了 to",
        "wrong": "I can to swim.",
        "right": "I can swim.",
        "text": "can 后直接接动作的原形 swim，不加 to。"
      },
      {
        "title": "把 will 与 can 直接放在一起",
        "wrong": "I will can come.",
        "right": "I will be able to come.",
        "text": "说将来能来，用 will be able to come，不把两个情态动词 will 和 can 直接相接。"
      }
    ],
    "examples": [
      {
        "en": "I can swim.",
        "zh": "我会游泳。",
        "note": "can 后面直接接 swim，表示有游泳的能力。"
      },
      {
        "en": "Can you help me?",
        "zh": "你能帮我吗？",
        "note": "Can you…? 常用来请求帮助；help 是“帮助”。"
      }
    ]
  },
  "must": {
    "definition": "must 常表示“必须”。要特别分清：must not 是“不许”，不是“不必”；“不必”可以用 do not have to。",
    "classification": [
      "必须做",
      "不许做",
      "不必做",
      "根据线索作判断"
    ],
    "usage": [
      {
        "h": "must 表示必须做",
        "t": "You must go now. 是“你现在必须走”。must 后面接 go 这样的动词原形。"
      },
      {
        "h": "must not 表示禁止",
        "t": "You must not run here. 是“你不许在这里跑”。这不是说跑不跑都可以，而是说不允许。"
      },
      {
        "h": "不必做是另一种意思",
        "t": "You do not have to go. 是“你不必去”。意思是不要求你去，但你愿意去仍可以。"
      },
      {
        "h": "再了解一点：must 也能表示推测",
        "t": "The light is on. Tom must be home. 表示“灯亮着，汤姆一定在家”。must have left 则可猜测过去已经离开；过去真的必须做某事常用 had to。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "must 后多了 to",
        "wrong": "You must to go.",
        "right": "You must go.",
        "text": "must 后直接用动词原形 go，不加 to。"
      },
      {
        "title": "给 must 加上过去词尾",
        "wrong": "We musted go home.",
        "right": "We had to go home.",
        "text": "过去的“不得不回家”常用 had to。英语没有 musted 这个形式。"
      }
    ],
    "examples": [
      {
        "en": "You must go now.",
        "zh": "你现在必须走。",
        "note": "must 说明这是一项要求，不只是建议。"
      },
      {
        "en": "You must not run here.",
        "zh": "你不许在这里跑。",
        "note": "must not 表示禁止；run 是“跑”。"
      }
    ]
  },
  "should": {
    "definition": "should 常表示“应该”，用来给建议或说明责任。它后面接动作词的原形，例如 should rest（应该休息）。",
    "classification": [
      "给建议",
      "说明应该做的事",
      "表示预计",
      "should have 的用法"
    ],
    "usage": [
      {
        "h": "先用 should 给一个建议",
        "t": "You should rest. 是“你应该休息”。它通常比 must（必须）的要求轻一些。"
      },
      {
        "h": "否定建议用 should not",
        "t": "You should not eat too much. 是“你不应该吃太多”。should not 也可缩写成 shouldn’t。"
      },
      {
        "h": "should 有时表示预计会这样",
        "t": "The bus should come soon. 是“公交车应该快来了”。这里是在说预计，不是在给公交车提建议。"
      },
      {
        "h": "再了解一点：should have 不总表示后悔",
        "t": "You should have called. 常是在说“你之前本该打电话”。The bus should have come by now. 也可能只是预计它现在已到，不能只看这个形式就认定事情没做。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "should 后多了 to",
        "wrong": "You should to rest.",
        "right": "You should rest.",
        "text": "should 后直接接 rest，不需要 to。"
      },
      {
        "title": "should 后的 have 变成 has",
        "wrong": "He should has left.",
        "right": "He should have left.",
        "text": "should 后用原形 have，即使前面是 he，也不把 have 改为 has。"
      }
    ],
    "examples": [
      {
        "en": "You should rest.",
        "zh": "你应该休息。",
        "note": "should 后接 rest，提出休息的建议。"
      },
      {
        "en": "The bus should come soon.",
        "zh": "公交车应该快来了。",
        "note": "should 在这里表示预计；soon 是“很快”。"
      }
    ]
  },
  "countable": {
    "definition": "看一个名词能不能说“一个、两个、三个”，可以帮助我们学习可数与不可数。英语的习惯有时与中文不同，所以也要记住这个词在句子里的实际意思。",
    "classification": [
      "可数：一个、两个",
      "不可数：通常不直接计个数",
      "用杯、瓶、条等单位",
      "同一个词可以换意思"
    ],
    "usage": [
      {
        "h": "可以数个数的名词有单复数",
        "t": "a book 是“一本书”，two books 是“两本书”。这类名词叫可数名词；说一个时，普通名词前面通常还要有 a、the、my 等词。"
      },
      {
        "h": "有些东西通常不这样直接数",
        "t": "water（水）和 rice（米饭）在常见用法中不可数。通常不说 a water 或 two rices 来直接数水和米饭。"
      },
      {
        "h": "想说明数量，就加一个单位",
        "t": "a cup of water 是“一杯水”，two cups of water 是“两杯水”。变成复数的是 cup，不是 water。"
      },
      {
        "h": "再了解一点：可数性跟意思有关",
        "t": "chicken 表“鸡肉”时常不可数，表“一只鸡”时可数。点单时 two coffees 可以表示两杯咖啡；不能据此给所有不可数词随便加 s。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "把 advice 直接变成复数",
        "wrong": "I have two advices.",
        "right": "I have two pieces of advice.",
        "text": "advice 表示“建议”时通常不可数。想说“两条建议”，用 two pieces of advice。"
      },
      {
        "title": "把不可数 furniture 当成复数",
        "wrong": "The furniture are new.",
        "right": "The furniture is new.",
        "text": "furniture 是“家具”的总称，通常不可数。这句话用 is，不用 are。"
      }
    ],
    "examples": [
      {
        "en": "I have two books.",
        "zh": "我有两本书。",
        "note": "book 可以按本数，是可数名词；two 后用复数 books。"
      },
      {
        "en": "I need a cup of water.",
        "zh": "我需要一杯水。",
        "note": "water 在这里不可数，用 a cup 来说清数量。"
      }
    ]
  },
  "articles": {
    "definition": "a、an、the 叫冠词，常放在名词前。a/an 常表示某一个；the 常表示听的人能知道你在说哪一个；有些地方则不用冠词。",
    "classification": [
      "a 或 an：某一个",
      "the：知道是哪一个",
      "零冠词：不放冠词",
      "先看发音，再看句意"
    ],
    "usage": [
      {
        "h": "先学 a 与 an",
        "t": "a cat 是“一只猫”，an egg 是“一个鸡蛋”。选择 a 还是 an，看后面紧接的发音，不是只看字母。"
      },
      {
        "h": "第二次提到同一个东西，常用 the",
        "t": "I have a dog. The dog is small. 先介绍一只狗，再说这只狗很小。第二句对方知道说的是哪只狗，所以用 the。"
      },
      {
        "h": "泛说一类东西时，有时不用冠词",
        "t": "I like cats. 是“我喜欢猫”。这里 cats 泛指猫这类动物，不是在指某几只猫，所以前面没有 a 或 the。"
      },
      {
        "h": "再了解一点：有些搭配要整组记",
        "t": "an hour（一个小时）中 h 不发音，所以用 an；a university（一所大学）的起始音像 y，所以用 a。go to school（上学）与 go to the school（到那所学校去）的意思也可能不同。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "把 a 放在元音发音前",
        "wrong": "I have a egg.",
        "right": "I have an egg.",
        "text": "egg 的起始发音是元音，所以前面用 an。"
      },
      {
        "title": "介绍一个普通单数名词时少了冠词",
        "wrong": "I have dog.",
        "right": "I have a dog.",
        "text": "dog 在这里表示一只狗，是单数可数普通名词。前面要有 a 等词。"
      }
    ],
    "examples": [
      {
        "en": "I have a dog.",
        "zh": "我有一只狗。",
        "note": "a 表示一只，还没有说明具体是哪只。"
      },
      {
        "en": "The dog is small.",
        "zh": "那只狗很小。",
        "note": "the 表示对方能知道我们在说哪只狗。"
      }
    ]
  },
  "possession": {
    "definition": "想说“汤姆的书”“妈妈的包”，可以用名词所有格。最常见的做法是在名字或人物词后面加 ’s；它也可以表示人与人、事物之间的关系。",
    "classification": [
      "一个人或东西的 ’s",
      "复数名词的所有格",
      "两人共有或各有",
      "用 of 表达关系"
    ],
    "usage": [
      {
        "h": "一个人的东西，先学 ’s",
        "t": "Tom’s book 是“汤姆的书”。把 ’s 放在 Tom 后面，不是在 book 后面加。"
      },
      {
        "h": "以 s 结尾的复数，通常只加撇号",
        "t": "the boys’ room 是“男孩们的房间”。boys 已经有复数的 s，所以所有格通常只在它后面加 ’。"
      },
      {
        "h": "有些复数不以 s 结尾",
        "t": "children 是“孩子们”，本身已经是复数。说“孩子们的书”，要用 children’s books，仍加 ’s。"
      },
      {
        "h": "再了解一点：共有和各有要分清",
        "t": "Tom and Ann’s room 常表示两人共用的房间；Tom’s and Ann’s rooms 表示各自的房间。of 也能表达关系，如 the door of the room（房间的门）。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "少了“的”的标记",
        "wrong": "This is Tom book.",
        "right": "This is Tom’s book.",
        "text": "要说“汤姆的书”，在 Tom 后加 ’s。"
      },
      {
        "title": "给 children 用错所有格",
        "wrong": "These are childrens’ books.",
        "right": "These are children’s books.",
        "text": "children 已经是复数，并不以复数 s 结尾。它的所有格是 children’s。"
      }
    ],
    "examples": [
      {
        "en": "This is Tom’s book.",
        "zh": "这是汤姆的书。",
        "note": "Tom’s 表示“汤姆的”，说明书与谁有关。"
      },
      {
        "en": "The boys’ room is big.",
        "zh": "男孩们的房间很大。",
        "note": "boys 是多个男孩；后面的撇号表示“男孩们的”。"
      }
    ]
  },
  "pronouns": {
    "definition": "代词可以帮我们少重复一个名字或名词。例如先说 Tom，后面就可以用 he（他）；先说那本书，后面就可以用 it（它）。",
    "classification": [
      "人称：I、you、he 等",
      "所属：my、mine 等",
      "自己：myself 等",
      "指这个或那个"
    ],
    "usage": [
      {
        "h": "先认出它代替谁",
        "t": "Tom is here. He is happy. 两句中的 Tom 和 He 指同一个人。写代词时，要让别人知道你说的是谁。"
      },
      {
        "h": "做的人与动作对象，用的形式可能不同",
        "t": "I like him. 是“我喜欢他”。I 是做出喜欢这个动作的人；him 是喜欢的对象。这里不写 I like he。"
      },
      {
        "h": "my 后有东西，mine 可以独立说",
        "t": "my book 是“我的书”；This book is mine. 是“这本书是我的”。mine 后面不用再加 book。"
      },
      {
        "h": "再了解一点：代词有很多小类",
        "t": "myself 表“我自己”，this 表“这个”，someone 表“某个人”。不知道一个人的性别时，也可以用 they 指那个人；先学会看清它指向谁。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "动作对象用了 he",
        "wrong": "I like he.",
        "right": "I like him.",
        "text": "he 常放在“谁做事”的位置。这里他是喜欢的对象，所以用 him。"
      },
      {
        "title": "mine 后又接名词",
        "wrong": "This is mine book.",
        "right": "This is my book.",
        "text": "book 前面要用 my。也可以不再说 book，直接说 This is mine。"
      }
    ],
    "examples": [
      {
        "en": "Tom is here. He is happy.",
        "zh": "汤姆在这里。他很开心。",
        "note": "He 代替前面已经提到的 Tom，避免再说一次名字。"
      },
      {
        "en": "This is my book.",
        "zh": "这是我的书。",
        "note": "my 表示“我的”，放在 book 前面。"
      }
    ]
  },
  "quantifiers": {
    "definition": "数量词帮助我们说“很多、一些、很少”。选择时先看后面的名词是能数个数的，还是通常不能直接数个数的。",
    "classification": [
      "many：很多个",
      "much：很多的量",
      "a few 与 a little",
      "some 与 any"
    ],
    "usage": [
      {
        "h": "能数个数的，常用 many",
        "t": "many books 是“很多书”。books 可以按本数，many 后面通常接这样的复数名词。"
      },
      {
        "h": "不可数的量，常用 much",
        "t": "much water 是“很多水”。想说一点水，可以用 a little water；想说几本书，用 a few books。"
      },
      {
        "h": "a few 与 few 的重点不同",
        "t": "a few books 表示“有几本书”；few books 常强调“书很少，几乎没有”。a little 与 little 也有相似差别。"
      },
      {
        "h": "再了解一点：some 不只用在肯定句",
        "t": "Would you like some tea? 是请人喝茶，所以问句里也能用 some。any 除了疑问和否定，也可表示“任何一个”，如 Choose any book.。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "用 much 直接数书",
        "wrong": "I have much books.",
        "right": "I have many books.",
        "text": "books 是可以数个数的复数名词，前面用 many。"
      },
      {
        "title": "用 a few 说不可数的水",
        "wrong": "We need a few water.",
        "right": "We need a little water.",
        "text": "water 通常不可数。说“一点水”用 a little water。"
      }
    ],
    "examples": [
      {
        "en": "I have a few books.",
        "zh": "我有几本书。",
        "note": "a few 表示有一些；books 是可以按本数的复数名词。"
      },
      {
        "en": "We need a little water.",
        "zh": "我们需要一点水。",
        "note": "a little 说明水的量不多，但确实需要一些。"
      }
    ]
  },
  "adjadv": {
    "definition": "形容词常告诉我们人或东西“是什么样”；副词常告诉我们一个动作“怎样做”。例如 a slow bus 是“慢的公交车”，walk slowly 是“慢慢地走”。",
    "classification": [
      "形容词：描述人或东西",
      "副词：说明动作怎样做",
      "be 后说明状态",
      "词尾不能决定一切"
    ],
    "usage": [
      {
        "h": "先看它在描述什么",
        "t": "a small cat 中 small 描述 cat，所以是形容词。The cat is small. 中 small 仍然描述猫，位置换了，词性没有变。"
      },
      {
        "h": "说明动作的方式，常用副词",
        "t": "He reads carefully. 是“他读得很仔细”。carefully 说明读的方式，不是在描述他这个人长什么样。"
      },
      {
        "h": "有些动词后面是在说状态",
        "t": "The soup smells good. 是“汤闻起来很好”。good 描述汤的味道，不是在说明汤怎样闻东西。"
      },
      {
        "h": "再了解一点：不要只认 -ly",
        "t": "carefully 是副词，但 friendly（友好的）通常是形容词。fast 可以直接表示“快地”，hard（努力地）与 hardly（几乎不）意思也不同。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "说人的状态时用了副词",
        "wrong": "She is happily.",
        "right": "She is happy.",
        "text": "这里要说“她很开心”，用形容词 happy。happily 常说明动作的方式，不能这样单独接在 is 后面。"
      },
      {
        "title": "说明读的方式时用了形容词",
        "wrong": "He reads careful.",
        "right": "He reads carefully.",
        "text": "这里是在说他读得怎样，所以用副词 carefully。"
      }
    ],
    "examples": [
      {
        "en": "The cat is small.",
        "zh": "这只猫很小。",
        "note": "small 描述猫的样子，是形容词。"
      },
      {
        "en": "He reads carefully.",
        "zh": "他读得很仔细。",
        "note": "carefully 说明读这个动作做得怎样，是副词。"
      }
    ]
  },
  "ing-ed": {
    "definition": "有些形容词有 -ing 和 -ed 两种样子。先用一个例子记住：a boring book 是“让人无聊的书”，a bored child 是“感到无聊的孩子”。",
    "classification": [
      "-ing：让人有某种感觉",
      "-ed：自己有某种感觉",
      "要看想表达的意思",
      "常见词组一起记"
    ],
    "usage": [
      {
        "h": "-ing 常说是什么让人产生感受",
        "t": "This book is boring. 是“这本书让人觉得无聊”。boring 在描述书带给人的感觉。"
      },
      {
        "h": "-ed 常说谁感到怎样",
        "t": "I am bored. 是“我感到无聊”。bored 说明我的感受，不是在说我会让别人无聊。"
      },
      {
        "h": "人也可以让别人有感受",
        "t": "Tom is interesting. 是“汤姆很有趣”；Tom is interested. 是“汤姆感兴趣”。两句都可能正确，取决于想说什么。"
      },
      {
        "h": "再了解一点：看一整组结构",
        "t": "be interested in 是“对……感兴趣”，要一起记。She is reading. 中 reading 是动作“正在读”，不属于本卡片的感受形容词用法。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "interested 后用错介词",
        "wrong": "I am interested on music.",
        "right": "I am interested in music.",
        "text": "说“对音乐感兴趣”，用 interested in，不用 interested on。"
      },
      {
        "title": "少了感受形容词的词尾",
        "wrong": "I am very interest in music.",
        "right": "I am very interested in music.",
        "text": "interest 是名词或动词的形式；这里说我的感受，要用 interested。"
      }
    ],
    "examples": [
      {
        "en": "This book is boring.",
        "zh": "这本书很无聊。",
        "note": "boring 表示书让人觉得无聊。"
      },
      {
        "en": "I am bored.",
        "zh": "我感到无聊。",
        "note": "bored 表示我自己有无聊的感觉。"
      }
    ]
  },
  "comparison": {
    "definition": "比较就是把人或东西放在一起，看谁更高、谁更小，或两者是否一样。英语常改变形容词，或加上 more 来表达“更……”。",
    "classification": [
      "原级：基本的样子",
      "比较级：更……",
      "最高级：一组里最……",
      "as…as：一样……"
    ],
    "usage": [
      {
        "h": "先学两个东西比较",
        "t": "tall 是“高的”，taller 是“更高的”。Tom is taller than Ann. 就是“汤姆比安更高”；than 引出比较的另一方。"
      },
      {
        "h": "说一样，用 as…as",
        "t": "Tom is as tall as Ann. 表示两人一样高。两个 as 中间用 tall 的基本形式，不用 taller。"
      },
      {
        "h": "在一组里说最……",
        "t": "the smallest cat 是“最小的猫”。通常要让别人知道是在和哪一组比较，不是随便加一个“最”就能说明范围。"
      },
      {
        "h": "再了解一点：有些词要特别记",
        "t": "good 的比较级是 better，不是 gooder。比较时也要比较同类东西；“这里的天气”和“那里的人”不是同一类比较对象。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "“更”用了两次",
        "wrong": "This bag is more smaller.",
        "right": "This bag is smaller.",
        "text": "smaller 已经表示“更小”，不再在前面加 more。"
      },
      {
        "title": "one of 后用单数",
        "wrong": "It is one of the best book.",
        "right": "It is one of the best books.",
        "text": "one of 是“一组中的一个”。那一组有多本书，所以后面用 books。"
      }
    ],
    "examples": [
      {
        "en": "Tom is taller than Ann.",
        "zh": "汤姆比安高。",
        "note": "taller 表示更高；than 后面是比较的另一方 Ann。"
      },
      {
        "en": "This is the smallest cat.",
        "zh": "这是最小的猫。",
        "note": "smallest 表示在谈到的那组猫里最小。"
      }
    ]
  },
  "degree-order": {
    "definition": "副词可以说多久做一次、做得怎样、什么时候做。有些常放在动作前，有些常放在动作后；先学常见说法，再看特殊情况。",
    "classification": [
      "次数：often、usually",
      "方式：slowly、carefully",
      "时间：today、now",
      "程度：very、enough"
    ],
    "usage": [
      {
        "h": "often 常放在普通动作前",
        "t": "I often read. 是“我经常读书”。如果用 be 说明状态，often 常在 be 后，如 He is often late.（他经常迟到）。"
      },
      {
        "h": "说明做得怎样，常放在动作或对象后",
        "t": "She reads slowly. 是“她慢慢地读”。She reads the book slowly. 中 slowly 也放在读的东西后面。"
      },
      {
        "h": "enough 要看后面说什么",
        "t": "enough water 是“足够的水”；warm enough 是“足够暖”。enough 说明名词数量时常放前面，说明形容词程度时常放后面。"
      },
      {
        "h": "再了解一点：常见位置不是唯一位置",
        "t": "为了强调或接上前文，副词位置有时会变。先看清它到底在说明哪个词，不要把所有副词都硬放在同一处。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "enough 说明温度时放反了",
        "wrong": "The room is enough warm.",
        "right": "The room is warm enough.",
        "text": "这里 enough 说明 warm 有多暖，通常放在 warm 后面。"
      },
      {
        "title": "very 放在比较级前",
        "wrong": "This book is very better.",
        "right": "This book is much better.",
        "text": "better 已经是“更好”。想说“好得多”，用 much better，通常不用 very better。"
      }
    ],
    "examples": [
      {
        "en": "I often read at home.",
        "zh": "我经常在家读书。",
        "note": "often 表示经常做，放在普通动作 read 前面。"
      },
      {
        "en": "The room is warm enough.",
        "zh": "房间足够暖和。",
        "note": "enough 说明 warm 的程度，所以放在 warm 后面。"
      }
    ]
  },
  "prepositions": {
    "definition": "介词常是 in、on、at 这样的小词。它们和后面的词放在一起，可以说清“在哪里、什么时候、用什么”等关系。",
    "classification": [
      "地点：in、on、at",
      "时间：at、on、in",
      "方向：to、into",
      "后面接人或东西"
    ],
    "usage": [
      {
        "h": "用一个位置例子开始",
        "t": "on the desk 是“在桌上”。The book is on the desk. 中，这一组词说明书在哪里。"
      },
      {
        "h": "时间要按常见搭配记",
        "t": "at six 是“在六点”，on Monday 是“在周一”，in May 是“在五月”。不要把中文里的“在”都换成同一个英语词。"
      },
      {
        "h": "后面有人时，要选对形式",
        "t": "with me 是“和我一起”，不是 with I。介词后通常接名词，或 me、him、her 这样的代词形式。"
      },
      {
        "h": "再了解一点：后面结构不同，词的作用也不同",
        "t": "after school 是“放学后”，after 后接 school；after school ends 是“学校放学以后”，后面有完整动作关系。look forward to（盼望）中的 to 后用 -ing，不能套 want to（想要）的用法。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "介词后用错代词",
        "wrong": "Come with I.",
        "right": "Come with me.",
        "text": "with 后面表示“我”时用 me，不用 I。"
      },
      {
        "title": "because of 后直接放一句完整的话",
        "wrong": "We stayed because of it rained.",
        "right": "We stayed because it rained.",
        "text": "because 后可以接“下雨了”这句话。because of 后通常接一个名词说法，例如 the rain。"
      }
    ],
    "examples": [
      {
        "en": "The book is on the desk.",
        "zh": "书在桌上。",
        "note": "on the desk 是一组位置说法，说明书在哪里。"
      },
      {
        "en": "I go to school at eight.",
        "zh": "我八点去学校。",
        "note": "to school 说明去哪里；at eight 说明几点去。"
      }
    ]
  },
  "phrasal": {
    "definition": "有些动词会和旁边的小词组成一个常用说法，要放在一起理解。例如 turn off 是“关掉”，look after 是“照顾”。",
    "classification": [
      "整组词一起记",
      "有些可以拆开放",
      "有些不能拆开",
      "代词放在哪里"
    ],
    "usage": [
      {
        "h": "先记一个常见动作",
        "t": "Turn off the light. 是“关灯”。不要把 turn 和 off 分开逐字翻译，要把 turn off 当成一组学。"
      },
      {
        "h": "有些组合可以把东西放在中间",
        "t": "Turn the light off. 也能表示关灯。如果用 it 代替灯，通常说 Turn it off.。"
      },
      {
        "h": "有些组合不能这样拆",
        "t": "look after the cat 是“照顾猫”。这里 look after 要连着用，不把 cat 放进它们中间。"
      },
      {
        "h": "再了解一点：同一组合可能有不同意思",
        "t": "work out 可表示算出来，也可表示锻炼，意思要看句子。has been working 是说明动作时间的一组动词，不是本卡片说的这种固定词组。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "it 放在可拆词组的后面",
        "wrong": "Please turn off it.",
        "right": "Please turn it off.",
        "text": "用 it 代替灯等东西时，通常把 it 放在 turn 与 off 之间。"
      },
      {
        "title": "拆开 look after",
        "wrong": "Please look the cat after.",
        "right": "Please look after the cat.",
        "text": "look after 表示“照顾”，这一组不能照着 turn off 的方式拆开。"
      }
    ],
    "examples": [
      {
        "en": "Please turn off the light.",
        "zh": "请关灯。",
        "note": "turn off 整组表示“关掉”。"
      },
      {
        "en": "I look after the cat.",
        "zh": "我照顾这只猫。",
        "note": "look after 整组表示“照顾”，the cat 是照顾的对象。"
      }
    ]
  },
  "noun-types": {
    "definition": "名词是给人、东西、地方等起名字的词。比如 Tom 是人名，cat 是动物名，school 是地方名；“快乐、勇气”这类感受和想法也能用名词表示。",
    "classification": [
      "专有名词：特定名字",
      "普通名词：一类的名字",
      "具体与抽象：看所指意思",
      "可数性：看能否计个数"
    ],
    "usage": [
      {
        "h": "先分特定名字与类别名字",
        "t": "Tom 是某个人的名字，属于专有名词。boy 是“男孩”这一类人的名字，属于普通名词；两种都可以出现在句子里。"
      },
      {
        "h": "普通名词还可以继续分",
        "t": "a cat 指一个个体，family 指一组家人，water 指一种物质，love 指一种感情。下一级卡片会分别说明这些类别。"
      },
      {
        "h": "分类有不同角度",
        "t": "book 可以同时是普通名词、具体名词和可数名词。这些标签是在回答不同问题，不是只能挑一个。"
      },
      {
        "h": "再了解一点：不要用一个标签推断所有用法",
        "t": "抽象名词不一定永远不可数。experience 表“经验”时常不可数，表“一次经历”时可数；集体名词的动词搭配还可能受英美用法影响。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "人名首字母没有大写",
        "wrong": "tom is my friend.",
        "right": "Tom is my friend.",
        "text": "Tom 是人名，英语书写时名字的首字母要大写。"
      },
      {
        "title": "普通物质名词误用 are",
        "wrong": "Water are cold.",
        "right": "Water is cold.",
        "text": "water 在这里表示水，不可数。说明它的状态时用 is，不用 are。"
      }
    ],
    "examples": [
      {
        "en": "Tom has a cat.",
        "zh": "汤姆有一只猫。",
        "note": "Tom 是特定的人名；cat 是一类动物的普通名字。"
      },
      {
        "en": "Love is important.",
        "zh": "爱很重要。",
        "note": "love 表示一种感情，看不见也摸不到，常作为抽象名词学习。"
      }
    ]
  },
  "noun-plurals": {
    "definition": "说一个时用单数，说两个或更多时，可数名词常用复数。例如 one book 是一本书，two books 是两本书。复数不总是直接加 s。",
    "classification": [
      "大多数加 s",
      "有些加 es",
      "有些改变拼写",
      "有些单复数一样"
    ],
    "usage": [
      {
        "h": "先学最常见的加 s",
        "t": "book 变 books，cat 变 cats。数词 two、three 等后面，要按实际数量用复数。"
      },
      {
        "h": "再看加 es 与改 y",
        "t": "box 变 boxes。city 结尾是辅音字母加 y，通常改成 cities；boy 则变成 boys。"
      },
      {
        "h": "有些形式要直接记住",
        "t": "child 的复数是 children，不是 childs。sheep 的单数和复数都写 sheep，要看 one、two 等词来判断数量。"
      },
      {
        "h": "再了解一点：几个词组成的名词可能改中间",
        "t": "mother-in-law 的复数是 mothers-in-law。two cups of water 则只把单位 cup 变成 cups；不能把所有组成词都加 s。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "child 的复数写成 childs",
        "wrong": "Two childs are here.",
        "right": "Two children are here.",
        "text": "child 的复数要写 children，不是直接加 s。"
      },
      {
        "title": "city 的复数没有改拼写",
        "wrong": "These citys are big.",
        "right": "These cities are big.",
        "text": "city 的 y 前是辅音字母，复数通常把 y 改成 ies。"
      }
    ],
    "examples": [
      {
        "en": "I have two cats.",
        "zh": "我有两只猫。",
        "note": "cat 变成 cats，表示不止一只。"
      },
      {
        "en": "Two children are here.",
        "zh": "两个孩子在这里。",
        "note": "children 是 child 的复数，表示两个孩子。"
      }
    ]
  },
  "numerals": {
    "definition": "数词就是说明数量或顺序的词。two 是“两个”，second 是“第二”；先分清在问“多少”还是“第几”。",
    "classification": [
      "基数词：一、二、三",
      "序数词：第一、第二",
      "具体数量与大概数量",
      "年龄与时间等说法"
    ],
    "usage": [
      {
        "h": "数量用 one、two、three",
        "t": "two cats 是“两只猫”。这类回答“多少”的词，叫基数词。"
      },
      {
        "h": "顺序用 first、second、third",
        "t": "the first day 是“第一天”。这类回答“第几”的词，叫序数词；my first book 前有 my，就不再加 the。"
      },
      {
        "h": "明确数量与大概数量不同",
        "t": "two hundred 是“两百”，hundred 不加 s。hundreds of 则是“数百”，表示大概的数量。"
      },
      {
        "h": "再了解一点：放在名词前的整组修饰语",
        "t": "a ten-minute walk 是“十分钟的步行路程”，里面的 minute 常用单数。说 It takes ten minutes. 时，minutes 则要用复数。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "two hundred 多加了 s",
        "wrong": "I have two hundreds books.",
        "right": "I have two hundred books.",
        "text": "two 已经说清具体数量，这里 hundred 不加 s。"
      },
      {
        "title": "名词前的时间修饰语写错",
        "wrong": "It is a ten-minutes walk.",
        "right": "It is a ten-minute walk.",
        "text": "ten-minute 一起说明 walk，单位 minute 通常用单数，并用连字符连起来。"
      }
    ],
    "examples": [
      {
        "en": "I have two cats.",
        "zh": "我有两只猫。",
        "note": "two 表示数量，回答有多少只猫。"
      },
      {
        "en": "This is my first book.",
        "zh": "这是我的第一本书。",
        "note": "first 表示顺序；my 表示“我的”，前面不再加 the。"
      }
    ]
  },
  "interjections": {
    "definition": "感叹词是我们直接表达情绪时说的小词。Wow! 常表示“哇”，Ouch! 常表示“哎哟”；后面还可以接一句完整的话。",
    "classification": [
      "Wow：赞叹",
      "Oh：惊讶或明白了",
      "Ouch：疼痛",
      "词类与句子类型分开"
    ],
    "usage": [
      {
        "h": "先听懂感情",
        "t": "Wow! 常用来表示惊喜或赞叹。Ouch! 常用来表示疼痛，具体语气也要看当时的情况。"
      },
      {
        "h": "可以单独说，也可以接一句话",
        "t": "Wow! 可以单独说。Wow, it is big! 是“哇，它好大！”，后面的 it is big 仍然是完整的一句话。"
      },
      {
        "h": "感叹词不是句子里的动作",
        "t": "Wow 不表示“我做了什么”，也不能代替 am、is、are。说“我很开心”仍要用 I am happy。"
      },
      {
        "h": "再了解一点：感叹词和感叹句不同",
        "t": "Wow 是一个词；What a big cat! 是一种感叹句。它们都能表达感情，但不能因为都有感叹号，就当作同一种语法知识。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "把 wow 放进动作的位置",
        "wrong": "I wow happy.",
        "right": "Wow, I am happy.",
        "text": "wow 表情绪，放在句子外面；“我很开心”仍要有 am。"
      },
      {
        "title": "what a 后少了名词",
        "wrong": "What a big!",
        "right": "What a big cat!",
        "text": "What a big 后要说明什么东西大，例如 cat。若只想说“好大”，可以说 How big!。"
      }
    ],
    "examples": [
      {
        "en": "Wow, it is big!",
        "zh": "哇，它好大！",
        "note": "Wow 表示赞叹；it is big 说明什么让人赞叹。"
      },
      {
        "en": "Oh, I see.",
        "zh": "哦，我明白了。",
        "note": "这里 Oh 表示明白了；I see 是常见的“我懂了”。"
      }
    ]
  },
  "conjunction-types": {
    "definition": "连词像连接用的小桥，把词或句子连起来。and 表示“和、并且”，but 表示“但是”，because 表示“因为”。",
    "classification": [
      "并列：连接相近的部分",
      "从属：一部分依靠另一部分",
      "成对使用的词",
      "先看想表达的关系"
    ],
    "usage": [
      {
        "h": "and、but、or 连接相近的部分",
        "t": "cats and dogs 是“猫和狗”。I like cats, but Tom likes dogs. 用 but 说明两个人的喜好不同。"
      },
      {
        "h": "because 说明原因",
        "t": "I stayed home because it rained. 是“因为下雨，我待在家里”。because 后面的内容说明为什么待在家。"
      },
      {
        "h": "成对的连接词要一起学",
        "t": "either tea or milk 是“茶或牛奶二选一”。both cats and dogs 是“猫和狗两种都……”，两头连接的内容要放清楚。"
      },
      {
        "h": "再了解一点：意思相近，结构未必相同",
        "t": "because 后面常接一句话；because of 后面常接名词。however（然而）也可表示转折，但在正式写作中不能只用一个逗号把两句完整的话接起来。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "because 后直接放一个名词说法",
        "wrong": "We stayed because the rain.",
        "right": "We stayed because of the rain.",
        "text": "保留 the rain 这个名词说法时用 because of。也可以用 because it rained，后面改成一句话。"
      },
      {
        "title": "同一对句子重复用 although 和 but",
        "wrong": "Although it rained, but we went out.",
        "right": "Although it rained, we went out.",
        "text": "同一对直接对应的句子里，although 已说清“虽然”，通常不再加 but。"
      }
    ],
    "examples": [
      {
        "en": "I like cats and dogs.",
        "zh": "我喜欢猫和狗。",
        "note": "and 把两种动物连在一起。"
      },
      {
        "en": "I stayed home because it rained.",
        "zh": "因为下雨，我待在家里。",
        "note": "because 后面的 it rained 说明待在家的原因。"
      }
    ]
  },
  "emphasis": {
    "definition": "强调就是把一句话里最想让人注意的部分突出说出来。英语可以用 It is/was…that/who… 这样的框架，也可以用 do 加强“确实做了”的语气。",
    "classification": [
      "突出是谁",
      "突出时间等信息",
      "do 表“确实”",
      "先学会还原普通句"
    ],
    "usage": [
      {
        "h": "先看没有强调时怎么说",
        "t": "Tom called. 是“汤姆打电话了”。It was Tom who called. 是“是汤姆打的电话”，特别突出打电话的人。"
      },
      {
        "h": "也可以突出时间",
        "t": "I saw Tom today. 是“我今天看见了汤姆”。It was today that I saw Tom. 特别强调是“今天”。"
      },
      {
        "h": "do 可以表示确实如此",
        "t": "I do like cats. 是“我确实喜欢猫”。do 后仍用 like，不写 likes；如果是 She does like cats.，like 也不加 s。"
      },
      {
        "h": "再了解一点：不是每个 It is 开头都在强调",
        "t": "It is clear that he left. 是“很清楚，他走了”，不是本卡片的强调框架。not until 的强调和强调问句也有各自的顺序，可在下级或相关卡片继续学习。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "强调句中多加 did",
        "wrong": "It was today that did I see Tom.",
        "right": "It was today that I saw Tom.",
        "text": "that 后面用平常的 I saw Tom 顺序，不在这里加 did I。"
      },
      {
        "title": "does 后又给 like 加 s",
        "wrong": "She does likes cats.",
        "right": "She does like cats.",
        "text": "does 已帮助表达强调并与 she 配合。后面用原形 like。"
      }
    ],
    "examples": [
      {
        "en": "It was Tom who called.",
        "zh": "是汤姆打的电话。",
        "note": "这句特别突出 Tom；普通说法是 Tom called。"
      },
      {
        "en": "I do like cats.",
        "zh": "我确实喜欢猫。",
        "note": "do 加强“真的喜欢”的语气，后面 like 不变。"
      }
    ]
  }
};
  window.LESSON_DETAILS={...(window.LESSON_DETAILS||{}),...details};
})();
