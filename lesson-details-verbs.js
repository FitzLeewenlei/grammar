/* Detailed explanations revised using the supplied Chinese grammar reference. */
(() => {
  window.LESSON_DETAILS = {
    ...(window.LESSON_DETAILS || {}),
    ...{
  "present": {
    "definition": "一般现在时把习惯、规律和当前相对稳定的状态作为整体来陈述，不专门描写说话这一秒正在展开的动作。选择时先判断表达目的，再核对主语人称和数。",
    "classification": [
      "习惯与反复动作",
      "一般事实与当前状态",
      "第三人称单数",
      "时间表及将来从句"
    ],
    "usage": [
      {
        "h": "肯定与 be 结构",
        "t": "实义动词用原形，第三人称单数通常加 -s/-es；be 根据主语用 am/is/are。She works 与 She is a teacher 的谓语结构不同，不能同时机械添加两个谓语。"
      },
      {
        "h": "否定和疑问只保留一次人称标记",
        "t": "普通实义动词借助 do/does 构成否定、疑问；does 已承担第三人称单数标记，后面的动词恢复原形。be、情态动词构成的句子按各自结构变化。"
      },
      {
        "h": "现在形式也能谈将来",
        "t": "时间表可用一般现在时，如 The class starts tomorrow。表示将来时间、真实条件的从句也常用现在形式；宾语从句中询问将来则不直接套用这一规则。"
      },
      {
        "h": "频率词是线索，不是决定条件",
        "t": "often、every day 等常与本时态搭配，但过去习惯也能有 every day；仍要先确定参照时间。"
      }
    ],
    "pitfalls": [
      {
        "title": "does 后不再加 -s",
        "wrong": "She does not works here.",
        "right": "She does not work here.",
        "text": "does 承担人称和数的变化，work 必须还原。"
      },
      {
        "title": "be 不能随意加在实义谓语前",
        "wrong": "He is plays tennis every Sunday.",
        "right": "He plays tennis every Sunday.",
        "text": "这里陈述习惯，plays 已是谓语；若表达正在打球，要另用 is playing。"
      }
    ],
    "examples": [
      {
        "en": "Maya checks the weather before every trip.",
        "zh": "玛雅每次出行前都会查看天气。",
        "note": "checks 陈述习惯，Maya 为第三人称单数。"
      },
      {
        "en": "The museum opens at nine tomorrow.",
        "zh": "博物馆明天九点开门。",
        "note": "固定开放时间表可用一般现在时表达将来安排。"
      }
    ]
  },
  "continuous": {
    "definition": "现在进行时用 am/is/are + doing，从当前参照点描写正在展开的活动、临时情况或变化。动作可以发生在现阶段，不要求说话这一秒正做着。",
    "classification": [
      "眼前正在进行",
      "现阶段与临时情况",
      "逐步变化",
      "已安排的将来活动"
    ],
    "usage": [
      {
        "h": "结构中的两部分都要保留",
        "t": "be 随主语变化，后接 -ing 形式；否定在 be 后加 not，疑问把 be 移到主语前。He is studying、He is not studying、Is he studying? 三者只调整 be 的位置或否定。"
      },
      {
        "h": "临时情况与稳定事实比较",
        "t": "She works in London 常说明稳定工作地点；She is working in London this month 强调这个月的临时情况。两种时态可以描述同一人，观察角度不同。"
      },
      {
        "h": "变化、安排与重复情绪",
        "t": "The days are getting longer 描写变化；We are meeting on Friday 表示已有安排；always + 进行时可强调反复并带抱怨等态度，不等于动作从未停止。"
      },
      {
        "h": "状态用法不机械进行化",
        "t": "know、belong、own 等在状态含义下通常不用进行时；think 表看法时通常用一般式，表正在思考时可用进行式。应看词义，而非背永久禁止名单。"
      }
    ],
    "pitfalls": [
      {
        "title": "be 后需要现在分词",
        "wrong": "They are prepare dinner.",
        "right": "They are preparing dinner.",
        "text": "进行结构是 are + preparing，不是 are + 原形。"
      },
      {
        "title": "分词不能独立承担本句谓语",
        "wrong": "She reading in the library now.",
        "right": "She is reading in the library now.",
        "text": "reading 前需要与主语对应的限定动词 is。"
      }
    ],
    "examples": [
      {
        "en": "I am staying with my aunt this week.",
        "zh": "我这周暂住在姨妈家。",
        "note": "this week 限定当前阶段，突出临时住宿。"
      },
      {
        "en": "We are meeting the designer on Thursday.",
        "zh": "我们周四要见设计师。",
        "note": "现在进行时在这里表达已安排的将来活动。"
      }
    ]
  },
  "past": {
    "definition": "一般过去时把动作、状态或习惯定位在已经结束的过去时间内。过去时间既可由 yesterday 等表达说明，也可由对话和叙事背景提供。",
    "classification": [
      "过去动作",
      "过去状态和习惯",
      "规则与不规则过去式",
      "did + 原形"
    ],
    "usage": [
      {
        "h": "过去式与过去分词分清",
        "t": "普通肯定句用过去式，如 wrote、went；过去分词 written、gone 通常需要 have 或 be 等配合，不能直接当作一般过去时谓语。be 的过去式为 was/were。"
      },
      {
        "h": "did 承担过去标记",
        "t": "普通实义动词的否定和疑问用 did not + 原形、Did + 主语 + 原形。过去标记已经在 did 上，不应让后面的动词再用过去式。"
      },
      {
        "h": "一次事件和过去习惯都能表达",
        "t": "I visited her last week 叙述一次事件；We walked to school every day as children 描写过去习惯。every day 并不只属于一般现在时。"
      },
      {
        "h": "与现在完成时比较",
        "t": "明确结束的过去时间通常用一般过去时；现在完成时把过去情况同现在联系起来。应先看时间观察角度，不是按中文“了”机械判断。"
      }
    ],
    "pitfalls": [
      {
        "title": "did 后还原",
        "wrong": "Did you saw the notice?",
        "right": "Did you see the notice?",
        "text": "did 已标记过去，see 不能再变为 saw。"
      },
      {
        "title": "过去分词不能直接作一般过去式",
        "wrong": "She written the report yesterday.",
        "right": "She wrote the report yesterday.",
        "text": "wrote 是过去式；written 是过去分词，可用于 has written 等结构。"
      }
    ],
    "examples": [
      {
        "en": "We moved to this town in 2018.",
        "zh": "我们在 2018 年搬到这个镇上。",
        "note": "明确结束的过去时间把搬家定位为过去事件。"
      },
      {
        "en": "As a child, Amir often read under that tree.",
        "zh": "小时候，阿米尔常在那棵树下读书。",
        "note": "过去时间背景下，often 描述过去反复发生的习惯。"
      }
    ]
  },
  "past-cont": {
    "definition": "过去进行时用 was/were + doing，从过去某一时刻或阶段观察当时正在进行的活动。它常铺设叙事背景，与一般过去时的事件相配合。",
    "classification": [
      "过去某时正在进行",
      "过去阶段的临时活动",
      "背景与突发事件",
      "并行过程"
    ],
    "usage": [
      {
        "h": "以过去的观察点为中心",
        "t": "At eight last night 或 when I called 等可提供参照点；进行式说明那时活动已经展开，不直接说明何时开始或是否完成。"
      },
      {
        "h": "背景与事件分工",
        "t": "I was cooking when the alarm rang 中 was cooking 是背景过程，rang 是进入叙事的事件。不是所有含 when 的句子都必须套这一组合。"
      },
      {
        "h": "两个过程可以同时展开",
        "t": "While I was taking notes, she was explaining the diagram 可同时使用两个过去进行结构。while 往往强调延续过程，但连接词本身不能单独决定时态。"
      },
      {
        "h": "与完成形式区分",
        "t": "was working 观察当时正在工作的过程；had been working 则从过去参照点回看此前已持续的工作。"
      }
    ],
    "pitfalls": [
      {
        "title": "主语与 be 的过去式配合",
        "wrong": "I were waiting outside at six.",
        "right": "I was waiting outside at six.",
        "text": "这里是过去事实叙述，I 配 was；虚拟条件中 were 的用法另论。"
      },
      {
        "title": "be 后用 -ing",
        "wrong": "They were watch a film when I arrived.",
        "right": "They were watching a film when I arrived.",
        "text": "过去进行时需要 were + watching。"
      }
    ],
    "examples": [
      {
        "en": "I was cycling home when the rain started.",
        "zh": "开始下雨时，我正骑车回家。",
        "note": "was cycling 提供背景，started 叙述发生的事件。"
      },
      {
        "en": "At that time, the company was developing a new app.",
        "zh": "当时，那家公司正在开发一个新应用。",
        "note": "参照点可以是一个过去阶段，不限于瞬间。"
      }
    ]
  },
  "perfect": {
    "definition": "现在完成时用 have/has + 过去分词，从现在回看过去发生或开始的情况，突出当前结果、至今经历或持续联系。它不是“一般过去时的另一种写法”。",
    "classification": [
      "对现在的结果",
      "截至现在的经历",
      "持续到现在",
      "since / for 与地点表达"
    ],
    "usage": [
      {
        "h": "先判断与现在的联系",
        "t": "I have finished the draft 可用于说明草稿现在可供查看；I finished it yesterday 则把事件放在结束的昨天。是否仍有影响要结合后续语境，不把结果读成永久不变。"
      },
      {
        "h": "持续含义需要持续状态",
        "t": "for 接时长，since 接起点；since 引导起点从句时常用过去时。表达“去世十年”用 has been dead for ten years 等状态，而不是把 die 的瞬间动作持续十年。"
      },
      {
        "h": "经历与去向分清",
        "t": "has been to 常表示去过并回来；has gone to 常表示去了尚未回来；has been in 可表示一直在某地。不同表达关注经历、去向或停留状态。"
      },
      {
        "h": "时间词和地区习惯",
        "t": "already、yet、just 等是常见线索，英美使用有差别。标准教学中，明确结束的过去时间通常配一般过去时，不能仅凭一个副词决定答案。"
      }
    ],
    "pitfalls": [
      {
        "title": "完成结构需要过去分词",
        "wrong": "She has wrote three emails.",
        "right": "She has written three emails.",
        "text": "wrote 为过去式，written 才是本结构所需的过去分词。"
      },
      {
        "title": "since 不直接接一段时长",
        "wrong": "He has lived here since three years.",
        "right": "He has lived here for three years.",
        "text": "three years 是时长，用 for；若用 since，要给起点，如 since 2023。"
      }
    ],
    "examples": [
      {
        "en": "I have misplaced my glasses, so I cannot read the label.",
        "zh": "我把眼镜放得找不到了，所以现在看不清标签。",
        "note": "后半句明确说明过去情况与当前结果的联系。"
      },
      {
        "en": "Nora has lived here since she started university.",
        "zh": "诺拉从上大学起就一直住在这里。",
        "note": "主句用现在完成时表示持续，since 从句提供过去起点。"
      }
    ]
  },
  "perf-cont": {
    "definition": "现在完成进行时用 have/has been + doing，从现在回看此前持续或反复的活动，突出过程、累计时间或眼前痕迹。活动可能仍在继续，也可能刚结束。",
    "classification": [
      "持续至今的过程",
      "近期反复活动",
      "刚结束留下的痕迹",
      "与完成式的比较"
    ],
    "usage": [
      {
        "h": "持续与痕迹都可表达",
        "t": "I have been waiting for an hour 强调等候持续多久；Your hands are dirty. Have you been gardening? 用眼前痕迹推问之前的活动，不能据此断定还在做。"
      },
      {
        "h": "与现在完成时比较重点",
        "t": "I have painted the fence 常突出完成结果；I have been painting the fence 突出过程，不直接保证整面围栏已刷完。数量、次数或明确完成量通常更适合完成式。"
      },
      {
        "h": "结构顺序保持完整",
        "t": "have/has 随主语变化，been 固定保留，后接 -ing 形式。否定放在 have/has 后，疑问把 have/has 提前。"
      },
      {
        "h": "状态动词通常用完成式",
        "t": "表达 know、own 等持续状态，通常用 have known、have owned，而非机械加 been doing。某词能否进行化仍取决于其具体意义。"
      }
    ],
    "pitfalls": [
      {
        "title": "完成进行式不能少 been",
        "wrong": "They have working all morning.",
        "right": "They have been working all morning.",
        "text": "完整结构为 have been + working。"
      },
      {
        "title": "been 后使用 -ing",
        "wrong": "She has been wait for an hour.",
        "right": "She has been waiting for an hour.",
        "text": "这里需要 waiting，而不是原形 wait。"
      }
    ],
    "examples": [
      {
        "en": "We have been testing the new feature all week.",
        "zh": "我们这一周一直在测试新功能。",
        "note": "强调持续或反复进行的测试过程，不保证全部测试已结束。"
      },
      {
        "en": "Your shoes are muddy. Have you been walking by the river?",
        "zh": "你的鞋上都是泥。你刚才一直在河边走吗？",
        "note": "眼前的泥迹与此前一段活动建立联系。"
      }
    ]
  },
  "past-perfect": {
    "definition": "过去完成时用 had + 过去分词，从过去某个参照点回看更早发生或开始的情况。关键是两个时间层的关系，不是动作距现在有多远。",
    "classification": [
      "过去参照点之前完成",
      "过去之前开始的状态",
      "先前计划与语境",
      "与一般过去时比较"
    ],
    "usage": [
      {
        "h": "先找后一个过去参照点",
        "t": "When we arrived, the meeting had ended 中 arrived 是参照事件，had ended 明确会议结束更早。没有过去参照背景，不能仅因“很久以前”就选过去完成时。"
      },
      {
        "h": "before / after 不自动强制完成式",
        "t": "这些连接词本身已能表达先后；是否另用过去完成时取决于是否要强调回看和完成关系。顺序明确的过去叙事也常连续使用一般过去时。"
      },
      {
        "h": "持续到过去的状态",
        "t": "She had known him for years before they worked together 从合作的过去时刻回看相识状态。此处 know 表状态，通常不用进行形式。"
      },
      {
        "h": "未实现含义来自语境",
        "t": "had hoped、had planned 可以说明先前愿望；“后来没实现”常由 but 等后文提供，并不是 had hoped 本身必然表示失败。"
      }
    ],
    "pitfalls": [
      {
        "title": "had 后使用过去分词",
        "wrong": "By the time I arrived, he had went home.",
        "right": "By the time I arrived, he had gone home.",
        "text": "went 是过去式；had 后需要 gone。"
      },
      {
        "title": "不要把原形当分词",
        "wrong": "The train had already leave when we reached the station.",
        "right": "The train had already left when we reached the station.",
        "text": "leave 的过去分词为 left。"
      }
    ],
    "examples": [
      {
        "en": "By the time the guests arrived, we had set the table.",
        "zh": "客人到达时，我们已经摆好餐桌了。",
        "note": "摆餐桌早于客人到达这一过去参照点。"
      },
      {
        "en": "I had hoped to join you, but my flight was cancelled.",
        "zh": "我原本希望与你们会合，但航班取消了。",
        "note": "had hoped 说明先前愿望，后半句交代愿望未实现的原因。"
      }
    ]
  },
  "future": {
    "definition": "英语用 will、be going to、现在形式及完成、进行组合来表达将来。应先确定是预测、临时决定、已有安排，还是站在将来的某个时刻观察过程或完成情况。",
    "classification": [
      "will / be going to",
      "现在进行时与时间表",
      "将来进行 will be doing",
      "将来完成 will have done"
    ],
    "usage": [
      {
        "h": "不同将来表达有不同侧重点",
        "t": "will 常表预测、临时决定或意愿；be going to 常表已有打算、当前迹象；现在进行时常表具体安排。它们有重叠，不能脱离情境硬说某个形式永远只表示一种意义。"
      },
      {
        "h": "将来观察点决定进行或完成",
        "t": "At ten tomorrow I will be travelling 描写那时正在进行的活动；By ten tomorrow I will have arrived 从那时回看此前已完成的到达。by 表示截止点，at 提供观察时刻。"
      },
      {
        "h": "时间表与主从句",
        "t": "The course starts on Monday 可以用现在形式表达时间表。谈将来的时间、真实条件从句通常用现在形式；I wonder when it will start 是宾语从句，不套同一“主将从现”规则。"
      },
      {
        "h": "其他将来结构注意搭配",
        "t": "be about to 表示眼看就要发生，通常不搭配 tomorrow 等较远时间作普通计划；be to 常用于正式安排。情态动词 will 后面始终接原形。"
      }
    ],
    "pitfalls": [
      {
        "title": "will 后不加不定式 to",
        "wrong": "I will to send the file tonight.",
        "right": "I will send the file tonight.",
        "text": "will 是情态助动词，后面直接接 send。"
      },
      {
        "title": "将来完成的助动词顺序",
        "wrong": "By Friday, she will has finished the report.",
        "right": "By Friday, she will have finished the report.",
        "text": "will 后用原形 have，构成 will have + 过去分词。"
      }
    ],
    "examples": [
      {
        "en": "Look at those dark clouds. It is going to rain.",
        "zh": "看那些乌云，快要下雨了。",
        "note": "依据当前迹象作预测。"
      },
      {
        "en": "This time tomorrow, we will be crossing the mountains.",
        "zh": "明天这个时候，我们将正在穿越山区。",
        "note": "以将来某时为观察点，突出活动过程。"
      },
      {
        "en": "By the end of June, I will have completed the course.",
        "zh": "到六月底之前，我将已经完成这门课程。",
        "note": "从六月底这个截止点回看此前完成的情况。"
      }
    ]
  },
  "passive": {
    "definition": "被动语态通常用 be + 过去分词，把动作的承受对象组织为主语。选择被动是为了突出话题、隐藏或省略不重要的执行者，时态等变化主要体现在助动结构中。",
    "classification": [
      "一般时被动",
      "进行时被动 be being done",
      "完成时被动 have been done",
      "情态动词被动",
      "特殊动词结构与状态辨析"
    ],
    "usage": [
      {
        "h": "时态改变助动结构，不改变过去分词",
        "t": "The road is repaired、is being repaired、has been repaired 分别从一般情况、正在进行、完成联系观察修路；repaired 保持过去分词形式，不能把进行时写成 is repairing 来表示路被修。"
      },
      {
        "h": "执行者不必每次出现",
        "t": "需要说明由谁执行可用 by；工具通常另用 with 等。主动转被动还要保留原时间关系、代词格和完整动词搭配，如 looked after 不能漏 after。"
      },
      {
        "h": "并非所有动词都能普通被动化",
        "t": "happen、arrive 等不及物用法通常没有可转为主语的宾语。系动词也不按普通及物动词套 be done。This book sells well 等主动形式可带被动意义，应按实际搭配理解。"
      },
      {
        "h": "特殊结构要保留补足成分",
        "t": "make、see 等部分主动结构省略不定式 to，被动中恢复，如 He was made to wait。双宾语动词的转换受动词习惯限制，不能只交换单词位置。"
      },
      {
        "h": "be + done 也可能描述状态",
        "t": "The door is closed 可以强调关着的状态，也可在具体语境中表达关门的被动动作；要结合 by 短语、事件时间和上下文判断。"
      }
    ],
    "pitfalls": [
      {
        "title": "被动需要过去分词",
        "wrong": "The bridge was build in 2015.",
        "right": "The bridge was built in 2015.",
        "text": "build 的过去分词为 built。"
      },
      {
        "title": "不及物 happen 不这样被动化",
        "wrong": "The accident was happened last night.",
        "right": "The accident happened last night.",
        "text": "happen 在这里不接可被提升为主语的宾语。"
      },
      {
        "title": "保留短语动词的介词",
        "wrong": "The child was looked by her aunt.",
        "right": "The child was looked after by her aunt.",
        "text": "照顾是 look after 的整体搭配，被动不能删去 after。"
      }
    ],
    "examples": [
      {
        "en": "The entrance is being painted, so please use the side door.",
        "zh": "入口正在刷漆，请走侧门。",
        "note": "is being painted 表示正在进行的被动事件。"
      },
      {
        "en": "All the invitations have been sent.",
        "zh": "所有请柬都已寄出。",
        "note": "have been sent 表示与现在有关的完成被动。"
      }
    ]
  },
  "active-voice": {
    "definition": "主动语态按主语与动作或状态的常规关系组织句子；在典型及物动作句中，主语为执行者、宾语为承受者。主动句不一定都含宾语，也不能把主语永远等同于有意志的施事。",
    "classification": [
      "及物动作：主语 + 动词 + 宾语",
      "不及物动作",
      "状态与系表",
      "主动形式及特殊被动理解"
    ],
    "usage": [
      {
        "h": "先看动词的实际句型",
        "t": "The worker fixed the gate 中有宾语，The gate opened 中 open 是不及物用法，没有普通宾语。相同动词可随词义改变结构，不能只按词典里的一个标签判断。"
      },
      {
        "h": "主动语态和时态分别判断",
        "t": "She repairs、repaired、is repairing the bike 都是主动，只是时间和状态不同。不能把进行时里的 be 当成被动标志；还要检查后面是 doing 还是过去分词。"
      },
      {
        "h": "与被动比较信息重点",
        "t": "The technician repaired the screen 先谈技术人员；The screen was repaired 先谈屏幕。两种组织方式适合不同上下文，不能把被动当作一律更高级的写法。"
      },
      {
        "h": "主动形式不总表示主语主动施力",
        "t": "The door opened 或 This fabric washes well 使用主动形式；含义上可描写变化或属性，不必为中文中的“被”强加被动结构。"
      }
    ],
    "pitfalls": [
      {
        "title": "不要把主动谓语拼成 be + 过去式",
        "wrong": "The mechanic was repaired the engine yesterday.",
        "right": "The mechanic repaired the engine yesterday.",
        "text": "要表达修理工主动修发动机，这里直接用 repaired；被动主语则应是 engine。"
      },
      {
        "title": "进行主动需要 doing",
        "wrong": "She is writes a letter now.",
        "right": "She is writing a letter now.",
        "text": "正在写信为 is writing；is 与 writes 不能组成这个谓语。"
      }
    ],
    "examples": [
      {
        "en": "The volunteers delivered the meals before noon.",
        "zh": "志愿者在中午前送到了餐食。",
        "note": "主语 volunteers 执行 deliver，meals 为动作对象。"
      },
      {
        "en": "The door opened slowly.",
        "zh": "门慢慢打开了。",
        "note": "open 在这里是不及物用法，主动句可以没有宾语。"
      }
    ]
  },
  "agreement": {
    "definition": "主谓一致要求限定动词与主语在人称、数等方面配合。先找主语中心词，再判断语法形式、实际意义或特定并列结构，不能让谓语盲目跟随最近的名词。",
    "classification": [
      "语法一致",
      "主语中心词",
      "并列与单个活动",
      "特殊数量结构"
    ],
    "usage": [
      {
        "h": "剥离修饰语再判断",
        "t": "The quality of these products is good 中中心词是 quality，of these products 为修饰部分；with、together with、as well as 等附加成分通常不改变前面主语的数。"
      },
      {
        "h": "单个活动和命题通常按单数",
        "t": "Learning languages takes time、What he said is true 中主语分别是一个活动或命题。并列活动是否作为两个独立项目，要另看结构和语义。"
      },
      {
        "h": "数量表达要找实际中心",
        "t": "a number of students 表示许多学生，通常配复数；the number of students 指学生数量，中心语 number 通常配单数。each/every + 单数名词在逐个意义下配单数。"
      },
      {
        "h": "定语从句也有一致关系",
        "t": "关系词在从句中作主语时，谓语通常与先行词对应，如 the student who works 和 the students who work；不能一见 who 就固定用单数。"
      }
    ],
    "pitfalls": [
      {
        "title": "最近的名词不一定是主语中心",
        "wrong": "The list of names are on the desk.",
        "right": "The list of names is on the desk.",
        "text": "真正中心为单数 list，names 只是 of 短语里的名词。"
      },
      {
        "title": "动名词短语整体作主语",
        "wrong": "Reading these books take time.",
        "right": "Reading these books takes time.",
        "text": "主语是阅读这些书这一活动，不是 books。"
      },
      {
        "title": "区分数量与许多人",
        "wrong": "The number of applicants are increasing.",
        "right": "The number of applicants is increasing.",
        "text": "此处谈申请者的数量，the number 为单数中心。"
      }
    ],
    "examples": [
      {
        "en": "The owner, together with two assistants, is checking the stock.",
        "zh": "店主正和两位助手一起清点库存。",
        "note": "together with 不构成 and 并列主语，谓语看 owner。"
      },
      {
        "en": "A number of windows are open, but the number of open doors is small.",
        "zh": "许多窗户开着，但开着的门数量很少。",
        "note": "两个 number 结构分别谈多个对象和单一数量。"
      }
    ]
  },
  "agreement-meaning": {
    "definition": "意义一致是在特定结构中按主语所指的整体、成员或实际内容选择谓语。它不是“单复数随意选”，而是语法形式、所指意义和语体习惯共同作用。",
    "classification": [
      "总量与独立项目",
      "集体名词",
      "学科与 -s 外形词",
      "分数、百分数与所指内容"
    ],
    "usage": [
      {
        "h": "时间、钱和距离可作一个总量",
        "t": "Ten dollars is enough 讨论一笔总金额；若明确谈多枚独立的硬币或多张钞票，则应按实际名词和语境处理，不能只数表面的 -s。"
      },
      {
        "h": "集体名词兼顾地区和所指",
        "t": "team、family、committee 看作整体时可配单数；强调成员时，英式英语较常见复数，美国英语通常更偏向单数或改说 members。不要把另一地区的规范形式判为错误。"
      },
      {
        "h": "外形复数不等于意义复数",
        "t": "news、mathematics 等通常按单数；the young 指一类人时常配复数。必须识别所指，不能把 the + 形容词的所有用法都当作一类人。"
      },
      {
        "h": "of 后内容决定部分数量结构",
        "t": "Half of the water is gone 与 Half of the students are absent 分别按不可数内容和复数对象配合。百分数本身的大小不能独立决定谓语数。"
      }
    ],
    "pitfalls": [
      {
        "title": "news 通常按单数",
        "wrong": "The news are encouraging.",
        "right": "The news is encouraging.",
        "text": "news 虽以 -s 结尾，但这里是不可数名词。"
      },
      {
        "title": "分数结构看 of 后内容",
        "wrong": "Half of the water are gone.",
        "right": "Half of the water is gone.",
        "text": "所指为不可数 water 的一部分，用单数谓语。"
      }
    ],
    "examples": [
      {
        "en": "Twenty minutes is enough for this task.",
        "zh": "完成这项任务二十分钟就够了。",
        "note": "把时长作为一个整体量来评价。"
      },
      {
        "en": "The committee is considering the proposal.",
        "zh": "委员会正在考虑这项提案。",
        "note": "将委员会作为一个组织整体；若强调成员可用明确的 members 结构。"
      },
      {
        "en": "Sixty percent of the students are taking the test online.",
        "zh": "百分之六十的学生正在网上参加测试。",
        "note": "of 后为复数 students，谓语按复数处理。"
      }
    ]
  },
  "agreement-nearest": {
    "definition": "就近一致用于 either…or…、neither…nor…、not only…but also…等特定并列主语结构，谓语通常与较近的主语配合。它不能推广成“任何句子都看最近的名词”。",
    "classification": [
      "either ... or",
      "neither ... nor",
      "not only ... but also",
      "there be 与改写"
    ],
    "usage": [
      {
        "h": "识别真正的并列主语",
        "t": "Either the teacher or the students are attending 中两项共同占主语位置；谓语通常与靠近的 students 一致。反过来 Either the students or the teacher is attending，则按 teacher。"
      },
      {
        "h": "人称或单复数冲突时可改写",
        "t": "Either you or I am responsible 依通常规则处理，但可能读起来别扭。正式写作可说 Either you are responsible or I am，让配合关系更清楚。"
      },
      {
        "h": "there be 是存在结构",
        "t": "There is a book and two pens on the desk 中常依第一个存在对象处理；表达较复杂时，改成 A book and two pens are on the desk 可以避开不协调。"
      },
      {
        "h": "不要误用到 with 等附加结构",
        "t": "The teacher, as well as the students, is attending 中中心主语仍是 teacher。with、along with、together with 等不是此处的 or 并列规则。"
      }
    ],
    "pitfalls": [
      {
        "title": "并列结构的较近项为复数",
        "wrong": "Neither the manager nor the assistants is available.",
        "right": "Neither the manager nor the assistants are available.",
        "text": "按照本课讲解的正式配合规则，谓语与较近的复数 assistants 一致。"
      },
      {
        "title": "with 后的复数不是并列主语",
        "wrong": "The teacher, together with the students, are waiting.",
        "right": "The teacher, together with the students, is waiting.",
        "text": "together with 是附加部分，谓语看单数 teacher，不采用就近规则。"
      }
    ],
    "examples": [
      {
        "en": "Not only the players but also the coach is nervous.",
        "zh": "不仅队员们紧张，教练也很紧张。",
        "note": "较近的 coach 为单数，通常用 is。"
      },
      {
        "en": "Either the supervisor or the technicians are checking the equipment.",
        "zh": "主管或技术人员正在检查设备。",
        "note": "较近的 technicians 为复数，用 are。"
      }
    ]
  },
  "unreal": {
    "definition": "非真实条件用动词形式表达假设与现实的距离，而非只报告过去事实。先确定条件和结果各自指向现在、过去还是将来，再选形式；主从句时间可能不同。",
    "classification": [
      "现在反事实",
      "过去反事实",
      "较不可能的将来假设",
      "混合条件与含蓄条件"
    ],
    "usage": [
      {
        "h": "现在与过去分别配合",
        "t": "现在的假设常用 if + 过去式，结果用 would/could/might + 原形；过去反事实用 if + had done，结果用 would/could/might have done。过去形式有时表示距离感，不是在叙述过去。"
      },
      {
        "h": "将来假设和真实条件区别",
        "t": "较不可能或设想的将来可用过去式、were to do 或 should do；真实可能用 if + 现在形式配将来结果。先看说话者对可能性的态度，不机械把所有 if 句都改成过去式。"
      },
      {
        "h": "允许混合时间",
        "t": "If I had taken that job, I would live in Berlin now 把过去决定与现在结果联系起来。每一部分都按自己的时间选择，不能只背固定的两栏配对。"
      },
      {
        "h": "含蓄条件与 were 的范围",
        "t": "without、but for、otherwise 可隐含反事实条件。正式假设常用 were；某些非正式场合的 was 也可成立，不能一律判错。would 通常不放进基础反事实 if 从句，但意愿等特殊意义另论。"
      }
    ],
    "pitfalls": [
      {
        "title": "had 后不是普通过去式",
        "wrong": "If I had knew, I would have warned you.",
        "right": "If I had known, I would have warned you.",
        "text": "known 为过去分词，构成过去反事实的 had known。"
      },
      {
        "title": "明确过去结果需要完成形式",
        "wrong": "If I had left earlier, I would catch that train yesterday.",
        "right": "If I had left earlier, I would have caught that train yesterday.",
        "text": "yesterday 将结果明确放在过去，反事实结果用 would have caught。"
      }
    ],
    "examples": [
      {
        "en": "If I knew her address, I could send her a card.",
        "zh": "如果我知道她的地址，就能给她寄张卡片。",
        "note": "knew 表示现在不知道的假设，而非过去知道。"
      },
      {
        "en": "If I had saved the file, I would not have lost my work.",
        "zh": "如果我当时保存了文件，就不会丢掉做好的内容了。",
        "note": "条件和结果都指向未发生的另一种过去。"
      },
      {
        "en": "Without your advice, I would still be unsure.",
        "zh": "没有你的建议，我现在仍会拿不定主意。",
        "note": "without 短语提供含蓄条件，结果指现在。"
      }
    ]
  },
  "subjunctive-suggestions": {
    "definition": "表达建议、要求或命令的 that 从句可以使用动词原形，或 should + 原形。这种形式突出希望实现的内容，不按第三人称单数常规加 -s；是否采用它还取决于词义、语体和地区习惯。",
    "classification": [
      "动词后的要求内容从句",
      "相关名词后的内容从句",
      "必要性评价结构",
      "原形、should 与事实陈述"
    ],
    "usage": [
      {
        "h": "先辨认提出要求的意义",
        "t": "suggest、recommend、demand、request 等表达建议或要求时，可接 that he leave / that he should leave。否定常用 that he not leave / that he should not leave；被动用 that he be informed。"
      },
      {
        "h": "名词和评价结构也可引出",
        "t": "The recommendation is that she rest、the request that he be present、It is essential that everyone be informed 都可使用同类形式，注意从句仍有自己的主语。"
      },
      {
        "h": "suggest 和 insist 要看词义",
        "t": "His expression suggested that he was worried 中 suggest 意为暗示事实；He insisted that he was innocent 中 insist 是坚持事实，不是要求别人去做事，不能机械改为原形。"
      },
      {
        "h": "不要把地区变体简单标错",
        "t": "裸原形在美式英语中很常见，should 形式在英式英语中也常见；部分语境可见陈述式。基础学习应掌握可通用的原形/should 结构，而不是说所有其他形式都必然错误。"
      }
    ],
    "pitfalls": [
      {
        "title": "that 从句不能直接接 to 不定式作谓语",
        "wrong": "They requested that she to attend the meeting.",
        "right": "They requested that she attend the meeting.",
        "text": "从句有主语 she，需要相应谓语；这里用建议型原形 attend，也可用 should attend。"
      },
      {
        "title": "should 后直接接原形",
        "wrong": "The doctor recommended that he should to rest.",
        "right": "The doctor recommended that he should rest.",
        "text": "情态 should 后不加不定式符号 to。"
      }
    ],
    "examples": [
      {
        "en": "The committee recommended that the deadline be extended.",
        "zh": "委员会建议延长截止日期。",
        "note": "deadline 承受延长，建议型被动用 be extended。"
      },
      {
        "en": "It is essential that every visitor should sign in.",
        "zh": "每位访客都必须登记。",
        "note": "should sign in 表达必要要求，should 也可省去而保留 sign。"
      },
      {
        "en": "His silence suggested that he disagreed.",
        "zh": "他的沉默暗示他不同意。",
        "note": "suggested 这里陈述暗示出的事实，使用普通时态。"
      }
    ]
  },
  "wish": {
    "definition": "wish 表达与现实不一致的愿望或对过去的遗憾；从句形式取决于愿望所指时间。if only、as if、would rather、It is time 等也有相关的假设表达，但各自搭配不能混为一条规则。",
    "classification": [
      "wish + 过去形式",
      "wish + had done",
      "wish + would / could",
      "if only 与其他假设结构"
    ],
    "usage": [
      {
        "h": "现在愿望与过去遗憾分开",
        "t": "I wish I knew 指现在不知道；I wish I had known 指对当时不知道的遗憾。正式表达中 be 可用 were，非正式语境也有 was 的用法，不能只按一个形式判对错。"
      },
      {
        "h": "would 期待改变，could 表能力或可能",
        "t": "I wish it would stop raining 希望外界情况改变；I wish I could swim 表示当前不能游泳的愿望。不能把 wish + would 机械用于所有主语自身的状态。"
      },
      {
        "h": "if only 与 as if 的语气",
        "t": "If only I had more time! 表强烈愿望；as if/as though 把情况视为非真实时可用过去形式，但有实际可能时也可用事实时态。"
      },
      {
        "h": "其他结构单独记搭配",
        "t": "would rather + 从句谈现在/将来偏好时常用过去式，谈过去用 had done。It is time that we left 常用过去式，也可用 should leave，后者的 should 通常不省。"
      }
    ],
    "pitfalls": [
      {
        "title": "对过去遗憾使用过去分词",
        "wrong": "I wish I had went to the lecture.",
        "right": "I wish I had gone to the lecture.",
        "text": "had gone 构成对过去未去听讲座的遗憾，went 是过去式。"
      },
      {
        "title": "wish 后保留从句主语和谓语",
        "wrong": "I wish have more time.",
        "right": "I wish I had more time.",
        "text": "这里想表达与现在不同的愿望，需要完整的 I had 从句；wish to have 是另一种结构与语气。"
      }
    ],
    "examples": [
      {
        "en": "I wish I could explain it more clearly.",
        "zh": "我希望自己能把它解释得更清楚。",
        "note": "could 表示与当前能力状况不同的愿望。"
      },
      {
        "en": "If only we had checked the address before leaving!",
        "zh": "要是我们出发前核对过地址就好了！",
        "note": "had checked 表达对过去未做之事的遗憾。"
      },
      {
        "en": "I would rather you stayed until the meeting ended.",
        "zh": "我更希望你待到会议结束。",
        "note": "would rather 后的从句用过去形式表达偏好，不单由词形判断过去事实。"
      }
    ]
  },
  "infinitive": {
    "definition": "不定式是一种非谓语动词结构，常为 to + 原形，也有不带 to 的形式。它可以占主语、宾语、定语、补足语等位置或表达目的，不能一律等同于将来时。",
    "classification": [
      "to do 与原形不定式",
      "名词性位置",
      "定语、目的与补足语",
      "时间、主动与被动形式"
    ],
    "usage": [
      {
        "h": "由位置和搭配决定用途",
        "t": "To learn takes time 作主语；decide to leave 作宾语；a plan to leave 作定语；go out to buy food 表目的。中文含“去”或“做”都不能独立决定英语结构。"
      },
      {
        "h": "逻辑主语与 for / of",
        "t": "I asked her to wait 中 her 是 wait 的逻辑主语。It is hard for me to learn 说明谁学习；It is kind of you to help 评价人的行为品质，常用 of。"
      },
      {
        "h": "形式表示相对时间与语态",
        "t": "to be doing 表进行过程，to have done 常表示早于相关谓语，to be done 表被动；He seems to have left 是“似乎先离开了”，不定式自身不是一般过去时。"
      },
      {
        "h": "省略 to 受具体结构限制",
        "t": "can go、make him go 用原形形式；help him do / help him to do 都可成立。同一结构的并列不定式可共用 to，如 want to sing and dance。"
      }
    ],
    "pitfalls": [
      {
        "title": "decide 后使用不定式",
        "wrong": "She decided studying medicine.",
        "right": "She decided to study medicine.",
        "text": "decide 表决定时通常接 to do；不能套用 enjoy doing 的结构。"
      },
      {
        "title": "不定式原形不能加 -s",
        "wrong": "He hopes to studies abroad.",
        "right": "He hopes to study abroad.",
        "text": "人称和数体现在 hopes 上，不定式 to 后保留原形 study。"
      }
    ],
    "examples": [
      {
        "en": "It takes patience to learn a new language.",
        "zh": "学习一门新语言需要耐心。",
        "note": "it 为形式主语，to learn a new language 是后置的实际内容。"
      },
      {
        "en": "The guests seem to have arrived early.",
        "zh": "客人们似乎已经提前到了。",
        "note": "to have arrived 表到达早于当前的判断。"
      },
      {
        "en": "She brought a notebook to record the discussion.",
        "zh": "她带了本笔记本来记录讨论。",
        "note": "不定式作目的状语，逻辑执行者与主语 she 对应。"
      }
    ]
  },
  "gerund": {
    "definition": "动名词是传统教学中 doing 形式占主语、宾语等名词性位置的用法。整个结构表达活动，同时保留动词带宾语、状语的能力，不能当作失去动词性质的普通名词。",
    "classification": [
      "动名词作主语",
      "动词或介词后的宾语",
      "逻辑主语",
      "完成及被动形式"
    ],
    "usage": [
      {
        "h": "把整个活动当作句子成分",
        "t": "Reading books carefully helps me relax 中 reading 可带宾语 books 和状语 carefully，整个短语作主语，通常用单数谓语 helps。"
      },
      {
        "h": "动词搭配与介词结构",
        "t": "enjoy、avoid、finish、mind 等通常接 doing；介词后需要动词性内容时常用 doing，如 by practising、interested in learning。不能因中文都说“做某事”就随意换 to do。"
      },
      {
        "h": "逻辑主语和语体",
        "t": "Do you mind my opening the window? 用 my 明确谁开窗；宾语位置也常见 me opening，二者有语体差异，不宜把其中一种一律判错。"
      },
      {
        "h": "完成、被动与普通名词对比",
        "t": "having done 强调此前做过，being done 表承受动作，如 dislike being interrupted。reading the report carefully 是动词性结构，the careful reading of the report 则是普通名词结构。"
      }
    ],
    "pitfalls": [
      {
        "title": "enjoy 不接普通 to do 宾语",
        "wrong": "She enjoys to read biographies.",
        "right": "She enjoys reading biographies.",
        "text": "enjoy 这里的动词搭配为 doing。"
      },
      {
        "title": "单个动名词活动通常配单数谓语",
        "wrong": "Swimming every morning keep him fit.",
        "right": "Swimming every morning keeps him fit.",
        "text": "整个活动作单一主语，用 keeps，而非看 morning 的位置猜谓语。"
      }
    ],
    "examples": [
      {
        "en": "Learning a little every day makes a difference.",
        "zh": "每天学一点会带来改变。",
        "note": "动名词短语整体作主语，makes 用单数。"
      },
      {
        "en": "She dislikes being interrupted during practice.",
        "zh": "她不喜欢练习时被打断。",
        "note": "being interrupted 表示她承受打断的动作，是动名词被动形式。"
      }
    ]
  },
  "verb-choice": {
    "definition": "动词后接 to do 还是 doing，首先受搭配限制；两种都能接时，还可能改变意义。不能只用“to do 表将来、doing 表过去”概括所有动词。",
    "classification": [
      "固定搭配",
      "remember / forget",
      "stop / try",
      "regret / mean 与其他动词"
    ],
    "usage": [
      {
        "h": "先区分固定搭配与意义差别",
        "t": "enjoy、finish、avoid 等通常接 doing；hope、decide、plan 等通常接 to do。like、begin 等可接两种形式，是否有意义或语体差别要结合具体用法。"
      },
      {
        "h": "remember 与 forget 看动作是否已发生",
        "t": "remember doing 回忆做过的事；remember to do 记住待办事项。forget to do 常指忘记去做，forget doing 常指忘记做过；这里是特定词义差别，不是普遍时态公式。"
      },
      {
        "h": "stop 和 try 看动作关系",
        "t": "stop doing 为停止当前活动；stop to do 为停下原活动以便去做另一事。try doing 为尝试一个方法，try to do 为努力完成目标，二者可能描述同一场景的不同侧面。"
      },
      {
        "h": "其他常见搭配具体理解",
        "t": "mean doing 表意味着，mean to do 表打算；regret doing 常表后悔已做，regret to inform 常为遗憾告知。need doing 可有被动理解，不能因此把所有 doing 都当被动。"
      }
    ],
    "pitfalls": [
      {
        "title": "避免把所有动词一律配 to do",
        "wrong": "They avoided to discuss the problem.",
        "right": "They avoided discussing the problem.",
        "text": "avoid 通常接 doing。"
      },
      {
        "title": "plan 后不直接用 doing 作此类宾语",
        "wrong": "We plan visiting the museum tomorrow.",
        "right": "We plan to visit the museum tomorrow.",
        "text": "plan 表打算时通常用 plan to do；另有 plan a visit 等名词结构。"
      }
    ],
    "examples": [
      {
        "en": "I remember locking the door, but I cannot remember where I put the key.",
        "zh": "我记得锁过门，但想不起把钥匙放哪儿了。",
        "note": "remember doing 回忆已经发生的动作。"
      },
      {
        "en": "Please remember to lock the door before you leave.",
        "zh": "离开前请记得锁门。",
        "note": "remember to do 指待办事项。"
      },
      {
        "en": "We stopped talking and went outside to get some air.",
        "zh": "我们停止交谈，出去透了透气。",
        "note": "stopped talking 结束当前活动，to get 表另外一个动作的目的。"
      }
    ]
  },
  "object-complement": {
    "definition": "宾语后的动词结构常补充说明该宾语要做、正在做或承受什么动作。先确定前面的动词搭配，再判断逻辑主语、主动被动和动作的整体或过程。",
    "classification": [
      "动词 + 宾语 + to do",
      "使役结构 + 原形",
      "感官动词 + do / doing",
      "宾语 + done"
    ],
    "usage": [
      {
        "h": "ask / tell / want 等常接宾语加 to do",
        "t": "I asked him to wait 中 him 同时是 wait 的逻辑主语。否定常放在不定式前，如 told him not to enter；不是在任意动词后都能添加 sb to do。"
      },
      {
        "h": "make / let / have 的原形结构",
        "t": "make/let/have sb do 常让宾语执行动作；make 的对应被动常恢复 to，如 He was made to wait。help sb do 和 help sb to do 都可接受。"
      },
      {
        "h": "感官动词看整体与过程",
        "t": "see/hear sb do 常关注动作整体或一次完整观察；see/hear sb doing 常关注当时进行中的片段。这是观察角度，不能把 doing 简单解释成“尚未完成”。"
      },
      {
        "h": "done 关注宾语承受或状态",
        "t": "have the bike repaired 通常表示安排修理，find the door locked 描写发现门处于被锁状态。had my bag stolen 也可指遭遇失窃，不一定是主动安排。"
      }
    ],
    "pitfalls": [
      {
        "title": "make 主动结构后不用 to",
        "wrong": "The teacher made us to rewrite the paragraph.",
        "right": "The teacher made us rewrite the paragraph.",
        "text": "主动 make sb do 用原形；若改被动，则可说 We were made to rewrite。"
      },
      {
        "title": "see 主动结构不直接用 sb to do",
        "wrong": "I saw her to cross the road.",
        "right": "I saw her cross the road.",
        "text": "此处可用 see sb do 观察整体，也可用 crossing 突出过程。"
      }
    ],
    "examples": [
      {
        "en": "The guide asked us not to touch the paintings.",
        "zh": "导游让我们不要触摸画作。",
        "note": "not 放在 to touch 前；us 是 touch 的逻辑主语。"
      },
      {
        "en": "I heard someone practising the piano upstairs.",
        "zh": "我听见有人在楼上练钢琴。",
        "note": "practising 突出当时正在进行的过程。"
      },
      {
        "en": "We had the damaged screen replaced.",
        "zh": "我们请人更换了损坏的屏幕。",
        "note": "screen 承受 replace，用过去分词 replaced。"
      }
    ]
  },
  "prep-to": {
    "definition": "to 可能是介词，也可能是不定式符号。介词 to 后接名词性成分，若用动词性内容通常是 doing；不定式 to 后接动词原形。必须结合前面的固定搭配和整个结构判断。",
    "classification": [
      "介词 to + 名词 / 代词 / doing",
      "不定式 to + 原形",
      "be used to 与 used to",
      "固定搭配中的 to"
    ],
    "usage": [
      {
        "h": "先检查可否接名词性内容",
        "t": "look forward to the trip / to it / to travelling 中 to 为介词；want to travel 中 to 引出不定式。这个替换观察可辅助学习，但仍应核实实际词组用法。"
      },
      {
        "h": "常见介词 to 搭配整体记",
        "t": "look forward to、object to、be committed to、be used to 等通常接名词性宾语；不要把 to 从整个搭配中拆出来，直接套“to 后原形”。"
      },
      {
        "h": "三个 used 结构分别理解",
        "t": "used to do 表过去习惯或状态；be used to doing 表习惯于；be used to do 可表示某物被用来做某事，如 A key is used to open the lock。三者不能只凭 used 字样混判。"
      },
      {
        "h": "保持形容词和动词搭配",
        "t": "be ready to do、hope to do 等用不定式；介词后的 not doing 与不定式 not to do 否定位置相近，但后面的动词形式由结构决定。"
      }
    ],
    "pitfalls": [
      {
        "title": "介词 to 后的动词内容用 doing",
        "wrong": "I look forward to see you.",
        "right": "I look forward to seeing you.",
        "text": "look forward to 中 to 为介词。"
      },
      {
        "title": "不定式 to 后用原形",
        "wrong": "She wants to learning French.",
        "right": "She wants to learn French.",
        "text": "want to do 中 to 为不定式符号，不接 learning。"
      }
    ],
    "examples": [
      {
        "en": "The team is committed to reducing waste.",
        "zh": "团队致力于减少浪费。",
        "note": "committed to 中 to 为介词，后接 reducing。"
      },
      {
        "en": "He used to drive to work, but now he is used to taking the train.",
        "zh": "他以前常开车上班，但现在习惯乘火车了。",
        "note": "前者是过去习惯 used to drive，后者是习惯于 be used to taking。"
      }
    ]
  },
  "participles": {
    "definition": "分词可作定语、补足语或状语，把动作、状态和背景压缩进句子。doing、done、having done 等表示与逻辑主语的主动被动及相对时间，不等于现在时、过去时的标签。",
    "classification": [
      "现在分词与过去分词",
      "前置或后置定语",
      "分词状语与逻辑主语",
      "完成及被动形式"
    ],
    "usage": [
      {
        "h": "先找逻辑主语，再判断关系",
        "t": "the worker repairing the roof 中 worker 执行 repair；the roof repaired last month 中 roof 承受 repair。过去分词也可表完成状态，如 fallen leaves，并非一律被动。"
      },
      {
        "h": "定语与谓语要区分",
        "t": "The girl reading by the window is my sister 中 reading 短语修饰 girl，is 是主句限定谓语；不能把修饰语误读成句子已有完整谓语。"
      },
      {
        "h": "普通分词状语通常与主句主语一致",
        "t": "Walking home, I met a neighbour 的步行者是 I。若前后动作执行者不同，应改用完整从句或另有逻辑主语的结构，避免悬垂。"
      },
      {
        "h": "完成与被动形式说明先后",
        "t": "Having finished the report, she left 表先完成后离开；Having been warned, he took extra care 表先受到警告。一般 doing 也可依语境表示原因、伴随、结果，不能只凭词形硬套中文。"
      },
      {
        "h": "和 only to 的结果比较",
        "t": "分词常描写自然伴随的结果，如 He slipped, hurting his ankle；only to find 常突出出乎意料的结果。两者是意义和表达重点的区别，不是任何结果都只能选一种。"
      }
    ],
    "pitfalls": [
      {
        "title": "过去被修建的桥不是主动建造者",
        "wrong": "The bridge building in 1990 is still in use.",
        "right": "The bridge built in 1990 is still in use.",
        "text": "bridge 承受 build，且修建已完成，用 built；being built 可表示正在修建。"
      },
      {
        "title": "完成分词需要过去分词",
        "wrong": "Having finish the task, she went home.",
        "right": "Having finished the task, she went home.",
        "text": "完成结构为 having + 过去分词 finished。"
      },
      {
        "title": "明确步行者，避免悬垂",
        "wrong": "Walking home, the rain started.",
        "right": "While I was walking home, the rain started.",
        "text": "若要表达“我步行回家”，原句却让 rain 接成逻辑主语，完整时间从句更清楚。"
      }
    ],
    "examples": [
      {
        "en": "The documents stored in this folder are confidential.",
        "zh": "存放在这个文件夹里的文件是保密的。",
        "note": "stored in this folder 为过去分词定语，documents 承受存放。"
      },
      {
        "en": "Having checked the figures twice, Mira submitted the report.",
        "zh": "把数字核对两遍后，米拉提交了报告。",
        "note": "完成分词表示核对早于提交，两个动作的逻辑主语均为 Mira。"
      },
      {
        "en": "She sat by the window, reading a travel guide.",
        "zh": "她坐在窗边，读着一本旅行指南。",
        "note": "reading 说明伴随活动，逻辑执行者与主语 she 对应。"
      }
    ]
  },
  "real-if": {
    "definition": "真实条件句把某个可能成立的情况作为主句成立的前提。它可以表达一般规律、未来可能情况，也可以提出建议或要求；不能把所有 if 从句都当作虚拟语气。",
    "classification": [
      "一般规律：if + 现在形式",
      "未来可能条件",
      "条件 + 情态动词或祈使句",
      "unless / as long as / provided that"
    ],
    "usage": [
      {
        "h": "先判断条件关系",
        "t": "If the temperature falls below zero, water freezes. 表示一般规律，两部分都用现在时。If it rains tomorrow, we will stay inside. 表示未来可能条件，主句可用 will，条件从句通常用现在形式。"
      },
      {
        "h": "主句不一定必须用 will",
        "t": "If you need help, call me. 的主句是祈使句；If you finish early, you can leave. 用情态动词表达许可。“主将从现”只是常用概括，不是固定只能填 will 的公式。"
      },
      {
        "h": "按逻辑选择连接词",
        "t": "unless 常表示“除非、如果不”；as long as 表“只要”；provided that 强调明确条件。in case 常表示预先防备某种可能，Take an umbrella in case it rains. 并非等下雨后才拿伞。"
      },
      {
        "h": "区别是否和非真实假设",
        "t": "I wonder if he will join us. 中 if 意为“是否”，引导宾语从句；If I were you… 则表达非真实假设。它们都不能直接套用未来真实条件句的时态组合。"
      }
    ],
    "pitfalls": [
      {
        "title": "普通未来条件中的时态",
        "wrong": "If it will rain tomorrow, we will cancel the picnic.",
        "right": "If it rains tomorrow, we will cancel the picnic.",
        "text": "这里 if 从句表示未来天气这一普通条件，通常用现在形式 rains。will 若另表意愿等独立意义，需要另行判断，不能把所有 if 后的 will 都视为错误。"
      },
      {
        "title": "不要把两个条件连接词叠在一起",
        "wrong": "Unless if you hurry, you will miss the train.",
        "right": "Unless you hurry, you will miss the train.",
        "text": "unless 本身已经建立条件关系，不再接 if；也可按相同意思改为 If you don't hurry…。"
      }
    ],
    "examples": [
      {
        "en": "If you need more time, ask the teacher.",
        "zh": "如果你需要更多时间，就向老师提出。",
        "note": "need 用现在形式；主句 ask 是祈使句。"
      },
      {
        "en": "You can borrow the camera as long as you return it on Monday.",
        "zh": "只要你星期一归还，就可以借用这台相机。",
        "note": "as long as 给出条件；return 用现在形式表达将来归还。"
      }
    ]
  },
  "future-time": {
    "definition": "表达将来时间或真实将来条件时，when、until、as soon as、if 等状语从句通常用现在形式。先确定从句的作用和时间意义，再决定是否适用这一规则。",
    "classification": [
      "将来时间状语从句",
      "真实将来条件从句",
      "先完成：现在完成形式",
      "宾语从句与虚拟条件的边界"
    ],
    "usage": [
      {
        "h": "现在形式表达将来边界",
        "t": "We will start when everyone arrives. 中 arrives 表示尚未发生的到达；until、before、after、as soon as、once 等引导相同意义的时间从句时，也常采用现在形式。"
      },
      {
        "h": "强调完成可用现在完成形式",
        "t": "I'll send the file after I have checked the figures. 用 have checked 突出先核对完成，再发送；并非从句只能使用一般现在时。"
      },
      {
        "h": "从句类别决定规则范围",
        "t": "I don't know when the train will arrive. 中 when 从句是 know 的宾语，询问将来的到达时间，可以用 will。过去叙事中的 When he arrived, we started. 则按过去时间选择时态。"
      },
      {
        "h": "不能机械禁用 will 或 would",
        "t": "真实时间、条件从句通常不以 will 单纯标记将来；但 will 表意愿、坚持等时可能使用。虚拟条件还需按与现实的距离及假设时间处理，不能强制改成现在时。"
      }
    ],
    "pitfalls": [
      {
        "title": "时间从句单纯表示未来时不用重复标记",
        "wrong": "We will leave as soon as the rain will stop.",
        "right": "We will leave as soon as the rain stops.",
        "text": "as soon as 从句给出离开的未来时间条件，通常用 stops 表达将来。"
      },
      {
        "title": "宾语从句保持陈述语序",
        "wrong": "I don't know when will the train arrive.",
        "right": "I don't know when the train will arrive.",
        "text": "这里问的是到达时间，when 从句作宾语，可以保留 will；错误在于把内部语序写成了独立疑问句。"
      }
    ],
    "examples": [
      {
        "en": "Wait here until the guide returns.",
        "zh": "在这里等到导游回来。",
        "note": "主句是祈使句；returns 用现在形式表示将来发生的时间边界。"
      },
      {
        "en": "I'll explain the result when I have checked all the data.",
        "zh": "我核对完所有数据后会解释结果。",
        "note": "have checked 强调核对在解释之前完成。"
      }
    ]
  },
  "time-connectors": {
    "definition": "时间连接词说明两个事件的发生时间、持续期间、先后顺序或终止边界。选择 when、while、until、since 等时，先读清事件关系，再配合相应时态。",
    "classification": [
      "when / while / as：发生时或期间",
      "before / after：先后",
      "until / not…until：终止或起始边界",
      "since：持续情况的起点"
    ],
    "usage": [
      {
        "h": "when、while 和 as 的侧重点",
        "t": "when 可引出一个时刻或事件；while 常引出持续情况；as 常突出同步过程或随着变化。I was reading when the lights went out. 将持续背景与突然事件联系起来，不能机械要求两个动词形式相同。"
      },
      {
        "h": "until 要配合主句的持续意义",
        "t": "We waited until the bus came. 表示等待持续到到车时；We didn't leave until noon. 表示中午之前没有离开，到了这个边界才离开。不要把肯定的持续结构和 not…until 的意义混为一谈。"
      },
      {
        "h": "since 给出起点，for 给出时长",
        "t": "I have lived here since I graduated. 用毕业这一过去事件作起点；for three years 给出持续三年的长度。since 还可表示原因“既然”，要结合两部分逻辑判断。"
      },
      {
        "h": "先后不等于必须用过去完成时",
        "t": "I left after the meeting ended. 已由 after 清楚说明先后，一般过去时可以成立；需要强调过去某参照点之前已完成时，才进一步考虑过去完成时。"
      }
    ],
    "pitfalls": [
      {
        "title": "while 后的持续背景仍需要完整谓语",
        "wrong": "While I reading, the phone rang.",
        "right": "While I was reading, the phone rang.",
        "text": "本句保留了从句主语 I，就需要 was reading 构成完整谓语。省略结构 While reading…另有主语关系条件，不能只删 be 留下 I reading。"
      },
      {
        "title": "起点与时长不能混用",
        "wrong": "I have worked here since three years.",
        "right": "I have worked here for three years.",
        "text": "three years 表时长，用 for；若用 since，应提供起点，如 since 2023 或 since I graduated。"
      }
    ],
    "examples": [
      {
        "en": "While we were preparing dinner, the children were setting the table.",
        "zh": "我们准备晚饭时，孩子们正在摆餐具。",
        "note": "while 强调两段持续活动在时间上重叠。"
      },
      {
        "en": "I didn't understand the rule until she gave me an example.",
        "zh": "直到她给我举了一个例子，我才明白这条规则。",
        "note": "not…until 表示理解发生在例子提供之后这一边界。"
      }
    ]
  },
  "contrast": {
    "definition": "原因、让步和转折表达不同逻辑：原因说明为什么，让步承认阻碍但主句仍成立，转折则把两个同层信息进行对比。连接形式必须与逻辑和后接结构相配。",
    "classification": [
      "原因：because / since / as",
      "让步：although / though / even though",
      "假设让步：even if",
      "并列转折：but / yet；介词结构：despite / in spite of"
    ],
    "usage": [
      {
        "h": "because 与 because of 的后接结构",
        "t": "because 后接含主谓的从句；because of 后接名词性成分，如 because it rained 与 because of the rain。since、as 也可引入背景性理由，但还分别有时间、方式等义项。"
      },
      {
        "h": "让步关系不改变主句仍成立的事实",
        "t": "Although the route was difficult, we finished the walk. 承认路线困难，同时陈述仍完成徒步。even though 常强调已经存在的事实，even if 常突出一种假设，不能只凭中文“即使”互换。"
      },
      {
        "h": "区分从属连接与并列连接",
        "t": "Although she was tired, she continued. 和 She was tired, but she continued. 都能表达相近逻辑；同一对直接对应分句通常不再叠加 although…but。复杂句中不同层级仍可各有连接词。"
      },
      {
        "h": "however 不能单靠逗号连接独立句",
        "t": "but 是并列连词，however 通常是连接性副词。可写 She tried, but she failed. 或 She tried; however, she failed.，需要用句号或分号等处理独立分句边界。"
      }
    ],
    "pitfalls": [
      {
        "title": "because of 后不直接接普通主谓从句",
        "wrong": "We stayed inside because of it was raining.",
        "right": "We stayed inside because it was raining.",
        "text": "保留 it was raining 这个从句时用 because；若保留 because of，可改成 because of the rain。"
      },
      {
        "title": "同一让步关系避免双重连接",
        "wrong": "Although the road was icy, but the bus arrived safely.",
        "right": "Although the road was icy, the bus arrived safely.",
        "text": "although 已经建立让步从属关系，不再用 but 连接同一对分句；也可删 although，保留 but 构成并列转折。"
      },
      {
        "title": "连接性副词不等于并列连词",
        "wrong": "He practised daily, however, he still felt nervous.",
        "right": "He practised daily; however, he still felt nervous.",
        "text": "两边都是独立分句，不能仅用逗号和 however 拼接；也可分成两句。"
      }
    ],
    "examples": [
      {
        "en": "Despite the noise, she completed the report.",
        "zh": "尽管很吵，她还是完成了报告。",
        "note": "despite 是介词，后接名词短语 the noise。"
      },
      {
        "en": "Even if the weather changes, we can continue indoors.",
        "zh": "即使天气变化，我们也可以在室内继续。",
        "note": "even if 引入假设的阻碍，主句给出仍可实行的方案。"
      }
    ]
  },
  "purpose-result": {
    "definition": "目的说明行动想达到的目标，目标未必实现；结果说明某种情况造成了什么后果。理解意图与事实结果的区别后，再选择 to do、so that、so…that 或 such…that。",
    "classification": [
      "目的：to do / in order to do",
      "目的从句：so that / in order that",
      "结果：so + 形容词或副词 + that",
      "结果：such + 名词性部分 + that"
    ],
    "usage": [
      {
        "h": "目的从句可以明确两层动作主体",
        "t": "She spoke slowly so that the visitors could understand. 中说话者与理解者不同，用完整从句保留 visitors；主语关系适合时，目的可简化为不定式，如 He left early to catch the train。"
      },
      {
        "h": "so 与 such 修饰的中心不同",
        "t": "so 修饰形容词、副词，如 so useful、so carefully；such 修饰名词性部分，如 such a useful guide、such good advice。such 后若是单数可数名词，通常仍需 a 或 an。"
      },
      {
        "h": "数量结构另看 many、much、few、little",
        "t": "可说 so many people that…、so much work that…、so few seats that…。这里 so 修饰数量程度，不要仅看到后面有名词就全部改为 such。"
      },
      {
        "h": "so that 也可能表达结果",
        "t": "目的关系回答“为了使什么成为可能”，结果关系回答“导致了什么”。The bridge was closed, so that we had to turn back. 表结果；是否有情态动词只是线索，最终应结合行动意图与事实关系。"
      }
    ],
    "pitfalls": [
      {
        "title": "单数可数名词短语不能漏冠词",
        "wrong": "It was such useful book that I read it twice.",
        "right": "It was such a useful book that I read it twice.",
        "text": "such 修饰 a useful book；book 是单数可数名词，此处不能漏 a。"
      },
      {
        "title": "不要把 so 直接套在普通名词前",
        "wrong": "The speaker gave so clear instructions that everyone understood.",
        "right": "The speaker gave such clear instructions that everyone understood.",
        "text": "这里中心是复数名词 instructions，用 such clear instructions；so clear 可直接修饰表语形容词，但不适用于这个名词短语结构。"
      }
    ],
    "examples": [
      {
        "en": "I wrote the address down so that I wouldn't forget it.",
        "zh": "我把地址写下来，以免忘记。",
        "note": "从句说明记下地址的目的，wouldn't 配合过去叙述。"
      },
      {
        "en": "The instructions were so clear that everyone finished the task.",
        "zh": "说明非常清楚，所有人都完成了任务。",
        "note": "so 修饰形容词 clear，that 从句说明实际结果。"
      }
    ]
  },
  "relative-pronouns": {
    "definition": "关系代词把先行对象与定语从句中的主语、宾语或所属位置联系起来。选 who、whom、which、that、whose 时，要同时看指代对象、内部作用和从句类型。",
    "classification": [
      "who / whom：通常指人",
      "which / that：常指物，that 也可指人",
      "whose + 名词：表示所属",
      "主语、宾语与前置介词后的限制"
    ],
    "usage": [
      {
        "h": "先看关系词在从句中做什么",
        "t": "the researcher who called 中 who 作 called 的主语；the article which I read 中 which 作 read 的宾语。关系词已经承担这个角色，不能再添加一个重复的 he 或 it。"
      },
      {
        "h": "不要把 whom 当作 who 的任意替换",
        "t": "whom 主要作宾语，正式的前置介词后常用 whom，如 the colleague with whom I worked。口语中宾语 who 很常见，但作从句主语时仍用 who，不能用 whom。"
      },
      {
        "h": "that 与 which 不是处处互换",
        "t": "限制性从句指物时许多场合两者都可用；非限制性从句和前置介词后通常用 which，不用 that。最高级、序数词等语境中常优先用 that，但不应把使用倾向全说成绝对禁令。"
      },
      {
        "h": "whose 可以指人，也可以指物",
        "t": "a scientist whose work changed medicine 与 a house whose roof is red 都成立。whose 后还需要名词，与该名词一起构成从句内部的相应成分。"
      }
    ],
    "pitfalls": [
      {
        "title": "作主语时不用 whom",
        "wrong": "The woman whom lives next door is a doctor.",
        "right": "The woman who lives next door is a doctor.",
        "text": "关系词本身作 lives 的主语，因此用 who；whom 主要用于宾语位置。"
      },
      {
        "title": "不要重复关系词已承担的宾语",
        "wrong": "The film that we watched it was excellent.",
        "right": "The film that we watched was excellent.",
        "text": "that 已对应 watched 的宾语 film，再加 it 会重复同一角色。"
      },
      {
        "title": "前置介词后不用 that",
        "wrong": "This is the tool with that I opened the box.",
        "right": "This is the tool with which I opened the box.",
        "text": "介词 with 前置后，指物用 which；也可把介词放回句末，使用 the tool that I opened the box with。"
      }
    ],
    "examples": [
      {
        "en": "The engineer who designed the bridge will speak tomorrow.",
        "zh": "设计这座桥的工程师明天将发表演讲。",
        "note": "who 指 engineer，在从句中作 designed 的主语。"
      },
      {
        "en": "We restored a house whose windows faced the sea.",
        "zh": "我们修复了一栋窗户朝向大海的房子。",
        "note": "whose 指物的所属关系；从句主语是 whose windows，谓语用 faced。"
      }
    ]
  },
  "relative-adverbs": {
    "definition": "when、where、why 在定语从句中分别承担时间、地点或原因状语。whose 属于表示所属关系的关系代词，应与关系副词区别；选择关系词不能只看先行词的中文含义。",
    "classification": [
      "when：时间状语",
      "where：地点或情境状语",
      "why：原因状语，常对应 reason",
      "whose：关系代词，后接名词"
    ],
    "usage": [
      {
        "h": "同一个地点先行词可以选不同关系词",
        "t": "the city which we visited 中 visited 需要宾语，用 which 或 that；the city where we stayed 中 where 提供停留地点。先行词都叫 city，不代表后面一律用 where。"
      },
      {
        "h": "介词 + which 要按实际关系选择",
        "t": "the day when we met 可以对应 on which；the room where we study 可以对应 in which。介词由真实的时间、地点关系和动词搭配决定，不能全部机械替成 in which。"
      },
      {
        "h": "抽象情境名词也要看从句角色",
        "t": "a situation where everyone benefits 中 where 说明情境；a situation that worried everyone 中 that 作 worried 的主语。case、stage、point 等名词之后也应使用相同分析方法。"
      },
      {
        "h": "先确定从句依附于什么",
        "t": "the place where she works 是修饰 place 的定语从句；I know where she works 中整个 where 从句作 know 的宾语；Stay where you are. 则提供地点说明。不能只凭 where 给从句分类。"
      }
    ],
    "pitfalls": [
      {
        "title": "地点名词作宾语时不用 where 代替",
        "wrong": "This is the village where we visited last summer.",
        "right": "This is the village which we visited last summer.",
        "text": "visited 是及物用法，需要 village 这一宾语；用 which 或 that，不能让 where 代替名词宾语。"
      },
      {
        "title": "whose 后要有它限定的名词",
        "wrong": "The house whose is red belongs to Anna.",
        "right": "The house whose roof is red belongs to Anna.",
        "text": "whose 表所属，应限定 roof 等名词；如果想说整栋房子是红色，应改为 The house which is red…。"
      }
    ],
    "examples": [
      {
        "en": "I remember the afternoon when we first discussed the plan.",
        "zh": "我记得我们第一次讨论这个计划的那个下午。",
        "note": "when 对应在那个下午这一时间关系，可改为 on which。"
      },
      {
        "en": "The laboratory where she works is being renovated.",
        "zh": "她工作的那间实验室正在翻修。",
        "note": "where 作 works 的地点状语，可对应 in which。"
      }
    ]
  },
  "relative-omit": {
    "definition": "关系词能否省略，要看从句是否限制性、关系词承担什么角色；从句能否简化为分词，还要检查逻辑主语、主动被动以及时态和情态信息是否改变。",
    "classification": [
      "限制性从句的宾语关系词省略",
      "主语关系词通常不可直接删除",
      "非限制性从句通常保留关系词",
      "主动分词与被动分词简化"
    ],
    "usage": [
      {
        "h": "限制性宾语关系词常可省略",
        "t": "The report that I finished is on the desk. 可写 The report I finished…。其中 I 是从句主语，report 对应 finished 的宾语；省略后仍保留清楚的从属结构。"
      },
      {
        "h": "作主语时不能只删除关系词",
        "t": "the student who won 中 who 作 won 的主语，直接删去会使从句缺主语并造成谓语连接问题。the student who is waiting 可按合适条件简化为 the student waiting，而不是留下 is waiting。"
      },
      {
        "h": "分词简化必须保持主动被动",
        "t": "the people who are waiting 可简化为 the people waiting；the files that were deleted 可简化为 the files deleted。分词的逻辑主语应与被修饰对象一致，不能随意把主动改成被动。"
      },
      {
        "h": "时态、情态与语境可能限制简化",
        "t": "分词短语本身不直接保留完整时态和情态信息。the person who will manage the project、the person who can solve it 等不能仅凭表面词形机械改成 -ing；需要核对时间、能力与原意。"
      }
    ],
    "pitfalls": [
      {
        "title": "不能只省略从句主语 who",
        "wrong": "The student won the prize is my friend.",
        "right": "The student who won the prize is my friend.",
        "text": "won the prize 需要 who 承担从句主语；这里没有适合直接省去 who 的宾语关系。"
      },
      {
        "title": "被动定语不能误改为主动分词",
        "wrong": "The letter writing by the manager was sent yesterday.",
        "right": "The letter written by the manager was sent yesterday.",
        "text": "letter 是写这一动作的承受者，简化后用过去分词 written；writing 会错误地表示信在执行写的动作。"
      }
    ],
    "examples": [
      {
        "en": "The documentary we watched last night is available online.",
        "zh": "我们昨晚看的纪录片可以在网上找到。",
        "note": "省略了作 watched 宾语的 which 或 that，从句主语 we 保留。"
      },
      {
        "en": "The students waiting outside are taking part in the competition.",
        "zh": "在外面等候的学生正在参加比赛。",
        "note": "waiting outside 可对应 who are waiting outside，与 students 构成主动关系。"
      }
    ]
  },
  "relative-extra": {
    "definition": "限制性定语从句帮助确定是哪一个对象；非限制性定语从句给已确定的对象补充信息，通常以逗号隔开。逗号可能改变指称范围，不是可随意添加的装饰。",
    "classification": [
      "限制范围：通常无逗号",
      "补充说明：通常用逗号",
      "which 指代前面整件事",
      "as 的“正如”补充意义"
    ],
    "usage": [
      {
        "h": "先判断内容是否用于筛选对象",
        "t": "Students who need help can stay. 只指需要帮助的学生；My sister, who lives in Chengdu, is a doctor. 是对已确定的姐姐或妹妹补充居住信息。是否能删掉不是唯一标准，还要保持原来的指称范围。"
      },
      {
        "h": "非限制性从句的关系词限制",
        "t": "非限制性从句通常不用 that，作宾语的关系词也不能像许多限制性从句那样省去。可用 who、whom、which、whose、when、where 等，但仍须满足内部成分和语义要求。"
      },
      {
        "h": "which 可指名词，也可指整件事",
        "t": "He bought a camera, which was expensive. 中 which 指 camera；He missed the flight, which upset him. 中 which 指错过航班这件事。要从后续谓语意义判断指代内容。"
      },
      {
        "h": "as 与 which 的位置和意义不同",
        "t": "As we expected, the team won. 中 as 常含“正如”意义，可置句首；The team won, which pleased us. 中 which 表补充评价，通常后置。不能把所有两者用法当作相同。"
      }
    ],
    "pitfalls": [
      {
        "title": "补充说明不用 that 引导",
        "wrong": "Anna, that lives next door, is a designer.",
        "right": "Anna, who lives next door, is a designer.",
        "text": "逗号标明这是非限制性补充，指人用 who；that 通常不用于这种从句。"
      },
      {
        "title": "非限制性宾语关系词不能任意省略",
        "wrong": "This camera, I bought last month, works well.",
        "right": "This camera, which I bought last month, works well.",
        "text": "这里以逗号构成非限制性从句，需要保留 which。若希望省略，应重新组织成合适的限制性结构，而不是只留下两侧逗号。"
      }
    ],
    "examples": [
      {
        "en": "The students who submitted their work early received feedback first.",
        "zh": "提前交作业的学生先收到了反馈。",
        "note": "从句筛选学生范围，通常不用逗号。"
      },
      {
        "en": "The train was cancelled, which forced us to change our plans.",
        "zh": "火车被取消了，这迫使我们改变了计划。",
        "note": "which 指前面火车取消这件事，不是单独指 train。"
      }
    ]
  },
  "objects": {
    "definition": "宾语从句整体充当动词或介词后的名词性宾语，表达所知、所想、所问的内容。连接词既要符合意义，也要满足从句内部结构；从句通常使用陈述语序。",
    "classification": [
      "that：陈述内容",
      "whether / if：是否",
      "连接代词：what / who / which 等",
      "连接副词：when / where / why / how 等"
    ],
    "usage": [
      {
        "h": "that 与 what 的作用不同",
        "t": "I know that she left. 中 that 只引入陈述；I know what she bought. 中 what 还作 bought 的宾语。主谓宾已成立也可能需要 when、why 等表达时间或原因，不能把“不缺宾语”等同于只能选 that。"
      },
      {
        "h": "是否从句不是条件从句",
        "t": "I don't know if he will come. 中 if 表“是否”，可以按将来时间用 will；介词后、whether to do、whether or not 等结构通常用 whether，如 It depends on whether he agrees。"
      },
      {
        "h": "从句保持陈述语序",
        "t": "Can you tell me where the station is? 的外层是疑问句，里面仍是 the station is。若连接代词本身作主语，如 who called，则不额外添加一个主语。"
      },
      {
        "h": "时态后移要结合真实时间",
        "t": "He said he was tired. 常随过去主句后移；主句现在时则按从句实际时间选择。客观真理或仍然有效的事实可依语境保留现在时，不能说过去主句后绝对不准有现在时。"
      }
    ],
    "pitfalls": [
      {
        "title": "嵌入的疑问内容不用独立疑问语序",
        "wrong": "Do you know where does he work?",
        "right": "Do you know where he works?",
        "text": "宾语从句用陈述语序，去掉从句中的提问助动词 does，实义动词按 he 使用 works。"
      },
      {
        "title": "what 要有可承担的内部角色",
        "wrong": "I believe what she is honest.",
        "right": "I believe that she is honest.",
        "text": "she is honest 已是完整陈述，缺的是内容连接，不是名词性成分，因此用 that。"
      },
      {
        "title": "介词后表是否通常用 whether",
        "wrong": "Our decision depends on if the weather improves.",
        "right": "Our decision depends on whether the weather improves.",
        "text": "从句直接作介词 on 的宾语，标准教学中用 whether 引出是否这一问题。"
      }
    ],
    "examples": [
      {
        "en": "I wonder why the meeting was postponed.",
        "zh": "我想知道会议为什么被推迟。",
        "note": "why 作原因状语；the meeting was postponed 保持陈述语序。"
      },
      {
        "en": "She asked whether we had checked the figures.",
        "zh": "她问我们是否已经核对了数字。",
        "note": "whether 表是否；had checked 说明核对在过去提问之前是否完成。"
      }
    ]
  },
  "subject-clause": {
    "definition": "主语从句是整体充当主句主语的分句，表达主句要判断、评价或叙述的内容。较长从句常后移，用 it 先占主语位置，使句子更均衡。",
    "classification": [
      "that 陈述内容作主语",
      "whether 表是否",
      "what / who 等兼作内部成分",
      "形式主语 it + 后置从句"
    ],
    "usage": [
      {
        "h": "按整个从句识别主语",
        "t": "What she said surprised everyone. 中 What she said 整体是 surprised 的主语，what 又在从句内部作 said 的宾语。两层句子成分要分别判断。"
      },
      {
        "h": "句首 that 与 whether 不随意省换",
        "t": "That the plan failed surprised us. 的句首 that 通常不可省；Whether the plan will work is unclear. 表是否，句首位置通常不用 if 代替 whether。"
      },
      {
        "h": "形式主语 it 先占位，内容后置",
        "t": "It is clear that the data are incomplete. 中 it 不指具体物品，而是占据主语位置；that 从句给出被评价的内容。不能把后置从句误认成 clear 这个形容词本身。"
      },
      {
        "h": "数和语气要结合结构",
        "t": "单个命题式主语从句通常配单数谓语，如 What she said is true.；What we need are books. 可按复数内容配合。必要、建议等结构可用 should + 原形或原形，但不是所有主语从句都用虚拟。"
      }
    ],
    "pitfalls": [
      {
        "title": "句首陈述内容的连接词通常不能漏掉",
        "wrong": "He refused the offer surprised us.",
        "right": "That he refused the offer surprised us.",
        "text": "He refused the offer 是完整分句，要整体作主语时需用 that 建立从属关系；否则 refused 与 surprised 缺少清楚连接。"
      },
      {
        "title": "句首表是否通常不用 if",
        "wrong": "If the museum will reopen is still unknown.",
        "right": "Whether the museum will reopen is still unknown.",
        "text": "这里不是“如果”的条件，而是把“博物馆是否重新开放”整体作主语，句首用 whether。"
      }
    ],
    "examples": [
      {
        "en": "What the team needs is more time.",
        "zh": "团队需要的是更多时间。",
        "note": "what 在 needs 后作宾语；整个 what 从句作主句主语。"
      },
      {
        "en": "It is surprising that nobody noticed the mistake.",
        "zh": "竟然没有人注意到这个错误，真令人惊讶。",
        "note": "it 为形式主语，后置 that 从句提供真正被评价的内容。"
      }
    ]
  },
  "predicative": {
    "definition": "表语从句位于系动词之后，整体说明主语的内容、问题或情况。判断时先确认前面的动词在这里承担连接主语与说明内容的系动词作用。",
    "classification": [
      "that：陈述内容",
      "whether：是否问题",
      "what / why / how 等连接词",
      "because / as if / as though"
    ],
    "usage": [
      {
        "h": "从主语所需的说明内容选连接词",
        "t": "The problem is that we have no spare parts. 陈述问题内容；The question is whether we should wait. 提出是否问题。表语位置表达是否通常用 whether，不用 if。"
      },
      {
        "h": "what 与 that 仍看内部成分",
        "t": "This is what I need. 中 what 作 need 的宾语；The fact is that she left. 中 she left 已是完整陈述，that 不再承担内部主语或宾语。"
      },
      {
        "h": "区分原因内容和原因说明",
        "t": "The reason is that the road was closed. 用 that 说明 reason 的具体内容；That's because the road was closed. 则直接解释前述情况为什么发生。不能因为两句中文都含“因为”就混套结构。"
      },
      {
        "h": "as if 是否虚拟取决于判断",
        "t": "It looks as if it is going to rain. 是有依据的印象，可以用常规时态；He talks as if he knew everything. 则可用过去形式表达与事实有距离，并非所有 as if 后都必须虚拟。"
      }
    ],
    "pitfalls": [
      {
        "title": "表语从句中的问题使用陈述语序",
        "wrong": "The question is whether should we postpone the trip.",
        "right": "The question is whether we should postpone the trip.",
        "text": "whether 引出的是否问题整体作表语，从句内部保持 we should postpone 的陈述语序；不写成独立问句 should we…。"
      },
      {
        "title": "完整陈述不需要 what 代替名词成分",
        "wrong": "The fact is what he has already left.",
        "right": "The fact is that he has already left.",
        "text": "he has already left 不缺主语或宾语，这里应由 that 引出事实内容，而不是使用需要承担成分的 what。"
      }
    ],
    "examples": [
      {
        "en": "The difficulty is that we cannot contact the supplier.",
        "zh": "困难在于我们联系不上供应商。",
        "note": "that 从句整体作表语，解释主语 difficulty 的内容。"
      },
      {
        "en": "That is why we changed the schedule.",
        "zh": "那就是我们调整日程的原因。",
        "note": "why 作 changed 所在从句的原因状语，整个从句说明 That。"
      }
    ]
  },
  "appositive": {
    "definition": "同位语说明同一个对象或内容；同位语从句进一步解释 fact、news、idea、question 等抽象名词包含的具体陈述或问题。它与定语从句的区别在于“解释内容”而非“限定哪一个”。",
    "classification": [
      "名词性同位语",
      "that 陈述内容从句",
      "whether 表是否的内容从句",
      "疑问词引出的具体问题"
    ],
    "usage": [
      {
        "h": "先确认名词是否容纳内容说明",
        "t": "the news that the team had won 表示“团队获胜这一消息”。fact、belief、hope、suggestion、question 等可按意义带内容从句，不是任何名词后都能直接接 that 这样说明内容。"
      },
      {
        "h": "与定语从句比较 that 的内部作用",
        "t": "the news that he told me 中 that 作 told 的宾语，属于定语从句；the news that he had won 中 that 不作从句成分，只引出消息内容，是同位内容从句。"
      },
      {
        "h": "是否和疑问内容按名词意义选连接词",
        "t": "the question whether we should stay 表是否；the question how we can solve it 表解决方式。直接解释名词的是否从句通常用 whether，不能照搬普通动词宾语从句中 if 的用法。"
      },
      {
        "h": "位置与语气还会变化",
        "t": "The news came that the bridge had reopened. 中内容从句可因句子安排后置。suggestion、demand 等表达建议或要求时，其内容还可用 should + 原形或原形，需区别普通事实陈述。"
      }
    ],
    "pitfalls": [
      {
        "title": "说明完整事实用 that，不用占成分的 what",
        "wrong": "We heard the news what the bridge had reopened.",
        "right": "We heard the news that the bridge had reopened.",
        "text": "the bridge had reopened 是完整陈述，用 that 引出消息内容；what 还应在从句内部承担名词性成分，在这里没有相应位置。"
      },
      {
        "title": "名词后的问题仍保持陈述语序",
        "wrong": "The question whether should we stay remains unanswered.",
        "right": "The question whether we should stay remains unanswered.",
        "text": "whether 从句解释 question 的具体内容，内部采用 we should stay 的陈述语序，而不是独立问句语序。"
      }
    ],
    "examples": [
      {
        "en": "The news that the missing hikers were safe brought relief.",
        "zh": "失踪的徒步者安然无恙这一消息让大家松了一口气。",
        "note": "that 不作从句内部成分，只说明 news 的内容。"
      },
      {
        "en": "We discussed the question whether the experiment should continue.",
        "zh": "我们讨论了实验是否应继续这个问题。",
        "note": "whether 从句解释 question 具体问的是什么。"
      }
    ]
  },
  "inversion": {
    "definition": "倒装是在特定结构中把整个谓语或助动词等移到主语前。它可服务于地点引入、强调或省略 if 的条件表达；先还原普通语序，再判断倒装类型和适用条件。",
    "classification": [
      "完全倒装：整个谓语前置",
      "部分倒装：助动词、情态动词或 be 前置",
      "虚拟条件：had / were / should 前置",
      "表语前置的让步结构"
    ],
    "usage": [
      {
        "h": "完全倒装与部分倒装外形不同",
        "t": "Here comes the bus. 把整个 comes 放到名词主语前；Never have I seen it. 只把完成式助动词 have 前置，seen 留在主语后。不能把所有前置结构都理解为整组动词移到句首。"
      },
      {
        "h": "检查触发成分和它修饰的对象",
        "t": "Only then did I understand. 的 only 修饰状语，触发部分倒装；Only Anna understood. 的 only 修饰主语，不因此倒装。前置条件或时间从句内部常仍保持普通语序。"
      },
      {
        "h": "地点前置与代词主语有区别",
        "t": "Here comes the bus. 的主语是名词；Here it comes. 的主语是人称代词，通常不写成 Here comes it。完全倒装还受动词、信息安排和语体限制，不是任意地点状语前置都必须倒装。"
      },
      {
        "h": "条件倒装需要特定动词形式",
        "t": "Had I known… 对应 If I had known…；Were I you… 对应 If I were you…；Should you need help… 对应 If you should need help…。不能删除 if 后随意把任何实义动词提前。"
      }
    ],
    "pitfalls": [
      {
        "title": "部分倒装中的实义动词恢复原形",
        "wrong": "Only then did I understood the problem.",
        "right": "Only then did I understand the problem.",
        "text": "过去时已由 did 承担，后面的实义动词用原形 understand。"
      },
      {
        "title": "only 修饰主语不要求增加倒装助动词",
        "wrong": "Only Anna did knew the answer yesterday.",
        "right": "Only Anna knew the answer yesterday.",
        "text": "only 限定的是主语 Anna，不因它而倒装；原句还把 did 与过去式 knew 重复使用。若另用 did know 表示重读强调，它是另一种合法的强调结构。"
      }
    ],
    "examples": [
      {
        "en": "At the entrance stood a security guard.",
        "zh": "入口处站着一名保安。",
        "note": "地点短语前置后，整个谓语 stood 位于名词主语前，为完全倒装。"
      },
      {
        "en": "Not until the test ended did we discuss the answers.",
        "zh": "直到测试结束，我们才讨论答案。",
        "note": "not until 引出前置时间条件，倒装发生在主句 did we discuss。"
      }
    ]
  },
  "inversion-full": {
    "definition": "完全倒装把整个谓语放在主语前，常见于 here、there、地点或方向表达引出的呈现结构。它常用于引入新的名词主语，不能把任意语序调整都当作完全倒装。",
    "classification": [
      "here / there 引入事件",
      "地点短语前置",
      "方向副词前置",
      "人称代词主语通常保持正常语序"
    ],
    "usage": [
      {
        "h": "用名词主语呈现到来或位置",
        "t": "Here comes the bus.、On the wall hangs a painting. 都把谓语整体置于名词主语前。常用 come、go、stand、sit、lie 等符合位置或移动意义的动词。"
      },
      {
        "h": "代词主语通常不采用这种倒装",
        "t": "Here he comes.、There it goes. 中主语已经是已知的人称代词，通常仍放在谓语前。这与呈现新名词对象的信息安排有关。"
      },
      {
        "h": "谓语的数仍与真正主语一致",
        "t": "Here comes the train. 用单数 comes；Here come the trains. 用复数 come。不要因句首是 here 或地点短语就误判主语。"
      },
      {
        "h": "位置前置不等于一定必须倒装",
        "t": "In this city, many people cycle to work. 是普通地点状语加常规语序，完全正确。是否采用倒装还取决于谓语类型、主语信息和叙述风格，不能机械地把所有地点开头句子改成倒装。"
      }
    ],
    "pitfalls": [
      {
        "title": "人称代词通常不放到这种倒装谓语后",
        "wrong": "Here comes he.",
        "right": "Here he comes.",
        "text": "he 是人称代词，这类 here 引出的呈现表达通常保留主语在谓语前。"
      },
      {
        "title": "前置地点不会改变主谓一致",
        "wrong": "On the desk lies three old maps.",
        "right": "On the desk lie three old maps.",
        "text": "真正主语 three old maps 为复数，谓语应为 lie；On the desk 只是地点短语。"
      }
    ],
    "examples": [
      {
        "en": "On the hill stands an ancient observatory.",
        "zh": "山上矗立着一座古老的天文台。",
        "note": "stands 整体前置；真正主语是单数 an ancient observatory。"
      },
      {
        "en": "Here they come.",
        "zh": "他们来了。",
        "note": "人称代词 they 保持在 come 前，不采用 Here come they。"
      }
    ]
  },
  "inversion-partial": {
    "definition": "部分倒装通常把助动词、情态动词或 be 移到主语前，实义动词的其余部分留在主语后。常由句首否定性状语、only + 状语及表示“也如此”的结构触发。",
    "classification": [
      "never / rarely / little 等否定性状语",
      "only + 状语或状语从句",
      "not until / not only 等前置结构",
      "so / neither / nor 表示也如此"
    ],
    "usage": [
      {
        "h": "有助动词先前移，没有时借助 do",
        "t": "Never have I seen such a storm. 前移已有的 have；Rarely does she complain. 在一般现在时中借助 does，complain 保持原形。情态动词如 can 也可直接前移。"
      },
      {
        "h": "only 必须修饰状语才按本规则倒装",
        "t": "Only after the call did we understand. 与 Only when she explained it did we understand. 都在主句倒装；Only our guide knew. 中 only 修饰主语，不触发这一规则。"
      },
      {
        "h": "倒装不自动传入前面的从句",
        "t": "Not until the lights went out did we stop. 中 until 从句 the lights went out 保持常规语序，主句才是 did we stop。不要把否定词一前置就让两层同时倒装。"
      },
      {
        "h": "分清“也如此”和“确实如此”",
        "t": "She can swim. So can I. 表示我也会；So she can. 在特定语境表示她确实会。否定情况也适用 neither 或 nor，如 He didn't know. Neither did I。"
      }
    ],
    "pitfalls": [
      {
        "title": "否定性状语前置后补足倒装形式",
        "wrong": "Never I have seen such a clear night.",
        "right": "Never have I seen such a clear night.",
        "text": "never 前置作否定性状语，完成式助动词 have 需要移到主语 I 前。"
      },
      {
        "title": "倒装位置在主句，不在 only when 从句",
        "wrong": "Only when did she explain it we understood.",
        "right": "Only when she explained it did we understand.",
        "text": "when 从句内部保持 she explained；主句使用 did we understand，understand 用原形。"
      }
    ],
    "examples": [
      {
        "en": "Under no circumstances should you share this password.",
        "zh": "在任何情况下你都不应分享这个密码。",
        "note": "否定性状语前置，情态动词 should 位于主语前。"
      },
      {
        "en": "Only after checking the figures did she approve the report.",
        "zh": "她核对数字之后才批准这份报告。",
        "note": "only 修饰时间状语，主句借助 did 部分倒装。"
      }
    ]
  },
  "inversion-conditional": {
    "definition": "在特定假设条件结构中，可以省略 if，并把 had、were 或 should 移到主语前。倒装只改变条件表达形式，不会取消假设的时间关系或自动改写主句。",
    "classification": [
      "Had + 主语 + 过去分词：过去反事实",
      "Were + 主语 + 补足内容：非真实现在假设",
      "Were + 主语 + to do：假设将来",
      "Should + 主语 + 原形：较正式的可能条件"
    ],
    "usage": [
      {
        "h": "had 前置保留过去完成结构",
        "t": "Had I known the address… 对应 If I had known the address…。known 仍为过去分词，主句常按过去反事实用 would/could/might have done；不要因省略 if 就丢掉 have 或过去分词信息。"
      },
      {
        "h": "were 前置对应相应的非真实假设",
        "t": "Were I you… 对应 If I were you…；Were the company to close… 对应 If the company were to close…。不能把普通实义动词任意提到主语前来替代 if。"
      },
      {
        "h": "should 前置不是在表示主句建议",
        "t": "Should you need assistance, contact reception. 表示如果需要帮助，是较正式的条件表达。后接动词原形 need；主句可以是祈使句，不必强行配 would。"
      },
      {
        "h": "否定形式及主句时间要保留",
        "t": "Had I not checked…、Were it not for… 常把 not 放在主语之后。主从句假设时间可能不同，倒装形式本身不保证两边都表达过去，仍需根据实际意思分析。"
      }
    ],
    "pitfalls": [
      {
        "title": "倒装替代 if，不再重复保留 if",
        "wrong": "If had I known, I would have helped.",
        "right": "Had I known, I would have helped.",
        "text": "省略 if 后才把 had 前置；若保留 if，应恢复 If I had known…。"
      },
      {
        "title": "should 后使用动词原形",
        "wrong": "Should you needed help, call this number.",
        "right": "Should you need help, call this number.",
        "text": "should 后的 need 用原形；倒装不会使它变成过去式 needed。"
      },
      {
        "title": "had 后保留过去分词",
        "wrong": "Had I knew the truth, I would have acted differently.",
        "right": "Had I known the truth, I would have acted differently.",
        "text": "条件结构仍为 had + 过去分词，know 的过去分词是 known，而 knew 是过去式。"
      }
    ],
    "examples": [
      {
        "en": "Had we left ten minutes earlier, we would have caught the train.",
        "zh": "如果我们早十分钟出发，就赶上那班火车了。",
        "note": "Had we left 对应 If we had left，表达过去没有实现的条件。"
      },
      {
        "en": "Should you have any questions, email the course tutor.",
        "zh": "如果你有任何问题，请给课程导师发邮件。",
        "note": "should 前置形成正式的可能条件，主句为祈使句。"
      }
    ]
  }
}
  };
})();
