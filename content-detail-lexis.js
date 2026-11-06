/* Beginner explanations with everyday example words; stable lesson/question IDs retained. */
(() => {
  const entries = [
  {
    "id": "pronoun-personal",
    "g": "parts",
    "title": "人称代词与主格、宾格",
    "en": "Personal pronouns & case",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "I help her.：我帮助她。",
    "take": "人称代词是用来代替人或东西的词，比如 I（我）、she（她）、it（它）。有些词会因为在句中的位置不同而换形式。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "人称代词是用来代替人或东西的词，比如 I（我）、she（她）、it（它）。有些词会因为在句中的位置不同而换形式。"
      },
      {
        "h": "先认“谁做这件事”",
        "t": "I、he、she、we、they 常用来表示谁做事。She helps me. 中，帮忙的人是 she（她）。这种形式叫主格。"
      },
      {
        "h": "再认“动作对着谁”",
        "t": "me、him、her、us、them 常放在动词后，表示动作对着谁。I like her. 中，her 是我喜欢的人。这种形式叫宾格。"
      },
      {
        "h": "介词后也常用宾格",
        "t": "for me 表示为我，with her 表示和她。for、with 后通常用 me、her 这种形式，不用 I、she。"
      }
    ],
    "examples": [
      {
        "en": "I like her.",
        "zh": "我喜欢她。",
        "note": "I 是我，表示谁喜欢；her 是她，表示我喜欢谁。"
      },
      {
        "en": "She helps me.",
        "zh": "她帮助我。",
        "note": "She 是帮忙的人；me 是得到帮助的我。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "正式书面句中，哪一种主语形式合适？",
        "options": [
          "Leo and I are ready.",
          "Leo and me are ready.",
          "Leo and us is ready.",
          "Leo and him is ready."
        ],
        "answer": 0,
        "why": "并列主语中的人称代词在正式书面表达中用主格 I，整个并列主语配 are。",
        "id": "pronoun-personal-0"
      },
      {
        "type": "fill",
        "prompt": "I spoke to ____ (she) after class.",
        "answer": [
          "her"
        ],
        "why": "to 后的人称代词作介词宾语，使用宾格 her。",
        "id": "pronoun-personal-1"
      },
      {
        "type": "mc",
        "prompt": "Someone may need help. 后用单数 they 指这个人，哪种形式正确？",
        "options": [
          "They is waiting.",
          "They are waiting.",
          "They am waiting.",
          "Them are waiting."
        ],
        "answer": 1,
        "why": "单数 they 指一个人时仍与 are 等形式搭配，不能改成 they is。",
        "id": "pronoun-personal-2"
      }
    ],
    "related": [
      "pronouns",
      "agreement"
    ],
    "classification": [
      "谁做事：I/he/she",
      "动作对着谁：me/him/her",
      "we/us；they/them",
      "再认识单数 they"
    ],
    "pitfalls": [
      {
        "title": "for 后面用 me",
        "wrong": "Please wait for I.",
        "right": "Please wait for me.",
        "text": "意思是请等我。for 后用 me，不用 I。"
      },
      {
        "title": "they 配 are",
        "wrong": "They is here.",
        "right": "They are here.",
        "text": "只要主语写 they，这里就用 are。"
      }
    ],
    "advanced": false,
    "extraUsage": [
      {
        "h": "再了解一点：同一个人也能用 they",
        "t": "不知道一个人的性别、或不需要说明时，英语也常用 they 指这个人，但仍说 they are。日常对话中 It is me（是我）也很常见。",
        "advanced": true
      }
    ]
  },
  {
    "id": "pronoun-possessive",
    "g": "parts",
    "title": "物主限定词与物主代词",
    "en": "Possessive determiners & pronouns",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "my bag ↔ mine",
    "take": "说“我的、你的、她的”时，后面有没有名词，会影响选哪个词。my bag 是我的包；mine 可以直接表示“我的那个”。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "说“我的、你的、她的”时，后面有没有名词，会影响选哪个词。my bag 是我的包；mine 可以直接表示“我的那个”。"
      },
      {
        "h": "后面有东西名称：用 my 等词",
        "t": "my book 是我的书，her bag 是她的包。my、her 等放在名词前，告诉我们东西是谁的。"
      },
      {
        "h": "后面不再写名词：用 mine 等词",
        "t": "This bag is mine. 是这个包是我的。mine 已经包含“我的包”的意思，后面不再加 bag。"
      },
      {
        "h": "再注意两个拼写",
        "t": "ours、yours、hers、theirs 不加 ’。its 是“它的”，it’s 通常是 it is 或 it has 的缩写。"
      }
    ],
    "examples": [
      {
        "en": "This is my bag.",
        "zh": "这是我的包。",
        "note": "my 后面有 bag，所以用 my。"
      },
      {
        "en": "This bag is mine.",
        "zh": "这个包是我的。",
        "note": "句尾没有再写 bag，用 mine 表示“我的那个包”。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "“我的这本书”可自然表达为：",
        "options": [
          "the my book",
          "this book of mine",
          "mine this book",
          "this book of my"
        ],
        "answer": 1,
        "why": "this book of mine 避免 this 与 my 直接叠加，mine 独立表示“我的”。",
        "id": "pronoun-possessive-0"
      },
      {
        "type": "fill",
        "prompt": "That coat belongs to Anna. It is ____ (her).",
        "answer": [
          "hers"
        ],
        "why": "空格后没有被限定的名词，要用独立的物主代词 hers。",
        "id": "pronoun-possessive-1"
      },
      {
        "type": "mc",
        "prompt": "哪个物主表达的拼写正确？",
        "options": [
          "our’s",
          "her’s",
          "theirs",
          "your’s"
        ],
        "answer": 2,
        "why": "ours、hers、yours、theirs 这些物主代词均不加撇号。",
        "id": "pronoun-possessive-2"
      }
    ],
    "related": [
      "pronouns",
      "determiners",
      "possession"
    ],
    "classification": [
      "后面有名词：my",
      "单独用：mine",
      "our/ours 等形式",
      "its 与 it’s"
    ],
    "pitfalls": [
      {
        "title": "有名词时用 my",
        "wrong": "This is mine bag.",
        "right": "This is my bag.",
        "text": "bag 已经写出来，前面用 my。"
      },
      {
        "title": "ours 不加 ’",
        "wrong": "The bags are our’s.",
        "right": "The bags are ours.",
        "text": "ours 本身表示我们的，不再加 ’。"
      }
    ],
    "advanced": false,
    "extraUsage": [
      {
        "h": "再了解一点：this book of mine",
        "t": "this book of mine 表示我的这本书。这样可以既说“这本”，又说“我的”，不必把 the、this、my 都堆在名词前。",
        "advanced": true
      }
    ]
  },
  {
    "id": "pronoun-reflexive",
    "g": "parts",
    "title": "反身代词与相互代词",
    "en": "Reflexive & reciprocal pronouns",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "I wash myself.：我给自己洗。",
    "take": "myself、herself 等表示“自己”。当做动作的人和受到动作影响的人是同一个时，常用这些词。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "myself、herself 等表示“自己”。当做动作的人和受到动作影响的人是同一个时，常用这些词。"
      },
      {
        "h": "动作回到自己身上",
        "t": "I wash myself. 中，洗的人和被洗的人都是我。myself 就表示我自己。"
      },
      {
        "h": "和“互相”分开",
        "t": "We help each other. 表示我们互相帮助。We help ourselves. 则表示我们帮助自己，两句话意思不同。"
      },
      {
        "h": "再认识“亲自”的意思",
        "t": "I did it myself. 是我亲自做的。myself 在这里强调亲自；普通说“我明天来”仍用 I，不用 myself 当普通主语。"
      }
    ],
    "examples": [
      {
        "en": "I can wash myself.",
        "zh": "我能自己洗漱。",
        "note": "myself 指的还是 I，表示我自己。"
      },
      {
        "en": "We help each other.",
        "zh": "我们互相帮助。",
        "note": "each other 表示彼此，不是各自只帮自己。"
      }
    ],
    "quiz": [
      {
        "type": "fill",
        "prompt": "I cut ____ while preparing dinner.（误伤的是我自己；填反身代词）",
        "answer": [
          "myself"
        ],
        "why": "主语 I 与被割伤的人是同一人，需要反身代词 myself。",
        "id": "pronoun-reflexive-0"
      },
      {
        "type": "mc",
        "prompt": "要明确表示“两位同学互相帮助”，应说：",
        "options": [
          "The two students helped each other.",
          "The two students helped himself.",
          "The two students helped itself.",
          "The two students helped herself."
        ],
        "answer": 0,
        "why": "each other 表示不同对象之间的相互关系，其他选项的单数反身形式也不与复数主语一致。",
        "id": "pronoun-reflexive-1"
      },
      {
        "type": "mc",
        "prompt": "I repaired the chair myself. 中 myself 主要表示：",
        "options": [
          "椅子的数量",
          "我亲自完成",
          "另一个人修理",
          "必须替代 the chair"
        ],
        "answer": 1,
        "why": "myself 在这里强调动作由我亲自完成，the chair 才是 repaired 的宾语。",
        "id": "pronoun-reflexive-2"
      }
    ],
    "related": [
      "pronouns",
      "pronoun-personal"
    ],
    "classification": [
      "自己：myself 等",
      "亲自",
      "互相：each other",
      "独自：by myself"
    ],
    "pitfalls": [
      {
        "title": "I 对应 myself",
        "wrong": "I wash himself.",
        "right": "I wash myself.",
        "text": "主语是 I，要表示我自己，用 myself。"
      },
      {
        "title": "普通主语用 I",
        "wrong": "Myself can help you.",
        "right": "I can help you.",
        "text": "这里直接说我能帮助你，用 I。"
      }
    ],
    "advanced": false,
    "extraUsage": [
      {
        "h": "再了解一点：by myself",
        "t": "by myself 常表示独自、没有别人帮助。I did it by myself. 是我自己一个人做的。each other 和 one another 都常表示互相，不必硬分两个人或多个人。",
        "advanced": true
      }
    ]
  },
  {
    "id": "pronoun-indefinite",
    "g": "parts",
    "title": "不定代词与范围",
    "en": "Indefinite pronouns & scope",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "someone：有人；something：某个东西",
    "take": "不定代词用来表示没有说清是谁、是什么的人或东西。比如 someone（有人）、something（某个东西）。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "不定代词用来表示没有说清是谁、是什么的人或东西。比如 someone（有人）、something（某个东西）。"
      },
      {
        "h": "先记几个日常词",
        "t": "someone 是有人，everyone 是每个人，nothing 是没有东西。它们不直接说出一个具体名字。"
      },
      {
        "h": "简单句里注意 is 和位置",
        "t": "Everyone is here. 是每个人都在这里。something cold 是冷的东西，表示冷的 cold 通常放在 something 后面。"
      },
      {
        "h": "再了解一点：看范围和语境",
        "t": "both 是两个都，neither 是两个都不。Not everyone agreed. 只说并非人人同意，不等于没有人同意。none 的动词形式还要看后面指什么。"
      }
    ],
    "examples": [
      {
        "en": "Everyone is here.",
        "zh": "每个人都在这里。",
        "note": "everyone 表示每个人，这里配 is。"
      },
      {
        "en": "I want something cold.",
        "zh": "我想要一点冷的东西。",
        "note": "something 是某个东西；cold 放在它后面。"
      }
    ],
    "quiz": [
      {
        "type": "fill",
        "prompt": "Everything ____ ready for the meeting.（填 be 的一般现在时形式）",
        "answer": [
          "is"
        ],
        "why": "Everything 在这里作单数主语，一般现在时用 is。",
        "id": "pronoun-indefinite-0"
      },
      {
        "type": "mc",
        "prompt": "请选择“不是什么人都同意”的准确解释。",
        "options": [
          "Not everyone agreed. 表示全员反对",
          "Not everyone agreed. 表示并非全员同意",
          "No one agreed. 表示全员同意",
          "Everyone agreed. 表示无人同意"
        ],
        "answer": 1,
        "why": "Not everyone 是部分否定；它否定“全员同意”，并不表示每个人都反对。",
        "id": "pronoun-indefinite-1"
      },
      {
        "type": "mc",
        "prompt": "下列名词性表达中，形容词位置正确的是：",
        "options": [
          "interesting something",
          "nothing useful",
          "useful nothing",
          "someone kindly person"
        ],
        "answer": 1,
        "why": "修饰 nothing 等复合不定代词的形容词通常后置，所以说 nothing useful。",
        "id": "pronoun-indefinite-2"
      }
    ],
    "related": [
      "pronouns",
      "quantifiers",
      "agreement"
    ],
    "classification": [
      "有人或某物",
      "每个人或没有东西",
      "两者与多个",
      "肯定、疑问和否定"
    ],
    "pitfalls": [
      {
        "title": "everyone 在本句中配 is",
        "wrong": "Everyone are here.",
        "right": "Everyone is here.",
        "text": "说每个人都在这里时，用 is。"
      },
      {
        "title": "形容词放在 something 后",
        "wrong": "I want cold something.",
        "right": "I want something cold.",
        "text": "通常说 something cold，不说 cold something。"
      }
    ],
    "advanced": true,
    "extraUsage": [
      {
        "h": "再了解一点：some 和 any",
        "t": "some 常表示一些，any 可表示任何一个，也常见于疑问和否定。Would you like some tea? 是给对方提供茶，所以疑问句也能用 some。",
        "advanced": true
      }
    ]
  },
  {
    "id": "pronoun-demonstrative",
    "g": "parts",
    "title": "指示代词与指示限定词",
    "en": "Demonstratives",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "this / that：一个；these / those：多个",
    "take": "this、that、these、those 用来指出人或东西。this/these 常说这边的，that/those 常说那边的。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "this、that、these、those 用来指出人或东西。this/these 常说这边的，that/those 常说那边的。"
      },
      {
        "h": "先看近处还是远处",
        "t": "this 是这个，that 是那个。指东西时，可以说 This is my book. 或 That is your bag.。"
      },
      {
        "h": "再看一个还是多个",
        "t": "these 是这些，those 是那些。通常说 this book、these books；说 This is...，但说 These are...。"
      },
      {
        "h": "后面也可以带名词",
        "t": "This book is new. 中 this 后面有 book。This is new. 中 This 直接表示这个东西。先用例句看懂，不必一开始背两套术语。"
      }
    ],
    "examples": [
      {
        "en": "This is my book.",
        "zh": "这是我的书。",
        "note": "this 说这个，表示一个东西，所以用 is。"
      },
      {
        "en": "Those are your shoes.",
        "zh": "那些是你的鞋。",
        "note": "those 表示那些，后面用 are。"
      }
    ],
    "quiz": [
      {
        "type": "fill",
        "prompt": "____ books belong to the library.（这些；填一个指示词）",
        "answer": [
          "These"
        ],
        "why": "books 是复数，表达“这些”用 These，不能用单数 this。",
        "id": "pronoun-demonstrative-0"
      },
      {
        "type": "mc",
        "prompt": "This notebook is new. 中 this 的作用是：",
        "options": [
          "独立替代整个主语短语",
          "限定后面的 notebook",
          "充当谓语动词",
          "连接两个独立分句"
        ],
        "answer": 1,
        "why": "this 后面紧接它限定的名词 notebook，属于名词前的限定用法。",
        "id": "pronoun-demonstrative-1"
      },
      {
        "type": "mc",
        "prompt": "哪一句的指示词与谓语配合正确？",
        "options": [
          "Those is my keys.",
          "These are my keys.",
          "This are my keys.",
          "That are my key."
        ],
        "answer": 1,
        "why": "These 指复数对象，与 are 和复数 keys 配合。",
        "id": "pronoun-demonstrative-2"
      }
    ],
    "related": [
      "pronouns",
      "determiners",
      "comparison-clauses"
    ],
    "classification": [
      "这个/那个",
      "这些/那些",
      "后面带名词",
      "单独指出对象"
    ],
    "pitfalls": [
      {
        "title": "these 配复数名词",
        "wrong": "These book are new.",
        "right": "These books are new.",
        "text": "these 表示这些，所以 book 变成 books。"
      },
      {
        "title": "that 在本句中配 is",
        "wrong": "That are my bag.",
        "right": "That is my bag.",
        "text": "that 表示那个，这里用 is。"
      }
    ],
    "advanced": false
  },
  {
    "id": "article-indefinite",
    "g": "parts",
    "title": "不定冠词 a 与 an",
    "en": "Indefinite articles",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "a cat / an egg",
    "take": "a、an 常放在单数可数名词前，表示一个。a cat 是一只猫，an egg 是一个鸡蛋。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "a、an 常放在单数可数名词前，表示一个。a cat 是一只猫，an egg 是一个鸡蛋。"
      },
      {
        "h": "先说一个普通对象",
        "t": "I have a dog. 只说我有一只狗，没有指出哪一只。dog 在这里是单数，所以前面用 a。"
      },
      {
        "h": "听开头的声音选 a 或 an",
        "t": "后一个词以元音音素开头时常用 an，如 an egg。选的是发音，不只是字母：an hour、a university。"
      },
      {
        "h": "不能直接放在普通复数或不可数用法前",
        "t": "说多个用 cats，不说 a cats。一般说一些水用 some water，不说 a water；点餐按一份来数时另有用法。"
      }
    ],
    "examples": [
      {
        "en": "I have a dog.",
        "zh": "我有一只狗。",
        "note": "dog 是一个普通的可数对象，前面用 a。"
      },
      {
        "en": "She eats an egg.",
        "zh": "她吃一个鸡蛋。",
        "note": "egg 开头是元音音素，所以前面用 an。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "依据通常发音，哪一种搭配正确？",
        "options": [
          "an university",
          "a hour",
          "an honest answer",
          "an useful map"
        ],
        "answer": 2,
        "why": "honest 的 h 不发音，以元音音素起始，用 an；university、useful 则以辅音 /j/ 起始。",
        "id": "article-indefinite-0"
      },
      {
        "type": "fill",
        "prompt": "Her sister is ____ engineer.（首次泛指一位工程师，填不定冠词）",
        "answer": [
          "an"
        ],
        "why": "engineer 为单数可数名词且以元音音素起始，泛指身份时用 an。",
        "id": "article-indefinite-1"
      },
      {
        "type": "mc",
        "prompt": "“一条建议”在 advice 的通常不可数用法中应说：",
        "options": [
          "an advice",
          "a piece of advice",
          "a advice",
          "one advices"
        ],
        "answer": 1,
        "why": "advice 通常不可数，用 a piece of advice 表达一条建议。",
        "id": "article-indefinite-2"
      }
    ],
    "related": [
      "articles",
      "countable"
    ],
    "classification": [
      "一个：a/an",
      "按开头发音选择",
      "单数可数名词",
      "份量的特殊用法"
    ],
    "pitfalls": [
      {
        "title": "an 后面看发音",
        "wrong": "I eat a egg.",
        "right": "I eat an egg.",
        "text": "egg 的开头发音适合用 an。"
      },
      {
        "title": "a 表示一个，不接复数",
        "wrong": "I have a dogs.",
        "right": "I have a dog.",
        "text": "这里用 a，说的是一只狗。"
      }
    ],
    "advanced": false
  },
  {
    "id": "article-definite",
    "g": "parts",
    "title": "定冠词 the 与可识别对象",
    "en": "The definite article",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "the cat：说得清是哪只猫",
    "take": "the 常用来表示双方能知道是哪一个人或东西。比如房间里只有眼前这扇门，就可以说 the door。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "the 常用来表示双方能知道是哪一个人或东西。比如房间里只有眼前这扇门，就可以说 the door。"
      },
      {
        "h": "已经提过，再用 the",
        "t": "I see a dog. The dog is small. 第一次说一只狗，用 a；第二次说刚才那只狗，用 the。"
      },
      {
        "h": "双方都知道，也可用 the",
        "t": "Please close the door. 是请关门。如果双方都知道是哪扇门，就可以用 the，不一定非要前面提过一次。"
      },
      {
        "h": "the 后不只接单数",
        "t": "the cat 是那只猫，the cats 是那些猫，the water 是那些水。the 要不要用，重点看能不能说清是哪一个或哪一些。"
      }
    ],
    "examples": [
      {
        "en": "I see a dog. The dog is small.",
        "zh": "我看见一只狗。那只狗很小。",
        "note": "第二句的 the dog 说的是前面刚提过的那只狗。"
      },
      {
        "en": "Please close the door.",
        "zh": "请关门。",
        "note": "双方都知道眼前说的是哪扇门，所以用 the。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "I found a key. ____ key was under the desk.（同一把钥匙）",
        "options": [
          "A",
          "An",
          "The",
          "不填"
        ],
        "answer": 2,
        "why": "后一句指前句已引入的同一把钥匙，使用 The。",
        "id": "article-definite-0"
      },
      {
        "type": "fill",
        "prompt": "Please close ____ door.（双方都知道是哪扇门；填冠词）",
        "answer": [
          "the"
        ],
        "why": "当前语境让双方能够识别所指的门，因此用定冠词 the。",
        "id": "article-definite-1"
      },
      {
        "type": "mc",
        "prompt": "关于 the，哪项正确？",
        "options": [
          "the 只接单数可数名词",
          "the 不能修饰不可数名词",
          "the water 可以指特定范围的水",
          "只要第一次提到就绝对不能用 the"
        ],
        "answer": 2,
        "why": "the 可限定不可数名词，环境明确的对象第一次提及也可能使用 the。",
        "id": "article-definite-2"
      }
    ],
    "related": [
      "articles",
      "determiners",
      "article-zero"
    ],
    "classification": [
      "已经提过的",
      "双方都知道的",
      "单数、复数或不可数"
    ],
    "pitfalls": [
      {
        "title": "the 不替代完整句需要的动词",
        "wrong": "The cat very small.",
        "right": "The cat is very small.",
        "text": "the cat 是说得清的那只猫；要说它很小，还需要 is。"
      },
      {
        "title": "the 和 my 通常不这样叠加",
        "wrong": "This is the my book.",
        "right": "This is my book.",
        "text": "my 已经说了这是我的书，通常不再在前面加 the。"
      }
    ],
    "advanced": false
  },
  {
    "id": "article-zero",
    "g": "parts",
    "title": "零冠词与泛指",
    "en": "Zero article",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "Cats like milk.：泛指猫和奶",
    "take": "有时名词前不需要 a、an、the。这种“不放冠词”的用法叫零冠词。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "有时名词前不需要 a、an、the。这种“不放冠词”的用法叫零冠词。"
      },
      {
        "h": "泛指一类时常不加",
        "t": "Cats like milk. 是一般地说猫喜欢奶，不特指某几只猫或某一杯奶。这里 cats 和 milk 前面都不加冠词。"
      },
      {
        "h": "一些固定说法要一起记",
        "t": "go to school 常指去上学。go to the school 常指去那所学校的地点。区别要连着整句话理解。"
      },
      {
        "h": "不是所有地方都能省",
        "t": "一个普通可数名词常不能单独放着，如职业通常说 She is a teacher.。China 等名字前常不加冠词，但也有名字本身带 the。"
      }
    ],
    "examples": [
      {
        "en": "Cats like milk.",
        "zh": "猫喜欢奶。",
        "note": "cats 和 milk 在这里说一类对象，不特指某一些。"
      },
      {
        "en": "I go to school.",
        "zh": "我去上学。",
        "note": "go to school 是常见的上学说法，school 前不加 the。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "泛指“书能帮助我们理解世界”，哪句最自然？",
        "options": [
          "Books help us understand the world.",
          "A books help us understand the world.",
          "Book help us understand the world.",
          "An books help us understand the world."
        ],
        "answer": 0,
        "why": "泛指书这一类，常用不带冠词的复数 Books；普通单数 Book 不宜这样裸用。",
        "id": "article-zero-0"
      },
      {
        "type": "mc",
        "prompt": "通常搭配中，哪一个短语表示“吃早餐”？",
        "options": [
          "have breakfast",
          "have a breakfasts",
          "have an breakfast",
          "have breakfastes"
        ],
        "answer": 0,
        "why": "日常用餐活动通常说 have breakfast；特定修饰或指称可采用其他冠词结构。",
        "id": "article-zero-1"
      },
      {
        "type": "mc",
        "prompt": "哪种理解正确？",
        "options": [
          "零冠词意味着所有单数名词都可省冠词",
          "school 前永远不能出现 the",
          "泛指的 water 与特指的 the water 可表达不同范围",
          "所有专有名称都禁止 the"
        ],
        "answer": 2,
        "why": "water 泛指某种物质时常不用冠词，the water 则可限定语境中某一范围的水。",
        "id": "article-zero-2"
      }
    ],
    "related": [
      "articles",
      "article-definite"
    ],
    "classification": [
      "泛指的一类",
      "一些常见名字",
      "固定说法",
      "不能随意省略的情况"
    ],
    "pitfalls": [
      {
        "title": "一个老师通常要有 a",
        "wrong": "She is teacher.",
        "right": "She is a teacher.",
        "text": "teacher 在这里是一个普通可数名词，不能随意省掉 a。"
      },
      {
        "title": "普通说中国时不加 the",
        "wrong": "I live in the China.",
        "right": "I live in China.",
        "text": "这里直接说 China。"
      }
    ],
    "advanced": false
  },
  {
    "id": "verb-transitive",
    "g": "parts",
    "title": "及物与不及物用法",
    "en": "Transitive & intransitive uses",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "I open the door.；The door opens.",
    "take": "有些动词后面可以直接接人或东西。I open the door. 中，door 就是打开的东西，这种用法叫及物。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "有些动词后面可以直接接人或东西。I open the door. 中，door 就是打开的东西，这种用法叫及物。"
      },
      {
        "h": "看动作有没有直接对象",
        "t": "I like cats. 中，我喜欢的是 cats。cats 直接跟在 like 后面，是动作或意思指向的对象，叫宾语。"
      },
      {
        "h": "有些用法不直接接宾语",
        "t": "The baby sleeps. 已经说清宝宝睡觉了。sleep 在这个用法中不直接接一个被睡的东西，叫不及物。"
      },
      {
        "h": "同一个词可以两种用法",
        "t": "I open the door. 中 open 后有 door。The door opens. 中 opens 后没有宾语。不要只给 open 永久贴一个标签。"
      }
    ],
    "examples": [
      {
        "en": "I open the door.",
        "zh": "我打开门。",
        "note": "door 是我打开的东西，直接跟在 open 后面。"
      },
      {
        "en": "The door opens.",
        "zh": "门开了。",
        "note": "这句只说门开了，opens 后面不再接宾语。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "表达“讨论这个问题”，哪种结构正确？",
        "options": [
          "discuss about the problem",
          "discuss the problem",
          "discuss to the problem",
          "discuss with the problem"
        ],
        "answer": 1,
        "why": "discuss 在这里直接接内容宾语 the problem，不额外加 about。",
        "id": "verb-transitive-0"
      },
      {
        "type": "mc",
        "prompt": "The door opened. 与 She opened the door. 说明：",
        "options": [
          "open 只能及物",
          "open 只能不及物",
          "同一个词可在不同结构中有及物与不及物用法",
          "两句都缺少谓语"
        ],
        "answer": 2,
        "why": "第一句的 opened 无直接宾语，第二句直接接 door，展示当前用法的区别。",
        "id": "verb-transitive-1"
      },
      {
        "type": "mc",
        "prompt": "arrive 的普通到达用法，哪一种搭配正确？",
        "options": [
          "arrive the airport",
          "be arrived the airport",
          "arrive at the airport",
          "arrive to the airport"
        ],
        "answer": 2,
        "why": "表达到达机场通常说 arrive at the airport，不能直接把地点名词当作 arrive 的宾语。",
        "id": "verb-transitive-2"
      }
    ],
    "related": [
      "auxiliaries",
      "verb-forms",
      "passive-special"
    ],
    "classification": [
      "后面直接接对象",
      "不直接接对象",
      "同一个词的不同用法"
    ],
    "pitfalls": [
      {
        "title": "discuss 后直接接谈论的事",
        "wrong": "We discuss about the book.",
        "right": "We discuss the book.",
        "text": "标准用法里 discuss 后直接接 the book，不再加 about。"
      },
      {
        "title": "arrive 通常不能直接接地点名词",
        "wrong": "We arrive school at eight.",
        "right": "We arrive at school at eight.",
        "text": "说到达学校，常用 arrive at school，不能直接把 school 接在 arrive 后。"
      }
    ],
    "advanced": false
  },
  {
    "id": "verb-linking",
    "g": "parts",
    "title": "系动词与表语",
    "en": "Linking verbs & subject complements",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "She is happy.：她很开心。",
    "take": "系动词像一座桥，把“谁或什么”和“它是什么、怎么样”连起来。She is happy. 中 is 就起连接作用。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "系动词像一座桥，把“谁或什么”和“它是什么、怎么样”连起来。She is happy. 中 is 就起连接作用。"
      },
      {
        "h": "先从 be 开始",
        "t": "She is happy. 中，She 是她，happy 是开心的，is 把两部分连起来。happy 说明她的状态。"
      },
      {
        "h": "有些表示感觉的词也能连接状态",
        "t": "The soup smells good. 是汤闻起来很香。这里 good 说明汤怎么样，不是说汤自己做了一个好动作。"
      },
      {
        "h": "同一个词要看用法",
        "t": "She looks tired. 中 looks 表示看起来。She looks at me. 中 looks 表示看的动作；后面结构不一样。"
      }
    ],
    "examples": [
      {
        "en": "She is happy.",
        "zh": "她很开心。",
        "note": "is 连接 she 和 happy；happy 说明她的状态。"
      },
      {
        "en": "The soup smells good.",
        "zh": "汤闻起来很香。",
        "note": "smells 是闻起来，good 说明汤的感觉。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "The soup tastes ____.（说明汤的味道很好）",
        "options": [
          "delicious",
          "deliciously",
          "deliciousness",
          "deliciouses"
        ],
        "answer": 0,
        "why": "tastes 在这里作系动词，表语用形容词 delicious 描述汤。",
        "id": "verb-linking-0"
      },
      {
        "type": "fill",
        "prompt": "After the long trip, they seem ____ (tire).（他们似乎很疲惫）",
        "answer": [
          "tired"
        ],
        "why": "表示主语感到疲惫，seem 后用形容词 tired 作表语。",
        "id": "verb-linking-1"
      },
      {
        "type": "mc",
        "prompt": "She smelled the flowers. 中 smelled 的当前用法是：",
        "options": [
          "连接主语和表语",
          "表示动作并带宾语",
          "没有任何动词意义",
          "与所有 smells 句子都完全同一结构"
        ],
        "answer": 1,
        "why": "这里表示她闻花这一动作，the flowers 是直接宾语，与 The flowers smell sweet 的系表结构不同。",
        "id": "verb-linking-2"
      }
    ],
    "related": [
      "adjadv",
      "skeleton",
      "verb-transitive"
    ],
    "classification": [
      "be：是/状态连接",
      "look：看起来",
      "smell：闻起来",
      "同一个词的不同用法"
    ],
    "pitfalls": [
      {
        "title": "不能漏掉连接状态的 is",
        "wrong": "She happy.",
        "right": "She is happy.",
        "text": "这句要表达她很开心，需要 is 把两部分连起来。"
      },
      {
        "title": "普通现在时的 she 配 is",
        "wrong": "She are happy.",
        "right": "She is happy.",
        "text": "She 在这里指一个人，用 is。"
      }
    ],
    "advanced": false
  },
  {
    "id": "adjective-functions",
    "g": "parts",
    "title": "形容词的定语、表语与宾补",
    "en": "Adjective functions",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "a red bag；The bag is red.",
    "take": "形容词用来说明人或东西是什么样的。比如 red（红的）、big（大的）、happy（开心的）。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "形容词用来说明人或东西是什么样的。比如 red（红的）、big（大的）、happy（开心的）。"
      },
      {
        "h": "放在名词前，说明特点",
        "t": "a red bag 是一个红色的包。red 说明 bag 的颜色，放在名词前。"
      },
      {
        "h": "放在 is 等词后，说明状态",
        "t": "The bag is red. 是包是红色的。red 仍然说明 bag，只是放在 is 后面。"
      },
      {
        "h": "也可以说明动作带来的状态",
        "t": "I make Mom happy. 是我让妈妈开心。happy 说明 Mom 的状态；这种额外说明叫补足语。"
      }
    ],
    "examples": [
      {
        "en": "I have a red bag.",
        "zh": "我有一个红色的包。",
        "note": "red 是红的，放在 bag 前说明颜色。"
      },
      {
        "en": "The bag is red.",
        "zh": "包是红色的。",
        "note": "red 放在 is 后，仍然说明包的颜色。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "We found the classroom empty. 中 empty 的成分是：",
        "options": [
          "主语",
          "直接宾语",
          "宾语补足语",
          "限定谓语"
        ],
        "answer": 2,
        "why": "empty 补充说明宾语 the classroom 的状态，是宾语补足语。",
        "id": "adjective-functions-0"
      },
      {
        "type": "fill",
        "prompt": "She is a ____ (care) driver.（表示她开车谨慎）",
        "answer": [
          "careful"
        ],
        "why": "空格在名词 driver 前，描述人的特征，要用形容词 careful。",
        "id": "adjective-functions-1"
      },
      {
        "type": "mc",
        "prompt": "哪一个短语符合复合不定代词的常见修饰位置？",
        "options": [
          "something important",
          "important something",
          "importantly something",
          "something importance"
        ],
        "answer": 0,
        "why": "形容词 important 修饰 something 时通常后置，构成 something important。",
        "id": "adjective-functions-2"
      }
    ],
    "related": [
      "adjadv",
      "pronoun-indefinite",
      "verb-linking"
    ],
    "classification": [
      "名词前说特点",
      "is 后说状态",
      "说明动作带来的状态"
    ],
    "pitfalls": [
      {
        "title": "形容词不因为名词变复数就加 s",
        "wrong": "I have two reds bags.",
        "right": "I have two red bags.",
        "text": "两个包用 bags，但 red 不跟着加 s。"
      },
      {
        "title": "说明状态时别漏 is",
        "wrong": "The bag red.",
        "right": "The bag is red.",
        "text": "普通完整句里，要用 is 连接 bag 和 red。"
      }
    ],
    "advanced": false
  },
  {
    "id": "adverb-types",
    "g": "parts",
    "title": "副词的意义、位置与作用",
    "en": "Adverb types & position",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "run fast：跑得快；often read：经常读",
    "take": "副词常用来补充动作怎么做、什么时候做、多久做一次。比如 fast（快地）、often（经常）。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "副词常用来补充动作怎么做、什么时候做、多久做一次。比如 fast（快地）、often（经常）。"
      },
      {
        "h": "说明动作怎么做",
        "t": "He runs fast. 是他跑得快。fast 补充 runs 这个动作怎么做。"
      },
      {
        "h": "说明时间或频率",
        "t": "often 是经常，now 是现在。She often reads. 说她经常读书；often 不是在描述她这个人长什么样。"
      },
      {
        "h": "再了解一点：位置不全相同",
        "t": "often 常放在普通动作动词前，但放在 be 后，如 He is often late.。very 放在它修饰的词前，如 very fast（非常快）。"
      }
    ],
    "examples": [
      {
        "en": "He runs fast.",
        "zh": "他跑得快。",
        "note": "fast 说明跑这个动作的速度。"
      },
      {
        "en": "She often reads books.",
        "zh": "她经常读书。",
        "note": "often 表示经常，放在 reads 前。"
      }
    ],
    "quiz": [
      {
        "type": "fill",
        "prompt": "She speaks English ____ (clear).（表达她说得很清楚）",
        "answer": [
          "clearly"
        ],
        "why": "空格修饰 speaks 这一动作，应使用方式副词 clearly。",
        "id": "adverb-types-0"
      },
      {
        "type": "mc",
        "prompt": "形容词与 enough 的常见位置是：",
        "options": [
          "enough warm",
          "warm enough",
          "warmth enough",
          "enough warmly room"
        ],
        "answer": 1,
        "why": "enough 修饰形容词 warm 时通常后置，说 warm enough。",
        "id": "adverb-types-1"
      },
      {
        "type": "mc",
        "prompt": "He works hard, but he hardly rests. 中 hardly 的意思是：",
        "options": [
          "努力地",
          "几乎不",
          "很硬地",
          "与 hard 完全相同"
        ],
        "answer": 1,
        "why": "hard 表示努力地，hardly 表示几乎不，两者不能只按是否带 -ly 看作同义转换。",
        "id": "adverb-types-2"
      }
    ],
    "related": [
      "degree-order",
      "adjadv"
    ],
    "classification": [
      "怎么做",
      "什么时候",
      "多久一次",
      "程度与整句话"
    ],
    "pitfalls": [
      {
        "title": "fast 本身就可以作副词",
        "wrong": "He runs fastly.",
        "right": "He runs fast.",
        "text": "表示跑得快，直接用 fast，不再加 ly。"
      },
      {
        "title": "very 放在 fast 前",
        "wrong": "He runs fast very.",
        "right": "He runs very fast.",
        "text": "要说非常快，写 very fast。"
      }
    ],
    "advanced": true,
    "extraUsage": [
      {
        "h": "再了解一点：也能补充整句话",
        "t": "Luckily, I am here. 是幸好我在这里。luckily 不只说某个动作怎么做，而是在补充说话人对整件事的看法。",
        "advanced": true
      }
    ]
  },
  {
    "id": "preposition-time",
    "g": "parts",
    "title": "时间介词与时间范围",
    "en": "Time prepositions",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "at six；on Monday；in May",
    "take": "时间介词是放在时间前的小词。初学先认识 at、on、in，它们帮助我们说什么时候。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "时间介词是放在时间前的小词。初学先认识 at、on、in，它们帮助我们说什么时候。"
      },
      {
        "h": "说具体几点，常用 at",
        "t": "at six 是在六点，at ten 是在十点。I get up at six. 是我六点起床。"
      },
      {
        "h": "说哪一天，常用 on",
        "t": "on Monday 是在星期一，on Friday 是在星期五。说具体日期时也常用 on。"
      },
      {
        "h": "说月份或年份，常用 in",
        "t": "in May 是在五月，in 2025 是在2025年。today、tomorrow 前通常不再加这些词；固定说法以后单独记。"
      }
    ],
    "examples": [
      {
        "en": "I get up at six.",
        "zh": "我六点起床。",
        "note": "at six 表示在六点。"
      },
      {
        "en": "We play on Monday.",
        "zh": "我们星期一玩。",
        "note": "on Monday 表示在星期一。"
      }
    ],
    "quiz": [
      {
        "type": "fill",
        "prompt": "The interview begins ____ nine o’clock.（九点整开始）",
        "answer": [
          "at"
        ],
        "why": "明确钟点 nine o’clock 通常由 at 引出。",
        "id": "preposition-time-0"
      },
      {
        "type": "mc",
        "prompt": "表达“在星期二上午”，常见搭配是：",
        "options": [
          "in Tuesday morning",
          "at Tuesday morning",
          "on Tuesday morning",
          "by Tuesday morning，且必定同义"
        ],
        "answer": 2,
        "why": "具体某个星期的早晨通常用 on；by 表截止，不与此处时间位置同义。",
        "id": "preposition-time-1"
      },
      {
        "type": "fill",
        "prompt": "She has worked here ____ 2020.（自从2020年起）",
        "answer": [
          "since"
        ],
        "why": "这里明确给出持续工作的起点，用 since；for 后一般接时长。",
        "id": "preposition-time-2"
      }
    ],
    "related": [
      "prepositions",
      "perfect",
      "future-time"
    ],
    "classification": [
      "几点：at",
      "哪一天：on",
      "月份、年份：in",
      "一段时间与起点"
    ],
    "pitfalls": [
      {
        "title": "说几点用 at",
        "wrong": "I get up in six.",
        "right": "I get up at six.",
        "text": "这里说六点这个时间点，用 at。"
      },
      {
        "title": "说五月用 in",
        "wrong": "We meet on May.",
        "right": "We meet in May.",
        "text": "这里只说五月这个月份，用 in；若说具体某天，表达会不同。"
      }
    ],
    "advanced": false,
    "extraUsage": [
      {
        "h": "再了解一点：一段时间和起点",
        "t": "for two days 表示持续两天；since Monday 表示从星期一开始。先分清说的是“多长时间”还是“从什么时候开始”。",
        "advanced": true
      },
      {
        "h": "再了解一点：有些地区说法不同",
        "t": "at the weekend 常见于英式英语，on the weekend 常见于美式英语，都是说在周末。遇到不同地区的正常说法，不必都判成错句。",
        "advanced": true
      }
    ]
  },
  {
    "id": "preposition-place",
    "g": "parts",
    "title": "地点、位置与方向介词",
    "en": "Place & direction prepositions",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "in the box；on the desk；under the table",
    "take": "地点介词帮助我们说东西在哪里。in 常表示里面，on 常表示表面，under 表示下面。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "地点介词帮助我们说东西在哪里。in 常表示里面，on 常表示表面，under 表示下面。"
      },
      {
        "h": "先学里面、表面、下面",
        "t": "in the box 是在盒子里面，on the desk 是在书桌上，under the table 是在桌子下面。"
      },
      {
        "h": "把介词和后面的对象一起看",
        "t": "under the table 这几个词一起说明位置。只说 under，往往还没告诉别人是在什么下面。"
      },
      {
        "h": "再看动作和位置的区别",
        "t": "in 可以说在里面；into 常说从外面进入里面。The cat runs into the room. 是猫跑进房间，突出进入的动作。"
      }
    ],
    "examples": [
      {
        "en": "The cat is under the table.",
        "zh": "猫在桌子下面。",
        "note": "under 说明下面，the table 说明是哪样东西的下面。"
      },
      {
        "en": "The book is on the desk.",
        "zh": "书在书桌上。",
        "note": "on 在这里表示接触书桌的表面。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "明确表示“走进房间内部”，哪一个短语最直接？",
        "options": [
          "walk into the room",
          "walk beside the room",
          "walk above the room",
          "walk without the room"
        ],
        "answer": 0,
        "why": "into 明确表达进入内部，与仅在旁边或上方的关系不同。",
        "id": "preposition-place-0"
      },
      {
        "type": "fill",
        "prompt": "The keys are ____ the table.（钥匙在桌子表面上）",
        "answer": [
          "on",
          "upon"
        ],
        "why": "这里明确表示与桌面表面的接触关系，常用 on，较书面的 upon 也可接受。",
        "id": "preposition-place-1"
      },
      {
        "type": "mc",
        "prompt": "哪一种看法正确？",
        "options": [
          "所有动作后都只能用 into",
          "at the station 与 in the station 在不同视角下都可能成立",
          "through 永远与 across 同义",
          "go home 必须写成 go to home"
        ],
        "answer": 1,
        "why": "at 常将车站看作活动点，in 可强调站内空间；需要根据实际关系判断。",
        "id": "preposition-place-2"
      }
    ],
    "related": [
      "prepositions",
      "pronoun-personal"
    ],
    "classification": [
      "里面：in",
      "表面：on",
      "下面：under",
      "位置与方向"
    ],
    "pitfalls": [
      {
        "title": "介词后用 her",
        "wrong": "I play with she.",
        "right": "I play with her.",
        "text": "意思是我和她玩。with 后面用 her，不用 she。"
      },
      {
        "title": "说在哪里也需要完整动词",
        "wrong": "The book on the desk.",
        "right": "The book is on the desk.",
        "text": "若想完整地说书在桌上，需要加 is；原句也可以作为一个短语另有用途。"
      }
    ],
    "advanced": false
  },
  {
    "id": "conjunction-coordinate",
    "g": "parts",
    "title": "并列连词与对应层级",
    "en": "Coordinating conjunctions",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "and：并且；but：但是；or：或者",
    "take": "并列连词把地位相近的词或句子连起来。and 常说“和、并且”，but 常说“但是”。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "并列连词把地位相近的词或句子连起来。and 常说“和、并且”，but 常说“但是”。"
      },
      {
        "h": "and 把信息放在一起",
        "t": "Tom sings and Ann dances. 是汤姆唱歌，安跳舞。and 把两件事连在一起。"
      },
      {
        "h": "but、or 表示不同关系",
        "t": "I am tired, but I can work. 是我累了，但是还能工作。Tea or milk? 是茶还是奶；or 表示选择。"
      },
      {
        "h": "连起来的部分要接得上",
        "t": "I like cats and dogs. 中 cats 和 dogs 都是我喜欢的对象。只说 I like cats and.，后面还没有接完。"
      }
    ],
    "examples": [
      {
        "en": "Tom sings and Ann dances.",
        "zh": "汤姆唱歌，安跳舞。",
        "note": "and 把两件事连接在一起。"
      },
      {
        "en": "I am tired, but I can work.",
        "zh": "我累了，但是还能工作。",
        "note": "but 表示后面的情况与前面的预想不同。"
      }
    ],
    "quiz": [
      {
        "type": "fill",
        "prompt": "She can sing ____ dance.（两种能力都有；填表示添加的并列连词）",
        "answer": [
          "and"
        ],
        "why": "这里增加第二项能力，使用并列连词 and。",
        "id": "conjunction-coordinate-0"
      },
      {
        "type": "mc",
        "prompt": "哪一句清楚表达“因为累了，所以去睡觉”的结果关系？",
        "options": [
          "He was tired, so he went to bed.",
          "He was tired, or he went to bed.",
          "He was tired but because went to bed.",
          "He was tired, however he went to bed."
        ],
        "answer": 0,
        "why": "so 引出前述疲惫带来的结果，并正确连接两个分句。",
        "id": "conjunction-coordinate-1"
      },
      {
        "type": "mc",
        "prompt": "在正式写作中连接两个独立分句，哪种标点与 however 的组合合适？",
        "options": [
          "It was raining, however, we left.",
          "It was raining; however, we left.",
          "It was raining however we left.",
          "It was raining however, we left."
        ],
        "answer": 1,
        "why": "however 常为连接性副词；此处用分号先明确独立分句边界，再用逗号与 however 配合。",
        "id": "conjunction-coordinate-2"
      }
    ],
    "related": [
      "conjunction-types",
      "coordination",
      "punctuation-analysis"
    ],
    "classification": [
      "并且：and",
      "但是：but",
      "或者：or",
      "所以：so"
    ],
    "pitfalls": [
      {
        "title": "and 后面的内容要接完整",
        "wrong": "I like cats and.",
        "right": "I like cats and dogs.",
        "text": "这里用 and 继续补充喜欢的东西，所以要把后面的内容说完。"
      },
      {
        "title": "正式写作里别只用逗号接两个完整句",
        "wrong": "I am tired, I can work.",
        "right": "I am tired, but I can work.",
        "text": "两边都是完整句。这里用 but 表示转折，连接更清楚。"
      }
    ],
    "advanced": false,
    "extraUsage": [
      {
        "h": "再了解一点：however 不完全像 but",
        "t": "however 可以表示不过，但在正式写作里通常不能只用逗号加 however 来接两个完整句。可先用句号分开，或直接用 but 连接。",
        "advanced": true
      }
    ]
  },
  {
    "id": "conjunction-subordinate",
    "g": "parts",
    "title": "从属连词与分句依附",
    "en": "Subordinating conjunctions",
    "level": "基础与进阶",
    "source": "参考《英语语法知识体系详解》· 词性细分；补充讲解与练习",
    "formula": "because：因为；if：如果",
    "take": "从属连词把一句补充信息接到主要的句子上。because 说明原因，if 说明条件。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "从属连词把一句补充信息接到主要的句子上。because 说明原因，if 说明条件。"
      },
      {
        "h": "先看主要说什么",
        "t": "I stay home because it rains. 主要说我待在家里。because it rains 补充下雨这个原因。"
      },
      {
        "h": "不同小词表示不同关系",
        "t": "because 常说因为，if 常说如果，when 常说当……时，although 常说虽然。先看两件事是什么关系，再选词。"
      },
      {
        "h": "不要只写依靠另一句的部分",
        "t": "在普通完整叙述中，只写 Because it rains. 往往还没说完。可以补上 I stay home.。这些补充小句叫从句。"
      }
    ],
    "examples": [
      {
        "en": "I stay home because it rains.",
        "zh": "因为下雨，我待在家里。",
        "note": "because 后面写下雨的原因，前面写主要情况。"
      },
      {
        "en": "If it rains, I stay home.",
        "zh": "如果下雨，我就待在家里。",
        "note": "if 后面是条件，另一部分说在这个条件下我会做什么。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "请选择“因为下雨，我们留在室内”的标准结构。",
        "options": [
          "We stayed inside because it was raining.",
          "We stayed inside because of it was raining.",
          "Because it was raining, so we stayed inside.",
          "We stayed inside because was raining it."
        ],
        "answer": 0,
        "why": "because 后接完整从句 it was raining；同一直接对应结构不再重复 so。",
        "id": "conjunction-subordinate-0"
      },
      {
        "type": "fill",
        "prompt": "____ the road was icy, we still completed the journey.（尽管路面结冰，这是已知事实；填让步连词或短语）",
        "answer": [
          "Although",
          "Though",
          "Even though",
          "While"
        ],
        "why": "Although、though、even though 以及让步用法的 while 都可引出已知事实的让步从句，不再额外加 but。",
        "id": "conjunction-subordinate-1"
      },
      {
        "type": "mc",
        "prompt": "关于从句引导词，哪项正确？",
        "options": [
          "每个引导词都只连接而不作成分",
          "what 在 I know what she needs 中还作 needs 的宾语",
          "只要一个句子有两个连词就必定错误",
          "表示是否的 if 从句永远不能出现 will"
        ],
        "answer": 1,
        "why": "what 既引导整个内容从句，又在内部承担 needs 的宾语，不能与普通连接词 that 混为一谈。",
        "id": "conjunction-subordinate-2"
      }
    ],
    "related": [
      "conjunction-types",
      "clause-basics",
      "real-if"
    ],
    "classification": [
      "原因：because",
      "条件：if",
      "时间：when",
      "让步：although"
    ],
    "pitfalls": [
      {
        "title": "说明原因时把主要情况补完整",
        "wrong": "Because it rains.",
        "right": "I stay home because it rains.",
        "text": "在这里要写完整的事情，补上主要情况我待在家里。"
      },
      {
        "title": "同一组原因和结果通常不重复连接",
        "wrong": "Because it rains, so I stay home.",
        "right": "Because it rains, I stay home.",
        "text": "这句话用 because 已经说明原因，通常不再加 so。"
      }
    ],
    "advanced": false
  }
];
  for(const e of entries){
    add(e.g,e.id,e.title,e.en,e.level,e.source,e.formula,e.take,
      e.steps.map(s=>[s.h,s.t]),e.examples.map(x=>[x.en,x.zh,x.note]),e.quiz,e.related);
  }
  window.LESSON_DETAILS={...(window.LESSON_DETAILS||{}),...Object.fromEntries(entries.map(e=>[e.id,{
    definition:e.steps[0].t,classification:e.classification,
    usage:e.steps.slice(1).map((s,i)=>({...s,...(e.advanced&&i===2?{advanced:true}:{})})).concat(e.extraUsage||[]),
    pitfalls:e.pitfalls,examples:e.examples
  }]))};
  window.TOPIC_BEGINNER={...(window.TOPIC_BEGINNER||{}),...{
  "nouns": {
    "definition": "名词是人、动物、东西或一些想法的名字。比如 cat（猫）、book（书）、love（爱）。先问一句：这里说的是什么？",
    "usage": [
      {
        "h": "先从身边的名字认识它",
        "t": "cat 是猫，book 是书，Tom 是一个人的名字。它们都可以是名词。"
      },
      {
        "h": "再看能不能数",
        "t": "one book、two books 能按本数；water（水）通常借助 cup（杯）来数。不要只按中文猜可数性。"
      },
      {
        "h": "按需要继续点开分类",
        "t": "名字专不专用、说的是物品还是想法、能不能数，是不同的问题。点击下面的分类，一次学一小类。"
      }
    ],
    "examples": [
      {
        "en": "I have a cat.",
        "zh": "我有一只猫。",
        "note": "cat 是猫的名字，a cat 表示一只猫。"
      },
      {
        "en": "I drink milk.",
        "zh": "我喝奶。",
        "note": "milk 是奶的名字。它也是名词。"
      }
    ],
    "pitfalls": [
      {
        "title": "a 后面不直接用复数",
        "wrong": "I have a books.",
        "right": "I have a book.",
        "text": "a 在这里表示一本，后面用 book。"
      }
    ]
  },
  "pronouns": {
    "definition": "代词可以替我们说人或东西，帮助避免一直重复名字。比如 Tom 可以接着用 he（他）来说。",
    "usage": [
      {
        "h": "先认常用的人称词",
        "t": "I 是我，you 是你，he 是他，she 是她，it 是它。用时先想清楚说的是谁。"
      },
      {
        "h": "有些词会换形式",
        "t": "I like her. 是我喜欢她。I 和 me 都表示我，但放在句中的位置不同，常要选不同形式。"
      },
      {
        "h": "再分别认识别的代词",
        "t": "my/mine 说我的，myself 说我自己，this 说这个。它们任务不同，可以点进下级分别学。"
      }
    ],
    "examples": [
      {
        "en": "I like her.",
        "zh": "我喜欢她。",
        "note": "I 是我，her 是她。"
      },
      {
        "en": "She helps me.",
        "zh": "她帮助我。",
        "note": "she 是她，me 是我；帮忙的人和得到帮助的人不同。"
      }
    ],
    "pitfalls": [
      {
        "title": "for 后面用 me",
        "wrong": "Please wait for I.",
        "right": "Please wait for me.",
        "text": "意思是请等我。for 后用 me，不用 I。"
      }
    ]
  },
  "articles": {
    "definition": "冠词是 a、an、the 这几个小词，常放在名词前。它们帮助说明是一个普通对象，还是说得清是哪一个。",
    "usage": [
      {
        "h": "a/an 常说一个",
        "t": "a cat 是一只猫，an egg 是一个鸡蛋。先学日常搭配，再认识按发音选择 a/an 的规则。"
      },
      {
        "h": "the 常说双方知道的对象",
        "t": "第一次说一只猫可以用 a cat。再说刚才那只猫，就可以用 the cat。"
      },
      {
        "h": "有时什么冠词也不放",
        "t": "Cats like milk. 一般地说猫喜欢奶，cats、milk 前面都不放冠词。这叫零冠词。"
      }
    ],
    "examples": [
      {
        "en": "I see a cat.",
        "zh": "我看见一只猫。",
        "note": "先提到一只猫，没有指定是哪只，用 a。"
      },
      {
        "en": "The cat is small.",
        "zh": "那只猫很小。",
        "note": "这里接着说刚才提过的猫，用 the。"
      }
    ],
    "pitfalls": [
      {
        "title": "an 后面看发音",
        "wrong": "I eat a egg.",
        "right": "I eat an egg.",
        "text": "egg 的开头发音适合用 an。"
      }
    ]
  },
  "adjectives": {
    "definition": "形容词说明人或东西是什么样的。比如 red 是红色的，big 是大的，happy 是开心的。",
    "usage": [
      {
        "h": "放在名词前说特点",
        "t": "a red bag 是一个红色的包。red 说明 bag 的颜色。"
      },
      {
        "h": "也能放在 is 后说状态",
        "t": "The bag is red. 是包是红色的。red 的位置换了，仍在说明包。"
      },
      {
        "h": "先分清说东西还是说动作",
        "t": "形容词常说人或东西的特点；副词常补充动作怎么做。先看它到底在说明谁。"
      }
    ],
    "examples": [
      {
        "en": "I have a red bag.",
        "zh": "我有一个红色的包。",
        "note": "red 放在 bag 前面说颜色。"
      },
      {
        "en": "The bag is red.",
        "zh": "包是红色的。",
        "note": "red 放在 is 后面，仍说包的颜色。"
      }
    ],
    "pitfalls": [
      {
        "title": "形容词不因为名词变复数就加 s",
        "wrong": "I have two reds bags.",
        "right": "I have two red bags.",
        "text": "两个包用 bags，但 red 不跟着加 s。"
      }
    ]
  },
  "adverbs": {
    "definition": "副词常补充动作怎么做、什么时候做、多久做一次。比如 fast 是快地，often 是经常。",
    "usage": [
      {
        "h": "看它是不是在补充动作",
        "t": "He runs fast. 是他跑得快。fast 说明跑的速度。"
      },
      {
        "h": "时间和次数也可以补充",
        "t": "now 是现在，often 是经常。She often reads. 说她经常读书。"
      },
      {
        "h": "不只看词尾",
        "t": "很多副词有 ly，但 fast 本身就能说快地。判断时先看它在这句话里做什么。"
      }
    ],
    "examples": [
      {
        "en": "He runs fast.",
        "zh": "他跑得快。",
        "note": "fast 说的是跑这个动作。"
      },
      {
        "en": "She often reads books.",
        "zh": "她经常读书。",
        "note": "often 表示经常，不是在描述她的外貌。"
      }
    ],
    "pitfalls": [
      {
        "title": "fast 本身就可以作副词",
        "wrong": "He runs fastly.",
        "right": "He runs fast.",
        "text": "表示跑得快，直接用 fast，不再加 ly。"
      }
    ]
  },
  "prepositions": {
    "definition": "介词是 in、on、under 等小词。它常和后面的名字一起，说明时间、位置或人与事物之间的关系。",
    "usage": [
      {
        "h": "先学最常见的位置",
        "t": "in the box 是在盒子里，on the desk 是在桌上，under the table 是在桌下。"
      },
      {
        "h": "也能说明时间",
        "t": "at six 是在六点，on Monday 是在星期一。把小词和后面的时间一起学更容易记。"
      },
      {
        "h": "后面也能跟代词",
        "t": "with her 是和她。这里要用 her，不用 she。再到下级卡片分别学习时间和地点。"
      }
    ],
    "examples": [
      {
        "en": "The book is on the desk.",
        "zh": "书在书桌上。",
        "note": "on 和 the desk 一起说明书在哪里。"
      },
      {
        "en": "I play with her.",
        "zh": "我和她玩。",
        "note": "with her 表示和她。"
      }
    ],
    "pitfalls": [
      {
        "title": "介词后用 her",
        "wrong": "I play with she.",
        "right": "I play with her.",
        "text": "意思是我和她玩。with 后面用 her，不用 she。"
      }
    ]
  },
  "conjunctions": {
    "definition": "连词像小桥，把词或句子接起来。and 常说和、并且，but 常说但是，because 常说因为。",
    "usage": [
      {
        "h": "and 把信息放在一起",
        "t": "I like cats and dogs. 是我喜欢猫和狗。and 把喜欢的两类动物接起来。"
      },
      {
        "h": "but、because 表示不同关系",
        "t": "but 表转折，because 说明原因。先想两部分是什么关系，再选合适的小词。"
      },
      {
        "h": "别只停在名称上",
        "t": "并列连词常连接地位相近的部分；从属连词常引出补充原因、条件等的小句。可以点开下面的类别看短例子。"
      }
    ],
    "examples": [
      {
        "en": "Tom sings and Ann dances.",
        "zh": "汤姆唱歌，安跳舞。",
        "note": "and 连接两件事。"
      },
      {
        "en": "I stay home because it rains.",
        "zh": "因为下雨，我待在家里。",
        "note": "because 后面补充下雨这个原因。"
      }
    ],
    "pitfalls": [
      {
        "title": "and 后面的内容要接完整",
        "wrong": "I like cats and.",
        "right": "I like cats and dogs.",
        "text": "这里用 and 继续补充喜欢的东西，所以要把后面的内容说完。"
      }
    ]
  },
  "verbs": {
    "definition": "动词用来说明做什么，或处在什么状态。eat（吃）、run（跑）是动词；She is happy. 里的 is 也是动词。",
    "usage": [
      {
        "h": "先找动作",
        "t": "I eat rice. 中 eat 表示吃，rice 是吃的东西。动词常是句子最重要的部分之一。"
      },
      {
        "h": "没有明显动作，也可能有动词",
        "t": "She is happy. 表示她很开心。is 把她和开心的状态连起来。"
      },
      {
        "h": "再看后面怎么接",
        "t": "有的动词能直接接东西，有的要加小词，有的帮助别的动词。到下级卡片一次学一种用法。"
      }
    ],
    "examples": [
      {
        "en": "I eat rice.",
        "zh": "我吃米饭。",
        "note": "eat 表示吃，是动作。"
      },
      {
        "en": "She is happy.",
        "zh": "她很开心。",
        "note": "is 用来连接她和开心的状态。"
      }
    ],
    "pitfalls": [
      {
        "title": "不能漏掉连接状态的 is",
        "wrong": "She happy.",
        "right": "She is happy.",
        "text": "这句要表达她很开心，需要 is 把两部分连起来。"
      }
    ]
  },
  "numerals": {
    "definition": "数词用来数有多少，或排在第几。two 是二，first 是第一。",
    "usage": [
      {
        "h": "先学有多少",
        "t": "one book 是一本书，two books 是两本书。one、two 说的是数量。"
      },
      {
        "h": "再学排第几",
        "t": "the first book 是第一本书。first 说顺序，不是说总共有几本。"
      },
      {
        "h": "别忘了名词的形式",
        "t": "两个以上的普通可数名词通常要用复数，所以说 two books，不说 two book。"
      }
    ],
    "examples": [
      {
        "en": "I have two books.",
        "zh": "我有两本书。",
        "note": "two 表示二；两个以上用 books。"
      },
      {
        "en": "This is my first book.",
        "zh": "这是我的第一本书。",
        "note": "first 说明顺序，是第一本。"
      }
    ],
    "pitfalls": [
      {
        "title": "两个以上通常用复数",
        "wrong": "I have two book.",
        "right": "I have two books.",
        "text": "two 表示两个，book 这里要用复数 books。"
      }
    ]
  },
  "interjections": {
    "definition": "感叹词用来直接表达惊讶、高兴、疼痛等感受。比如 Oh（哦）、Wow（哇）、Ouch（哎哟）。",
    "usage": [
      {
        "h": "先听懂情绪",
        "t": "Wow! 常表示惊讶或赞叹。Ouch! 常表示疼。具体语气还要听说话的声音和看情况。"
      },
      {
        "h": "它可以独立说出来",
        "t": "Wow! 可以自己成为一句感叹。也可以接着说 Wow, this cake is big!（哇，这个蛋糕真大！）。"
      },
      {
        "h": "后面的句子仍要说完整",
        "t": "感叹词不能替代后面句子需要的 is 等动词。正式写作也不必每句都加感叹词。"
      }
    ],
    "examples": [
      {
        "en": "Oh, I see.",
        "zh": "哦，我明白了。",
        "note": "Oh 在这里表示明白了。"
      },
      {
        "en": "Wow! This cake is big.",
        "zh": "哇！这个蛋糕真大。",
        "note": "Wow 表示赞叹；后面另有一个完整的句子。"
      }
    ],
    "pitfalls": [
      {
        "title": "后面的句子也要配合正确",
        "wrong": "Wow! This cake are big.",
        "right": "Wow! This cake is big.",
        "text": "cake 在这里是一个蛋糕，所以用 is。Wow 不改变这个配合。"
      }
    ]
  },
  "noun-semantic": {
    "definition": "具体名词常说猫、书等具体对象；抽象名词常说爱、想法等。它们按意思来分，不是按能不能数来分。",
    "usage": [
      {
        "h": "先看具体的对象",
        "t": "cat 是猫，book 是书。它们常能指向现实中的具体对象。"
      },
      {
        "h": "再看想法或感情",
        "t": "love 表示爱，idea 表示想法。它们不是一本书那样的物品。"
      },
      {
        "h": "最后另外检查可数性",
        "t": "idea 虽然表示想法，也可以说 two ideas。water 虽然是具体的水，却通常不用 two water 直接数。"
      }
    ],
    "examples": [
      {
        "en": "The book is red.",
        "zh": "书是红色的。",
        "note": "book 是具体的物品名。"
      },
      {
        "en": "Love is important.",
        "zh": "爱很重要。",
        "note": "love 是感情，属于抽象名词。"
      }
    ],
    "pitfalls": [
      {
        "title": "一般建议不用 an advice",
        "wrong": "I need an advice.",
        "right": "I need some advice.",
        "text": "这里说需要一些建议，用 some advice。也可以说 a piece of advice（一条建议）。"
      }
    ]
  }
}};
})();
