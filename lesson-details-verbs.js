/* Beginner-first explanations. Less common details stay available in advanced blocks. */
(() => {
  window.LESSON_DETAILS = {
    ...(window.LESSON_DETAILS || {}),
    ...{
  "present": {
    "definition": "一般现在时常用来讲平时的习惯、一直知道的事实，或现在的情况。例如 I read every day. 就是“我每天读书”，不是说此刻正在读。",
    "classification": [
      "平时常做的事",
      "事实与现在的情况",
      "he / she / it 后的变化",
      "否定与提问"
    ],
    "usage": [
      {
        "h": "先说平时做什么",
        "t": "I walk to school. 表示我平时走路上学。every day（每天）、often（经常）可以帮助你看懂句意。"
      },
      {
        "h": "看动作前面是谁",
        "t": "I、you、we、they 后通常用动词原形，如 I like milk.；he、she、it 后通常加 -s，如 She likes milk.。"
      },
      {
        "h": "不做和提问怎样说",
        "t": "用 do not / does not 表示不做，用 Do / Does 开头提问。有了 does，后面的动词不再加 -s：Does she like milk?。"
      },
      {
        "h": "再了解一点：不只表示习惯",
        "t": "I am a student. 也用一般现在时说明情况。固定时间表还能用现在形式说将来，如 The bus leaves at ten.；不能只看到 tomorrow 就排除现在形式。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "she 后的动词要变化",
        "wrong": "She like milk.",
        "right": "She likes milk.",
        "text": "这里说她平时喜欢牛奶，she 后的 like 要变成 likes。"
      },
      {
        "title": "does 后用原形",
        "wrong": "Does he likes cats?",
        "right": "Does he like cats?",
        "text": "does 已经承担变化，后面的 like 保持原形。"
      }
    ],
    "examples": [
      {
        "en": "I read every day.",
        "zh": "我每天读书。",
        "note": "every day 是“每天”，这句话说的是习惯。"
      },
      {
        "en": "She likes cats.",
        "zh": "她喜欢猫。",
        "note": "说的是 she，所以 like 变成 likes。"
      },
      {
        "en": "The sun is hot.",
        "zh": "太阳很热。",
        "note": "这里用 is 说明一个事实，不是在说某个动作。"
      }
    ]
  },
  "continuous": {
    "definition": "现在进行时常用来讲“现在正在做什么”。最常见的样子是 am / is / are 加动词的 -ing 形式，例如 I am reading.（我正在读书）。",
    "classification": [
      "现在正在做",
      "这段时间在做",
      "am / is / are + doing",
      "不做与提问"
    ],
    "usage": [
      {
        "h": "先找“正在”的意思",
        "t": "She is eating. 表示她正在吃东西。和 She eats at home.（她平时在家吃饭）相比，观察的时间不同。"
      },
      {
        "h": "两部分都不能少",
        "t": "I 用 am，he / she / it 常用 is，you / we / they 常用 are；后面的动作变成 -ing，如 We are playing.。"
      },
      {
        "h": "否定和提问只改 be",
        "t": "在 am / is / are 后加 not：He is not sleeping.。提问时把它放到前面：Is he sleeping?。"
      },
      {
        "h": "再了解一点：这段时间和安排",
        "t": "I am staying here this week. 可以说这周的临时情况。We are meeting on Sunday. 可以说已约好的安排。know 表示“知道”等状态时，通常不用进行时。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "漏掉 is",
        "wrong": "She reading now.",
        "right": "She is reading now.",
        "text": "要说“正在读”，reading 前还需要 is。"
      },
      {
        "title": "动作要用 -ing",
        "wrong": "They are play outside.",
        "right": "They are playing outside.",
        "text": "are 后的动作要变成 playing，才是正在玩。"
      }
    ],
    "examples": [
      {
        "en": "I am reading.",
        "zh": "我正在读书。",
        "note": "am 和 reading 合起来表示正在做的事。"
      },
      {
        "en": "The cat is sleeping.",
        "zh": "猫正在睡觉。",
        "note": "cat 只有一只，所以用 is sleeping。"
      },
      {
        "en": "We are eating now.",
        "zh": "我们现在正在吃饭。",
        "note": "we 后用 are，eat 变成 eating。"
      }
    ]
  },
  "past": {
    "definition": "一般过去时用来讲过去发生的事或过去的情况。例如 I walked home yesterday. 表示“我昨天走路回家”。重点是把事情放在过去的时间里。",
    "classification": [
      "过去做过的事",
      "过去的情况",
      "规则与不规则变化",
      "did 后用原形"
    ],
    "usage": [
      {
        "h": "先找过去的时间",
        "t": "yesterday（昨天）、last night（昨晚）常帮助我们看出时间。I played yesterday. 说的是昨天，不是平时的习惯。"
      },
      {
        "h": "动词换成过去式",
        "t": "很多动作词加 -ed，如 play → played；也有要单独记的词，如 go → went。am / is 的过去形式是 was，are 的过去形式是 were。"
      },
      {
        "h": "did 帮忙时不再变动词",
        "t": "否定用 did not + 原形：I did not go.；提问用 Did + 人 + 原形：Did you go?。"
      },
      {
        "h": "再了解一点：过去式和过去分词",
        "t": "went 可以直接说过去的事。gone 常需要 have 或 be 等词配合。先记 I went home.，再和 I have gone home. 比较，别把两种形式混用。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "go 的过去式不是 goed",
        "wrong": "I goed home.",
        "right": "I went home.",
        "text": "go 有特别的过去形式 went，不能直接加 -ed。"
      },
      {
        "title": "did 后不用过去式",
        "wrong": "Did she went home?",
        "right": "Did she go home?",
        "text": "Did 已经表示过去，后面的 go 要用原形。"
      }
    ],
    "examples": [
      {
        "en": "I played yesterday.",
        "zh": "我昨天玩了。",
        "note": "played 是 play 的过去式。"
      },
      {
        "en": "She went home.",
        "zh": "她回家了。",
        "note": "went 是 go 的过去式。"
      },
      {
        "en": "We were tired last night.",
        "zh": "我们昨晚很累。",
        "note": "这里用 were 说明过去的情况。"
      }
    ]
  },
  "past-cont": {
    "definition": "过去进行时用来讲“过去某个时候正在做什么”。它的样子是 was / were + 动词 -ing，例如 I was reading at eight.（我八点时正在读书）。",
    "classification": [
      "过去当时正在做",
      "另一件事发生时",
      "was / were + doing",
      "与一般过去时比较"
    ],
    "usage": [
      {
        "h": "先定一个过去时刻",
        "t": "At eight, I was reading. 是站在过去八点，看我当时正在做的事。"
      },
      {
        "h": "按人选择 was 或 were",
        "t": "I / he / she / it 常用 was；you / we / they 常用 were。之后都接动作的 -ing 形式。"
      },
      {
        "h": "一个动作作背景",
        "t": "I was eating when Mom came home. 表示妈妈回来时，我正在吃饭。was eating 是展开中的事，came 是这时发生的事。"
      },
      {
        "h": "再了解一点：不是见到 when 就固定搭配",
        "t": "两个动作都在同时进行时，也可以都用过去进行时。when、while 只是时间线索，还是要先看想表达的先后关系。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "过去事实中 she 配 was",
        "wrong": "She were sleeping at eight.",
        "right": "She was sleeping at eight.",
        "text": "这里叙述过去的事实，she 后应使用 was。"
      },
      {
        "title": "was 后接 -ing",
        "wrong": "I was watch TV.",
        "right": "I was watching TV.",
        "text": "要表达当时正在看，watch 应变成 watching。"
      }
    ],
    "examples": [
      {
        "en": "I was reading at eight.",
        "zh": "我八点时正在读书。",
        "note": "at eight 给出了过去的观察时刻。"
      },
      {
        "en": "We were playing when it rained.",
        "zh": "下雨时，我们正在玩。",
        "note": "were playing 说明当时的活动。"
      },
      {
        "en": "Mom was cooking.",
        "zh": "妈妈当时正在做饭。",
        "note": "was cooking 表示过去正在进行的事。"
      }
    ]
  },
  "perfect": {
    "definition": "现在完成时把过去的事和现在连起来。它可以说“做过某事”“事情已做好”，也可以说“一直做到现在”。常见形式是 have / has + 过去分词，过去分词是动词的一种形式，如 eat → eaten。",
    "classification": [
      "以前做过",
      "现在有结果",
      "一直到现在",
      "have / has + done"
    ],
    "usage": [
      {
        "h": "说以前有没有做过",
        "t": "I have seen this film. 表示我以前看过这部电影。重点是现在有这段经历，不是在交代是哪一天。"
      },
      {
        "h": "说现在的结果",
        "t": "I have lost my key. 常表示钥匙已经丢了，现在找不到。先看这件过去的事对现在有什么影响。"
      },
      {
        "h": "说一直到现在的情况",
        "t": "I have lived here for years. 可以表示我住在这里多年，而且现在仍住在这里。完成时不一定表示事情已经停止。"
      },
      {
        "h": "再了解一点：不要直接配已结束的过去时间",
        "t": "明确说 yesterday 时，通常用一般过去时：I saw her yesterday.。have 后用过去分词，如 seen；不能把 see 的过去式 saw 直接放在 have 后。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "have 后用过去分词",
        "wrong": "I have saw him.",
        "right": "I have seen him.",
        "text": "see 的过去分词是 seen，所以应说 have seen。"
      },
      {
        "title": "昨天是已结束的过去时间",
        "wrong": "I have seen her yesterday.",
        "right": "I saw her yesterday.",
        "text": "这里明确交代昨天的事，通常改用一般过去时。"
      }
    ],
    "examples": [
      {
        "en": "I have lost my key.",
        "zh": "我的钥匙丢了。",
        "note": "这件过去的事影响现在：我现在找不到钥匙。"
      },
      {
        "en": "She has eaten lunch.",
        "zh": "她已经吃过午饭了。",
        "note": "she 后用 has；eat 的过去分词是 eaten。"
      },
      {
        "en": "We have lived here for years.",
        "zh": "我们已经在这里住了多年。",
        "note": "可以表示过去开始住，现在仍然住在这里。"
      }
    ]
  },
  "perf-cont": {
    "definition": "现在完成进行时常说“一件事从以前开始，持续到现在或刚刚停下”。常见形式是 have / has been + 动词 -ing，重点放在持续的过程。",
    "classification": [
      "一直在做",
      "刚停下的活动",
      "have / has been doing",
      "过程与结果"
    ],
    "usage": [
      {
        "h": "先看持续的过程",
        "t": "I have been waiting for an hour. 表示我已经等了一个小时。说话人想强调等了多久。"
      },
      {
        "h": "记住中间的 been",
        "t": "I / you / we / they 后常用 have been；he / she / it 后常用 has been。最后加动作的 -ing 形式。"
      },
      {
        "h": "和完成时比较",
        "t": "I have read two books. 强调读完两本。I have been reading. 强调这段时间一直在读，不直接告诉你读完几本。"
      },
      {
        "h": "再了解一点：不保证此刻还在继续",
        "t": "You are wet. Have you been running? 可以问刚才是否一直在跑，此刻可能已经停下。表示“知道”等状态时，通常用完成时，如 I have known her for years.。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "不要漏掉 been",
        "wrong": "She has working all day.",
        "right": "She has been working all day.",
        "text": "has 和 working 中间需要 been 才构成这个形式。"
      },
      {
        "title": "been 后的动作加 -ing",
        "wrong": "I have been wait here.",
        "right": "I have been waiting here.",
        "text": "这里要说一直在等，wait 应改为 waiting。"
      }
    ],
    "examples": [
      {
        "en": "I have been reading all morning.",
        "zh": "我一上午一直在读书。",
        "note": "重点是一上午持续阅读的过程。"
      },
      {
        "en": "She has been waiting for an hour.",
        "zh": "她已经等了一个小时。",
        "note": "for an hour 说明持续的时长。"
      },
      {
        "en": "Have you been running?",
        "zh": "你刚才一直在跑吗？",
        "note": "可以根据出汗等情况询问之前的活动。"
      }
    ]
  },
  "past-perfect": {
    "definition": "过去完成时用来讲“到过去某个时候，另一件事已经先发生了”。常见形式是 had + 过去分词。例如 I had eaten when Mom came home. 是说妈妈回来前，我已经吃过了。",
    "classification": [
      "过去之前的事",
      "had + done",
      "先后关系",
      "过去的打算"
    ],
    "usage": [
      {
        "h": "先找到过去的参照点",
        "t": "When I got home, Mom had left. 先找到“我到家”这个过去的时刻，再看妈妈在这之前已经离开。"
      },
      {
        "h": "所有人都用 had",
        "t": "I had eaten. 和 She had eaten. 都用 had，不需要按人再改成 has。之后接过去分词。"
      },
      {
        "h": "用它说清哪件事更早",
        "t": "I had seen the film before we met. 告诉你看电影早于见面。不要只因为一件事发生得很久以前，就一定用过去完成时。"
      },
      {
        "h": "再了解一点：有时先后已很清楚",
        "t": "用了 before、after 等词，句意已清楚时，也常可以都用一般过去时。过去完成时是在需要时突出更早的一件事。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "had 后用过去分词",
        "wrong": "I had saw the film.",
        "right": "I had seen the film.",
        "text": "had 后需要 seen，不能使用过去式 saw。"
      },
      {
        "title": "过去时刻之前用 had",
        "wrong": "When I got home, Mom has left.",
        "right": "When I got home, Mom had left.",
        "text": "这里从“我到家”这个过去时刻往前看，应使用 had left。"
      }
    ],
    "examples": [
      {
        "en": "When I got home, Mom had left.",
        "zh": "我到家时，妈妈已经走了。",
        "note": "妈妈离开在先，我到家在后。"
      },
      {
        "en": "I had eaten before the class started.",
        "zh": "上课前，我已经吃过东西了。",
        "note": "had eaten 强调吃东西发生在上课之前。"
      },
      {
        "en": "She had lost her key, so she waited outside.",
        "zh": "她把钥匙弄丢了，所以在外面等。",
        "note": "先丢钥匙，后来才在外面等。"
      }
    ]
  },
  "future": {
    "definition": "说将来的事，可以用 will do、be going to do 等表达。它们常用于预测、决定或打算。例如 I will help you. 是“我会帮你”，I am going to read. 是“我打算读书”。",
    "classification": [
      "will + 原形",
      "be going to + 原形",
      "预测与决定",
      "已经约好的安排"
    ],
    "usage": [
      {
        "h": "will 后用动词原形",
        "t": "I will go home. 中 go 不加 -s，也不改成过去式。否定可以说 I will not go.，也常写成 I won’t go.。"
      },
      {
        "h": "用 going to 说打算",
        "t": "I am going to read. 可以说已有的打算。I 用 am，he / she / it 常用 is，you / we / they 常用 are。"
      },
      {
        "h": "先想自己想表达什么",
        "t": "Oh, I will help you. 常是当场决定帮忙。I am going to help Mom. 可以说原来的计划。两种说法有时都能用，意思侧重不同。"
      },
      {
        "h": "再了解一点：其他将来表达",
        "t": "We are meeting on Sunday. 可说已约好的安排。The bus leaves at ten. 可说固定时刻表。表示将来并不只有一种形式。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "will 后不加 -s",
        "wrong": "She will goes home.",
        "right": "She will go home.",
        "text": "will 后的 go 使用原形，不因 she 再加 -s。"
      },
      {
        "title": "going to 前需要 be",
        "wrong": "He going to eat.",
        "right": "He is going to eat.",
        "text": "he 后需要 is，再接 going to eat。"
      }
    ],
    "examples": [
      {
        "en": "I will help you.",
        "zh": "我会帮你。",
        "note": "可以用来答应帮助别人。"
      },
      {
        "en": "She is going to read tonight.",
        "zh": "她今晚打算读书。",
        "note": "is going to 说明她的打算。"
      },
      {
        "en": "We are meeting on Sunday.",
        "zh": "我们约好周日见面。",
        "note": "用现在进行形式也可以说已经安排好的事。"
      }
    ]
  },
  "passive": {
    "definition": "被动语态把“受到动作的人或东西”放在前面说。例如 Tom cleans the room. 是“汤姆打扫房间”；The room is cleaned by Tom. 是“房间由汤姆打扫”。",
    "classification": [
      "谁做这件事",
      "谁被做了什么",
      "be + 过去分词",
      "是否说明做事的人"
    ],
    "usage": [
      {
        "h": "先看谁受到动作",
        "t": "主动说 The cat eats fish.，先说猫做什么。被动说 Fish is eaten by the cat.，先说鱼受到什么动作。"
      },
      {
        "h": "用 be 加过去分词",
        "t": "过去分词是动词的一种形式，如 eat → eaten。现在可以说 The door is opened.；过去可以说 The door was opened.。时间主要由 is / was 等部分表示。"
      },
      {
        "h": "需要时再说由谁来做",
        "t": "by Tom 是“由汤姆来做”。不知道或不必说是谁做的，可以不写 by 后面的部分，如 The room was cleaned.。"
      },
      {
        "h": "再了解一点：先看是不是被做了什么",
        "t": "The door is closed. 也可能只是说门关着的状态。happen 表示发生，一般不能生硬地说 was happened。要结合整句话判断。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "be 后要用过去分词",
        "wrong": "This book was write by Tom.",
        "right": "This book was written by Tom.",
        "text": "这里说书被汤姆写出来，要用过去分词 written，不能直接用 write。"
      },
      {
        "title": "不要给 happen 乱加被动",
        "wrong": "It was happened yesterday.",
        "right": "It happened yesterday.",
        "text": "这里说事情发生，直接用 happened，不加 was。"
      }
    ],
    "examples": [
      {
        "en": "The room was cleaned.",
        "zh": "房间被打扫过了。",
        "note": "先说房间受到的动作，没有说明谁打扫。"
      },
      {
        "en": "This book was written by Tom.",
        "zh": "这本书是汤姆写的。",
        "note": "written 是 write 的过去分词。"
      },
      {
        "en": "The door is being painted.",
        "zh": "门正在被刷漆。",
        "note": "is being painted 同时表达正在进行和被动。"
      }
    ]
  },
  "active-voice": {
    "definition": "主动语态通常先说谁，再说他做什么。例如 Mom cooks dinner.（妈妈做晚饭），Mom 是做这件事的人。它和时态是两个问题：主动句也可以说现在、过去或将来。",
    "classification": [
      "先说做事的人",
      "动作与对象",
      "现在、过去和将来"
    ],
    "usage": [
      {
        "h": "先找谁在做",
        "t": "The cat eats fish. 先告诉我们猫在做吃的动作。The cat 是句子主要说的对象，也叫主语。"
      },
      {
        "h": "再看动作落到什么上",
        "t": "Tom opens the door. 中，Tom 做 opens 的动作，the door 是被打开的东西。"
      },
      {
        "h": "按时间改变动词",
        "t": "Mom cooks、Mom cooked、Mom will cook 都可以是主动说法。主动不等于只能用一般现在时。"
      },
      {
        "h": "再了解一点：主语也能表示状态",
        "t": "I like milk.、The box has a lid. 也属于主动结构，并不是每句话都必须有明显的肢体动作。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "不要随意多加 is",
        "wrong": "Tom is washes the cup.",
        "right": "Tom washes the cup.",
        "text": "washes 已经说明汤姆做什么，这个习惯句不需要再加 is。"
      },
      {
        "title": "放在前面作主语用 he",
        "wrong": "Him cleans the desk.",
        "right": "He cleans the desk.",
        "text": "这里先说“他”做什么，需要主格 he，不用宾格 him。"
      }
    ],
    "examples": [
      {
        "en": "Mom cooks dinner.",
        "zh": "妈妈做晚饭。",
        "note": "Mom 是做饭的人，cooks 是她做的事。"
      },
      {
        "en": "Tom opened the door.",
        "zh": "汤姆打开了门。",
        "note": "opened 表示过去的动作，这仍是主动句。"
      }
    ]
  },
  "agreement": {
    "definition": "主谓一致，就是句子说的是一个还是多个，动词形式要和它配合。例如 The boy runs. 说一个男孩，The boys run. 说多个男孩。先找到句子真正说的是谁或什么。",
    "classification": [
      "一个和多个",
      "am / is / are",
      "he / she / it 后的动词",
      "找真正的主语"
    ],
    "usage": [
      {
        "h": "先看句子说的是谁",
        "t": "The girl likes cats. 说的是 the girl，一个女孩。The girls like cats. 说的是多个女孩。"
      },
      {
        "h": "先学最常见的配合",
        "t": "I am；he / she / it is；you / we / they are。一般现在时中，he / she / it 后的普通动作词通常加 -s。"
      },
      {
        "h": "不要被旁边的名词带走",
        "t": "The box of toys is big. 说“大”的是 box（一只盒子），不是 toys，所以用 is。"
      },
      {
        "h": "再了解一点：并不是所有动词都这样变化",
        "t": "can、must 等词通常不因一个或多个人而加 -s。一般过去时中的多数普通动词也不区分一个或多个主语。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "一个男孩用 plays",
        "wrong": "The boy play every day.",
        "right": "The boy plays every day.",
        "text": "这里说一个男孩的习惯，play 要变成 plays。"
      },
      {
        "title": "先找到 box",
        "wrong": "The box of toys are big.",
        "right": "The box of toys is big.",
        "text": "中心是单数 box；of toys 只是说明盒子里有什么。"
      }
    ],
    "examples": [
      {
        "en": "The boy runs.",
        "zh": "那个男孩跑步。",
        "note": "一个男孩，run 变成 runs。"
      },
      {
        "en": "The boys run.",
        "zh": "那些男孩跑步。",
        "note": "多个男孩，动词用 run。"
      }
    ]
  },
  "agreement-meaning": {
    "definition": "有时，不能只看名词有没有 -s，还要看整句话是在说一个整体还是多个对象。例如 Ten dollars is enough. 把十美元看成一笔钱，所以用 is。",
    "classification": [
      "一段时间或一笔钱",
      "不可数的东西",
      "整体和成员",
      "部分数量"
    ],
    "usage": [
      {
        "h": "把一个总量当作整体",
        "t": "Two years is a long time. 是把两年看成一整段时间，不是在分别说两个年份。"
      },
      {
        "h": "没有 -s 也要看意思",
        "t": "news 通常表示“消息”这个整体，常用单数动词：The news is good.。water 等不可数名词一般也配单数。"
      },
      {
        "h": "部分数量要看后面是什么",
        "t": "Half of the milk is gone. 说的是一部分牛奶；Half of the books are old. 说的是一些书。不要只看 half 就决定动词。"
      },
      {
        "h": "再了解一点：集体名词有不同说法",
        "t": "team、family 等可把人看作一个整体，也可突出成员。英美习惯有差别，不能把 The team are… 一概判错；要结合意思和使用场合。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "一笔钱用单数",
        "wrong": "Ten dollars are enough for the book.",
        "right": "Ten dollars is enough for the book.",
        "text": "这里把十美元看成买书所需的一笔钱，所以用 is。"
      },
      {
        "title": "news 通常配单数",
        "wrong": "The news are good.",
        "right": "The news is good.",
        "text": "news 虽然以 -s 结尾，普通“消息”用法通常配 is。"
      }
    ],
    "examples": [
      {
        "en": "Two years is a long time.",
        "zh": "两年是一段很长的时间。",
        "note": "把两年看成一个时间总量。"
      },
      {
        "en": "Half of the books are old.",
        "zh": "这些书有一半是旧的。",
        "note": "这里说的是多本书，所以用 are。"
      }
    ]
  },
  "agreement-nearest": {
    "definition": "有些成对连接的主语，要参考离动词最近的部分来选择动词。例如 Either Tom or I am wrong. 是“不是汤姆错，就是我错”，am 跟最近的 I 配合。",
    "classification": [
      "either ... or ...",
      "neither ... nor ...",
      "not only ... but also ...",
      "与普通 and 区别"
    ],
    "usage": [
      {
        "h": "先认出成对的词",
        "t": "either ... or ... 是“两者选一个”；neither ... nor ... 是“两者都不”。它们把两个对象连到同一个动作前。"
      },
      {
        "h": "看动词前最近是谁",
        "t": "Either you or he is right. 中 he 离 is 最近。换成 Either he or you are right. 时，最近变成 you。"
      },
      {
        "h": "不但……而且……也要留意",
        "t": "Not only Tom but also his friends are here. 中，his friends 离动词最近，常配 are。"
      },
      {
        "h": "再了解一点：不要推广到所有长主语",
        "t": "Tom and Mary 通常说两个人，一般用复数。The box of books 的中心仍是 box，也不按最近的 books 选动词。正式写作遇到别扭的配合时可以改写。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "最近的 I 配 am",
        "wrong": "Either Tom or I is wrong.",
        "right": "Either Tom or I am wrong.",
        "text": "在这个 either ... or 结构中，最近的是 I，应配 am。"
      },
      {
        "title": "最近的 friends 是多个",
        "wrong": "Not only Tom but also his friends is here.",
        "right": "Not only Tom but also his friends are here.",
        "text": "最近的是复数 his friends，常用 are 来配合。"
      }
    ],
    "examples": [
      {
        "en": "Either he or you are right.",
        "zh": "不是他对，就是你对。",
        "note": "最近的是 you，所以用 are。"
      },
      {
        "en": "Neither Tom nor Anna is here.",
        "zh": "汤姆和安娜都不在这里。",
        "note": "最近的是 Anna，一个人，通常用 is。"
      }
    ]
  },
  "unreal": {
    "definition": "虚拟条件句用来设想“如果情况和现在或过去不一样，会怎样”。例如 If I were you, I would wait. 是“如果我是你，我会等”，但说话人并不是对方。",
    "classification": [
      "设想现在不一样",
      "设想过去不一样",
      "条件和结果的时间",
      "would / could / might"
    ],
    "usage": [
      {
        "h": "先看是真可能，还是在设想",
        "t": "If it rains, I will stay home. 把下雨当作真实可能。If I were a bird, I could fly. 是和事实不同的想象。"
      },
      {
        "h": "设想现在不一样",
        "t": "If I had a bike, I would ride home. 可以表示现在没有自行车。if 后用过去形式，结果常用 would / could + 原形。"
      },
      {
        "h": "设想过去不一样",
        "t": "If I had left early, I would have been home. 可以设想当时没早走。if 后常用 had + 过去分词，结果常用 would have + 过去分词。"
      },
      {
        "h": "再了解一点：形式和实际时间不同",
        "t": "这里的过去形式有时表示“和现实拉开距离”，不一定表示过去时间。条件和结果还可能说不同时间；be 的正式假设常用 were，日常也有 was 的用法。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "假设自己是对方的常见说法",
        "wrong": "If I am you, I would wait.",
        "right": "If I were you, I would wait.",
        "text": "这不是现实身份，正式假设中常用 If I were you。"
      },
      {
        "title": "过去的反事实条件要配好形式",
        "wrong": "If I have known yesterday, I would have called.",
        "right": "If I had known yesterday, I would have called.",
        "text": "说的是昨天本不知道的事，条件部分用 had known。"
      }
    ],
    "examples": [
      {
        "en": "If I were you, I would wait.",
        "zh": "如果我是你，我会等。",
        "note": "这是设想，并不是说我真的是你。"
      },
      {
        "en": "If I had a bike, I could ride home.",
        "zh": "如果我有自行车，就能骑车回家。",
        "note": "可以表示现在没有车，设想另一种情况。"
      }
    ]
  },
  "subjunctive-suggestions": {
    "definition": "有些句子是在建议、要求或命令别人做事，并不是在报告已经发生的事实。英语里常把这样的内容写成 that + 人 + 动词原形，如 I suggest that he go home.。",
    "classification": [
      "建议某人做",
      "要求某人做",
      "动词原形",
      "should + 原形"
    ],
    "usage": [
      {
        "h": "先看是不是建议或要求",
        "t": "I suggest that he go home. 的意思是“我建议他回家”。he 后的 go 没加 -s，是这类表达的常见形式。"
      },
      {
        "h": "常见的原形包括 be",
        "t": "We asked that she be on time. 中 be 也用原形，不能按 she 直接换成 is。这句话是在提出要求。"
      },
      {
        "h": "否定放在动作前",
        "t": "We asked that he not be late. 是要求他不要迟到。也可见 should not be 这类表达。"
      },
      {
        "h": "再了解一点：英美习惯与词义",
        "t": "这类句子也常用 should + 原形，如 that he should go。suggest 如果表示“暗示某事实”，就要按事实选形式，不能见到 suggest 就套原形规则。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "that 后不能直接接人加 to do",
        "wrong": "I suggest that he to go home.",
        "right": "I suggest that he go home.",
        "text": "that 后这里需要完整的建议内容，用 he go，不用 he to go。"
      },
      {
        "title": "should 后用原形",
        "wrong": "We asked that he should comes early.",
        "right": "We asked that he should come early.",
        "text": "有了 should，后面的 come 要用原形。"
      }
    ],
    "examples": [
      {
        "en": "I suggest that he go home.",
        "zh": "我建议他回家。",
        "note": "go 用原形，表达建议，而不是普通事实陈述。"
      },
      {
        "en": "We asked that she be on time.",
        "zh": "我们要求她准时。",
        "note": "be 是原形；这里表达一项要求。"
      }
    ]
  },
  "wish": {
    "definition": "wish 可以说“希望现实不是这样”或“要是当时做了就好了”。例如 I wish I had more time. 常表示现在时间不够，希望能多一点。",
    "classification": [
      "希望现在不一样",
      "对过去后悔",
      "希望情况改变",
      "if only：要是……就好了"
    ],
    "usage": [
      {
        "h": "说现在的愿望",
        "t": "I wish I knew the answer. 常表示现在不知道答案。wish 后常用过去形式，但愿望说的是现在。"
      },
      {
        "h": "说过去的遗憾",
        "t": "I wish I had called you. 表示当时没打电话，现在觉得“要是打了就好了”。这里用 had + 过去分词。"
      },
      {
        "h": "希望外面的情况改变",
        "t": "I wish it would stop raining. 是希望雨停下来。would 常用来表达希望某种情况改变，而不是把任何愿望都写成 would。"
      },
      {
        "h": "再了解一点：相关说法",
        "t": "If only I had more time! 是更强的“要是时间多一点就好了”。谈 be 的反事实愿望时，正式表达常用 were，日常中也能听到 was。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "had 后用过去分词 gone",
        "wrong": "I wish I had went home early.",
        "right": "I wish I had gone home early.",
        "text": "说过去的遗憾时用 had gone，不能用 had went。"
      },
      {
        "title": "would 后使用原形",
        "wrong": "I wish it would stops raining.",
        "right": "I wish it would stop raining.",
        "text": "有了 would，后面的 stop 不能再加 -s。"
      }
    ],
    "examples": [
      {
        "en": "I wish I had more time.",
        "zh": "要是我有更多时间就好了。",
        "note": "常表示现在时间不够，had 说的是现在的愿望。"
      },
      {
        "en": "I wish I had called you.",
        "zh": "要是我当时给你打了电话就好了。",
        "note": "现在对过去没打电话这件事感到遗憾。"
      }
    ]
  },
  "infinitive": {
    "definition": "不定式是一种把动作接到其他词后面的写法，最常见的是 to + 动词原形。例如 I want to eat. 是“我想吃东西”，to eat 说明想做什么。",
    "classification": [
      "想做或决定做",
      "为了做什么",
      "作句子的一部分",
      "有时省去 to"
    ],
    "usage": [
      {
        "h": "先记常见小句",
        "t": "want to go 是“想去”，need to eat 是“需要吃”。to 后先用最基本的动词形式，不加 -s。"
      },
      {
        "h": "说为了做什么",
        "t": "She came to help me. 中 to help me 说明她来的目的。可以先理解成“为了帮助我”。"
      },
      {
        "h": "它不自己组成完整句子",
        "t": "To read is fun. 中 to read 是句子谈论的事；I want to read. 中它跟在 want 后面。单独 to read 不是普通完整陈述。"
      },
      {
        "h": "再了解一点：不是所有不定式都带 to",
        "t": "make、let 或部分感官动词后可用没有 to 的原形，如 Let me go.。具体形式需要和前面的词一起学，不能一概补 to。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "want 后需要 to",
        "wrong": "I want go home.",
        "right": "I want to go home.",
        "text": "想回家常说 want to go home，不能漏掉 to。"
      },
      {
        "title": "to 后不用 goes",
        "wrong": "She decided to goes home.",
        "right": "She decided to go home.",
        "text": "to 后的 go 用原形，不按 she 再加 -s。"
      }
    ],
    "examples": [
      {
        "en": "I want to eat.",
        "zh": "我想吃东西。",
        "note": "to eat 说明我想做什么。"
      },
      {
        "en": "She came to help me.",
        "zh": "她来帮助我。",
        "note": "to help me 说明她来的目的。"
      }
    ]
  },
  "gerund": {
    "definition": "动名词常把一个动作当作“一件事”来谈，形式通常是动词加 -ing。例如 Swimming is fun. 是“游泳很有趣”，这里谈论的事就是游泳。",
    "classification": [
      "把动作当一件事",
      "enjoy + doing",
      "介词后接 doing",
      "和进行时区别"
    ],
    "usage": [
      {
        "h": "放在句子前面谈一件事",
        "t": "Reading is fun. 先说阅读这件事。这里的 Reading 不表示“某人正在读”，而是被拿来谈论的活动。"
      },
      {
        "h": "记住常见搭配",
        "t": "I enjoy reading. 是“我喜欢阅读”。enjoy 后接动作时通常用 -ing，要把 enjoy reading 一起记。"
      },
      {
        "h": "介词后也常用 -ing",
        "t": "She is good at drawing. 的 at 后接 drawing。at、after、by 等词后接动作时，常把动作改成 -ing。"
      },
      {
        "h": "再了解一点：同样的 -ing 可以做不同工作",
        "t": "I am reading. 中 am reading 表示正在读；Reading is fun. 中 Reading 表阅读这件事。不要只看词尾，要看它在句中的作用。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "enjoy 后接 -ing",
        "wrong": "I enjoy to swim.",
        "right": "I enjoy swimming.",
        "text": "表示喜欢游泳时，enjoy 后通常接 swimming。"
      },
      {
        "title": "at 后的动作改成 -ing",
        "wrong": "She is good at draw.",
        "right": "She is good at drawing.",
        "text": "at 后接画画这项活动时，用 drawing。"
      }
    ],
    "examples": [
      {
        "en": "Swimming is fun.",
        "zh": "游泳很有趣。",
        "note": "Swimming 是这句话谈论的一件事。"
      },
      {
        "en": "I enjoy reading.",
        "zh": "我喜欢阅读。",
        "note": "enjoy 后接动作时通常使用 -ing。"
      }
    ]
  },
  "verb-choice": {
    "definition": "一个动词后面接 to do 还是 doing，要和前面的词一起学。有些词两种都能接，但意思不同。例如 stop talking 是停止说话，stop to talk 是停下来去说话。",
    "classification": [
      "只接常见固定形式",
      "stop doing / to do",
      "remember doing / to do",
      "意思决定形式"
    ],
    "usage": [
      {
        "h": "先记整个搭配",
        "t": "enjoy reading 是喜欢阅读；want to read 是想读书。不要因为中文都说“读”，就使用同一个后接形式。"
      },
      {
        "h": "用 stop 对比两种意思",
        "t": "He stopped talking. 是他不再说话。He stopped to talk. 是他停下别的事，去说话。"
      },
      {
        "h": "用 remember 看先后",
        "t": "I remember meeting her. 是记得见过她。Remember to call Mom. 是提醒自己还要打电话。"
      },
      {
        "h": "再了解一点：不要给每个词都编同一规则",
        "t": "like doing / like to do 等常有重叠；不同词的差别要看具体用法。先掌握常见搭配，再补充 try、need 等词的意思变化。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "to 后需要原形",
        "wrong": "I remembered to locked the door.",
        "right": "I remembered to lock the door.",
        "text": "这里说记得去锁门，to 后应该用 lock。"
      },
      {
        "title": "keep 表示继续做时接 -ing",
        "wrong": "He kept to talk all night.",
        "right": "He kept talking all night.",
        "text": "表示一直说话，通常使用 kept talking。"
      }
    ],
    "examples": [
      {
        "en": "I stopped talking.",
        "zh": "我停止说话了。",
        "note": "停止的是说话这个动作。"
      },
      {
        "en": "I stopped to talk.",
        "zh": "我停下来去说话。",
        "note": "先停下别的事，接着去说话。"
      }
    ]
  },
  "object-complement": {
    "definition": "有些句子先说一个人，再补充“让他做什么”或“看见他做什么”。例如 I want him to stay. 是“我想让他留下”，to stay 补充说明 him 要做的事。",
    "classification": [
      "想让某人做",
      "让某人做",
      "看见或听见某人做",
      "说明宾语的动作"
    ],
    "usage": [
      {
        "h": "先找句子里的那个人",
        "t": "I want him to stay. 中 him 是我想让其留下的人。后面的 to stay 不能和 him 的意思分开看。"
      },
      {
        "h": "want 常配人加 to do",
        "t": "I want you to help me. 可以先按“我想让你帮我”来理解。want 后的人常用 me、him、her 等宾格形式。"
      },
      {
        "h": "make / let 后通常不用 to",
        "t": "She made me laugh. 是她让我笑了；Let him go. 是让他走。要分别记住 make / let 的搭配。"
      },
      {
        "h": "再了解一点：感官与被动结构",
        "t": "I saw him run. 看到了他跑的动作；I saw him running. 强调看见他正在跑。变成 He was made to wait. 这种被动说法时，to 又要出现。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "want 后的人再接 to do",
        "wrong": "I want him go home.",
        "right": "I want him to go home.",
        "text": "这里想让他回家，需要 him to go 这个组合。"
      },
      {
        "title": "make 后不用 to",
        "wrong": "She made me to laugh.",
        "right": "She made me laugh.",
        "text": "主动的 make someone do 结构通常省去 to。"
      }
    ],
    "examples": [
      {
        "en": "I want him to stay.",
        "zh": "我想让他留下。",
        "note": "to stay 说明想让 him 做什么。"
      },
      {
        "en": "She made me laugh.",
        "zh": "她让我笑了。",
        "note": "make 后用 me，再直接接原形 laugh。"
      }
    ]
  },
  "prep-to": {
    "definition": "to 有两种常见工作：有时接动词原形，如 want to go；有时像介词一样接名词或 -ing，如 look forward to seeing you。不能一看见 to 就直接加动词原形。",
    "classification": [
      "to + 动词原形",
      "to + 名词或代词",
      "to + doing",
      "看前面的搭配"
    ],
    "usage": [
      {
        "h": "先看简单的 want to",
        "t": "I want to see you. 中，to 后的 see 用原形，说明想做什么。这里的 to 属于不定式结构。"
      },
      {
        "h": "再看 to 后是人或地方",
        "t": "Give it to me. 是把它给我；go to school 是去学校。这里的 to 后面接人或地方，不是引出原形动作。"
      },
      {
        "h": "把固定短语一起记",
        "t": "look forward to 是“期待”。它后面可以接 a trip，也可以接 seeing you；接动作时常用 -ing。"
      },
      {
        "h": "再了解一点：同样的 used to 别混淆",
        "t": "I used to walk. 是我过去常走路；I am used to walking. 是我习惯走路。后一个 to 是介词，后面接 walking。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "期待见面用 seeing",
        "wrong": "I look forward to see you.",
        "right": "I look forward to seeing you.",
        "text": "look forward to 是一个搭配，后面接动作时用 -ing。"
      },
      {
        "title": "want to 后用原形",
        "wrong": "I want to seeing you.",
        "right": "I want to see you.",
        "text": "want to 后使用原形 see，不使用 seeing。"
      }
    ],
    "examples": [
      {
        "en": "I want to see you.",
        "zh": "我想见你。",
        "note": "这里 to 后接原形 see。"
      },
      {
        "en": "I look forward to seeing you.",
        "zh": "我期待见到你。",
        "note": "这个搭配中的 to 后接 seeing。"
      }
    ]
  },
  "participles": {
    "definition": "分词是动词的特殊形式，常见的有 doing 和过去分词 done。它们可以放在名词旁，补充说明“正在做什么”或“被做了什么”，如 a crying baby（正在哭的宝宝）、a broken cup（破了的杯子）。",
    "classification": [
      "doing：主动的动作",
      "done：被动或相关状态",
      "放在名词旁说明",
      "动作是谁做的"
    ],
    "usage": [
      {
        "h": "先看名词在做还是被做",
        "t": "a crying baby 说宝宝自己在哭；a broken cup 说杯子已经破了。先理解意思，再选择形式。"
      },
      {
        "h": "短的说明常放在名词前",
        "t": "a sleeping cat 是睡着的猫。sleeping 放在 cat 前，告诉你是哪一种情况的猫。"
      },
      {
        "h": "长一点的说明常放在后面",
        "t": "The boy sitting here is Tom. 中 sitting here 说明坐在这里的是哪个男孩；整句话主要说这个男孩是汤姆。"
      },
      {
        "h": "再了解一点：别让动作找错人",
        "t": "Walking home, I saw a cat. 中走路的是 I。若写 Walking home, the rain started.，就像是雨在走路，应改写。并不是每个 -ed 都表示同样的“已经结束”。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "动词不能直接挤进名词说明",
        "wrong": "The boy sit here is Tom.",
        "right": "The boy sitting here is Tom.",
        "text": "这里用 sitting here 修饰 boy；sit 不能这样直接连接两套句子。"
      },
      {
        "title": "过去分词不是普通过去式",
        "wrong": "The cup was broke by Tom.",
        "right": "The cup was broken by Tom.",
        "text": "was 后表达杯子被打破，要使用过去分词 broken。"
      }
    ],
    "examples": [
      {
        "en": "The crying baby is hungry.",
        "zh": "正在哭的宝宝饿了。",
        "note": "crying 说明宝宝正在哭。"
      },
      {
        "en": "The broken cup is on the table.",
        "zh": "那个破杯子在桌子上。",
        "note": "broken 说明杯子破了的状态。"
      }
    ]
  },
  "real-if": {
    "definition": "真实条件句就是在说：“如果这件事发生，就会怎样。”它谈的是可能发生的事。例如，下雨是可能的，我们就可以说“如果下雨，我就待在家里”。",
    "classification": [
      "如果：if",
      "如果不：unless",
      "条件后面的结果"
    ],
    "usage": [
      {
        "h": "先找“如果”和“就”",
        "t": "If it rains, I will stay home. 就是“如果下雨，我就待在家里”。if 后说条件，后半句说结果。"
      },
      {
        "h": "说未来的可能情况",
        "t": "先学常见搭配：If + 现在的形式，后面用 will + 动作原形。例如 If he calls, I will tell you. 不要在两边都机械加 will。"
      },
      {
        "h": "结果不一定用 will",
        "t": "If I am tired, I go to bed. 说平时的习惯。If you are tired, sit down. 是“如果累了，就坐下”，直接给建议。这两种结果都不用 will。"
      },
      {
        "h": "再了解一点：unless",
        "t": "unless 常表示“如果不”。Unless you hurry, you will be late. 是“如果不快点，就会迟到”。if 还可以表示“是否”，那是另一种用法。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "he、she、it 后注意动词变化",
        "wrong": "If it rain, I will stay home.",
        "right": "If it rains, I will stay home.",
        "text": "it 后这里用 rains。前半句是在说可能出现的天气。"
      },
      {
        "title": "should 后面不加 to",
        "wrong": "If you are tired, you should to rest.",
        "right": "If you are tired, you should rest.",
        "text": "should 后直接接 rest，表示“应该休息”。"
      }
    ],
    "examples": [
      {
        "en": "If it rains, I will stay home.",
        "zh": "如果下雨，我就待在家里。",
        "note": "下雨是条件；待在家里是结果。"
      },
      {
        "en": "If you are tired, sit down.",
        "zh": "如果你累了，就坐下。",
        "note": "后半句直接提出建议，不必加 will。"
      }
    ]
  },
  "future-time": {
    "definition": "说“等某件事发生以后，我会做什么”时，英语常把小句子里的动作写成现在的形式。比如“等我到家，我会给你打电话”，到家虽在未来，也常写 get。",
    "classification": [
      "when：当……时",
      "until：直到",
      "as soon as：一……就",
      "if：如果"
    ],
    "usage": [
      {
        "h": "先看一个短句",
        "t": "I will call you when I get home. 就是“我到家时会给你打电话”。will call 说将来的打算；when 后用 get。"
      },
      {
        "h": "先记最常见的写法",
        "t": "说明未来的时间或可能条件时，when、until、if 后通常用现在的形式。When she comes, we will eat. 中 she 后的 come 要写成 comes。"
      },
      {
        "h": "分清“等到”和“问什么时候”",
        "t": "I know when he will come. 是“我知道他什么时候会来”。这里 when 引出的内容是“知道什么”，不适用前面的同一条规则。"
      },
      {
        "h": "再了解一点：先做完",
        "t": "I will go out after I have eaten. 强调“吃完后再出去”。这种时间小句里也能用现在完成形式，不是只能使用一般现在时。",
        "advanced": true
      },
      {
        "h": "再了解一点：will 不总是表示将来",
        "t": "will 有时表示“愿意”，而不只是未来。If you will wait, I can help. 可以表示“如果你愿意等，我就能帮忙”。这与普通的将来时间规则不同。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "普通将来时间说明不重复套 will",
        "wrong": "I will call you when I will get home.",
        "right": "I will call you when I get home.",
        "text": "这里的 when 表示到家这个时间。常用 get，不再机械加 will。"
      },
      {
        "title": "“不知道什么时候”仍按正常陈述顺序",
        "wrong": "I don’t know when will he come.",
        "right": "I don’t know when he will come.",
        "text": "大句子是“我不知道……”。后面的内容写 he will come，不照搬独立问句的顺序。"
      }
    ],
    "examples": [
      {
        "en": "I will call you when I get home.",
        "zh": "我到家时会给你打电话。",
        "note": "get 表示未来会到家，但 when 后仍用现在的形式。"
      },
      {
        "en": "We will eat as soon as Dad comes home.",
        "zh": "爸爸一到家，我们就吃饭。",
        "note": "as soon as 是“一……就”；Dad 后用 comes。"
      }
    ]
  },
  "time-connectors": {
    "definition": "时间连接词帮助我们说清“什么时候、先做什么、后做什么”。例如 before 是“在……以前”，after 是“在……以后”。先想清两件事的先后，再选词。",
    "classification": [
      "when：当时",
      "while：在……期间",
      "before / after：之前 / 之后",
      "until / since：终点 / 起点"
    ],
    "usage": [
      {
        "h": "用 before 和 after 说先后",
        "t": "Wash your hands before you eat. 是“吃饭前洗手”。如果把 before 换成 after，就变成“吃饭后洗手”，意思会改变。"
      },
      {
        "h": "用 while 说明正在做事的背景",
        "t": "Dad called while I was eating. 是“我吃饭时，爸爸来电话了”。while 后常说持续一段时间的活动。"
      },
      {
        "h": "用 until 找到停止或开始的时间",
        "t": "I waited until five. 是“我一直等到五点”。I did not leave until five. 是“我到五点才离开”。先看有没有 not，意思不同。"
      },
      {
        "h": "再了解一点：since",
        "t": "since 常给出开始时间。I have lived here since May. 是“从五月起，我就住在这里”。不要把“从五月起”和“持续五个月”混为一谈。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "since 后面不是一段时长",
        "wrong": "I have lived here since two years.",
        "right": "I have lived here for two years.",
        "text": "two years 是两年的时长，用 for；since 可以接开始的时间，如 since May。"
      },
      {
        "title": "正在做事时需要 be + -ing",
        "wrong": "Dad called while I eating.",
        "right": "Dad called while I was eating.",
        "text": "was eating 才能完整表达“当时正在吃饭”。"
      }
    ],
    "examples": [
      {
        "en": "Wash your hands before you eat.",
        "zh": "吃饭前先洗手。",
        "note": "before 说明洗手在前，吃饭在后。"
      },
      {
        "en": "Dad called while I was eating.",
        "zh": "我吃饭时，爸爸来电话了。",
        "note": "was eating 说当时正在做的事；called 说发生的来电。"
      }
    ]
  },
  "contrast": {
    "definition": "because 帮我们说明“为什么”；although 表示“虽然有这个情况，事情还是这样”；but 表示“但是”。先把中文里的原因或转折想清楚，再选连接词。",
    "classification": [
      "because：因为",
      "although / though：虽然",
      "but：但是",
      "because of：因为某事"
    ],
    "usage": [
      {
        "h": "先用 because 说原因",
        "t": "I stayed home because I was sick. 就是“我待在家里，因为我生病了”。because 后有“谁+怎么样”的完整小句。"
      },
      {
        "h": "用 although 说“虽然……还是……”",
        "t": "Although it rained, we went out. 是“虽然下雨，我们还是出门了”。下雨并没有阻止出门。"
      },
      {
        "h": "比较 because 和 because of",
        "t": "because it rained 后面是一个小句子；because of the rain 后面只是“这场雨”。两个形式不能直接互换后面的内容。"
      },
      {
        "h": "再了解一点：不要重复标同一关系",
        "t": "基础写作里，同一对“因为……所以……”通常选 because 或 so，不同时套两者；“虽然……但是……”也通常选 although 或 but。复杂句子可以在不同层次使用多个连接词。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "同一对因果不重复写 because 和 so",
        "wrong": "Because I was sick, so I stayed home.",
        "right": "I stayed home because I was sick.",
        "text": "用 because 已能说明原因，不必再给同一关系加 so。"
      },
      {
        "title": "although 和 but 不机械配对",
        "wrong": "Although it rained, but we went out.",
        "right": "Although it rained, we went out.",
        "text": "although 已表达“虽然……还是……”，这里不再重复加 but。"
      }
    ],
    "examples": [
      {
        "en": "I stayed home because I was sick.",
        "zh": "我生病了，所以待在家里。",
        "note": "because 后说明待在家里的原因。"
      },
      {
        "en": "Although it rained, we went out.",
        "zh": "虽然下雨，我们还是出门了。",
        "note": "although 表示结果和原来的预期不一样。"
      }
    ]
  },
  "purpose-result": {
    "definition": "目的是“想要达到什么”，结果是“后来造成了什么”。“我跑步是为了赶车”说目的；“我太累了，所以去睡觉”说结果。",
    "classification": [
      "to do：为了做",
      "so that：为了让……",
      "so ... that：太……以至于",
      "such ... that：这样的……以至于"
    ],
    "usage": [
      {
        "h": "先用 to + 动作说目的",
        "t": "I ran to catch the bus. 是“我跑起来，为了赶公交车”。to 后的 catch 用动作原形。它不保证最后一定赶上了。"
      },
      {
        "h": "目的涉及另一个人",
        "t": "I spoke slowly so that Ben could understand. 是“我说得慢，好让本听懂”。so that 后可以说清谁要达到什么结果。"
      },
      {
        "h": "用 so ... that 说造成的结果",
        "t": "She was so tired that she went to bed. 是“她太累了，便去睡觉”。so 后先说程度，that 后说发生的结果。"
      },
      {
        "h": "再了解一点：such 和 so",
        "t": "常见写法是 such a kind boy，或 so kind。先看后面有没有 boy 这样的名词。还有 so kind a boy 等较特别的顺序，初学时先掌握常见写法。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "说“为了赶车”常用 to catch",
        "wrong": "I ran for catch the bus.",
        "right": "I ran to catch the bus.",
        "text": "to + catch 可以表达跑起来的目的；不能写 for + 普通动作原形。"
      },
      {
        "title": "so 后不能这样摆 a",
        "wrong": "He is so a kind boy.",
        "right": "He is such a kind boy.",
        "text": "这里一起说“这样一个好男孩”，常用 such a kind boy。"
      }
    ],
    "examples": [
      {
        "en": "I ran to catch the bus.",
        "zh": "我跑起来，为了赶上公交车。",
        "note": "to catch 说明为什么跑。"
      },
      {
        "en": "She was so tired that she went to bed.",
        "zh": "她太累了，便去睡觉了。",
        "note": "that 后说疲惫带来的结果。"
      }
    ]
  },
  "relative-pronouns": {
    "definition": "有时我们要在名词后面加一句话，说明“是哪一个人或东西”。这句话叫定语从句。who、which、that 等词把它接到前面的名词上。",
    "classification": [
      "who：说人",
      "which：说东西",
      "that：常可说人或东西",
      "whose：说属于谁"
    ],
    "usage": [
      {
        "h": "先比较短句和长一点的句子",
        "t": "The girl is my friend. 只说“那个女孩是我朋友”。The girl who sings is my friend. 补充说“唱歌的那个女孩”。"
      },
      {
        "h": "看连接词代替谁",
        "t": "The boy who called is Tom. 中 who 代替 boy，表示男孩打电话。The book that I want is here. 中 that 代替 book，表示我想要那本书。"
      },
      {
        "h": "用 whose 说“谁的”",
        "t": "The boy whose bag is blue is Tom. 是“书包是蓝色的那个男孩是汤姆”。whose 后面还有 bag，意思是“他的书包”。"
      },
      {
        "h": "再了解一点：不能只按人或物死选",
        "t": "口语里作宾语的 who 常见，正式表达可用 whom。哪些词能省、前面是否有逗号或介词，也会影响选择，需要结合完整句子判断。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "东西通常不用 who 来连接",
        "wrong": "The book who I want is here.",
        "right": "The book that I want is here.",
        "text": "book 是东西，这里可用 that 或 which，不用 who。"
      },
      {
        "title": "外层说一个男孩，用 is",
        "wrong": "The boy who calls me are Tom.",
        "right": "The boy who calls me is Tom.",
        "text": "who calls me 说明是哪一个男孩。外层说的是 The boy，一个人，所以用 is。"
      }
    ],
    "examples": [
      {
        "en": "The boy who called is Tom.",
        "zh": "打电话的那个男孩是汤姆。",
        "note": "who called 帮我们说明是哪一个男孩。"
      },
      {
        "en": "The book that I want is here.",
        "zh": "我想要的那本书在这里。",
        "note": "that 代替 book，表示我想要的东西。"
      }
    ]
  },
  "relative-adverbs": {
    "definition": "我们可以在名词后补充“在哪儿、什么时候、为什么”。where 常说明地点，when 常说明时间，why 常说明原因。先看后面的话缺什么，不要只看前面是不是地点词。",
    "classification": [
      "where：地点",
      "when：时间",
      "why：原因",
      "whose：另一类，表示所属"
    ],
    "usage": [
      {
        "h": "先看 where 的意思",
        "t": "This is the room where I sleep. 是“这是我睡觉的房间”。where I sleep 说明“我在这个房间睡觉”。"
      },
      {
        "h": "地点词后也可能用 which 或 that",
        "t": "This is the shop that I like. 是“这是我喜欢的商店”。like 需要说明喜欢什么，所以用 that，不用 where。"
      },
      {
        "h": "when 和 why 也按后面的意思选择",
        "t": "I remember the day when we met. 说相识的时间。the reason why he left 说离开的原因。先把后面的话和前面的名词连起来理解。"
      },
      {
        "h": "再了解一点：whose 不是地点词",
        "t": "whose 表示“谁的”，是关系代词，不是关系副词。a house whose roof is red 说房子的屋顶是红色的；whose 也可以表示东西之间的所属关系。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "喜欢什么，需要的是一个东西",
        "wrong": "This is the shop where I like.",
        "right": "This is the shop that I like.",
        "text": "like 后需要“喜欢什么”，这里 that 代替 shop，不能只因 shop 是地点就选 where。"
      },
      {
        "title": "whose 后要说清是什么东西",
        "wrong": "The house whose is red is old.",
        "right": "The house whose roof is red is old.",
        "text": "whose roof 是“它的屋顶”；whose 后需要 roof 这样的名词。"
      }
    ],
    "examples": [
      {
        "en": "This is the room where I sleep.",
        "zh": "这是我睡觉的房间。",
        "note": "where 表示“在这个房间里”。"
      },
      {
        "en": "I remember the day when we met.",
        "zh": "我记得我们见面的那一天。",
        "note": "when 表示“在那一天”。"
      }
    ]
  },
  "relative-omit": {
    "definition": "有些定语从句里的连接词可以不写，因为读者仍然看得懂。初学时先学一个区别：连接词表示“动作的对象”时常可省；表示“做动作的人”时通常不能省。",
    "classification": [
      "代替动作对象：常可省",
      "代替做动作的人：保留",
      "介词前置：保留",
      "变成分词短语：进阶"
    ],
    "usage": [
      {
        "h": "先看可以省的例子",
        "t": "The book that I want is here. 可以写成 The book I want is here. 两句都表示“我想要的那本书在这里”。"
      },
      {
        "h": "再看不能直接省的例子",
        "t": "The boy who sits near me is Tom. 中 who 表示坐在我旁边的人。直接去掉 who，会把 sits 和 is 挤成没有连接的两个动作。"
      },
      {
        "h": "不要把省词当成随意删词",
        "t": "能不能省，要看句子结构。带逗号的补充说明通常要保留关系词；介词放在前面时，如 for which，也要保留 which。"
      },
      {
        "h": "再了解一点：缩成 -ing 或 done",
        "t": "the girl who is reading 可以在合适语境下缩成 the girl reading。缩写前要确认是谁做动作、有没有被动，以及意思有没有改变。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "表示做动作的人时不能这样删 who",
        "wrong": "The boy sits near me is Tom.",
        "right": "The boy who sits near me is Tom.",
        "text": "who 把 sits near me 接到 the boy 后面，说明是哪个男孩。"
      },
      {
        "title": "介词已经放在前面时要保留关系词",
        "wrong": "This is the book for I paid.",
        "right": "This is the book for which I paid.",
        "text": "for 后要保留 which。日常表达也可说 This is the book I paid for.。"
      }
    ],
    "examples": [
      {
        "en": "The book I want is here.",
        "zh": "我想要的那本书在这里。",
        "note": "I want 后面所缺的东西就是 book，所以原来的 that 可以省。"
      },
      {
        "en": "The boy who sits near me is Tom.",
        "zh": "坐在我旁边的那个男孩是汤姆。",
        "note": "who 表示坐着的人，这里不能直接删掉。"
      }
    ]
  },
  "relative-extra": {
    "definition": "有的定语从句帮我们挑出“是哪一个”；有的只是给已经说清的人或东西再加一点消息。后面这一种常用逗号隔开。",
    "classification": [
      "用来确定是哪一个",
      "用来再补充消息",
      "逗号两边的信息关系"
    ],
    "usage": [
      {
        "h": "先看“是哪一个”",
        "t": "The boy who wears a hat is Ben. 是“戴帽子的那个男孩是本”。who wears a hat 帮我们找到要说的那个男孩，通常不加逗号。"
      },
      {
        "h": "再看补充消息",
        "t": "My mom, who is a nurse, is here. 已经用 My mom 说清是谁；who is a nurse 只是再告诉你“她是一名护士”。"
      },
      {
        "h": "逗号会影响理解",
        "t": "补充消息通常用逗号和主干隔开。My mom is here. 是主干，也就是句子最基本的意思；中间的信息可以先放到一边读。"
      },
      {
        "h": "再了解一点：补充说明的连接词",
        "t": "带逗号的这种说明不能用 that，也通常不能把关系词省掉。which 有时还可补充前面整件事的情况，遇到时要看它到底在说什么。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "逗号后的补充说明不用 that",
        "wrong": "My dad, that is kind, helps me.",
        "right": "My dad, who is kind, helps me.",
        "text": "已经说清是爸爸，再补充他很友善，使用 who，不用 that。"
      },
      {
        "title": "正式完整句不重复主语",
        "wrong": "My mom, who is a nurse, she is here.",
        "right": "My mom, who is a nurse, is here.",
        "text": "标准书面完整句中，主句已经有 My mom，不再加一个 she。"
      }
    ],
    "examples": [
      {
        "en": "My mom, who is a nurse, is here.",
        "zh": "我妈妈在这里。她是一名护士。",
        "note": "去掉逗号中的说明，My mom is here. 仍是完整的基本意思。"
      },
      {
        "en": "The boy who wears a hat is Ben.",
        "zh": "戴帽子的那个男孩是本。",
        "note": "没有逗号，后面的说明帮我们确定是哪一个男孩。"
      }
    ]
  },
  "objects": {
    "definition": "“我知道……”“我觉得……”“我想知道……”后面，可以放一个有“谁+做什么”的小句子。这个小句子说出知道、觉得或想知道的内容，叫宾语从句。",
    "classification": [
      "that：接一件事",
      "what：什么内容",
      "whether / if：是否",
      "疑问词后按陈述顺序"
    ],
    "usage": [
      {
        "h": "先看它在回答什么",
        "t": "I know that she is home. 是“我知道她在家”。问“知道什么”，答案就是后面的整句话 she is home。"
      },
      {
        "h": "从句里仍然先说人，再说动作",
        "t": "Where is he? 是独立问句；I know where he is. 是“我知道他在哪儿”。后者写 he is，不写 is he。"
      },
      {
        "h": "用 what 说需要的东西",
        "t": "I know what you need. 是“我知道你需要什么”。what 不只是连接，还表示“你需要的东西”。that 通常不代替这个东西。"
      },
      {
        "h": "再了解一点：是否和过去转述",
        "t": "whether 和 if 都能在一些句子里表示“是否”，但并非处处可换。转述过去的话也要看事情是否仍然成立，不能把所有动作都机械改成过去式。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "知道的内容不用直接问句顺序",
        "wrong": "I know where is he.",
        "right": "I know where he is.",
        "text": "大句子并没有在直接问“他在哪儿”；后面按 he is 的顺序写。"
      },
      {
        "title": "need 后缺少“需要什么”",
        "wrong": "I know that you need.",
        "right": "I know what you need.",
        "text": "这里想说“我知道你需要的东西”，用 what 来表示这个内容。"
      }
    ],
    "examples": [
      {
        "en": "I know that she is home.",
        "zh": "我知道她在家。",
        "note": "that 后说出“知道什么”。这里的 that 常可不写。"
      },
      {
        "en": "I know what you need.",
        "zh": "我知道你需要什么。",
        "note": "what 表示“你需要的东西”。"
      }
    ]
  },
  "subject-clause": {
    "definition": "句子的主语是“这句话说的是谁或什么”。有时主语不是一个词，而是一整件事。把这件事用小句子说出来，就形成主语从句。",
    "classification": [
      "what：说什么事情或东西",
      "that：说一件完整的事",
      "whether：说是否",
      "it：先占位置"
    ],
    "usage": [
      {
        "h": "先把整段内容当作一件事",
        "t": "What you said is true. 是“你说的话是真的”。整段 What you said 就是这句话要判断的内容，不要只把 you 当作外层主语。"
      },
      {
        "h": "长内容可以放后面",
        "t": "It is clear that he is tired. 是“很明显，他累了”。英语先放一个 it，再把真正要说明的 that he is tired 放到后面。"
      },
      {
        "h": "小句子里也用正常顺序",
        "t": "Where he lives is not clear. 是“他住在哪儿还不清楚”。小句子写 he lives，不用独立问句那样的 does he live。"
      },
      {
        "h": "再了解一点：that 和 whether",
        "t": "句子开头的 that 主语从句通常保留 that。表示“是否”放在句首时常用 whether，例如 Whether he comes is not clear.。先读懂意思，再记位置限制。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "一整件事作主语时，常配单数形式",
        "wrong": "What he said are true.",
        "right": "What he said is true.",
        "text": "这里把“他说的话”作为一件事来判断，用 is。不要只看里面有几个人或几个词。"
      },
      {
        "title": "在大句子中不照搬问句",
        "wrong": "Where does he live is not clear.",
        "right": "Where he lives is not clear.",
        "text": "where he lives 整体表示“他住在哪儿”这件事，不是在这里直接发问。"
      }
    ],
    "examples": [
      {
        "en": "What you said is true.",
        "zh": "你说的话是真的。",
        "note": "What you said 整体是这句话说的内容。"
      },
      {
        "en": "It is clear that he is tired.",
        "zh": "很明显，他累了。",
        "note": "it 先占主语位置，that 后说明具体是什么事。"
      }
    ]
  },
  "predicative": {
    "definition": "be 后面常说明前面的人或事物“是什么、怎么样”。有时这里放的不是一个词，而是一个小句子，用来解释问题、原因或内容。这叫表语从句。",
    "classification": [
      "that：解释内容",
      "where / when：说明地点或时间",
      "why / how：说明原因或方法",
      "whether：说明是否"
    ],
    "usage": [
      {
        "h": "先回想最短的 be 句子",
        "t": "He is happy. 用 happy 说明他怎么样。The question is where he lives. 则用 where he lives 说明“问题是什么”。"
      },
      {
        "h": "先说问题，再给出内容",
        "t": "The question is where he lives. 就是“问题是他住在哪里”。不要因为里面有 where 就把整个句子改成问句。"
      },
      {
        "h": "从句里用正常陈述顺序",
        "t": "This is why I came. 是“这就是我来的原因”。why 后先写 I，再写 came；where 后也通常先写人，再写动作。"
      },
      {
        "h": "再了解一点：be 后不一定是这种从句",
        "t": "She is reading. 是进行时，并没有在解释“她是什么”。要看 be 后的内容是在组成动词动作，还是在说明前面的主语。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "说明问题时不用独立问句顺序",
        "wrong": "The question is where does he live.",
        "right": "The question is where he lives.",
        "text": "where he lives 是问题的内容，不是单独拿出来发问。"
      },
      {
        "title": "原因后面要有能连接的小句子",
        "wrong": "The reason is he tired.",
        "right": "The reason is that he is tired.",
        "text": "“他累了”需要 he is tired；that 帮助把这件事接到前面的说明中。"
      }
    ],
    "examples": [
      {
        "en": "The question is where he lives.",
        "zh": "问题是他住在哪里。",
        "note": "where he lives 解释 question 的具体内容。"
      },
      {
        "en": "This is why I came.",
        "zh": "这就是我来的原因。",
        "note": "why I came 说明 This 指的是什么原因。"
      }
    ]
  },
  "appositive": {
    "definition": "看到 news“消息”、fact“事实”、idea“想法”后，你可能会问“是什么消息、什么事实、什么想法”。同位语从句用一个小句子，把这个内容说清楚。",
    "classification": [
      "news：什么消息",
      "fact：什么事实",
      "idea：什么想法",
      "question：什么问题"
    ],
    "usage": [
      {
        "h": "先问名词里装着什么内容",
        "t": "The news that Dad is home makes me happy. 是“爸爸在家的消息让我开心”。that Dad is home 就是 news 的具体内容。"
      },
      {
        "h": "不要把连接词当作小句子里的人或东西",
        "t": "the fact that he is right 中，he is right 本身已经说完整了。that 只是把这件事接到 fact 后面，不代替 he。"
      },
      {
        "h": "和“挑出哪一个”分开理解",
        "t": "the book that I bought 是“我买的那本书”，帮我们找是哪本书。the news that Dad is home 则是在解释消息本身说了什么。"
      },
      {
        "h": "再了解一点：并非所有名词都这样用",
        "t": "常见的是 news、fact、idea、hope 等可以装下“一件事”的名词。有些问题用 whether 表达“是否”；不能在任意名词后都照样加 that 小句子。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "that 后也需要完整的“谁+怎样”",
        "wrong": "The news that Dad home makes me happy.",
        "right": "The news that Dad is home makes me happy.",
        "text": "Dad home 缺少 is；消息的内容应完整写成 Dad is home。"
      },
      {
        "title": "一件事实后用 is",
        "wrong": "The fact that he is right are clear.",
        "right": "The fact that he is right is clear.",
        "text": "整段“他是对的这一事实”是外层句子说的内容，这里作为一件事，用 is clear。"
      }
    ],
    "examples": [
      {
        "en": "The news that Dad is home makes me happy.",
        "zh": "爸爸在家的消息让我开心。",
        "note": "that 后说明消息的具体内容。"
      },
      {
        "en": "The fact that he is right is clear.",
        "zh": "他是对的，这一事实很清楚。",
        "note": "he is right 是事实的内容；外层再用 is clear 作判断。"
      }
    ]
  },
  "inversion": {
    "definition": "英语普通句子常先说“谁”，再说“做什么”。倒装就是在特定情况下把表示动作的一部分或全部挪到“谁”的前面。它有固定用法，不是随意换位置。",
    "classification": [
      "整个动作放前面",
      "只把帮助动词放前面",
      "表示“也一样”",
      "省掉 if 的条件句"
    ],
    "usage": [
      {
        "h": "先比较正常顺序",
        "t": "The bus comes here. 是普通顺序。Here comes the bus. 把 comes 放到 the bus 前面，常用来提醒“公交车来了”。"
      },
      {
        "h": "分清全部和一部分",
        "t": "Here comes the bus. 把整个 comes 放前面。Never have I seen it. 只把 have 放到 I 前面，seen 仍在后面。"
      },
      {
        "h": "先还原，再理解意思",
        "t": "So can I. 常表示“我也能”。可以先想成 I can ... too，再看前面的人做了什么。不要只按每个词的固定位置翻译。"
      },
      {
        "h": "再了解一点：条件也可这样写",
        "t": "Should you need help, call me. 相当于 If you need help, call me.。这种条件写法比较正式，初学时先把普通 if 句子读懂。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "人称代词通常不照搬 here 倒装",
        "wrong": "Here comes he.",
        "right": "Here he comes.",
        "text": "主语直接用 he 时，通常说 Here he comes，不把 comes 移到 he 前。"
      },
      {
        "title": "表示“我也能”要保留正确的帮助动词",
        "wrong": "She can swim. So do I.",
        "right": "She can swim. So can I.",
        "text": "前面说的是 can swim“会游泳”，后面用 can 表示同样的能力。"
      }
    ],
    "examples": [
      {
        "en": "Here comes the bus.",
        "zh": "公交车来了。",
        "note": "comes 在 the bus 前面。"
      },
      {
        "en": "He can swim. So can I.",
        "zh": "他会游泳，我也会。",
        "note": "So can I 表示前面的情况也适合我。"
      }
    ]
  },
  "inversion-full": {
    "definition": "完全倒装就是把整个动词部分放到主语前面。主语指句子说的是谁或什么。初学时先认识 Here comes the bus.“公交车来了”这一类句子。",
    "classification": [
      "here / there 开头",
      "地点或方向放前面",
      "名词和代词的区别"
    ],
    "usage": [
      {
        "h": "先记一个常用提醒",
        "t": "Here comes the bus. 就是“公交车来了”。the bus 是句子说的东西，comes 被放到了它前面。"
      },
      {
        "h": "前面也可以先说地点",
        "t": "On the hill stands a house. 是“山上有一座房子”。先说 On the hill“在山上”，再用 stands a house 引出房子。"
      },
      {
        "h": "he、she、it 通常保持自己的顺序",
        "t": "Here he comes. 里 he 是代词，也就是直接代替人的词。此时通常不把 comes 放到 he 前面。"
      },
      {
        "h": "再了解一点：不是所有地点句都倒装",
        "t": "倒装常用来引入一个新出现的人或东西。I study at home. 这样的普通句子，不能只因有地点就随便把动词挪到前面。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "he 前面不这样放 comes",
        "wrong": "Here comes he.",
        "right": "Here he comes.",
        "text": "直接用 he 指一个人时，通常保持 he comes 的顺序。"
      },
      {
        "title": "动词仍需配合后面的主语",
        "wrong": "Here come the bus.",
        "right": "Here comes the bus.",
        "text": "the bus 是一辆公交车，用 comes。倒装不会取消动词原本的变化。"
      }
    ],
    "examples": [
      {
        "en": "Here comes the bus.",
        "zh": "公交车来了。",
        "note": "整段 comes 放在主语 the bus 前。"
      },
      {
        "en": "On the hill stands a house.",
        "zh": "山上有一座房子。",
        "note": "先说明地点，再引出 a house。"
      }
    ]
  },
  "inversion-partial": {
    "definition": "部分倒装只把帮助动词放到主语前面，主要动作仍留在后面。帮助动词包括 do、have、can 等。先认识 Never have I seen it.“我从没见过它”。",
    "classification": [
      "否定意思放句首",
      "only + 时间等说明",
      "so / neither 表示也一样"
    ],
    "usage": [
      {
        "h": "先比较一对句子",
        "t": "I have never seen it. 和 Never have I seen it. 都表示“我从没见过它”。后一句把 never 放开头，have 就移到 I 前。"
      },
      {
        "h": "原来没有帮助动词时借助 do",
        "t": "Only then did I understand. 是“直到那时我才明白”。用了 did，主要动作要写原形 understand。"
      },
      {
        "h": "表示“我也这样”时沿用前面的形式",
        "t": "She can swim. So can I. 表示“她会游泳，我也会”。前面是 can，后面也用 can；不是一律用 do。"
      },
      {
        "h": "再了解一点：only 放在谁前面",
        "t": "Only Tom knew. 中 only 只在说“只有汤姆”，没有把时间等说明放前面，所以不因此倒装。Only then ... 中 then 是时间，规则不同。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "never 放句首时要移动 have",
        "wrong": "Never I have seen it.",
        "right": "Never have I seen it.",
        "text": "这种否定意思放在句首的写法，需要把 have 放到 I 前面。"
      },
      {
        "title": "did 后用动作原形",
        "wrong": "Only then did I understood.",
        "right": "Only then did I understand.",
        "text": "did 已表示过去，后面的 understand 不再写成过去式 understood。"
      }
    ],
    "examples": [
      {
        "en": "Never have I seen it.",
        "zh": "我从来没有见过它。",
        "note": "先放 Never，再把 have 放到 I 前。"
      },
      {
        "en": "Only then did I understand.",
        "zh": "直到那时，我才明白。",
        "note": "did 在 I 前；understand 仍在后面，而且用原形。"
      }
    ]
  },
  "inversion-conditional": {
    "definition": "有些比较正式的条件句可以不写 if，而把 had、were 或 should 放到“谁”的前面。读到时先补回 if，按“如果……就……”理解。",
    "classification": [
      "Should you ...：如果你……",
      "Were I ...：假如我是……",
      "Had I ...：假如我当时……"
    ],
    "usage": [
      {
        "h": "先从容易理解的一句开始",
        "t": "Should you need help, call me. 就是“如果你需要帮助，就打给我”。它相当于 If you need help, call me.，不一定在说不可能的事。"
      },
      {
        "h": "表示“假如我是你”",
        "t": "Were I you, I would wait. 相当于 If I were you, I would wait.。were 放到 I 前，if 就不再重复出现。"
      },
      {
        "h": "说过去没发生的假设",
        "t": "Had I known, I would have helped. 是“要是我当时知道，我就会帮忙了”。Had I known 相当于 If I had known。"
      },
      {
        "h": "再了解一点：不是每种 if 句都这样改",
        "t": "只在合适的 had、were、should 结构中使用这种写法。普通 If he comes ... 不能直接改为 Comes he ...。想表达清楚时，用普通 if 句就很好。",
        "advanced": true
      }
    ],
    "pitfalls": [
      {
        "title": "should 后面的 need 用原形",
        "wrong": "Should you needs help, call me.",
        "right": "Should you need help, call me.",
        "text": "这里的 should 后直接接 need，不能再给 need 加 -s。整段表示“如果你需要帮助”。"
      },
      {
        "title": "倒装后不重复保留 if",
        "wrong": "If had I known, I would have helped.",
        "right": "Had I known, I would have helped.",
        "text": "把 had 移到 I 前后，这种写法省掉 if；也可改回 If I had known ...。"
      }
    ],
    "examples": [
      {
        "en": "Should you need help, call me.",
        "zh": "如果你需要帮助，就给我打电话。",
        "note": "相当于 If you need help, call me.，语气更正式。"
      },
      {
        "en": "Had I known, I would have helped.",
        "zh": "要是我当时知道，我就会帮忙了。",
        "note": "说的是过去的假设；现实中当时并不知道。"
      }
    ]
  }
}
  };
})();
