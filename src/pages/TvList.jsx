import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const tvInfo = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/uNTrRKIOyKYISthoeizghtXPEOK.jpg",
            "genre_ids": [
                16,
                10759,
                35,
                10765
            ],
            "id": 240411,
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "ダンダダン",
            "overview": "In a bet to prove whether ghosts or aliens exist, two high schoolers face terrifying paranormal threats, gain superpowers and maybe even fall in love?!",
            "popularity": 83.6284,
            "poster_path": "/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg",
            "first_air_date": "2024-10-04",
            "name": "Dan Da Dan",
            "vote_average": 8.627,
            "vote_count": 590
        },
        {
            "adult": false,
            "backdrop_path": "/iEg2LHsFV3vC6LywkBAL3c1n9PP.jpg",
            "genre_ids": [
                10767,
                35
            ],
            "id": 61818,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Late Night with Seth Meyers",
            "overview": "Seth Meyers, who is \"Saturday Night Live’s\" longest serving anchor on the show’s wildly popular \"Weekend Update,\" takes over as host of NBC’s \"Late Night\" — home to A-list celebrity guests, memorable comedy and the best in musical talent. As the Emmy Award-winning head writer for \"SNL,\" Meyers has established a reputation for sharp wit and perfectly timed comedy, and has gained fame for his spot-on jokes and satire. Meyers takes his departure from \"SNL\" to his new post at \"Late Night,\" as Jimmy Fallon moves to \"The Tonight Show\".",
            "popularity": 46.0696,
            "poster_path": "/rw0QaegwgKbRoB2CZe2lfewltT9.jpg",
            "first_air_date": "2014-02-25",
            "name": "Late Night with Seth Meyers",
            "vote_average": 5.323,
            "vote_count": 113
        },
        {
            "adult": false,
            "backdrop_path": "/tOpyQG9MAnFN4YiDgyk5NnCGa7X.jpg",
            "genre_ids": [
                18,
                10765
            ],
            "id": 243224,
            "origin_country": [
                "CN"
            ],
            "original_language": "zh",
            "original_name": "凡人修仙传",
            "overview": "Han Li, an ordinary, poor boy from a mountain village, joins a small martial arts sect by chance. Despite his mediocre talent, he eventually cultivates himself into an immortal through hard work and careful planning.",
            "popularity": 60.2278,
            "poster_path": "/kG8YooBxqX5BByifbA0wYeVVRYe.jpg",
            "first_air_date": "2025-07-27",
            "name": "The Immortal Ascension",
            "vote_average": 7,
            "vote_count": 15
        },
        {
            "adult": false,
            "backdrop_path": "/vgeDRVpSUa4Hvovg4C6dgm4dfUW.jpg",
            "genre_ids": [
                10766,
                18
            ],
            "id": 112470,
            "origin_country": [
                "FR"
            ],
            "original_language": "fr",
            "original_name": "Ici tout commence",
            "overview": "This television drama series is centered around the prestigious culinary school of renowned chef Auguste Armand. The show follows the lives of students and staff as they navigate the challenges and pressures of the culinary world—delving into their personal and professional lives, revealing secrets, rivalries, and complex relationships.",
            "popularity": 27.2551,
            "poster_path": "/x9HeaagUAyyGl1fQ6exQcpELBxP.jpg",
            "first_air_date": "2020-11-02",
            "name": "Ici tout commence",
            "vote_average": 6.8,
            "vote_count": 90
        },
        {
            "adult": false,
            "backdrop_path": "/s1dTt4M31q2HwD5Fkl1tf5tQzJg.jpg",
            "genre_ids": [
                10766
            ],
            "id": 206559,
            "origin_country": [
                "ZA"
            ],
            "original_language": "af",
            "original_name": "Binnelanders",
            "overview": "A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
            "popularity": 43.4685,
            "poster_path": "/3bzECfllho8PphdYujLUIuhncJD.jpg",
            "first_air_date": "2005-10-13",
            "name": "Binnelanders",
            "vote_average": 5.624,
            "vote_count": 97
        },
        {
            "adult": false,
            "backdrop_path": "/5sZvnK6hd3NC8MSI70avNzFVMGF.jpg",
            "genre_ids": [
                10767
            ],
            "id": 222764,
            "origin_country": [
                "BR"
            ],
            "original_language": "pt",
            "original_name": "Pânico Jovem Pan",
            "overview": "",
            "popularity": 32.443,
            "poster_path": "/p8u5IQWj7BZf6UGEKSW3nsycjWj.jpg",
            "first_air_date": "2015-01-26",
            "name": "Pânico Jovem Pan",
            "vote_average": 5.5,
            "vote_count": 4
        },
        {
            "adult": false,
            "backdrop_path": "/ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg",
            "genre_ids": [
                10751,
                35,
                18
            ],
            "id": 91759,
            "origin_country": [
                "HK"
            ],
            "original_language": "cn",
            "original_name": "愛·回家之開心速遞",
            "overview": "Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
            "popularity": 39.5208,
            "poster_path": "/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg",
            "first_air_date": "2017-02-06",
            "name": "Come Home Love: Lo and Behold",
            "vote_average": 5.4,
            "vote_count": 43
        },
        {
            "adult": false,
            "backdrop_path": "/kkfqNkGQR5og5sDjJTxTVmI9PW.jpg",
            "genre_ids": [
                80,
                18,
                10766
            ],
            "id": 72879,
            "origin_country": [
                "FR"
            ],
            "original_language": "fr",
            "original_name": "Demain nous appartient",
            "overview": "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
            "popularity": 22.0769,
            "poster_path": "/zMWldNZF0wS3L5XkDVFHxYhclcL.jpg",
            "first_air_date": "2017-07-17",
            "name": "Tomorrow Is Ours",
            "vote_average": 6.3,
            "vote_count": 67
        },
        {
            "adult": false,
            "backdrop_path": "/d0axpGojOqDag5lDa0eNSEtw11l.jpg",
            "genre_ids": [
                10765,
                10759,
                10762,
                35,
                16
            ],
            "id": 220150,
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "ポケットモンスター",
            "overview": "Follow Liko and Roy as they unravel the mysteries that surround them and encounter Friede, Captain Pikachu, Amethio, and others during their exciting adventures!",
            "popularity": 27.18,
            "poster_path": "/amemXW39lMbNBJFRMJ5W7q9mLP2.jpg",
            "first_air_date": "2023-04-14",
            "name": "Pokémon Horizons",
            "vote_average": 9,
            "vote_count": 85
        },
        {
            "adult": false,
            "backdrop_path": "/qZXhYuCZR6lkspbu400oWwh6uCs.jpg",
            "genre_ids": [
                16,
                35,
                10751,
                10762,
                10765
            ],
            "id": 194916,
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "ちいかわ",
            "overview": "The story follows the sometimes happy, sometimes sad, and a tad stressful daily life of \"some sort of small, cute creature\" (Nanka Chiisakute Kawaii Yatsu) known as Chiikawa. Chiikawa enjoys delicious food with bees and rabbits, toils hard every day for the rewards of work, and still maintains a smile.",
            "popularity": 21.6371,
            "poster_path": "/cXm3mxmlOWJZAyn5fqFI9JpARa3.jpg",
            "first_air_date": "2022-04-04",
            "name": "Chiikawa",
            "vote_average": 8.8,
            "vote_count": 8
        },
        {
            "adult": false,
            "backdrop_path": "/ynd225o8GuCahYGjHtFdEt8Xizm.jpg",
            "genre_ids": [
                10766
            ],
            "id": 235484,
            "origin_country": [
                "ZA"
            ],
            "original_language": "af",
            "original_name": "Suidooster",
            "overview": "Suidooster is a South African television soap opera produced by Suidooster Films which revolves around a matriarch, her family, friends and the people of Suidooster, a small shopping and business centre in the fictional Cape Town suburb of Ruiterbosch.",
            "popularity": 20.9152,
            "poster_path": "/naCgSiacvV685kait6fBvhVhdce.jpg",
            "first_air_date": "2015-11-16",
            "name": "Suidooster",
            "vote_average": 7.217,
            "vote_count": 23
        },
        {
            "adult": false,
            "backdrop_path": "/oBUwRT7TbhTeFFTguY1s8RmmJpW.jpg",
            "genre_ids": [
                10764
            ],
            "id": 10160,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Big Brother",
            "overview": "American version of the reality game show which follows a group of HouseGuests living together 24 hours a day in the \"Big Brother\" house, isolated from the outside world but under constant surveillance with no privacy for three months.",
            "popularity": 24.3719,
            "poster_path": "/q2TMOpJITXP2sHd6CrBmO7FvYk1.jpg",
            "first_air_date": "2000-07-05",
            "name": "Big Brother",
            "vote_average": 5.032,
            "vote_count": 248
        },
        {
            "adult": false,
            "backdrop_path": "/upD2G9Z7W07w47c7B8ZqLqbTDc5.jpg",
            "genre_ids": [
                10767
            ],
            "id": 1900,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "LIVE with Kelly and Mark",
            "overview": "A morning talk show with A-list celebrity guests, top-notch performances and one-of-a-kind segments that are unrivaled on daytime television, plus spontaneous, hilarious and unpredictable talk.",
            "popularity": 19.0651,
            "poster_path": "/hBkyypWN3EcOzkozatiCm5VeaG.jpg",
            "first_air_date": "1988-09-05",
            "name": "LIVE with Kelly and Mark",
            "vote_average": 5.543,
            "vote_count": 47
        },
        {
            "adult": false,
            "backdrop_path": "/sQhr9GDYiA56zZoaw25qjcGsFuE.jpg",
            "genre_ids": [
                16,
                9648,
                10759
            ],
            "id": 253811,
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "桃源暗鬼",
            "overview": "After a Momotaro assassin suddenly kills his adoptive father, Shiki vows to avenge him. But first, he must learn to control his newly awakened Oni blood.",
            "popularity": 26.3139,
            "poster_path": "/vnasRNhwT5M3OvTAMzYn4i5fQcT.jpg",
            "first_air_date": "2025-07-11",
            "name": "Tougen Anki",
            "vote_average": 8.6,
            "vote_count": 15
        },
        {
            "adult": false,
            "backdrop_path": "/qwoFxyMtArLpZZzG3mmRDEjGgCM.jpg",
            "genre_ids": [
                18,
                10766
            ],
            "id": 239526,
            "origin_country": [
                "ES"
            ],
            "original_language": "es",
            "original_name": "Sueños de libertad",
            "overview": "Begoña Montes is a woman who lives trapped in a toxic marriage and seeks the long-awaited freedom in Spain in 1958.",
            "popularity": 21.0213,
            "poster_path": "/nlZZPRCQo1H4e32wsQll2VWxEDt.jpg",
            "first_air_date": "2024-02-25",
            "name": "Dreams of Liberty",
            "vote_average": 6.2,
            "vote_count": 13
        },
        {
            "adult": false,
            "backdrop_path": "/5APjn4LnV5wWk5DXq7ZewT6zzP1.jpg",
            "genre_ids": [
                10766
            ],
            "id": 291,
            "origin_country": [
                "GB"
            ],
            "original_language": "en",
            "original_name": "Coronation Street",
            "overview": "The residents of Coronation Street are ordinary, working-class people, and the show follows them through regular social and family interactions at home, in the workplace, and in their local pub, the Rovers Return Inn. Britain's longest-running soap.",
            "popularity": 25.9632,
            "poster_path": "/5x1HXqYqPyYw7oc7Isu1lvVmwRP.jpg",
            "first_air_date": "1960-12-09",
            "name": "Coronation Street",
            "vote_average": 5.4,
            "vote_count": 112
        },
        {
            "adult": false,
            "backdrop_path": "/rALzi6BHoWdXuHjbOhzGjIKfhV4.jpg",
            "genre_ids": [
                35,
                10764,
                10767
            ],
            "id": 62974,
            "origin_country": [
                "GB"
            ],
            "original_language": "en",
            "original_name": "8 Out of 10 Cats Does Countdown",
            "overview": "Jimmy Carr hosts proceedings as the 8 Out of 10 Cats crew take over the words and numbers quiz.",
            "popularity": 20.2199,
            "poster_path": "/qDbS5uTAckP8ddg1ujXyuXzSYWR.jpg",
            "first_air_date": "2013-04-12",
            "name": "8 Out of 10 Cats Does Countdown",
            "vote_average": 7.3,
            "vote_count": 93
        },
        {
            "adult": false,
            "backdrop_path": "/e3BNVf1QcRNLzyiWSWScw6SLG9q.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 252568,
            "origin_country": [
                "CN"
            ],
            "original_language": "zh",
            "original_name": "暗潮缉凶",
            "overview": "At the former Xuri Factory, a dismembered female body is discovered in an abandoned sewage pit. Veteran detective Lian Haiping and rookie officer Shi Qiangfeng, despite their differences, must work together to solve the case. Their investigation reveals unexpected social issues and brings to light an old case that complicates their personal and professional lives.",
            "popularity": 23.8413,
            "poster_path": "/yGZwGbgoZGYx6aBAhQIKXZ4Xq1y.jpg",
            "first_air_date": "2025-07-31",
            "name": "Beneath the Undertow",
            "vote_average": 8,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/aCbOj4wc6vQUUVNKppssj2PYUy0.jpg",
            "genre_ids": [
                10765
            ],
            "id": 96580,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Resident Alien",
            "overview": "Crash-landed alien Harry takes on the identity of a small-town Colorado doctor. Arriving with a secret mission, he starts off living a simple life…but things get a bit rocky when he’s roped into solving a local murder and realizes he needs to assimilate into his new world. As he does, he begins to wrestle with the moral dilemma of his mission and asking the big life questions like: “Are human beings worth saving?” and “Why do they fold their pizza before eating it?”",
            "popularity": 25.9525,
            "poster_path": "/5van3ktOTqWr5lcixh5aR8NlqqW.jpg",
            "first_air_date": "2021-01-27",
            "name": "Resident Alien",
            "vote_average": 7.8,
            "vote_count": 845
        },
        {
            "adult": false,
            "backdrop_path": "/f4doERlltpAOUw3Rg2Hjp7LJZA0.jpg",
            "genre_ids": [
                10765,
                16,
                10759
            ],
            "id": 88639,
            "origin_country": [
                "CN"
            ],
            "original_language": "zh",
            "original_name": "灵剑尊",
            "overview": "",
            "popularity": 14.4973,
            "poster_path": "/5k9OpfDgcEP4tOIlXzTAcYOYSQp.jpg",
            "first_air_date": "2019-01-15",
            "name": "Spirit Sword Sovereign",
            "vote_average": 9,
            "vote_count": 2
        }
    ],
    "total_pages": 15,
    "total_results": 286
}



const TvList = () => {

    const [tvs, setTvs] = useState([])

    useEffect(() => {
        setTvs(tvInfo.results)
    }, []);


    return (
        <Container>
            <Row>
            {tvs?.map((tv) => (
                <Col className={"mt-5"}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+tv.poster_path} />
                    <Card.Body>
                        <Card.Title>{tv.name}</Card.Title>
                        <Card.Text>
                            {tv.overview.slice(0,120)}
                        </Card.Text>
                        {tv?.genre_ids?.map((m) => (
                            <h5>{m}</h5>
                        ))}
                        {tv?.origin_country?.map((c) => (
                            <h5>{c}</h5>
                        ))}
                        <Link to={`/detail/${tv.id}`}>
                        <Button variant="primary">Go somewhere</Button>
                        </Link>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>

        </Container>
    );
};

export default TvList;