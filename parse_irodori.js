const fs = require('fs');

const ocrText = `
1. お久しぶりです
先輩 せんぱい○ kakak tingkat; senior
後輩 こうはい○ adik tingkat; junior
知り合い しりあい○ kenalan
久しぶり ひさしぶり○ sudah lama tidak berjumpa
元気（な） げ↓んき（な） sehat
おかげさまで おかげさまで○ Terima kasih.
2. 日本に来てどのぐらいですか？
半年 はんとし↓／はんとし○ setengah tahun
1 年 いち↓ねん satu tahun
先月 せ↓んげつ／せんげつ○ bulan lalu
去年 きょ↓ねん tahun lalu
生活 せいかつ○ kehidupan
もう も↓う sudah
慣れる［2］ なれ↓る terbiasa; betah
ちょうど ちょうど○ pas; tepat
なんとか な↓んとか lumayan
まだ ま↓だ belum
～になる　（1 年になる） ～にな↓る　（いち↓ねんにな↓る） sudah ～tahun/bulan (Sudah setahun saya di Jepang.)
～か月 ～か↓げつ ～bulan
1 か月 いっか↓げつ satu bulan
2 か月 にか↓げつ dua bulan
3 か月 さんか↓げつ tiga bulan
4 か月 よんか↓げつ empat bulan
5 か月 ごか↓げつ lima bulan
6 か月 ろっか↓げつ enam bulan
7 か月 ななか↓げつ tujuh bulan
8 か月 はちか↓げつ delapan bulan
9 か月 きゅうか↓げつ sembilan bulan
10 か月 じゅっか↓げつ sepuluh bulan
11 か月 じゅういっか↓げつ sebelas bulan
12 か月 じゅうにか↓げつ dua belas bulan
～年 ～ねん ～ tahun
2 年 に↓ねん dua tahun
3 年 さんねん○ tiga tahun
4 年 よねん○ empat tahun
5 年 ごねん○ lima tahun
6 年 ろく↓ねん enam tahun
7 年 なな↓ねん／しち↓ねん tujuh tahun
8 年 はち↓ねん delapan tahun
9 年 きゅ↓うねん sembilan tahun
10 年 じゅ↓うねん sepuluh tahun
先週 せんしゅう○ minggu lalu
3. 日本では何をしていますか？
仕事 しごと○ pekerjaan
レストラン レ↓ストラン restoran
働く［1］ はたらく○ bekerja
ホテル ホ↓テル hotel
工場 こうじょ↓う pabrik
介護 か↓いご pengasuhan; perawatan (lansia)
仕事をする［3］ しごとをする○ bekerja
建設 けんせつ○ konstruksi
野菜 やさい○ sayur
作る［1］ つく↓る menanam (sayur) ; membuat
日本語学校 にほんごが↓っこう Sekolah Bahasa Jepang
勉強する［3］ べんきょうする○ belajar
専門学校 せんもんが↓っこう sekolah kejuruan
通う［1］ かよう○ pergi; menjalani pendidikan (sekolah)
主婦 しゅ↓ふ ibu rumah tangga
主夫 しゅ↓ふ bapak rumah tangga
忙しい いそがし↓い sibuk
大変（な） たいへん（な）○ sulit; berat
疲れる［2］ つかれ↓る capek; lelah
まあまあ（な） まあま↓あ（な） lumayan
楽しい たのし↓い menyenangkan
みんな みんな↓ semua orang
親切（な） し↓んせつ（な） ramah; baik hati
勉強になる［1］ べんきょうにな↓る belajar banyak hal
毎日 ま↓いにち／まいにち○ setiap hari 
学生 がくせい○ siswa 
プログラミング プログラミング○ pemrograman
`;

console.log("File saved");
