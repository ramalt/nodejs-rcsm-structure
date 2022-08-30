
# Node.js ve Express.js ile API
Projede basit bir ürün ekleme, silme senaryolarında geliştirilirmiş, kullanılabilir olmaktan daha çok, 
başlangıç seviyede temiz mimaride nasıl geliştirilebileceğine odaklanılmıştır.

## RCSM Mimarisi ve Temiz Kod
Basit seviyelerdeki projeler için tüm app.js içerisinde bitirebiliriz. Bu bir sorun olarak 
görünmeyebilir. Ancak proje büyümeye başladığında, farklı özellikler dahil olmaya 
başladığında ve iş mantıkları karmaşık hal almaya başlayınca mimarilere ihtiyaç duyarız.

MVC ye benzeyen RCSM mimarisi,

- Route
- Controller
- Service
- Model

katmanlarını içerir. Amaç HTTP ve Business Logic katmanlarını ayırmaktır. HTTP tarafı
rotalarla birlilte iş akışını kontrol eder, veriyi bussiness logic katmanından alır. Business logic veri kaynağıyla
iletişim kurar. veri sunucudan bu katmanda alınır.




## Dosya Yapısı

        src
        ├── api //HTTP istekleri bu katmana gelir.
        │   ├── controllers //route controllerları bu kısımdadır.
        │   ├── middlewares //ara kontroller bu kısımda tutulur.
        │   └── routes  //tüm routelar bu modülde tanımlanır. 
            └── app.js  //tüm bağımlılıklar burada hazırlanır.
        ├── config  //.env içerisindeki sabit bilgiler burada obje olarak tutulur.
        ├── helpers //ek operasyonlar için küçük modüllerimiz olabilir.
        ├── loaders //veritabanı bağlantısı gibi bazı başlatıcılar buradadır.
        ├── models  //veritabanı model nesneleri buradadır. veri bu işlemler üzderinden yapılır.
        ├── scripts //bazı komut dosyaları saklanabilir.
        ├── services //veri servisler aracılıyla burada alınır, logic kısım burada gerçekleşir.
        └── util    //  yardımcı araçlarımız burada tutulur.
        └── server.js //uygulama çıkış noktasıdır. Uygulama burada app.js ten başlatılır.
