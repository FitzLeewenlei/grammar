/* Original beginner storyboards: word roles, modifiers and useful combinations. */
(() => {
  const lessons = [
  {
    "key": "topic:adjectives",
    "title": "让一个词说清东西是什么样",
    "steps": [
      {
        "caption": "先放一只包和一个表示颜色的词；这时它们还是两个待组合的词块。",
        "lanes": [
          {
            "id": "sentence",
            "label": "东西词块",
            "tokens": [
              {
                "id": "bag",
                "text": "bag",
                "tone": "object",
                "role": "东西"
              }
            ]
          },
          {
            "id": "quality",
            "label": "特点词块",
            "tokens": [
              {
                "id": "red",
                "text": "red",
                "tone": "modifier",
                "role": "红色的"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 red 放到 bag 前面，它就能说明这是一个红色的包。",
        "lanes": [
          {
            "id": "sentence",
            "label": "名词短语",
            "tokens": [
              {
                "id": "red",
                "text": "red",
                "tone": "modifier",
                "role": "红色的"
              },
              {
                "id": "bag",
                "text": "bag",
                "tone": "object",
                "role": "东西"
              }
            ]
          }
        ],
        "translation": "一个红色的包",
        "connectors": [
          {
            "from": "red",
            "to": "bag",
            "label": "说明颜色"
          }
        ]
      },
      {
        "caption": "加上 I have，词块就进入完整的句子，red 仍然说明 bag。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "have",
                "text": "have",
                "tone": "verb",
                "role": "有"
              },
              {
                "id": "a",
                "text": "a",
                "tone": "modifier",
                "role": "一个"
              },
              {
                "id": "red",
                "text": "red",
                "tone": "modifier",
                "role": "红色的"
              },
              {
                "id": "bag",
                "text": "bag",
                "tone": "object",
                "role": "东西"
              }
            ]
          }
        ],
        "translation": "我有一个红色的包。"
      },
      {
        "caption": "换一种说法，把 red 移到 is 后面，它仍然描述包的颜色。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "bag",
                "text": "The bag",
                "tone": "subject",
                "role": "说的是包"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "red",
                "text": "red",
                "tone": "modifier",
                "role": "红色的"
              }
            ]
          }
        ],
        "translation": "这个包是红色的。",
        "connectors": [
          {
            "from": "red",
            "to": "bag",
            "label": "说明颜色"
          }
        ]
      }
    ]
  },
  {
    "key": "topic:adverbs",
    "title": "给动作补上怎么做、多久做一次",
    "steps": [
      {
        "caption": "先看一句完整的话：He runs，只告诉我们他做什么。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "run",
                "text": "runs",
                "tone": "verb",
                "role": "跑"
              }
            ]
          }
        ],
        "translation": "他跑步。"
      },
      {
        "caption": "把 fast 加到动作后面，说明他跑得快；fast 在这里修饰 runs。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "run",
                "text": "runs",
                "tone": "verb",
                "role": "跑"
              },
              {
                "id": "fast",
                "text": "fast",
                "tone": "modifier",
                "role": "跑得怎样"
              }
            ]
          }
        ],
        "translation": "他跑得快。",
        "connectors": [
          {
            "from": "fast",
            "to": "run",
            "label": "说明怎么跑"
          }
        ]
      },
      {
        "caption": "再把 often 放到 runs 前面，它说明经常做；两个副词作用不同。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "often",
                "text": "often",
                "tone": "time",
                "role": "多久一次"
              },
              {
                "id": "run",
                "text": "runs",
                "tone": "verb",
                "role": "跑"
              },
              {
                "id": "fast",
                "text": "fast",
                "tone": "modifier",
                "role": "跑得怎样"
              }
            ]
          }
        ],
        "translation": "他经常跑得很快。"
      }
    ]
  },
  {
    "key": "topic:prepositions",
    "title": "让位置小词和后面的东西一起工作",
    "steps": [
      {
        "caption": "cat 是猫，table 是桌子；只把它们放在一起，还没有说清位置。",
        "lanes": [
          {
            "id": "sentence",
            "label": "待组合词块",
            "tokens": [
              {
                "id": "cat",
                "text": "the cat",
                "tone": "subject",
                "role": "猫"
              },
              {
                "id": "table",
                "text": "the table",
                "tone": "object",
                "role": "位置的参照物"
              }
            ]
          }
        ]
      },
      {
        "caption": "先把 on 和 the table 放进同一格，它们合起来说明在桌面上。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说的是谁",
            "tokens": [
              {
                "id": "cat",
                "text": "the cat",
                "tone": "subject",
                "role": "猫"
              }
            ]
          },
          {
            "id": "place",
            "label": "位置词组",
            "tokens": [
              {
                "id": "prep",
                "text": "on",
                "tone": "linker",
                "role": "在表面"
              },
              {
                "id": "table",
                "text": "the table",
                "tone": "object",
                "role": "位置的参照物"
              }
            ]
          }
        ]
      },
      {
        "caption": "把位置词组接到 is 后面，句子就说清猫在哪里。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "cat",
                "text": "The cat",
                "tone": "subject",
                "role": "猫"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "prep",
                "text": "on",
                "tone": "linker",
                "role": "在表面"
              },
              {
                "id": "table",
                "text": "the table",
                "tone": "object",
                "role": "位置的参照物"
              }
            ]
          }
        ],
        "translation": "猫在桌子上。"
      },
      {
        "caption": "把 on 换成 under，参照物没有变，猫的位置却变成桌子下面。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "cat",
                "text": "The cat",
                "tone": "subject",
                "role": "猫"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "prep",
                "text": "under",
                "tone": "linker",
                "role": "在下面"
              },
              {
                "id": "table",
                "text": "the table",
                "tone": "object",
                "role": "位置的参照物"
              }
            ]
          }
        ],
        "translation": "猫在桌子下面。"
      }
    ]
  },
  {
    "key": "topic:conjunctions",
    "title": "用小桥把两句话接起来",
    "steps": [
      {
        "caption": "先看两件事：Tom 唱歌，Ann 跳舞；现在是两句独立的话。",
        "lanes": [
          {
            "id": "a",
            "label": "第一句话",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "sing",
                "text": "sings",
                "tone": "verb",
                "role": "唱歌"
              }
            ]
          },
          {
            "id": "b",
            "label": "第二句话",
            "tokens": [
              {
                "id": "ann",
                "text": "Ann",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "dance",
                "text": "dances",
                "tone": "verb",
                "role": "跳舞"
              }
            ]
          }
        ],
        "translation": "汤姆唱歌。安跳舞。"
      },
      {
        "caption": "把 and 放在中间准备连接，它表示两件事都发生。",
        "lanes": [
          {
            "id": "a",
            "label": "第一部分",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "sing",
                "text": "sings",
                "tone": "verb",
                "role": "唱歌"
              }
            ]
          },
          {
            "id": "bridge",
            "label": "连接小桥",
            "tokens": [
              {
                "id": "link",
                "text": "and",
                "tone": "linker",
                "role": "并且"
              }
            ]
          },
          {
            "id": "b",
            "label": "第二部分",
            "tokens": [
              {
                "id": "ann",
                "text": "Ann",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "dance",
                "text": "dances",
                "tone": "verb",
                "role": "跳舞"
              }
            ]
          }
        ]
      },
      {
        "caption": "两句话由 and 接在一起，左右两边仍各自有谁和动作。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "sing",
                "text": "sings",
                "tone": "verb",
                "role": "唱歌"
              },
              {
                "id": "link",
                "text": "and",
                "tone": "linker",
                "role": "并且"
              },
              {
                "id": "ann",
                "text": "Ann",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "dance",
                "text": "dances",
                "tone": "verb",
                "role": "跳舞"
              }
            ]
          }
        ],
        "translation": "汤姆唱歌，安跳舞。"
      },
      {
        "caption": "若要表达“但是”，就用 but；这里后半句改为安不唱歌。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "sing",
                "text": "sings,",
                "tone": "verb",
                "role": "唱歌"
              },
              {
                "id": "link",
                "text": "but",
                "tone": "linker",
                "role": "但是"
              },
              {
                "id": "ann",
                "text": "Ann",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "dance",
                "text": "does not",
                "tone": "verb",
                "role": "不这样做"
              }
            ]
          }
        ],
        "translation": "汤姆唱歌，但安不唱。"
      }
    ]
  },
  {
    "key": "topic:verbs",
    "title": "动词既能说动作，也能连接状态",
    "steps": [
      {
        "caption": "先看 eat 和 is 两个词，它们都可能在句子里担任动词。",
        "lanes": [
          {
            "id": "pool",
            "label": "待分类词块",
            "tokens": [
              {
                "id": "eat",
                "text": "eat",
                "tone": "verb",
                "role": "吃"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "是、处于"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 eat 放到动作一格，把 is 放到连接状态一格，看看各自的工作。",
        "lanes": [
          {
            "id": "action",
            "label": "表达动作",
            "tokens": [
              {
                "id": "eat",
                "text": "eat",
                "tone": "verb",
                "role": "吃"
              }
            ]
          },
          {
            "id": "state",
            "label": "连接状态",
            "tokens": [
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接前后"
              }
            ]
          }
        ]
      },
      {
        "caption": "补上人和内容：eat 说做什么，is 把她和开心的状态连起来。",
        "lanes": [
          {
            "id": "action",
            "label": "动作句",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "eat",
                "text": "eat",
                "tone": "verb",
                "role": "吃"
              },
              {
                "id": "rice",
                "text": "rice",
                "tone": "object",
                "role": "吃的东西"
              }
            ]
          },
          {
            "id": "state",
            "label": "状态句",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "happy",
                "text": "happy",
                "tone": "modifier",
                "role": "开心的"
              }
            ]
          }
        ],
        "translation": "我吃米饭。她很开心。"
      }
    ]
  },
  {
    "key": "topic:numerals",
    "title": "分清是在数多少，还是排第几",
    "steps": [
      {
        "caption": "先把 two 和 first 放在一起，它们都与数有关，但回答的问题不同。",
        "lanes": [
          {
            "id": "pool",
            "label": "待分类词块",
            "tokens": [
              {
                "id": "two",
                "text": "two",
                "tone": "modifier",
                "role": "二"
              },
              {
                "id": "first",
                "text": "first",
                "tone": "modifier",
                "role": "第一"
              }
            ]
          }
        ]
      },
      {
        "caption": "two 放在“多少”一格；first 放在“第几”一格，不能混着用。",
        "lanes": [
          {
            "id": "amount",
            "label": "有多少",
            "tokens": [
              {
                "id": "two",
                "text": "two",
                "tone": "modifier",
                "role": "两个"
              },
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "猫"
              }
            ]
          },
          {
            "id": "order",
            "label": "排第几",
            "tokens": [
              {
                "id": "first",
                "text": "first",
                "tone": "modifier",
                "role": "第一"
              },
              {
                "id": "book",
                "text": "book",
                "tone": "object",
                "role": "书"
              }
            ]
          }
        ]
      },
      {
        "caption": "把词块放进句子：two cats 说两只，first book 说第一本。",
        "lanes": [
          {
            "id": "amount",
            "label": "数量句",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "have",
                "text": "have",
                "tone": "verb",
                "role": "有"
              },
              {
                "id": "two",
                "text": "two",
                "tone": "modifier",
                "role": "两个"
              },
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "猫"
              }
            ]
          },
          {
            "id": "order",
            "label": "顺序句",
            "tokens": [
              {
                "id": "this",
                "text": "This",
                "tone": "subject",
                "role": "这"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "my",
                "text": "my",
                "tone": "modifier",
                "role": "我的"
              },
              {
                "id": "first",
                "text": "first",
                "tone": "modifier",
                "role": "第一"
              },
              {
                "id": "book",
                "text": "book",
                "tone": "object",
                "role": "书"
              }
            ]
          }
        ],
        "translation": "我有两只猫。这是我的第一本书。"
      }
    ]
  },
  {
    "key": "topic:interjections",
    "title": "在完整的话前面表达一个感受",
    "steps": [
      {
        "caption": "先看 It is big，只是在说明它很大，还没有加直接表达感受的小词。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "it",
                "text": "It",
                "tone": "subject",
                "role": "它"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "big",
                "text": "big.",
                "tone": "modifier",
                "role": "大的"
              }
            ]
          }
        ],
        "translation": "它很大。"
      },
      {
        "caption": "把 Wow 放在情绪一格，表示看到大东西时的惊叹；它不是句子的主语。",
        "lanes": [
          {
            "id": "feeling",
            "label": "直接表达感受",
            "tokens": [
              {
                "id": "feeling",
                "text": "Wow!",
                "tone": "neutral",
                "role": "哇"
              }
            ]
          },
          {
            "id": "sentence",
            "label": "完整说明",
            "tokens": [
              {
                "id": "it",
                "text": "It",
                "tone": "subject",
                "role": "它"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "big",
                "text": "big.",
                "tone": "modifier",
                "role": "大的"
              }
            ]
          }
        ]
      },
      {
        "caption": "把感受和说明接在一起，Wow 独立表达惊叹，后面仍是一句完整的话。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "feeling",
                "text": "Wow!",
                "tone": "neutral",
                "role": "惊叹"
              },
              {
                "id": "it",
                "text": "It",
                "tone": "subject",
                "role": "它"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "big",
                "text": "big.",
                "tone": "modifier",
                "role": "大的"
              }
            ]
          }
        ],
        "translation": "哇，它很大！"
      },
      {
        "caption": "换成 Oh, I see，又可以表达“哦，我明白了”，感叹词要看具体情境。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "feeling",
                "text": "Oh,",
                "tone": "neutral",
                "role": "明白了的感受"
              },
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "see",
                "text": "see.",
                "tone": "verb",
                "role": "明白"
              }
            ]
          }
        ],
        "translation": "哦，我明白了。"
      }
    ]
  },
  {
    "key": "lesson:auxiliaries",
    "title": "找出帮动作提问、否定的小帮手",
    "steps": [
      {
        "caption": "You like milk 是普通陈述句，like 表达“喜欢”这个主要意思。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "like",
                "text": "like",
                "tone": "verb",
                "role": "喜欢"
              },
              {
                "id": "milk",
                "text": "milk.",
                "tone": "object",
                "role": "喜欢什么"
              }
            ]
          }
        ],
        "translation": "你喜欢牛奶。"
      },
      {
        "caption": "提问时请 Do 到句首帮忙，like 保持原形，不要再给它另加变化。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "do",
                "text": "Do",
                "tone": "linker",
                "role": "提问帮手"
              },
              {
                "id": "you",
                "text": "you",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "like",
                "text": "like",
                "tone": "verb",
                "role": "喜欢"
              },
              {
                "id": "milk",
                "text": "milk?",
                "tone": "object",
                "role": "喜欢什么"
              }
            ]
          }
        ],
        "translation": "你喜欢牛奶吗？"
      },
      {
        "caption": "改成否定时，把 do 移回主语后，再加 not；主要动作仍是 like。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "do",
                "text": "do",
                "tone": "linker",
                "role": "否定帮手"
              },
              {
                "id": "not",
                "text": "not",
                "tone": "modifier",
                "role": "不"
              },
              {
                "id": "like",
                "text": "like",
                "tone": "verb",
                "role": "喜欢"
              },
              {
                "id": "milk",
                "text": "milk.",
                "tone": "object",
                "role": "喜欢什么"
              }
            ]
          }
        ],
        "translation": "你不喜欢牛奶。"
      },
      {
        "caption": "be 和 have 也能帮忙：is reading 说正在读，has eaten 说已经吃过。",
        "lanes": [
          {
            "id": "be-help",
            "label": "be 的帮助",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "linker",
                "role": "正在进行的帮手"
              },
              {
                "id": "read",
                "text": "reading.",
                "tone": "verb",
                "role": "正在读"
              }
            ]
          },
          {
            "id": "have-help",
            "label": "have 的帮助",
            "tokens": [
              {
                "id": "she2",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "have",
                "text": "has",
                "tone": "linker",
                "role": "完成形式的帮手"
              },
              {
                "id": "eat",
                "text": "eaten.",
                "tone": "verb",
                "role": "已经吃"
              }
            ]
          }
        ],
        "translation": "她正在读书。她已经吃过了。"
      }
    ]
  },
  {
    "key": "lesson:can",
    "title": "让 can 表达会做、可以做和请求",
    "steps": [
      {
        "caption": "I swim 只说我游泳；先把说能力的小词 can 放进来看看。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "swim",
                "text": "swim.",
                "tone": "verb",
                "role": "游泳"
              }
            ]
          }
        ],
        "translation": "我游泳。"
      },
      {
        "caption": "can 放在动作前表示会做，swim 保持原形，中间不用加 to。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "can",
                "text": "can",
                "tone": "linker",
                "role": "有能力"
              },
              {
                "id": "swim",
                "text": "swim.",
                "tone": "verb",
                "role": "游泳原形"
              }
            ]
          }
        ],
        "translation": "我会游泳。"
      },
      {
        "caption": "把 Can 移到句首，Can I swim? 在合适情境里可以询问可不可以游泳。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "can",
                "text": "Can",
                "tone": "linker",
                "role": "询问许可"
              },
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "swim",
                "text": "swim?",
                "tone": "verb",
                "role": "游泳原形"
              }
            ]
          }
        ],
        "translation": "我可以游泳吗？"
      },
      {
        "caption": "换成 Can you help me?，就变成请求别人帮忙；can 后仍是原形。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "can",
                "text": "Can",
                "tone": "linker",
                "role": "提出请求"
              },
              {
                "id": "you",
                "text": "you",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "help",
                "text": "help",
                "tone": "verb",
                "role": "帮助原形"
              },
              {
                "id": "me",
                "text": "me?",
                "tone": "object",
                "role": "帮助谁"
              }
            ]
          }
        ],
        "translation": "你能帮我吗？"
      }
    ]
  },
  {
    "key": "lesson:must",
    "title": "不要把“不许”和“不必”当成一回事",
    "steps": [
      {
        "caption": "must 放在 go 前面，表示现在必须走，是一项要求。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "must",
                "text": "must",
                "tone": "linker",
                "role": "必须"
              },
              {
                "id": "go",
                "text": "go",
                "tone": "verb",
                "role": "走"
              },
              {
                "id": "now",
                "text": "now.",
                "tone": "time",
                "role": "现在"
              }
            ]
          }
        ],
        "translation": "你现在必须走。"
      },
      {
        "caption": "在 must 后加 not，意思变成“不许”；它并不是说可以不用走。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "must",
                "text": "must",
                "tone": "linker",
                "role": "要求"
              },
              {
                "id": "not",
                "text": "not",
                "tone": "modifier",
                "role": "禁止"
              },
              {
                "id": "go",
                "text": "go",
                "tone": "verb",
                "role": "走"
              },
              {
                "id": "now",
                "text": "now.",
                "tone": "time",
                "role": "现在"
              }
            ]
          }
        ],
        "translation": "你现在不许走。"
      },
      {
        "caption": "如果只是“不必”，换成 do not have to；走不走可以根据情况决定。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "must",
                "text": "do not have to",
                "tone": "linker",
                "role": "不必"
              },
              {
                "id": "go",
                "text": "go",
                "tone": "verb",
                "role": "走"
              },
              {
                "id": "now",
                "text": "now.",
                "tone": "time",
                "role": "现在"
              }
            ]
          }
        ],
        "translation": "你现在不必走。"
      },
      {
        "caption": "must 还可作很有把握的判断；这里 must be home 是推测，不是在下命令。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "must",
                "text": "must",
                "tone": "linker",
                "role": "有把握的推测"
              },
              {
                "id": "be",
                "text": "be",
                "tone": "verb",
                "role": "处在"
              },
              {
                "id": "home",
                "text": "home.",
                "tone": "object",
                "role": "家里"
              }
            ]
          }
        ],
        "translation": "他一定在家。"
      }
    ]
  },
  {
    "key": "lesson:should",
    "title": "把建议和预计放进句子里",
    "steps": [
      {
        "caption": "先说 You are tired，给出“你累了”这个情况，接下来可以提出建议。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "be",
                "text": "are",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "state",
                "text": "tired.",
                "tone": "modifier",
                "role": "累的"
              }
            ]
          }
        ],
        "translation": "你累了。"
      },
      {
        "caption": "把 should 放到 rest 前，表示建议休息；rest 直接用原形。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "should",
                "text": "should",
                "tone": "linker",
                "role": "建议"
              },
              {
                "id": "rest",
                "text": "rest.",
                "tone": "verb",
                "role": "休息原形"
              }
            ]
          }
        ],
        "translation": "你应该休息。"
      },
      {
        "caption": "换一个场景，should come soon 表示预计快到，并不表示必须到。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "bus",
                "text": "The bus",
                "tone": "subject",
                "role": "公交车"
              },
              {
                "id": "should",
                "text": "should",
                "tone": "linker",
                "role": "预计"
              },
              {
                "id": "come",
                "text": "come",
                "tone": "verb",
                "role": "来"
              },
              {
                "id": "soon",
                "text": "soon.",
                "tone": "time",
                "role": "很快"
              }
            ]
          }
        ],
        "translation": "公交车应该快来了。"
      },
      {
        "caption": "回头谈过去时，should have called 常表示当时本该打电话，语气带提醒或遗憾。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "should",
                "text": "should",
                "tone": "linker",
                "role": "回看过去的建议"
              },
              {
                "id": "have",
                "text": "have",
                "tone": "linker",
                "role": "完成形式帮手"
              },
              {
                "id": "call",
                "text": "called",
                "tone": "verb",
                "role": "打电话的过去分词"
              },
              {
                "id": "me",
                "text": "me.",
                "tone": "object",
                "role": "打给谁"
              }
            ]
          }
        ],
        "translation": "你当时本该给我打电话。"
      }
    ]
  },
  {
    "key": "lesson:quantifiers",
    "title": "先看名词能不能直接数，再选数量词",
    "steps": [
      {
        "caption": "先分开放 books 和 water；书能按本数，水通常不能直接按个数数。",
        "lanes": [
          {
            "id": "count",
            "label": "能直接数",
            "tokens": [
              {
                "id": "books",
                "text": "books",
                "tone": "object",
                "role": "书"
              }
            ]
          },
          {
            "id": "mass",
            "label": "通常不能直接数",
            "tokens": [
              {
                "id": "water",
                "text": "water",
                "tone": "object",
                "role": "水"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 many 配到 books，把 much 配到 water；它们都说多，搭配却不同。",
        "lanes": [
          {
            "id": "count",
            "label": "很多本",
            "tokens": [
              {
                "id": "q-books",
                "text": "many",
                "tone": "modifier",
                "role": "数量多"
              },
              {
                "id": "books",
                "text": "books",
                "tone": "object",
                "role": "复数名词"
              }
            ]
          },
          {
            "id": "mass",
            "label": "很多的量",
            "tokens": [
              {
                "id": "q-water",
                "text": "much",
                "tone": "modifier",
                "role": "量多"
              },
              {
                "id": "water",
                "text": "water",
                "tone": "object",
                "role": "水"
              }
            ]
          }
        ]
      },
      {
        "caption": "表示有一点时，能数的用 a few，通常不能直接数的用 a little。",
        "lanes": [
          {
            "id": "count",
            "label": "几本书",
            "tokens": [
              {
                "id": "q-books",
                "text": "a few",
                "tone": "modifier",
                "role": "有几个"
              },
              {
                "id": "books",
                "text": "books",
                "tone": "object",
                "role": "书"
              }
            ]
          },
          {
            "id": "mass",
            "label": "一点水",
            "tokens": [
              {
                "id": "q-water",
                "text": "a little",
                "tone": "modifier",
                "role": "有一点量"
              },
              {
                "id": "water",
                "text": "water",
                "tone": "object",
                "role": "水"
              }
            ]
          }
        ]
      },
      {
        "caption": "放进简单句里：a few books 仍配复数，a little water 仍说水的量。",
        "lanes": [
          {
            "id": "count",
            "label": "可数例句",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "have",
                "text": "have",
                "tone": "verb",
                "role": "有"
              },
              {
                "id": "q-books",
                "text": "a few",
                "tone": "modifier",
                "role": "有几本"
              },
              {
                "id": "books",
                "text": "books.",
                "tone": "object",
                "role": "书"
              }
            ]
          },
          {
            "id": "mass",
            "label": "不可数例句",
            "tokens": [
              {
                "id": "we",
                "text": "We",
                "tone": "subject",
                "role": "我们"
              },
              {
                "id": "need",
                "text": "need",
                "tone": "verb",
                "role": "需要"
              },
              {
                "id": "q-water",
                "text": "a little",
                "tone": "modifier",
                "role": "一点"
              },
              {
                "id": "water",
                "text": "water.",
                "tone": "object",
                "role": "水"
              }
            ]
          }
        ],
        "translation": "我有几本书。我们需要一点水。"
      }
    ]
  },
  {
    "key": "lesson:adjadv",
    "title": "看这个词是在说明东西，还是说明动作",
    "steps": [
      {
        "caption": "slow 放在 bus 前，说明公交车是什么样的；这是形容词的用法。",
        "lanes": [
          {
            "id": "sentence",
            "label": "名词短语",
            "tokens": [
              {
                "id": "a",
                "text": "a",
                "tone": "modifier",
                "role": "一辆"
              },
              {
                "id": "quality",
                "text": "slow",
                "tone": "modifier",
                "role": "慢的"
              },
              {
                "id": "bus",
                "text": "bus",
                "tone": "object",
                "role": "公交车"
              }
            ]
          }
        ],
        "translation": "一辆慢的公交车",
        "connectors": [
          {
            "from": "quality",
            "to": "bus",
            "label": "描述东西"
          }
        ]
      },
      {
        "caption": "把 slow 移到 is 后，仍在描述公交车，并没有变成说明动作。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "bus",
                "text": "The bus",
                "tone": "subject",
                "role": "公交车"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "quality",
                "text": "slow.",
                "tone": "modifier",
                "role": "慢的"
              }
            ]
          }
        ],
        "translation": "公交车很慢。",
        "connectors": [
          {
            "from": "quality",
            "to": "bus",
            "label": "描述东西"
          }
        ]
      },
      {
        "caption": "若要说走得慢，常用 slowly 来说明 walk；不要只看它在句子第几个位置。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "walk",
                "text": "walk",
                "tone": "verb",
                "role": "走路"
              },
              {
                "id": "quality",
                "text": "slowly.",
                "tone": "modifier",
                "role": "慢慢地"
              }
            ]
          }
        ],
        "translation": "我慢慢地走。",
        "connectors": [
          {
            "from": "quality",
            "to": "walk",
            "label": "描述动作"
          }
        ]
      }
    ]
  },
  {
    "key": "lesson:ing-ed",
    "title": "分清是让人有感觉，还是自己有感觉",
    "steps": [
      {
        "caption": "boring 描述这本书会让人无聊，重点是引起这种感觉的东西。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "tone": "subject",
                "role": "引起感觉的书"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "feeling",
                "text": "boring.",
                "tone": "modifier",
                "role": "让人无聊的"
              }
            ]
          }
        ],
        "translation": "这本书很无聊。"
      },
      {
        "caption": "把话题换成读书的人，用 bored 表示我自己感到无聊。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "be",
                "text": "am",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "feeling",
                "text": "bored.",
                "tone": "modifier",
                "role": "自己感到无聊"
              }
            ]
          }
        ],
        "translation": "我感到无聊。"
      },
      {
        "caption": "人也可能让别人无聊，所以 Tom 后既能用 boring，也能用 bored，意思不同。",
        "lanes": [
          {
            "id": "cause",
            "label": "让别人无聊",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "这个人"
              },
              {
                "id": "be1",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "ing",
                "text": "boring.",
                "tone": "modifier",
                "role": "令人无聊"
              }
            ]
          },
          {
            "id": "feel",
            "label": "自己感到无聊",
            "tokens": [
              {
                "id": "tom2",
                "text": "Tom",
                "tone": "subject",
                "role": "这个人"
              },
              {
                "id": "be2",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "ed",
                "text": "bored.",
                "tone": "modifier",
                "role": "感到无聊"
              }
            ]
          }
        ],
        "translation": "汤姆让人觉得无聊。汤姆自己感到无聊。"
      }
    ]
  },
  {
    "key": "lesson:comparison",
    "title": "从高，到更高，再到一组里最高",
    "steps": [
      {
        "caption": "tall 先只说明 Tom 高，还没有把他和别人比较。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "汤姆"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "tall",
                "text": "tall.",
                "tone": "modifier",
                "role": "高的"
              }
            ]
          }
        ],
        "translation": "汤姆个子高。"
      },
      {
        "caption": "要与 Ann 比较，把 tall 变成 taller，再用 than 引出比较对象。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "汤姆"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "tall",
                "text": "taller",
                "tone": "modifier",
                "role": "更高"
              },
              {
                "id": "than",
                "text": "than",
                "tone": "linker",
                "role": "比"
              },
              {
                "id": "ann",
                "text": "Ann.",
                "tone": "object",
                "role": "安"
              }
            ]
          }
        ],
        "translation": "汤姆比安高。"
      },
      {
        "caption": "现在比较三个人，若 Tom 最高，就换成 the tallest，并说清是这三人之中。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "汤姆"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "the",
                "text": "the",
                "tone": "modifier",
                "role": "特定的一组"
              },
              {
                "id": "tall",
                "text": "tallest",
                "tone": "modifier",
                "role": "最高"
              },
              {
                "id": "group",
                "text": "of the three.",
                "tone": "object",
                "role": "这三人之中"
              }
            ]
          }
        ],
        "translation": "汤姆是这三人中最高的。"
      }
    ]
  },
  {
    "key": "lesson:degree-order",
    "title": "副词的位置要看它在补充什么",
    "steps": [
      {
        "caption": "先看 I read，只说我读书，还没有说多久做一次。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "read",
                "text": "read.",
                "tone": "verb",
                "role": "读书"
              }
            ]
          }
        ],
        "translation": "我读书。"
      },
      {
        "caption": "把 often 放在普通动作 read 前，补充“经常”；先记住这个常见位置。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "often",
                "text": "often",
                "tone": "time",
                "role": "经常"
              },
              {
                "id": "read",
                "text": "read.",
                "tone": "verb",
                "role": "读书"
              }
            ]
          }
        ],
        "translation": "我经常读书。"
      },
      {
        "caption": "再换一句状态描写：warm 说房间暖和，准备补上程度说明。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "room",
                "text": "The room",
                "tone": "subject",
                "role": "房间"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "warm",
                "text": "warm.",
                "tone": "modifier",
                "role": "暖和的"
              }
            ]
          }
        ],
        "translation": "房间很暖和。"
      },
      {
        "caption": "表示“足够暖和”时，把 enough 放到 warm 后；不要套用 often 的位置。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "room",
                "text": "The room",
                "tone": "subject",
                "role": "房间"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "warm",
                "text": "warm",
                "tone": "modifier",
                "role": "暖和的"
              },
              {
                "id": "enough",
                "text": "enough.",
                "tone": "modifier",
                "role": "足够"
              }
            ]
          }
        ],
        "translation": "房间足够暖和。"
      }
    ]
  },
  {
    "key": "lesson:coordination",
    "title": "把相同层次的部分接在一起",
    "steps": [
      {
        "caption": "先放两种喜欢的东西，cats 和 dogs 都是动物名称，可以放在同一层次。",
        "lanes": [
          {
            "id": "a",
            "label": "东西一",
            "tokens": [
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "猫"
              }
            ]
          },
          {
            "id": "b",
            "label": "东西二",
            "tokens": [
              {
                "id": "dogs",
                "text": "dogs",
                "tone": "object",
                "role": "狗"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 and 把两个名称连起来，它们组成一组，仍然都是喜欢的对象。",
        "lanes": [
          {
            "id": "sentence",
            "label": "并列词组",
            "tokens": [
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "猫"
              },
              {
                "id": "link",
                "text": "and",
                "tone": "linker",
                "role": "和"
              },
              {
                "id": "dogs",
                "text": "dogs",
                "tone": "object",
                "role": "狗"
              }
            ]
          }
        ],
        "translation": "猫和狗"
      },
      {
        "caption": "把这一组整体放到 like 后面，就得到一个完整的句子。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "like",
                "text": "like",
                "tone": "verb",
                "role": "喜欢"
              },
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "猫"
              },
              {
                "id": "link",
                "text": "and",
                "tone": "linker",
                "role": "和"
              },
              {
                "id": "dogs",
                "text": "dogs.",
                "tone": "object",
                "role": "狗"
              }
            ]
          }
        ],
        "translation": "我喜欢猫和狗。"
      },
      {
        "caption": "并列也能连接两句话；用 but 时，前后表达转折关系。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "be",
                "text": "am",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "tired",
                "text": "tired,",
                "tone": "modifier",
                "role": "累的"
              },
              {
                "id": "link",
                "text": "but",
                "tone": "linker",
                "role": "但是"
              },
              {
                "id": "i2",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "can",
                "text": "can",
                "tone": "linker",
                "role": "能够"
              },
              {
                "id": "work",
                "text": "work.",
                "tone": "verb",
                "role": "工作"
              }
            ]
          }
        ],
        "translation": "我累了，但我还能工作。"
      }
    ]
  },
  {
    "key": "lesson:prepositions",
    "title": "把地点和时间各自组成一个小组",
    "steps": [
      {
        "caption": "book 和 desk 只是两个名字，先用 on 把桌子变成一个位置说明。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说的是谁",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "tone": "subject",
                "role": "书"
              }
            ]
          },
          {
            "id": "place",
            "label": "位置词组",
            "tokens": [
              {
                "id": "prep",
                "text": "on",
                "tone": "linker",
                "role": "在表面"
              },
              {
                "id": "desk",
                "text": "the desk",
                "tone": "object",
                "role": "书桌"
              }
            ]
          }
        ]
      },
      {
        "caption": "位置词组跟在 is 后，说明书在哪里；不能只留下 on 不说参照物。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "tone": "subject",
                "role": "书"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "prep",
                "text": "on",
                "tone": "linker",
                "role": "在表面"
              },
              {
                "id": "desk",
                "text": "the desk.",
                "tone": "object",
                "role": "书桌"
              }
            ]
          }
        ],
        "translation": "书在桌子上。"
      },
      {
        "caption": "换成上学这个动作，to school 是一个方向小组，说明去哪里。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "go",
                "text": "go",
                "tone": "verb",
                "role": "去"
              },
              {
                "id": "to",
                "text": "to",
                "tone": "linker",
                "role": "方向"
              },
              {
                "id": "school",
                "text": "school.",
                "tone": "object",
                "role": "学校"
              }
            ]
          }
        ],
        "translation": "我去学校。"
      },
      {
        "caption": "再把 at eight 接在后面，另加一组说明时间；方向和时间可以同时出现。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "go",
                "text": "go",
                "tone": "verb",
                "role": "去"
              },
              {
                "id": "to",
                "text": "to",
                "tone": "linker",
                "role": "方向"
              },
              {
                "id": "school",
                "text": "school",
                "tone": "object",
                "role": "学校"
              },
              {
                "id": "at",
                "text": "at",
                "tone": "linker",
                "role": "时间"
              },
              {
                "id": "eight",
                "text": "eight.",
                "tone": "time",
                "role": "八点"
              }
            ]
          }
        ],
        "translation": "我八点去学校。"
      }
    ]
  },
  {
    "key": "lesson:phrasal",
    "title": "短语动词能否拆开，要看具体搭配",
    "steps": [
      {
        "caption": "turn off 作为一组表示关掉，the light 是要关掉的东西。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "please",
                "text": "Please",
                "tone": "neutral",
                "role": "请"
              },
              {
                "id": "turn",
                "text": "turn",
                "tone": "verb",
                "role": "动作的一部分"
              },
              {
                "id": "off",
                "text": "off",
                "tone": "linker",
                "role": "关掉的一部分"
              },
              {
                "id": "light",
                "text": "the light.",
                "tone": "object",
                "role": "灯"
              }
            ]
          }
        ],
        "translation": "请关灯。"
      },
      {
        "caption": "turn off 可以把名词放在中间；the light 移动以后，意思没有改变。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "please",
                "text": "Please",
                "tone": "neutral",
                "role": "请"
              },
              {
                "id": "turn",
                "text": "turn",
                "tone": "verb",
                "role": "关掉的一部分"
              },
              {
                "id": "light",
                "text": "the light",
                "tone": "object",
                "role": "灯"
              },
              {
                "id": "off",
                "text": "off.",
                "tone": "linker",
                "role": "关掉的一部分"
              }
            ]
          }
        ],
        "translation": "请关灯。"
      },
      {
        "caption": "用 it 代替灯时，在这个搭配里 it 要放中间：turn it off。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "please",
                "text": "Please",
                "tone": "neutral",
                "role": "请"
              },
              {
                "id": "turn",
                "text": "turn",
                "tone": "verb",
                "role": "关掉的一部分"
              },
              {
                "id": "light",
                "text": "it",
                "tone": "object",
                "role": "它"
              },
              {
                "id": "off",
                "text": "off.",
                "tone": "linker",
                "role": "关掉的一部分"
              }
            ]
          }
        ],
        "translation": "请把它关掉。"
      },
      {
        "caption": "但 look after 不能这样拆开；表示照顾它时，要说 look after it。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "turn",
                "text": "look",
                "tone": "verb",
                "role": "照顾的一部分"
              },
              {
                "id": "off",
                "text": "after",
                "tone": "linker",
                "role": "照顾的一部分"
              },
              {
                "id": "light",
                "text": "it.",
                "tone": "object",
                "role": "它"
              }
            ]
          }
        ],
        "translation": "我照顾它。"
      }
    ]
  },
  {
    "key": "lesson:numerals",
    "title": "从具体数量走向顺序和大概数量",
    "steps": [
      {
        "caption": "two 回答多少，cats 用复数，先组成“两只猫”这个数量词组。",
        "lanes": [
          {
            "id": "sentence",
            "label": "数量词组",
            "tokens": [
              {
                "id": "number",
                "text": "two",
                "tone": "modifier",
                "role": "数量二"
              },
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "猫"
              }
            ]
          }
        ],
        "translation": "两只猫"
      },
      {
        "caption": "改问第几只，就用 second；这次只指排第二的那只猫，所以 cat 用单数。",
        "lanes": [
          {
            "id": "sentence",
            "label": "顺序词组",
            "tokens": [
              {
                "id": "the",
                "text": "the",
                "tone": "modifier",
                "role": "特定的一只"
              },
              {
                "id": "number",
                "text": "second",
                "tone": "modifier",
                "role": "第二"
              },
              {
                "id": "cats",
                "text": "cat",
                "tone": "object",
                "role": "猫"
              }
            ]
          }
        ],
        "translation": "第二只猫"
      },
      {
        "caption": "明确说两百只时，two 后面的 hundred 不加 s，也不加 of。",
        "lanes": [
          {
            "id": "sentence",
            "label": "明确数量",
            "tokens": [
              {
                "id": "number",
                "text": "two",
                "tone": "modifier",
                "role": "二"
              },
              {
                "id": "hundred",
                "text": "hundred",
                "tone": "modifier",
                "role": "百"
              },
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "猫"
              }
            ]
          }
        ],
        "translation": "两百只猫"
      },
      {
        "caption": "大概说有数百只时，换成 hundreds of；这是另一种搭配。",
        "lanes": [
          {
            "id": "sentence",
            "label": "大概数量",
            "tokens": [
              {
                "id": "hundred",
                "text": "hundreds",
                "tone": "modifier",
                "role": "数百"
              },
              {
                "id": "of",
                "text": "of",
                "tone": "linker",
                "role": "搭配的小词"
              },
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "猫"
              }
            ]
          }
        ],
        "translation": "数百只猫"
      }
    ]
  },
  {
    "key": "lesson:interjections",
    "title": "把直接感受和句子骨架分开看",
    "steps": [
      {
        "caption": "It is hot 本身已经是一句完整的话，It 是说的对象，is hot 说状态。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "it",
                "text": "It",
                "tone": "subject",
                "role": "说的是谁"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "hot",
                "text": "hot.",
                "tone": "modifier",
                "role": "热的"
              }
            ]
          }
        ],
        "translation": "天气很热。"
      },
      {
        "caption": "加上 Oh 表达感受，但后面那句的话题和结构仍然没有改变。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "oh",
                "text": "Oh!",
                "tone": "neutral",
                "role": "直接感受"
              },
              {
                "id": "it",
                "text": "It",
                "tone": "subject",
                "role": "说的是谁"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "hot",
                "text": "hot.",
                "tone": "modifier",
                "role": "热的"
              }
            ]
          }
        ],
        "translation": "哦，真热。"
      },
      {
        "caption": "把 Oh 暂时移到另一格，就能看见：感叹词可以独立，后面的句子也完整。",
        "lanes": [
          {
            "id": "feeling",
            "label": "感叹词",
            "tokens": [
              {
                "id": "oh",
                "text": "Oh!",
                "tone": "neutral",
                "role": "直接感受"
              }
            ]
          },
          {
            "id": "sentence",
            "label": "完整句子",
            "tokens": [
              {
                "id": "it",
                "text": "It",
                "tone": "subject",
                "role": "说的是谁"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "hot",
                "text": "hot.",
                "tone": "modifier",
                "role": "热的"
              }
            ]
          }
        ]
      },
      {
        "caption": "感叹词和感叹句不是同一类：Wow 是一个词，What a big cat 是一句感叹的话。",
        "lanes": [
          {
            "id": "feeling",
            "label": "感叹词",
            "tokens": [
              {
                "id": "oh",
                "text": "Wow!",
                "tone": "neutral",
                "role": "哇"
              }
            ]
          },
          {
            "id": "sentence",
            "label": "感叹句",
            "tokens": [
              {
                "id": "what",
                "text": "What",
                "tone": "linker",
                "role": "引出感叹"
              },
              {
                "id": "a",
                "text": "a",
                "tone": "modifier",
                "role": "一只"
              },
              {
                "id": "big",
                "text": "big",
                "tone": "modifier",
                "role": "大的"
              },
              {
                "id": "cat",
                "text": "cat!",
                "tone": "object",
                "role": "猫"
              }
            ]
          }
        ],
        "translation": "哇，好大的一只猫！"
      }
    ]
  },
  {
    "key": "lesson:conjunction-types",
    "title": "分清连接两边，还是给主句作补充",
    "steps": [
      {
        "caption": "and 和 because 都能连接信息，先把这两个词分开放。",
        "lanes": [
          {
            "id": "pool",
            "label": "待分类词块",
            "tokens": [
              {
                "id": "and",
                "text": "and",
                "tone": "linker",
                "role": "并且"
              },
              {
                "id": "because",
                "text": "because",
                "tone": "linker",
                "role": "因为"
              }
            ]
          }
        ]
      },
      {
        "caption": "and 常连接地位相近的两部分；because 则引出原因，给主要信息作补充。",
        "lanes": [
          {
            "id": "equal",
            "label": "并列连接",
            "tokens": [
              {
                "id": "and",
                "text": "and",
                "tone": "linker",
                "role": "两边地位相近"
              }
            ]
          },
          {
            "id": "dependent",
            "label": "引出补充",
            "tokens": [
              {
                "id": "because",
                "text": "because",
                "tone": "linker",
                "role": "补充原因"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 and 连两句话时，左右两边各自都能表达一件完整的事。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "reads",
                "text": "reads",
                "tone": "verb",
                "role": "读书"
              },
              {
                "id": "and",
                "text": "and",
                "tone": "linker",
                "role": "并且"
              },
              {
                "id": "ann",
                "text": "Ann",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "sings",
                "text": "sings.",
                "tone": "verb",
                "role": "唱歌"
              }
            ]
          }
        ],
        "translation": "汤姆读书，安唱歌。"
      },
      {
        "caption": "换成 because 时，后半句说前半句的原因，不能只把它当两件并列的事。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "stay",
                "text": "stay",
                "tone": "verb",
                "role": "待着"
              },
              {
                "id": "home",
                "text": "home",
                "tone": "object",
                "role": "在家"
              },
              {
                "id": "because",
                "text": "because",
                "tone": "linker",
                "role": "原因"
              },
              {
                "id": "it",
                "text": "it",
                "tone": "subject",
                "role": "天气"
              },
              {
                "id": "rain",
                "text": "rains.",
                "tone": "verb",
                "role": "下雨"
              }
            ]
          }
        ],
        "translation": "因为下雨，我待在家里。"
      }
    ]
  },
  {
    "key": "lesson:word-formation",
    "title": "看一个词怎样加上尾巴变成新词",
    "steps": [
      {
        "caption": "help 先表示帮助；准备加上的 ful 只是一个造词部分，还不是完整的新词。",
        "lanes": [
          {
            "id": "root",
            "label": "原来的词",
            "tokens": [
              {
                "id": "help",
                "text": "help",
                "tone": "verb",
                "role": "帮助"
              }
            ]
          },
          {
            "id": "suffix",
            "label": "待组合词块",
            "tokens": [
              {
                "id": "ful",
                "text": "-ful",
                "tone": "modifier",
                "role": "有某种特点"
              }
            ]
          }
        ]
      },
      {
        "caption": "把尾巴接到 help 后面，先看这两个部分怎样组成一个词。",
        "lanes": [
          {
            "id": "root",
            "label": "造词词块",
            "tokens": [
              {
                "id": "help",
                "text": "help",
                "tone": "verb",
                "role": "原来的部分"
              },
              {
                "id": "ful",
                "text": "ful",
                "tone": "modifier",
                "role": "接在后面的部分"
              }
            ]
          }
        ]
      },
      {
        "caption": "合成 helpful 后，意思变为有帮助的，词的用法也发生变化。",
        "lanes": [
          {
            "id": "root",
            "label": "新词",
            "tokens": [
              {
                "id": "help",
                "text": "helpful",
                "tone": "modifier",
                "role": "有帮助的"
              }
            ]
          }
        ]
      },
      {
        "caption": "把新词放在 is 后面说明书怎么样；helpful 不再直接表示帮助这个动作。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "book",
                "text": "This book",
                "tone": "subject",
                "role": "这本书"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "help",
                "text": "helpful.",
                "tone": "modifier",
                "role": "有帮助的"
              }
            ]
          }
        ],
        "translation": "这本书很有帮助。"
      }
    ]
  },
  {
    "key": "lesson:determiners",
    "title": "按顺序说清哪一个、多少和什么样",
    "steps": [
      {
        "caption": "book 只表示书，还没有说是哪一本；这是待补充的名词词块。",
        "lanes": [
          {
            "id": "sentence",
            "label": "名词词块",
            "tokens": [
              {
                "id": "book",
                "text": "book",
                "tone": "object",
                "role": "书"
              }
            ]
          }
        ],
        "translation": "书"
      },
      {
        "caption": "在前面加 this，就说清是这一本书；this 放在名词前作限定。",
        "lanes": [
          {
            "id": "sentence",
            "label": "名词短语",
            "tokens": [
              {
                "id": "which",
                "text": "this",
                "tone": "modifier",
                "role": "这一本"
              },
              {
                "id": "book",
                "text": "book",
                "tone": "object",
                "role": "书"
              }
            ]
          }
        ],
        "translation": "这本书"
      },
      {
        "caption": "若说是谁的，换成 my；不要在同一个位置直接堆上 this my。",
        "lanes": [
          {
            "id": "sentence",
            "label": "名词短语",
            "tokens": [
              {
                "id": "which",
                "text": "my",
                "tone": "modifier",
                "role": "我的"
              },
              {
                "id": "book",
                "text": "book",
                "tone": "object",
                "role": "书"
              }
            ]
          }
        ],
        "translation": "我的书"
      },
      {
        "caption": "再补数量和颜色，按 my、two、red、books 的顺序，把一本改成两本。",
        "lanes": [
          {
            "id": "sentence",
            "label": "名词短语",
            "tokens": [
              {
                "id": "which",
                "text": "my",
                "tone": "modifier",
                "role": "谁的"
              },
              {
                "id": "two",
                "text": "two",
                "tone": "modifier",
                "role": "多少"
              },
              {
                "id": "red",
                "text": "red",
                "tone": "modifier",
                "role": "什么颜色"
              },
              {
                "id": "book",
                "text": "books",
                "tone": "object",
                "role": "东西的名字"
              }
            ]
          }
        ],
        "translation": "我的两本红色的书"
      }
    ]
  },
  {
    "key": "lesson:verb-forms",
    "title": "同一个动作词要换成合适的形式",
    "steps": [
      {
        "caption": "go 是最基本的形式；先认识这个表示去的词，再把它放进不同的句子。",
        "lanes": [
          {
            "id": "form",
            "label": "动词原形",
            "tokens": [
              {
                "id": "go",
                "text": "go",
                "tone": "verb",
                "role": "去"
              }
            ]
          }
        ]
      },
      {
        "caption": "说她平时回家时，普通现在时里的 go 随 she 变成 goes。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "go",
                "text": "goes",
                "tone": "verb",
                "role": "现在的形式"
              },
              {
                "id": "home",
                "text": "home.",
                "tone": "object",
                "role": "家"
              }
            ]
          }
        ],
        "translation": "她回家。"
      },
      {
        "caption": "若明确说昨天，就换成 went；这个过去式不是直接在 go 后加 ed。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "go",
                "text": "went",
                "tone": "verb",
                "role": "过去式"
              },
              {
                "id": "home",
                "text": "home",
                "tone": "object",
                "role": "家"
              },
              {
                "id": "yesterday",
                "text": "yesterday.",
                "tone": "time",
                "role": "昨天"
              }
            ]
          }
        ],
        "translation": "她昨天回家了。"
      },
      {
        "caption": "在 has 后说已经回家，要用 gone 这个过去分词，不能继续用 went。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "have",
                "text": "has",
                "tone": "linker",
                "role": "完成形式帮手"
              },
              {
                "id": "go",
                "text": "gone",
                "tone": "verb",
                "role": "过去分词"
              },
              {
                "id": "home",
                "text": "home.",
                "tone": "object",
                "role": "家"
              }
            ]
          }
        ],
        "translation": "她已经回家了。"
      },
      {
        "caption": "如果说正在回家，就让 is 和 going 合作，不能只把前一个形式照搬过来。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "have",
                "text": "is",
                "tone": "linker",
                "role": "进行形式帮手"
              },
              {
                "id": "go",
                "text": "going",
                "tone": "verb",
                "role": "正在去"
              },
              {
                "id": "home",
                "text": "home.",
                "tone": "object",
                "role": "家"
              }
            ]
          }
        ],
        "translation": "她正在回家。"
      }
    ]
  },
  {
    "key": "lesson:modal-perfect",
    "title": "用现在的线索，判断以前发生的事",
    "steps": [
      {
        "caption": "先看到房间是空的，这是现在观察到的情况，还不能把推测当成确定事实。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "room",
                "text": "The room",
                "tone": "subject",
                "role": "房间"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "empty",
                "text": "empty.",
                "tone": "modifier",
                "role": "空的"
              }
            ]
          }
        ],
        "translation": "房间是空的。"
      },
      {
        "caption": "说他可能已经走了，用 may have left；推测的是现在以前的离开。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "modal",
                "text": "may",
                "tone": "linker",
                "role": "可能"
              },
              {
                "id": "have",
                "text": "have",
                "tone": "linker",
                "role": "完成形式帮手"
              },
              {
                "id": "left",
                "text": "left.",
                "tone": "verb",
                "role": "离开的过去分词"
              }
            ]
          }
        ],
        "translation": "他可能已经走了。",
        "timeline": {
          "label": "推测的是以前的事",
          "now": 75,
          "events": [
            {
              "id": "leave",
              "label": "推测的离开",
              "start": 30,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "如果再有很强的线索，可换成 must，表示更有把握；这不是过去的命令。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "modal",
                "text": "must",
                "tone": "linker",
                "role": "很有把握"
              },
              {
                "id": "have",
                "text": "have",
                "tone": "linker",
                "role": "完成形式帮手"
              },
              {
                "id": "left",
                "text": "left.",
                "tone": "verb",
                "role": "离开的过去分词"
              }
            ]
          }
        ],
        "translation": "他一定已经走了。",
        "timeline": {
          "label": "仍在判断以前的事",
          "now": 75,
          "events": [
            {
              "id": "leave",
              "label": "推测的离开",
              "start": 30,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "should have called 则回头说当时本该打电话，常带提醒或遗憾，意思不同。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "you",
                "text": "You",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "modal",
                "text": "should",
                "tone": "linker",
                "role": "当时本该"
              },
              {
                "id": "have",
                "text": "have",
                "tone": "linker",
                "role": "完成形式帮手"
              },
              {
                "id": "left",
                "text": "called",
                "tone": "verb",
                "role": "打电话的过去分词"
              },
              {
                "id": "me",
                "text": "me.",
                "tone": "object",
                "role": "打给谁"
              }
            ]
          }
        ],
        "translation": "你当时本该给我打电话。"
      }
    ]
  },
  {
    "key": "lesson:verb-transitive",
    "title": "看动作后面有没有直接接对象",
    "steps": [
      {
        "caption": "先准备 I open 和 the door，open 后还要接打开的东西，才能表达这次意思。",
        "lanes": [
          {
            "id": "sentence",
            "label": "待组合词块",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "open",
                "text": "open",
                "tone": "verb",
                "role": "打开"
              }
            ]
          },
          {
            "id": "target",
            "label": "动作对象",
            "tokens": [
              {
                "id": "door",
                "text": "the door",
                "tone": "object",
                "role": "门"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 the door 直接接到 open 后面，就说清我打开什么；这是及物用法。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "open",
                "text": "open",
                "tone": "verb",
                "role": "打开"
              },
              {
                "id": "door",
                "text": "the door.",
                "tone": "object",
                "role": "被打开的东西"
              }
            ]
          }
        ],
        "translation": "我打开门。"
      },
      {
        "caption": "换成门自己开了，把 door 放到主语位置；opens 后不接宾语，是不及物用法。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "door",
                "text": "The door",
                "tone": "subject",
                "role": "发生变化的门"
              },
              {
                "id": "open",
                "text": "opens.",
                "tone": "verb",
                "role": "开了"
              }
            ]
          }
        ],
        "translation": "门开了。"
      }
    ]
  },
  {
    "key": "lesson:verb-linking",
    "title": "让动词像桥一样，把主语和状态连起来",
    "steps": [
      {
        "caption": "is 把 She 和 happy 连起来；happy 说她怎么样，不是她做了什么。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "happy",
                "text": "happy.",
                "tone": "modifier",
                "role": "她的状态"
              }
            ]
          }
        ],
        "translation": "她很开心。",
        "connectors": [
          {
            "from": "be",
            "to": "happy",
            "label": "连接状态"
          }
        ]
      },
      {
        "caption": "把 is 换成 looks，就表示看起来开心；happy 仍然在说明 she。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "be",
                "text": "looks",
                "tone": "verb",
                "role": "看起来"
              },
              {
                "id": "happy",
                "text": "happy.",
                "tone": "modifier",
                "role": "她的状态"
              }
            ]
          }
        ],
        "translation": "她看起来很开心。",
        "connectors": [
          {
            "from": "happy",
            "to": "she",
            "label": "说明她"
          }
        ]
      },
      {
        "caption": "smells 也能作这样的桥：good 说明汤闻起来的感觉，所以用形容词。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "soup",
                "text": "The soup",
                "tone": "subject",
                "role": "汤"
              },
              {
                "id": "be",
                "text": "smells",
                "tone": "verb",
                "role": "闻起来"
              },
              {
                "id": "happy",
                "text": "good.",
                "tone": "modifier",
                "role": "汤的感觉"
              }
            ]
          }
        ],
        "translation": "汤闻起来很香。"
      },
      {
        "caption": "但 looks at 是看向一个东西的动作；不能只见到 look 就认定它连接状态。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "she",
                "text": "She",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "be",
                "text": "looks",
                "tone": "verb",
                "role": "看"
              },
              {
                "id": "at",
                "text": "at",
                "tone": "linker",
                "role": "动作的搭配"
              },
              {
                "id": "cat",
                "text": "the cat.",
                "tone": "object",
                "role": "看的对象"
              }
            ]
          }
        ],
        "translation": "她看着这只猫。"
      }
    ]
  },
  {
    "key": "lesson:adjective-functions",
    "title": "同一个颜色词，可以在三个位置说明包",
    "steps": [
      {
        "caption": "red 放在 bag 前，直接说明包的颜色；先看这个名词短语。",
        "lanes": [
          {
            "id": "sentence",
            "label": "名词短语",
            "tokens": [
              {
                "id": "a",
                "text": "a",
                "tone": "modifier",
                "role": "一个"
              },
              {
                "id": "red",
                "text": "red",
                "tone": "modifier",
                "role": "红色的"
              },
              {
                "id": "bag",
                "text": "bag",
                "tone": "object",
                "role": "东西"
              }
            ]
          }
        ],
        "translation": "一个红色的包"
      },
      {
        "caption": "把 red 移到 is 后面，句子直接说包是红色的，颜色仍属于 bag。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "bag",
                "text": "The bag",
                "tone": "subject",
                "role": "包"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "red",
                "text": "red",
                "tone": "modifier",
                "role": "红色的"
              }
            ]
          }
        ],
        "translation": "包是红色的。",
        "connectors": [
          {
            "from": "red",
            "to": "bag",
            "label": "说明包"
          }
        ]
      },
      {
        "caption": "再看动作带来的结果：red 放在 the bag 后，说明包被涂成的颜色。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "paint",
                "text": "paint",
                "tone": "verb",
                "role": "涂颜色"
              },
              {
                "id": "bag",
                "text": "the bag",
                "tone": "object",
                "role": "被涂的包"
              },
              {
                "id": "red",
                "text": "red",
                "tone": "modifier",
                "role": "红色的"
              }
            ]
          }
        ],
        "translation": "我把包涂成红色。",
        "connectors": [
          {
            "from": "red",
            "to": "bag",
            "label": "动作后的颜色"
          }
        ]
      }
    ]
  },
  {
    "key": "lesson:adverb-types",
    "title": "给同一个动作逐层补充信息",
    "steps": [
      {
        "caption": "He runs 只说他跑步，先找出要被补充说明的动作 runs。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "run",
                "text": "runs.",
                "tone": "verb",
                "role": "跑步"
              }
            ]
          }
        ],
        "translation": "他跑步。"
      },
      {
        "caption": "把 fast 加在后面说明跑得怎样，它补充的是速度。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "run",
                "text": "runs",
                "tone": "verb",
                "role": "跑步"
              },
              {
                "id": "fast",
                "text": "fast.",
                "tone": "modifier",
                "role": "怎么跑"
              }
            ]
          }
        ],
        "translation": "他跑得快。"
      },
      {
        "caption": "再把 often 放到动作前，说明多久做一次；它与 fast 回答的问题不同。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "often",
                "text": "often",
                "tone": "time",
                "role": "多久一次"
              },
              {
                "id": "run",
                "text": "runs",
                "tone": "verb",
                "role": "跑步"
              },
              {
                "id": "fast",
                "text": "fast.",
                "tone": "modifier",
                "role": "怎么跑"
              }
            ]
          }
        ],
        "translation": "他经常跑得很快。"
      },
      {
        "caption": "最后加 here 说明地点；多个副词可以为同一个动作补充不同信息。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "he",
                "text": "He",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "often",
                "text": "often",
                "tone": "time",
                "role": "多久一次"
              },
              {
                "id": "run",
                "text": "runs",
                "tone": "verb",
                "role": "跑步"
              },
              {
                "id": "fast",
                "text": "fast",
                "tone": "modifier",
                "role": "怎么跑"
              },
              {
                "id": "here",
                "text": "here.",
                "tone": "time",
                "role": "在哪里"
              }
            ]
          }
        ],
        "translation": "他经常在这里跑得很快。"
      }
    ]
  },
  {
    "key": "lesson:preposition-time",
    "title": "把几点、哪一天和月份分开放",
    "steps": [
      {
        "caption": "six、Monday 和 June 都表示时间，但一个是几点，一个是星期几，一个是月份。",
        "lanes": [
          {
            "id": "pool",
            "label": "时间词块",
            "tokens": [
              {
                "id": "six",
                "text": "six",
                "tone": "time",
                "role": "六点"
              },
              {
                "id": "monday",
                "text": "Monday",
                "tone": "time",
                "role": "星期一"
              },
              {
                "id": "june",
                "text": "June",
                "tone": "time",
                "role": "六月"
              }
            ]
          }
        ]
      },
      {
        "caption": "在这些常见说法里，几点配 at，星期几配 on，月份配 in。",
        "lanes": [
          {
            "id": "clock",
            "label": "几点",
            "tokens": [
              {
                "id": "at",
                "text": "at",
                "tone": "linker",
                "role": "时间小词"
              },
              {
                "id": "six",
                "text": "six",
                "tone": "time",
                "role": "六点"
              }
            ]
          },
          {
            "id": "day",
            "label": "哪一天",
            "tokens": [
              {
                "id": "on",
                "text": "on",
                "tone": "linker",
                "role": "时间小词"
              },
              {
                "id": "monday",
                "text": "Monday",
                "tone": "time",
                "role": "星期一"
              }
            ]
          },
          {
            "id": "month",
            "label": "哪个月",
            "tokens": [
              {
                "id": "in",
                "text": "in",
                "tone": "linker",
                "role": "时间小词"
              },
              {
                "id": "june",
                "text": "June",
                "tone": "time",
                "role": "六月"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 at six 这一组接到起床的动作后，说明起床时间；不要单独记一个 at。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "get-up",
                "text": "get up",
                "tone": "verb",
                "role": "起床"
              },
              {
                "id": "at",
                "text": "at",
                "tone": "linker",
                "role": "几点"
              },
              {
                "id": "six",
                "text": "six.",
                "tone": "time",
                "role": "六点"
              }
            ]
          }
        ],
        "translation": "我六点起床。"
      },
      {
        "caption": "另外两组也能直接放进日常句子里；这里的搭配要连着后面的时间一起学。",
        "lanes": [
          {
            "id": "day",
            "label": "星期的例句",
            "tokens": [
              {
                "id": "we",
                "text": "We",
                "tone": "subject",
                "role": "我们"
              },
              {
                "id": "play",
                "text": "play",
                "tone": "verb",
                "role": "玩"
              },
              {
                "id": "on",
                "text": "on",
                "tone": "linker",
                "role": "哪一天"
              },
              {
                "id": "monday",
                "text": "Monday.",
                "tone": "time",
                "role": "星期一"
              }
            ]
          },
          {
            "id": "month",
            "label": "月份的例句",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "swim",
                "text": "swim",
                "tone": "verb",
                "role": "游泳"
              },
              {
                "id": "in",
                "text": "in",
                "tone": "linker",
                "role": "哪个月"
              },
              {
                "id": "june",
                "text": "June.",
                "tone": "time",
                "role": "六月"
              }
            ]
          }
        ],
        "translation": "我们星期一玩。我六月游泳。"
      }
    ]
  },
  {
    "key": "lesson:preposition-place",
    "title": "把同一个词块移到三个位置格里",
    "steps": [
      {
        "caption": "把 cat 放进“盒子里面”这一格，对应 in；先用分类格看懂位置关系。",
        "lanes": [
          {
            "id": "inside",
            "label": "盒子里面 in",
            "tokens": [
              {
                "id": "cat",
                "text": "cat",
                "tone": "object",
                "role": "猫"
              }
            ]
          },
          {
            "id": "surface",
            "label": "盒子表面 on",
            "tokens": []
          },
          {
            "id": "under",
            "label": "盒子下面 under",
            "tokens": []
          }
        ]
      },
      {
        "caption": "把 cat 移到“盒子表面”一格，就改用 on；这里说的是接触盒子的表面。",
        "lanes": [
          {
            "id": "inside",
            "label": "盒子里面 in",
            "tokens": []
          },
          {
            "id": "surface",
            "label": "盒子表面 on",
            "tokens": [
              {
                "id": "cat",
                "text": "cat",
                "tone": "object",
                "role": "猫"
              }
            ]
          },
          {
            "id": "under",
            "label": "盒子下面 under",
            "tokens": []
          }
        ]
      },
      {
        "caption": "再把 cat 移到下面那格，介词就选 under；同一只猫的位置改变了。",
        "lanes": [
          {
            "id": "inside",
            "label": "盒子里面 in",
            "tokens": []
          },
          {
            "id": "surface",
            "label": "盒子表面 on",
            "tokens": []
          },
          {
            "id": "under",
            "label": "盒子下面 under",
            "tokens": [
              {
                "id": "cat",
                "text": "cat",
                "tone": "object",
                "role": "猫"
              }
            ]
          }
        ]
      },
      {
        "caption": "把选好的 under 和 the box 合起来，完整说出猫在盒子下面。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "cat",
                "text": "The cat",
                "tone": "subject",
                "role": "猫"
              },
              {
                "id": "be",
                "text": "is",
                "tone": "verb",
                "role": "连接状态"
              },
              {
                "id": "under",
                "text": "under",
                "tone": "linker",
                "role": "在下面"
              },
              {
                "id": "box",
                "text": "the box.",
                "tone": "object",
                "role": "参照物"
              }
            ]
          }
        ],
        "translation": "猫在盒子下面。"
      }
    ]
  },
  {
    "key": "lesson:conjunction-coordinate",
    "title": "连词两边要处在相近的层次",
    "steps": [
      {
        "caption": "先把 cats 和 dogs 用 and 接起来；左右都是事物名称，层次相同。",
        "lanes": [
          {
            "id": "sentence",
            "label": "并列词组",
            "tokens": [
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "动物名称"
              },
              {
                "id": "and",
                "text": "and",
                "tone": "linker",
                "role": "和"
              },
              {
                "id": "dogs",
                "text": "dogs",
                "tone": "object",
                "role": "动物名称"
              }
            ]
          }
        ],
        "translation": "猫和狗"
      },
      {
        "caption": "把这一组放在 like 后，喜欢的对象仍是两种动物，不是两句独立的话。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "like",
                "text": "like",
                "tone": "verb",
                "role": "喜欢"
              },
              {
                "id": "cats",
                "text": "cats",
                "tone": "object",
                "role": "对象一"
              },
              {
                "id": "and",
                "text": "and",
                "tone": "linker",
                "role": "和"
              },
              {
                "id": "dogs",
                "text": "dogs.",
                "tone": "object",
                "role": "对象二"
              }
            ]
          }
        ],
        "translation": "我喜欢猫和狗。"
      },
      {
        "caption": "and 也能连接两个动作；read 和 write 都由同一个 I 来做。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "read",
                "text": "read",
                "tone": "verb",
                "role": "动作一"
              },
              {
                "id": "and",
                "text": "and",
                "tone": "linker",
                "role": "并且"
              },
              {
                "id": "write",
                "text": "write.",
                "tone": "verb",
                "role": "动作二"
              }
            ]
          }
        ],
        "translation": "我读书，也写字。"
      },
      {
        "caption": "再看两句完整的话：Tom reads 和 Ann sings，各有自己的谁和动作。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "read",
                "text": "reads",
                "tone": "verb",
                "role": "做什么"
              },
              {
                "id": "and",
                "text": "and",
                "tone": "linker",
                "role": "并且"
              },
              {
                "id": "ann",
                "text": "Ann",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "write",
                "text": "sings.",
                "tone": "verb",
                "role": "做什么"
              }
            ]
          }
        ],
        "translation": "汤姆读书，安唱歌。"
      }
    ]
  },
  {
    "key": "lesson:conjunction-subordinate",
    "title": "用 because 把原因接到主要信息旁边",
    "steps": [
      {
        "caption": "先分开看：我待在家里，天在下雨；两句话都能独立表达一件事。",
        "lanes": [
          {
            "id": "main",
            "label": "主要事情",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "stay",
                "text": "stay",
                "tone": "verb",
                "role": "待着"
              },
              {
                "id": "home",
                "text": "home.",
                "tone": "object",
                "role": "在家"
              }
            ]
          },
          {
            "id": "cause",
            "label": "另一件事",
            "tokens": [
              {
                "id": "it",
                "text": "It",
                "tone": "subject",
                "role": "天气"
              },
              {
                "id": "rain",
                "text": "rains.",
                "tone": "verb",
                "role": "下雨"
              }
            ]
          }
        ],
        "translation": "我待在家里。天下雨。"
      },
      {
        "caption": "在下雨前面加 because，这一部分就专门解释原因，通常还要和主句一起说。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "stay",
                "text": "stay",
                "tone": "verb",
                "role": "待着"
              },
              {
                "id": "home",
                "text": "home.",
                "tone": "object",
                "role": "在家"
              }
            ]
          },
          {
            "id": "cause",
            "label": "补充原因的从句",
            "tokens": [
              {
                "id": "because",
                "text": "because",
                "tone": "linker",
                "role": "因为"
              },
              {
                "id": "it",
                "text": "it",
                "tone": "subject",
                "role": "天气"
              },
              {
                "id": "rain",
                "text": "rains",
                "tone": "verb",
                "role": "下雨"
              }
            ]
          }
        ]
      },
      {
        "caption": "把原因接到主句后，就说清为什么待在家里；because 不是另起一个并列句。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "stay",
                "text": "stay",
                "tone": "verb",
                "role": "待着"
              },
              {
                "id": "home",
                "text": "home",
                "tone": "object",
                "role": "在家"
              },
              {
                "id": "because",
                "text": "because",
                "tone": "linker",
                "role": "因为"
              },
              {
                "id": "it",
                "text": "it",
                "tone": "subject",
                "role": "天气"
              },
              {
                "id": "rain",
                "text": "rains.",
                "tone": "verb",
                "role": "下雨"
              }
            ]
          }
        ],
        "translation": "因为下雨，我待在家里。"
      },
      {
        "caption": "也可以把原因移到前面，再加逗号；主句和原因部分的关系没有改变。",
        "lanes": [
          {
            "id": "sentence",
            "label": "句子",
            "tokens": [
              {
                "id": "because",
                "text": "Because",
                "tone": "linker",
                "role": "因为"
              },
              {
                "id": "it",
                "text": "it",
                "tone": "subject",
                "role": "天气"
              },
              {
                "id": "rain",
                "text": "rains,",
                "tone": "verb",
                "role": "下雨"
              },
              {
                "id": "i",
                "text": "I",
                "tone": "subject",
                "role": "谁"
              },
              {
                "id": "stay",
                "text": "stay",
                "tone": "verb",
                "role": "待着"
              },
              {
                "id": "home",
                "text": "home.",
                "tone": "object",
                "role": "在家"
              }
            ]
          }
        ],
        "translation": "因为下雨，我待在家里。"
      }
    ]
  }
];
  (window.GRAMMAR_ANIMATION_DATA ||= []).push(...lessons);
})();
