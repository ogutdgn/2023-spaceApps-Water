import React from 'react';
import Layout from '../../components/Layout/Layout';
import "./Home.css";
// Video dosyasını import edin
import videoSource from '../../assets/video/video.mp4';

const Home = () => {
    return (
        <div>
            <Layout>
                <h3>
                    Su döngüsünde var olanı ancak koruyabiliriz, yeni su üretemeyiz. Peki ya koruyacak olan kim?
                </h3>
                {/* Videoyu buraya ekleyin */}
                <video width="100%" height="auto" controls>
                    <source src={videoSource} type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
                <h5>
                Merhaba web sitemize hoş geldiniz! Biz, suyun dünya üzerindeki yolculuğunu ve iklim değişikliğinin bu kritik kaynağa nasıl etki ettiğini anlamak isteyen herkese özel bir kapıyız.

                *1. Su Hakkında Ne Kadar Bilgilisin Anketi*

                Bir bilgi sınavına ne dersiniz? Su konusundaki bilgi seviyenizi test etmek için anketimizi keşfedin. Eğlenceli ve ilginç sorularla dolu olan bu anket, suyun dünya üzerindeki önemini ve korunması gerekliliğini daha iyi anlamanıza yardımcı olacak.

                *2. Güncellenen Makaleler*

                Sitemizde her hafta güncellenen makaleler bulacaksınız. Su döngüsü, suyun kaynakları, sürdürülebilir su kullanımı ve iklim değişikliğinin su kaynaklarına etkisi gibi konuları içeren makaleler, size su ile ilgili derinlemesine bilgi sunacak.

                *3. Kutu Oyunu*

                Sürpriz bir özellikle karşınızdayız! Kendi geliştirdiğimiz kutu oyunumuzu web sitemize entegre ettik. Suyun yolculuğunu oyunlaştırarak öğrenmeyi daha eğlenceli hale getirdik. Oyunu oynayın ve suyun önemini bir oyunla keşfedin.

                Sitemizi ziyaret edin ve su ile ilgili bilginizi artırın. Su, hayatın temel taşıdır ve onun önemi hakkında daha fazla bilgi edinmek, geleceğimizin sürdürülebilirliği için önemlidir. Biz buradayız, sizi bu heyecan verici su yolculuğuna davet ediyoruz!
                </h5>
            </Layout>
        </div>
    );
}

export default Home;
