import React, { useState } from 'react';
import { Button, Typography, Card, CardContent, Grid, Box } from '@mui/material';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

function QuizComponent() {
    const [testStarted, setTestStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selections, setSelections] = useState(Array(questions.length).fill(null));
    const [completed, setCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [blankCount, setBlankCount] = useState(0);


    const calculateScore = () => {
        let correct = 0;
        let incorrect = 0;
        let blank = 0;

        questions.forEach((question, index) => {
            if (selections[index] === question.correctAnswer) {
                correct += 1;
            } else if (selections[index] === null) {
                blank += 1;
            } else {
                incorrect += 1;
            }
        });

        const calculatedScore = (correct / questions.length) * 100;

        setScore(calculatedScore);
        setCorrectCount(correct);
        setIncorrectCount(incorrect);
        setBlankCount(blank);
        setCompleted(true);
    };

    return (
        <Layout>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    {!testStarted ? (
                        <div>
                            <Typography variant="h5">Bu test ile su hakkındaki bilgilerinizi ölçün!</Typography>
                            <Button variant="contained" color="primary" onClick={() => setTestStarted(true)}>
                                Teste Başla
                            </Button>
                        </div>
                    ) : (
                        <>
                            {!completed ? (
                                <Card style={{ margin: '20px', maxWidth: '800px', height: '500px', position: 'relative' }}>
                                    <CardContent style={{ marginLeft: '20px' }}>
                                        <Typography variant="h6" align="right">{currentQuestion + 1}/10</Typography>
                                        <Typography variant="h6" style={{ marginBottom: '20px' }}>{questions[currentQuestion].questionText}</Typography>
                                        <FormControl component="fieldset">
                                            <RadioGroup 
                                                value={selections[currentQuestion]}
                                                onChange={(event) => {
                                                    const newSelections = [...selections];
                                                    newSelections[currentQuestion] = event.target.value;
                                                    setSelections(newSelections);
                                                }}
                                                disabled={completed}
                                            >
                                                {questions[currentQuestion].options.map((option, optionIndex) => {
                                                    return (
                                                        <FormControlLabel 
                                                            key={optionIndex}
                                                            value={option}
                                                            control={<Radio color="default"/>}
                                                            label={option}
                                                        />
                                                    );
                                                })}
                                            </RadioGroup>
                                        </FormControl>
                                    </CardContent>
                                    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: '100%' }}>
                                        <Button 
                                            disabled={currentQuestion === 0} 
                                            onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                                            Önceki
                                        </Button>

                                        {currentQuestion < questions.length - 1 ? (
                                            <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                                                Sonraki
                                            </Button>
                                        ) : (
                                            <Button onClick={calculateScore}>
                                                Sınavı Bitir
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            ) : (
                                <Box mt={4} p={3} boxShadow={3} style={{ borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
                                    {completed && (
                                    <Box mt={4} p={3} boxShadow={3} style={{ borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
                                        <Typography variant="h4" align="center" style={{ fontWeight: 'bold', marginBottom: '20px' }}>Sonuçlar</Typography>
                                        <hr style={{ marginBottom: '20px' }} />
                                        <Grid container spacing={3} justify="center">
                                            <Grid item xs={12} md={4}>
                                                <Typography variant="h6" align="center">Doğru Cevaplar: {correctCount}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Typography variant="h6" align="center">Yanlış Cevaplar: {incorrectCount}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Typography variant="h6" align="center">Boş Cevaplar: {blankCount}</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5" align="center">Puanınız: {score}</Typography>
                                            </Grid>
                                        </Grid>
                                    <Grid item xs={12}>
                <hr style={{ marginTop: '20px', marginBottom: '10px' }} />
            {score < 50 && (
                <>
                    <Typography variant="h6" align="center" style={{ marginBottom: '10px' }}>Lütfen bilinçlenmek için bloglarımızı okuyunuz!</Typography>
                    <Button component={Link} to="/blog" variant="contained" color="primary" style={{ margin: '0 auto', display: 'block', maxWidth: 'fit-content' }}>
                        Blog Sayfasına Git
                    </Button>
                </>
            )}
            {score >= 50 && score < 80 && (
                <>
                    <Typography variant="h6" align="center" style={{ marginBottom: '10px' }}>Bilgilerin yeterli ama neden daha da çok şey öğrenmiyorsun?</Typography>
                    <Button component={Link} to="/blog" variant="contained" color="primary" style={{ margin: '0 auto', display: 'block', maxWidth: 'fit-content' }}>
                        Blog Sayfasına Git
                    </Button>
                </>
            )}
            {score >= 80 && (
                <>
                    <Typography variant="h6" align="center" style={{ marginBottom: '10px' }}>Tebrikler! Bilgileriniz mükemmel. Zevk amaçlı bloglarımızı okumak ister misiniz? :D</Typography>
                    <Button component={Link} to="/blog" variant="contained" color="primary" style={{ margin: '0 auto', display: 'block', maxWidth: 'fit-content' }}>
                        Blog Sayfasına Git
                    </Button>
                </>
            )}
        </Grid>
    </Box>
)}

                                </Box>
                            )}
                        </>
                    )}
                </Grid>
            </Grid>
        </Layout>
    );
}



const questions = [
    {
        questionText: 'Suyun aşağıdaki hangi alanlardan biri için en temel ihtiyaç olduğunu düşünüyorsunuz?',
        options: ['a) Ulaşım', 'b) Eğitim', 'c) İçme ve temel yaşam ihtiyaçları', 'd) Giyim'],
        correctAnswer: 'c) İçme ve temel yaşam ihtiyaçları',
        explanation: 'Suyun en temel ihtiyaç olduğu alanlardan biri içme ve temel yaşam ihtiyaçlarıdır.'
    },
    {
        questionText: 'İklim değişikliği su kaynaklarına hangi şekillerde etki edebilir?',
        options: ['a) Daha fazla kuraklık', 'b) Yoğun yağışlar ve sel', 'c) Deniz seviyelerinin yükselmesi', 'd) Rüzgar hızlarının artması'],
        correctAnswer: 'a) Daha fazla kuraklık',
        explanation: 'İklim değişikliği su kaynaklarına daha fazla kuraklık etki edebilir.'
    },
    {
        questionText: 'İklim değişikliği nedeniyle artan su kıtlığı hangi tür faaliyetler üzerinde olumsuz etki yapabilir?',
        options: ['a) Tarım', 'b) Ulaşım', 'c) Sanayi üretimi', 'd) Tümü'],
        correctAnswer: 'a) Tarım',
        explanation: 'İklim değişikliği nedeniyle artan su kıtlığı özellikle tarım faaliyetleri üzerinde olumsuz etki yapabilir.'
    },
    {
        questionText: 'Su kaynaklarını korumak ve sürdürülebilir kullanmak için hangi eylemler gereklidir?',
        options: ['a) Su tasarrufu yapmak', 'b) Su kaynaklarını temiz tutmak', 'c) Daha fazla su kuyusu açmak', 'd) Diğer'],
        correctAnswer: 'a) Su tasarrufu yapmak',
        explanation: 'Su kaynaklarını korumak ve sürdürülebilir kullanmak için su tasarrufu yapmak gibi önlemler gereklidir.'
    },
    {
        questionText: 'Hangi faktörler su kaynaklarının sürdürülebilirliğini etkileyebilir?',
        options: ['a) İklim değişikliği', 'b) İnsan faaliyetleri', 'c) Doğal afetler', 'd) Tümü'],
        correctAnswer: 'd) Tümü',
        explanation: 'Su kaynaklarının sürdürülebilirliğini etkileyen faktörler arasında iklim değişikliği, insan faaliyetleri ve doğal afetler yer alır.'
    },
    {
        questionText: 'Suyun sürdürülebilir kullanımının neden önemli olduğunu düşünüyorsunuz?',
        options: ['a) Çünkü su eğlence için kullanılmalıdır', 'b) Çünkü su sadece belirli bölgeler için önemlidir', 'c) Çünkü su kaynakları gelecekteki nesillerin yaşamını etkiler', 'd) Çünkü su sadece tarım için kullanılır'],
        correctAnswer: 'c) Çünkü su kaynakları gelecekteki nesillerin yaşamını etkiler',
        explanation: 'Suyun sürdürülebilir kullanımı önemlidir, çünkü su kaynakları gelecekteki nesillerin yaşamını etkiler.'
    },
    {
        questionText: 'Yeraltı su kaynakları ve yerüstü su kaynakları arasındaki temel fark nedir?',
        options: ['a) Yeraltı su kaynakları yerin altında bulunur, yerüstü su kaynakları ise yerin üstünde bulunur.', 'b) Yeraltı su kaynakları daha temizdir, yerüstü su kaynakları daha kirletilmiştir.', 'c) Yeraltı su kaynakları insanlar tarafından kullanılamaz, yerüstü su kaynakları insanlar için uygundur.', 'd) Bu iki tür su kaynağı arasında temel bir fark yoktur.'],
        correctAnswer: 'a) Yeraltı su kaynakları yerin altında bulunur, yerüstü su kaynakları ise yerin üstünde bulunur.',
        explanation: 'Yeraltı su kaynakları yerin altında bulunurken, yerüstü su kaynakları yerin üstünde bulunur.'
    },
    {
        questionText: 'Su tasarrufu yapmak için aşağıdaki hangi eylemi yapabilirsiniz?',
        options: ['a) Daha uzun süreli duş almak', 'b) Muslukları açık bırakmak', 'c) Daha az su tüketen cihazlar kullanmak', 'd) Diğer'],
        correctAnswer: 'c) Daha az su tüketen cihazlar kullanmak',
        explanation: 'Su tasarrufu yapmak için muslukları açık bırakmak yerine kapatmak önemlidir. Su tasarrufu için muslukları kapatmak ve daha az su tüketen cihazlar kullanmak önemlidir.'
    },
    {
        questionText: 'İklim değişikliği ve su kaynakları hakkında daha fazla bilgi edinmek için neler yapabilirsiniz?',
        options: ['a) İnternet üzerinde araştırma yapmak', 'b) Kitaplar okumak', 'c) Seminerlere katılmak', 'd) Tümü'],
        correctAnswer: 'd) Tümü',
        explanation: 'İklim değişikliği ve su kaynakları hakkında daha fazla bilgi edinmek için internet üzerinde araştırma yapmak, kitaplar okumak veya seminerlere katılmak gibi yöntemleri kullanabilirsiniz.'
    },
    {
        questionText: 'Suyun sürdürülebilir kullanımını teşvik etmek için hangi tür organizasyonlar veya projeler çalışmaktadır?',
        options: ['a) Sivil toplum kuruluşları', 'b) Hükümet kurumları', 'c) İklim değişikliği ile mücadele eden uluslararası kuruluşlar.', 'd) Tümü'],
        correctAnswer: 'd) Tümü',
        explanation: 'Suyun sürdürülebilir kullanımını teşvik etmek için sivil toplum kuruluşları, hükümet kurumları, İklim değişikliği ile mücadele eden uluslararası kuruluşlar gibi birçok farklı organizasyon ve projeler çalışmaktadır. Bu organizasyonlar ve projeler su kaynaklarının korunması ve sürdürülebilir kullanımı için çaba sarf etmektedirler.'
    },
]

export default QuizComponent;
