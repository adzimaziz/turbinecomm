# Skrip Pembentangan — Paper 1: Digitalizing Genco O&M

GT & ST Community · Day 1 · 11:00 · Presenter: **Adzim Aziz** — Manager, Data Analytics, Advanced Data Analytics

**Format:** 15 minit slide (9 slide, lebih kurang 14 minit) + 15 minit live demo.
**Bahasa:** Bahasa Melayu, istilah teknikal dalam English seperti yang biasa digunakan di plant.

> **Sebelum mula:** buka deck, masukkan PIN, tekan **⛶** (fullscreen). Pilih **night mode** untuk dewan gelap, **day mode** untuk dewan terang atau projector yang malap.

| # | Slide | Masa | Kumulatif |
|---|---|---|---|
| 1 | Title | 0:30 | 0:30 |
| 2 | The O&M reality | 1:30 | 2:00 |
| 3 | Broad and deep | 1:00 | 3:00 |
| 4 | One portal, the whole plant | 2:00 | 5:00 |
| 5 | Four jobs, one sign-in | 3:00 | 8:00 |
| 6 | Catch boiler faults as a pattern | 2:30 | 10:30 |
| 7 | From a score to a sentence | 2:00 | 12:30 |
| 8 | What we learned | 1:30 | 14:00 |
| 9 | Let's see it live | 0:30 | 14:30 |

---

## Slide 1 — Title: *Digitalizing Genco O&M*

**Masa:** ~30 saat

**Tindakan:**
- Biarkan 3D plant berpusing sendiri semasa memperkenalkan diri.
- (Pilihan) Seret plant sekali untuk tunjuk ia interaktif. Jangan lama.

**Skrip:**

> Assalamualaikum dan selamat pagi semua.
>
> Saya Adzim Aziz, Manager, Data Analytics di Advanced Data Analytics, TED. Paper 1 hari ini bertajuk **Digitalizing Genco O&M — Practical Use Cases and Insights**.
>
> Saya tak akan bercakap tentang digitalisation sebagai konsep. Saya nak tunjuk dua sistem yang **sudah berjalan**: **SJSAS Smart Plant** di Manjung, dan **JEP Boiler Anomaly Detection** di Jimah East.
>
> Model 3D yang anda nampak ni adalah plant SJSAS yang sebenar — landing page sistem tu sendiri.
>
> Saya akan ambil lebih kurang 15 minit untuk overview, kemudian 15 minit lagi untuk **live demo**.

---

## Slide 2 — *The data already exists. Turning it into a decision is the hard part.*

**Masa:** ~1 min 30 saat

**Tindakan:** (Pilihan) keluarkan ADAbot (red dot) dan tap setiap kad semasa menerangkannya.

**Skrip:**

> Mari kita mula dengan realiti O&M hari ini.
>
> **Pertama — data in silos.** Sebenarnya hampir semua data yang kita perlukan dah wujud. Ada dalam **PI historian**, dalam **GOMS** untuk planned dan unplanned outage, dalam **coal certificate database**, dan dalam banyak **Excel file** — stockyard, UOR, correction factor. Masalahnya, semua ni duduk di tempat yang berbeza.
>
> **Kedua — stitched by hand.** Setiap pagi ada orang yang compile **daily report** secara manual. Rekod GOMS dan rekod station lama-kelamaan tak sama. **Heat-rate deviation** selalunya diterangkan *selepas* ia berlaku. Dan untuk **coal blending**, kita scan table yang besar dengan mata.
>
> **Ketiga — one tag at a time.** Alarm kita kebanyakannya **fixed, single-tag limit**. Tapi masalah boiler seperti **mill choking**, **slagging** dan **fouling** tak bermula dengan satu tag melepasi had. Ia bermula sebagai beberapa sensor yang **berubah bersama-sama**. Bila satu tag akhirnya trip, event tu dah pun berlaku.
>
> Jadi, data dah ada. **Yang susah ialah tukar data tu kepada keputusan — sebelum shift habis.**

---

## Slide 3 — *Broad and deep*

**Masa:** ~1 minit

**Tindakan:** Tap kad SJSAS kemudian kad JEP dengan laser (jika ADAbot keluar).

**Skrip:**

> Untuk itu kita ada dua use case, dengan dua pendekatan yang berbeza.
>
> **Use case A — SJSAS Smart Plant — adalah *broad*.** Satu **plant-wide O&M portal** untuk Manjung: GF1 iaitu M1 hingga M3, GF2 atau M4, dan M5. Di dalamnya ada daily performance, reliability, **coal and fuel advisors**, dan satu **AI assistant**, semuanya di belakang **satu TNB sign-in**.
>
> **Use case B — JEP Boiler Anomaly Detection — adalah *deep*.** Fokus pada satu masalah sahaja: **combustion anomaly** di Jimah East, Unit 10 dan 20. Lebih kurang **141 PI tag**, melalui **3-layer AI model** yang bukan sahaja flag anomali, tapi **terangkan dalam bahasa engineering**.
>
> Kedua-duanya dibina **in-house**, guna data yang plant memang dah percaya — PI, GOMS, dan fail station sendiri.

---

## Slide 4 — *One portal, the whole plant*

**Masa:** ~2 minit

**Tindakan:**
- **Seret** model 3D untuk pusing plant. Di tablet, condongkan tablet (**gyroscope**).
- Dengan ADAbot keluar, tap label **GF1**, **M5**, **Coal Stock Yard**, **Demurrage** satu per satu.
- Kemudian tap kad modul di sebelah kanan.

**Skrip:**

> Ini landing page SJSAS Smart Plant. Bila user sign in, mereka masuk ke **model 3D plant** ni.
>
> Setiap **hotspot** adalah pintu masuk ke bahagian plant tu: **GF1**, **GF2**, **M5**, **Coal Stock Yard**, dan **Demurrage** di jetty. Tekan GF1, anda terus ke dashboard GF1. Tekan M5, anda masuk ke **Coal Fineness Advisor**.
>
> Di belakang model ni ada **empat kumpulan modul**:
> - **Performance** — Daily Summary, Trends, dan **expected heat-rate model**.
> - **Reliability** — **UOR dan EUOF**, **outage risk**, **failure modes**, dan **reconciliation**.
> - **Fuel** — coal database, **Blend Advisor**, **M5 Fineness Advisor**, stock yard, dan demurrage.
> - **AI** — **ADAbot** chat, **Daily Brief**, dan **Telegram bot**.
>
> Dan semua ni guna **satu sign-in — TNB Active Directory account**. Password disemak terus dengan AD dan **tidak disimpan** oleh sistem.

---

## Slide 5 — *Four jobs, one sign-in*

**Masa:** ~3 minit (slide paling panjang — ambil masa di sini)

**Tindakan:** Dengan ADAbot keluar, tap **setiap bullet** semasa menerangkannya (laser highlight satu bullet pada satu masa).

**Skrip:**

> Mari kita tengok apa yang setiap modul buat.
>
> **Performance.** Setiap pagi, pada **09:22**, pipeline kita tarik data PI 30 hari, fail stockyard dan coal database, dan kira **heat rate dan efficiency** bagi setiap unit. Jadi bila **morning meeting** bermula, nombor dah siap. Kita juga ada **expected heat-rate model** — model **gradient boosting** yang belajar dari sejarah plant sendiri. Ia flag hari-hari di mana heat rate **tak boleh diterangkan** oleh load, kualiti arang, condenser atau make-up.
>
> **Reliability.** Kita track **UOR dan EUOF** bagi setiap unit, dan kita buat **reconciliation** antara GOMS dengan fail UOR station sendiri — setiap perbezaan disenaraikan: masa tamat yang lain, MW loss yang lain, event yang ada di satu pihak sahaja. Kemudian ada **Monte Carlo forecast** untuk UOR — bukan satu nombor, tapi **P10, P50 dan P90** untuk 365 hari akan datang.
>
> **Fuel.** **Blend Advisor** — dengan 10 jenis arang, ada **315 kombinasi pair dan ratio**. Tiada siapa boleh baca semua tu dengan mata. Jadi advisor ni kira **slagging, fouling dan ash index** untuk setiap blend, semak dengan **boiler operating limits**, dan **susun** dari yang terbaik. **M5 Fineness Advisor** pula ramal **coal fineness** dari setting mill dan sifat arang, dan cadangkan setting mill untuk capai target. Ia **advisory sahaja** — engineer yang buat keputusan.
>
> **AI — ADAbot.** User boleh tanya data dalam **bahasa biasa**, di web atau Telegram. Contohnya: "UOR GF1 hari ni?" Dan prinsip paling penting di sini: **the LLM never computes a number**. Model AI hanya pilih **tool** mana yang perlu dipanggil. **Backend** yang kira semua nombor dari data sebenar. Kemudian barulah model tulis jawapan guna keputusan tu. Jadi tiada nombor yang direka.

---

## Slide 6 — *Catch boiler faults as a pattern, not an alarm*

**Masa:** ~2 min 30 saat

**Tindakan:**
- Tap kad **L1** → popup graf keluar. Terangkan, kemudian tutup (✕ atau tap luar).
- Ulang untuk **L2** dan **L3**.
- Jika ADAbot keluar: tekan butang **▶ See example**, kemudian tap **titik merah** dalam graf dengan laser.

**Skrip:**

> Sekarang kita pergi ke JEP. Soalannya berbeza: masalah boiler seperti mill choking, slagging dan fouling muncul sebagai **sensor yang berhenti bergerak bersama**, lama sebelum satu tag trip alarm.
>
> Data: **Unit 10 dan 20**, lebih kurang **141 PI tag**, data setiap **5 minit**, **sync setiap jam**. Dan kita guna **tiga layer**.
>
> **Layer 1 — Normal for this load?** *(buka graf L1)* Setiap sensor disemak dengan **envelope** normalnya, mengikut **MW regime** semasa — ada 9 regime, dari startup sampai high load. Tengok contoh ni: **72°C adalah normal pada base load, tapi abnormal pada part load.** Bacaan yang sama, keputusan yang berbeza. Itu yang L1 tangkap — **single-sensor excursion** yang abnormal *untuk load tu*.
>
> **Layer 2 — Still moving together?** *(buka graf L2)* Di sini kita guna **Isolation Forest** bagi setiap **subsystem**: **metal temperature, steam, fuel mill, air draft, dan thermal**. Model belajar macam mana sensor-sensor ni **biasanya bergerak bersama**. Dalam contoh ni, setiap titik adalah satu snapshot 5 minit Mill C. Biasanya, bila coal flow naik, **mill DP** naik sekali. Titik merah ni — **coal flow normal, tapi DP tinggi**. Itu tanda **choking atau arang basah**. Dan perhatikan: **tiada satu tag pun yang melepasi had alarm**. Itu **broken relationship** yang L2 tangkap.
>
> **Layer 3 — Drifting slowly?** *(buka graf L3)* Model ramal **expected output** unit dari sensor-sensornya, dan kita bandingkan dengan **actual**. Jurang ni membesar perlahan selama berminggu-minggu — terlalu perlahan untuk perasan dari hari ke hari — sampai **residual melepasi −2σ** dan di-flag. Ini corak tipikal **fouling** atau **calibration drift**.
>
> Graf-graf ni adalah **contoh ilustrasi**, bukan data plant sebenar — tapi itulah logik setiap layer.

---

## Slide 7 — *From a score to a sentence an operator can act on*

**Masa:** ~2 minit

**Tindakan:** Dengan ADAbot keluar, tap **bar SHAP** satu per satu, kemudian tap ayat insight di bawah.

**Skrip:**

> Tapi model yang bagi **skor** sahaja tak berguna kepada operator. "Anomaly score −0.31" — operator nak buat apa dengan nombor tu?
>
> Jadi setiap anomali Layer 2 kita terangkan guna **SHAP** — **SHapley Additive exPlanations**. SHAP kira **berapa banyak setiap sensor menyumbang** kepada skor anomali tu.
>
> Dalam contoh ni, Unit 20, subsystem **fuel mill**:
> - Penyumbang nombor satu: **Mill C DP naik**.
> - Nombor dua: **Mill C outlet temperature turun**.
> - Nombor tiga: **coal flow C naik**.
>
> Kemudian **insight engine** kita tukar maklumat ni jadi ayat engineering: *"High Mill C DP strongly suggests a mill blockage, choking, or poor coal quality — high moisture or ash."*
>
> Dan dashboard dibina untuk **control room**: tekan sensor, terus lompat ke **trend** sensor tu, dengan **MW load context** pada setiap chart, dan ada **live anomaly feed** bagi setiap unit.
>
> Jadi operator dapat **nama sensor dan sebab** — bukan sekadar nombor.

---

## Slide 8 — *What we learned*

**Masa:** ~1 min 30 saat

**Tindakan:** Tap setiap kad atau baris **"In practice"** dengan laser.

**Skrip:**

> Empat pengajaran utama, dan setiap satu datang dari benda yang kita betul-betul buat.
>
> **Satu — start from trusted data.** Orang guna sistem bila nombor dia **sama dengan apa yang mereka dah kenal**. Di SJSAS, pipeline PI 09:22 yang dah terbukti, kita **tak usik langsung**. Dan kita reconcile GOMS dengan fail UOR station sendiri.
>
> **Dua — explain, or it won't be used.** Nama sensor dan sebab, bukan sekadar skor. Di JEP: *"High Mill C DP — blockage, choking or wet coal"*, bukan anomaly score.
>
> **Tiga — the LLM writes words, not numbers.** Backend kira setiap angka. ADAbot: plan tool, backend compute, model cuma tulis jawapan.
>
> **Empat — engineer in the loop.** Advisor cadang, **engineer yang putuskan**. M5 advisor hanya cadangkan setting dalam julat yang dia dilatih, dan dia **beritahu** bila target tak boleh dicapai.

---

## Slide 9 — *Let's see it live*

**Masa:** ~30 saat

**Tindakan:** Sembunyikan ADAbot (red dot). (Pilihan) Tekan **QR** supaya audiens boleh scan dan buka deck di phone sendiri. Kemudian tukar ke browser/tablet untuk demo.

**Skrip:**

> Itu overview-nya. Sekarang saya nak tunjuk kedua-dua sistem secara **live**.
>
> Untuk **SJSAS**, kita akan tengok **3D landing**, **Daily Summary**, **fuel advisors**, dan **ADAbot**.
>
> Untuk **JEP**, kita tengok **anomaly feed**, **SHAP insight**, dan **sensor trend**.
>
> Lepas demo, kita buka untuk **Q&A**. Terima kasih.

---

## Persediaan Q&A

**"SHAP tu apa sebenarnya?"**
> Cara terangkan keputusan model AI. Ia bahagikan "kredit" skor anomali kepada setiap sensor — macam bahagi kredit secara adil antara ahli pasukan. Kita dapat tahu sensor mana yang paling banyak menolak skor jadi anomali, untuk *setiap* kejadian.

**"Berapa tepat model-model ni?"**
> Bergantung pada model. Contohnya M5 Fineness Advisor: **cross-validated R² sekitar 0.67, ±3.2 percentage point** pada 1σ — sebab itu ia kekal **advisory**, dan hanya cadang dalam julat data latihan. Untuk JEP, fokus kita ialah **explainability** supaya engineer boleh sahkan sendiri setiap flag.

**"False alarm macam mana?"**
> Itu sebab kita ada tiga layer dengan peranan berbeza, dan setiap flag ada **penjelasan sensor**. Engineer boleh nilai sendiri sama ada ia real. Langkah seterusnya ialah kumpul **feedback operator** pada setiap flag — real, false, atau dah diketahui — untuk tune threshold.

**"ADAbot guna AI apa? Selamat ke?"**
> Model utama **Claude Sonnet melalui Databricks**, dengan **Qwen yang di-host oleh ICT TNB** sebagai fallback. Prinsipnya, LLM **tak kira nombor** — backend yang kira dari data sebenar. Untuk Telegram, hanya akaun dalam **allow-list** boleh guna, dan server tak buka port.

**"Data security / access?"**
> Sign-in guna **TNB Active Directory**. Password tak disimpan. JEP ada **audit log** untuk setiap sign-in dan tindakan. Sistem berjalan dalam **rangkaian TNB**.

**"Boleh scale ke station lain?"**
> Ya. Komponen utama dah **reusable** — pipeline, sign-in, ADAbot, deploy script. Itu salah satu pengajaran kita: **build once, reuse**.

**"Berapa lama nak bina?" / "Siapa bina?"**
> Dibina **in-house** oleh team, dan disimpan dalam **GitHub** dengan version control.

---

## Kawalan semasa present (rujukan pantas)

| Tindakan | Sentuh | Keyboard |
|---|---|---|
| Slide seterusnya / sebelum | swipe, atau tap tepi kanan / kiri | → / ← |
| Senarai semua slide | tap nombor slide | O |
| QR code untuk audiens (buka site ni) | butang **QR** | Q |
| Day / night mode | ☀ / ☾ | T |
| ADAbot keluar / masuk | **red dot** | A |
| Laser ADAbot | tap kad, bullet, chip, label 3D | — |
| Buang highlight laser | tap ruang kosong | Esc |
| Contoh graf (slide 6) | tap kad L1 / L2 / L3 atau **▶ See example** | — |
| Pusing plant 3D | seret, atau condongkan tablet | — |
