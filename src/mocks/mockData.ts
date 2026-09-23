import type { AppBootstrap, AppContent, Category, HeroSlide, MenuItem, Product } from '../models';
import { ROUTES } from '../constants/app';

const braceletImage = '/images/gorsel_3.png';
const necklaceImage = '/images/gorsel_2.png';
const bannerImage = '/images/gorsel_!.png';

export const products: Product[] = [
  { id: 'orange-pearl-bracelet', name: 'Turuncu Boncuk Bileklik', category: 'bracelet', price: 150, imageUrl: braceletImage, description: 'Sıcak turuncu boncuklar, inci detayları ve zarif kalp ucuyla elde hazırlanmıştır.', size: '25 cm', featured: true },
  { id: 'pink-pearl-necklace', name: 'Pembe - İncili Kolye', category: 'necklace', price: 200, imageUrl: necklaceImage, description: 'Pembe ve beyaz inci tonlarının sade, günlük kullanıma uygun birleşimi.', size: '50 cm', featured: true },
  { id: 'sky-pearl-bracelet', name: 'Gökyüzü İncili Bileklik', category: 'bracelet', price: 165, imageUrl: braceletImage, description: 'Mavi, beyaz ve bal tonlarında canlı boncuklardan oluşan özel tasarım.', size: '20 cm', featured: true },
  { id: 'soft-pearl-necklace', name: 'Soft İncili Kolye', category: 'necklace', price: 225, originalPrice: 250, imageUrl: necklaceImage, description: 'Yumuşak pastel tonlarda, ayarlanabilir el yapımı inci kolye.', size: '45 cm', featured: false },
  { id: 'amber-heart-bracelet', name: 'Amber Kalp Bileklik', category: 'bracelet', price: 145, imageUrl: braceletImage, description: 'Kalp charm detayıyla tamamlanan amber tonlu boncuk bileklik.', size: '18 cm', featured: false },
  { id: 'lilac-pearl-necklace', name: 'Lila İnci Kolye', category: 'necklace', price: 210, imageUrl: necklaceImage, description: 'Lila ve inci beyazı tonlarında minimal kolye.', size: '48 cm', featured: false },
  { id: 'pearl-charm', name: 'İnci Harf Charm', category: 'charm', price: 80, imageUrl: braceletImage, description: 'Kolyelere ve bilekliklere eklenebilen kişiselleştirilebilir charm.', size: '2 cm', featured: false },
  { id: 'color-keychain', name: 'Renkli Boncuk Anahtarlık', category: 'keychain', price: 120, imageUrl: bannerImage, description: 'Canlı renklerde boncuklarla elde dizilmiş anahtarlık.', size: '12 cm', featured: false },
];

export const categories: Category[] = [
  { id: 'all', label: 'Tüm Ürünler' },
  { id: 'necklace', label: 'Kolye' },
  { id: 'earring', label: 'Küpe' },
  { id: 'bracelet', label: 'Bileklik' },
  { id: 'hairpin', label: 'Toka' },
  { id: 'keychain', label: 'Anahtarlık' },
  { id: 'charm', label: 'Charm' },
];

export const slides: HeroSlide[] = [
  { id: 'summer', imageUrl: bannerImage, eyebrow: 'Yaza özel', title: 'Sizin İçin Dizildi', description: 'Rengini seç, hikâyeni bileğinde taşı.' },
  { id: 'sea', imageUrl: necklaceImage, eyebrow: 'Denizden ilhamla', title: 'İnci Dokunuşu', description: 'Özenle toplanmış tonlardan oluşan zarif seri.' },
];

export const menuItems: MenuItem[] = [
  { id: 'login', label: 'Giriş Yap', route: ROUTES.LOGIN },
  { id: 'all', label: 'Tüm Ürünler', route: ROUTES.PRODUCTS },
  { id: 'necklace', label: 'Kolye', route: `${ROUTES.PRODUCTS}?category=necklace` },
  { id: 'earring', label: 'Küpe', route: `${ROUTES.PRODUCTS}?category=earring` },
  { id: 'bracelet', label: 'Bileklik', route: `${ROUTES.PRODUCTS}?category=bracelet` },
  { id: 'hairpin', label: 'Toka', route: `${ROUTES.PRODUCTS}?category=hairpin` },
  { id: 'keychain', label: 'Anahtarlık', route: `${ROUTES.PRODUCTS}?category=keychain` },
  { id: 'charm', label: 'Charm', route: `${ROUTES.PRODUCTS}?category=charm` },
  { id: 'about', label: 'Hakkımızda', route: `${ROUTES.HOME}#about` },
  { id: 'profile', label: 'Hesabım', route: ROUTES.PROFILE },
  { id: 'help', label: 'Yardım & Destek', route: `${ROUTES.HOME}#help` },
];

export const content: AppContent = {
  brandName: 'Miranne',
  header: { menu: 'Menüyü aç', search: 'Ara', account: 'Hesabım', cart: 'Sepetim', home: 'Ana sayfa' },
  home: { brandMark: 'M', collectionEyebrow: 'El yapımı • Sana özel', collectionTitle: 'Yeni koleksiyonu keşfet', collectionAction: 'Tümünü Gör', aboutTitle: 'Küçük detaylar, büyük anlamlar', aboutText: 'Her Miranne parçası, günlük anlarınıza renk katmak için küçük partiler halinde elde hazırlanır.', helpTitle: 'Yardıma mı ihtiyacın var?', helpText: 'Ürünler ve sipariş süreciyle ilgili bize her zaman ulaşabilirsin.' },
  products: { title: 'Kolye', resultSuffix: 'ürün', sort: 'Sırala', filter: 'Filtrele', empty: 'Bu kategoride henüz ürün bulunmuyor.', featured: 'Öne çıkanlar', addToCart: 'Sepete Ekle', addedToCart: 'Sepete eklendi', detail: 'Ürün Detayı', size: 'Ölçü', description: 'Ürün hakkında' },
  search: { placeholder: 'Ürünlerde ara', title: 'Arama', prompt: 'Aradığın parçayı yazmaya başla.', noResult: 'Aramana uygun ürün bulunamadı.', resultSuffix: 'sonuç' },
  auth: { loginTitle: 'Giriş Yap', loginSubtitle: 'Hesabınızla giriş yapın', email: 'E-Posta Adresi', password: 'Şifre', passwordConfirmation: 'Şifre (tekrar)', forgotPassword: 'Şifremi Unuttum', loginAction: 'GİRİŞ YAP', registerTitle: 'Kayıt Ol', registerSubtitle: 'Siparişlerinizi kolayca takip edebilmek veya daha fazlası için hesap oluşturun.', createAccount: 'Hesap Oluştur', createAccountAction: 'HESAP OLUŞTUR', firstName: 'Ad', lastName: 'Soyad', forgotTitle: 'Şifremi Sıfırla', forgotSubtitle: 'Şifrenizi sıfırlamak için size bir e-posta göndereceğiz.', resetAction: 'ŞİFREMİ SIFIRLA', resetTitle: 'Şifremi Sıfırla', resetSubtitle: 'Lütfen yeni şifrenizi girin.', sendAction: 'GÖNDER', successMessage: 'Parola sıfırlama işlemi başarılı.', invalidEmail: 'Geçerli bir e-posta adresi girin.', requiredField: 'Bu alan zorunludur.', passwordMismatch: 'Şifreler eşleşmiyor.' },
  cart: { title: 'Sepetim', empty: 'Sepetinizde ürün bulunmuyor', startShopping: 'ALIŞVERİŞE BAŞLA', quantity: 'Adet', total: 'TOPLAM', checkout: 'Ödeme işlemine geç', continue: 'Alışverişe devam et', shippingHint: 'Ücretsiz kargo için sepetinizi tamamlayın', shippingComplete: 'Harika! Ücretsiz kargo kazandınız ✨', remove: 'Ürünü kaldır', decrease: 'Adedi azalt', increase: 'Adedi artır' },
  profile: { title: 'Hesabım', greeting: 'Merhaba', orders: 'Siparişlerim', addresses: 'Adreslerim', favorites: 'Favorilerim', logout: 'Çıkış Yap', guestText: 'Siparişlerinizi ve favorilerinizi görmek için giriş yapın.' },
  common: { loading: 'Miranne hazırlanıyor…', retry: 'Tekrar Dene', back: 'Geri', close: 'Kapat', errorTitle: 'Bir şeyler ters gitti', notFoundCode: '404', notFoundTitle: 'Bu sayfa bulunamadı', notFoundAction: 'Ana Sayfaya Dön' },
};

export const appBootstrap: AppBootstrap = { products, categories, slides, menuItems, content };
