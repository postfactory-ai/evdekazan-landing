"use client";

import React from "react";

export default function HomePage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Teşekkürler! Bu şu an demo formu. Gerçek kayıt sistemi eklendiğinde burada devreye girecek."
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Üst navigasyon */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-white shadow-sm">
              <span className="text-lg font-semibold">E</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight text-slate-900">
                EvdeKazan
              </span>
              <span className="text-xs text-slate-500">
                Evden çalış, adil kazan
              </span>
            </div>
          </div>

          {/* Menü */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#how-it-works" className="hover:text-teal-600">
              Nasıl Çalışacak?
            </a>
            <a href="#who" className="hover:text-teal-600">
              Kimler için?
            </a>
            <a href="#trust" className="hover:text-teal-600">
              Güven
            </a>
            <a href="#faq" className="hover:text-teal-600">
              SSS
            </a>
            <a
              href="#early-access"
              className="rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600"
            >
              Erken erişim
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-12 md:flex-row md:py-20">
            {/* Sol: metin */}
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-100">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                Yakında yayında: Evden çalışmak isteyenlerle işverenleri buluşturuyoruz.
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Evden çalışmak isteyenlerle{" "}
                <span className="text-teal-600">güvenilir işverenleri</span>{" "}
                aynı çatı altında topluyoruz.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                Ev hanımı, engelli, öğrenci veya freelancer olabilirsin.
                EvdeKazan, evden yapılabilir işleri ve gerçek işverenleri
                şeffaf, güvenli ve topluluk odaklı bir platformda buluşturmaya hazırlanıyor.
              </p>

              {/* CTA’lar */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#early-access"
                  className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-600"
                >
                  Erken erişime ücretsiz katıl
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-teal-500 px-6 py-3 text-sm font-semibold text-teal-600 hover:bg-teal-50"
                >
                  EvdeKazan nasıl çalışacak?
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Ücretsiz. Spam yok. Sadece önemli duyurular ve açılış bilgileri.
              </p>
            </div>

            {/* Sağ: görsel blok */}
            <div className="w-full md:w-1/2">
              <div className="relative mx-auto max-w-md rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                      Topluluk görünümü
                    </p>
                    <p className="text-sm text-slate-500">
                      Evden çalışanlar & işverenler
                    </p>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                    Beta yakında
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      🏠
                    </div>
                    <p className="text-xs font-semibold text-slate-800">
                      Ev hanımı
                    </p>
                    <p className="mt-1 text-[11px] text-center text-slate-500">
                      El işi, içerik, destek işleri
                    </p>
                  </div>

                  <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                      💻
                    </div>
                    <p className="text-xs font-semibold text-slate-800">
                      Öğrenci
                    </p>
                    <p className="mt-1 text-[11px] text-center text-slate-500">
                      Tasarım, sosyal medya, çeviri
                    </p>
                  </div>

                  <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                      🧑‍🦽
                    </div>
                    <p className="text-xs font-semibold text-slate-800">
                      Engelli
                    </p>
                    <p className="mt-1 text-[11px] text-center text-slate-500">
                      Uzaktan, erişilebilir görevler
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-900 px-4 py-3 text-xs text-slate-100">
                  <p className="font-semibold">İşveren paneli (erken erişim)</p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Kısa süreli görevler, proje bazlı işler ve uzaktan destek
                    ihtiyaçları için hızlıca ilan açabileceksin.
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Kolay para vaadi yok, gerçek iş bağlantıları var.</span>
                  <span>EvdeKazan · Beta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Güven */}
        <section id="trust" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Neden EvdeKazan’a güvenebilirim?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                EvdeKazan, kısa yoldan zenginlik vadeden bir sistem değil. Gerçek
                işverenlerle, evden çalışmak isteyen gerçek insanları şeffaf ve
                anlaşılır kurallarla bir araya getirmeyi hedefliyoruz.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  ✓
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Kolay para vaadi yok
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Günde 2 saat çalış, zengin ol gibi sloganlar yok. Net iş
                  tanımı, net ücret ve net beklenti üzerine kurulu bir yapı
                  kurmaya çalışıyoruz.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                  👥
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Topluluk ve şeffaflık
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  İş tanımı, ücret aralığı ve tarafların geri bildirimleri
                  olabildiğince açık olacak. Şüpheli ilan ve davranışlar için
                  bildirim sistemi planlıyoruz.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  ₺
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Ücretsiz başlangıç
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Platformun erken erişim döneminde katılım tamamen ücretsiz
                  olacak. Gelecekteki kazanç modelimizi ve komisyon yapımızı
                  herkese açık ve anlaşılır şekilde paylaşacağız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kimler için? */}
        <section id="who" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                EvdeKazan kimin için tasarlandı?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                Evden gelir elde etmek isteyen bireylerden, kısa süreli işlere
                ihtiyaç duyan küçük işletmelere kadar birçok farklı profili bir
                araya getirmek istiyoruz.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                <span className="mb-3 text-2xl">🏠</span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Ev hanımları
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Evden çıkmadan, el emeği, içerik üretimi, destek veya basit
                  dijital görevlerle gelir elde etmek isteyenler için.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                <span className="mb-3 text-2xl">🧑‍🦽</span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Engelli bireyler
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Fiziksel olarak ofise gitmesi zor olan ama yeteneklerini
                  uzaktan kullanmak isteyen herkes için erişilebilir görevler.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                <span className="mb-3 text-2xl">🎓</span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Öğrenciler & ek gelir arayanlar
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Dersler veya iş dışında, uygun saatlerde yapılabilecek proje
                  ve mikro görevler ile ek gelir fırsatları.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                <span className="mb-3 text-2xl">🏢</span>
                <h3 className="text-sm font-semibold text-slate-900">
                  İşverenler & küçük işletmeler
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Sosyal medya, veri girişi, müşteri mesaj yanıtı, çeviri gibi
                  işlerini güvenilir uzaktan çalışanlara devretmek isteyenler
                  için.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl çalışacak? */}
        <section id="how-it-works" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                EvdeKazan nasıl çalışacak?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                İlk etapta mail listesi ve basit formlar üzerinden topluluk
                oluşturacağız. Sonrasında ise profil, ilan ve eşleşme sistemini
                kademeli olarak devreye alacağız.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
                  1
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Erken erişime katıl
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Mail adresini bırak, platform açıldığında ve ilk ilanlar
                  geldiğinde haberdar ol. İlk kullanıcılar öncelikli fırsatlar
                  görecek.
                </p>
              </div>

              <div className="relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
                  2
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Profilini oluştur
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Yeteneklerin, çalışabileceğin saatler, ücret beklentin ve
                  tercihlerine göre bir profil doldur. İşverenler seni bu profil
                  üzerinden görecek.
                </p>
              </div>

              <div className="relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
                  3
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  İlanlarla eşleş
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Senin profilinle uyumlu ilanlar listelenecek. Başvur, detayları
                  konuş ve uzaktan çalışmaya başla. Her şey olabildiğince şeffaf
                  olacak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Erken erişim formu */}
        <section
          id="early-access"
          className="border-b border-slate-200 bg-gradient-to-r from-teal-50 via-slate-50 to-amber-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Erken erişim listesine ücretsiz katıl.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  Platform açıldığında, ilk iş ilanları ve duyuruları doğrudan
                  e-postana gelsin. Spam göndermeyiz, istediğin zaman tek tıkla
                  listeden çıkabilirsin.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• Evden çalışmak isteyenler için erken kayıt.</li>
                  <li>• İşverenler için açılış döneminde ekstra görünürlük.</li>
                  <li>• Topluluk geri bildirimleriyle yön verilen bir platform.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="role"
                      className="text-xs font-medium text-slate-700"
                    >
                      Rolün nedir?
                    </label>
                    <select
                      id="role"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100"
                    >
                      <option value="">Seçiniz…</option>
                      <option value="seeker">Evden çalışmak istiyorum</option>
                      <option value="employer">
                        İşverenim / iş vermek istiyorum
                      </option>
                      <option value="both">
                        Hem iş arıyorum hem iş verebilirim
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-slate-700"
                    >
                      E-posta adresin
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ornek@eposta.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="note"
                      className="text-xs font-medium text-slate-700"
                    >
                      İstersen bize kendini kısaca tanıt (isteğe bağlı)
                    </label>
                    <textarea
                      id="note"
                      rows={3}
                      placeholder="Örneğin: Evden yapılabilecek veri girişi ve müşteri mesajları işleri arıyorum."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600"
                  >
                    Listeye ücretsiz katıl
                  </button>

                  <p className="text-[11px] leading-snug text-slate-500">
                    “Listeye katıl” diyerek e-posta adresinin erken erişim ve
                    duyurular için kullanılmasını kabul etmiş olursun. KVKK
                    metnimizi inceleyebilir, istediğin zaman listeden
                    çıkabilirsin.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* KVKK & şeffaflık */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Verilerini ve zamanını önemsiyoruz.
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Kişisel verilerini, KVKK’ya uygun şekilde saklamayı ve üçüncü
                  taraflarla iznin olmadan paylaşmamayı taahhüt ediyoruz.
                  Hiçbir zaman gizli ücret veya sürpriz kesinti göstermemek
                  EvdeKazan’ın temel prensibidir.
                </p>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>
                  Lütfen hiçbir zaman şifre, SMS doğrulama kodu veya hassas
                  kişisel bilgilerini bizimle ya da platformdaki diğer
                  kullanıcılarla paylaşma. Şüpheli ilan ve davranışları bize
                  bildirmen için kolay bir mekanizma kurguluyoruz.
                </p>
                <p className="text-xs text-slate-500">
                  KVKK Aydınlatma Metni ve Gizlilik Politikası sayfalarımız
                  hazırlık aşamasındadır. Yayına alındığında burada bağlantıları
                  paylaşacağız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section id="faq" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Sık sorulan sorular
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                EvdeKazan şu an geliştirme aşamasında. Aşağıda en çok sorulan
                soruların kısa yanıtlarını bulabilirsin.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <details className="group rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  EvdeKazan bir yatırım veya para gönderme sistemi mi?
                  <span className="ml-4 text-slate-400 group-open:hidden">+</span>
                  <span className="ml-4 hidden text-slate-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Hayır. EvdeKazan, işverenlerle evden çalışmak isteyenleri
                  buluşturan bir platformdur. Senden yatırım, kayıt ücreti
                  veya ön ödeme talep etmez. Ödeme süreçleri taraflar arasında
                  veya ileride entegre edeceğimiz güvenli yöntemler üzerinden
                  yürütülecektir.
                </p>
              </details>

              <details className="group rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  Siteye kayıt olmak ücretli mi?
                  <span className="ml-4 text-slate-400 group-open:hidden">+</span>
                  <span className="ml-4 hidden text-slate-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Erken erişim döneminde platforma katılım tamamen ücretsiz
                  planlanmaktadır. İleride oluşacak tüm ücretlendirme ve
                  komisyon yapısı herkese açık, net ve anlaşılır şekilde
                  paylaşılacaktır.
                </p>
              </details>

              <details className="group rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  Ödemeler nasıl yapılacak?
                  <span className="ml-4 text-slate-400 group-open:hidden">+</span>
                  <span className="ml-4 hidden text-slate-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  İlk aşamada, anlaşma ve ödeme taraflar arasında
                  gerçekleşecek. Platform geliştikçe, daha güvenli ve
                  izlenebilir ödeme altyapılarını entegre etmeyi
                  hedefliyoruz. Bu süreçle ilgili güncellemeleri şeffaf
                  şekilde duyuracağız.
                </p>
              </details>

              <details className="group rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  Dolandırıcılık riskini nasıl azaltıyorsunuz?
                  <span className="ml-4 text-slate-400 group-open:hidden">+</span>
                  <span className="ml-4 hidden text-slate-400 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Kullanıcı profilleri, iş geçmişi ve geri bildirimlerini
                  olabildiğince görünür kılmak, şüpheli ilanlar için
                  bildirim sistemi ve basit güven kuralları belirlemek temel
                  yaklaşımımız olacak. Yine de hiçbir platform %100 garanti
                  veremez; bu nedenle kullanıcılarımızı bilinçli hareket
                  etmeye teşvik ediyoruz.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-slate-100">EvdeKazan</p>
            <p className="max-w-md text-xs text-slate-400">
              Evden çalışmak isteyenlerle işverenleri buluşturmayı hedefleyen
              bağımsız bir girişim. Henüz geliştirme aşamasındayız.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#" className="hover:text-slate-200">
              Hakkımızda (yakında)
            </a>
            <a href="#" className="hover:text-slate-200">
              Gizlilik Politikası (yakında)
            </a>
            <a href="#" className="hover:text-slate-200">
              KVKK Aydınlatma Metni (yakında)
            </a>
            <span className="text-slate-600">
              © {new Date().getFullYear()} EvdeKazan
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
