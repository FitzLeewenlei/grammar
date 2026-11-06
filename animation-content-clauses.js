/* Original step-by-step clause and conditional animations for beginners. */
(() => {
  const lessons = [
  {
    "key": "topic:adverbial",
    "title": "用一小句说明什么时候吃饭",
    "steps": [
      {
        "caption": "先看两件事：“我吃饭”和“我饿了”，它们还没有连起来。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "main",
                "text": "I eat",
                "role": "主要的事",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "另一件事",
            "tokens": [
              {
                "id": "detail",
                "text": "I am hungry",
                "role": "说明时间",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "给“我饿了”加上 when，就变成说明吃饭时间的词块。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "main",
                "text": "I eat",
                "role": "主要的事",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明时间词块",
            "tokens": [
              {
                "id": "link",
                "text": "when",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "I am hungry",
                "role": "说明时间",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把说明时间的词块接到吃饭后面，一句话就说清什么时候吃。",
        "lanes": [
          {
            "id": "sentence",
            "label": "合成一句话",
            "tokens": [
              {
                "id": "main",
                "text": "I eat",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "when",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "I am hungry",
                "role": "说明时间",
                "tone": "modifier"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "我饿的时候就吃饭。"
      },
      {
        "caption": "也能把 when 这部分整体移到前面；两件事的关系不变。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明放到前面",
            "tokens": [
              {
                "id": "link",
                "text": "When",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "I am hungry",
                "role": "说明时间",
                "tone": "modifier"
              },
              {
                "id": "comma",
                "text": ",",
                "role": "",
                "tone": "neutral"
              },
              {
                "id": "main",
                "text": "I eat",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "我饿的时候就吃饭。"
      }
    ]
  },
  {
    "key": "topic:relative",
    "title": "把重复的人换成 who",
    "steps": [
      {
        "caption": "先看两句话，前后都在说同一个人；重复的名字可以合并。",
        "lanes": [
          {
            "id": "main",
            "label": "第一句话",
            "tokens": [
              {
                "id": "head",
                "text": "The boy",
                "role": "要说明的人",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is kind",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "第二句话",
            "tokens": [
              {
                "id": "repeat",
                "text": "The boy",
                "role": "重复的人",
                "tone": "subject"
              },
              {
                "id": "action",
                "text": "has a dog",
                "role": "补充说明",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 who 代替第二句里重复的人，它还负责连接后面的说明。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "head",
                "text": "The boy",
                "role": "要说明的人",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is kind",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明词块（待组合）",
            "tokens": [
              {
                "id": "repeat",
                "text": "who",
                "role": "代替重复的人",
                "tone": "linker"
              },
              {
                "id": "action",
                "text": "has a dog",
                "role": "补充说明",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把说明整体放到这个人后面，先说明是哪一个人，再说主要信息。",
        "lanes": [
          {
            "id": "sentence",
            "label": "合并后的句子",
            "tokens": [
              {
                "id": "head",
                "text": "The boy",
                "role": "要说明的人",
                "tone": "subject"
              },
              {
                "id": "repeat",
                "text": "who",
                "role": "连接说明",
                "tone": "linker"
              },
              {
                "id": "action",
                "text": "has a dog",
                "role": "说明是哪一个",
                "tone": "modifier"
              },
              {
                "id": "pred",
                "text": "is kind",
                "role": "主要信息",
                "tone": "verb"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "那个养狗的男孩很友善。"
      },
      {
        "caption": "主要信息不变；换一个说明，就能指出另一个符合描述的人。",
        "lanes": [
          {
            "id": "sentence",
            "label": "换一个说明",
            "tokens": [
              {
                "id": "head",
                "text": "The boy",
                "role": "要说明的人",
                "tone": "subject"
              },
              {
                "id": "repeat",
                "text": "who",
                "role": "连接说明",
                "tone": "linker"
              },
              {
                "id": "action",
                "text": "reads",
                "role": "说明是哪一个",
                "tone": "modifier"
              },
              {
                "id": "pred",
                "text": "is kind",
                "role": "主要信息",
                "tone": "verb"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "那个读书的男孩很友善。"
      }
    ]
  },
  {
    "key": "topic:nominal",
    "title": "把“这件事”换成完整内容",
    "steps": [
      {
        "caption": "先看“我知道这件事”，this 只是一个位置，还没说内容。",
        "lanes": [
          {
            "id": "sentence",
            "label": "先留一个位置",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "know",
                "text": "know",
                "role": "知道",
                "tone": "verb"
              },
              {
                "id": "slot",
                "text": "this",
                "role": "知道的事",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "这件事的内容",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "汤姆在这里",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在内容前加 that，把整件事变成能接到 know 后面的词块。",
        "lanes": [
          {
            "id": "sentence",
            "label": "主要部分",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "know",
                "text": "know",
                "role": "知道",
                "tone": "verb"
              },
              {
                "id": "slot",
                "text": "this",
                "role": "等待替换",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "内容词块（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "that",
                "role": "连接内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "具体内容",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "拿走 this，把整块 that Tom is here 放到它的位置。",
        "lanes": [
          {
            "id": "sentence",
            "label": "知道什么",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "know",
                "text": "know",
                "role": "知道",
                "tone": "verb"
              },
              {
                "id": "that",
                "text": "that",
                "role": "连接内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "知道的事",
                "tone": "object"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "我知道汤姆在这里。"
      },
      {
        "caption": "前面换成“我相信”，后面仍是一整件事，仍占内容的位置。",
        "lanes": [
          {
            "id": "sentence",
            "label": "相信什么",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "know",
                "text": "believe",
                "role": "相信",
                "tone": "verb"
              },
              {
                "id": "that",
                "text": "that",
                "role": "连接内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "相信的事",
                "tone": "object"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "我相信汤姆在这里。"
      }
    ]
  },
  {
    "key": "topic:conditionals",
    "title": "把“假如”与“就会”连起来",
    "steps": [
      {
        "caption": "先看现在的事实：我没有时间，暂时不能去帮忙。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I have no time.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          }
        ]
      },
      {
        "caption": "先设想“我有时间”，这只是待组合的假设，并没有改变事实。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I have no time.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "condition",
            "label": "假设词块（待组合）",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "cond",
                "text": "I have time",
                "role": "设想的情况",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "说与现在不同的假设，把 have 换成 had；结果用 would help。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I have no time.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "condition",
            "label": "假设词块（待组合）",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "cond",
                "text": "I had time",
                "role": "与现在不同",
                "tone": "modifier",
                "status": "focus"
              }
            ]
          },
          {
            "id": "result",
            "label": "假设中的结果",
            "tokens": [
              {
                "id": "result",
                "text": "I would help",
                "role": "我就会帮忙",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "把假设和结果连起来。这里 had 表示与现在不同，不是在叙述过去。",
        "lanes": [
          {
            "id": "sentence",
            "label": "现在的假设",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "cond",
                "text": "I had time",
                "role": "与现在不同",
                "tone": "modifier"
              },
              {
                "id": "comma",
                "text": ",",
                "role": "",
                "tone": "neutral"
              },
              {
                "id": "result",
                "text": "I would help",
                "role": "假设中的结果",
                "tone": "verb"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "如果我现在有时间，我就会帮忙。"
      }
    ]
  },
  {
    "key": "lesson:real-if",
    "title": "用 if 给将来的安排加条件",
    "steps": [
      {
        "caption": "先决定一件将来的事：我会待在家；再看可能出现的下雨。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "main",
                "text": "I will stay home",
                "role": "主要的事",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "另一件事",
            "tokens": [
              {
                "id": "detail",
                "text": "It rains",
                "role": "说明条件",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "给下雨加上 if，表示这是条件，并没有说它一定会发生。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "main",
                "text": "I will stay home",
                "role": "主要的事",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明条件词块",
            "tokens": [
              {
                "id": "link",
                "text": "if",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "it rains",
                "role": "说明条件",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把条件接到安排后面；这里谈将来，if 后用 rains。",
        "lanes": [
          {
            "id": "sentence",
            "label": "合成一句话",
            "tokens": [
              {
                "id": "main",
                "text": "I will stay home",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "if",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "it rains",
                "role": "说明条件",
                "tone": "modifier"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "如果下雨，我就待在家。"
      },
      {
        "caption": "把条件整体放在前面也可以，逗号后面仍是原来的安排。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明放到前面",
            "tokens": [
              {
                "id": "link",
                "text": "If",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "it rains",
                "role": "说明条件",
                "tone": "modifier"
              },
              {
                "id": "comma",
                "text": ",",
                "role": "",
                "tone": "neutral"
              },
              {
                "id": "main",
                "text": "I will stay home",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "如果下雨，我就待在家。"
      }
    ]
  },
  {
    "key": "lesson:unreal",
    "title": "对照事实，看 if 和 wish 两种说法",
    "steps": [
      {
        "caption": "先看现在的事实：我没有时间，下面两种说法都不会改变事实。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I have no time.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 wish 说“但愿有时间”；have 变成 had，表示愿望与现在不同。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I have no time.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "wish",
            "label": "与现在不同的愿望",
            "tokens": [
              {
                "id": "wish",
                "text": "I wish",
                "role": "但愿",
                "tone": "subject"
              },
              {
                "id": "cond",
                "text": "I had time.",
                "role": "与现在不同",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "换成 if 就能继续说假设的结果；would help 说“就会帮忙”。",
        "lanes": [
          {
            "id": "condition",
            "label": "假设词块（待组合）",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "cond",
                "text": "I had time",
                "role": "与现在不同",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "result",
            "label": "假设中的结果",
            "tokens": [
              {
                "id": "result",
                "text": "I would help.",
                "role": "就会帮忙",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "if 把假设连到结果；wish 直接说愿望，两句都在谈现在。",
        "lanes": [
          {
            "id": "condition",
            "label": "假设与结果",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "cond",
                "text": "I had time,",
                "role": "与现在不同",
                "tone": "modifier"
              },
              {
                "id": "result",
                "text": "I would help.",
                "role": "就会帮忙",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "wish",
            "label": "愿望",
            "tokens": [
              {
                "id": "wish",
                "text": "I wish",
                "role": "但愿",
                "tone": "subject"
              },
              {
                "id": "wishcond",
                "text": "I had time.",
                "role": "与现在不同",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "如果现在有时间，我就会帮忙；但愿我现在有时间。"
      }
    ]
  },
  {
    "key": "lesson:relative-pronouns",
    "title": "人用 who，物可以用 that 或 which",
    "steps": [
      {
        "caption": "两句话重复说 the boy。先找到重复的人，准备把它们合在一起。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "head",
                "text": "The boy",
                "role": "这个男孩",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is Tom",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "补充信息",
            "tokens": [
              {
                "id": "repeat",
                "text": "The boy",
                "role": "重复的人",
                "tone": "subject"
              },
              {
                "id": "act",
                "text": "reads",
                "role": "补充动作",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把第二句重复的人换成 who，who 也会负责连接说明。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "head",
                "text": "The boy",
                "role": "这个男孩",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is Tom",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明词块（待组合）",
            "tokens": [
              {
                "id": "repeat",
                "text": "who",
                "role": "代替男孩",
                "tone": "linker"
              },
              {
                "id": "act",
                "text": "reads",
                "role": "谁在读书",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 who reads 放到 boy 后面，指出读书的那个男孩。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明一个人",
            "tokens": [
              {
                "id": "head",
                "text": "The boy",
                "role": "被说明的人",
                "tone": "subject"
              },
              {
                "id": "repeat",
                "text": "who",
                "role": "连接说明",
                "tone": "linker"
              },
              {
                "id": "act",
                "text": "reads",
                "role": "说明哪一个",
                "tone": "modifier"
              },
              {
                "id": "pred",
                "text": "is Tom.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "那个读书的男孩是汤姆。"
      },
      {
        "caption": "如果说的是书这样的物，常用 that；I read 说明我读的是哪一本。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明一个物",
            "tokens": [
              {
                "id": "head",
                "text": "The book",
                "role": "被说明的物",
                "tone": "subject"
              },
              {
                "id": "repeat",
                "text": "that",
                "role": "代替书",
                "tone": "linker"
              },
              {
                "id": "act",
                "text": "I read",
                "role": "说明哪一本",
                "tone": "modifier"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我读的那本书很好。"
      },
      {
        "caption": "这里的 that 也能换成 which，其他部分不用跟着改变。",
        "lanes": [
          {
            "id": "sentence",
            "label": "另一种连接词",
            "tokens": [
              {
                "id": "head",
                "text": "The book",
                "role": "被说明的物",
                "tone": "subject"
              },
              {
                "id": "repeat",
                "text": "which",
                "role": "这里也能代替书",
                "tone": "linker"
              },
              {
                "id": "act",
                "text": "I read",
                "role": "说明哪一本",
                "tone": "modifier"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我读的那本书很好。"
      }
    ]
  },
  {
    "key": "lesson:relative-adverbs",
    "title": "看 where 怎样代替 in the house",
    "steps": [
      {
        "caption": "先看两句话，第二句话的 in the house 说我住在哪里。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "head",
                "text": "The house",
                "role": "这所房子",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is old.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "地点说明",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "live",
                "text": "live",
                "role": "住",
                "tone": "verb"
              },
              {
                "id": "place",
                "text": "in the house.",
                "role": "住的地点",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 where 代替“在这所房子里”，它已经带着地点的意思。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "head",
                "text": "The house",
                "role": "这所房子",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is old.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明词块（待组合）",
            "tokens": [
              {
                "id": "place",
                "text": "where",
                "role": "在这个地方",
                "tone": "linker"
              },
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "live",
                "text": "live",
                "role": "住",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 where I live 放到 house 后面，不用再重复 in the house。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明哪所房子",
            "tokens": [
              {
                "id": "head",
                "text": "The house",
                "role": "被说明的房子",
                "tone": "subject"
              },
              {
                "id": "place",
                "text": "where",
                "role": "连接地点说明",
                "tone": "linker"
              },
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "live",
                "text": "live",
                "role": "住",
                "tone": "verb"
              },
              {
                "id": "pred",
                "text": "is old.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我住的那所房子很旧。"
      },
      {
        "caption": "这里的 where 可以展开成 in which，地点关系就看得更清楚。",
        "lanes": [
          {
            "id": "sentence",
            "label": "展开地点关系",
            "tokens": [
              {
                "id": "head",
                "text": "The house",
                "role": "被说明的房子",
                "tone": "subject"
              },
              {
                "id": "place",
                "text": "in which",
                "role": "在这所房子里",
                "tone": "linker"
              },
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "live",
                "text": "live",
                "role": "住",
                "tone": "verb"
              },
              {
                "id": "pred",
                "text": "is old.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我住的那所房子很旧。"
      }
    ]
  },
  {
    "key": "lesson:relative-omit",
    "title": "只省掉这里的宾语关系词",
    "steps": [
      {
        "caption": "先看完整写法：that 指这本书；I 才是做 read 动作的人。",
        "lanes": [
          {
            "id": "sentence",
            "label": "完整写法",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "role": "被说明的书",
                "tone": "subject"
              },
              {
                "id": "that",
                "text": "that",
                "role": "read 指向的东西",
                "tone": "linker"
              },
              {
                "id": "read",
                "text": "I read",
                "role": "我读",
                "tone": "modifier"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我读的那本书很好。"
      },
      {
        "caption": "把说明取出来看，that 不是做动作的人，它指 read 的对象。",
        "lanes": [
          {
            "id": "main",
            "label": "主句框架（待组合）",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "role": "被说明的书",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明词块（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "that",
                "role": "read 指向的东西",
                "tone": "linker",
                "status": "focus"
              },
              {
                "id": "read",
                "text": "I read",
                "role": "I 是做动作的人",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "这里可以拿走 that，留下 I read 这个说明词块。",
        "lanes": [
          {
            "id": "main",
            "label": "主句框架（待组合）",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "role": "被说明的书",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明词块（待组合）",
            "tokens": [
              {
                "id": "read",
                "text": "I read",
                "role": "省掉宾语关系词",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把说明放回原位。这里只省宾语关系词，不能照搬到 who 作主语时。",
        "lanes": [
          {
            "id": "sentence",
            "label": "省略后的正确句子",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "role": "被说明的书",
                "tone": "subject"
              },
              {
                "id": "read",
                "text": "I read",
                "role": "说明哪一本",
                "tone": "modifier"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我读的那本书很好。"
      }
    ]
  },
  {
    "key": "lesson:relative-extra",
    "title": "用两边的逗号框出补充说明",
    "steps": [
      {
        "caption": "假设大家已经知道是哪位朋友，先看一句完整的主要信息。",
        "lanes": [
          {
            "id": "main",
            "label": "已经知道是谁",
            "tokens": [
              {
                "id": "head",
                "text": "My friend",
                "role": "我的朋友",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "likes milk.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "额外知道的事",
            "tokens": [
              {
                "id": "repeat",
                "text": "My friend",
                "role": "同一个人",
                "tone": "subject"
              },
              {
                "id": "age",
                "text": "is ten.",
                "role": "十岁",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把重复的人换成 who，准备把年龄作为额外说明插进去。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "head",
                "text": "My friend",
                "role": "已知道是谁",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "likes milk.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "补充词块（待组合）",
            "tokens": [
              {
                "id": "repeat",
                "text": "who",
                "role": "代替朋友",
                "tone": "linker"
              },
              {
                "id": "age",
                "text": "is ten",
                "role": "补充年龄",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把年龄插进去，两边各放一个逗号，表示这只是补充。",
        "lanes": [
          {
            "id": "sentence",
            "label": "带补充说明",
            "tokens": [
              {
                "id": "head",
                "text": "My friend",
                "role": "已知道是谁",
                "tone": "subject"
              },
              {
                "id": "comma1",
                "text": ",",
                "role": "",
                "tone": "neutral"
              },
              {
                "id": "repeat",
                "text": "who",
                "role": "连接补充",
                "tone": "linker"
              },
              {
                "id": "age",
                "text": "is ten",
                "role": "补充年龄",
                "tone": "modifier"
              },
              {
                "id": "comma2",
                "text": ",",
                "role": "",
                "tone": "neutral"
              },
              {
                "id": "pred",
                "text": "likes milk.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我朋友喜欢牛奶；他十岁。"
      },
      {
        "caption": "把中间的补充拿走，主要信息仍完整；补充没有用来挑选哪位朋友。",
        "lanes": [
          {
            "id": "sentence",
            "label": "留下主要信息",
            "tokens": [
              {
                "id": "head",
                "text": "My friend",
                "role": "已知道是谁",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "likes milk.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "拿开的补充词块",
            "tokens": [
              {
                "id": "repeat",
                "text": "who",
                "role": "连接补充",
                "tone": "linker"
              },
              {
                "id": "age",
                "text": "is ten",
                "role": "补充年龄",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "我朋友喜欢牛奶。"
      }
    ]
  },
  {
    "key": "lesson:objects",
    "title": "外面在提问，里面仍用 Tom is",
    "steps": [
      {
        "caption": "直接问汤姆在哪里时，is 在 Tom 前面；这是一句独立问句。",
        "lanes": [
          {
            "id": "question",
            "label": "直接提问",
            "tokens": [
              {
                "id": "where",
                "text": "Where",
                "role": "问哪里",
                "tone": "linker"
              },
              {
                "id": "be",
                "text": "is",
                "role": "放到前面的 is",
                "tone": "verb"
              },
              {
                "id": "tom",
                "text": "Tom?",
                "role": "谁",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "main",
            "label": "准备接内容",
            "tokens": [
              {
                "id": "know",
                "text": "I know",
                "role": "我知道",
                "tone": "subject"
              }
            ]
          }
        ]
      },
      {
        "caption": "接到 I know 后面，不再直接提问；先把 is 移回 Tom 后面。",
        "lanes": [
          {
            "id": "question",
            "label": "内容词块（待组合）",
            "tokens": [
              {
                "id": "where",
                "text": "where",
                "role": "引出内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "回到谁的后面",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "know",
                "text": "I know",
                "role": "我知道",
                "tone": "subject"
              }
            ]
          }
        ]
      },
      {
        "caption": "把整块内容接到 know 后，句子就成了“我知道他在哪里”。",
        "lanes": [
          {
            "id": "sentence",
            "label": "知道什么",
            "tokens": [
              {
                "id": "know",
                "text": "I know",
                "role": "主要部分",
                "tone": "subject"
              },
              {
                "id": "where",
                "text": "where",
                "role": "引出内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is.",
                "role": "在",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我知道汤姆在哪里。"
      },
      {
        "caption": "外面改成 Do you know 提问，里面的 Tom is 仍不用倒过来。",
        "lanes": [
          {
            "id": "sentence",
            "label": "问别人知道什么",
            "tokens": [
              {
                "id": "know",
                "text": "Do you know",
                "role": "外面在提问",
                "tone": "subject"
              },
              {
                "id": "where",
                "text": "where",
                "role": "引出内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "里面的谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is?",
                "role": "仍在 Tom 后面",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "你知道汤姆在哪里吗？"
      }
    ]
  },
  {
    "key": "lesson:subject-clause",
    "title": "让一整件事放到“谁让我高兴”的位置",
    "steps": [
      {
        "caption": "Something 表示“某件事”；先找出到底是什么事让我高兴。",
        "lanes": [
          {
            "id": "main",
            "label": "先留一个位置",
            "tokens": [
              {
                "id": "slot",
                "text": "Something",
                "role": "让我高兴的事",
                "tone": "subject"
              },
              {
                "id": "happy",
                "text": "makes me happy.",
                "role": "让我高兴",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "那件事的内容",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "汤姆在这里",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在内容前面加 that，把“汤姆在这里”准备成一个整体。",
        "lanes": [
          {
            "id": "main",
            "label": "等待替换",
            "tokens": [
              {
                "id": "slot",
                "text": "Something",
                "role": "待替换的位置",
                "tone": "subject"
              },
              {
                "id": "happy",
                "text": "makes me happy.",
                "role": "让我高兴",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "整件事（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "That",
                "role": "把内容连成整体",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "具体内容",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "用整件事替换 Something；这一整块都在说“什么让我高兴”。",
        "lanes": [
          {
            "id": "sentence",
            "label": "内容放在前面",
            "tokens": [
              {
                "id": "that",
                "text": "That",
                "role": "引出整件事",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "让我高兴的事",
                "tone": "subject"
              },
              {
                "id": "happy",
                "text": "makes me happy.",
                "role": "让我高兴",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "汤姆在这里这件事让我高兴。"
      },
      {
        "caption": "内容较长时，也可先用 It 占位，把真正的内容放到句尾。",
        "lanes": [
          {
            "id": "sentence",
            "label": "先用 It 占位",
            "tokens": [
              {
                "id": "slot",
                "text": "It",
                "role": "先占一个位置",
                "tone": "subject"
              },
              {
                "id": "happy",
                "text": "makes me happy",
                "role": "让我高兴",
                "tone": "verb"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出真正内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here.",
                "role": "真正的内容",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "汤姆在这里让我高兴。"
      }
    ]
  },
  {
    "key": "lesson:predicative",
    "title": "把愿望的完整内容接到 is 后面",
    "steps": [
      {
        "caption": "先说“我的愿望是这个”，再准备说清 this 指的内容。",
        "lanes": [
          {
            "id": "main",
            "label": "先留一个位置",
            "tokens": [
              {
                "id": "head",
                "text": "My hope",
                "role": "我的愿望",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "连接内容",
                "tone": "verb"
              },
              {
                "id": "slot",
                "text": "this.",
                "role": "待说明的内容",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "愿望的内容",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom will come",
                "role": "汤姆会来",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在愿望前加上 that，准备把整个内容放到 is 后面。",
        "lanes": [
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "head",
                "text": "My hope",
                "role": "我的愿望",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "连接内容",
                "tone": "verb"
              },
              {
                "id": "slot",
                "text": "this.",
                "role": "等待替换",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "内容词块（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "that",
                "role": "引出内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom will come",
                "role": "具体愿望",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "拿走 this，把整块 that Tom will come 接上，愿望就说清了。",
        "lanes": [
          {
            "id": "sentence",
            "label": "愿望是什么",
            "tokens": [
              {
                "id": "head",
                "text": "My hope",
                "role": "我的愿望",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "连接内容",
                "tone": "verb"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom will come.",
                "role": "具体愿望",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我的愿望是汤姆会来。"
      },
      {
        "caption": "is 后也能说明事实；换了前面的内容，后面就跟着说明那件事。",
        "lanes": [
          {
            "id": "sentence",
            "label": "换成说明事实",
            "tokens": [
              {
                "id": "head",
                "text": "The fact",
                "role": "事实",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "连接内容",
                "tone": "verb"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here.",
                "role": "具体事实",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "事实是汤姆在这里。"
      }
    ]
  },
  {
    "key": "lesson:appositive",
    "title": "紧跟 news，说清消息的内容",
    "steps": [
      {
        "caption": "先说听到一条消息，再看消息具体说的是汤姆赢了。",
        "lanes": [
          {
            "id": "main",
            "label": "先说有条消息",
            "tokens": [
              {
                "id": "hear",
                "text": "I heard",
                "role": "我听到了",
                "tone": "subject"
              },
              {
                "id": "news",
                "text": "the news.",
                "role": "这条消息",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "消息的内容",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom won",
                "role": "汤姆赢了",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在内容前加 that，准备把消息内容紧跟在 news 后面。",
        "lanes": [
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "hear",
                "text": "I heard",
                "role": "我听到了",
                "tone": "subject"
              },
              {
                "id": "news",
                "text": "the news",
                "role": "这条消息",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "内容词块（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "that",
                "role": "引出消息内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom won",
                "role": "完整的内容",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "把内容贴到 news 后；Tom won 自己已说清谁做了什么。",
        "lanes": [
          {
            "id": "sentence",
            "label": "消息说了什么",
            "tokens": [
              {
                "id": "hear",
                "text": "I heard",
                "role": "我听到了",
                "tone": "subject"
              },
              {
                "id": "news",
                "text": "the news",
                "role": "这条消息",
                "tone": "object"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom won.",
                "role": "消息的内容",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我听到了汤姆赢了的消息。"
      },
      {
        "caption": "对比下句：I heard 缺听到的对象，说明的是哪条消息，不是内容。",
        "lanes": [
          {
            "id": "sentence",
            "label": "上句：说消息内容",
            "tokens": [
              {
                "id": "hear",
                "text": "I heard",
                "role": "我听到了",
                "tone": "subject"
              },
              {
                "id": "news",
                "text": "the news",
                "role": "这条消息",
                "tone": "object"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom won.",
                "role": "消息内容",
                "tone": "object"
              }
            ]
          },
          {
            "id": "compare",
            "label": "下句：挑哪条消息",
            "tokens": [
              {
                "id": "news2",
                "text": "The news",
                "role": "被说明的消息",
                "tone": "subject"
              },
              {
                "id": "that2",
                "text": "that",
                "role": "heard 指向的消息",
                "tone": "linker"
              },
              {
                "id": "heard2",
                "text": "I heard",
                "role": "我听到的",
                "tone": "modifier"
              },
              {
                "id": "good2",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "上句：我听到了汤姆赢了的消息。下句：我听到的那条消息很好。"
      }
    ]
  },
  {
    "key": "lesson:future-time",
    "title": "先分清 if 在说条件，还是“不知道的内容”",
    "steps": [
      {
        "caption": "这里先说将来的安排，再留一个位置说明什么情况下这样做。",
        "lanes": [
          {
            "id": "main",
            "label": "将来的安排",
            "tokens": [
              {
                "id": "result",
                "text": "I will stay home.",
                "role": "将来的安排",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "condition",
            "label": "说明条件的词块",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "如果",
                "tone": "linker"
              },
              {
                "id": "rain",
                "text": "it rains",
                "role": "下雨",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把条件和安排放到一起，谈将来也用 rains，不再加 will。",
        "lanes": [
          {
            "id": "sentence",
            "label": "if 说明条件",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "如果",
                "tone": "linker"
              },
              {
                "id": "rain",
                "text": "it rains,",
                "role": "可能出现的条件",
                "tone": "modifier"
              },
              {
                "id": "result",
                "text": "I will stay home.",
                "role": "将来的安排",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "如果下雨，我就待在家。"
      },
      {
        "caption": "换成“不知道是否下雨”，if 后是在说不知道的内容。",
        "lanes": [
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "know",
                "text": "I do not know",
                "role": "不知道",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "content",
            "label": "不知道的内容词块",
            "tokens": [
              {
                "id": "if",
                "text": "if",
                "role": "是否",
                "tone": "linker"
              },
              {
                "id": "rain",
                "text": "it will rain",
                "role": "未来会下雨",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "把内容接到 know 后，这里可以有 will，不能只见 if 就删掉。",
        "lanes": [
          {
            "id": "sentence",
            "label": "if 说明未知内容",
            "tokens": [
              {
                "id": "know",
                "text": "I do not know",
                "role": "不知道",
                "tone": "subject"
              },
              {
                "id": "if",
                "text": "if",
                "role": "是否",
                "tone": "linker"
              },
              {
                "id": "rain",
                "text": "it will rain.",
                "role": "不知道的内容",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我不知道会不会下雨。"
      }
    ]
  },
  {
    "key": "lesson:time-connectors",
    "title": "before 和 after 会把顺序反过来",
    "steps": [
      {
        "caption": "先看吃饭与汤姆来这两件事；时间线暂时只显示吃饭。",
        "lanes": [
          {
            "id": "main",
            "label": "吃饭这件事",
            "tokens": [
              {
                "id": "eat",
                "text": "I ate",
                "role": "我吃了饭",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "另一件事",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom came",
                "role": "汤姆来了",
                "tone": "modifier"
              }
            ]
          }
        ],
        "timeline": {
          "label": "两件事的先后",
          "now": 85,
          "events": [
            {
              "id": "eat",
              "label": "吃饭",
              "start": 25,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "用 before 表示“在汤姆来之前”；吃饭在前，汤姆来在后。",
        "lanes": [
          {
            "id": "sentence",
            "label": "吃饭在前",
            "tokens": [
              {
                "id": "eat",
                "text": "I ate",
                "role": "先做的事",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "before",
                "role": "在……之前",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom came.",
                "role": "后发生的事",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "汤姆来之前，我吃了饭。",
        "timeline": {
          "label": "吃饭在前",
          "now": 85,
          "events": [
            {
              "id": "eat",
              "label": "吃饭",
              "start": 25,
              "kind": "point"
            },
            {
              "id": "tom",
              "label": "汤姆来",
              "start": 60,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "把 before 换成 after，先后也要反过来：汤姆来了才吃饭。",
        "lanes": [
          {
            "id": "sentence",
            "label": "吃饭在后",
            "tokens": [
              {
                "id": "eat",
                "text": "I ate",
                "role": "后做的事",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "after",
                "role": "在……之后",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom came.",
                "role": "先发生的事",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "汤姆来之后，我吃了饭。",
        "timeline": {
          "label": "汤姆来在前",
          "now": 85,
          "events": [
            {
              "id": "eat",
              "label": "吃饭",
              "start": 65,
              "kind": "point"
            },
            {
              "id": "tom",
              "label": "汤姆来",
              "start": 30,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "把 after 这部分整体放到前面，事情先后仍与上一步相同。",
        "lanes": [
          {
            "id": "sentence",
            "label": "先说时间说明",
            "tokens": [
              {
                "id": "link",
                "text": "After",
                "role": "在……之后",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom came,",
                "role": "先发生的事",
                "tone": "modifier"
              },
              {
                "id": "eat",
                "text": "I ate.",
                "role": "后做的事",
                "tone": "subject"
              }
            ]
          }
        ],
        "translation": "汤姆来之后，我吃了饭。",
        "timeline": {
          "label": "顺序不变",
          "now": 85,
          "events": [
            {
              "id": "eat",
              "label": "吃饭",
              "start": 65,
              "kind": "point"
            },
            {
              "id": "tom",
              "label": "汤姆来",
              "start": 30,
              "kind": "point"
            }
          ]
        }
      }
    ]
  },
  {
    "key": "lesson:contrast",
    "title": "but 与 although 换一种连接方法",
    "steps": [
      {
        "caption": "天气很冷，结果我还是出门了；两件事之间有一点出乎预料。",
        "lanes": [
          {
            "id": "weather",
            "label": "天气",
            "tokens": [
              {
                "id": "cold",
                "text": "It was cold.",
                "role": "天气很冷",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "main",
            "label": "我做的事",
            "tokens": [
              {
                "id": "out",
                "text": "I went out.",
                "role": "我出门了",
                "tone": "subject"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 but 连接两件事，先说冷，再转到“但我出门了”。",
        "lanes": [
          {
            "id": "sentence",
            "label": "用 but 转折",
            "tokens": [
              {
                "id": "cold",
                "text": "It was cold,",
                "role": "天气很冷",
                "tone": "modifier"
              },
              {
                "id": "link",
                "text": "but",
                "role": "但是",
                "tone": "linker"
              },
              {
                "id": "out",
                "text": "I went out.",
                "role": "实际做的事",
                "tone": "subject"
              }
            ]
          }
        ],
        "translation": "天气很冷，但我出门了。"
      },
      {
        "caption": "换成 although 时，它跟着冷这件事走，这里就不再留 but。",
        "lanes": [
          {
            "id": "sentence",
            "label": "用 although 让一步",
            "tokens": [
              {
                "id": "link",
                "text": "Although",
                "role": "虽然",
                "tone": "linker"
              },
              {
                "id": "cold",
                "text": "it was cold,",
                "role": "虽然有这件事",
                "tone": "modifier"
              },
              {
                "id": "out",
                "text": "I went out.",
                "role": "实际仍做的事",
                "tone": "subject"
              }
            ]
          }
        ],
        "translation": "虽然天气很冷，我还是出门了。"
      },
      {
        "caption": "把 although 这部分放到后面，仍然表示冷没有阻止我出门。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明放到后面",
            "tokens": [
              {
                "id": "out",
                "text": "I went out",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "although",
                "role": "虽然",
                "tone": "linker"
              },
              {
                "id": "cold",
                "text": "it was cold.",
                "role": "没有阻止这件事",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "虽然天气很冷，我还是出门了。"
      }
    ]
  },
  {
    "key": "lesson:purpose-result",
    "title": "想达到的目的，与实际出现的结果",
    "steps": [
      {
        "caption": "先看跑步这件事，再看我想追上汤姆这个目的。",
        "lanes": [
          {
            "id": "main",
            "label": "我做的事",
            "tokens": [
              {
                "id": "run",
                "text": "I ran.",
                "role": "我跑了",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "goal",
            "label": "想达到的事",
            "tokens": [
              {
                "id": "catch",
                "text": "I wanted to catch Tom.",
                "role": "我想追上汤姆",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 so that 说目的；could catch 表示当时想能够追上他。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说为什么跑",
            "tokens": [
              {
                "id": "run",
                "text": "I ran",
                "role": "我跑了",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "so that",
                "role": "为了",
                "tone": "linker"
              },
              {
                "id": "catch",
                "text": "I could catch Tom.",
                "role": "想达到的目的",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我跑步是为了追上汤姆。"
      },
      {
        "caption": "说实际结果时，把 fast 放到 so 后面，再用 that 引出追上的结果。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说跑得快的结果",
            "tokens": [
              {
                "id": "run",
                "text": "I ran",
                "role": "我跑了",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "so fast that",
                "role": "快到这样的程度",
                "tone": "linker"
              },
              {
                "id": "catch",
                "text": "I caught Tom.",
                "role": "实际发生的结果",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我跑得很快，结果追上了汤姆。"
      },
      {
        "caption": "两种结构分开看：目的说想做成什么，结果说实际上发生了什么。",
        "lanes": [
          {
            "id": "goal",
            "label": "目的",
            "tokens": [
              {
                "id": "run1",
                "text": "I ran",
                "role": "我跑了",
                "tone": "subject"
              },
              {
                "id": "link1",
                "text": "so that",
                "role": "为了",
                "tone": "linker"
              },
              {
                "id": "catch1",
                "text": "I could catch Tom.",
                "role": "目的",
                "tone": "object"
              }
            ]
          },
          {
            "id": "sentence",
            "label": "结果",
            "tokens": [
              {
                "id": "run",
                "text": "I ran",
                "role": "我跑了",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "so fast that",
                "role": "快到这种程度",
                "tone": "linker"
              },
              {
                "id": "catch",
                "text": "I caught Tom.",
                "role": "结果",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "上句说追人的目的；下句说跑得快，实际追上了。"
      }
    ]
  },
  {
    "key": "lesson:subjunctive-suggestions",
    "title": "建议的内容里，用 go 或 should go",
    "steps": [
      {
        "caption": "先看一般陈述句：Tom 是一个人，说平时回家用 goes。",
        "lanes": [
          {
            "id": "sentence",
            "label": "普通陈述",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "一个人",
                "tone": "subject"
              },
              {
                "id": "go",
                "text": "goes",
                "role": "平时的动作",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "home.",
                "role": "回家",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "汤姆回家。"
      },
      {
        "caption": "这里说的是建议，不是描述事实；接下来改用常见的原形写法。",
        "lanes": [
          {
            "id": "sentence",
            "label": "准备换成原形写法",
            "tokens": [
              {
                "id": "suggest",
                "text": "I suggest",
                "role": "我建议",
                "tone": "subject"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出建议",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "建议谁",
                "tone": "subject"
              },
              {
                "id": "go",
                "text": "goes",
                "role": "准备换成原形",
                "tone": "verb",
                "status": "focus"
              },
              {
                "id": "home",
                "text": "home.",
                "role": "回家",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "这种正式的建议写法用原形 go，不随 Tom 加 s。",
        "lanes": [
          {
            "id": "sentence",
            "label": "用动词原形",
            "tokens": [
              {
                "id": "suggest",
                "text": "I suggest",
                "role": "我建议",
                "tone": "subject"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出建议",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "建议谁",
                "tone": "subject"
              },
              {
                "id": "go",
                "text": "go",
                "role": "原形",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "home.",
                "role": "回家",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "我建议汤姆回家。"
      },
      {
        "caption": "也常能用 should go；should 后同样是原形，不改成 goes。",
        "lanes": [
          {
            "id": "sentence",
            "label": "另一种常见写法",
            "tokens": [
              {
                "id": "suggest",
                "text": "I suggest",
                "role": "我建议",
                "tone": "subject"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出建议",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "建议谁",
                "tone": "subject"
              },
              {
                "id": "should",
                "text": "should",
                "role": "建议这样做",
                "tone": "linker"
              },
              {
                "id": "go",
                "text": "go",
                "role": "原形",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "home.",
                "role": "回家",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "我建议汤姆回家。"
      }
    ]
  },
  {
    "key": "lesson:wish",
    "title": "把现在的事实与愿望分开放",
    "steps": [
      {
        "caption": "先看现在的事实：我不在家，这句话是在说真实的位置。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I am not at home.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          }
        ]
      },
      {
        "caption": "再单独放出“我在家”这个想法；这是愿望的词块，不是事实。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I am not at home.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "wish",
            "label": "愿望词块（待组合）",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "希望谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "am",
                "role": "待改的形式",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "at home",
                "role": "想在的位置",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "接到 I wish 后，把 am 改成 were，表示与现在不同的愿望。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I am not at home.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "wish",
            "label": "与现在不同的愿望",
            "tokens": [
              {
                "id": "wish",
                "text": "I wish",
                "role": "但愿",
                "tone": "subject"
              },
              {
                "id": "i",
                "text": "I",
                "role": "希望谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "were",
                "role": "与现在不同",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "at home.",
                "role": "想在的位置",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "但愿我现在在家。"
      },
      {
        "caption": "把愿望放到前面再对照事实；这里 were 不表示我过去在家。",
        "lanes": [
          {
            "id": "wish",
            "label": "愿望",
            "tokens": [
              {
                "id": "wish",
                "text": "I wish",
                "role": "但愿",
                "tone": "subject"
              },
              {
                "id": "i",
                "text": "I",
                "role": "希望谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "were",
                "role": "与现在不同",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "at home.",
                "role": "想在的位置",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "fact",
            "label": "现在的事实仍没变",
            "tokens": [
              {
                "id": "fact",
                "text": "I am not at home.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "但愿我现在在家，但我现在不在家。"
      }
    ]
  },
  {
    "key": "lesson:clause-basics",
    "title": "让一小句装进另一句话里",
    "steps": [
      {
        "caption": "先看两个能独立说的意思：我有个想法；汤姆很友善。",
        "lanes": [
          {
            "id": "main",
            "label": "想法的外壳",
            "tokens": [
              {
                "id": "think",
                "text": "I think",
                "role": "我认为",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "this.",
                "role": "想法的内容",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "完整的小句",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom is nice.",
                "role": "谁怎么样",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在小句前加 that，说明接下来这件事就是我认为的内容。",
        "lanes": [
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "think",
                "text": "I think",
                "role": "我认为",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "this.",
                "role": "等待替换",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "内容词块（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "that",
                "role": "把内容连进去",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is nice",
                "role": "里面的小句",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "用整块内容替掉 this；小句放进大句里，就成了从句。",
        "lanes": [
          {
            "id": "sentence",
            "label": "小句装进大句",
            "tokens": [
              {
                "id": "think",
                "text": "I think",
                "role": "外面的主要部分",
                "tone": "subject"
              },
              {
                "id": "that",
                "text": "that",
                "role": "连接内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is nice.",
                "role": "里面的小句",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我认为汤姆很友善。"
      },
      {
        "caption": "前面换成 know，后面仍有自己的 Tom 和 is，仍是一整件事。",
        "lanes": [
          {
            "id": "sentence",
            "label": "仍然是一句中的小句",
            "tokens": [
              {
                "id": "think",
                "text": "I know",
                "role": "我知道",
                "tone": "subject"
              },
              {
                "id": "that",
                "text": "that",
                "role": "连接内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is nice.",
                "role": "自己的谁和动作",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我知道汤姆很友善。"
      }
    ]
  },
  {
    "key": "lesson:place-manner-clauses",
    "title": "where 说地点，as 说做法",
    "steps": [
      {
        "caption": "先看我坐在这里；另一个小句说，汤姆也坐在这里。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "i",
                "text": "I sit",
                "role": "我坐",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "here.",
                "role": "坐在哪里",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "detail",
            "label": "地点的信息",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom sits",
                "role": "汤姆坐",
                "tone": "subject"
              },
              {
                "id": "where",
                "text": "here.",
                "role": "同一个地方",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 where 代替第二句的 here，并放到这个说明的开头。",
        "lanes": [
          {
            "id": "main",
            "label": "等待地点说明",
            "tokens": [
              {
                "id": "i",
                "text": "I sit",
                "role": "我坐",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "here.",
                "role": "待替换的位置",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "detail",
            "label": "地点词块（待组合）",
            "tokens": [
              {
                "id": "where",
                "text": "where",
                "role": "在……的地方",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom sits",
                "role": "汤姆坐",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把地点词块接上，不再重复 here；它说的就是我坐的位置。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明坐在哪里",
            "tokens": [
              {
                "id": "i",
                "text": "I sit",
                "role": "我坐",
                "tone": "subject"
              },
              {
                "id": "where",
                "text": "where",
                "role": "在……的地方",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom sits.",
                "role": "地点说明",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "我坐在汤姆坐的地方。"
      },
      {
        "caption": "换成 as 就可以说做法；where 回答在哪里，as 回答怎么做。",
        "lanes": [
          {
            "id": "sentence",
            "label": "地点",
            "tokens": [
              {
                "id": "i",
                "text": "I sit",
                "role": "我坐",
                "tone": "subject"
              },
              {
                "id": "where",
                "text": "where",
                "role": "在哪里",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom sits.",
                "role": "地点说明",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "manner",
            "label": "做法",
            "tokens": [
              {
                "id": "do",
                "text": "Do it",
                "role": "做这件事",
                "tone": "verb"
              },
              {
                "id": "as",
                "text": "as",
                "role": "照……的样子",
                "tone": "linker"
              },
              {
                "id": "ido",
                "text": "I do.",
                "role": "做法说明",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "上句：我坐在汤姆坐的地方。下句：照我的样子做。"
      }
    ]
  },
  {
    "key": "lesson:comparison-clauses",
    "title": "把两个人放进 as…as 比较框里",
    "steps": [
      {
        "caption": "先放出两个人，再设想两人一样高，准备比较同一种特点。",
        "lanes": [
          {
            "id": "tom",
            "label": "第一个人",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "第一个人",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "是",
                "tone": "verb"
              },
              {
                "id": "tall",
                "text": "tall.",
                "role": "高",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "ben",
            "label": "第二个人",
            "tokens": [
              {
                "id": "ben",
                "text": "Ben",
                "role": "第二个人",
                "tone": "object"
              },
              {
                "id": "benbe",
                "text": "is tall.",
                "role": "也一样高",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "第一个 as 放到 tall 前，表示比较的程度；后面还等着比较对象。",
        "lanes": [
          {
            "id": "tom",
            "label": "比较词块（待组合）",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "第一个人",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "是",
                "tone": "verb"
              },
              {
                "id": "as1",
                "text": "as",
                "role": "一样的程度",
                "tone": "linker"
              },
              {
                "id": "tall",
                "text": "tall",
                "role": "比较高矮",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "ben",
            "label": "等待放入的对象",
            "tokens": [
              {
                "id": "ben",
                "text": "Ben",
                "role": "比较对象",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "再放第二个 as，把 Ben 接进来，完整表达两人一样高。",
        "lanes": [
          {
            "id": "sentence",
            "label": "两个人一样高",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "第一个人",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "是",
                "tone": "verb"
              },
              {
                "id": "as1",
                "text": "as",
                "role": "一样的程度",
                "tone": "linker"
              },
              {
                "id": "tall",
                "text": "tall",
                "role": "比较高矮",
                "tone": "modifier"
              },
              {
                "id": "as2",
                "text": "as",
                "role": "引出比较对象",
                "tone": "linker"
              },
              {
                "id": "ben",
                "text": "Ben.",
                "role": "比较对象",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "汤姆和本一样高。"
      },
      {
        "caption": "第二个 as 后也能把 is 补出来；补与不补都在比较身高。",
        "lanes": [
          {
            "id": "sentence",
            "label": "把后面的句子补全",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "第一个人",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "是",
                "tone": "verb"
              },
              {
                "id": "as1",
                "text": "as",
                "role": "一样的程度",
                "tone": "linker"
              },
              {
                "id": "tall",
                "text": "tall",
                "role": "比较高矮",
                "tone": "modifier"
              },
              {
                "id": "as2",
                "text": "as",
                "role": "引出后面的小句",
                "tone": "linker"
              },
              {
                "id": "ben",
                "text": "Ben",
                "role": "比较对象",
                "tone": "object"
              },
              {
                "id": "benbe",
                "text": "is.",
                "role": "省略的部分补回来",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "汤姆和本一样高。"
      }
    ]
  },
  {
    "key": "lesson:clause-adverbial-time",
    "title": "把汤姆进来放到读书进行的中间",
    "steps": [
      {
        "caption": "先看过去的一段读书过程；当时读书已经开始，还没有结束。",
        "lanes": [
          {
            "id": "main",
            "label": "当时在做的事",
            "tokens": [
              {
                "id": "read",
                "text": "I was reading.",
                "role": "当时正在读书",
                "tone": "verb"
              }
            ]
          }
        ],
        "timeline": {
          "label": "过去那段读书",
          "now": 85,
          "events": [
            {
              "id": "read",
              "label": "读书中",
              "start": 20,
              "end": 60,
              "kind": "span"
            }
          ]
        }
      },
      {
        "caption": "再放进汤姆进来的那个时刻，它发生在读书进行的过程中。",
        "lanes": [
          {
            "id": "main",
            "label": "当时在做的事",
            "tokens": [
              {
                "id": "read",
                "text": "I was reading.",
                "role": "正在读书",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "中途发生的事",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom came in.",
                "role": "汤姆进来了",
                "tone": "modifier"
              }
            ]
          }
        ],
        "timeline": {
          "label": "进来发生在中途",
          "now": 85,
          "events": [
            {
              "id": "read",
              "label": "读书中",
              "start": 20,
              "end": 60,
              "kind": "span"
            },
            {
              "id": "tom",
              "label": "汤姆进来",
              "start": 40,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "用 when 把进来的时刻接上，就说明当时我正在做什么。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说清过去那个时刻",
            "tokens": [
              {
                "id": "read",
                "text": "I was reading",
                "role": "正在进行",
                "tone": "verb"
              },
              {
                "id": "when",
                "text": "when",
                "role": "当……时",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom came in.",
                "role": "中途的时刻",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "汤姆进来时，我正在读书。",
        "timeline": {
          "label": "点落在过程里",
          "now": 85,
          "events": [
            {
              "id": "read",
              "label": "读书中",
              "start": 20,
              "end": 60,
              "kind": "span"
            },
            {
              "id": "tom",
              "label": "汤姆进来",
              "start": 40,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "把 when 这部分整体移到前面，时间关系不会因此改变。",
        "lanes": [
          {
            "id": "sentence",
            "label": "先说发生的时刻",
            "tokens": [
              {
                "id": "when",
                "text": "When",
                "role": "当……时",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom came in,",
                "role": "中途的时刻",
                "tone": "modifier"
              },
              {
                "id": "read",
                "text": "I was reading.",
                "role": "正在进行",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "汤姆进来时，我正在读书。",
        "timeline": {
          "label": "关系仍然一样",
          "now": 85,
          "events": [
            {
              "id": "read",
              "label": "读书中",
              "start": 20,
              "end": 60,
              "kind": "span"
            },
            {
              "id": "tom",
              "label": "汤姆进来",
              "start": 40,
              "kind": "point"
            }
          ]
        }
      }
    ]
  },
  {
    "key": "lesson:clause-adverbial-reason",
    "title": "把生病接成待在家的原因",
    "steps": [
      {
        "caption": "先看我待在家里，再看我生病了；这两件事有原因关系。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "main",
                "text": "I stayed home",
                "role": "主要的事",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "另一件事",
            "tokens": [
              {
                "id": "detail",
                "text": "I was ill",
                "role": "说明原因",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "在生病前放 because，就能明确说它是待在家的原因。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "main",
                "text": "I stayed home",
                "role": "主要的事",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明原因词块",
            "tokens": [
              {
                "id": "link",
                "text": "because",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "I was ill",
                "role": "说明原因",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把原因接到主要事情后面，用一整句回答为什么待在家。",
        "lanes": [
          {
            "id": "sentence",
            "label": "合成一句话",
            "tokens": [
              {
                "id": "main",
                "text": "I stayed home",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "because",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "I was ill",
                "role": "说明原因",
                "tone": "modifier"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "我待在家里，因为我病了。"
      },
      {
        "caption": "也可以先说原因，再说做了什么；这里不用再加 so。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明放到前面",
            "tokens": [
              {
                "id": "link",
                "text": "Because",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "I was ill",
                "role": "说明原因",
                "tone": "modifier"
              },
              {
                "id": "comma",
                "text": ",",
                "role": "",
                "tone": "neutral"
              },
              {
                "id": "main",
                "text": "I stayed home",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "我待在家里，因为我病了。"
      }
    ]
  },
  {
    "key": "lesson:clause-adverbial-concession",
    "title": "虽然很冷，出门这件事仍发生",
    "steps": [
      {
        "caption": "先看两件事：天气冷，我却出门了，结果与常见预想不同。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "main",
                "text": "I went out",
                "role": "主要的事",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "另一件事",
            "tokens": [
              {
                "id": "detail",
                "text": "It was cold",
                "role": "没有阻止的情况",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "给冷这件事加 although，表示虽然这样，后面的事仍发生。",
        "lanes": [
          {
            "id": "main",
            "label": "主要的事",
            "tokens": [
              {
                "id": "main",
                "text": "I went out",
                "role": "主要的事",
                "tone": "subject"
              }
            ]
          },
          {
            "id": "detail",
            "label": "没有阻止的情况词块",
            "tokens": [
              {
                "id": "link",
                "text": "although",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "it was cold",
                "role": "没有阻止的情况",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "把“虽然很冷”接到出门后面，不能再机械添一个 but。",
        "lanes": [
          {
            "id": "sentence",
            "label": "合成一句话",
            "tokens": [
              {
                "id": "main",
                "text": "I went out",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "link",
                "text": "although",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "it was cold",
                "role": "没有阻止的情况",
                "tone": "modifier"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "虽然天气很冷，我还是出门了。"
      },
      {
        "caption": "把 although 这部分放到前面，仍表示冷没有阻止我出门。",
        "lanes": [
          {
            "id": "sentence",
            "label": "说明放到前面",
            "tokens": [
              {
                "id": "link",
                "text": "Although",
                "role": "连接两件事",
                "tone": "linker"
              },
              {
                "id": "detail",
                "text": "it was cold",
                "role": "没有阻止的情况",
                "tone": "modifier"
              },
              {
                "id": "comma",
                "text": ",",
                "role": "",
                "tone": "neutral"
              },
              {
                "id": "main",
                "text": "I went out",
                "role": "主要的事",
                "tone": "subject"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "虽然天气很冷，我还是出门了。"
      }
    ]
  },
  {
    "key": "lesson:clause-adverbial-purpose",
    "title": "用 so that 说清为什么慢慢说",
    "steps": [
      {
        "caption": "先看慢慢说话这个动作，再看我希望你能听到这个目的。",
        "lanes": [
          {
            "id": "main",
            "label": "做了什么",
            "tokens": [
              {
                "id": "speak",
                "text": "I speak slowly.",
                "role": "慢慢说话",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "goal",
            "label": "想达到的目的",
            "tokens": [
              {
                "id": "goal",
                "text": "I want you to hear me.",
                "role": "希望你能听到",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "把希望改写成“你能听到我”，这是放进目的词块的内容。",
        "lanes": [
          {
            "id": "main",
            "label": "做了什么",
            "tokens": [
              {
                "id": "speak",
                "text": "I speak slowly.",
                "role": "慢慢说话",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "goal",
            "label": "目的内容（待组合）",
            "tokens": [
              {
                "id": "goal",
                "text": "you can hear me",
                "role": "希望达到的情况",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在目的内容前放 so that，说明慢慢说话是为了什么。",
        "lanes": [
          {
            "id": "main",
            "label": "做了什么",
            "tokens": [
              {
                "id": "speak",
                "text": "I speak slowly",
                "role": "慢慢说话",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "goal",
            "label": "目的词块（待组合）",
            "tokens": [
              {
                "id": "so",
                "text": "so that",
                "role": "为了",
                "tone": "linker"
              },
              {
                "id": "goal",
                "text": "you can hear me",
                "role": "想达到的目的",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "把整个目的词块接到动作后；这说的是目的，不保证一定听到。",
        "lanes": [
          {
            "id": "sentence",
            "label": "动作加目的",
            "tokens": [
              {
                "id": "speak",
                "text": "I speak slowly",
                "role": "慢慢说话",
                "tone": "verb"
              },
              {
                "id": "so",
                "text": "so that",
                "role": "为了",
                "tone": "linker"
              },
              {
                "id": "goal",
                "text": "you can hear me.",
                "role": "想达到的目的",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我慢慢说，好让你能听到我。"
      }
    ]
  },
  {
    "key": "lesson:clause-adverbial-result",
    "title": "so tired 说程度，that 后说结果",
    "steps": [
      {
        "caption": "先看汤姆累了，后来睡着了；准备把程度和结果联系起来。",
        "lanes": [
          {
            "id": "main",
            "label": "汤姆的状态",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "was",
                "text": "was",
                "role": "过去的状态",
                "tone": "verb"
              },
              {
                "id": "tired",
                "text": "tired.",
                "role": "累",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "result",
            "label": "出现的结果",
            "tokens": [
              {
                "id": "result",
                "text": "He fell asleep.",
                "role": "他睡着了",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在 tired 前面放 so，表示累到很高的程度，后面还要说结果。",
        "lanes": [
          {
            "id": "main",
            "label": "程度词块（待组合）",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "was",
                "text": "was",
                "role": "过去的状态",
                "tone": "verb"
              },
              {
                "id": "so",
                "text": "so",
                "role": "这样的程度",
                "tone": "linker"
              },
              {
                "id": "tired",
                "text": "tired",
                "role": "很累",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "result",
            "label": "实际结果",
            "tokens": [
              {
                "id": "result",
                "text": "He fell asleep.",
                "role": "睡着了",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在睡着前面放 that，它负责引出累到这种程度后的结果。",
        "lanes": [
          {
            "id": "main",
            "label": "程度词块（待组合）",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "was",
                "text": "was",
                "role": "过去的状态",
                "tone": "verb"
              },
              {
                "id": "so",
                "text": "so",
                "role": "这样的程度",
                "tone": "linker"
              },
              {
                "id": "tired",
                "text": "tired",
                "role": "很累",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "result",
            "label": "结果词块（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "that",
                "role": "引出结果",
                "tone": "linker"
              },
              {
                "id": "result",
                "text": "he fell asleep",
                "role": "实际发生的结果",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "把两部分连起来，so 后是 tired，that 后是一整件结果。",
        "lanes": [
          {
            "id": "sentence",
            "label": "程度带来结果",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "was",
                "text": "was",
                "role": "过去的状态",
                "tone": "verb"
              },
              {
                "id": "so",
                "text": "so",
                "role": "这样的程度",
                "tone": "linker"
              },
              {
                "id": "tired",
                "text": "tired",
                "role": "累",
                "tone": "modifier"
              },
              {
                "id": "that",
                "text": "that",
                "role": "引出结果",
                "tone": "linker"
              },
              {
                "id": "result",
                "text": "he fell asleep.",
                "role": "结果",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "汤姆太累了，结果睡着了。"
      }
    ]
  },
  {
    "key": "lesson:conditional-present",
    "title": "had 在这里不是在说过去",
    "steps": [
      {
        "caption": "先看现在的事实：我没有时间，暂时不能去帮忙。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I have no time.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          }
        ]
      },
      {
        "caption": "先设想“我有时间”，这只是待组合的假设，并没有改变事实。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I have no time.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "condition",
            "label": "假设词块（待组合）",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "cond",
                "text": "I have time",
                "role": "设想的情况",
                "tone": "modifier"
              }
            ]
          }
        ]
      },
      {
        "caption": "说与现在不同的假设，把 have 换成 had；结果用 would help。",
        "lanes": [
          {
            "id": "fact",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I have no time.",
                "role": "真实情况",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "condition",
            "label": "假设词块（待组合）",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "cond",
                "text": "I had time",
                "role": "与现在不同",
                "tone": "modifier",
                "status": "focus"
              }
            ]
          },
          {
            "id": "result",
            "label": "假设中的结果",
            "tokens": [
              {
                "id": "result",
                "text": "I would help",
                "role": "我就会帮忙",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "把假设和结果连起来。这里 had 表示与现在不同，不是在叙述过去。",
        "lanes": [
          {
            "id": "sentence",
            "label": "现在的假设",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "cond",
                "text": "I had time",
                "role": "与现在不同",
                "tone": "modifier"
              },
              {
                "id": "comma",
                "text": ",",
                "role": "",
                "tone": "neutral"
              },
              {
                "id": "result",
                "text": "I would help",
                "role": "假设中的结果",
                "tone": "verb"
              },
              {
                "id": "stop",
                "text": ".",
                "role": "",
                "tone": "neutral"
              }
            ]
          }
        ],
        "translation": "如果我现在有时间，我就会帮忙。"
      }
    ]
  },
  {
    "key": "lesson:conditional-past",
    "title": "回到当时：如果那时知道，就会帮忙",
    "steps": [
      {
        "caption": "先看过去的事实：汤姆当时需要帮助，但我当时不知道。",
        "lanes": [
          {
            "id": "need",
            "label": "过去的情况",
            "tokens": [
              {
                "id": "need",
                "text": "Tom needed help.",
                "role": "当时需要帮助",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "fact",
            "label": "过去的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I did not know.",
                "role": "当时不知道",
                "tone": "neutral"
              }
            ]
          }
        ],
        "timeline": {
          "label": "回想过去",
          "now": 80,
          "events": [
            {
              "id": "then",
              "label": "当时不知道",
              "start": 25,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "设想当时知道，用 had known；它说的是与过去事实不同的条件。",
        "lanes": [
          {
            "id": "fact",
            "label": "过去的事实",
            "tokens": [
              {
                "id": "fact",
                "text": "I did not know.",
                "role": "实际不知道",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "condition",
            "label": "过去的假设词块",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "known",
                "text": "I had known",
                "role": "假如当时知道",
                "tone": "modifier"
              }
            ]
          }
        ],
        "timeline": {
          "label": "假设仍指过去",
          "now": 80,
          "events": [
            {
              "id": "then",
              "label": "假如当时知道",
              "start": 25,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "结果也回到当时，用 would have helped 表示那时就会帮忙。",
        "lanes": [
          {
            "id": "condition",
            "label": "过去的假设词块",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "known",
                "text": "I had known",
                "role": "当时知道",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "result",
            "label": "过去的假设结果",
            "tokens": [
              {
                "id": "help",
                "text": "I would have helped.",
                "role": "当时就会帮忙",
                "tone": "verb"
              }
            ]
          }
        ],
        "timeline": {
          "label": "两边都说当时",
          "now": 80,
          "events": [
            {
              "id": "then",
              "label": "假设知道",
              "start": 25,
              "kind": "point"
            },
            {
              "id": "help",
              "label": "假设帮忙",
              "start": 35,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "把过去的假设和结果连起来；这是现在回想当时，不是在安排将来。",
        "lanes": [
          {
            "id": "sentence",
            "label": "对过去的反事实",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "known",
                "text": "I had known,",
                "role": "假如当时知道",
                "tone": "modifier"
              },
              {
                "id": "help",
                "text": "I would have helped.",
                "role": "那时就会帮忙",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "如果我当时知道，我就会帮忙了。",
        "timeline": {
          "label": "现在回想过去",
          "now": 80,
          "events": [
            {
              "id": "then",
              "label": "假设知道",
              "start": 25,
              "kind": "point"
            },
            {
              "id": "help",
              "label": "假设帮忙",
              "start": 35,
              "kind": "point"
            }
          ]
        }
      }
    ]
  },
  {
    "key": "lesson:relative-subject",
    "title": "who 已经在说“谁唱歌”",
    "steps": [
      {
        "caption": "两句话重复说 the girl，先找到第二句里做 sings 动作的人。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "girl",
                "text": "The girl",
                "role": "这个女孩",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is Tom's friend.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "补充信息",
            "tokens": [
              {
                "id": "who",
                "text": "The girl",
                "role": "谁在唱歌",
                "tone": "subject"
              },
              {
                "id": "sing",
                "text": "sings.",
                "role": "唱歌",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "把第二句的女孩换成 who，who 自己已经表示唱歌的人。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "girl",
                "text": "The girl",
                "role": "被说明的人",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is Tom's friend.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明词块（待组合）",
            "tokens": [
              {
                "id": "who",
                "text": "who",
                "role": "谁在唱歌",
                "tone": "linker"
              },
              {
                "id": "sing",
                "text": "sings",
                "role": "唱歌",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "如果又加 she，就把唱歌的人重复说了；这是要改掉的错句。",
        "lanes": [
          {
            "id": "sentence",
            "label": "错句：多说了 she",
            "tokens": [
              {
                "id": "girl",
                "text": "The girl",
                "role": "被说明的人",
                "tone": "subject"
              },
              {
                "id": "who",
                "text": "who",
                "role": "已经表示谁",
                "tone": "linker"
              },
              {
                "id": "extra",
                "text": "she",
                "role": "重复的人",
                "tone": "subject",
                "status": "error"
              },
              {
                "id": "sing",
                "text": "sings",
                "role": "唱歌",
                "tone": "verb"
              },
              {
                "id": "pred",
                "text": "is Tom's friend.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "拿走多余的 she，who 直接接 sings，就能说清哪一个女孩。",
        "lanes": [
          {
            "id": "sentence",
            "label": "正确的主语关系词",
            "tokens": [
              {
                "id": "girl",
                "text": "The girl",
                "role": "被说明的人",
                "tone": "subject"
              },
              {
                "id": "who",
                "text": "who",
                "role": "唱歌的人",
                "tone": "linker"
              },
              {
                "id": "sing",
                "text": "sings",
                "role": "说明哪一个",
                "tone": "verb"
              },
              {
                "id": "pred",
                "text": "is Tom's friend.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "那个唱歌的女孩是汤姆的朋友。"
      }
    ]
  },
  {
    "key": "lesson:relative-object",
    "title": "that 代替 read 后面的书，再移到开头",
    "steps": [
      {
        "caption": "第二句话里，我是做 read 动作的人，the book 是我读的对象。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "role": "这本书",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "补充信息",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "读书的人",
                "tone": "subject"
              },
              {
                "id": "read",
                "text": "read",
                "role": "读",
                "tone": "verb"
              },
              {
                "id": "that",
                "text": "the book",
                "role": "读的对象",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "先用 that 代替重复的书，I 仍然是做 read 动作的人。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "role": "被说明的书",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "词块（待组合）",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "读书的人",
                "tone": "subject"
              },
              {
                "id": "read",
                "text": "read",
                "role": "读",
                "tone": "verb"
              },
              {
                "id": "that",
                "text": "that",
                "role": "代替书",
                "tone": "linker"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 that 移到说明开头，read 后就不用再写重复的书。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "role": "被说明的书",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明词块（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "that",
                "role": "读的对象移到前面",
                "tone": "linker"
              },
              {
                "id": "i",
                "text": "I",
                "role": "读书的人",
                "tone": "subject"
              },
              {
                "id": "read",
                "text": "read",
                "role": "读",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "把说明放到 book 后面，that 是 read 的对象，不是做动作的人。",
        "lanes": [
          {
            "id": "sentence",
            "label": "正确的宾语关系词",
            "tokens": [
              {
                "id": "book",
                "text": "The book",
                "role": "被说明的书",
                "tone": "subject"
              },
              {
                "id": "that",
                "text": "that",
                "role": "read 指向的东西",
                "tone": "linker"
              },
              {
                "id": "i",
                "text": "I",
                "role": "读书的人",
                "tone": "subject"
              },
              {
                "id": "read",
                "text": "read",
                "role": "读",
                "tone": "verb"
              },
              {
                "id": "pred",
                "text": "is good.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "我读的那本书很好。"
      }
    ]
  },
  {
    "key": "lesson:relative-preposition",
    "title": "把 to 和 whom 一起移到说明开头",
    "steps": [
      {
        "caption": "先看我和这个女孩说话；talk to 里的 to 不能随便丢掉。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "girl",
                "text": "The girl",
                "role": "这个女孩",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is Ann.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说话的对象",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "talk",
                "text": "talk",
                "role": "说话",
                "tone": "verb"
              },
              {
                "id": "to",
                "text": "to",
                "role": "和谁说话",
                "tone": "linker"
              },
              {
                "id": "whom",
                "text": "the girl",
                "role": "说话对象",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 whom 代替第二句重复的女孩，先保留它前面的 to。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "girl",
                "text": "The girl",
                "role": "被说明的人",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is Ann.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "词块（待组合）",
            "tokens": [
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "talk",
                "text": "talk",
                "role": "说话",
                "tone": "verb"
              },
              {
                "id": "to",
                "text": "to",
                "role": "保留的介词",
                "tone": "linker"
              },
              {
                "id": "whom",
                "text": "whom",
                "role": "代替说话对象",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "正式写法中，把 to 和 whom 一起移到说明的开头。",
        "lanes": [
          {
            "id": "main",
            "label": "主要信息",
            "tokens": [
              {
                "id": "girl",
                "text": "The girl",
                "role": "被说明的人",
                "tone": "subject"
              },
              {
                "id": "pred",
                "text": "is Ann.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          },
          {
            "id": "detail",
            "label": "说明词块（待组合）",
            "tokens": [
              {
                "id": "to",
                "text": "to",
                "role": "和……",
                "tone": "linker"
              },
              {
                "id": "whom",
                "text": "whom",
                "role": "代替女孩",
                "tone": "object"
              },
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "talk",
                "text": "talk",
                "role": "说话",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "把说明放到 girl 后面；这里介词后用 whom，不用 that。",
        "lanes": [
          {
            "id": "sentence",
            "label": "介词与关系词一起前置",
            "tokens": [
              {
                "id": "girl",
                "text": "The girl",
                "role": "被说明的人",
                "tone": "subject"
              },
              {
                "id": "to",
                "text": "to",
                "role": "和……",
                "tone": "linker"
              },
              {
                "id": "whom",
                "text": "whom",
                "role": "代替女孩",
                "tone": "object"
              },
              {
                "id": "i",
                "text": "I",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "talk",
                "text": "talk",
                "role": "说话",
                "tone": "verb"
              },
              {
                "id": "pred",
                "text": "is Ann.",
                "role": "主要信息",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "和我说话的那个女孩是安。"
      }
    ]
  },
  {
    "key": "lesson:nominal-that",
    "title": "that 连进整件事，不代替里面的谁",
    "steps": [
      {
        "caption": "先看我知道这件事；这件事的内容是“汤姆在这里”。",
        "lanes": [
          {
            "id": "main",
            "label": "先留一个位置",
            "tokens": [
              {
                "id": "know",
                "text": "I know",
                "role": "我知道",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "this.",
                "role": "知道的事",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "完整的内容",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "谁在哪里",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "在完整内容前加 that，它只负责连接，不替代 Tom 或 is。",
        "lanes": [
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "know",
                "text": "I know",
                "role": "我知道",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "this.",
                "role": "等待替换",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "内容词块（待组合）",
            "tokens": [
              {
                "id": "that",
                "text": "that",
                "role": "只负责连接",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here",
                "role": "里面已经完整",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "把这整件事放到 know 后面；Tom 仍是里面说的人。",
        "lanes": [
          {
            "id": "sentence",
            "label": "把完整内容接进来",
            "tokens": [
              {
                "id": "know",
                "text": "I know",
                "role": "我知道",
                "tone": "subject"
              },
              {
                "id": "that",
                "text": "that",
                "role": "连接内容",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom is here.",
                "role": "完整的事",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我知道汤姆在这里。"
      },
      {
        "caption": "在 know 后面，这里的 that 常可省掉；省掉后内容仍完整。",
        "lanes": [
          {
            "id": "sentence",
            "label": "口语中常见的省略",
            "tokens": [
              {
                "id": "know",
                "text": "I know",
                "role": "我知道",
                "tone": "subject"
              },
              {
                "id": "tom",
                "text": "Tom is here.",
                "role": "完整的事",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我知道汤姆在这里。"
      }
    ]
  },
  {
    "key": "lesson:nominal-what",
    "title": "what 把“所要的东西”带进来",
    "steps": [
      {
        "caption": "先看我想要某样东西，汤姆也想要某样东西；准备说同一个东西。",
        "lanes": [
          {
            "id": "main",
            "label": "我想要的东西",
            "tokens": [
              {
                "id": "i",
                "text": "I want",
                "role": "我想要",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "something.",
                "role": "等待说明的东西",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "汤姆想要的东西",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom wants",
                "role": "汤姆想要",
                "tone": "verb"
              },
              {
                "id": "what",
                "text": "it.",
                "role": "想要的对象",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "用 what 代替后面的东西，它自己已经包含“什么东西”的意思。",
        "lanes": [
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "i",
                "text": "I want",
                "role": "我想要",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "something.",
                "role": "待替换的位置",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "词块（待组合）",
            "tokens": [
              {
                "id": "tom",
                "text": "Tom wants",
                "role": "汤姆想要",
                "tone": "verb"
              },
              {
                "id": "what",
                "text": "what",
                "role": "所要的东西",
                "tone": "object"
              }
            ]
          }
        ]
      },
      {
        "caption": "把 what 移到这块内容开头，wants 后面就不再加 it。",
        "lanes": [
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "i",
                "text": "I want",
                "role": "我想要",
                "tone": "subject"
              },
              {
                "id": "slot",
                "text": "something.",
                "role": "等待替换",
                "tone": "object"
              }
            ]
          },
          {
            "id": "detail",
            "label": "内容词块（待组合）",
            "tokens": [
              {
                "id": "what",
                "text": "what",
                "role": "所要的东西",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom wants",
                "role": "汤姆想要",
                "tone": "verb"
              }
            ]
          }
        ]
      },
      {
        "caption": "整块 what Tom wants 替换 something，表示汤姆想要的东西。",
        "lanes": [
          {
            "id": "sentence",
            "label": "把“所要的东西”接进来",
            "tokens": [
              {
                "id": "i",
                "text": "I want",
                "role": "我想要",
                "tone": "subject"
              },
              {
                "id": "what",
                "text": "what",
                "role": "所要的东西",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom wants.",
                "role": "汤姆想要",
                "tone": "object"
              }
            ]
          }
        ],
        "translation": "我想要汤姆想要的东西。"
      }
    ]
  },
  {
    "key": "lesson:nominal-whether",
    "title": "whether 说是否，里面仍用 Tom is",
    "steps": [
      {
        "caption": "先看独立问句，is 在 Tom 前面；它问汤姆是否在家。",
        "lanes": [
          {
            "id": "question",
            "label": "直接提问",
            "tokens": [
              {
                "id": "be",
                "text": "Is",
                "role": "问句里的 is",
                "tone": "verb"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "home",
                "text": "home?",
                "role": "在家",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "know",
                "text": "I do not know",
                "role": "我不知道",
                "tone": "subject"
              }
            ]
          }
        ]
      },
      {
        "caption": "接到 know 后要用 whether 表示“是否”，里面先恢复 Tom is。",
        "lanes": [
          {
            "id": "question",
            "label": "内容词块（待组合）",
            "tokens": [
              {
                "id": "whether",
                "text": "whether",
                "role": "是否",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "在谁后面",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "home",
                "role": "在家",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "main",
            "label": "主要部分",
            "tokens": [
              {
                "id": "know",
                "text": "I do not know",
                "role": "我不知道",
                "tone": "subject"
              }
            ]
          }
        ]
      },
      {
        "caption": "把是否这件事接到 know 后，不再保留独立问句的倒序。",
        "lanes": [
          {
            "id": "sentence",
            "label": "不知道是否在家",
            "tokens": [
              {
                "id": "know",
                "text": "I do not know",
                "role": "我不知道",
                "tone": "subject"
              },
              {
                "id": "whether",
                "text": "whether",
                "role": "是否",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "在",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "home.",
                "role": "在家",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "我不知道汤姆是否在家。"
      },
      {
        "caption": "在 know 后面谈“是否”，这里也可以换成 if；别套到所有位置。",
        "lanes": [
          {
            "id": "sentence",
            "label": "这里也能换成 if",
            "tokens": [
              {
                "id": "know",
                "text": "I do not know",
                "role": "我不知道",
                "tone": "subject"
              },
              {
                "id": "whether",
                "text": "if",
                "role": "这里表示是否",
                "tone": "linker"
              },
              {
                "id": "tom",
                "text": "Tom",
                "role": "谁",
                "tone": "subject"
              },
              {
                "id": "be",
                "text": "is",
                "role": "在",
                "tone": "verb"
              },
              {
                "id": "home",
                "text": "home.",
                "role": "在家",
                "tone": "modifier"
              }
            ]
          }
        ],
        "translation": "我不知道汤姆是否在家。"
      }
    ]
  },
  {
    "key": "lesson:conditional-mixed",
    "title": "昨晚的条件，连到现在的结果",
    "steps": [
      {
        "caption": "先分开看两个事实：昨晚没有睡，现在很累；它们发生在不同时间。",
        "lanes": [
          {
            "id": "past",
            "label": "昨晚的事实",
            "tokens": [
              {
                "id": "factpast",
                "text": "I did not sleep.",
                "role": "过去没睡",
                "tone": "neutral"
              }
            ]
          },
          {
            "id": "now",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "factnow",
                "text": "I am tired now.",
                "role": "现在很累",
                "tone": "neutral"
              }
            ]
          }
        ],
        "timeline": {
          "label": "先看两个时间",
          "now": 75,
          "events": [
            {
              "id": "past",
              "label": "昨晚没睡",
              "start": 20,
              "kind": "point"
            },
            {
              "id": "now",
              "label": "现在很累",
              "start": 75,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "设想昨晚睡了，条件用 had slept；它说的是过去那个晚上。",
        "lanes": [
          {
            "id": "condition",
            "label": "昨晚的假设词块",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "sleep",
                "text": "I had slept",
                "role": "假如昨晚睡了",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "now",
            "label": "现在的事实",
            "tokens": [
              {
                "id": "factnow",
                "text": "I am tired now.",
                "role": "实际现在很累",
                "tone": "neutral"
              }
            ]
          }
        ],
        "timeline": {
          "label": "条件说昨晚",
          "now": 75,
          "events": [
            {
              "id": "past",
              "label": "假如昨晚睡了",
              "start": 20,
              "kind": "point"
            },
            {
              "id": "now",
              "label": "现在很累",
              "start": 75,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "结果说现在就不会累，用 would not be tired，不用过去完成形式。",
        "lanes": [
          {
            "id": "condition",
            "label": "过去的假设条件",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "sleep",
                "text": "I had slept",
                "role": "昨晚睡了",
                "tone": "modifier"
              }
            ]
          },
          {
            "id": "result",
            "label": "现在的假设结果",
            "tokens": [
              {
                "id": "result",
                "text": "I would not be tired now.",
                "role": "现在就不会累",
                "tone": "verb"
              }
            ]
          }
        ],
        "timeline": {
          "label": "结果说现在",
          "now": 75,
          "events": [
            {
              "id": "past",
              "label": "假设昨晚睡了",
              "start": 20,
              "kind": "point"
            },
            {
              "id": "now",
              "label": "假设现在不累",
              "start": 75,
              "kind": "point"
            }
          ]
        }
      },
      {
        "caption": "把两边连起来：条件说昨晚，结果说现在，不能机械配成同一时间。",
        "lanes": [
          {
            "id": "sentence",
            "label": "过去影响现在的假设",
            "tokens": [
              {
                "id": "if",
                "text": "If",
                "role": "假如",
                "tone": "linker"
              },
              {
                "id": "sleep",
                "text": "I had slept,",
                "role": "过去的假设",
                "tone": "modifier"
              },
              {
                "id": "result",
                "text": "I would not be tired now.",
                "role": "现在的假设结果",
                "tone": "verb"
              }
            ]
          }
        ],
        "translation": "如果我昨晚睡了，现在就不会这么累。",
        "timeline": {
          "label": "分别看两边时间",
          "now": 75,
          "events": [
            {
              "id": "past",
              "label": "假设昨晚睡了",
              "start": 20,
              "kind": "point"
            },
            {
              "id": "now",
              "label": "假设现在不累",
              "start": 75,
              "kind": "point"
            }
          ]
        }
      }
    ]
  }
];
  (window.GRAMMAR_ANIMATION_DATA ||= []).push(...lessons);
})();
