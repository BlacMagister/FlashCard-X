export interface GrammarQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const grammarQuestions: GrammarQuestion[] = [
  {
    "id": "g1",
    "question": "はじめまして。マルシア（　　　）。",
    "options": [
      "です",
      "は",
      "が",
      "も"
    ],
    "answer": "です",
    "explanation": "Untuk memperkenalkan diri atau menyebutkan identitas, gunakan '〜です'."
  },
  {
    "id": "g2",
    "question": "トンさん（　　　）、タイからですか？",
    "options": [
      "は",
      "が",
      "を",
      "に"
    ],
    "answer": "は",
    "explanation": "'は' adalah partikel penanda topik. Menanyakan tentang Ton-san."
  },
  {
    "id": "g3",
    "question": "いいえ、私は金子（　　　）。",
    "options": [
      "です",
      "は",
      "が",
      "か"
    ],
    "answer": "です",
    "explanation": "Menjawab identitas diri dengan '〜です'."
  },
  {
    "id": "g4",
    "question": "ケマラさんは、ベトナム（　　　）ですか？",
    "options": [
      "から",
      "まで",
      "に",
      "で"
    ],
    "answer": "から",
    "explanation": "'から' berarti 'dari'. Digunakan untuk menanyakan asal."
  },
  {
    "id": "g5",
    "question": "いいえ、（ベトナム　　　）。カンボジアから来ました。",
    "options": [
      "じゃないです",
      "です",
      "ありません",
      "じゃないか"
    ],
    "answer": "じゃないです",
    "explanation": "Bentuk negatif dari '〜です' (informal/standar) adalah '〜じゃないです' atau '〜じゃありません'."
  },
  {
    "id": "g6",
    "question": "私は、（ミャンマー　　　）。",
    "options": [
      "から来ました",
      "に来ました",
      "で来ました",
      "へ来ました"
    ],
    "answer": "から来ました",
    "explanation": "'から来ました' berarti 'datang dari'. Menyatakan asal kedatangan."
  },
  {
    "id": "g7",
    "question": "A: チャンさん、お国（　　　）？\nB: ベトナムです。",
    "options": [
      "は",
      "が",
      "を",
      "に"
    ],
    "answer": "は",
    "explanation": "Menanyakan asal negara 'お国は（どこですか）？', 'どこですか' sering dihilangkan dalam percakapan."
  },
  {
    "id": "g8",
    "question": "タイから来ました。私（　　　）、タイです。",
    "options": [
      "も",
      "は",
      "が",
      "を"
    ],
    "answer": "も",
    "explanation": "Partikel 'も' berarti 'juga'."
  },
  {
    "id": "g9",
    "question": "A: お名前は？\nB: ヤミン（　　　）。",
    "options": [
      "です",
      "は",
      "か",
      "から"
    ],
    "answer": "です",
    "explanation": "Menjawab nama menggunakan '〜です'."
  },
  {
    "id": "g10",
    "question": "A: みなさんは、友だちですか？\nB: はい。同じ会社（　　　）。",
    "options": [
      "です",
      "ます",
      "ではありません",
      "から"
    ],
    "answer": "です",
    "explanation": "Menjelaskan identitas/status menggunakan '〜です'."
  },
  {
    "id": "g11",
    "question": "ヤミンさん（　　　）？",
    "options": [
      "は",
      "が",
      "を",
      "から"
    ],
    "answer": "は",
    "explanation": "Menanyakan balik 'Bagaimana dengan Yamin-san?' menggunakan '〜は？'."
  },
  {
    "id": "g12",
    "question": "ジェインさんはミャンマーからですか？\nいいえ、（　　　）。フィリピンから来ました。",
    "options": [
      "ミャンマーじゃないです",
      "ミャンマーです",
      "ミャンマーから",
      "ミャンマーではありません"
    ],
    "answer": "ミャンマーじゃないです",
    "explanation": "Menyangkal 'bukan dari Myanmar' dengan 'ミャンマーじゃないです'."
  },
  {
    "id": "g13",
    "question": "私は、（日本　　　）。",
    "options": [
      "じゃないです",
      "ありません",
      "ないです",
      "じゃありません"
    ],
    "answer": "じゃないです",
    "explanation": "Penyangkalan identitas menggunakan 'じゃないです'."
  },
  {
    "id": "g14",
    "question": "みなさんは同じ会社（　　　）。",
    "options": [
      "ですか",
      "です",
      "ます",
      "でしたか"
    ],
    "answer": "ですか",
    "explanation": "Menanyakan kebenaran identitas/status dengan 'ですか'."
  },
  {
    "id": "g15",
    "question": "紹介します。こちら、夫（　　　）娘です。",
    "options": [
      "と",
      "や",
      "が",
      "に"
    ],
    "answer": "と",
    "explanation": "Partikel 'と' digunakan untuk menggabungkan dua kata benda secara setara (dan)."
  },
  {
    "id": "g16",
    "question": "これ、バトさんの家族ですか？\nはい。父（　　　）母、妹、犬のハチです。",
    "options": [
      "、",
      "は",
      "が",
      "の"
    ],
    "answer": "、",
    "explanation": "Untuk menyebutkan lebih dari dua hal secara beruntun, biasanya digunakan koma (、)."
  },
  {
    "id": "g17",
    "question": "お（　　　）ですか？ 18歳です。",
    "options": [
      "いくつ",
      "なまえ",
      "くに",
      "とし"
    ],
    "answer": "いくつ",
    "explanation": "'おいくつ' digunakan untuk menanyakan umur dengan sopan."
  },
  {
    "id": "g18",
    "question": "アクバルさん、ご出身は（　　　）ですか？",
    "options": [
      "どこ",
      "だれ",
      "いつ",
      "なん"
    ],
    "answer": "どこ",
    "explanation": "'どこ' adalah kata tanya untuk tempat (di mana)."
  },
  {
    "id": "g19",
    "question": "これ、（　　　）ですか？\n弟です。",
    "options": [
      "だれ",
      "どこ",
      "なに",
      "いつ"
    ],
    "answer": "だれ",
    "explanation": "'だれ' adalah kata tanya untuk orang (siapa)."
  },
  {
    "id": "g20",
    "question": "お名前（　　　）？",
    "options": [
      "は",
      "が",
      "を",
      "に"
    ],
    "answer": "は",
    "explanation": "Singkatan dari 'お名前は（何ですか）？'."
  },
  {
    "id": "g21",
    "question": "これ、だれですか？\n（　　　）の母です。",
    "options": [
      "私",
      "私が",
      "私に",
      "私を"
    ],
    "answer": "私",
    "explanation": "Partikel 'の' menunjukkan kepemilikan/hubungan (Ibu saya = 私の母)."
  },
  {
    "id": "g22",
    "question": "マルシアさんは、どこ（　　　）住んでいますか？",
    "options": [
      "に",
      "で",
      "へ",
      "を"
    ],
    "answer": "に",
    "explanation": "Kata kerja '住んでいます' (tinggal) menggunakan partikel 'に' untuk menunjukkan tempat menetap."
  },
  {
    "id": "g23",
    "question": "赤羽（　　　）住んでいます。",
    "options": [
      "に",
      "で",
      "へ",
      "から"
    ],
    "answer": "に",
    "explanation": "Tempat tinggal + に + 住んでいます."
  },
  {
    "id": "g24",
    "question": "ペット（　　　）ロッキーです。",
    "options": [
      "の",
      "と",
      "は",
      "に"
    ],
    "answer": "の",
    "explanation": "'Hewan peliharaan saya, Rocky' menggunakan partikel 'の' (ペットのロッキー)."
  },
  {
    "id": "g25",
    "question": "ヒマルさんも、日本（　　　）？",
    "options": [
      "ですか",
      "ですかは",
      "が",
      "を"
    ],
    "answer": "ですか",
    "explanation": "Menanyakan 'Apakah Himal-san juga di Jepang?' (日本ですか？)."
  },
  {
    "id": "g26",
    "question": "あ、犬。かわいい（　　　）。",
    "options": [
      "ですね",
      "ですよ",
      "ですか",
      "ですの"
    ],
    "answer": "ですね",
    "explanation": "Mengekspresikan kesan bersama menggunakan 'ですね' (Lucu ya)."
  },
  {
    "id": "g27",
    "question": "私（　　　）、横浜に住んでいます。",
    "options": [
      "は",
      "が",
      "を",
      "に"
    ],
    "answer": "は",
    "explanation": "Menjelaskan tentang diri sendiri sebagai topik."
  },
  {
    "id": "g28",
    "question": "魚（　　　）好きですか？",
    "options": [
      "が",
      "は",
      "を",
      "に"
    ],
    "answer": "が",
    "explanation": "Kata sifat '好き' (suka) menggunakan partikel 'が' untuk objek yang disukai."
  },
  {
    "id": "g29",
    "question": "魚は好き（　　　）。",
    "options": [
      "じゃないです",
      "ないです",
      "ではありません",
      "くないです"
    ],
    "answer": "じゃないです",
    "explanation": "'好き' adalah kata sifat-na, bentuk negatifnya adalah '好きじゃないです'."
  },
  {
    "id": "g30",
    "question": "日本の食べ物、（　　　）が好きですか？",
    "options": [
      "何",
      "どこ",
      "だれ",
      "いつ"
    ],
    "answer": "何",
    "explanation": "'何' (なに) digunakan untuk menanyakan benda (apa)."
  },
  {
    "id": "g31",
    "question": "納豆は（　　　）。",
    "options": [
      "ちょっと…",
      "あまり",
      "ぜんぜん",
      "よく"
    ],
    "answer": "ちょっと…",
    "explanation": "'〜はちょっと…' adalah cara halus untuk menolak atau mengatakan kurang suka."
  },
  {
    "id": "g32",
    "question": "お茶、飲みますか？\nはい、（　　　）。",
    "options": [
      "飲みます",
      "飲みません",
      "飲む",
      "飲まない"
    ],
    "answer": "飲みます",
    "explanation": "Jawaban positif dari 'V-ますか' adalah 'V-ます'."
  },
  {
    "id": "g33",
    "question": "ビール、（　　　）？",
    "options": [
      "飲む",
      "飲みます",
      "飲むか",
      "飲み"
    ],
    "answer": "飲む",
    "explanation": "Bentuk kamus (飲む) digunakan dalam percakapan kasual sebagai pertanyaan dengan nada naik."
  },
  {
    "id": "g34",
    "question": "朝ご飯、いつも、何（　　　）食べますか？",
    "options": [
      "を",
      "が",
      "に",
      "で"
    ],
    "answer": "を",
    "explanation": "Partikel 'を' digunakan untuk menunjukkan objek dari kata kerja (makan apa = 何を食べる)."
  },
  {
    "id": "g35",
    "question": "パン（　　　）たまごを食べます。",
    "options": [
      "と",
      "や",
      "が",
      "に"
    ],
    "answer": "と",
    "explanation": "Menggabungkan dua kata benda secara setara 'パンとたまご' (roti dan telur)."
  },
  {
    "id": "g36",
    "question": "朝ご飯は、食べ（　　　）。",
    "options": [
      "ません",
      "ないです",
      "ます",
      "ました"
    ],
    "answer": "ません",
    "explanation": "Bentuk negatif sopan dari '食べます' adalah '食べません' atau '食べないです'."
  },
  {
    "id": "g37",
    "question": "みそ汁は飲ま（　　　）。",
    "options": [
      "ないです",
      "ません",
      "ない",
      "ます"
    ],
    "answer": "ないです",
    "explanation": "Bentuk negatif dari '飲みます' juga bisa '飲まないです'."
  },
  {
    "id": "g38",
    "question": "いつもパンを食べます。（　　　）たまごを食べます。",
    "options": [
      "よく",
      "あまり",
      "ぜんぜん",
      "ときどき"
    ],
    "answer": "よく",
    "explanation": "'よく' berarti 'sering', tingkatannya di bawah 'いつも' (selalu)."
  },
  {
    "id": "g39",
    "question": "すしは？\nあ、（すし　　　）。",
    "options": [
      "はちょっと…",
      "は好きです",
      "が好きです",
      "がちょっと…"
    ],
    "answer": "はちょっと…",
    "explanation": "Menolak secara halus menggunakan '〜はちょっと…'."
  },
  {
    "id": "g40",
    "question": "パンは食べないです。シリアルとサラダ（　　　）食べます。",
    "options": [
      "を",
      "は",
      "が",
      "に"
    ],
    "answer": "を",
    "explanation": "Partikel 'を' untuk objek yang dimakan."
  },
  {
    "id": "g41",
    "question": "コーヒー、好きですか？\n私（　　　）、コーヒー、好きじゃないです。",
    "options": [
      "は",
      "が",
      "も",
      "を"
    ],
    "answer": "は",
    "explanation": "Menggunakan 'は' sebagai topik utama."
  },
  {
    "id": "g42",
    "question": "ハンバーガー（　　　）コーラ、お願いします。",
    "options": [
      "と",
      "も",
      "が",
      "を"
    ],
    "answer": "と",
    "explanation": "Menyebutkan pesanan 'burger dan cola'."
  },
  {
    "id": "g43",
    "question": "ドリンクは、何（　　　）なさいますか？",
    "options": [
      "に",
      "を",
      "が",
      "で"
    ],
    "answer": "に",
    "explanation": "'〜になさいますか' adalah bentuk sangat sopan (keigo) dari '〜にしますか' (memilih apa?)."
  },
  {
    "id": "g44",
    "question": "私は、カレー（　　　）します。",
    "options": [
      "に",
      "を",
      "が",
      "で"
    ],
    "answer": "に",
    "explanation": "'〜にします' digunakan saat memutuskan pilihan (pesanan, dsb)."
  },
  {
    "id": "g45",
    "question": "生ビール3（　　　）、お願いします。",
    "options": [
      "つ",
      "こ",
      "まい",
      "ほん"
    ],
    "answer": "つ",
    "explanation": "Menghitung barang secara umum menggunakan '〜つ' (ひとつ, ふたつ, みっつ)."
  },
  {
    "id": "g46",
    "question": "ウーロン茶、4（　　　）お願いします。",
    "options": [
      "つ",
      "はい",
      "まい",
      "こ"
    ],
    "answer": "つ",
    "explanation": "Sama seperti di atas, menggunakan hitungan umum '〜つ' (よっつ)."
  },
  {
    "id": "g47",
    "question": "マヨネーズ、（　　　）？",
    "options": [
      "ありますか",
      "いますか",
      "ですか",
      "しますか"
    ],
    "answer": "ありますか",
    "explanation": "Menanyakan keberadaan benda mati menggunakan 'ありますか'."
  },
  {
    "id": "g48",
    "question": "あ、私（　　　）生ビール。",
    "options": [
      "も",
      "は",
      "が",
      "を"
    ],
    "answer": "も",
    "explanation": "Menyatakan kesamaan pilihan 'Saya juga...' (私も)."
  },
  {
    "id": "g49",
    "question": "水×7 → 水、7（　　　）お願いします。",
    "options": [
      "つ",
      "はい",
      "こ",
      "まい"
    ],
    "answer": "つ",
    "explanation": "7 buah menggunakan hitungan umum 'ななつ'."
  },
  {
    "id": "g50",
    "question": "こちらで（　　　）ですか？",
    "options": [
      "おめしあがり",
      "たべます",
      "のむ",
      "します"
    ],
    "answer": "おめしあがり",
    "explanation": "Bentuk keigo untuk 'makan/minum di sini?' (こちらでおめしあがりですか)."
  },
  {
    "id": "g51",
    "question": "じゃあ、（牛丼　　　）。",
    "options": [
      "にします",
      "します",
      "をします",
      "あります"
    ],
    "answer": "にします",
    "explanation": "Memilih gyudon: '牛丼にします'."
  },
  {
    "id": "g52",
    "question": "ここは玄関（　　　）。",
    "options": [
      "です",
      "あります",
      "います",
      "します"
    ],
    "answer": "です",
    "explanation": "Menjelaskan tempat 'Di sini adalah pintu masuk'."
  },
  {
    "id": "g53",
    "question": "1階（　　　）トイレとお風呂があります。",
    "options": [
      "に",
      "で",
      "へ",
      "を"
    ],
    "answer": "に",
    "explanation": "Tempat keberadaan menggunakan partikel 'に' (Di lantai 1 ada...)."
  },
  {
    "id": "g54",
    "question": "部屋にテレビが2（　　　）あります。",
    "options": [
      "つ",
      "だい",
      "まい",
      "こ"
    ],
    "answer": "つ",
    "explanation": "Bisa menggunakan 'つ', meski untuk mesin (TV) juga bisa menggunakan '台' (だい). Berdasarkan buku A1, sering pakai 'つ'."
  },
  {
    "id": "g55",
    "question": "電子レンジは（　　　）？",
    "options": [
      "ありますか",
      "いますか",
      "ですか",
      "しますか"
    ],
    "answer": "ありますか",
    "explanation": "Elektronik adalah benda mati, menggunakan 'あります'."
  },
  {
    "id": "g56",
    "question": "ふとんは（　　　）。",
    "options": [
      "ありません",
      "いません",
      "ないです",
      "ありません / ないです"
    ],
    "answer": "ありません / ないです",
    "explanation": "Bentuk negatif dari 'あります' adalah 'ありません' atau 'ないです'."
  },
  {
    "id": "g57",
    "question": "家は（　　　）ですか？",
    "options": [
      "どう",
      "どんな",
      "なに",
      "どこ"
    ],
    "answer": "どう",
    "explanation": "'どうですか' untuk menanyakan pendapat atau keadaan sesuatu."
  },
  {
    "id": "g58",
    "question": "家は、ちょっと（　　　）。",
    "options": [
      "せまいです",
      "せまいですね",
      "せまくありません",
      "せまくないです"
    ],
    "answer": "せまいです",
    "explanation": "Kata sifat-i langsung ditambah 'です' (せまいです = sempit)."
  },
  {
    "id": "g59",
    "question": "アパートは、広（　　　）？",
    "options": [
      "いですか",
      "かですか",
      "ですか",
      "なですか"
    ],
    "answer": "いですか",
    "explanation": "'広い' adalah kata sifat-i, pertanyaannya '広いですか'."
  },
  {
    "id": "g60",
    "question": "いえ、（　　　）。",
    "options": [
      "広くないです",
      "広いじゃないです",
      "広いくないです",
      "広ありません"
    ],
    "answer": "広くないです",
    "explanation": "Bentuk negatif kata sifat-i: hilangkan 'い' tambah 'くないです'."
  },
  {
    "id": "g61",
    "question": "寮は、きれい（　　　）？",
    "options": [
      "ですか",
      "いですか",
      "なですか",
      "かですか"
    ],
    "answer": "ですか",
    "explanation": "'きれい' adalah kata sifat-na, pertanyaannya 'きれいですか'."
  },
  {
    "id": "g62",
    "question": "いえ、（　　　）。",
    "options": [
      "きれいじゃないです",
      "きれいくないです",
      "きれいではありません",
      "きれいじゃないです / きれいではありません"
    ],
    "answer": "きれいじゃないです / きれいではありません",
    "explanation": "Bentuk negatif kata sifat-na ditambah 'じゃないです' atau 'ではありません'."
  },
  {
    "id": "g63",
    "question": "食堂（　　　）テーブル×4、いす×8",
    "options": [
      "に",
      "で",
      "は",
      "が"
    ],
    "answer": "に",
    "explanation": "Di ruang makan ada meja dan kursi -> 食堂に."
  },
  {
    "id": "g64",
    "question": "Wi-Fiはありますか？\n（　　　）。",
    "options": [
      "ないです",
      "ありません",
      "いません",
      "ないです / ありません"
    ],
    "answer": "ないです / ありません",
    "explanation": "Bentuk negatif 'あります' bisa 'ないです' atau 'ありません'."
  },
  {
    "id": "g65",
    "question": "でも、とても（　　　）。",
    "options": [
      "きれいです",
      "きれいくない",
      "きれいだ",
      "きれいに"
    ],
    "answer": "きれいです",
    "explanation": "Menyatakan sifat positif yang bertentangan dengan hal negatif sebelumnya."
  },
  {
    "id": "g66",
    "question": "アパートは静かですか？\nいえ、あまり（　　　）。",
    "options": [
      "静かじゃないです",
      "静かくないです",
      "静かです",
      "静かじゃありません"
    ],
    "answer": "静かじゃないです",
    "explanation": "Negatif kata sifat-na '静か' adalah '静かじゃないです'."
  },
  {
    "id": "g67",
    "question": "更衣室（　　　）、着替えます。",
    "options": [
      "で",
      "に",
      "へ",
      "を"
    ],
    "answer": "で",
    "explanation": "Tempat melakukan aktivitas menggunakan partikel 'で'."
  },
  {
    "id": "g68",
    "question": "食堂（　　　）ご飯を食べます。",
    "options": [
      "で",
      "に",
      "へ",
      "を"
    ],
    "answer": "で",
    "explanation": "Tempat makan (aktivitas) menggunakan 'で'."
  },
  {
    "id": "g69",
    "question": "山田さんは会議室（　　　）います。",
    "options": [
      "に",
      "で",
      "へ",
      "を"
    ],
    "answer": "に",
    "explanation": "Tempat keberadaan seseorang (います) menggunakan partikel 'に'."
  },
  {
    "id": "g70",
    "question": "山田さん、いますか？\n（　　　）。",
    "options": [
      "いませんね",
      "ありませんね",
      "ないですね",
      "じゃないですね"
    ],
    "answer": "いませんね",
    "explanation": "Bentuk negatif dari 'います' adalah 'いません'."
  },
  {
    "id": "g71",
    "question": "はさみは、ここ（　　　）あります。",
    "options": [
      "に",
      "で",
      "へ",
      "を"
    ],
    "answer": "に",
    "explanation": "Keberadaan benda mati di suatu tempat menggunakan 'に'."
  },
  {
    "id": "g72",
    "question": "ごみ箱は、（　　　）にありますか？",
    "options": [
      "どこ",
      "だれ",
      "いつ",
      "なん"
    ],
    "answer": "どこ",
    "explanation": "Menanyakan tempat (di mana)."
  },
  {
    "id": "g73",
    "question": "ガムテープは、机の（　　　）にあります。",
    "options": [
      "上",
      "中",
      "下",
      "横"
    ],
    "answer": "上",
    "explanation": "Posisi 'di atas' = 上 (うえ)."
  },
  {
    "id": "g74",
    "question": "引出し（　　　）中（　　　）あります。",
    "options": [
      "の / に",
      "に / の",
      "で / に",
      "の / で"
    ],
    "answer": "の / に",
    "explanation": "Laci punya dalam (引出しの中), dan partikel keberadaan adalah に."
  },
  {
    "id": "g75",
    "question": "会議室（　　　）打ち合わせをします。",
    "options": [
      "で",
      "に",
      "へ",
      "を"
    ],
    "answer": "で",
    "explanation": "Melakukan meeting (aktivitas) menggunakan 'で'."
  },
  {
    "id": "g76",
    "question": "ここが管理人室です。中川さんは、いつもここ（　　　）。",
    "options": [
      "にいます",
      "にあります",
      "でいます",
      "であります"
    ],
    "answer": "にいます",
    "explanation": "Keberadaan orang = ここにいます."
  },
  {
    "id": "g77",
    "question": "12時（　　　）1時（　　　）昼休みです。",
    "options": [
      "から / まで",
      "に / で",
      "から / に",
      "で / まで"
    ],
    "answer": "から / まで",
    "explanation": "'から' = dari, 'まで' = sampai."
  },
  {
    "id": "g78",
    "question": "夜10時（　　　）寝ます。",
    "options": [
      "に",
      "で",
      "から",
      "を"
    ],
    "answer": "に",
    "explanation": "Waktu spesifik melakukan aktivitas menggunakan partikel 'に'."
  },
  {
    "id": "g79",
    "question": "夜8時（　　　）寝ます。",
    "options": [
      "ごろ",
      "ぐらい",
      "など",
      "しか"
    ],
    "answer": "ごろ",
    "explanation": "'ごろ' berarti 'sekitar' untuk waktu/jam (sekitar jam 8)."
  },
  {
    "id": "g80",
    "question": "プール、いつ（　　　）いいですか？",
    "options": [
      "が",
      "は",
      "を",
      "に"
    ],
    "answer": "が",
    "explanation": "Menanyakan kapan waktu yang baik: 'いつがいいですか'."
  },
  {
    "id": "g81",
    "question": "土曜日（　　　）しましょう。",
    "options": [
      "に",
      "で",
      "へ",
      "が"
    ],
    "answer": "に",
    "explanation": "Memutuskan/menetapkan pilihan waktu menggunakan '〜にしましょう'."
  },
  {
    "id": "g82",
    "question": "仕事は、何時（　　　）ですか？",
    "options": [
      "まで",
      "に",
      "を",
      "で"
    ],
    "answer": "まで",
    "explanation": "Menanyakan batas akhir pekerjaan (Sampai jam berapa?)."
  },
  {
    "id": "g83",
    "question": "休みの時間は、何時から何時（　　　）ですか？",
    "options": [
      "まで",
      "から",
      "に",
      "で"
    ],
    "answer": "まで",
    "explanation": "Dari jam berapa sampai jam berapa (何時から何時まで)."
  },
  {
    "id": "g84",
    "question": "12時半は（　　　）？",
    "options": [
      "どうですか",
      "なんですか",
      "どこですか",
      "だれですか"
    ],
    "answer": "どうですか",
    "explanation": "Menanyakan pendapat 'Bagaimana kalau jam 12:30?'."
  },
  {
    "id": "g85",
    "question": "ちょっと、手伝って（　　　）。",
    "options": [
      "ください",
      "ます",
      "ません",
      "ましょう"
    ],
    "answer": "ください",
    "explanation": "Bentuk permintaan sopan: V-て + ください."
  },
  {
    "id": "g86",
    "question": "鈴木さんに持って（　　　）。",
    "options": [
      "行って",
      "来て",
      "して",
      "見て"
    ],
    "answer": "行って",
    "explanation": "'持って行って' = tolong bawa ke sana (ke orang lain)."
  },
  {
    "id": "g87",
    "question": "そこのドライバー、取って（　　　）？",
    "options": [
      "くれる",
      "ください",
      "ますか",
      "いい"
    ],
    "answer": "くれる",
    "explanation": "Permintaan kasual kepada teman/bawahan: V-て + くれる？"
  },
  {
    "id": "g88",
    "question": "いす、4つ並べて（　　　）。",
    "options": [
      "ください",
      "くれる",
      "ます",
      "ましょう"
    ],
    "answer": "ください",
    "explanation": "Menginstruksikan dengan sopan (V-てください)."
  },
  {
    "id": "g89",
    "question": "10時までに片付けてください。\nはい、10時（　　　）。",
    "options": [
      "ですね",
      "ですよ",
      "ですか",
      "でしょう"
    ],
    "answer": "ですね",
    "explanation": "'〜ですね' digunakan untuk mengkonfirmasi ulang informasi yang didengar."
  },
  {
    "id": "g90",
    "question": "あのう、ホチキス、貸して（　　　）。",
    "options": [
      "ください",
      "くれます",
      "いいですか",
      "いますか"
    ],
    "answer": "ください",
    "explanation": "Meminta untuk meminjamkan barang (貸す -> 貸してください)."
  },
  {
    "id": "g91",
    "question": "ペン、借りても（　　　）？",
    "options": [
      "いいですか",
      "ください",
      "くれますか",
      "ありますか"
    ],
    "answer": "いいですか",
    "explanation": "Meminta izin: V-てもいいですか (Bolehkah meminjam?)."
  },
  {
    "id": "g92",
    "question": "えんぴつ、（　　　）？",
    "options": [
      "いいですか",
      "ください",
      "ありますか",
      "貸しますか"
    ],
    "answer": "いいですか",
    "explanation": "Cara singkat meminta izin menggunakan barang (えんぴつ、いいですか？)."
  },
  {
    "id": "g93",
    "question": "すぐ、会議室に来て（　　　）。",
    "options": [
      "ください",
      "くれる",
      "ます",
      "いいです"
    ],
    "answer": "ください",
    "explanation": "Permintaan formal/sopan."
  },
  {
    "id": "g94",
    "question": "段ボール、そこに（　　　）。",
    "options": [
      "置いて",
      "取って",
      "並べて",
      "閉めて"
    ],
    "answer": "置いて",
    "explanation": "Tolong letakkan kardusnya di sana (置いて)."
  },
  {
    "id": "g95",
    "question": "ここに、名前を（　　　）ください。",
    "options": [
      "書いて",
      "閉めて",
      "置いて",
      "手伝って"
    ],
    "answer": "書いて",
    "explanation": "Tolong tuliskan nama (書いて)."
  },
  {
    "id": "g96",
    "question": "趣味は、何（　　　）？",
    "options": [
      "ですか",
      "ますか",
      "ありますか",
      "いますか"
    ],
    "answer": "ですか",
    "explanation": "Menanyakan hobi (Apa hobimu?)."
  },
  {
    "id": "g97",
    "question": "（　　　）映画が好きですか？",
    "options": [
      "どんな",
      "どう",
      "なに",
      "どれ"
    ],
    "answer": "どんな",
    "explanation": "'どんな' digunakan untuk menanyakan jenis/kategori (Film macam apa?)."
  },
  {
    "id": "g98",
    "question": "スポーツ、好きですか？\nいえ、（　　　）好きじゃないです。",
    "options": [
      "あまり",
      "ぜんぜん",
      "よく",
      "とても"
    ],
    "answer": "あまり",
    "explanation": "'あまり' + bentuk negatif = tidak terlalu."
  },
  {
    "id": "g99",
    "question": "ロックは（　　　）聞きません。",
    "options": [
      "ぜんぜん",
      "あまり",
      "よく",
      "いつも"
    ],
    "answer": "ぜんぜん",
    "explanation": "'ぜんぜん' + bentuk negatif = sama sekali tidak."
  },
  {
    "id": "g100",
    "question": "休みの日は、（　　　）うちでゆっくりします。",
    "options": [
      "たいてい",
      "あまり",
      "ぜんぜん",
      "ときどき"
    ],
    "answer": "たいてい",
    "explanation": "'たいてい' = biasanya/kebanyakan."
  },
  {
    "id": "g101",
    "question": "夫（　　　）公園（　　　）テニスをします。",
    "options": [
      "と / で",
      "に / を",
      "と / に",
      "が / で"
    ],
    "answer": "と / で",
    "explanation": "Melakukan aktivitas 'dengan' (と) 'di' (で)."
  },
  {
    "id": "g102",
    "question": "夜は、うち（　　　）音楽を聞きます。",
    "options": [
      "で",
      "に",
      "へ",
      "を"
    ],
    "answer": "で",
    "explanation": "Aktivitas di dalam rumah = うちで."
  },
  {
    "id": "g103",
    "question": "毎朝、犬（　　　）いっしょに散歩します。",
    "options": [
      "と",
      "に",
      "を",
      "で"
    ],
    "answer": "と",
    "explanation": "Bersama anjing = 犬と."
  },
  {
    "id": "g104",
    "question": "よく居酒屋（　　　）父とお酒を飲みます。",
    "options": [
      "で",
      "に",
      "へ",
      "を"
    ],
    "answer": "で",
    "explanation": "Minum di Izakaya (tempat aktivitas) = 居酒屋で."
  },
  {
    "id": "g105",
    "question": "明日、（　　　）タイフェスティバルがあります。",
    "options": [
      "公園で",
      "公園に",
      "公園へ",
      "公園を"
    ],
    "answer": "公園で",
    "explanation": "Tempat berlangsungnya acara (event) menggunakan partikel 'で'."
  },
  {
    "id": "g106",
    "question": "今晩、いっしょに映画に（　　　）。",
    "options": [
      "行きませんか",
      "行きますか",
      "行きましょう",
      "行きます"
    ],
    "answer": "行きませんか",
    "explanation": "Mengajak dengan sopan menggunakan 'V-ませんか'."
  },
  {
    "id": "g107",
    "question": "明日、いっしょに映画に行きましょう。\n（　　　）。",
    "options": [
      "行きましょう",
      "行きませんか",
      "行きます",
      "行かないで"
    ],
    "answer": "行きましょう",
    "explanation": "Bentuk ajakan setuju atau mengajak aktif 'V-ましょう'."
  },
  {
    "id": "g108",
    "question": "映画を見（　　　）行きますか？",
    "options": [
      "に",
      "で",
      "へ",
      "を"
    ],
    "answer": "に",
    "explanation": "Tujuan melakukan sesuatu: V-ます (coret ます) + に行きます (Pergi untuk melihat)."
  },
  {
    "id": "g109",
    "question": "日曜日、友だち（　　　）映画（　　　）行きます。",
    "options": [
      "と / に",
      "に / へ",
      "と / を",
      "で / に"
    ],
    "answer": "と / に",
    "explanation": "Bersama teman (友だちと) pergi untuk film/menonton film (映画に行きます)."
  },
  {
    "id": "g110",
    "question": "みんなでハイキング（　　　）行きませんか？",
    "options": [
      "に",
      "で",
      "を",
      "が"
    ],
    "answer": "に",
    "explanation": "Tujuan pergi: ハイキングに."
  },
  {
    "id": "g111",
    "question": "今度、公園でいっしょにサッカーを（　　　）。",
    "options": [
      "しませんか",
      "しますか",
      "して",
      "しません"
    ],
    "answer": "しませんか",
    "explanation": "Mengajak melakukan sesuatu: 'しませんか'."
  },
  {
    "id": "g112",
    "question": "このバスは、空港（　　　）行きますか？",
    "options": [
      "に",
      "で",
      "を",
      "が"
    ],
    "answer": "に",
    "explanation": "Arah tujuan menggunakan partikel 'に' (atau 'へ')."
  },
  {
    "id": "g113",
    "question": "家から会社（　　　）、何で来ますか？",
    "options": [
      "まで",
      "から",
      "に",
      "で"
    ],
    "answer": "まで",
    "explanation": "'〜まで' = sampai."
  },
  {
    "id": "g114",
    "question": "バス（　　　）来ます。",
    "options": [
      "で",
      "に",
      "へ",
      "を"
    ],
    "answer": "で",
    "explanation": "Alat transportasi menggunakan partikel 'で'."
  },
  {
    "id": "g115",
    "question": "電車で1時間（　　　）。",
    "options": [
      "かかります",
      "します",
      "あります",
      "います"
    ],
    "answer": "かかります",
    "explanation": "'かかります' digunakan untuk waktu yang dihabiskan (membutuhkan 1 jam)."
  },
  {
    "id": "g116",
    "question": "みどり駅（　　　）電車に乗ります。",
    "options": [
      "で",
      "に",
      "を",
      "へ"
    ],
    "answer": "で",
    "explanation": "Tempat melakukan aktivitas (naik kereta di stasiun) menggunakan 'で'."
  },
  {
    "id": "g117",
    "question": "電車（　　　）乗ります。",
    "options": [
      "に",
      "で",
      "を",
      "へ"
    ],
    "answer": "に",
    "explanation": "Objek kendaraan yang dinaiki menggunakan partikel 'に'."
  },
  {
    "id": "g118",
    "question": "バス（　　　）降ります。",
    "options": [
      "を",
      "に",
      "で",
      "へ"
    ],
    "answer": "を",
    "explanation": "Objek kendaraan yang dituruni menggunakan partikel 'を'."
  },
  {
    "id": "g119",
    "question": "東西線（　　　）乗り換えます。",
    "options": [
      "に",
      "を",
      "で",
      "へ"
    ],
    "answer": "に",
    "explanation": "Kendaraan tujuan transit (pindah kereta) menggunakan partikel 'に'."
  },
  {
    "id": "g120",
    "question": "家から学校まで、どうやって来ますか？\n（　　　）で来ます。",
    "options": [
      "バス",
      "歩いて",
      "走って",
      "歩き"
    ],
    "answer": "バス",
    "explanation": "Untuk transportasi pakai で, namun 'jalan kaki' (歩いて) tidak pakai で."
  },
  {
    "id": "g121",
    "question": "ここから市民病院まで、（　　　）行きますか？",
    "options": [
      "どうやって",
      "どう",
      "なに",
      "どこ"
    ],
    "answer": "どうやって",
    "explanation": "Menanyakan cara/rute (bagaimana caranya pergi ke sana)."
  },
  {
    "id": "g122",
    "question": "家から会社まで、どのぐらい（　　　）？",
    "options": [
      "かかりますか",
      "ありますか",
      "しますか",
      "いますか"
    ],
    "answer": "かかりますか",
    "explanation": "Berapa lama memakan waktu = どのぐらいかかりますか."
  },
  {
    "id": "g123",
    "question": "すみません、ここは（　　　）ですか？",
    "options": [
      "どこ",
      "なに",
      "だれ",
      "いつ"
    ],
    "answer": "どこ",
    "explanation": "Menanyakan tempat (di mana)."
  },
  {
    "id": "g124",
    "question": "（　　　）近くにATMはありますか？",
    "options": [
      "この",
      "これ",
      "ここ",
      "こんな"
    ],
    "answer": "この",
    "explanation": "Di dekat sini = この近くに."
  },
  {
    "id": "g125",
    "question": "猫は、車の（　　　）にいます。",
    "options": [
      "上",
      "中",
      "下",
      "横"
    ],
    "answer": "上",
    "explanation": "Kucing di atas mobil = 車の上にいます."
  },
  {
    "id": "g126",
    "question": "お寺です。古いです。 → （　　　）お寺ですね。",
    "options": [
      "古い",
      "古な",
      "古",
      "古くて"
    ],
    "answer": "古い",
    "explanation": "Kata sifat-i langsung menerangkan kata benda (古いお寺)."
  },
  {
    "id": "g127",
    "question": "商店街です。にぎやかです。 → （　　　）商店街ですね。",
    "options": [
      "にぎやかな",
      "にぎやか",
      "にぎやかだ",
      "にぎやかい"
    ],
    "answer": "にぎやかな",
    "explanation": "Kata sifat-na menerangkan kata benda harus ditambah 'な' (にぎやかな商店街)."
  },
  {
    "id": "g128",
    "question": "電池（　　　）ほしいんですが、どこで買えますか？",
    "options": [
      "が",
      "を",
      "は",
      "に"
    ],
    "answer": "が",
    "explanation": "Keinginan memiliki benda menggunakan partikel 'が' + 'ほしい'."
  },
  {
    "id": "g129",
    "question": "スーパー（　　　）ありますよ。",
    "options": [
      "に",
      "で",
      "を",
      "へ"
    ],
    "answer": "に",
    "explanation": "Ada di supermarket = スーパーにあります."
  },
  {
    "id": "g130",
    "question": "ホームセンター（　　　）買えますよ。",
    "options": [
      "で",
      "に",
      "を",
      "へ"
    ],
    "answer": "で",
    "explanation": "Bisa beli di home center (aktivitas beli) = ホームセンターで買えます."
  },
  {
    "id": "g131",
    "question": "この傘、おもしろい（　　　）。",
    "options": [
      "ですね",
      "ですよ",
      "ですか",
      "でしょう"
    ],
    "answer": "ですね",
    "explanation": "Mengekspresikan kesan dan meminta persetujuan ringan '〜ですね' (Menarik ya)."
  },
  {
    "id": "g132",
    "question": "これ、（　　　）ですか？\n750円です。",
    "options": [
      "いくら",
      "いくつ",
      "どこ",
      "だれ"
    ],
    "answer": "いくら",
    "explanation": "Menanyakan harga menggunakan 'いくら'."
  },
  {
    "id": "g133",
    "question": "（　　　）お菓子、いくらですか？",
    "options": [
      "この",
      "これ",
      "ここ",
      "こんな"
    ],
    "answer": "この",
    "explanation": "Kata penunjuk + Kata benda (この + Noun = Benda ini)."
  },
  {
    "id": "g134",
    "question": "たいやき3つ（　　　）、おにぎり4つください。",
    "options": [
      "と",
      "や",
      "が",
      "に"
    ],
    "answer": "と",
    "explanation": "Menggabungkan dua pesanan 'dan'."
  },
  {
    "id": "g135",
    "question": "コロッケ4つと、ひき肉200（　　　）お願いします。",
    "options": [
      "グラム",
      "つ",
      "こ",
      "まい"
    ],
    "answer": "グラム",
    "explanation": "Daging cincang ditimbang dengan gram."
  },
  {
    "id": "g136",
    "question": "昨日、テレビを見（　　　）。",
    "options": [
      "ました",
      "ます",
      "ません",
      "ませんでし"
    ],
    "answer": "ました",
    "explanation": "Bentuk lampau positif dari '見ます' adalah '見ました'."
  },
  {
    "id": "g137",
    "question": "昨日、掃除し（　　　）。",
    "options": [
      "ませんでした",
      "ません",
      "ないです",
      "ました"
    ],
    "answer": "ませんでした",
    "explanation": "Bentuk lampau negatif 'し(ます)' adalah 'しませんでした'."
  },
  {
    "id": "g138",
    "question": "休みの日は、どこ（　　　）行きませんでした。",
    "options": [
      "にも",
      "でも",
      "へも",
      "にも / へも"
    ],
    "answer": "にも / へも",
    "explanation": "Menyangkal secara total (tidak ke mana-mana) = どこにも + negatif."
  },
  {
    "id": "g139",
    "question": "映画は、（　　　）でしたか？",
    "options": [
      "どう",
      "どんな",
      "なに",
      "どこ"
    ],
    "answer": "どう",
    "explanation": "Menanyakan kesan di waktu lampau 'どうでしたか'."
  },
  {
    "id": "g140",
    "question": "とてもおもしろ（　　　）。",
    "options": [
      "かったです",
      "でした",
      "くなかったです",
      "じゃなかったです"
    ],
    "answer": "かったです",
    "explanation": "Bentuk lampau kata sifat-i (おもしろい -> おもしろかった)."
  },
  {
    "id": "g141",
    "question": "東京はにぎやか（　　　）。",
    "options": [
      "でした",
      "かったです",
      "じゃなかったです",
      "くなかったです"
    ],
    "answer": "でした",
    "explanation": "Bentuk lampau kata sifat-na (にぎやか -> にぎやかでした)."
  },
  {
    "id": "g142",
    "question": "昨日はいい天気（　　　）。",
    "options": [
      "でした",
      "かったです",
      "じゃなかったです",
      "です"
    ],
    "answer": "でした",
    "explanation": "Bentuk lampau kata benda (天気 -> 天気でした)."
  },
  {
    "id": "g143",
    "question": "昨日はいい天気（　　　）。",
    "options": [
      "じゃなかったです",
      "くなかったです",
      "じゃありません",
      "ありませんでした"
    ],
    "answer": "じゃなかったです",
    "explanation": "Bentuk negatif lampau kata benda adalah '〜じゃなかったです'."
  },
  {
    "id": "g144",
    "question": "映画、おもしろかったですか？\nいえ、あまりおもしろ（　　　）。",
    "options": [
      "くなかったです",
      "じゃなかったです",
      "かったです",
      "ませんでした"
    ],
    "answer": "くなかったです",
    "explanation": "Bentuk negatif lampau kata sifat-i: hilangkan 'い' tambah 'くなかったです'."
  },
  {
    "id": "g145",
    "question": "温泉に（　　　）。",
    "options": [
      "入りたいです",
      "入ります",
      "入って",
      "入りましょう"
    ],
    "answer": "入りたいです",
    "explanation": "Menyatakan keinginan melakukan sesuatu: V-ます (coret ます) + たいです."
  },
  {
    "id": "g146",
    "question": "ビールを（　　　）。",
    "options": [
      "飲みたいです",
      "飲みます",
      "飲んで",
      "飲みましょう"
    ],
    "answer": "飲みたいです",
    "explanation": "Ingin minum = 飲みたいです."
  },
  {
    "id": "g147",
    "question": "連休、（　　　）行きましたか？",
    "options": [
      "どこか",
      "どこに",
      "どこにも",
      "どこも"
    ],
    "answer": "どこか",
    "explanation": "'どこか' berarti 'suatu tempat' (Apakah kamu pergi ke suatu tempat?)."
  },
  {
    "id": "g148",
    "question": "いいえ、（　　　）行きませんでした。",
    "options": [
      "どこにも",
      "どこか",
      "どこに",
      "どこも"
    ],
    "answer": "どこにも",
    "explanation": "Menyangkal pergi ke mana pun = どこにも + negatif."
  },
  {
    "id": "g149",
    "question": "新幹線に乗りたいです。（　　　）、雪が見たいです。",
    "options": [
      "あと",
      "それに",
      "でも",
      "それから"
    ],
    "answer": "あと",
    "explanation": "'あと' digunakan untuk menambahkan hal lain yang diinginkan (dan juga)."
  },
  {
    "id": "g150",
    "question": "お風呂は気持ちよかったです。（　　　）、景色もきれいでした。",
    "options": [
      "それに",
      "でも",
      "あと",
      "それから"
    ],
    "answer": "それに",
    "explanation": "'それに' digunakan untuk menambahkan poin positif/negatif yang sejalan (lagi pula / selain itu)."
  },
  {
    "id": "g151",
    "question": "料理はおいしかったです。（　　　）、ちょっと高かったです。",
    "options": [
      "でも",
      "それに",
      "あと",
      "それから"
    ],
    "answer": "でも",
    "explanation": "'でも' digunakan untuk menghubungkan kalimat yang bertentangan (tetapi)."
  },
  {
    "id": "g152",
    "question": "新幹線に乗りました。（　　　）、友だちに会いました。",
    "options": [
      "それから",
      "それに",
      "でも",
      "あと"
    ],
    "answer": "それから",
    "explanation": "'それから' digunakan untuk urutan kejadian (setelah itu / kemudian)."
  },
  {
    "id": "g153",
    "question": "京都（　　　）旅行しました。新幹線（　　　）行きました。",
    "options": [
      "へ / で",
      "に / に",
      "で / で",
      "へ / に"
    ],
    "answer": "へ / で",
    "explanation": "Pergi jalan-jalan ke Kyoto (京都へ), menggunakan Shinkansen (新幹線で)."
  },
  {
    "id": "g154",
    "question": "日曜日、うちでゆっくり（　　　）。",
    "options": [
      "しました",
      "でした",
      "ました",
      "なかったです"
    ],
    "answer": "しました",
    "explanation": "Bentuk lampau dari します adalah しました."
  },
  {
    "id": "g155",
    "question": "マリエルさん、元気でしたか？\nいえ、あまり（　　　）。",
    "options": [
      "元気じゃなかったです",
      "元気くなかったです",
      "元気でした",
      "元気ありません"
    ],
    "answer": "元気じゃなかったです",
    "explanation": "Bentuk negatif lampau dari kata sifat-na (元気)."
  }
];
