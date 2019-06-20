import { IConstants } from 'shared/config/types';

/* tslint:disable:no-magic-numbers */
const constants: IConstants = {
    AIRDROP: {
        ADDRESS: BigInt('11696703665952770027'),
        STAKE_REWARD_PERCENT: 10,
        REFERRAL_PERCENT_PER_LEVEL: [5, 3, 2, 2, 1, 1, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.5, 0.5, 0.5],
    },
    TOTAL_SUPPLY: {
        ADDRESS: BigInt('13566253584516829136'),
        AMOUNT: 4500000000000000,
    },
    BLOCK_SLOT_WINDOW: 5,
    ACTIVE_DELEGATES: 11,
    MAX_VOTES: 201,
    MAX_VOTES_PER_TRANSACTION: 3,
    MAX_DELEGATE_USERNAME_LENGTH: 20,
    EPOCH_TIME: 1451667600000,
    FEES: {
        SEND: 0.01,
        VOTE: 0.01,
        SECOND_SIGNATURE: 1000000,
        DELEGATE: 1000000000,
        FROZE: 0.01,
        SEND_STAKE: 0.1,
    },
    MAX_TRANSACTIONS_PER_BLOCK: 250,
    REWARDS: {
        MILESTONES: [
            500000000, // Initial Reward
            400000000, // Milestone 1
            300000000, // Milestone 2
            200000000, // Milestone 3
            100000000  // Milestone 4
        ],
        DISTANCE: 3000000, // Distance between each milestone
    },
    SIGNATURE_LENGTH: 65,
    FROZE: {
        VOTE_MILESTONE: 604800, // in seconds
        REWARDS: {
            MILESTONES: [
                10, // 10% For 0-6 months
                10, // 10% For 7-12 months
                10, // 8% For 13-18 months
                10, // 6% For 19-24 months
                10, // 4% For 25-30 months
                10  // 2% For 31 months and above
            ],
            DISTANCE: 30, // Distance between each milestone is 6 months
        },
        REWARD_VOTE_COUNT: 4,
        UNSTAKE_VOTE_COUNT: 24,
    },
    TRANSFER: {
        MAX_TRS_RELAY: 3,
        MAX_BLOCK_RELAY: 6,
        REQUEST_BLOCK_LIMIT: 10,
    },
    REFERRAL: {
        MAX_COUNT: 15,
    },
    FORGING: {
        SLOT_INTERVAL: 10,
        CURRENT_BLOCK_VERSION: 1,
    },
    TRANSACTION_QUEUE_EXPIRE: 300,
    PRE_ORDER_LAST_MIGRATED_BLOCK: 18142,
    PRE_ORDER_PUBLIC_KEY: 'd8299cb39f5dd81b6e999228e7ca0b4cf596ac33f7b9d0e36471ac657f0e844b',
    PRE_ORDER_SECOND_PUBLIC_KEY: 'a9e121acbf07a8140ed7388fe1e8a4b77bb9c7972bbca32725c6a8f1841db333',
    UPDATE_BLOCKCHAIN_INFO_INTERVAL: 60 * 1000,
    UPDATE_SYSTEM_INFO_INTERVAL: 1000,
    MAX_PEERS_CONNECT_TO: 20,
    MAX_PEERS_CONNECTED: 26,
    PEERS_DISCOVER: {
        MAX: 25,
        MIN: 8,
    },
    TIMEOUT_START_SYNC_BLOCKS: 20000,
    TIMEOUT_START_PEER_REQUEST: 10000,
    PEER_CONNECTION_TIME_INTERVAL_REBOOT: {
        MIN: 20 * 60 * 1000,
        MAX: 25 * 60 * 1000,
    },
    PEER_PING_PONG_INTERVAL: 15000,
    PEERS_COUNT_FOR_DISCOVER: 6,
    PRE_MINED_ACCOUNTS: [
        BigInt('13566253584516829136'),
        BigInt('11696703665952770027'),
        BigInt('7830105952002929850'),
        BigInt('3729625658841791180'),
        BigInt('9671894634278263097'),
        BigInt('2529254201347404107'),
        BigInt('3729625658841791180'),
        BigInt('16136522303332999295'),
        BigInt('7043806098403384872'),
        BigInt('13761141028469814636'),
    ],
    TIMEOUT_START_PEER_CONNECT: 3000,
    ADDRESSES_BLACKLIST: new Set([
        BigInt('11696703665952770027'), // Airdrop
        BigInt('13566253584516829136'), // Total supply
        BigInt('7043806098403384872'), // From genesis block
        BigInt('14418097244087628'),
        BigInt('44824014520664003'),
        BigInt('55875831923250533'),
        BigInt('124330724802156176'),
        BigInt('153902797641331907'),
        BigInt('195355383762708397'),
        BigInt('221737622481617223'),
        BigInt('227412479744200750'),
        BigInt('240263262089298538'),
        BigInt('308480780468349570'),
        BigInt('316428665155770011'),
        BigInt('339718549067648246'),
        BigInt('405540993586160379'),
        BigInt('418555235554442035'),
        BigInt('418631740871285281'),
        BigInt('420665167756763338'),
        BigInt('473182492252791571'),
        BigInt('491068324371105243'),
        BigInt('507886187715985458'),
        BigInt('562511980054211079'),
        BigInt('594558571032345558'),
        BigInt('598690816854718622'),
        BigInt('608138524621956539'),
        BigInt('632787662821732233'),
        BigInt('634690303114384606'),
        BigInt('737474842667147822'),
        BigInt('755251353737560396'),
        BigInt('761496518719391775'),
        BigInt('795418011840452622'),
        BigInt('845279654997895990'),
        BigInt('870584534000035665'),
        BigInt('890914079435649180'),
        BigInt('972386746414517942'),
        BigInt('981752809010848889'),
        BigInt('987728909556494722'),
        BigInt('1020559837349991656'),
        BigInt('1064253202651880831'),
        BigInt('1124110963383840328'),
        BigInt('1143170447773878202'),
        BigInt('1204388691459571788'),
        BigInt('1281163668257610462'),
        BigInt('1281332370667159067'),
        BigInt('1282572502000024828'),
        BigInt('1325412562225847377'),
        BigInt('1350810061885065814'),
        BigInt('1376336698209258557'),
        BigInt('1454441924278914327'),
        BigInt('1460485660078642981'),
        BigInt('1503111594694466946'),
        BigInt('1541711633502707615'),
        BigInt('1546646146052549510'),
        BigInt('1661185265976756581'),
        BigInt('1687855619996552238'),
        BigInt('1711239453307299930'),
        BigInt('1721305724097436558'),
        BigInt('1767580464101615526'),
        BigInt('1789458599211780811'),
        BigInt('1803533679496917204'),
        BigInt('1807341689292200019'),
        BigInt('1845338032032054055'),
        BigInt('1899141461621914142'),
        BigInt('1910639469805276271'),
        BigInt('1934198873198386421'),
        BigInt('1974025138024275704'),
        BigInt('2009602719242950878'),
        BigInt('2034596627744124518'),
        BigInt('2036323435843849055'),
        BigInt('2078677456141827666'),
        BigInt('2079650550649145789'),
        BigInt('2110146800662136856'),
        BigInt('2130422635762352093'),
        BigInt('2137909831708658398'),
        BigInt('2160780740651808157'),
        BigInt('2162739658848905470'),
        BigInt('2172744279680833908'),
        BigInt('2175826995406683005'),
        BigInt('2204660499757369296'),
        BigInt('2265503849010903208'),
        BigInt('2267070319475433777'),
        BigInt('2309941667949810232'),
        BigInt('2312570687755458532'),
        BigInt('2341161046148758525'),
        BigInt('2350374226817218395'),
        BigInt('2360085856548727181'),
        BigInt('2366865452377839561'),
        BigInt('2404891189554316786'),
        BigInt('2413092762514589562'),
        BigInt('2600907998694454422'),
        BigInt('2619843105115823235'),
        BigInt('2684032298029495165'),
        BigInt('2684846883398135068'),
        BigInt('2688886411470459237'),
        BigInt('2720735726577747932'),
        BigInt('2736420689707359929'),
        BigInt('2741144814122014563'),
        BigInt('2773929811659661808'),
        BigInt('2805747791287433086'),
        BigInt('2815207411193767360'),
        BigInt('2821269708691420067'),
        BigInt('2837738098518701370'),
        BigInt('2844420090602166315'),
        BigInt('2874751334529629686'),
        BigInt('2880190224739033938'),
        BigInt('2913588252222432994'),
        BigInt('2914227827782679823'),
        BigInt('2925204339913106695'),
        BigInt('2939186505324117540'),
        BigInt('3004683453997018818'),
        BigInt('3056260451691511017'),
        BigInt('3058988254753033008'),
        BigInt('3103069637184251754'),
        BigInt('3154054707355875614'),
        BigInt('3156127160231072702'),
        BigInt('3242867304775878220'),
        BigInt('3261710537274663686'),
        BigInt('3280320871856528004'),
        BigInt('3281581796302164333'),
        BigInt('3306632448043676692'),
        BigInt('3356523690170153795'),
        BigInt('3393079978115055272'),
        BigInt('3397338622505522314'),
        BigInt('3400712515095142773'),
        BigInt('3456395455833407520'),
        BigInt('3461684654555144511'),
        BigInt('3547169511087752950'),
        BigInt('3551228860918419281'),
        BigInt('3636746511430320674'),
        BigInt('3675484310118482249'),
        BigInt('3685278440574415306'),
        BigInt('3727504748014032936'),
        BigInt('3748802728811272150'),
        BigInt('3764994033389573401'),
        BigInt('3768287313899749142'),
        BigInt('3776908920737951459'),
        BigInt('3923733482918439918'),
        BigInt('3928009929867819052'),
        BigInt('3948184731525162508'),
        BigInt('4026725027347227713'),
        BigInt('4028434627574334500'),
        BigInt('4083211719125349330'),
        BigInt('4089528983144666749'),
        BigInt('4091453968042966709'),
        BigInt('4105418983116963796'),
        BigInt('4140012013471826933'),
        BigInt('4144322056966033538'),
        BigInt('4173940064627565416'),
        BigInt('4197633188606116428'),
        BigInt('4235119381924874495'),
        BigInt('4239637289105814587'),
        BigInt('4251093928137867703'),
        BigInt('4277894273627989534'),
        BigInt('4329470925964450324'),
        BigInt('4356790318739474640'),
        BigInt('4422667421920343626'),
        BigInt('4427852326637487602'),
        BigInt('4475581513485483050'),
        BigInt('4505188557479120739'),
        BigInt('4541614537399536887'),
        BigInt('4553845351341065087'),
        BigInt('4566994739910051129'),
        BigInt('4567373422701342561'),
        BigInt('4575010956323968014'),
        BigInt('4625537967472755152'),
        BigInt('4643026251909155643'),
        BigInt('4679877171315364799'),
        BigInt('4703640039495790362'),
        BigInt('4720508748189209685'),
        BigInt('4733861112530534494'),
        BigInt('4770778155645050627'),
        BigInt('4771351523596578770'),
        BigInt('4795932953487591976'),
        BigInt('4823475728110907136'),
        BigInt('4915037321915666759'),
        BigInt('4968154827084558882'),
        BigInt('5019922775551530272'),
        BigInt('5060557212722884417'),
        BigInt('5064229538754348735'),
        BigInt('5094107355371624657'),
        BigInt('5138776981124095168'),
        BigInt('5157214667586609524'),
        BigInt('5192494765505689172'),
        BigInt('5237380839472833855'),
        BigInt('5238332496581894326'),
        BigInt('5301064931594515125'),
        BigInt('5308458678456172363'),
        BigInt('5326071472216820778'),
        BigInt('5328400779344805429'),
        BigInt('5364228804137242381'),
        BigInt('5401152004072469748'),
        BigInt('5438942818963014614'),
        BigInt('5439730055785150596'),
        BigInt('5447177652090089023'),
        BigInt('5459201098992422901'),
        BigInt('5496930801509246448'),
        BigInt('5500151837490800290'),
        BigInt('5503704655895664340'),
        BigInt('5542770099000451390'),
        BigInt('5549621179386403509'),
        BigInt('5562796048808112044'),
        BigInt('5596262380818167729'),
        BigInt('5597748785515675827'),
        BigInt('5623248689088513252'),
        BigInt('5656813765350337992'),
        BigInt('5660159570197092432'),
        BigInt('5680191886480046215'),
        BigInt('5722758716928867501'),
        BigInt('5773166362798736231'),
        BigInt('5816441219083337900'),
        BigInt('5824817953319241875'),
        BigInt('5828185443373081111'),
        BigInt('6068769599861216872'),
        BigInt('6075930086101416765'),
        BigInt('6146325332853978845'),
        BigInt('6171834141106693141'),
        BigInt('6171840709236618729'),
        BigInt('6209165902845494261'),
        BigInt('6228432168403480434'),
        BigInt('6237024076255234144'),
        BigInt('6247002562357075860'),
        BigInt('6254664780506124288'),
        BigInt('6304615768324387210'),
        BigInt('6312542035285781598'),
        BigInt('6316096032311584376'),
        BigInt('6319805445676154654'),
        BigInt('6339830437614906582'),
        BigInt('6363506587861545400'),
        BigInt('6399520608677391366'),
        BigInt('6412340923217574895'),
        BigInt('6417962968685118744'),
        BigInt('6455931287953389668'),
        BigInt('6564856417130631990'),
        BigInt('6610112184989835592'),
        BigInt('6658887939681102004'),
        BigInt('6659592086848198918'),
        BigInt('6666551552902925202'),
        BigInt('6729541568797428608'),
        BigInt('6730237594000921612'),
        BigInt('6783182120715384036'),
        BigInt('6786255920263058944'),
        BigInt('6812368906895621401'),
        BigInt('6828181943820028012'),
        BigInt('6849043068474350766'),
        BigInt('6850793814096410251'),
        BigInt('6895445302057524565'),
        BigInt('6908172472656905628'),
        BigInt('6988681110142127175'),
        BigInt('7013928057544958000'),
        BigInt('7022614255766334474'),
        BigInt('7041686803219833755'),
        BigInt('7052372114742395783'),
        BigInt('7123192284782270731'),
        BigInt('7130498222670463029'),
        BigInt('7133323364762059123'),
        BigInt('7160904086918812777'),
        BigInt('7177370419695360151'),
        BigInt('7226779102018680525'),
        BigInt('7235058385221228931'),
        BigInt('7269780537437022913'),
        BigInt('7299180846010809401'),
        BigInt('7341208498181679127'),
        BigInt('7376670133499345525'),
        BigInt('7388636163710315318'),
        BigInt('7395381911094381435'),
        BigInt('7407048968729746588'),
        BigInt('7427571486723009233'),
        BigInt('7460227676028333769'),
        BigInt('7482837438709170155'),
        BigInt('7484574827836866773'),
        BigInt('7486954423199772453'),
        BigInt('7493592829661328484'),
        BigInt('7496314947301362771'),
        BigInt('7503652502056948122'),
        BigInt('7591025880879459449'),
        BigInt('7616322272357608869'),
        BigInt('7618584417844892197'),
        BigInt('7654973956177750845'),
        BigInt('7670139021512558427'),
        BigInt('7689969057925338457'),
        BigInt('7697212046762680786'),
        BigInt('7706729038765967474'),
        BigInt('7726976937821973540'),
        BigInt('7727731052149903829'),
        BigInt('7733838208621015594'),
        BigInt('7746053828984032894'),
        BigInt('7749367571721682181'),
        BigInt('7780177340949570575'),
        BigInt('7811011084355302197'),
        BigInt('7842779321076559014'),
        BigInt('7890858077013573588'),
        BigInt('7901655619893310481'),
        BigInt('7908121857007736475'),
        BigInt('7921461480824314514'),
        BigInt('7934643967559881375'),
        BigInt('7936189640277549540'),
        BigInt('8020504242909854504'),
        BigInt('8022865910646890858'),
        BigInt('8052053949548730068'),
        BigInt('8076408586956140320'),
        BigInt('8140170805028345719'),
        BigInt('8278705602673232679'),
        BigInt('8288058045046074767'),
        BigInt('8308715401286208625'),
        BigInt('8314047646945163259'),
        BigInt('8333194633056006937'),
        BigInt('8350492593848875545'),
        BigInt('8370739194710913425'),
        BigInt('8387512121463403752'),
        BigInt('8392001847900271346'),
        BigInt('8409522133363400062'),
        BigInt('8420317277070009673'),
        BigInt('8430863358136444360'),
        BigInt('8440009179109528870'),
        BigInt('8483004979612875012'),
        BigInt('8494774727317004070'),
        BigInt('8532958257081341261'),
        BigInt('8612967231017222122'),
        BigInt('8675057375919988086'),
        BigInt('8684875638374252962'),
        BigInt('8688027253668538268'),
        BigInt('8717777044744811121'),
        BigInt('8731866254633455516'),
        BigInt('8740772669742277497'),
        BigInt('8747974368563256601'),
        BigInt('8770716456464129443'),
        BigInt('8813054242145026814'),
        BigInt('8846605799354373216'),
        BigInt('8853825801899972466'),
        BigInt('8860764761464128679'),
        BigInt('8904503985955770691'),
        BigInt('8910599652832414792'),
        BigInt('9001641733462385842'),
        BigInt('9012229625868631848'),
        BigInt('9039230501565820109'),
        BigInt('9080602829321848125'),
        BigInt('9089901409513943076'),
        BigInt('9092436148103824210'),
        BigInt('9109901625634666004'),
        BigInt('9121280477668582825'),
        BigInt('9139466267671730787'),
        BigInt('9145570562428179286'),
        BigInt('9219002308583780697'),
        BigInt('9232566778970211158'),
        BigInt('9278305222301181792'),
        BigInt('9300979805599790837'),
        BigInt('9317354506262897044'),
        BigInt('9387725213192714383'),
        BigInt('9402593319321572022'),
        BigInt('9443924883311894600'),
        BigInt('9476549247478267931'),
        BigInt('9575791824921106271'),
        BigInt('9578490685392914185'),
        BigInt('9601787119129561358'),
        BigInt('9612177245390522045'),
        BigInt('9621957512748741821'),
        BigInt('9685971551826066635'),
        BigInt('9712879441431632005'),
        BigInt('9773783316072819284'),
        BigInt('9796264306820605538'),
        BigInt('9812189191820151720'),
        BigInt('9895380945777297739'),
        BigInt('9958759269846204516'),
        BigInt('9982747687817127059'),
        BigInt('10005543947076624052'),
        BigInt('10015257203733575320'),
        BigInt('10039263020462021877'),
        BigInt('10048076304178078705'),
        BigInt('10069309384116355474'),
        BigInt('10075044315592405169'),
        BigInt('10075413368937355632'),
        BigInt('10082155991693920164'),
        BigInt('10082192892591048131'),
        BigInt('10082264400747210511'),
        BigInt('10104937131332895747'),
        BigInt('10106809706792606741'),
        BigInt('10109592182125857563'),
        BigInt('10126076417815765921'),
        BigInt('10141741857381908519'),
        BigInt('10205478884724649752'),
        BigInt('10206581439090321332'),
        BigInt('10246411172971157674'),
        BigInt('10252693427580075069'),
        BigInt('10287340764756340893'),
        BigInt('10287503596069127921'),
        BigInt('10293072911478615815'),
        BigInt('10297228392370654479'),
        BigInt('10354772789889736447'),
        BigInt('10372629406399141849'),
        BigInt('10461093692664288775'),
        BigInt('10476329503883580154'),
        BigInt('10500430301123406210'),
        BigInt('10582992537155414114'),
        BigInt('10592535740896581146'),
        BigInt('10595393750805882593'),
        BigInt('10610339816824763538'),
        BigInt('10617852332042425460'),
        BigInt('10648514101424646426'),
        BigInt('10769297588668124218'),
        BigInt('10774721339656882381'),
        BigInt('10791297997104923554'),
        BigInt('10791815094345118479'),
        BigInt('10844139043942116491'),
        BigInt('10864524523158872528'),
        BigInt('10987955063406032092'),
        BigInt('10996524090275726996'),
        BigInt('11105986679793591317'),
        BigInt('11130246414321772616'),
        BigInt('11152624599497212819'),
        BigInt('11155194276216541675'),
        BigInt('11183767007494045302'),
        BigInt('11202913885813494532'),
        BigInt('11208803457298973575'),
        BigInt('11255815332275319937'),
        BigInt('11259834684260369108'),
        BigInt('11285119045305420203'),
        BigInt('11291468257263062821'),
        BigInt('11297325004944631428'),
        BigInt('11342231256748578751'),
        BigInt('11441060353994754508'),
        BigInt('11471359540852321645'),
        BigInt('11476874588183546470'),
        BigInt('11479148003793838800'),
        BigInt('11484848782621308500'),
        BigInt('11485819331026658337'),
        BigInt('11540080581405792970'),
        BigInt('11546953867129398359'),
        BigInt('11584820010962002598'),
        BigInt('11622315603427650942'),
        BigInt('11651268878988747649'),
        BigInt('11670483437607979222'),
        BigInt('11734587870415481782'),
        BigInt('11742445177870312784'),
        BigInt('11756002121501031141'),
        BigInt('11764903936231831968'),
        BigInt('11813800768913274206'),
        BigInt('11820797514175747019'),
        BigInt('11832611966874772181'),
        BigInt('11852492809182504401'),
        BigInt('11869345666255411226'),
        BigInt('11870392466489037931'),
        BigInt('11873401945922348312'),
        BigInt('11937014040471078504'),
        BigInt('11946244220464622677'),
        BigInt('11949129523462833575'),
        BigInt('11951826502139588444'),
        BigInt('11955297898033257269'),
        BigInt('11980008367814772592'),
        BigInt('11985085801489935079'),
        BigInt('12024052216643801278'),
        BigInt('12033918533371882607'),
        BigInt('12038021160553039127'),
        BigInt('12044264916507421201'),
        BigInt('12099489275431304485'),
        BigInt('12117815542777223712'),
        BigInt('12151186678979199185'),
        BigInt('12230352604095370232'),
        BigInt('12293936604924235428'),
        BigInt('12480494518467682340'),
        BigInt('12505376140121732223'),
        BigInt('12601251134222471506'),
        BigInt('12637705356306396804'),
        BigInt('12696455170112163412'),
        BigInt('12710998511307143851'),
        BigInt('12750798291277212958'),
        BigInt('12798105629907648930'),
        BigInt('12801993663177099610'),
        BigInt('12904815028147529923'),
        BigInt('12912984345767773842'),
        BigInt('12920708515619780810'),
        BigInt('12948146601271394662'),
        BigInt('12992782864985743936'),
        BigInt('13030967176333519854'),
        BigInt('13051984303273236534'),
        BigInt('13171493755981954771'),
        BigInt('13179914286406595479'),
        BigInt('13182260415452494638'),
        BigInt('13203720200118840713'),
        BigInt('13225923336843315246'),
        BigInt('13262669915059660540'),
        BigInt('13266869182068059455'),
        BigInt('13288480560886040920'),
        BigInt('13319443684850022349'),
        BigInt('13322213893719241492'),
        BigInt('13407401571288271068'),
        BigInt('13520055468641322107'),
        BigInt('13522676641681918686'),
        BigInt('13536790833608059133'),
        BigInt('13558162928623804523'),
        BigInt('13608157376302456969'),
        BigInt('13643465446674304526'),
        BigInt('13675886890991285525'),
        BigInt('13700114914043526239'),
        BigInt('13702409962882478524'),
        BigInt('13709096644790205833'),
        BigInt('13732691469636193527'),
        BigInt('13743120783959472240'),
        BigInt('13745397728758404735'),
        BigInt('13779010406388539725'),
        BigInt('13781022048843546154'),
        BigInt('13785676620702159923'),
        BigInt('13794556331278625656'),
        BigInt('13804800877299130048'),
        BigInt('13809706117074960782'),
        BigInt('13827644647768676406'),
        BigInt('13844273403328620959'),
        BigInt('13872063143821823911'),
        BigInt('13903319220384865548'),
        BigInt('13917359043086616163'),
        BigInt('13943765648365654245'),
        BigInt('14017342210158048882'),
        BigInt('14020989971505450988'),
        BigInt('14033524225850541431'),
        BigInt('14034039190537606358'),
        BigInt('14059074145359187646'),
        BigInt('14063881499217797616'),
        BigInt('14070630437081212912'),
        BigInt('14072791333070645676'),
        BigInt('14083142435563556907'),
        BigInt('14088595998815393434'),
        BigInt('14107251418779383871'),
        BigInt('14134649757242015656'),
        BigInt('14136410486425514956'),
        BigInt('14178543737139791141'),
        BigInt('14187466744153584878'),
        BigInt('14231364038840214356'),
        BigInt('14272206008594496898'),
        BigInt('14298236874697211725'),
        BigInt('14310227858836381028'),
        BigInt('14346565717557120921'),
        BigInt('14380759202326607400'),
        BigInt('14385685694411944597'),
        BigInt('14394099094779234429'),
        BigInt('14418388181469252688'),
        BigInt('14487210736259709286'),
        BigInt('14556485937886971911'),
        BigInt('14560161396321370088'),
        BigInt('14573760887406155217'),
        BigInt('14588314192817331067'),
        BigInt('14595814447170321643'),
        BigInt('14673216888611961078'),
        BigInt('14694628757314458156'),
        BigInt('14703398514990871121'),
        BigInt('14706757676287565340'),
        BigInt('14708218760146525749'),
        BigInt('14712686506959697207'),
        BigInt('14723919924285457000'),
        BigInt('14729682240008961732'),
        BigInt('14771024560201686091'),
        BigInt('14817253383514530237'),
        BigInt('14819319404693945839'),
        BigInt('14847287294876405758'),
        BigInt('14865457154235523417'),
        BigInt('14883365587648456720'),
        BigInt('14894821034893700328'),
        BigInt('14905690370339305578'),
        BigInt('14924309868198838691'),
        BigInt('14927818162854429269'),
        BigInt('14950784982395896570'),
        BigInt('14981352768663135664'),
        BigInt('15032690970610948595'),
        BigInt('15062214160378662918'),
        BigInt('15075097455544275558'),
        BigInt('15193108474600177505'),
        BigInt('15233349305855672911'),
        BigInt('15315855864130399857'),
        BigInt('15320221018714017343'),
        BigInt('15329274733490779911'),
        BigInt('15352367520144862171'),
        BigInt('15411718278276837361'),
        BigInt('15433520908932847718'),
        BigInt('15543216956881782105'),
        BigInt('15599744988030686640'),
        BigInt('15601385208885634491'),
        BigInt('15686711788955774621'),
        BigInt('15700771328283308259'),
        BigInt('15718881944041494240'),
        BigInt('15743019628894469726'),
        BigInt('15758970459769705483'),
        BigInt('15766716888896048231'),
        BigInt('15810591458893939445'),
        BigInt('15819108911213161966'),
        BigInt('15853423507798452919'),
        BigInt('15863834776544946079'),
        BigInt('15892076358776201386'),
        BigInt('15901517283292055779'),
        BigInt('15934845780812990215'),
        BigInt('15961980004128966582'),
        BigInt('15963002245727655705'),
        BigInt('15987758626153493518'),
        BigInt('16009531796263541010'),
        BigInt('16027061438213148092'),
        BigInt('16069745780833666790'),
        BigInt('16083519094201468834'),
        BigInt('16235754775286265380'),
        BigInt('16319142806535025493'),
        BigInt('16373469754654306415'),
        BigInt('16379135925726138287'),
        BigInt('16418678908687336722'),
        BigInt('16466768268404356793'),
        BigInt('16550151663916324785'),
        BigInt('16570016672749001544'),
        BigInt('16595161429725940299'),
        BigInt('16646399740469156038'),
        BigInt('16667084634446495164'),
        BigInt('16724088374252739811'),
        BigInt('16769637924056115546'),
        BigInt('16770781579516781446'),
        BigInt('16798447113566672514'),
        BigInt('16811710361345875942'),
        BigInt('16845481615227614697'),
        BigInt('16858840573811223428'),
        BigInt('16923502402668088344'),
        BigInt('16923720018844487058'),
        BigInt('16929443284936300824'),
        BigInt('16932267133565830435'),
        BigInt('16981525579400088971'),
        BigInt('16996332907275188626'),
        BigInt('17023880040734377298'),
        BigInt('17026379504022115626'),
        BigInt('17030985930936040729'),
        BigInt('17073970016287215148'),
        BigInt('17108596844342543391'),
        BigInt('17138344557064449141'),
        BigInt('17266149426466262326'),
        BigInt('17301491361263147184'),
        BigInt('17336904317509635330'),
        BigInt('17432608001959605151'),
        BigInt('17467970902704034900'),
        BigInt('17476778840104347020'),
        BigInt('17480854811145101115'),
        BigInt('17547329962875390474'),
        BigInt('17595734737203009824'),
        BigInt('17609844779720367867'),
        BigInt('17644886681793631615'),
        BigInt('17659906570227926992'),
        BigInt('17671228392411467863'),
        BigInt('17757633752746077971'),
        BigInt('17830207694184289837'),
        BigInt('17831340790641777107'),
        BigInt('17854084925378386262'),
        BigInt('17879123491770995050'),
        BigInt('17880427405159039807'),
        BigInt('17887177665887927133'),
        BigInt('17905879340596318848'),
        BigInt('17918405517038408279'),
        BigInt('17940646694141726886'),
        BigInt('17987194504309221055'),
        BigInt('18013662096923500120'),
        BigInt('18067451856643552722'),
        BigInt('18067858634633723619'),
        BigInt('18081890426399476149'),
        BigInt('18081939870030485759'),
        BigInt('18087377554972317616'),
        BigInt('18102207503731166802'),
        BigInt('18137761108218573880'),
        BigInt('18170400021110985069'),
        BigInt('18241039027364476693'),
        BigInt('18249928280019054474'),
        BigInt('18250110109354035305'),
        BigInt('18287883546742865646'),
        BigInt('18304623265574111802'),
        BigInt('18312339837645619752'),
        BigInt('18312437570267246862'),
        BigInt('18345086817428793610'),
        BigInt('18384869144023112990'),
        BigInt('18419869020790234625'),
    ]),
    START_FEATURE_BLOCK: {
        ACCOUNT_BLACKLIST: 70000,
        VOTE_WITH_ACTIVE_STAKE: 245000,
    },
};
/* tslint:enable */

export default constants;
