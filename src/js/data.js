// Dictionary.
const App = {

    data: [
        // A
        { eng: 'A', plc: 'a', pos: 'con', pro: 'ey' },
        { eng: 'A.M.', plc: 'e.d.', pos: 'n', pro: 'eh-day' },
        { eng: 'Ability', plc: 'balitra', pos: 'n', pro: 'bal-ee-tra' },
        { eng: 'Able', plc: 'bali', pos: 'adj', pro: 'ba-lee' },
        { eng: 'Aboard', plc: 'embountae', pos: 'adv', pro: 'em-bown-tay' },
        { eng: 'About', plc: 'aboue', pos: 'prep', pro: 'a-boo-ay' },
        { eng: 'Above', plc: 'ombarn', pos: 'prep', pro: 'om-barn' },
        { eng: 'Absolute', plc: 'aberserton', pos: 'adj', pro: 'ab-er-ser-ton' },
        { eng: 'Access', plc: 'nobar', pos: 'v/n', pro: 'no-bar' },
        { eng: 'Accident', plc: 'hozuf', pos: 'n', pro: 'hoz-uf' },
        { eng: 'Account', plc: 'tencu', pos: 'v/n', pro: 'ten-koo' },
        { eng: 'Accumulate', plc: 'amelorae', pos: 'v', pro: 'am-el-o-ray' },
        { eng: 'Ace', plc: 'dhalass', pos: 'adj', pro: 'dal-ass' },
        { eng: 'Achieve', plc: 'stama', pos: 'v', pro: 'stam-a' },
        { eng: 'Across', plc: 'atarx', pos: 'prep', pro: 'a-tarks' },
        { eng: 'Act', plc: 'blaf', pos: 'v/n', pro: 'blaf' },
        { eng: 'Activate', plc: 'enbelt', pos: 'v', pro: 'en-belt' },
        { eng: 'Active', plc: 'acriq', pos: 'adj', pro: 'ah-creek' },
        { eng: 'Adapt', plc: 'asinom', pos: 'v', pro: 'ah-sin-om' },
        { eng: 'Add', plc: 'dab', pos: 'v', pro: 'dab' },
        { eng: 'Address', plc: 'camart', pos: 'v/n', pro: 'ca-mart' },
        { eng: 'Adjust', plc: 'jasp', pos: 'v', pro: 'jasp' },
        { eng: 'Adore', plc: 'arado', pos: 'v', pro: 'ah-rad-o' },
        { eng: 'Adult', plc: 'stermis', pos: 'n', pro: 'ster-mis' },
        { eng: 'Advance', plc: 'carsh', pos: 'v', pro: 'carsh' },
        { eng: 'Advent', plc: 'jevo', pos: 'n', pro: 'jev-o' },
        { eng: 'Adventure', plc: 'jevola', pos: 'n', pro: 'jev-o-la' },
        { eng: 'Advertise', plc: 'vadatolen', pos: 'v', pro: 'va-dah-toe-len' },
        { eng: 'Affect', plc: 'afun', pos: 'v', pro: 'af-un' },
        { eng: 'Affirm', plc: 'erfar', pos: 'v', pro: 'er-far' },
        { eng: 'After', plc: 'terfa', pos: 'prep', pro: 'ter-fa' },
        { eng: 'Again', plc: 'repet', pos: 'adv', pro: 'rep-et' },
        { eng: 'Age', plc: 'aju', pos: 'v', pro: 'a-joo' },
        { eng: 'Ago', plc: 'agons', pos: 'adv', pro: 'ey-gons' },
        { eng: 'Ah', plc: 'ah', pos: 'con', pro: 'ah' },
        { eng: 'Aid', plc: 'ezen', pos: 'v/n', pro: 'ez-en' },
        { eng: 'Air', plc: 'arae', pos: 'n', pro: 'a-ray' },
        { eng: 'Algorithm', plc: 'athoram', pos: 'n', pro: 'ath-or-am' },
        { eng: 'Alien', plc: 'satihaxo', pos: 'n', pro: 'sat-ee-haks-o' },
        { eng: 'Align', plc: 'anhep', pos: 'v', pro: 'an-hep' },
        { eng: 'Alive', plc: 'ahenow', pos: 'adj', pro: 'a-hen-ow' },
        { eng: 'All', plc: 'allo', pos: 'adv', pro: 'al-o' },
        { eng: 'Allow', plc: 'mittel', pos: 'v', pro: 'mit-tel' },
        { eng: 'Alloy', plc: 'aleyo', pos: 'adj', pro: 'al-ay-o' },
        { eng: 'Almost', plc: 'alstum', pos: 'adv', pro: 'al-stum' },
        { eng: 'Alone', plc: 'anamu', pos: 'adv', pro: 'a-nam-oo' },
        { eng: 'Along', plc: 'akinth', pos: 'adv', pro: 'a-kinth' },
        { eng: 'Alpha', plc: 'alpha', pos: 'n', pro: 'al-fa' },
        { eng: 'Alpine', plc: 'plinta', pos: 'adj', pro: 'plin-ta' },
        { eng: 'Also', plc: 'alvu', pos: 'con', pro: 'al-voo' },
        { eng: 'Alternate', plc: 'atalun', pos: 'adj', pro: 'at-ah-lun' },
        { eng: 'Although', plc: 'allotum', pos: 'con', pro: 'al-o-tum' },
        { eng: 'Altitude', plc: 'ertirdar', pos: 'n', pro: 'er-teer-dar' },
        { eng: 'Always', plc: 'alvaras', pos: 'adv', pro: 'al-va-ras' },
        { eng: 'Am', plc: 'sar', pos: 'v', pro: 'sar' },
        { eng: 'Amaze', plc: 'zamal', pos: 'v', pro: 'za-marl' },
        { eng: 'America', plc: 'Merraco', pos: 'n', pro: 'mer-rak-o' },
        { eng: 'Amount', plc: 'lotar', pos: 'n', pro: 'lo-tar' },
        { eng: 'Amuse', plc: 'seheta', pos: 'v', pro: 'seh-het-a' },
        { eng: 'An', plc: 'ayn', pos: 'con', pro: 'eyn' },
        { eng: 'Anagram', plc: 'magarna', pos: 'n', pro: 'mag-ar-na' },
        { eng: 'Ancient', plc: 'shenta', pos: 'adj', pro: 'shen-ta' },
        { eng: 'And', plc: 'at', pos: 'con', pro: 'at' },
        { eng: 'Angle', plc: 'guvai', pos: 'n', pro: 'goo-vye' },
        { eng: 'Animal', plc: 'muupa', pos: 'n', pro: 'moo-pah' },
        { eng: 'Animate', plc: 'onbyrae', pos: 'v', pro: 'on-by-ray' },
        { eng: 'Anniversary', plc: 'abbonibo', pos: 'n', pro: 'ab-on-ee-bo' },
        { eng: 'Announce', plc: 'nunsai', pos: 'v', pro: 'nun-say' },
        { eng: 'Annual', plc: 'aleniso', pos: 'adj', pro: 'al-en-ee-so' },
        { eng: 'Another', plc: 'aynotaer', pos: 'adv', pro: 'eyn-oh-tay-er' },
        { eng: 'Answer', plc: 'ryamon', pos: 'v/n', pro: 'ry-a-mon' },
        { eng: 'Any', plc: 'inla', pos: 'pron', pro: 'in-la' },
        { eng: 'Appeal', plc: 'rurnar', pos: 'v', pro: 'rurn-ar' },
        { eng: 'Appear', plc: 'tadar', pos: 'v', pro: 'ta-dar' },
        { eng: 'Apple', plc: 'apol', pos: 'n', pro: 'a-pol' },
        { eng: 'Apply', plc: 'ulvass', pos: 'v', pro: 'ul-vas' },
        { eng: 'Approach', plc: 'tinclo', pos: 'v/n', pro: 'tin-cloe' },
        { eng: 'April', plc: 'vrish', pos: 'n', pro: 'vreesh' },
        { eng: 'Arcade', plc: 'kardae', pos: 'n', pro: 'kar-day' },
        { eng: 'Arch', plc: 'achoro', pos: 'n', pro: 'ac-hor-o' },
        { eng: 'Archaeology', plc: 'ajalovti', pos: 'n', pro: 'a-jal-ov-tee' },
        { eng: 'Arctic', plc: 'norpo', pos: 'adj', pro: 'nor-po' },
        { eng: 'Are', plc: 'say', pos: 'v', pro: 'say' },
        { eng: 'Area', plc: 'balsio', pos: 'n', pro: 'n' },
        { eng: 'Arm', plc: 'relon', pos: 'n', pro: 'rel-on' },
        { eng: 'Around', plc: 'arunama', pos: 'adv', pro: 'ah-run-ar-ma' },
        { eng: 'Array', plc: 'arefa', pos: 'n', pro: 'ah-ref-a' },
        { eng: 'Arrow', plc: 'aboln', pos: 'n', pro: 'a-boln' },
        { eng: 'Art', plc: 'atel', pos: 'n', pro: 'at-el' },
        { eng: 'As', plc: 'es', pos: 'con', pro: 'ez' },
        { eng: 'Ascend', plc: 'jusor', pos: 'v', pro: 'joo-sor' },
        { eng: 'Ask', plc: 'jev', pos: 'v', pro: 'jev' },
        { eng: 'Assemble', plc: 'hucatho', pos: 'v', pro: 'hoo-ka-tho' },
        { eng: 'Asset', plc: 'asepa', pos: 'n', pro: 'as-ep-a' },
        { eng: 'Assign', plc: 'abblatur', pos: 'v', pro: 'ab-bla-tur' },
        { eng: 'Assure', plc: 'truul', pos: 'v', pro: 'trool' },
        { eng: 'Asteroid', plc: 'redarsta', pos: 'n', pro: 'red-ar-sta' },
        { eng: 'At', plc: 'ab', pos: 'prep', pro: 'ab' },
        { eng: 'ATM', plc: 'ASK', pos: 'n', pro: 'ey-es-kay' },
        { eng: 'Atmosphere', plc: 'azalmosonspa', pos: 'n', pro: 'a-zal-mo-son-spa' },
        { eng: 'Attach', plc: 'plap', pos: 'v', pro: 'plap' },
        { eng: 'Attempt', plc: 'apaetun', pos: 'v', pro: 'a-pay-tun' },
        { eng: 'Attentive', plc: 'somavo', pos: 'adj', pro: 'so-mah-vo' },
        { eng: 'Attract', plc: 'netum', pos: 'v', pro: 'net-um' },
        { eng: 'Auction', plc: 'acuutiza', pos: 'n', pro: 'ah-coot-ee-za' },
        { eng: 'Audio', plc: 'claba', pos: 'n', pro: 'cla-ba' },
        { eng: 'August', plc: 'gassatu', pos: 'n', pro: 'gas-a-too' },
        { eng: 'Authentic', plc: 'ampetol', pos: 'adj', pro: 'am-pet-ol' },
        { eng: 'Author', plc: 'orlan', pos: 'v/n', pro: 'or-lan' },
        { eng: 'Autocomplete', plc: 'abzifoman', pos: 'v', pro: 'ab-zee-fo-man' },
        { eng: 'Automate', plc: 'abziyerf', pos: 'v', pro: 'ab-zee-yerf' },
        { eng: 'Autosave', plc: 'abziliida', pos: 'v/n', pro: 'ab-zee-lee-da' },
        { eng: 'Autumn', plc: 'arfres', pos: 'n', pro: 'ar-fres' },
        { eng: 'Avail', plc: 'utu', pos: 'v', pro: 'oo-too' },
        { eng: 'Avatar', plc: 'madija', pos: 'n', pro: 'ma-deej-a' },
        { eng: 'Average', plc: 'beotha', pos: 'v/n', pro: 'be-o-tha' },
        { eng: 'Avoid', plc: 'agawae', pos: 'v', pro: 'ag-a-way' },
        { eng: 'Await', plc: 'ahalp', pos: 'v', pro: 'ey-halp' },
        { eng: 'Awake', plc: 'aveesh', pos: 'v', pro: 'a-veesh' },
        { eng: 'Awaken', plc: 'aveeshel', pos: 'v', pro: 'a-veesh-el' },
        { eng: 'Aware', plc: 'amiba', pos: 'adj', pro: 'a-mib-a' },
        { eng: 'Away', plc: 'avara', pos: 'adv', pro: 'a-va-ra' },
        { eng: 'Awe', plc: 'owa', pos: 'n', pro: 'ow-a' },
        { eng: 'Awning', plc: 'amvoler', pos: 'n', pro: 'am-vo-la' },
        { eng: 'Axis', plc: 'sizay', pos: 'n', pro: 'see-zay' },
        { eng: 'Axle', plc: 'eljun', pos: 'n', pro: 'el-jun' },
        { eng: 'Aztec', plc: 'Azarta', pos: 'adj', pro: 'az-ar-ta' },
        
        // B
        { eng: 'Back', plc: 'versi', pos: 'adv', pro: 'ver-see' },
        { eng: 'Bacon', plc: 'bavin', pos: 'n', pro: 'bav-in' },
        { eng: 'Bad', plc: 'jarc', pos: 'adj', pro: 'jarc' },
        { eng: 'Bake', plc: 'mayber', pos: 'v', pro: 'may-ber' },
        { eng: 'Balance', plc: 'lansor', pos: 'v/n', pro: 'lan-sor' },
        { eng: 'Balcony', plc: 'mallen', pos: 'n', pro: 'mal-len' },
        { eng: 'Ball', plc: 'bart', pos: 'n', pro: 'bart' },
        { eng: 'Balloon', plc: 'belloo', pos: 'n', pro: 'bel-oo'},
        { eng: 'Balustrade', plc: 'lurbanoplo', pos: 'n', pro: 'lur-ban-op-lo' },
        { eng: 'Banana', plc: 'nabo', pos: 'n', pro: 'nab-o' },
        { eng: 'Band', plc: 'dreym', pos: 'n', pro: 'dreym', con: 'loop' },
        // { eng: 'Band', plc: 'bolinu', pos: 'n', pro: 'bol-in-oo', con: 'music' },
        { eng: 'Bang', plc: 'pang', pos: 'v/n', pro: 'pang' },
        { eng: 'Bank', plc: 'wone', pos: 'v', pro: 'wone' },
        { eng: 'Banner', plc: 'abbo', pos: 'n', pro: 'ab-o' },
        { eng: 'Bar', plc: 'iblar', pos: 'n', pro: 'ib-lar' },
        { eng: 'Bargain', plc: 'merhon', pos: 'n', pro: 'mer-hon' },
        { eng: 'Barn', plc: 'bonbazo', pos: 'n', pro: 'bon-baz-o' },
        { eng: 'Barrel', plc: 'bomvo', pos: 'n', pro: 'bom-voh' },
        { eng: 'Barrier', plc: 'yerdo', pos: 'n', pro: 'yer-doe' },
        { eng: 'Barrow', plc: 'rebaw', pos: 'n', pro: 'reb-or' },
        { eng: 'Base', plc: 'fund', pos: 'v/n', pro: 'fund' },
        { eng: 'Bash', plc: 'beff', pos: 'v', pro: 'bef' },
        { eng: 'Basket', plc: 'bunwosa', pos: 'n', pro: 'bun-wo-sa' },
        { eng: 'Bat', plc: 'eflid', pos: 'n', pro: 'ef-lid' },
        { eng: 'Bath', plc: 'watha', pos: 'n', pro: 'wath-a' },
        { eng: 'Batten', plc: 'tabisto', pos: 'v/n', pro: 'tab-ist-o' },
        { eng: 'Battle', plc: 'tratul', pos: 'v/n', pro: 'tra-tul' },
        { eng: 'Bay', plc: 'malp', pos: 'n', pro: 'malp' },
        { eng: 'Be', plc: 'se', pos: 'v', pro: 'seh' },
        { eng: 'Beach', plc: 'suan', pos: 'n', pro: 'soo-an' },
        { eng: 'Beam', plc: 'benna', pos: 'v/n', pro: 'ben-na' },
        { eng: 'Bear', plc: 'bon', pos: 'v/n', pro: 'bon' },
        { eng: 'Beard', plc: 'liivel', pos: 'n', pro: 'lee-vel' },
        { eng: 'Beauty', plc: 'belemi', pos: 'n', pro: 'bel-em-ee' },
        { eng: 'Because', plc: 'baku', pos: 'con', pro: 'ba-koo' },
        { eng: 'Become', plc: 'sekahem', pos: 'v', pro: 'seh-ka-hem' },
        { eng: 'Bed', plc: 'bilo', pos: 'n', pro: 'bee-lo' },
        { eng: 'Beef', plc: 'folbu', pos: 'n', pro: 'fol-boo' },
        { eng: 'Before', plc: 'praebu', pos: 'prep', pro: 'prey-boo' },
        { eng: 'Beg', plc: 'gurz', pos: 'v', pro: 'gurz' },
        { eng: 'Begin', plc: 'gebb', pos: 'v', pro: 'geb' },
        { eng: 'Behave', plc: 'vebatove', pos: 'v', pro: 'veb-a-tove' },
        { eng: 'Behind', plc: 'buunido', pos: 'adv', pro: 'boo-nee-doh' },
        { eng: 'Believe', plc: 'leyvey', pos: 'v', pro: 'ley-vey' },
        { eng: 'Bell', plc: 'gling', pos: 'n', pro: 'gling' },
        { eng: 'Belong', plc: 'sekinth', pos: 'v', pro: 'seh-kinth' },
        { eng: 'Below', plc: 'serun', pos: 'prep', pro: 'seh-run' },
        { eng: 'Belt', plc: 'beld', pos: 'v/n', pro: 'beld' },
        { eng: 'Bench', plc: 'vesid', pos: 'n', pro: 'ves-id' },
        { eng: 'Benchmark', plc: 'vesidcref', pos: 'n', pro: 'ves-id-cref' },
        { eng: 'Bend', plc: 'riib', pos: 'v/n', pro: 'reeb' },
        { eng: 'Benefit', plc: 'nefemb', pos: 'v/n', pro: 'nef-emb' },
        { eng: 'Best', plc: 'pripal', pos: 'adj', pro: 'pree-pal' },
        { eng: 'Bet', plc: 'teb', pos: 'v', pro: 'teb' },
        { eng: 'Beta', plc: 'beta', pos: 'n', pro: 'bee-ta' },
        { eng: 'Between', plc: 'seduwen', pos: 'prep', pro: 'seh-doo-wen' },
        { eng: 'Bicycle', plc: 'ducyca', pos: 'n', pro: 'doo-sy-ka' },
        { eng: 'Bid', plc: 'dinb', pos: 'n', pro: 'dinb' },
        { eng: 'Big', plc: 'hyune', pos: 'adj', pro: 'hyoon' },
        { eng: 'Bill', plc: 'buya', pos: 'v/n', pro: 'boo-ya' },
        { eng: 'Bin', plc: 'duub', pos: 'v/n', pro: 'doob' },
        { eng: 'Bind', plc: 'darsh', pos: 'v/n', pro: 'darsh' },
        { eng: 'Binoculars', plc: 'dukadlioners', pos: 'n', pro: 'doo-kad-lee-o-nas' },
        { eng: 'Biome', plc: 'boam', pos: 'n', pro: 'bo-am' },
        { eng: 'Bird', plc: 'weet', pos: 'n', pro: 'weet' },
        { eng: 'Birth', plc: 'bara', pos: 'n', pro: 'ba-ra' },
        { eng: 'Bit', plc: 'tib', pos: 'n', pro: 'tib' },
        { eng: 'Black', plc: 'nevono', pos: 'adj', pro: 'nev-o-noh' },
        { eng: 'Bland', plc: 'glef', pos: 'adj', pro: 'glef' },
        { eng: 'Blast', plc: 'bohf', pos: 'v/n', pro: 'bof' },
        { eng: 'Blend', plc: 'flerb', pos: 'v/n', pro: 'flerb' },
        { eng: 'Blind', plc: 'nild', pos: 'adj', pro: 'nild' },
        { eng: 'Block', plc: 'morth', pos: 'v', pro: 'morth', con: 'obstruct' },
        // { eng: 'Block', plc: 'dinqo', pos: 'n', pro: 'dink-o', con: 'piece' },
        { eng: 'Blog', plc: 'lanur', pos: 'v/n', pro: 'lan-ur' },
        { eng: 'Bloom', plc: 'fersol', pos: 'n', pro: 'fer-sol' },
        { eng: 'Blow', plc: 'fawa', pos: 'v/n', pro: 'fah-wah' },
        { eng: 'Blue', plc: 'bardu', pos: 'adj', pro: 'bar-doo' },
        { eng: 'Board', plc: 'bountae', pos: 'v', pro: 'bown-tay' },
        { eng: 'Boat', plc: 'marnt', pos: 'n', pro: 'marnt' },
        { eng: 'Bob', plc: 'oob', pos: 'v', pro: 'oob' },
        { eng: 'Bobble', plc: 'oobey', pos: 'v', pro: 'oo-bee' },
        { eng: 'Body', plc: 'bhoa', pos: 'n', pro: 'bo-a' },
        { eng: 'Bonus', plc: 'bozana', pos: 'adj/n', pro: 'bo-zan-a' },
        { eng: 'Book', plc: 'jhetur', pos: 'v/n', pro: 'jet-ur' },
        { eng: 'Bookmark', plc: 'jheturcref', pos: 'v/n', pro: 'jet-ur-cref' },
        { eng: 'Boom', plc: 'plohm', pos: 'v/n', pro: 'plohm' },
        { eng: 'Boost', plc: 'verzii', pos: 'v', pro: 'ver-zee' },
        { eng: 'Boot', plc: 'peld', pos: 'v/n', pro: 'peld' },
        { eng: 'Booth', plc: 'buet', pos: 'n', pro: 'boo-et' },
        { eng: 'Border', plc: 'fraja', pos: 'v/n', pro: 'fraj-a' },
        { eng: 'Bore', plc: 'buuf', pos: 'v', pro: 'boof' },
        { eng: 'Boss', plc: 'kayra', pos: 'n', pro: 'kay-ra' },
        { eng: 'Bot', plc: 'venza', pos: 'n', pro: 'ven-za' },
        { eng: 'Both', plc: 'buthae', pos: 'con', pro: 'boo-thay' },
        { eng: 'Bother', plc: 'brobuuz', pos: 'v', pro: 'brob-ooz' },
        { eng: 'Bottom', plc: 'tobi', pos: 'adv', pro: 'toe-bee' },
        { eng: 'Bound', plc: 'darshen', pos: 'v', pro: 'dar-shen' },
        { eng: 'Bow', plc: 'biho', pos: 'n', pro: 'bee-ho' },
        { eng: 'Box', plc: 'tomp', pos: 'v/n', pro: 'tomp' },
        { eng: 'Boy', plc: 'bam', pos: 'n', pro: 'bam' },
        { eng: 'Brace', plc: 'beruusa', pos: 'n', pro: 'ber-roo-sa' },
        { eng: 'Bracket', plc: 'vord', pos: 'n', pro: 'vord' },
        { eng: 'Brain', plc: 'prorf', pos: 'n', pro: 'prorf' },
        { eng: 'Brake', plc: 'stursh', pos: 'v', pro: 'stersh' },
        { eng: 'Brand', plc: 'mich', pos: 'n', pro: 'mitch' },
        { eng: 'Brave', plc: 'chun', pos: 'adj', pro: 'chun' },
        { eng: 'Brazil', plc: 'Brerze', pos: 'n', pro: 'Brerz-ah' },
        { eng: 'Breach', plc: 'brecha', pos: 'v/n', pro: 'bretch-a' },
        { eng: 'Bread', plc: 'pahol', pos: 'n', pro: 'pa-hol' },
        { eng: 'Break', plc: 'kapu', pos: 'v', pro: 'kah-poo' },
        { eng: 'Breath', plc: 'zel', pos: 'n', pro: 'zel' },
        { eng: 'Breathe', plc: 'zeil', pos: 'v', pro: 'zeel' },
        { eng: 'Breeze', plc: 'vazur', pos: 'v/n', pro: 'vaz-er' },
        { eng: 'Brick', plc: 'clorb', pos: 'v/n', pro: 'clorb' },
        { eng: 'Brief', plc: 'gundu', pos: 'adj', pro: 'gun-doo' },
        { eng: 'Bright', plc: 'petan', pos: 'adj', pro: 'pet-an' },
        { eng: 'Brilliant', plc: 'uuravu', pos: 'adj', pro: 'oor-av-oo' },
        { eng: 'Bring', plc: 'meyvi', pos: 'v', pro: 'mey-vee' },
        { eng: 'Brit', plc: 'Berr', pos: 'n', pro: 'bur' },
        { eng: 'Broad', plc: 'worbo', pos: 'adj', pro: 'wor-bo' },
        { eng: 'Bronze', plc: 'zarba', pos: 'n', pro: 'zar-ba' },
        { eng: 'Brother', plc: 'brussen', pos: 'n', pro: 'broo-sen' },
        { eng: 'Browse', plc: 'mochosa', pos: 'v', pro: 'mo-cho-sa' },
        { eng: 'Brush', plc: 'bruuf', pos: 'v/n', pro: 'broof' },
        { eng: 'BST', plc: 'BNT', pos: 'abbr', pro: 'bey-en-tee' },
        { eng: 'Buccaneer', plc: 'gristach', pos: 'n', pro: 'gris-tash' },
        { eng: 'Buckle', plc: 'vool', pos: 'v', pro: 'vool' },
        { eng: 'Bug', plc: 'gusp', pos: 'v/n', pro: 'gusp' },
        { eng: 'Build', plc: 'castru', pos: 'v', pro: 'cah-stroo' },
        { eng: 'Bullet', plc: 'shunru', pos: 'n', pro: 'shun-roo' },
        { eng: 'Bump', plc: 'bohp', pos: 'v', pro: 'bope' },
        { eng: 'Bundle', plc: 'hubru', pos: 'v/n', pro: 'hub-roo' },
        { eng: 'Burger', plc: 'gombo', pos: 'n', pro: 'gom-bo' },
        { eng: 'Burn', plc: 'byju', pos: 'v/n', pro: 'by-joo' },
        { eng: 'Burst', plc: 'bubba', pos: 'v', pro: 'bub-a' },
        { eng: 'Bus', plc: 'zonth', pos: 'n', pro: 'zonth' },
        { eng: 'Bush', plc: 'primba', pos: 'n', pro: 'prim-ba' },
        { eng: 'Busy', plc: 'zibbi', pos: 'adj', pro: 'zib-ee' },
        { eng: 'But', plc: 'puud', pos: 'con', pro: 'pood' },
        { eng: 'Button', plc: 'pobbe', pos: 'n', pro: 'pob-ba' },
        { eng: 'Buttress', plc: 'trobsa', pos: 'n', pro: 'trob-sa' },
        { eng: 'Buy', plc: 'chey', pos: 'v', pro: 'chey' },
        { eng: 'By', plc: 'bah', pos: 'prep', pro: 'bah' },
        { eng: 'Bye', plc: 'bayo', pos: 'con', pro: 'bay-o' },

        // C
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },
        { eng: '', plc: '', pos: '', pro: '' },

        // D

        // E

        // F

        // G


        // H
        { eng: 'hello', plc: 'hayo' },

        // I

        // J
        { eng: 'Jackpot', plc: 'dalocham', pos: 'n', pro: 'dal-o-cham' },
        { eng: 'Janitor', plc: 'pinako', pos: 'n', pro: 'pin-a-koh' },
        { eng: 'January', plc: 'Jinajuma', pos: 'n', pro: 'jin-a-joo-ma' },
        { eng: 'Japan', plc: 'Japae', pos: 'n', pro: 'Jap-ey' },
        { eng: 'Jealous', plc: 'viuse', pos: 'adj', pro: 'vee-oos' },
        { eng: 'Jester', plc: 'beson', pos: 'n', pro: 'bes-on' },
        { eng: 'Jet', plc: 'zeja', pos: 'n', pro: 'zej-a' },
        { eng: 'Jingle', plc: 'jeng', pos: 'n', pro: 'jeng' },
        { eng: 'Job', plc: 'bode', pos: 'n', pro: 'bode' },
        { eng: 'Join', plc: 'jojo', pos: 'v', pro: 'jo-jo' },
        { eng: 'Journey', plc: 'ovujil', pos: 'v/n', pro: 'oh-voo-jil' },
        { eng: 'Joy', plc: 'jebu', pos: 'n', pro: 'jeb-oo' },
        { eng: 'Juice', plc: 'juss', pos: 'n', pro: 'jus' },
        { eng: 'July', plc: 'istru', pos: 'n', pro: 'ist-roo' },
        { eng: 'Jump', plc: 'vanarl', pos: 'v', pro: 'van-arl' },
        { eng: 'Jumper', plc: 'goodel', pos: 'n', pro: 'goo-del' },
        { eng: 'Junction', plc: 'yajemsho', pos: 'n', pro: 'ya-jem-sho' },
        { eng: 'June', plc: 'artija', pos: 'n', pro: 'art-ee-ja' },
        { eng: 'Jungle', plc: 'yungarl', pos: 'n', pro: 'yun-garl' },
        { eng: 'Junior', plc: 'nilp', pos: 'n', pro: 'nilp' },
        { eng: 'Just', plc: 'jano', pos: 'con', pro: 'ja-no' },
        { eng: 'Justice', plc: 'muvoja', pos: 'n', pro: 'moo-vo-ja' },

        // K
        { eng: 'Keep', plc: 'capa', pos: 'v', pro: 'ca-pa' },
        { eng: 'Kerb', plc: 'wilpair', pos: 'n', pro: 'wilp-air' },
        { eng: 'Kettle', plc: 'kayuta', pos: 'n', pro: 'kay-oo-ta' },
        { eng: 'Key', plc: 'tako', pos: 'n', pro: 'tak-o', con: 'computer' },
        // { eng: 'Key', plc: 'ralum', pos: 'n', pro: 'ral-um', con: 'lock' },
        { eng: 'Kick', plc: 'kibra', pos: 'n', pro: 'kib-ra' },
        { eng: 'Kid', plc: 'dee', pos: 'n', pro: 'dee' },
        { eng: 'Kind', plc: 'yonv', pos: 'n', pro: 'yonv' },
        { eng: 'King', plc: 'darq', pos: 'n', pro: 'dark' },
        { eng: 'Kiosk', plc: 'koyuva', pos: 'n', pro: 'koy-oo-va' },
        { eng: 'Kiss', plc: 'smush', pos: 'v/n', pro: 'smush' },
        { eng: 'Kit', plc: 'tatha', pos: 'n', pro: 'tath-a' },
        { eng: 'Knight', plc: 'nurida', pos: 'n', pro: 'nur-ee-da' },
        { eng: 'Knot', plc: 'tyanpo', pos: 'v/n', pro: 'ty-an-po' },
        { eng: 'Know', plc: 'lejey', pos: 'v', pro: 'ley-jey' },
        { eng: 'Korea', plc: 'Kurra', pos: 'n', pro: 'Kur-ah' },
        { eng: 'Kraken', plc: 'krakka', pos: 'n', pro: 'krak-ah' },

        // L

        // M

        // N
        { eng: 'Name', plc: 'naem', pos: 'v/n', pro: 'nay-um' },
        { eng: 'Nap', plc: 'sast', pos: 'v/n', pro: 'sast' },
        { eng: 'Narrow', plc: 'nad', pos: 'adj', pro: 'nad' },
        { eng: 'Nature', plc: 'flesso', pos: 'n', pro: 'fles-o' },
        { eng: 'Nausea', plc: 'staja', pos: 'n', pro: 'sta-ja' },
        { eng: 'Near', plc: 'zim', pos: 'adv', pro: 'zim' },
        { eng: 'Need', plc: 'dru', pos: 'v', pro: 'droo' },
        { eng: 'Negative', plc: 'nagutavo', pos: 'adj', pro: 'nag-oo-tah-vo' },
        { eng: 'Neon', plc: 'zoba', pos: 'n', pro: 'zob-a' },
        { eng: 'Nest', plc: 'senfa', pos: 'v/n', pro: 'sen-fa' },
        { eng: 'Never', plc: 'neyva', pos: 'adv', pro: 'ney-va' },
        { eng: 'New', plc: 'noss', pos: 'adj', pro: 'nos' },
        { eng: 'Next', plc: 'neketa', pos: 'adj', pro: 'nek-et-a' },
        { eng: 'Nice', plc: 'nezo', pos: 'adj', pro: 'nez-oh' },
        { eng: 'Night', plc: 'noae', pos: 'n', pro: 'no-ay' },
        { eng: 'Nine', plc: 'nern', pos: 'num', pro: 'nern' },
        { eng: 'No', plc: 'no', pos: 'adv', pro: 'noh' },
        { eng: 'Nod', plc: 'domp', pos: 'v', pro: 'domp' },
        { eng: 'Nominate', plc: 'neyorae', pos: 'v', pro: 'ney-o-ray' },
        { eng: 'Noon', plc: 'nun', pos: 'adv', pro: 'nun' },
        { eng: 'Normal', plc: 'rumil', pos: 'adj', pro: 'rum-il' },
        { eng: 'Norway', plc: 'Noljar', pos: 'n', pro: 'nol-jar' },
        { eng: 'Not', plc: 'nuve', pos: 'adv', pro: 'noov' },
        { eng: 'Note', plc: 'fohv', pos: 'v/n', pro: 'fove' },
        { eng: 'Nothing', plc: 'nuzumpo', pos: 'n', pro: 'nuz-um-po' },
        { eng: 'Notice', plc: 'fohviloze', pos: 'v/n', pro: 'foe-vee-loze' },
        { eng: 'Notify', plc: 'fohvibreti', pos: 'v', pro: 'foe-vee-bret-ee' },
        { eng: 'Nourish', plc: 'chamkal', pos: 'v', pro: 'cham-kal' },
        { eng: 'November', plc: 'norai', pos: 'n', pro: 'nor-ay' },
        { eng: 'Now', plc: 'wun', pos: 'adv', pro: 'wun' },
        { eng: 'Nowhere', plc: 'notiim', pos: 'adv', pro: 'noh-teem' },
        { eng: 'Number', plc: 'manero', pos: 'n', pro: 'man-air-o' },
        // O

        // P

        // Q
        { eng: 'Q&A', plc: 'D&R', pos: 'n', pro: 'day-at-ar' },
        { eng: 'QA', plc: 'YT', pos: 'n', pro: 'wye-tee' },
        { eng: 'Quality', plc: 'yimpa', pos: 'n', pro: 'yim-pa' },
        { eng: 'Quarter', plc: 'qifluner', pos: 'n', pro: 'kif-loo-na' },
        { eng: 'Queen', plc: 'quyena', pos: 'n', pro: 'koo-nen-a' },
        { eng: 'Question', plc: 'duuya', pos: 'v/n', pro: 'doo-ya' },
        { eng: 'Queue', plc: 'shufe', pos: 'n', pro: 'shoof-er' },
        { eng: 'Quick', plc: 'hizzun', pos: 'adj', pro: 'hiz-un' },
        { eng: 'Quiet', plc: 'zamou', pos: 'adj', pro: 'za-mou' },
        { eng: 'Quit', plc: 'lixo', pos: 'v', pro: 'liks-oh' },
        { eng: 'Quite', plc: 'kiito', pos: 'adv', pro: 'kee-toh' },
        { eng: 'Quoin', plc: 'kwato', pos: 'kwah-toe', pro: 'n' },

        // R

        // S

        // T

        // U
        { eng: 'Ubiquitous', plc: 'ofuzapon', pos: 'adj', pro: 'o-foo-za-pon' },
        { eng: 'UI', plc: 'HU', pos: 'n', pro: 'huh-yoo' },
        { eng: 'Ultimate', plc: 'waxemica', pos: 'waxemica', pro: 'wacks-em-ee-ka' },
        { eng: 'Ultra', plc: 'talerza', pos: 'adj', pro: 'tal-er-za' },
        { eng: 'Unanimous', plc: 'unarzapon', pos: 'adj', pro: 'un-ar-za-pon' },
        { eng: 'Under', plc: 'urada', pos: 'prep', pro: 'ur-ah-da' },
        { eng: 'Underpin', plc: 'uradapidet', pos: 'v', pro: 'ur-ah-da-pid-et' },
        { eng: 'Understand', plc: 'uradatund', pos: 'v', pro: 'ur-ah-da-tund' },
        { eng: 'Undertake', plc: 'uradajanil', pos: 'v', pro: 'ur-ah-da-jan-il' },
        { eng: 'Underwhelm', plc: 'uradamurwa', pos: 'v', pro: 'ur-ah-da-mur-wa' },
        { eng: 'Uniform', plc: 'onietabel', pos: 'n', pro: 'on-ee-et-ab-el' },
        { eng: 'Unique', plc: 'zaquel', pos: 'adj', pro: 'zak-wel' },
        { eng: 'Unit', plc: 'ubol', pos: 'n', pro: 'ub-ol' },
        { eng: 'Universe', plc: 'ulexu', pos: 'n', pro: 'ul-eks-oo' },
        { eng: 'Unless', plc: 'unaminu', pos: 'adv', pro: 'un-a-min-oo' },
        { eng: 'Unlock', plc: 'unacaruc', pos: 'v/n', pro: 'un-a-cah-ruk' },
        { eng: 'Until', plc: 'unatiq', pos: 'adv', pro: 'un-a-teek' },
        { eng: 'Up', plc: 'assii', pos: 'adv', pro: 'ass-ee' },
        { eng: 'Update', plc: 'assiideta', pos: 'v/n', pro: 'ass-ee-det-a' },
        { eng: 'Upgrade', plc: 'assiiabohl', pos: 'v/n', pro: 'ass-ee-a-bohl' },
        { eng: 'Upload', plc: 'assiieval', pos: 'v/n', pro: 'ass-ee-ev-al' },
        { eng: 'Upvote', plc: 'assiithuudo', pos: 'v/n', pro: 'ass-ee-thood-o' },
        { eng: 'URL', plc: 'ORL', pos: 'abbr', pro: 'orl' },
        { eng: 'Us', plc: 'uss', pos: 'pron', pro: 'uss' },
        { eng: 'Use', plc: 'har', pos: 'v', pro: 'har' },
        { eng: 'Utility', plc: 'wadisti', pos: 'n', pro: 'wad-is-tee' },
        { eng: 'Utopia', plc: 'marvizon', pos: 'n', pro: 'mar-viz-on' },

        // V

        // W
        { eng: 'world', plc: 'wuntow' },

        // X

        // Y
        { eng: 'Ya', plc: 'eh', pos: 'interjection', pro: 'eh' },
        { eng: 'Yaw', plc: 'yirq', pos: 'n', pro: 'yerk' },
        { eng: 'Yay', plc: 'dibu', pos: 'interjection', pro: 'dib-oo' },
        { eng: 'Yeah', plc: 'yah', pos: 'interjection', pro: 'yah' },
        { eng: 'Year', plc: 'yarre', pos: 'n', pro: 'yah-ra' },
        { eng: 'Yellow', plc: 'tepeli', pos: 'adj', pro: 'tep-el-ee' },
        { eng: 'Yes', plc: 'yas', pos: 'adv', pro: 'yas' },
        { eng: 'Yesterday', plc: 'predeyo', pos: 'n', pro: 'pre-day-o' },
        { eng: 'Yet', plc: 'yata', pos: 'adv', pro: 'ya-ta' },
        { eng: 'You', plc: 'oe', pos: 'pron', pro: 'oh' },
        { eng: 'Your', plc: 'oema', pos: 'pron', pro: 'oh-ma' },
        { eng: 'Yours', plc: 'oemas', pos: 'pron', pro: 'oh-mas' },

        // Z
        { eng: 'Zero', plc: 'zoop', pos: 'num', pro: 'zoop' },
        { eng: 'Zero-G', plc: 'Zoop-G', pos: 'n', pro: 'zoop-jee' },
        { eng: 'Zone', plc: 'zinn', pos: 'n', pro: 'zin' },
        { eng: 'Zoom', plc: 'zuul', pos: 'v', pro: 'zool' }

    ]
    
};