# Anneler Günü Özel Web Sitesi - Tasarım Belgesi

Bu belge, anneler günü için hazırlanacak olan özel web sitesinin teknik ve görsel detaylarını içerir.

## 1. Görsel Konsept
- **Renk Paleti:** 
  - Arka Plan: Soft Bej (#FFF9F0)
  - Ana Renk: Pudra Pembesi (#FCE4EC)
  - Vurgu Rengi: Gül Kurusu (#D4A5A5)
- **Tipografi:**
  - Mektup İçeriği: 'Dancing Script' (Google Fonts - Zarif El Yazısı)
  - Başlıklar: 'Playfair Display' (Serif, Klasik ve Şık)
- **Atmosfer:** Minimalist, soft, huzurlu ve duygusal.

## 2. Teknik Altyapı
- **Framework:** Next.js (App Router)
- **Dil:** TypeScript
- **Animasyon Kütüphanesi:** Framer Motion (Yüksek kaliteli geçişler ve yüzen objeler için)
- **Stil:** CSS Modules veya Tailwind CSS (Kullanıcının isteğine göre Vanilla CSS hissi korunacak)
- **Yayınlama:** Vercel

## 3. Özellikler ve Animasyonlar
- **Uçuşan Objeler:** Ekranın arkasında yavaşça yükselen ve dönen şeffaf pembe kalpler ve gül yaprakları.
- **İnteraktif Zarf:** 
  - Sayfa açıldığında merkezde zarif bir zarf görünür.
  - Tıklama ile zarfın kapağı 3D bir efektle yukarı açılır.
  - Zarfın içinden kağıt (mektup) yavaşça süzülerek yukarı çıkar ve ekranın çoğunu kaplar.
- **Duygusal Mesaj:** Yazı, kağıt açıldığında "typing effect" (daktilo efekti) ile sanki o an yazılıyormuş gibi görünecek.

## 4. Mesaj İçeriği (Taslak)
"Canım Annem,
Dünyadaki en güvenli limanım, ilk öğretmenim ve en yakın dostum... Hayat yolculuğumda bana her zaman sevginle ışık oldun. Varlığın, aldığım her nefeste bana güç veriyor. Ellerinden öper, kalbindeki o sonsuz şefkatin hiç eksilmemesini dilerim. 
Anneler Günün Kutlu Olsun. Seni Çok Seviyorum."

## 5. Uygulama Adımları
1. Next.js projesinin kurulumu.
2. Temel stil ve fontların entegrasyonu.
3. Arka plan animasyonlarının (kalpler/güller) oluşturulması.
4. Zarf ve mektup bileşeninin 3D CSS ile kodlanması.
5. Mesajın ve daktilo efektinin eklenmesi.
6. Vercel'e dağıtım için hazırlık.

---
**Onaylıyor musunuz?** Onayınızdan sonra kodlama aşamasına geçilecektir.
