import React from 'react';
import Layout from '../../components/Layout/Layout';
import "./Home.css";
import videoSource from '../../assets/video/video.mp4';

const Home = () => {
    return (
        <Layout>
            <div className="container">
                <h3 className="slogan">
                    Su döngüsünde var olanı ancak koruyabiliriz, yeni su üretemeyiz. Peki ya koruyacak olan kim?
                </h3>
                <div className="video-container">
                    <video width="100%" controls>
                        <source src={videoSource} type="video/mp4" />
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>
                </div>
                <h5 className="content-text">
                Merhaba web sitemize hoş geldiniz! Biz, suyun dünya üzerindeki yolculuğunu ve iklim değişikliğinin bu kritik kaynağa nasıl etki ettiğini anlamak isteyen herkese özel bir kapıyız.

                <br/><br /><br />1-) Su Hakkında Ne Kadar Bilgilisin Anketi*

                Bir bilgi sınavına ne dersiniz? Su konusundaki bilgi seviyenizi test etmek için anketimizi keşfedin. Eğlenceli ve ilginç sorularla dolu olan bu anket, suyun dünya üzerindeki önemini ve korunması gerekliliğini daha iyi anlamanıza yardımcı olacak.

                <br/><br /><br />2-) Güncellenen Makaleler*

                Sitemizde her hafta güncellenen makaleler bulacaksınız. Su döngüsü, suyun kaynakları, sürdürülebilir su kullanımı ve iklim değişikliğinin su kaynaklarına etkisi gibi konuları içeren makaleler, size su ile ilgili derinlemesine bilgi sunacak.

                <br/><br /><br />3-)Kutu Oyunu*

                Sürpriz bir özellikle karşınızdayız! Kendi geliştirdiğimiz kutu oyunumuzu web sitemize entegre ettik. Suyun yolculuğunu oyunlaştırarak öğrenmeyi daha eğlenceli hale getirdik. Oyunu oynayın ve suyun önemini bir oyunla keşfedin.

                Sitemizi ziyaret edin ve su ile ilgili bilginizi artırın. Su, hayatın temel taşıdır ve onun önemi hakkında daha fazla bilgi edinmek, geleceğimizin sürdürülebilirliği için önemlidir. Biz buradayız, sizi bu heyecan verici su yolculuğuna davet ediyoruz!
                </h5>
            </div>
        </Layout>
    );
}

export default Home;
