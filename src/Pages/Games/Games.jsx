import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import game from "../../assets/img/game.jpeg";
import answers from "../../assets/img/answers.jpeg";
import carts from "../../assets/img/carts.jpeg";


const Games = () => {
  // Oyunların bilgilerini bir array içinde saklayabiliriz
  const games = [
    { name: "Su ile Gelecek", imageUrl: game, pdfUrl: "PDF_URL1", btn: "Oyunu İNDİR" },
    { name: "Su Kartları", imageUrl: carts, pdfUrl: "PDF_URL2", btn: "Kartları İNDİR" },
    { name: "İklim Kartları", imageUrl: carts, pdfUrl: "PDF_URL3", btn: "Kartları İNDİR" },
    { name: "Cevap Anahtarı", imageUrl: answers, pdfUrl: "PDF_URL4", btn: "Cevapları İNDİR" },
  ];

  return (
    <Layout>
    <div style={{ margin: '20px', padding: '0 40px' }}>
      <Typography variant="h5" style={{ margin: '20px 0' }}>
      Projemiz, suyun önemini eğlenceli bir şekilde keşfetmek ve öğrenmek için tasarlanmış bir kutu oyununu içerir. Bu kutu oyunu, aşağıdaki özellikleri sunar:
Oyun Kuralları: Oyun, oyunculara su ve iklim değişikliği hakkında kişisel altyapılarını sorgulayan sorular sorar, doğru bilmeye dayalı olarak da oyuncuyu kazanmaya yaklaştırır.
Eğitici Kartlar: Oyuncuların bilgiye dayalı kararlar almasını teşvik etmek için eğitici kartlar içerir. Bu kartlar, oyuncuların su konusundaki bilinçlerini artırırken eğlenceli bir oyun deneyimi sunar
Strateji ve İşbirliği: Oyun, oyuncuların sürekli olarak bilgi alışverişinde olmasını sağlar ve bu devamlı olarak kişilerin sahip olduğu bilgiler ışığında oyuncuların farkındalık kazanmasına yol açar.
Kutu oyunumuz, aileler, arkadaşlar ve sınıflar için eğlenceli bir öğrenme aracıdır. Su konusundaki farkındalığı artırmak ve sürdürülebilir su kaynakları kullanımına katkıda bulunmak amacıyla tasarlandı. Oyuncuları, suyun dünya ve insanlık için ne kadar kritik olduğunu daha iyi anlamaya davet ediyoruz. Ayrıca bu oyunu web sitemiz üzerinden tamamen ücretsiz bir şekilde sunuyoruz!
      </Typography>

      <Grid container spacing={4}>
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={3} key={game.name}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={game.imageUrl}
                alt={game.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>{game.name}</Typography>
                <Button 
                variant="contained" 
                color="primary" 
                href={game.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                {game.btn}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>
    </Layout>
  );
};

export default Games;
